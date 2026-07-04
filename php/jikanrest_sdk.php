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

    public function prepare(array $fetchargs = []): mixed
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
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    public function direct(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
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
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
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

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }


    private $_anime = null;

    // Canonical facade: $client->Anime()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->anime()
    // resolves here too.
    public function Anime($data = null)
    {
        require_once __DIR__ . '/entity/anime_entity.php';
        if ($data === null) {
            if ($this->_anime === null) {
                $this->_anime = new AnimeEntity($this, null);
            }
            return $this->_anime;
        }
        return new AnimeEntity($this, $data);
    }


    private $_character = null;

    // Canonical facade: $client->Character()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->character()
    // resolves here too.
    public function Character($data = null)
    {
        require_once __DIR__ . '/entity/character_entity.php';
        if ($data === null) {
            if ($this->_character === null) {
                $this->_character = new CharacterEntity($this, null);
            }
            return $this->_character;
        }
        return new CharacterEntity($this, $data);
    }


    private $_club = null;

    // Canonical facade: $client->Club()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->club()
    // resolves here too.
    public function Club($data = null)
    {
        require_once __DIR__ . '/entity/club_entity.php';
        if ($data === null) {
            if ($this->_club === null) {
                $this->_club = new ClubEntity($this, null);
            }
            return $this->_club;
        }
        return new ClubEntity($this, $data);
    }


    private $_external = null;

    // Canonical facade: $client->External()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->external()
    // resolves here too.
    public function External($data = null)
    {
        require_once __DIR__ . '/entity/external_entity.php';
        if ($data === null) {
            if ($this->_external === null) {
                $this->_external = new ExternalEntity($this, null);
            }
            return $this->_external;
        }
        return new ExternalEntity($this, $data);
    }


    private $_genre = null;

    // Canonical facade: $client->Genre()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->genre()
    // resolves here too.
    public function Genre($data = null)
    {
        require_once __DIR__ . '/entity/genre_entity.php';
        if ($data === null) {
            if ($this->_genre === null) {
                $this->_genre = new GenreEntity($this, null);
            }
            return $this->_genre;
        }
        return new GenreEntity($this, $data);
    }


    private $_magazine = null;

    // Canonical facade: $client->Magazine()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->magazine()
    // resolves here too.
    public function Magazine($data = null)
    {
        require_once __DIR__ . '/entity/magazine_entity.php';
        if ($data === null) {
            if ($this->_magazine === null) {
                $this->_magazine = new MagazineEntity($this, null);
            }
            return $this->_magazine;
        }
        return new MagazineEntity($this, $data);
    }


    private $_manga = null;

    // Canonical facade: $client->Manga()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->manga()
    // resolves here too.
    public function Manga($data = null)
    {
        require_once __DIR__ . '/entity/manga_entity.php';
        if ($data === null) {
            if ($this->_manga === null) {
                $this->_manga = new MangaEntity($this, null);
            }
            return $this->_manga;
        }
        return new MangaEntity($this, $data);
    }


    private $_people_search = null;

    // Canonical facade: $client->PeopleSearch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->people_search()
    // resolves here too.
    public function PeopleSearch($data = null)
    {
        require_once __DIR__ . '/entity/people_search_entity.php';
        if ($data === null) {
            if ($this->_people_search === null) {
                $this->_people_search = new PeopleSearchEntity($this, null);
            }
            return $this->_people_search;
        }
        return new PeopleSearchEntity($this, $data);
    }


    private $_person = null;

    // Canonical facade: $client->Person()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->person()
    // resolves here too.
    public function Person($data = null)
    {
        require_once __DIR__ . '/entity/person_entity.php';
        if ($data === null) {
            if ($this->_person === null) {
                $this->_person = new PersonEntity($this, null);
            }
            return $this->_person;
        }
        return new PersonEntity($this, $data);
    }


    private $_producer = null;

    // Canonical facade: $client->Producer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->producer()
    // resolves here too.
    public function Producer($data = null)
    {
        require_once __DIR__ . '/entity/producer_entity.php';
        if ($data === null) {
            if ($this->_producer === null) {
                $this->_producer = new ProducerEntity($this, null);
            }
            return $this->_producer;
        }
        return new ProducerEntity($this, $data);
    }


    private $_random = null;

    // Canonical facade: $client->Random()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->random()
    // resolves here too.
    public function Random($data = null)
    {
        require_once __DIR__ . '/entity/random_entity.php';
        if ($data === null) {
            if ($this->_random === null) {
                $this->_random = new RandomEntity($this, null);
            }
            return $this->_random;
        }
        return new RandomEntity($this, $data);
    }


    private $_recommendation = null;

    // Canonical facade: $client->Recommendation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->recommendation()
    // resolves here too.
    public function Recommendation($data = null)
    {
        require_once __DIR__ . '/entity/recommendation_entity.php';
        if ($data === null) {
            if ($this->_recommendation === null) {
                $this->_recommendation = new RecommendationEntity($this, null);
            }
            return $this->_recommendation;
        }
        return new RecommendationEntity($this, $data);
    }


    private $_review = null;

    // Canonical facade: $client->Review()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->review()
    // resolves here too.
    public function Review($data = null)
    {
        require_once __DIR__ . '/entity/review_entity.php';
        if ($data === null) {
            if ($this->_review === null) {
                $this->_review = new ReviewEntity($this, null);
            }
            return $this->_review;
        }
        return new ReviewEntity($this, $data);
    }


    private $_schedule = null;

    // Canonical facade: $client->Schedule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->schedule()
    // resolves here too.
    public function Schedule($data = null)
    {
        require_once __DIR__ . '/entity/schedule_entity.php';
        if ($data === null) {
            if ($this->_schedule === null) {
                $this->_schedule = new ScheduleEntity($this, null);
            }
            return $this->_schedule;
        }
        return new ScheduleEntity($this, $data);
    }


    private $_season = null;

    // Canonical facade: $client->Season()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->season()
    // resolves here too.
    public function Season($data = null)
    {
        require_once __DIR__ . '/entity/season_entity.php';
        if ($data === null) {
            if ($this->_season === null) {
                $this->_season = new SeasonEntity($this, null);
            }
            return $this->_season;
        }
        return new SeasonEntity($this, $data);
    }


    private $_top = null;

    // Canonical facade: $client->Top()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->top()
    // resolves here too.
    public function Top($data = null)
    {
        require_once __DIR__ . '/entity/top_entity.php';
        if ($data === null) {
            if ($this->_top === null) {
                $this->_top = new TopEntity($this, null);
            }
            return $this->_top;
        }
        return new TopEntity($this, $data);
    }


    private $_user = null;

    // Canonical facade: $client->User()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user()
    // resolves here too.
    public function User($data = null)
    {
        require_once __DIR__ . '/entity/user_entity.php';
        if ($data === null) {
            if ($this->_user === null) {
                $this->_user = new UserEntity($this, null);
            }
            return $this->_user;
        }
        return new UserEntity($this, $data);
    }


    private $_user_about = null;

    // Canonical facade: $client->UserAbout()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_about()
    // resolves here too.
    public function UserAbout($data = null)
    {
        require_once __DIR__ . '/entity/user_about_entity.php';
        if ($data === null) {
            if ($this->_user_about === null) {
                $this->_user_about = new UserAboutEntity($this, null);
            }
            return $this->_user_about;
        }
        return new UserAboutEntity($this, $data);
    }


    private $_user_club = null;

    // Canonical facade: $client->UserClub()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_club()
    // resolves here too.
    public function UserClub($data = null)
    {
        require_once __DIR__ . '/entity/user_club_entity.php';
        if ($data === null) {
            if ($this->_user_club === null) {
                $this->_user_club = new UserClubEntity($this, null);
            }
            return $this->_user_club;
        }
        return new UserClubEntity($this, $data);
    }


    private $_user_friend = null;

    // Canonical facade: $client->UserFriend()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_friend()
    // resolves here too.
    public function UserFriend($data = null)
    {
        require_once __DIR__ . '/entity/user_friend_entity.php';
        if ($data === null) {
            if ($this->_user_friend === null) {
                $this->_user_friend = new UserFriendEntity($this, null);
            }
            return $this->_user_friend;
        }
        return new UserFriendEntity($this, $data);
    }


    private $_user_history = null;

    // Canonical facade: $client->UserHistory()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_history()
    // resolves here too.
    public function UserHistory($data = null)
    {
        require_once __DIR__ . '/entity/user_history_entity.php';
        if ($data === null) {
            if ($this->_user_history === null) {
                $this->_user_history = new UserHistoryEntity($this, null);
            }
            return $this->_user_history;
        }
        return new UserHistoryEntity($this, $data);
    }


    private $_user_statistic = null;

    // Canonical facade: $client->UserStatistic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_statistic()
    // resolves here too.
    public function UserStatistic($data = null)
    {
        require_once __DIR__ . '/entity/user_statistic_entity.php';
        if ($data === null) {
            if ($this->_user_statistic === null) {
                $this->_user_statistic = new UserStatisticEntity($this, null);
            }
            return $this->_user_statistic;
        }
        return new UserStatisticEntity($this, $data);
    }


    private $_user_update = null;

    // Canonical facade: $client->UserUpdate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_update()
    // resolves here too.
    public function UserUpdate($data = null)
    {
        require_once __DIR__ . '/entity/user_update_entity.php';
        if ($data === null) {
            if ($this->_user_update === null) {
                $this->_user_update = new UserUpdateEntity($this, null);
            }
            return $this->_user_update;
        }
        return new UserUpdateEntity($this, $data);
    }


    private $_watch_episode = null;

    // Canonical facade: $client->WatchEpisode()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->watch_episode()
    // resolves here too.
    public function WatchEpisode($data = null)
    {
        require_once __DIR__ . '/entity/watch_episode_entity.php';
        if ($data === null) {
            if ($this->_watch_episode === null) {
                $this->_watch_episode = new WatchEpisodeEntity($this, null);
            }
            return $this->_watch_episode;
        }
        return new WatchEpisodeEntity($this, $data);
    }


    private $_watch_promo = null;

    // Canonical facade: $client->WatchPromo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->watch_promo()
    // resolves here too.
    public function WatchPromo($data = null)
    {
        require_once __DIR__ . '/entity/watch_promo_entity.php';
        if ($data === null) {
            if ($this->_watch_promo === null) {
                $this->_watch_promo = new WatchPromoEntity($this, null);
            }
            return $this->_watch_promo;
        }
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
