# JikanRest Lua SDK Reference

Complete API reference for the JikanRest Lua SDK.


## JikanRestSDK

### Constructor

```lua
local sdk = require("jikan-rest_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Anime(data)`

Create a new `Anime` entity instance. Pass `nil` for no initial data.

#### `Character(data)`

Create a new `Character` entity instance. Pass `nil` for no initial data.

#### `Club(data)`

Create a new `Club` entity instance. Pass `nil` for no initial data.

#### `External(data)`

Create a new `External` entity instance. Pass `nil` for no initial data.

#### `Genre(data)`

Create a new `Genre` entity instance. Pass `nil` for no initial data.

#### `Magazine(data)`

Create a new `Magazine` entity instance. Pass `nil` for no initial data.

#### `Manga(data)`

Create a new `Manga` entity instance. Pass `nil` for no initial data.

#### `PeopleSearch(data)`

Create a new `PeopleSearch` entity instance. Pass `nil` for no initial data.

#### `Person(data)`

Create a new `Person` entity instance. Pass `nil` for no initial data.

#### `Producer(data)`

Create a new `Producer` entity instance. Pass `nil` for no initial data.

#### `Random(data)`

Create a new `Random` entity instance. Pass `nil` for no initial data.

#### `Recommendation(data)`

Create a new `Recommendation` entity instance. Pass `nil` for no initial data.

#### `Review(data)`

Create a new `Review` entity instance. Pass `nil` for no initial data.

#### `Schedule(data)`

Create a new `Schedule` entity instance. Pass `nil` for no initial data.

#### `Season(data)`

Create a new `Season` entity instance. Pass `nil` for no initial data.

#### `Top(data)`

Create a new `Top` entity instance. Pass `nil` for no initial data.

#### `User(data)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserAbout(data)`

Create a new `UserAbout` entity instance. Pass `nil` for no initial data.

#### `UserClub(data)`

Create a new `UserClub` entity instance. Pass `nil` for no initial data.

#### `UserFriend(data)`

Create a new `UserFriend` entity instance. Pass `nil` for no initial data.

#### `UserHistory(data)`

Create a new `UserHistory` entity instance. Pass `nil` for no initial data.

#### `UserStatistic(data)`

Create a new `UserStatistic` entity instance. Pass `nil` for no initial data.

#### `UserUpdate(data)`

Create a new `UserUpdate` entity instance. Pass `nil` for no initial data.

#### `WatchEpisode(data)`

Create a new `WatchEpisode` entity instance. Pass `nil` for no initial data.

#### `WatchPromo(data)`

Create a new `WatchPromo` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AnimeEntity

```lua
local anime = client:Anime(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aired` | `string` | No |  |
| `airing` | `boolean` | No |  |
| `approved` | `boolean` | No |  |
| `author_url` | `string` | No |  |
| `author_username` | `string` | No |  |
| `background` | `string` | No |  |
| `broadcast` | `table` | No |  |
| `character` | `table` | No |  |
| `comments` | `number` | No |  |
| `completed` | `number` | No |  |
| `data` | `table` | No |  |
| `date` | `string` | No |  |
| `demographics` | `table` | No |  |
| `dropped` | `number` | No |  |
| `duration` | `number` | No |  |
| `endings` | `table` | No |  |
| `entry` | `table` | No |  |
| `episodes` | `number` | No |  |
| `explicit_genres` | `table` | No |  |
| `external` | `table` | No |  |
| `favorites` | `number` | No |  |
| `filler` | `boolean` | No |  |
| `genres` | `table` | No |  |
| `images` | `table` | No |  |
| `last_comment` | `table` | No |  |
| `licensors` | `table` | No |  |
| `mal_id` | `number` | No |  |
| `members` | `number` | No |  |
| `moreinfo` | `string` | No |  |
| `music_videos` | `table` | No |  |
| `name` | `string` | No |  |
| `on_hold` | `number` | No |  |
| `openings` | `table` | No |  |
| `pagination` | `table` | No |  |
| `person` | `table` | No |  |
| `plan_to_watch` | `number` | No |  |
| `popularity` | `number` | No |  |
| `positions` | `table` | No |  |
| `producers` | `table` | No |  |
| `promo` | `table` | No |  |
| `rank` | `number` | No |  |
| `rating` | `string` | No |  |
| `recap` | `boolean` | No |  |
| `relation` | `string` | No |  |
| `relations` | `table` | No |  |
| `role` | `string` | No |  |
| `score` | `number` | No |  |
| `scored_by` | `number` | No |  |
| `scores` | `table` | No |  |
| `season` | `string` | No |  |
| `source` | `string` | No |  |
| `status` | `string` | No |  |
| `streaming` | `table` | No |  |
| `studios` | `table` | No |  |
| `synopsis` | `string` | No |  |
| `theme` | `table` | No |  |
| `themes` | `table` | No |  |
| `title` | `string` | No |  |
| `title_english` | `string` | No |  |
| `title_japanese` | `string` | No |  |
| `title_romanji` | `string` | No |  |
| `title_synonyms` | `table` | No |  |
| `titles` | `table` | No |  |
| `total` | `number` | No |  |
| `trailer` | `table` | No |  |
| `type` | `string` | No |  |
| `url` | `string` | No |  |
| `voice_actors` | `table` | No |  |
| `watching` | `number` | No |  |
| `year` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Anime():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Anime():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnimeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CharacterEntity

```lua
local character = client:Character(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `string` | No |  |
| `anime` | `table` | No |  |
| `data` | `table` | No |  |
| `favorites` | `number` | No |  |
| `image_url` | `string` | No |  |
| `images` | `table` | No |  |
| `language` | `string` | No |  |
| `large_image_url` | `string` | No |  |
| `mal_id` | `number` | No |  |
| `manga` | `table` | No |  |
| `name` | `string` | No |  |
| `name_kanji` | `string` | No |  |
| `nicknames` | `table` | No |  |
| `pagination` | `table` | No |  |
| `person` | `table` | No |  |
| `role` | `string` | No |  |
| `url` | `string` | No |  |
| `voices` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Character():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Character():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CharacterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ClubEntity

```lua
local club = client:Club(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `string` | No |  |
| `anime` | `table` | No |  |
| `category` | `string` | No |  |
| `characters` | `table` | No |  |
| `created` | `string` | No |  |
| `data` | `table` | No |  |
| `images` | `table` | No |  |
| `mal_id` | `number` | No |  |
| `manga` | `table` | No |  |
| `members` | `number` | No |  |
| `name` | `string` | No |  |
| `pagination` | `table` | No |  |
| `url` | `string` | No |  |
| `username` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Club():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Club():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClubEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ExternalEntity

```lua
local external = client:External(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:External():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExternalEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GenreEntity

```lua
local genre = client:Genre(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | No |  |
| `mal_id` | `number` | No |  |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Genre():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenreEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MagazineEntity

```lua
local magazine = client:Magazine(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No |  |
| `pagination` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Magazine():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MagazineEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MangaEntity

```lua
local manga = client:Manga(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved` | `boolean` | No |  |
| `author_url` | `string` | No |  |
| `author_username` | `string` | No |  |
| `authors` | `table` | No |  |
| `background` | `string` | No |  |
| `chapters` | `number` | No |  |
| `character` | `table` | No |  |
| `comments` | `number` | No |  |
| `completed` | `number` | No |  |
| `data` | `table` | No |  |
| `date` | `string` | No |  |
| `demographics` | `table` | No |  |
| `dropped` | `number` | No |  |
| `entry` | `table` | No |  |
| `explicit_genres` | `table` | No |  |
| `external` | `table` | No |  |
| `favorites` | `number` | No |  |
| `genres` | `table` | No |  |
| `images` | `table` | No |  |
| `jpg` | `table` | No |  |
| `last_comment` | `table` | No |  |
| `mal_id` | `number` | No |  |
| `members` | `number` | No |  |
| `moreinfo` | `string` | No |  |
| `name` | `string` | No |  |
| `on_hold` | `number` | No |  |
| `pagination` | `table` | No |  |
| `plan_to_read` | `number` | No |  |
| `popularity` | `number` | No |  |
| `published` | `table` | No |  |
| `publishing` | `boolean` | No |  |
| `rank` | `number` | No |  |
| `reading` | `number` | No |  |
| `relation` | `string` | No |  |
| `relations` | `table` | No |  |
| `role` | `string` | No |  |
| `score` | `number` | No |  |
| `scored_by` | `number` | No |  |
| `scores` | `table` | No |  |
| `serializations` | `table` | No |  |
| `status` | `string` | No |  |
| `synopsis` | `string` | No |  |
| `themes` | `table` | No |  |
| `title` | `string` | No |  |
| `title_english` | `string` | No |  |
| `title_japanese` | `string` | No |  |
| `title_synonyms` | `table` | No |  |
| `titles` | `table` | No |  |
| `total` | `number` | No |  |
| `type` | `string` | No |  |
| `url` | `string` | No |  |
| `volumes` | `number` | No |  |
| `webp` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Manga():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Manga():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MangaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PeopleSearchEntity

```lua
local people_search = client:PeopleSearch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No |  |
| `pagination` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PeopleSearch():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PeopleSearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PersonEntity

```lua
local person = client:Person(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `string` | No |  |
| `alternate_names` | `table` | No |  |
| `anime` | `table` | No |  |
| `birthday` | `string` | No |  |
| `character` | `table` | No |  |
| `data` | `table` | No |  |
| `family_name` | `string` | No |  |
| `favorites` | `number` | No |  |
| `given_name` | `string` | No |  |
| `images` | `table` | No |  |
| `jpg` | `table` | No |  |
| `mal_id` | `number` | No |  |
| `manga` | `table` | No |  |
| `name` | `string` | No |  |
| `pagination` | `table` | No |  |
| `position` | `string` | No |  |
| `role` | `string` | No |  |
| `url` | `string` | No |  |
| `voices` | `table` | No |  |
| `website_url` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Person():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Person():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PersonEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProducerEntity

```lua
local producer = client:Producer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `string` | No |  |
| `count` | `number` | No |  |
| `data` | `table` | No |  |
| `established` | `string` | No |  |
| `external` | `table` | No |  |
| `favorites` | `number` | No |  |
| `images` | `table` | No |  |
| `mal_id` | `number` | No |  |
| `name` | `string` | No |  |
| `pagination` | `table` | No |  |
| `titles` | `table` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Producer():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Producer():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProducerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RandomEntity

```lua
local random = client:Random(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `string` | No |  |
| `aired` | `table` | No |  |
| `airing` | `boolean` | No |  |
| `alternate_names` | `table` | No |  |
| `approved` | `boolean` | No |  |
| `authors` | `table` | No |  |
| `background` | `string` | No |  |
| `birthday` | `string` | No |  |
| `broadcast` | `table` | No |  |
| `chapters` | `number` | No |  |
| `demographics` | `table` | No |  |
| `duration` | `string` | No |  |
| `episodes` | `number` | No |  |
| `explicit_genres` | `table` | No |  |
| `family_name` | `string` | No |  |
| `favorites` | `number` | No |  |
| `gender` | `string` | No |  |
| `genres` | `table` | No |  |
| `given_name` | `string` | No |  |
| `images` | `table` | No |  |
| `joined` | `string` | No |  |
| `last_online` | `string` | No |  |
| `licensors` | `table` | No |  |
| `location` | `string` | No |  |
| `mal_id` | `number` | No |  |
| `members` | `number` | No |  |
| `name` | `string` | No |  |
| `name_kanji` | `string` | No |  |
| `nicknames` | `table` | No |  |
| `popularity` | `number` | No |  |
| `producers` | `table` | No |  |
| `published` | `table` | No |  |
| `publishing` | `boolean` | No |  |
| `rank` | `number` | No |  |
| `rating` | `string` | No |  |
| `score` | `number` | No |  |
| `scored_by` | `number` | No |  |
| `season` | `string` | No |  |
| `serializations` | `table` | No |  |
| `source` | `string` | No |  |
| `status` | `string` | No |  |
| `studios` | `table` | No |  |
| `synopsis` | `string` | No |  |
| `themes` | `table` | No |  |
| `title` | `string` | No |  |
| `title_english` | `string` | No |  |
| `title_japanese` | `string` | No |  |
| `title_synonyms` | `table` | No |  |
| `titles` | `table` | No |  |
| `trailer` | `table` | No |  |
| `type` | `string` | No |  |
| `url` | `string` | No |  |
| `username` | `string` | No |  |
| `volumes` | `number` | No |  |
| `website_url` | `string` | No |  |
| `year` | `number` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Random():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RandomEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RecommendationEntity

```lua
local recommendation = client:Recommendation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No |  |
| `pagination` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Recommendation():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RecommendationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReviewEntity

```lua
local review = client:Review(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Review():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReviewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScheduleEntity

```lua
local schedule = client:Schedule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No |  |
| `pagination` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Schedule():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SeasonEntity

```lua
local season = client:Season(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No |  |
| `pagination` | `table` | No |  |
| `seasons` | `table` | No |  |
| `year` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Season():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeasonEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TopEntity

```lua
local top = client:Top(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No |  |
| `pagination` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Top():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserEntity

```lua
local user = client:User(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | `table` | No |  |
| `birthday` | `string` | No |  |
| `characters` | `table` | No |  |
| `data` | `table` | No |  |
| `external` | `table` | No |  |
| `gender` | `string` | No |  |
| `images` | `table` | No |  |
| `joined` | `string` | No |  |
| `last_online` | `string` | No |  |
| `location` | `string` | No |  |
| `mal_id` | `number` | No |  |
| `manga` | `table` | No |  |
| `pagination` | `table` | No |  |
| `people` | `table` | No |  |
| `statistics` | `table` | No |  |
| `url` | `string` | No |  |
| `username` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:User():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:User():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserAboutEntity

```lua
local user_about = client:UserAbout(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:UserAbout():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserAboutEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserClubEntity

```lua
local user_club = client:UserClub(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No |  |
| `pagination` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:UserClub():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserClubEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserFriendEntity

```lua
local user_friend = client:UserFriend(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No |  |
| `pagination` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:UserFriend():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserFriendEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserHistoryEntity

```lua
local user_history = client:UserHistory(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | No |  |
| `entry` | `table` | No |  |
| `increment` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:UserHistory():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserHistoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserStatisticEntity

```lua
local user_statistic = client:UserStatistic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | `table` | No |  |
| `manga` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:UserStatistic():load({ username = "username" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserStatisticEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserUpdateEntity

```lua
local user_update = client:UserUpdate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | `table` | No |  |
| `manga` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:UserUpdate():load({ username = "username" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserUpdateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WatchEpisodeEntity

```lua
local watch_episode = client:WatchEpisode(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No |  |
| `pagination` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WatchEpisode():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WatchEpisodeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WatchPromoEntity

```lua
local watch_promo = client:WatchPromo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No |  |
| `pagination` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WatchPromo():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WatchPromoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

