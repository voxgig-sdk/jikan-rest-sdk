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
    // list() returns entity instances; data_get() reads each record.
    $animes = $client->Anime()->list();
    foreach ($animes as $record) {
        $item = $record->data_get();
        echo $item["id"] . " " . $item["aired"] . "\n";
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
    print_r($season->data_get());
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

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = JikanRestSDK::test([
    "entity" => ["user" => ["test01" => ["id" => "test01"]]],
]);

// list() returns entity instances (throws on error);
// call data_get() for the mock record.
$user = $client->User()->list();
print_r(array_map(fn($item) => $item->data_get(), $user));
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
| `aired` | Aired Date ISO8601 |
| `airing` | Airing boolean |
| `approved` | Whether the entry is pending approval on MAL or not |
| `background` | Background |
| `broadcast` | Broadcast Details |
| `data` |  |
| `demographics` |  |
| `duration` | Episode duration in seconds |
| `episodes` | Episode count |
| `explicit_genres` |  |
| `favorites` | Number of users who have favorited this entry |
| `filler` | Filler episode |
| `genres` |  |
| `id` |  |
| `images` |  |
| `licensors` |  |
| `mal_id` | MyAnimeList ID |
| `members` | Number of users who have added this entry to their list |
| `pagination` |  |
| `popularity` | Popularity |
| `producers` |  |
| `rank` | Ranking |
| `rating` | Anime audience rating |
| `recap` | Recap episode |
| `score` | Score |
| `scored_by` | Number of users |
| `season` | Season |
| `source` | Original Material/Source adapted from |
| `status` | Airing status |
| `studios` |  |
| `synopsis` | Episode Synopsis |
| `themes` |  |
| `title` | Title |
| `title_english` | English Title |
| `title_japanese` | Title Japanese |
| `title_romanji` | title_romanji |
| `title_synonyms` | Other Titles |
| `titles` | All titles |
| `trailer` | Youtube Details |
| `type` | Anime Type |
| `url` | MyAnimeList URL |
| `year` | Year |

Operations: List, Load.

API path: `/anime`

#### Character

| Field | Description |
| --- | --- |
| `about` | Biography |
| `data` |  |
| `favorites` | Number of users who have favorited this entry |
| `id` |  |
| `images` |  |
| `mal_id` | MyAnimeList ID |
| `name` | Name |
| `name_kanji` | Name |
| `nicknames` | Other Names |
| `pagination` |  |
| `url` | MyAnimeList URL |

Operations: List, Load.

API path: `/characters`

#### Club

| Field | Description |
| --- | --- |
| `access` | Club access |
| `category` | Club Category |
| `created` | Date Created ISO8601 |
| `data` |  |
| `id` |  |
| `images` |  |
| `mal_id` | MyAnimeList ID |
| `members` | Number of club members |
| `name` | Club name |
| `pagination` |  |
| `url` | Club URL |

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
| `count` | Genre's entry count |
| `mal_id` | MyAnimeList ID |
| `name` | Genre Name |
| `url` | MyAnimeList URL |

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
| `approved` | Whether the entry is pending approval on MAL or not |
| `authors` |  |
| `background` | Background |
| `chapters` | Chapter count |
| `data` |  |
| `demographics` |  |
| `explicit_genres` |  |
| `favorites` | Number of users who have favorited this entry |
| `genres` |  |
| `id` |  |
| `images` |  |
| `mal_id` | MyAnimeList ID |
| `members` | Number of users who have added this entry to their list |
| `pagination` |  |
| `popularity` | Popularity |
| `published` | Date range |
| `publishing` | Publishing boolean |
| `rank` | Ranking |
| `score` | Score |
| `scored_by` | Number of users |
| `serializations` |  |
| `status` | Publishing status |
| `synopsis` | Synopsis |
| `themes` |  |
| `title` | Title |
| `title_english` | English Title |
| `title_japanese` | Japanese Title |
| `titles` | All Titles |
| `type` | Manga Type |
| `url` | MyAnimeList URL |
| `volumes` | Volume count |

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
| `about` | Biography |
| `alternate_names` | Other Names |
| `birthday` | Birthday Date ISO8601 |
| `data` |  |
| `family_name` | Family Name |
| `favorites` | Number of users who have favorited this entry |
| `given_name` | Given Name |
| `id` |  |
| `images` |  |
| `mal_id` | MyAnimeList ID |
| `name` | Name |
| `pagination` |  |
| `url` | MyAnimeList URL |
| `website_url` | Person's website URL |

Operations: List, Load.

API path: `/people`

#### Producer

| Field | Description |
| --- | --- |
| `about` | About the Producer |
| `count` | Producers's anime count |
| `data` |  |
| `established` | Established Date ISO8601 |
| `favorites` | Producers's member favorites count |
| `id` |  |
| `images` |  |
| `mal_id` | MyAnimeList ID |
| `pagination` |  |
| `titles` | All titles |
| `url` | MyAnimeList URL |

Operations: List, Load.

API path: `/producers`

#### Random

| Field | Description |
| --- | --- |

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
| `id` |  |
| `pagination` |  |
| `seasons` | List of available seasons |
| `year` | Year |

Operations: List, Load.

API path: `/seasons/now`

#### Top

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/top/reviews`

#### User

| Field | Description |
| --- | --- |
| `birthday` | Birthday Date ISO8601 |
| `data` |  |
| `gender` | User Gender |
| `id` |  |
| `images` |  |
| `joined` | Joined Date ISO8601 |
| `last_online` | Last Online Date ISO8601 |
| `location` | Location |
| `mal_id` | MyAnimeList ID |
| `pagination` |  |
| `url` | MyAnimeList URL |
| `username` | MyAnimeList Username |

Operations: List, Load.

API path: `/users`

#### UserAbout

| Field | Description |
| --- | --- |
| `about` | User About. |

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
| `date` | Date ISO8601 |
| `entry` | Parsed URL Data |
| `increment` | Number of episodes/chapters watched/read |

Operations: List.

API path: `/users/{username}/history`

#### UserStatistic

| Field | Description |
| --- | --- |
| `anime` | Anime Statistics |
| `manga` | Manga Statistics |

Operations: Load.

API path: `/users/{username}/statistics`

#### UserUpdate

| Field | Description |
| --- | --- |
| `anime` | Last updated Anime |
| `manga` | Last updated Manga |

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
| `aired` | `string` | Aired Date ISO8601 |
| `airing` | `bool` | Airing boolean |
| `approved` | `bool` | Whether the entry is pending approval on MAL or not |
| `background` | `string` | Background |
| `broadcast` | `array` | Broadcast Details |
| `data` | `array` |  |
| `demographics` | `array` |  |
| `duration` | `int` | Episode duration in seconds |
| `episodes` | `int` | Episode count |
| `explicit_genres` | `array` |  |
| `favorites` | `int` | Number of users who have favorited this entry |
| `filler` | `bool` | Filler episode |
| `genres` | `array` |  |
| `id` | `string` |  |
| `images` | `array` |  |
| `licensors` | `array` |  |
| `mal_id` | `int` | MyAnimeList ID |
| `members` | `int` | Number of users who have added this entry to their list |
| `pagination` | `array` |  |
| `popularity` | `int` | Popularity |
| `producers` | `array` |  |
| `rank` | `int` | Ranking |
| `rating` | `string` | Anime audience rating |
| `recap` | `bool` | Recap episode |
| `score` | `float` | Score |
| `scored_by` | `int` | Number of users |
| `season` | `string` | Season |
| `source` | `string` | Original Material/Source adapted from |
| `status` | `string` | Airing status |
| `studios` | `array` |  |
| `synopsis` | `string` | Episode Synopsis |
| `themes` | `array` |  |
| `title` | `string` | Title |
| `title_english` | `string` | English Title |
| `title_japanese` | `string` | Title Japanese |
| `title_romanji` | `string` | title_romanji |
| `title_synonyms` | `array` | Other Titles |
| `titles` | `array` | All titles |
| `trailer` | `array` | Youtube Details |
| `type` | `string` | Anime Type |
| `url` | `string` | MyAnimeList URL |
| `year` | `int` | Year |

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
| `about` | `string` | Biography |
| `data` | `array` |  |
| `favorites` | `int` | Number of users who have favorited this entry |
| `id` | `string` |  |
| `images` | `array` |  |
| `mal_id` | `int` | MyAnimeList ID |
| `name` | `string` | Name |
| `name_kanji` | `string` | Name |
| `nicknames` | `array` | Other Names |
| `pagination` | `array` |  |
| `url` | `string` | MyAnimeList URL |

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
| `access` | `string` | Club access |
| `category` | `string` | Club Category |
| `created` | `string` | Date Created ISO8601 |
| `data` | `array` |  |
| `id` | `string` |  |
| `images` | `array` |  |
| `mal_id` | `int` | MyAnimeList ID |
| `members` | `int` | Number of club members |
| `name` | `string` | Club name |
| `pagination` | `array` |  |
| `url` | `string` | Club URL |

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
| `count` | `int` | Genre's entry count |
| `mal_id` | `int` | MyAnimeList ID |
| `name` | `string` | Genre Name |
| `url` | `string` | MyAnimeList URL |

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
| `approved` | `bool` | Whether the entry is pending approval on MAL or not |
| `authors` | `array` |  |
| `background` | `string` | Background |
| `chapters` | `int` | Chapter count |
| `data` | `array` |  |
| `demographics` | `array` |  |
| `explicit_genres` | `array` |  |
| `favorites` | `int` | Number of users who have favorited this entry |
| `genres` | `array` |  |
| `id` | `string` |  |
| `images` | `array` |  |
| `mal_id` | `int` | MyAnimeList ID |
| `members` | `int` | Number of users who have added this entry to their list |
| `pagination` | `array` |  |
| `popularity` | `int` | Popularity |
| `published` | `array` | Date range |
| `publishing` | `bool` | Publishing boolean |
| `rank` | `int` | Ranking |
| `score` | `float` | Score |
| `scored_by` | `int` | Number of users |
| `serializations` | `array` |  |
| `status` | `string` | Publishing status |
| `synopsis` | `string` | Synopsis |
| `themes` | `array` |  |
| `title` | `string` | Title |
| `title_english` | `string` | English Title |
| `title_japanese` | `string` | Japanese Title |
| `titles` | `array` | All Titles |
| `type` | `string` | Manga Type |
| `url` | `string` | MyAnimeList URL |
| `volumes` | `int` | Volume count |

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
| `about` | `string` | Biography |
| `alternate_names` | `array` | Other Names |
| `birthday` | `string` | Birthday Date ISO8601 |
| `data` | `array` |  |
| `family_name` | `string` | Family Name |
| `favorites` | `int` | Number of users who have favorited this entry |
| `given_name` | `string` | Given Name |
| `id` | `string` |  |
| `images` | `array` |  |
| `mal_id` | `int` | MyAnimeList ID |
| `name` | `string` | Name |
| `pagination` | `array` |  |
| `url` | `string` | MyAnimeList URL |
| `website_url` | `string` | Person's website URL |

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
| `about` | `string` | About the Producer |
| `count` | `int` | Producers's anime count |
| `data` | `array` |  |
| `established` | `string` | Established Date ISO8601 |
| `favorites` | `int` | Producers's member favorites count |
| `id` | `string` |  |
| `images` | `array` |  |
| `mal_id` | `int` | MyAnimeList ID |
| `pagination` | `array` |  |
| `titles` | `array` | All titles |
| `url` | `string` | MyAnimeList URL |

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
| `id` | `string` |  |
| `pagination` | `array` |  |
| `seasons` | `array` | List of available seasons |
| `year` | `int` | Year |

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
| `birthday` | `string` | Birthday Date ISO8601 |
| `data` | `array` |  |
| `gender` | `string` | User Gender |
| `id` | `string` |  |
| `images` | `array` |  |
| `joined` | `string` | Joined Date ISO8601 |
| `last_online` | `string` | Last Online Date ISO8601 |
| `location` | `string` | Location |
| `mal_id` | `int` | MyAnimeList ID |
| `pagination` | `array` |  |
| `url` | `string` | MyAnimeList URL |
| `username` | `string` | MyAnimeList Username |

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
| `about` | `string` | User About. |

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
| `date` | `string` | Date ISO8601 |
| `entry` | `array` | Parsed URL Data |
| `increment` | `int` | Number of episodes/chapters watched/read |

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
| `anime` | `array` | Anime Statistics |
| `manga` | `array` | Manga Statistics |

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
| `anime` | `array` | Last updated Anime |
| `manga` | `array` | Last updated Manga |

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

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


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

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

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
├── schema.php                     -- Generated option + entity specs
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
