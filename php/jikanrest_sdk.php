<?php
declare(strict_types=1);

// JikanRest SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

class JikanRestSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new JikanRestUtility();
        $this->_utility = $utility;

        $config = JikanRestConfig::make_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Add features from config.
        $feature_opts = JikanRestHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $items = Struct::items($feature_opts);
            if ($items) {
                foreach ($items as $item) {
                    $fname = $item[0];
                    $fopts = JikanRestHelpers::to_map($item[1]);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        ($utility->feature_add)($this->_rootctx, JikanRestFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        $extend_val = Struct::getprop($this->options, "extend");
        if (is_array($extend_val)) {
            foreach ($extend_val as $f) {
                if (is_object($f) && method_exists($f, 'get_name')) {
                    ($utility->feature_add)($this->_rootctx, $f);
                }
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return JikanRestUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): array
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = JikanRestHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = JikanRestHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = JikanRestHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new JikanRestSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return [null, $err];
        }

        return ($utility->make_fetch_def)($ctx);
    }

    public function direct(array $fetchargs = []): array
    {
        $utility = $this->_utility;

        [$fetchdef, $err] = $this->prepare($fetchargs);
        if ($err) {
            return [["ok" => false, "err" => $err], null];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = JikanRestHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return [["ok" => false, "err" => $fetch_err], null];
        }

        if ($fetched === null) {
            return [[
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ], null];
        }

        if (is_array($fetched)) {
            $status = JikanRestHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [[
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ], null];
        }

        return [[
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ], null];
    }


    public function Anime($data = null)
    {
        require_once __DIR__ . '/entity/anime_entity.php';
        return new AnimeEntity($this, $data);
    }


    public function Character($data = null)
    {
        require_once __DIR__ . '/entity/character_entity.php';
        return new CharacterEntity($this, $data);
    }


    public function Club($data = null)
    {
        require_once __DIR__ . '/entity/club_entity.php';
        return new ClubEntity($this, $data);
    }


    public function External($data = null)
    {
        require_once __DIR__ . '/entity/external_entity.php';
        return new ExternalEntity($this, $data);
    }


    public function Genre($data = null)
    {
        require_once __DIR__ . '/entity/genre_entity.php';
        return new GenreEntity($this, $data);
    }


    public function Magazine($data = null)
    {
        require_once __DIR__ . '/entity/magazine_entity.php';
        return new MagazineEntity($this, $data);
    }


    public function Manga($data = null)
    {
        require_once __DIR__ . '/entity/manga_entity.php';
        return new MangaEntity($this, $data);
    }


    public function PeopleSearch($data = null)
    {
        require_once __DIR__ . '/entity/people_search_entity.php';
        return new PeopleSearchEntity($this, $data);
    }


    public function Person($data = null)
    {
        require_once __DIR__ . '/entity/person_entity.php';
        return new PersonEntity($this, $data);
    }


    public function Producer($data = null)
    {
        require_once __DIR__ . '/entity/producer_entity.php';
        return new ProducerEntity($this, $data);
    }


    public function Random($data = null)
    {
        require_once __DIR__ . '/entity/random_entity.php';
        return new RandomEntity($this, $data);
    }


    public function Recommendation($data = null)
    {
        require_once __DIR__ . '/entity/recommendation_entity.php';
        return new RecommendationEntity($this, $data);
    }


    public function Review($data = null)
    {
        require_once __DIR__ . '/entity/review_entity.php';
        return new ReviewEntity($this, $data);
    }


    public function Schedule($data = null)
    {
        require_once __DIR__ . '/entity/schedule_entity.php';
        return new ScheduleEntity($this, $data);
    }


    public function Season($data = null)
    {
        require_once __DIR__ . '/entity/season_entity.php';
        return new SeasonEntity($this, $data);
    }


    public function Top($data = null)
    {
        require_once __DIR__ . '/entity/top_entity.php';
        return new TopEntity($this, $data);
    }


    public function User($data = null)
    {
        require_once __DIR__ . '/entity/user_entity.php';
        return new UserEntity($this, $data);
    }


    public function UserAbout($data = null)
    {
        require_once __DIR__ . '/entity/user_about_entity.php';
        return new UserAboutEntity($this, $data);
    }


    public function UserClub($data = null)
    {
        require_once __DIR__ . '/entity/user_club_entity.php';
        return new UserClubEntity($this, $data);
    }


    public function UserFriend($data = null)
    {
        require_once __DIR__ . '/entity/user_friend_entity.php';
        return new UserFriendEntity($this, $data);
    }


    public function UserHistory($data = null)
    {
        require_once __DIR__ . '/entity/user_history_entity.php';
        return new UserHistoryEntity($this, $data);
    }


    public function UserStatistic($data = null)
    {
        require_once __DIR__ . '/entity/user_statistic_entity.php';
        return new UserStatisticEntity($this, $data);
    }


    public function UserUpdate($data = null)
    {
        require_once __DIR__ . '/entity/user_update_entity.php';
        return new UserUpdateEntity($this, $data);
    }


    public function WatchEpisode($data = null)
    {
        require_once __DIR__ . '/entity/watch_episode_entity.php';
        return new WatchEpisodeEntity($this, $data);
    }


    public function WatchPromo($data = null)
    {
        require_once __DIR__ . '/entity/watch_promo_entity.php';
        return new WatchPromoEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new JikanRestSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
