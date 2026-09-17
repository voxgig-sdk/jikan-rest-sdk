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
| `aired` | `string` | No | Aired Date ISO8601 |
| `airing` | `boolean` | No | Airing boolean |
| `approved` | `boolean` | No | Whether the entry is pending approval on MAL or not |
| `background` | `string` | No | Background |
| `broadcast` | `table` | No | Broadcast Details |
| `data` | `table` | No |  |
| `demographics` | `table` | No |  |
| `duration` | `number` | No | Episode duration in seconds |
| `episodes` | `number` | No | Episode count |
| `explicit_genres` | `table` | No |  |
| `favorites` | `number` | No | Number of users who have favorited this entry |
| `filler` | `boolean` | No | Filler episode |
| `genres` | `table` | No |  |
| `id` | `string` | No |  |
| `images` | `table` | No |  |
| `licensors` | `table` | No |  |
| `mal_id` | `number` | No | MyAnimeList ID |
| `members` | `number` | No | Number of users who have added this entry to their list |
| `pagination` | `table` | No |  |
| `popularity` | `number` | No | Popularity |
| `producers` | `table` | No |  |
| `rank` | `number` | No | Ranking |
| `rating` | `string` | No | Anime audience rating |
| `recap` | `boolean` | No | Recap episode |
| `score` | `number` | No | Score |
| `scored_by` | `number` | No | Number of users |
| `season` | `string` | No | Season |
| `source` | `string` | No | Original Material/Source adapted from |
| `status` | `string` | No | Airing status |
| `studios` | `table` | No |  |
| `synopsis` | `string` | No | Episode Synopsis |
| `themes` | `table` | No |  |
| `title` | `string` | No | Title |
| `title_english` | `string` | No | English Title |
| `title_japanese` | `string` | No | Title Japanese |
| `title_romanji` | `string` | No | title_romanji |
| `title_synonyms` | `table` | No | Other Titles |
| `titles` | `table` | No | All titles |
| `trailer` | `table` | No | Youtube Details |
| `type` | `string` | No | Anime Type |
| `url` | `string` | No | MyAnimeList URL |
| `year` | `number` | No | Year |

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
| `about` | `string` | No | Biography |
| `data` | `table` | No |  |
| `favorites` | `number` | No | Number of users who have favorited this entry |
| `id` | `string` | No |  |
| `images` | `table` | No |  |
| `mal_id` | `number` | No | MyAnimeList ID |
| `name` | `string` | No | Name |
| `name_kanji` | `string` | No | Name |
| `nicknames` | `table` | No | Other Names |
| `pagination` | `table` | No |  |
| `url` | `string` | No | MyAnimeList URL |

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
| `access` | `string` | No | Club access |
| `category` | `string` | No | Club Category |
| `created` | `string` | No | Date Created ISO8601 |
| `data` | `table` | No |  |
| `id` | `string` | No |  |
| `images` | `table` | No |  |
| `mal_id` | `number` | No | MyAnimeList ID |
| `members` | `number` | No | Number of club members |
| `name` | `string` | No | Club name |
| `pagination` | `table` | No |  |
| `url` | `string` | No | Club URL |

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
| `count` | `number` | No | Genre's entry count |
| `mal_id` | `number` | No | MyAnimeList ID |
| `name` | `string` | No | Genre Name |
| `url` | `string` | No | MyAnimeList URL |

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
| `approved` | `boolean` | No | Whether the entry is pending approval on MAL or not |
| `authors` | `table` | No |  |
| `background` | `string` | No | Background |
| `chapters` | `number` | No | Chapter count |
| `data` | `table` | No |  |
| `demographics` | `table` | No |  |
| `explicit_genres` | `table` | No |  |
| `favorites` | `number` | No | Number of users who have favorited this entry |
| `genres` | `table` | No |  |
| `id` | `string` | No |  |
| `images` | `table` | No |  |
| `mal_id` | `number` | No | MyAnimeList ID |
| `members` | `number` | No | Number of users who have added this entry to their list |
| `pagination` | `table` | No |  |
| `popularity` | `number` | No | Popularity |
| `published` | `table` | No | Date range |
| `publishing` | `boolean` | No | Publishing boolean |
| `rank` | `number` | No | Ranking |
| `score` | `number` | No | Score |
| `scored_by` | `number` | No | Number of users |
| `serializations` | `table` | No |  |
| `status` | `string` | No | Publishing status |
| `synopsis` | `string` | No | Synopsis |
| `themes` | `table` | No |  |
| `title` | `string` | No | Title |
| `title_english` | `string` | No | English Title |
| `title_japanese` | `string` | No | Japanese Title |
| `titles` | `table` | No | All Titles |
| `type` | `string` | No | Manga Type |
| `url` | `string` | No | MyAnimeList URL |
| `volumes` | `number` | No | Volume count |

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
| `about` | `string` | No | Biography |
| `alternate_names` | `table` | No | Other Names |
| `birthday` | `string` | No | Birthday Date ISO8601 |
| `data` | `table` | No |  |
| `family_name` | `string` | No | Family Name |
| `favorites` | `number` | No | Number of users who have favorited this entry |
| `given_name` | `string` | No | Given Name |
| `id` | `string` | No |  |
| `images` | `table` | No |  |
| `mal_id` | `number` | No | MyAnimeList ID |
| `name` | `string` | No | Name |
| `pagination` | `table` | No |  |
| `url` | `string` | No | MyAnimeList URL |
| `website_url` | `string` | No | Person's website URL |

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
| `about` | `string` | No | About the Producer |
| `count` | `number` | No | Producers's anime count |
| `data` | `table` | No |  |
| `established` | `string` | No | Established Date ISO8601 |
| `favorites` | `number` | No | Producers's member favorites count |
| `id` | `string` | No |  |
| `images` | `table` | No |  |
| `mal_id` | `number` | No | MyAnimeList ID |
| `pagination` | `table` | No |  |
| `titles` | `table` | No | All titles |
| `url` | `string` | No | MyAnimeList URL |

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
| `id` | `string` | No |  |
| `pagination` | `table` | No |  |
| `seasons` | `table` | No | List of available seasons |
| `year` | `number` | No | Year |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Season():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Season():load({ season = "season", year = 1 })
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
| `birthday` | `string` | No | Birthday Date ISO8601 |
| `data` | `table` | No |  |
| `gender` | `string` | No | User Gender |
| `id` | `string` | No |  |
| `images` | `table` | No |  |
| `joined` | `string` | No | Joined Date ISO8601 |
| `last_online` | `string` | No | Last Online Date ISO8601 |
| `location` | `string` | No | Location |
| `mal_id` | `number` | No | MyAnimeList ID |
| `pagination` | `table` | No |  |
| `url` | `string` | No | MyAnimeList URL |
| `username` | `string` | No | MyAnimeList Username |

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
| `about` | `string` | No | User About. |

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
| `date` | `string` | No | Date ISO8601 |
| `entry` | `table` | No | Parsed URL Data |
| `increment` | `number` | No | Number of episodes/chapters watched/read |

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
| `anime` | `table` | No | Anime Statistics |
| `manga` | `table` | No | Manga Statistics |

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
| `anime` | `table` | No | Last updated Anime |
| `manga` | `table` | No | Last updated Manga |

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
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

