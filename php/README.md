# JikanRest PHP SDK

The PHP SDK for the JikanRest API. Provides an entity-oriented interface using PHP conventions.


## Install
```bash
composer require voxgig/jikan-rest-sdk
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'jikanrest_sdk.php';

$client = new JikanRestSDK([
    "apikey" => getenv("JIKAN-REST_APIKEY"),
]);
```

### 2. List animes

```php
[$result, $err] = $client->Anime(null)->list(null, null);
if ($err) { throw new \Exception($err); }

if (is_array($result)) {
    foreach ($result as $item) {
        $d = $item->data_get();
        echo $d["id"] . " " . $d["name"] . "\n";
    }
}
```

### 3. Load a anime

```php
[$result, $err] = $client->Anime(null)->load(["id" => "example_id"], null);
if ($err) { throw new \Exception($err); }
print_r($result);
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
if ($err) { throw new \Exception($err); }

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
}
```

### Prepare a request without sending it

```php
[$fetchdef, $err] = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);
if ($err) { throw new \Exception($err); }

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = JikanRestSDK::test(null, null);

[$result, $err] = $client->JikanRest(null)->load(
    ["id" => "test01"], null
);
// $result contains mock response data
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
JIKAN-REST_TEST_LIVE=TRUE
JIKAN-REST_APIKEY=<your-key>
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
| `apikey` | `string` | API key for authentication. |
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
| `Anime` | `($data): AnimeEntity` | Create a Anime entity instance. |
| `Character` | `($data): CharacterEntity` | Create a Character entity instance. |
| `Club` | `($data): ClubEntity` | Create a Club entity instance. |
| `External` | `($data): ExternalEntity` | Create a External entity instance. |
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
| `User` | `($data): UserEntity` | Create a User entity instance. |
| `UserAbout` | `($data): UserAboutEntity` | Create a UserAbout entity instance. |
| `UserClub` | `($data): UserClubEntity` | Create a UserClub entity instance. |
| `UserFriend` | `($data): UserFriendEntity` | Create a UserFriend entity instance. |
| `UserHistory` | `($data): UserHistoryEntity` | Create a UserHistory entity instance. |
| `UserStatistic` | `($data): UserStatisticEntity` | Create a UserStatistic entity instance. |
| `UserUpdate` | `($data): UserUpdateEntity` | Create a UserUpdate entity instance. |
| `WatchEpisode` | `($data): WatchEpisodeEntity` | Create a WatchEpisode entity instance. |
| `WatchPromo` | `($data): WatchPromoEntity` | Create a WatchPromo entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `($reqmatch, $ctrl): array` | List entities matching the criteria. |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return `[$result, $err]`. The first value is an
`array` with these keys:

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
| `author_url` |  |
| `author_username` |  |
| `character` |  |
| `comment` |  |
| `data` |  |
| `date` |  |
| `entry` |  |
| `image` |  |
| `last_comment` |  |
| `mal_id` |  |
| `name` |  |
| `pagination` |  |
| `person` |  |
| `position` |  |
| `relation` |  |
| `role` |  |
| `title` |  |
| `url` |  |
| `voice_actor` |  |

Operations: List, Load.

API path: `/anime`

#### Character

| Field | Description |
| --- | --- |
| `anime` |  |
| `data` |  |
| `image_url` |  |
| `language` |  |
| `large_image_url` |  |
| `manga` |  |
| `pagination` |  |
| `person` |  |
| `role` |  |

Operations: List, Load.

API path: `/characters`

#### Club

| Field | Description |
| --- | --- |
| `data` |  |
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
| `author_url` |  |
| `author_username` |  |
| `character` |  |
| `comment` |  |
| `data` |  |
| `date` |  |
| `entry` |  |
| `jpg` |  |
| `last_comment` |  |
| `mal_id` |  |
| `name` |  |
| `pagination` |  |
| `relation` |  |
| `role` |  |
| `title` |  |
| `url` |  |
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
| `anime` |  |
| `character` |  |
| `data` |  |
| `jpg` |  |
| `manga` |  |
| `pagination` |  |
| `position` |  |
| `role` |  |

Operations: List, Load.

API path: `/people`

#### Producer

| Field | Description |
| --- | --- |
| `data` |  |
| `name` |  |
| `pagination` |  |
| `url` |  |

Operations: List, Load.

API path: `/producers`

#### Random

| Field | Description |
| --- | --- |
| `data` |  |

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
| `season` |  |
| `year` |  |

Operations: List.

API path: `/seasons/{year}/{season}`

#### Top

| Field | Description |
| --- | --- |
| `data` |  |

Operations: Load.

API path: `/top/reviews`

#### User

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

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
| `data` |  |

Operations: Load.

API path: `/users/{username}/statistics`

#### UserUpdate

| Field | Description |
| --- | --- |
| `data` |  |

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

Create an instance: `const anime = client.Anime()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_url` | ``$STRING`` |  |
| `author_username` | ``$STRING`` |  |
| `character` | ``$OBJECT`` |  |
| `comment` | ``$INTEGER`` |  |
| `data` | ``$OBJECT`` |  |
| `date` | ``$STRING`` |  |
| `entry` | ``$OBJECT`` |  |
| `image` | ``$OBJECT`` |  |
| `last_comment` | ``$OBJECT`` |  |
| `mal_id` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |
| `pagination` | ``$OBJECT`` |  |
| `person` | ``$OBJECT`` |  |
| `position` | ``$ARRAY`` |  |
| `relation` | ``$STRING`` |  |
| `role` | ``$STRING`` |  |
| `title` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |
| `voice_actor` | ``$ARRAY`` |  |

#### Example: Load

```ts
const anime = await client.Anime().load({ id: 'anime_id' })
```

#### Example: List

```ts
const animes = await client.Anime().list()
```


### Character

Create an instance: `const character = client.Character()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | ``$OBJECT`` |  |
| `data` | ``$OBJECT`` |  |
| `image_url` | ``$STRING`` |  |
| `language` | ``$STRING`` |  |
| `large_image_url` | ``$STRING`` |  |
| `manga` | ``$OBJECT`` |  |
| `pagination` | ``$OBJECT`` |  |
| `person` | ``$OBJECT`` |  |
| `role` | ``$STRING`` |  |

#### Example: Load

```ts
const character = await client.Character().load({ id: 'character_id' })
```

#### Example: List

```ts
const characters = await client.Character().list()
```


### Club

Create an instance: `const club = client.Club()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$OBJECT`` |  |
| `pagination` | ``$OBJECT`` |  |
| `url` | ``$STRING`` |  |
| `username` | ``$STRING`` |  |

#### Example: Load

```ts
const club = await client.Club().load({ id: 'club_id' })
```

#### Example: List

```ts
const clubs = await client.Club().list()
```


### External

Create an instance: `const external = client.External()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |

#### Example: List

```ts
const externals = await client.External().list()
```


### Genre

Create an instance: `const genre = client.Genre()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | ``$INTEGER`` |  |
| `mal_id` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |

#### Example: List

```ts
const genres = await client.Genre().list()
```


### Magazine

Create an instance: `const magazine = client.Magazine()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```ts
const magazines = await client.Magazine().list()
```


### Manga

Create an instance: `const manga = client.Manga()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_url` | ``$STRING`` |  |
| `author_username` | ``$STRING`` |  |
| `character` | ``$OBJECT`` |  |
| `comment` | ``$INTEGER`` |  |
| `data` | ``$OBJECT`` |  |
| `date` | ``$STRING`` |  |
| `entry` | ``$OBJECT`` |  |
| `jpg` | ``$OBJECT`` |  |
| `last_comment` | ``$OBJECT`` |  |
| `mal_id` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |
| `pagination` | ``$OBJECT`` |  |
| `relation` | ``$STRING`` |  |
| `role` | ``$STRING`` |  |
| `title` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |
| `webp` | ``$OBJECT`` |  |

#### Example: Load

```ts
const manga = await client.Manga().load({ id: 'manga_id' })
```

#### Example: List

```ts
const mangas = await client.Manga().list()
```


### PeopleSearch

Create an instance: `const people_search = client.PeopleSearch()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```ts
const people_searchs = await client.PeopleSearch().list()
```


### Person

Create an instance: `const person = client.Person()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | ``$OBJECT`` |  |
| `character` | ``$OBJECT`` |  |
| `data` | ``$OBJECT`` |  |
| `jpg` | ``$OBJECT`` |  |
| `manga` | ``$OBJECT`` |  |
| `pagination` | ``$OBJECT`` |  |
| `position` | ``$STRING`` |  |
| `role` | ``$STRING`` |  |

#### Example: Load

```ts
const person = await client.Person().load({ id: 'person_id' })
```

#### Example: List

```ts
const persons = await client.Person().list()
```


### Producer

Create an instance: `const producer = client.Producer()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$OBJECT`` |  |
| `name` | ``$STRING`` |  |
| `pagination` | ``$OBJECT`` |  |
| `url` | ``$STRING`` |  |

#### Example: Load

```ts
const producer = await client.Producer().load({ id: 'producer_id' })
```

#### Example: List

```ts
const producers = await client.Producer().list()
```


### Random

Create an instance: `const random = client.Random()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$OBJECT`` |  |

#### Example: Load

```ts
const random = await client.Random().load({ id: 'random_id' })
```


### Recommendation

Create an instance: `const recommendation = client.Recommendation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```ts
const recommendations = await client.Recommendation().list()
```


### Review

Create an instance: `const review = client.Review()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const review = await client.Review().load({ id: 'review_id' })
```


### Schedule

Create an instance: `const schedule = client.Schedule()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```ts
const schedules = await client.Schedule().list()
```


### Season

Create an instance: `const season = client.Season()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |
| `season` | ``$ARRAY`` |  |
| `year` | ``$INTEGER`` |  |

#### Example: List

```ts
const seasons = await client.Season().list()
```


### Top

Create an instance: `const top = client.Top()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ANY`` |  |

#### Example: Load

```ts
const top = await client.Top().load({ id: 'top_id' })
```


### User

Create an instance: `const user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ANY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: Load

```ts
const user = await client.User().load({ id: 'user_id' })
```

#### Example: List

```ts
const users = await client.User().list()
```


### UserAbout

Create an instance: `const user_about = client.UserAbout()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | ``$STRING`` |  |

#### Example: List

```ts
const user_abouts = await client.UserAbout().list()
```


### UserClub

Create an instance: `const user_club = client.UserClub()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```ts
const user_clubs = await client.UserClub().list()
```


### UserFriend

Create an instance: `const user_friend = client.UserFriend()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```ts
const user_friends = await client.UserFriend().list()
```


### UserHistory

Create an instance: `const user_history = client.UserHistory()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | ``$STRING`` |  |
| `entry` | ``$OBJECT`` |  |
| `increment` | ``$INTEGER`` |  |

#### Example: List

```ts
const user_historys = await client.UserHistory().list()
```


### UserStatistic

Create an instance: `const user_statistic = client.UserStatistic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$OBJECT`` |  |

#### Example: Load

```ts
const user_statistic = await client.UserStatistic().load({ id: 'user_statistic_id' })
```


### UserUpdate

Create an instance: `const user_update = client.UserUpdate()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$OBJECT`` |  |

#### Example: Load

```ts
const user_update = await client.UserUpdate().load({ id: 'user_update_id' })
```


### WatchEpisode

Create an instance: `const watch_episode = client.WatchEpisode()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```ts
const watch_episodes = await client.WatchEpisode().list()
```


### WatchPromo

Create an instance: `const watch_promo = client.WatchPromo()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```ts
const watch_promos = await client.WatchPromo().list()
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

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

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller as the second element in the return array.

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

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$moon = $client->Moon();
[$result, $err] = $moon->load(["planet_id" => "earth", "id" => "luna"]);

// $moon->dataGet() now returns the loaded moon data
// $moon->matchGet() returns the last match criteria
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
