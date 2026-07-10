# JikanRest PHP SDK Reference

Complete API reference for the JikanRest PHP SDK.


## JikanRestSDK

### Constructor

```php
require_once __DIR__ . '/jikanrest_sdk.php';

$client = new JikanRestSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `JikanRestSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = JikanRestSDK::test();
```


### Instance Methods

#### `Anime($data = null)`

Create a new `AnimeEntity` instance. Pass `null` for no initial data.

#### `Character($data = null)`

Create a new `CharacterEntity` instance. Pass `null` for no initial data.

#### `Club($data = null)`

Create a new `ClubEntity` instance. Pass `null` for no initial data.

#### `External($data = null)`

Create a new `ExternalEntity` instance. Pass `null` for no initial data.

#### `Genre($data = null)`

Create a new `GenreEntity` instance. Pass `null` for no initial data.

#### `Magazine($data = null)`

Create a new `MagazineEntity` instance. Pass `null` for no initial data.

#### `Manga($data = null)`

Create a new `MangaEntity` instance. Pass `null` for no initial data.

#### `PeopleSearch($data = null)`

Create a new `PeopleSearchEntity` instance. Pass `null` for no initial data.

#### `Person($data = null)`

Create a new `PersonEntity` instance. Pass `null` for no initial data.

#### `Producer($data = null)`

Create a new `ProducerEntity` instance. Pass `null` for no initial data.

#### `Random($data = null)`

Create a new `RandomEntity` instance. Pass `null` for no initial data.

#### `Recommendation($data = null)`

Create a new `RecommendationEntity` instance. Pass `null` for no initial data.

#### `Review($data = null)`

Create a new `ReviewEntity` instance. Pass `null` for no initial data.

#### `Schedule($data = null)`

Create a new `ScheduleEntity` instance. Pass `null` for no initial data.

#### `Season($data = null)`

Create a new `SeasonEntity` instance. Pass `null` for no initial data.

#### `Top($data = null)`

Create a new `TopEntity` instance. Pass `null` for no initial data.

#### `User($data = null)`

Create a new `UserEntity` instance. Pass `null` for no initial data.

#### `UserAbout($data = null)`

Create a new `UserAboutEntity` instance. Pass `null` for no initial data.

#### `UserClub($data = null)`

Create a new `UserClubEntity` instance. Pass `null` for no initial data.

#### `UserFriend($data = null)`

Create a new `UserFriendEntity` instance. Pass `null` for no initial data.

#### `UserHistory($data = null)`

Create a new `UserHistoryEntity` instance. Pass `null` for no initial data.

#### `UserStatistic($data = null)`

Create a new `UserStatisticEntity` instance. Pass `null` for no initial data.

#### `UserUpdate($data = null)`

Create a new `UserUpdateEntity` instance. Pass `null` for no initial data.

#### `WatchEpisode($data = null)`

Create a new `WatchEpisodeEntity` instance. Pass `null` for no initial data.

#### `WatchPromo($data = null)`

Create a new `WatchPromoEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): JikanRestUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AnimeEntity

```php
$anime = $client->Anime();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_url` | `string` | No |  |
| `author_username` | `string` | No |  |
| `character` | `array` | No |  |
| `comment` | `int` | No |  |
| `data` | `array` | No |  |
| `date` | `string` | No |  |
| `entry` | `array` | No |  |
| `image` | `array` | No |  |
| `last_comment` | `array` | No |  |
| `mal_id` | `int` | No |  |
| `name` | `string` | No |  |
| `pagination` | `array` | No |  |
| `person` | `array` | No |  |
| `position` | `array` | No |  |
| `relation` | `string` | No |  |
| `role` | `string` | No |  |
| `title` | `string` | No |  |
| `url` | `string` | No |  |
| `voice_actor` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Anime()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Anime()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AnimeEntity`

Create a new `AnimeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CharacterEntity

```php
$character = $client->Character();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | `array` | No |  |
| `data` | `array` | No |  |
| `image_url` | `string` | No |  |
| `language` | `string` | No |  |
| `large_image_url` | `string` | No |  |
| `manga` | `array` | No |  |
| `pagination` | `array` | No |  |
| `person` | `array` | No |  |
| `role` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Character()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Character()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CharacterEntity`

Create a new `CharacterEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ClubEntity

```php
$club = $client->Club();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |
| `pagination` | `array` | No |  |
| `url` | `string` | No |  |
| `username` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Club()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Club()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ClubEntity`

Create a new `ClubEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ExternalEntity

```php
$external = $client->External();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->External()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ExternalEntity`

Create a new `ExternalEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GenreEntity

```php
$genre = $client->Genre();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | No |  |
| `mal_id` | `int` | No |  |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Genre()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GenreEntity`

Create a new `GenreEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MagazineEntity

```php
$magazine = $client->Magazine();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |
| `pagination` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Magazine()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MagazineEntity`

Create a new `MagazineEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MangaEntity

```php
$manga = $client->Manga();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_url` | `string` | No |  |
| `author_username` | `string` | No |  |
| `character` | `array` | No |  |
| `comment` | `int` | No |  |
| `data` | `array` | No |  |
| `date` | `string` | No |  |
| `entry` | `array` | No |  |
| `jpg` | `array` | No |  |
| `last_comment` | `array` | No |  |
| `mal_id` | `int` | No |  |
| `name` | `string` | No |  |
| `pagination` | `array` | No |  |
| `relation` | `string` | No |  |
| `role` | `string` | No |  |
| `title` | `string` | No |  |
| `url` | `string` | No |  |
| `webp` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Manga()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Manga()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MangaEntity`

Create a new `MangaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PeopleSearchEntity

```php
$people_search = $client->PeopleSearch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |
| `pagination` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PeopleSearch()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PeopleSearchEntity`

Create a new `PeopleSearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PersonEntity

```php
$person = $client->Person();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | `array` | No |  |
| `character` | `array` | No |  |
| `data` | `array` | No |  |
| `jpg` | `array` | No |  |
| `manga` | `array` | No |  |
| `pagination` | `array` | No |  |
| `position` | `string` | No |  |
| `role` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Person()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Person()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PersonEntity`

Create a new `PersonEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProducerEntity

```php
$producer = $client->Producer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |
| `name` | `string` | No |  |
| `pagination` | `array` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Producer()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Producer()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProducerEntity`

Create a new `ProducerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RandomEntity

```php
$random = $client->Random();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Random()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RandomEntity`

Create a new `RandomEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RecommendationEntity

```php
$recommendation = $client->Recommendation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |
| `pagination` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Recommendation()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RecommendationEntity`

Create a new `RecommendationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReviewEntity

```php
$review = $client->Review();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Review()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReviewEntity`

Create a new `ReviewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScheduleEntity

```php
$schedule = $client->Schedule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |
| `pagination` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Schedule()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScheduleEntity`

Create a new `ScheduleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SeasonEntity

```php
$season = $client->Season();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |
| `pagination` | `array` | No |  |
| `season` | `array` | No |  |
| `year` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Season()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SeasonEntity`

Create a new `SeasonEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TopEntity

```php
$top = $client->Top();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `mixed` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Top()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TopEntity`

Create a new `TopEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserEntity

```php
$user = $client->User();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `mixed` | No |  |
| `pagination` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->User()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->User()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserEntity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserAboutEntity

```php
$user_about = $client->UserAbout();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->UserAbout()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserAboutEntity`

Create a new `UserAboutEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserClubEntity

```php
$user_club = $client->UserClub();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |
| `pagination` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->UserClub()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserClubEntity`

Create a new `UserClubEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserFriendEntity

```php
$user_friend = $client->UserFriend();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |
| `pagination` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->UserFriend()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserFriendEntity`

Create a new `UserFriendEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserHistoryEntity

```php
$user_history = $client->UserHistory();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | No |  |
| `entry` | `array` | No |  |
| `increment` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->UserHistory()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserHistoryEntity`

Create a new `UserHistoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserStatisticEntity

```php
$user_statistic = $client->UserStatistic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->UserStatistic()->load(["username" => "username"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserStatisticEntity`

Create a new `UserStatisticEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserUpdateEntity

```php
$user_update = $client->UserUpdate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->UserUpdate()->load(["username" => "username"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserUpdateEntity`

Create a new `UserUpdateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WatchEpisodeEntity

```php
$watch_episode = $client->WatchEpisode();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |
| `pagination` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WatchEpisode()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WatchEpisodeEntity`

Create a new `WatchEpisodeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WatchPromoEntity

```php
$watch_promo = $client->WatchPromo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |
| `pagination` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WatchPromo()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WatchPromoEntity`

Create a new `WatchPromoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new JikanRestSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

