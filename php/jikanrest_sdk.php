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

    // Idiomatic facade: $client->anime()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Anime() (PHP method
    // names are case-insensitive).
    public function anime($data = null)
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

    // Idiomatic facade: $client->character()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Character() (PHP method
    // names are case-insensitive).
    public function character($data = null)
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

    // Idiomatic facade: $client->club()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Club() (PHP method
    // names are case-insensitive).
    public function club($data = null)
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

    // Idiomatic facade: $client->external()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias External() (PHP method
    // names are case-insensitive).
    public function external($data = null)
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

    // Idiomatic facade: $client->genre()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Genre() (PHP method
    // names are case-insensitive).
    public function genre($data = null)
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

    // Idiomatic facade: $client->magazine()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Magazine() (PHP method
    // names are case-insensitive).
    public function magazine($data = null)
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

    // Idiomatic facade: $client->manga()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Manga() (PHP method
    // names are case-insensitive).
    public function manga($data = null)
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

    // Idiomatic facade: $client->people_search()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias PeopleSearch() (PHP method
    // names are case-insensitive).
    public function people_search($data = null)
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

    // Idiomatic facade: $client->person()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Person() (PHP method
    // names are case-insensitive).
    public function person($data = null)
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

    // Idiomatic facade: $client->producer()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Producer() (PHP method
    // names are case-insensitive).
    public function producer($data = null)
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

    // Idiomatic facade: $client->random()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Random() (PHP method
    // names are case-insensitive).
    public function random($data = null)
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

    // Idiomatic facade: $client->recommendation()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Recommendation() (PHP method
    // names are case-insensitive).
    public function recommendation($data = null)
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

    // Idiomatic facade: $client->review()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Review() (PHP method
    // names are case-insensitive).
    public function review($data = null)
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

    // Idiomatic facade: $client->schedule()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Schedule() (PHP method
    // names are case-insensitive).
    public function schedule($data = null)
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

    // Idiomatic facade: $client->season()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Season() (PHP method
    // names are case-insensitive).
    public function season($data = null)
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

    // Idiomatic facade: $client->top()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Top() (PHP method
    // names are case-insensitive).
    public function top($data = null)
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

    // Idiomatic facade: $client->user()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias User() (PHP method
    // names are case-insensitive).
    public function user($data = null)
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

    // Idiomatic facade: $client->user_about()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias UserAbout() (PHP method
    // names are case-insensitive).
    public function user_about($data = null)
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

    // Idiomatic facade: $client->user_club()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias UserClub() (PHP method
    // names are case-insensitive).
    public function user_club($data = null)
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

    // Idiomatic facade: $client->user_friend()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias UserFriend() (PHP method
    // names are case-insensitive).
    public function user_friend($data = null)
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

    // Idiomatic facade: $client->user_history()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias UserHistory() (PHP method
    // names are case-insensitive).
    public function user_history($data = null)
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

    // Idiomatic facade: $client->user_statistic()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias UserStatistic() (PHP method
    // names are case-insensitive).
    public function user_statistic($data = null)
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

    // Idiomatic facade: $client->user_update()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias UserUpdate() (PHP method
    // names are case-insensitive).
    public function user_update($data = null)
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

    // Idiomatic facade: $client->watch_episode()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias WatchEpisode() (PHP method
    // names are case-insensitive).
    public function watch_episode($data = null)
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

    // Idiomatic facade: $client->watch_promo()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias WatchPromo() (PHP method
    // names are case-insensitive).
    public function watch_promo($data = null)
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
