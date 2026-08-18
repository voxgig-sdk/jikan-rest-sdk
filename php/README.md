# JikanRest PHP SDK



The PHP SDK for the JikanRest API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Anime()` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/jikan-rest-sdk/releases](https://github.com/voxgig-sdk/jikan-rest-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'jikanrest_sdk.php';

$client = new JikanRestSDK();
```

### 2. List anime records

```php
try {
    // list() returns an array of Anime records — iterate directly.
    $animes = $client->Anime()->list();
    foreach ($animes as $item) {
        echo $item["aired"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load a season

Season is nested under season, so provide the `season`.

```php
try {
    // load() returns the ENTITY — call data_get() for the Season record (throws on error).
    $season = $client->Season()->load(["season" => "example_season", "year" => 1]);
    print_r($season);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $externals = $client->External()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = JikanRestSDK::test();

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$external = $client->External()->list();
print_r($external);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new JikanRestSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
JIKAN_REST_TEST_LIVE=TRUE
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### JikanRestSDK

```php
require_once 'jikanrest_sdk.php';
$client = new JikanRestSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = JikanRestSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### JikanRestSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Anime` | `($data): AnimeEntity` | Create an Anime entity instance. |
| `Character` | `($data): CharacterEntity` | Create a Character entity instance. |
| `Club` | `($data): ClubEntity` | Create a Club entity instance. |
| `External` | `($data): ExternalEntity` | Create an External entity instance. |
| `Genre` | `($data): GenreEntity` | Create a Genre entity instance. |
| `Magazine` | `($data): MagazineEntity` | Create a Magazine entity instance. |
| `Manga` | `($data): MangaEntity` | Create a Manga entity instance. |
| `PeopleSearch` | `($data): PeopleSearchEntity` | Create a PeopleSearch entity instance. |
| `Person` | `($data): PersonEntity` | Create a Person entity instance. |
| `Producer` | `($data): ProducerEntity` | Create a Producer entity instance. |
| `Random` | `($data): RandomEntity` | Create a Random entity instance. |
| `Recommendation` | `($data): RecommendationEntity` | Create a Recommendation entity instance. |
| `Review` | `($data): ReviewEntity` | Create a Review entity instance. |
| `Schedule` | `($data): ScheduleEntity` | Create a Schedule entity instance. |
| `Season` | `($data): SeasonEntity` | Create a Season entity instance. |
| `Top` | `($data): TopEntity` | Create a Top entity instance. |
| `User` | `($data): UserEntity` | Create an User entity instance. |
| `UserAbout` | `($data): UserAboutEntity` | Create an UserAbout entity instance. |
| `UserClub` | `($data): UserClubEntity` | Create an UserClub entity instance. |
| `UserFriend` | `($data): UserFriendEntity` | Create an UserFriend entity instance. |
| `UserHistory` | `($data): UserHistoryEntity` | Create an UserHistory entity instance. |
| `UserStatistic` | `($data): UserStatisticEntity` | Create an UserStatistic entity instance. |
| `UserUpdate` | `($data): UserUpdateEntity` | Create an UserUpdate entity instance. |
| `WatchEpisode` | `($data): WatchEpisodeEntity` | Create a WatchEpisode entity instance. |
| `WatchPromo` | `($data): WatchPromoEntity` | Create a WatchPromo entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Anime

| Field | Description |
| --- | --- |
| `aired` |  |
| `airing` |  |
| `approved` |  |
| `author_url` |  |
| `author_username` |  |
| `background` |  |
| `broadcast` |  |
| `character` |  |
| `comments` |  |
| `completed` |  |
| `data` |  |
| `date` |  |
| `demographics` |  |
| `dropped` |  |
| `duration` |  |
| `endings` |  |
| `entry` |  |
| `episodes` |  |
| `explicit_genres` |  |
| `external` |  |
| `favorites` |  |
| `filler` |  |
| `genres` |  |
| `images` |  |
| `last_comment` |  |
| `licensors` |  |
| `mal_id` |  |
| `members` |  |
| `moreinfo` |  |
| `music_videos` |  |
| `name` |  |
| `on_hold` |  |
| `openings` |  |
| `pagination` |  |
| `person` |  |
| `plan_to_watch` |  |
| `popularity` |  |
| `positions` |  |
| `producers` |  |
| `promo` |  |
| `rank` |  |
| `rating` |  |
| `recap` |  |
| `relation` |  |
| `relations` |  |
| `role` |  |
| `score` |  |
| `scored_by` |  |
| `scores` |  |
| `season` |  |
| `source` |  |
| `status` |  |
| `streaming` |  |
| `studios` |  |
| `synopsis` |  |
| `theme` |  |
| `themes` |  |
| `title` |  |
| `title_english` |  |
| `title_japanese` |  |
| `title_romanji` |  |
| `title_synonyms` |  |
| `titles` |  |
| `total` |  |
| `trailer` |  |
| `type` |  |
| `url` |  |
| `voice_actors` |  |
| `watching` |  |
| `year` |  |

Operations: List, Load.

API path: `/anime`

#### Character

| Field | Description |
| --- | --- |
| `about` |  |
| `anime` |  |
| `data` |  |
| `favorites` |  |
| `image_url` |  |
| `images` |  |
| `language` |  |
| `large_image_url` |  |
| `mal_id` |  |
| `manga` |  |
| `name` |  |
| `name_kanji` |  |
| `nicknames` |  |
| `pagination` |  |
| `person` |  |
| `role` |  |
| `url` |  |
| `voices` |  |

Operations: List, Load.

API path: `/characters`

#### Club

| Field | Description |
| --- | --- |
| `access` |  |
| `anime` |  |
| `category` |  |
| `characters` |  |
| `created` |  |
| `data` |  |
| `images` |  |
| `mal_id` |  |
| `manga` |  |
| `members` |  |
| `name` |  |
| `pagination` |  |
| `url` |  |
| `username` |  |

Operations: List, Load.

API path: `/clubs`

#### External

| Field | Description |
| --- | --- |
| `name` |  |
| `url` |  |

Operations: List.

API path: `/users/{username}/external`

#### Genre

| Field | Description |
| --- | --- |
| `count` |  |
| `mal_id` |  |
| `name` |  |
| `url` |  |

Operations: List.

API path: `/genres/anime`

#### Magazine

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

Operations: List.

API path: `/magazines`

#### Manga

| Field | Description |
| --- | --- |
| `approved` |  |
| `author_url` |  |
| `author_username` |  |
| `authors` |  |
| `background` |  |
| `chapters` |  |
| `character` |  |
| `comments` |  |
| `completed` |  |
| `data` |  |
| `date` |  |
| `demographics` |  |
| `dropped` |  |
| `entry` |  |
| `explicit_genres` |  |
| `external` |  |
| `favorites` |  |
| `genres` |  |
| `images` |  |
| `jpg` |  |
| `last_comment` |  |
| `mal_id` |  |
| `members` |  |
| `moreinfo` |  |
| `name` |  |
| `on_hold` |  |
| `pagination` |  |
| `plan_to_read` |  |
| `popularity` |  |
| `published` |  |
| `publishing` |  |
| `rank` |  |
| `reading` |  |
| `relation` |  |
| `relations` |  |
| `role` |  |
| `score` |  |
| `scored_by` |  |
| `scores` |  |
| `serializations` |  |
| `status` |  |
| `synopsis` |  |
| `themes` |  |
| `title` |  |
| `title_english` |  |
| `title_japanese` |  |
| `title_synonyms` |  |
| `titles` |  |
| `total` |  |
| `type` |  |
| `url` |  |
| `volumes` |  |
| `webp` |  |

Operations: List, Load.

API path: `/manga`

#### PeopleSearch

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

Operations: List.

API path: `/top/people`

#### Person

| Field | Description |
| --- | --- |
| `about` |  |
| `alternate_names` |  |
| `anime` |  |
| `birthday` |  |
| `character` |  |
| `data` |  |
| `family_name` |  |
| `favorites` |  |
| `given_name` |  |
| `images` |  |
| `jpg` |  |
| `mal_id` |  |
| `manga` |  |
| `name` |  |
| `pagination` |  |
| `position` |  |
| `role` |  |
| `url` |  |
| `voices` |  |
| `website_url` |  |

Operations: List, Load.

API path: `/people`

#### Producer

| Field | Description |
| --- | --- |
| `about` |  |
| `count` |  |
| `data` |  |
| `established` |  |
| `external` |  |
| `favorites` |  |
| `images` |  |
| `mal_id` |  |
| `name` |  |
| `pagination` |  |
| `titles` |  |
| `url` |  |

Operations: List, Load.

API path: `/producers`

#### Random

| Field | Description |
| --- | --- |
| `about` |  |
| `aired` |  |
| `airing` |  |
| `alternate_names` |  |
| `approved` |  |
| `authors` |  |
| `background` |  |
| `birthday` |  |
| `broadcast` |  |
| `chapters` |  |
| `demographics` |  |
| `duration` |  |
| `episodes` |  |
| `explicit_genres` |  |
| `family_name` |  |
| `favorites` |  |
| `gender` |  |
| `genres` |  |
| `given_name` |  |
| `images` |  |
| `joined` |  |
| `last_online` |  |
| `licensors` |  |
| `location` |  |
| `mal_id` |  |
| `members` |  |
| `name` |  |
| `name_kanji` |  |
| `nicknames` |  |
| `popularity` |  |
| `producers` |  |
| `published` |  |
| `publishing` |  |
| `rank` |  |
| `rating` |  |
| `score` |  |
| `scored_by` |  |
| `season` |  |
| `serializations` |  |
| `source` |  |
| `status` |  |
| `studios` |  |
| `synopsis` |  |
| `themes` |  |
| `title` |  |
| `title_english` |  |
| `title_japanese` |  |
| `title_synonyms` |  |
| `titles` |  |
| `trailer` |  |
| `type` |  |
| `url` |  |
| `username` |  |
| `volumes` |  |
| `website_url` |  |
| `year` |  |

Operations: Load.

API path: `/random/anime`

#### Recommendation

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

Operations: List.

API path: `/users/{username}/recommendations`

#### Review

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/reviews/anime`

#### Schedule

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

Operations: List.

API path: `/schedules`

#### Season

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |
| `seasons` |  |
| `year` |  |

Operations: List, Load.

API path: `/seasons/now`

#### Top

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

Operations: Load.

API path: `/top/reviews`

#### User

| Field | Description |
| --- | --- |
| `anime` |  |
| `birthday` |  |
| `characters` |  |
| `data` |  |
| `external` |  |
| `gender` |  |
| `images` |  |
| `joined` |  |
| `last_online` |  |
| `location` |  |
| `mal_id` |  |
| `manga` |  |
| `pagination` |  |
| `people` |  |
| `statistics` |  |
| `url` |  |
| `username` |  |

Operations: List, Load.

API path: `/users`

#### UserAbout

| Field | Description |
| --- | --- |
| `about` |  |

Operations: List.

API path: `/users/{username}/about`

#### UserClub

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

Operations: List.

API path: `/users/{username}/clubs`

#### UserFriend

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

Operations: List.

API path: `/users/{username}/friends`

#### UserHistory

| Field | Description |
| --- | --- |
| `date` |  |
| `entry` |  |
| `increment` |  |

Operations: List.

API path: `/users/{username}/history`

#### UserStatistic

| Field | Description |
| --- | --- |
| `anime` |  |
| `manga` |  |

Operations: Load.

API path: `/users/{username}/statistics`

#### UserUpdate

| Field | Description |
| --- | --- |
| `anime` |  |
| `manga` |  |

Operations: Load.

API path: `/users/{username}/userupdates`

#### WatchEpisode

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

Operations: List.

API path: `/watch/episodes`

#### WatchPromo

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

Operations: List.

API path: `/watch/promos`



## Entities


### Anime

Create an instance: `$anime = $client->Anime();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aired` | `string` |  |
| `airing` | `bool` |  |
| `approved` | `bool` |  |
| `author_url` | `string` |  |
| `author_username` | `string` |  |
| `background` | `string` |  |
| `broadcast` | `array` |  |
| `character` | `array` |  |
| `comments` | `int` |  |
| `completed` | `int` |  |
| `data` | `array` |  |
| `date` | `string` |  |
| `demographics` | `array` |  |
| `dropped` | `int` |  |
| `duration` | `int` |  |
| `endings` | `array` |  |
| `entry` | `array` |  |
| `episodes` | `int` |  |
| `explicit_genres` | `array` |  |
| `external` | `array` |  |
| `favorites` | `int` |  |
| `filler` | `bool` |  |
| `genres` | `array` |  |
| `images` | `array` |  |
| `last_comment` | `array` |  |
| `licensors` | `array` |  |
| `mal_id` | `int` |  |
| `members` | `int` |  |
| `moreinfo` | `string` |  |
| `music_videos` | `array` |  |
| `name` | `string` |  |
| `on_hold` | `int` |  |
| `openings` | `array` |  |
| `pagination` | `array` |  |
| `person` | `array` |  |
| `plan_to_watch` | `int` |  |
| `popularity` | `int` |  |
| `positions` | `array` |  |
| `producers` | `array` |  |
| `promo` | `array` |  |
| `rank` | `int` |  |
| `rating` | `string` |  |
| `recap` | `bool` |  |
| `relation` | `string` |  |
| `relations` | `array` |  |
| `role` | `string` |  |
| `score` | `float` |  |
| `scored_by` | `int` |  |
| `scores` | `array` |  |
| `season` | `string` |  |
| `source` | `string` |  |
| `status` | `string` |  |
| `streaming` | `array` |  |
| `studios` | `array` |  |
| `synopsis` | `string` |  |
| `theme` | `array` |  |
| `themes` | `array` |  |
| `title` | `string` |  |
| `title_english` | `string` |  |
| `title_japanese` | `string` |  |
| `title_romanji` | `string` |  |
| `title_synonyms` | `array` |  |
| `titles` | `array` |  |
| `total` | `int` |  |
| `trailer` | `array` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `voice_actors` | `array` |  |
| `watching` | `int` |  |
| `year` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Anime record (throws on error).
$anime = $client->Anime()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Anime records (throws on error).
$animes = $client->Anime()->list();
```


### Character

Create an instance: `$character = $client->Character();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `string` |  |
| `anime` | `array` |  |
| `data` | `array` |  |
| `favorites` | `int` |  |
| `image_url` | `string` |  |
| `images` | `array` |  |
| `language` | `string` |  |
| `large_image_url` | `string` |  |
| `mal_id` | `int` |  |
| `manga` | `array` |  |
| `name` | `string` |  |
| `name_kanji` | `string` |  |
| `nicknames` | `array` |  |
| `pagination` | `array` |  |
| `person` | `array` |  |
| `role` | `string` |  |
| `url` | `string` |  |
| `voices` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Character record (throws on error).
$character = $client->Character()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Character records (throws on error).
$characters = $client->Character()->list();
```


### Club

Create an instance: `$club = $client->Club();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `string` |  |
| `anime` | `array` |  |
| `category` | `string` |  |
| `characters` | `array` |  |
| `created` | `string` |  |
| `data` | `array` |  |
| `images` | `array` |  |
| `mal_id` | `int` |  |
| `manga` | `array` |  |
| `members` | `int` |  |
| `name` | `string` |  |
| `pagination` | `array` |  |
| `url` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Club record (throws on error).
$club = $client->Club()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Club records (throws on error).
$clubs = $client->Club()->list();
```


### External

Create an instance: `$external = $client->External();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: List

```php
// list() returns an array of External records (throws on error).
$externals = $client->External()->list();
```


### Genre

Create an instance: `$genre = $client->Genre();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` |  |
| `mal_id` | `int` |  |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: List

```php
// list() returns an array of Genre records (throws on error).
$genres = $client->Genre()->list();
```


### Magazine

Create an instance: `$magazine = $client->Magazine();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |
| `pagination` | `array` |  |

#### Example: List

```php
// list() returns an array of Magazine records (throws on error).
$magazines = $client->Magazine()->list();
```


### Manga

Create an instance: `$manga = $client->Manga();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved` | `bool` |  |
| `author_url` | `string` |  |
| `author_username` | `string` |  |
| `authors` | `array` |  |
| `background` | `string` |  |
| `chapters` | `int` |  |
| `character` | `array` |  |
| `comments` | `int` |  |
| `completed` | `int` |  |
| `data` | `array` |  |
| `date` | `string` |  |
| `demographics` | `array` |  |
| `dropped` | `int` |  |
| `entry` | `array` |  |
| `explicit_genres` | `array` |  |
| `external` | `array` |  |
| `favorites` | `int` |  |
| `genres` | `array` |  |
| `images` | `array` |  |
| `jpg` | `array` |  |
| `last_comment` | `array` |  |
| `mal_id` | `int` |  |
| `members` | `int` |  |
| `moreinfo` | `string` |  |
| `name` | `string` |  |
| `on_hold` | `int` |  |
| `pagination` | `array` |  |
| `plan_to_read` | `int` |  |
| `popularity` | `int` |  |
| `published` | `array` |  |
| `publishing` | `bool` |  |
| `rank` | `int` |  |
| `reading` | `int` |  |
| `relation` | `string` |  |
| `relations` | `array` |  |
| `role` | `string` |  |
| `score` | `float` |  |
| `scored_by` | `int` |  |
| `scores` | `array` |  |
| `serializations` | `array` |  |
| `status` | `string` |  |
| `synopsis` | `string` |  |
| `themes` | `array` |  |
| `title` | `string` |  |
| `title_english` | `string` |  |
| `title_japanese` | `string` |  |
| `title_synonyms` | `array` |  |
| `titles` | `array` |  |
| `total` | `int` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `volumes` | `int` |  |
| `webp` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Manga record (throws on error).
$manga = $client->Manga()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Manga records (throws on error).
$mangas = $client->Manga()->list();
```


### PeopleSearch

Create an instance: `$people_search = $client->PeopleSearch();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |
| `pagination` | `array` |  |

#### Example: List

```php
// list() returns an array of PeopleSearch records (throws on error).
$people_searchs = $client->PeopleSearch()->list();
```


### Person

Create an instance: `$person = $client->Person();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `string` |  |
| `alternate_names` | `array` |  |
| `anime` | `array` |  |
| `birthday` | `string` |  |
| `character` | `array` |  |
| `data` | `array` |  |
| `family_name` | `string` |  |
| `favorites` | `int` |  |
| `given_name` | `string` |  |
| `images` | `array` |  |
| `jpg` | `array` |  |
| `mal_id` | `int` |  |
| `manga` | `array` |  |
| `name` | `string` |  |
| `pagination` | `array` |  |
| `position` | `string` |  |
| `role` | `string` |  |
| `url` | `string` |  |
| `voices` | `array` |  |
| `website_url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Person record (throws on error).
$person = $client->Person()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Person records (throws on error).
$persons = $client->Person()->list();
```


### Producer

Create an instance: `$producer = $client->Producer();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `string` |  |
| `count` | `int` |  |
| `data` | `array` |  |
| `established` | `string` |  |
| `external` | `array` |  |
| `favorites` | `int` |  |
| `images` | `array` |  |
| `mal_id` | `int` |  |
| `name` | `string` |  |
| `pagination` | `array` |  |
| `titles` | `array` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Producer record (throws on error).
$producer = $client->Producer()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Producer records (throws on error).
$producers = $client->Producer()->list();
```


### Random

Create an instance: `$random = $client->Random();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `string` |  |
| `aired` | `array` |  |
| `airing` | `bool` |  |
| `alternate_names` | `array` |  |
| `approved` | `bool` |  |
| `authors` | `array` |  |
| `background` | `string` |  |
| `birthday` | `string` |  |
| `broadcast` | `array` |  |
| `chapters` | `int` |  |
| `demographics` | `array` |  |
| `duration` | `string` |  |
| `episodes` | `int` |  |
| `explicit_genres` | `array` |  |
| `family_name` | `string` |  |
| `favorites` | `int` |  |
| `gender` | `string` |  |
| `genres` | `array` |  |
| `given_name` | `string` |  |
| `images` | `array` |  |
| `joined` | `string` |  |
| `last_online` | `string` |  |
| `licensors` | `array` |  |
| `location` | `string` |  |
| `mal_id` | `int` |  |
| `members` | `int` |  |
| `name` | `string` |  |
| `name_kanji` | `string` |  |
| `nicknames` | `array` |  |
| `popularity` | `int` |  |
| `producers` | `array` |  |
| `published` | `array` |  |
| `publishing` | `bool` |  |
| `rank` | `int` |  |
| `rating` | `string` |  |
| `score` | `float` |  |
| `scored_by` | `int` |  |
| `season` | `string` |  |
| `serializations` | `array` |  |
| `source` | `string` |  |
| `status` | `string` |  |
| `studios` | `array` |  |
| `synopsis` | `string` |  |
| `themes` | `array` |  |
| `title` | `string` |  |
| `title_english` | `string` |  |
| `title_japanese` | `string` |  |
| `title_synonyms` | `array` |  |
| `titles` | `array` |  |
| `trailer` | `array` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `username` | `string` |  |
| `volumes` | `int` |  |
| `website_url` | `string` |  |
| `year` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Random record (throws on error).
$random = $client->Random()->load();
```


### Recommendation

Create an instance: `$recommendation = $client->Recommendation();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |
| `pagination` | `array` |  |

#### Example: List

```php
// list() returns an array of Recommendation records (throws on error).
$recommendations = $client->Recommendation()->list();
```


### Review

Create an instance: `$review = $client->Review();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Review record (throws on error).
$review = $client->Review()->load();
```


### Schedule

Create an instance: `$schedule = $client->Schedule();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |
| `pagination` | `array` |  |

#### Example: List

```php
// list() returns an array of Schedule records (throws on error).
$schedules = $client->Schedule()->list();
```


### Season

Create an instance: `$season = $client->Season();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |
| `pagination` | `array` |  |
| `seasons` | `array` |  |
| `year` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Season record (throws on error).
$season = $client->Season()->load(["season" => "season", "year" => 1]);
```

#### Example: List

```php
// list() returns an array of Season records (throws on error).
$seasons = $client->Season()->list();
```


### Top

Create an instance: `$top = $client->Top();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |
| `pagination` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Top record (throws on error).
$top = $client->Top()->load();
```


### User

Create an instance: `$user = $client->User();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | `array` |  |
| `birthday` | `string` |  |
| `characters` | `array` |  |
| `data` | `array` |  |
| `external` | `array` |  |
| `gender` | `string` |  |
| `images` | `array` |  |
| `joined` | `string` |  |
| `last_online` | `string` |  |
| `location` | `string` |  |
| `mal_id` | `int` |  |
| `manga` | `array` |  |
| `pagination` | `array` |  |
| `people` | `array` |  |
| `statistics` | `array` |  |
| `url` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the User record (throws on error).
$user = $client->User()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of User records (throws on error).
$users = $client->User()->list();
```


### UserAbout

Create an instance: `$user_about = $client->UserAbout();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `string` |  |

#### Example: List

```php
// list() returns an array of UserAbout records (throws on error).
$user_abouts = $client->UserAbout()->list();
```


### UserClub

Create an instance: `$user_club = $client->UserClub();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |
| `pagination` | `array` |  |

#### Example: List

```php
// list() returns an array of UserClub records (throws on error).
$user_clubs = $client->UserClub()->list();
```


### UserFriend

Create an instance: `$user_friend = $client->UserFriend();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |
| `pagination` | `array` |  |

#### Example: List

```php
// list() returns an array of UserFriend records (throws on error).
$user_friends = $client->UserFriend()->list();
```


### UserHistory

Create an instance: `$user_history = $client->UserHistory();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `entry` | `array` |  |
| `increment` | `int` |  |

#### Example: List

```php
// list() returns an array of UserHistory records (throws on error).
$user_historys = $client->UserHistory()->list();
```


### UserStatistic

Create an instance: `$user_statistic = $client->UserStatistic();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | `array` |  |
| `manga` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the UserStatistic record (throws on error).
$user_statistic = $client->UserStatistic()->load(["username" => "username"]);
```


### UserUpdate

Create an instance: `$user_update = $client->UserUpdate();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | `array` |  |
| `manga` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the UserUpdate record (throws on error).
$user_update = $client->UserUpdate()->load(["username" => "username"]);
```


### WatchEpisode

Create an instance: `$watch_episode = $client->WatchEpisode();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |
| `pagination` | `array` |  |

#### Example: List

```php
// list() returns an array of WatchEpisode records (throws on error).
$watch_episodes = $client->WatchEpisode()->list();
```


### WatchPromo

Create an instance: `$watch_promo = $client->WatchPromo();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `array` |  |
| `pagination` | `array` |  |

#### Example: List

```php
// list() returns an array of WatchPromo records (throws on error).
$watch_promos = $client->WatchPromo()->list();
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── jikanrest_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`jikanrest_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$external = $client->External();
$external->list();

// $external->data_get() now returns the external data from the last list
// $external->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
