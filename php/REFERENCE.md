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
| `aired` | `string` | No | Aired Date ISO8601 |
| `airing` | `bool` | No | Airing boolean |
| `approved` | `bool` | No | Whether the entry is pending approval on MAL or not |
| `author_url` | `string` | No | Author Profile URL |
| `author_username` | `string` | No | Author MyAnimeList Username |
| `background` | `string` | No | Background |
| `broadcast` | `array` | No | Broadcast Details |
| `character` | `array` | No | Character details |
| `comments` | `int` | No | Comment count |
| `completed` | `int` | No | Number of users who have completed the resource |
| `data` | `array` | No |  |
| `date` | `string` | No | Post Date ISO8601 |
| `demographics` | `array` | No |  |
| `dropped` | `int` | No | Number of users who have dropped the resource |
| `duration` | `int` | No | Episode duration in seconds |
| `endings` | `array` | No |  |
| `entry` | `array` | No | Related entries |
| `episodes` | `int` | No | Episode count |
| `explicit_genres` | `array` | No |  |
| `external` | `array` | No |  |
| `favorites` | `int` | No | Number of users who have favorited this entry |
| `filler` | `bool` | No | Filler episode |
| `genres` | `array` | No |  |
| `id` | `string` | No |  |
| `images` | `array` | No |  |
| `last_comment` | `array` | No | Last comment details |
| `licensors` | `array` | No |  |
| `mal_id` | `int` | No | MyAnimeList ID |
| `members` | `int` | No | Number of users who have added this entry to their list |
| `moreinfo` | `string` | No | Additional information on the entry |
| `music_videos` | `array` | No |  |
| `name` | `string` | No |  |
| `on_hold` | `int` | No | Number of users who have put the resource on hold |
| `openings` | `array` | No |  |
| `pagination` | `array` | No |  |
| `person` | `array` | No | Person details |
| `plan_to_watch` | `int` | No | Number of users who have planned to watch the resource |
| `popularity` | `int` | No | Popularity |
| `positions` | `array` | No | Staff Positions |
| `producers` | `array` | No |  |
| `promo` | `array` | No |  |
| `rank` | `int` | No | Ranking |
| `rating` | `string` | No | Anime audience rating |
| `recap` | `bool` | No | Recap episode |
| `relation` | `string` | No | Relation type |
| `relations` | `array` | No |  |
| `role` | `string` | No | Character's Role |
| `score` | `float` | No | Score |
| `scored_by` | `int` | No | Number of users |
| `scores` | `array` | No |  |
| `season` | `string` | No | Season |
| `source` | `string` | No | Original Material/Source adapted from |
| `status` | `string` | No | Airing status |
| `streaming` | `array` | No |  |
| `studios` | `array` | No |  |
| `synopsis` | `string` | No | Episode Synopsis |
| `theme` | `array` | No |  |
| `themes` | `array` | No |  |
| `title` | `string` | No | Title |
| `title_english` | `string` | No | English Title |
| `title_japanese` | `string` | No | Title Japanese |
| `title_romanji` | `string` | No | title_romanji |
| `title_synonyms` | `array` | No | Other Titles |
| `titles` | `array` | No | All titles |
| `total` | `int` | No | Total number of users who have the resource added to their lists |
| `trailer` | `array` | No | Youtube Details |
| `type` | `string` | No | Anime Type |
| `url` | `string` | No | MyAnimeList URL |
| `voice_actors` | `array` | No |  |
| `watching` | `int` | No | Number of users watching the resource |
| `year` | `int` | No | Year |

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
| `about` | `string` | No | Biography |
| `anime` | `array` | No |  |
| `data` | `array` | No |  |
| `favorites` | `int` | No | Number of users who have favorited this entry |
| `id` | `string` | No |  |
| `image_url` | `string` | No | Default JPG Image Size URL |
| `images` | `array` | No |  |
| `language` | `string` | No | Character's Role |
| `large_image_url` | `string` | No | Large JPG Image Size URL |
| `mal_id` | `int` | No | MyAnimeList ID |
| `manga` | `array` | No |  |
| `name` | `string` | No | Name |
| `name_kanji` | `string` | No | Name |
| `nicknames` | `array` | No | Other Names |
| `pagination` | `array` | No |  |
| `person` | `array` | No |  |
| `role` | `string` | No | Character's Role |
| `url` | `string` | No | MyAnimeList URL |
| `voices` | `array` | No |  |

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
| `access` | `string` | No | Club access |
| `anime` | `array` | No |  |
| `category` | `string` | No | Club Category |
| `characters` | `array` | No |  |
| `created` | `string` | No | Date Created ISO8601 |
| `data` | `array` | No |  |
| `id` | `string` | No |  |
| `images` | `array` | No |  |
| `mal_id` | `int` | No | MyAnimeList ID |
| `manga` | `array` | No |  |
| `members` | `int` | No | Number of club members |
| `name` | `string` | No | Club name |
| `pagination` | `array` | No |  |
| `url` | `string` | No | Club URL |
| `username` | `string` | No | User's username |

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
| `count` | `int` | No | Genre's entry count |
| `mal_id` | `int` | No | MyAnimeList ID |
| `name` | `string` | No | Genre Name |
| `url` | `string` | No | MyAnimeList URL |

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
| `approved` | `bool` | No | Whether the entry is pending approval on MAL or not |
| `author_url` | `string` | No | Author Profile URL |
| `author_username` | `string` | No | Author MyAnimeList Username |
| `authors` | `array` | No |  |
| `background` | `string` | No | Background |
| `chapters` | `int` | No | Chapter count |
| `character` | `array` | No |  |
| `comments` | `int` | No | Comment count |
| `completed` | `int` | No | Number of users who have completed the resource |
| `data` | `array` | No |  |
| `date` | `string` | No | Post Date ISO8601 |
| `demographics` | `array` | No |  |
| `dropped` | `int` | No | Number of users who have dropped the resource |
| `entry` | `array` | No | Related entries |
| `explicit_genres` | `array` | No |  |
| `external` | `array` | No |  |
| `favorites` | `int` | No | Number of users who have favorited this entry |
| `genres` | `array` | No |  |
| `id` | `string` | No |  |
| `images` | `array` | No |  |
| `jpg` | `array` | No | Available images in JPG |
| `last_comment` | `array` | No | Last comment details |
| `mal_id` | `int` | No | MyAnimeList ID |
| `members` | `int` | No | Number of users who have added this entry to their list |
| `moreinfo` | `string` | No | Additional information on the entry |
| `name` | `string` | No |  |
| `on_hold` | `int` | No | Number of users who have put the resource on hold |
| `pagination` | `array` | No |  |
| `plan_to_read` | `int` | No | Number of users who have planned to read the resource |
| `popularity` | `int` | No | Popularity |
| `published` | `array` | No | Date range |
| `publishing` | `bool` | No | Publishing boolean |
| `rank` | `int` | No | Ranking |
| `reading` | `int` | No | Number of users reading the resource |
| `relation` | `string` | No | Relation type |
| `relations` | `array` | No |  |
| `role` | `string` | No | Character's Role |
| `score` | `float` | No | Score |
| `scored_by` | `int` | No | Number of users |
| `scores` | `array` | No |  |
| `serializations` | `array` | No |  |
| `status` | `string` | No | Publishing status |
| `synopsis` | `string` | No | Synopsis |
| `themes` | `array` | No |  |
| `title` | `string` | No | Title |
| `title_english` | `string` | No | English Title |
| `title_japanese` | `string` | No | Japanese Title |
| `title_synonyms` | `array` | No | Other Titles |
| `titles` | `array` | No | All Titles |
| `total` | `int` | No | Total number of users who have the resource added to their lists |
| `type` | `string` | No | Manga Type |
| `url` | `string` | No | MyAnimeList URL |
| `volumes` | `int` | No | Volume count |
| `webp` | `array` | No | Available images in WEBP |

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
| `about` | `string` | No | Biography |
| `alternate_names` | `array` | No | Other Names |
| `anime` | `array` | No |  |
| `birthday` | `string` | No | Birthday Date ISO8601 |
| `character` | `array` | No |  |
| `data` | `array` | No |  |
| `family_name` | `string` | No | Family Name |
| `favorites` | `int` | No | Number of users who have favorited this entry |
| `given_name` | `string` | No | Given Name |
| `id` | `string` | No |  |
| `images` | `array` | No |  |
| `jpg` | `array` | No | Available images in JPG |
| `mal_id` | `int` | No | MyAnimeList ID |
| `manga` | `array` | No |  |
| `name` | `string` | No | Name |
| `pagination` | `array` | No |  |
| `position` | `string` | No | Person's position |
| `role` | `string` | No | Person's Character's role in the anime |
| `url` | `string` | No | MyAnimeList URL |
| `voices` | `array` | No |  |
| `website_url` | `string` | No | Person's website URL |

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
| `about` | `string` | No | About the Producer |
| `count` | `int` | No | Producers's anime count |
| `data` | `array` | No |  |
| `established` | `string` | No | Established Date ISO8601 |
| `external` | `array` | No |  |
| `favorites` | `int` | No | Producers's member favorites count |
| `id` | `string` | No |  |
| `images` | `array` | No |  |
| `mal_id` | `int` | No | MyAnimeList ID |
| `name` | `string` | No |  |
| `pagination` | `array` | No |  |
| `titles` | `array` | No | All titles |
| `url` | `string` | No | MyAnimeList URL |

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
| `about` | `string` | No | Biography |
| `aired` | `array` | No | Date range |
| `airing` | `bool` | No | Airing boolean |
| `alternate_names` | `array` | No | Other Names |
| `approved` | `bool` | No | Whether the entry is pending approval on MAL or not |
| `authors` | `array` | No |  |
| `background` | `string` | No | Background |
| `birthday` | `string` | No | Birthday Date ISO8601 |
| `broadcast` | `array` | No | Broadcast Details |
| `chapters` | `int` | No | Chapter count |
| `demographics` | `array` | No |  |
| `duration` | `string` | No | Parsed raw duration |
| `episodes` | `int` | No | Episode count |
| `explicit_genres` | `array` | No |  |
| `family_name` | `string` | No | Family Name |
| `favorites` | `int` | No | Number of users who have favorited this entry |
| `gender` | `string` | No | User Gender |
| `genres` | `array` | No |  |
| `given_name` | `string` | No | Given Name |
| `images` | `array` | No |  |
| `joined` | `string` | No | Joined Date ISO8601 |
| `last_online` | `string` | No | Last Online Date ISO8601 |
| `licensors` | `array` | No |  |
| `location` | `string` | No | Location |
| `mal_id` | `int` | No | MyAnimeList ID |
| `members` | `int` | No | Number of users who have added this entry to their list |
| `name` | `string` | No | Name |
| `name_kanji` | `string` | No | Name |
| `nicknames` | `array` | No | Other Names |
| `popularity` | `int` | No | Popularity |
| `producers` | `array` | No |  |
| `published` | `array` | No | Date range |
| `publishing` | `bool` | No | Publishing boolean |
| `rank` | `int` | No | Ranking |
| `rating` | `string` | No | Anime audience rating |
| `score` | `float` | No | Score |
| `scored_by` | `int` | No | Number of users |
| `season` | `string` | No | Season |
| `serializations` | `array` | No |  |
| `source` | `string` | No | Original Material/Source adapted from |
| `status` | `string` | No | Airing status |
| `studios` | `array` | No |  |
| `synopsis` | `string` | No | Synopsis |
| `themes` | `array` | No |  |
| `title` | `string` | No | Title |
| `title_english` | `string` | No | English Title |
| `title_japanese` | `string` | No | Japanese Title |
| `title_synonyms` | `array` | No | Other Titles |
| `titles` | `array` | No | All titles |
| `trailer` | `array` | No | Youtube Details |
| `type` | `string` | No | Anime Type |
| `url` | `string` | No | MyAnimeList URL |
| `username` | `string` | No | MyAnimeList Username |
| `volumes` | `int` | No | Volume count |
| `website_url` | `string` | No | Person's website URL |
| `year` | `int` | No | Year |

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
| `seasons` | `array` | No | List of available seasons |
| `year` | `int` | No | Year |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Season()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Season()->load(["season" => "season", "year" => 1]);
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
| `data` | `array` | No |  |
| `pagination` | `array` | No |  |

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
| `anime` | `array` | No | Favorite Anime |
| `birthday` | `string` | No | Birthday Date ISO8601 |
| `characters` | `array` | No | Favorite Characters |
| `data` | `array` | No |  |
| `external` | `array` | No |  |
| `gender` | `string` | No | User Gender |
| `id` | `string` | No |  |
| `images` | `array` | No |  |
| `joined` | `string` | No | Joined Date ISO8601 |
| `last_online` | `string` | No | Last Online Date ISO8601 |
| `location` | `string` | No | Location |
| `mal_id` | `int` | No | MyAnimeList ID |
| `manga` | `array` | No | Favorite Manga |
| `pagination` | `array` | No |  |
| `people` | `array` | No | Favorite People |
| `statistics` | `array` | No |  |
| `url` | `string` | No | MyAnimeList URL |
| `username` | `string` | No | MyAnimeList Username |

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
| `about` | `string` | No | User About. |

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
| `date` | `string` | No | Date ISO8601 |
| `entry` | `array` | No | Parsed URL Data |
| `increment` | `int` | No | Number of episodes/chapters watched/read |

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
| `anime` | `array` | No | Anime Statistics |
| `manga` | `array` | No | Manga Statistics |

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
| `anime` | `array` | No | Last updated Anime |
| `manga` | `array` | No | Last updated Manga |

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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

