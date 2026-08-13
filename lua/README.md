# JikanRest Lua SDK



The Lua SDK for the JikanRest API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Anime()` — each with the same small set of operations (`list`, `load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/jikan-rest-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("jikan-rest_sdk")

local client = sdk.new()
```

### 2. List anime records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local animes, err = client:Anime():list()
if err then error(err) end

for _, item in ipairs(animes) do
  print(item["aired"])
end
```

### 3. Load an userstatistic

UserStatistic is nested under username, so provide the `username`.

```lua
local userstatistic, err = client:UserStatistic():load({ username = "example_username" })
if err then error(err) end
print(userstatistic)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local externals, err = client:External():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:External():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
JIKAN_REST_TEST_LIVE=TRUE
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### JikanRestSDK

```lua
local sdk = require("jikan-rest_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### JikanRestSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Anime` | `(data) -> AnimeEntity` | Create an Anime entity instance. |
| `Character` | `(data) -> CharacterEntity` | Create a Character entity instance. |
| `Club` | `(data) -> ClubEntity` | Create a Club entity instance. |
| `External` | `(data) -> ExternalEntity` | Create an External entity instance. |
| `Genre` | `(data) -> GenreEntity` | Create a Genre entity instance. |
| `Magazine` | `(data) -> MagazineEntity` | Create a Magazine entity instance. |
| `Manga` | `(data) -> MangaEntity` | Create a Manga entity instance. |
| `PeopleSearch` | `(data) -> PeopleSearchEntity` | Create a PeopleSearch entity instance. |
| `Person` | `(data) -> PersonEntity` | Create a Person entity instance. |
| `Producer` | `(data) -> ProducerEntity` | Create a Producer entity instance. |
| `Random` | `(data) -> RandomEntity` | Create a Random entity instance. |
| `Recommendation` | `(data) -> RecommendationEntity` | Create a Recommendation entity instance. |
| `Review` | `(data) -> ReviewEntity` | Create a Review entity instance. |
| `Schedule` | `(data) -> ScheduleEntity` | Create a Schedule entity instance. |
| `Season` | `(data) -> SeasonEntity` | Create a Season entity instance. |
| `Top` | `(data) -> TopEntity` | Create a Top entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |
| `UserAbout` | `(data) -> UserAboutEntity` | Create an UserAbout entity instance. |
| `UserClub` | `(data) -> UserClubEntity` | Create an UserClub entity instance. |
| `UserFriend` | `(data) -> UserFriendEntity` | Create an UserFriend entity instance. |
| `UserHistory` | `(data) -> UserHistoryEntity` | Create an UserHistory entity instance. |
| `UserStatistic` | `(data) -> UserStatisticEntity` | Create an UserStatistic entity instance. |
| `UserUpdate` | `(data) -> UserUpdateEntity` | Create an UserUpdate entity instance. |
| `WatchEpisode` | `(data) -> WatchEpisodeEntity` | Create a WatchEpisode entity instance. |
| `WatchPromo` | `(data) -> WatchPromoEntity` | Create a WatchPromo entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local anime, err = client:Anime():load({ id = "example_id" })
    if err then error(err) end
    -- anime is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Operations: List.

API path: `/seasons/{year}/{season}`

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

Create an instance: `local anime = client:Anime(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aired` | `string` |  |
| `airing` | `boolean` |  |
| `approved` | `boolean` |  |
| `author_url` | `string` |  |
| `author_username` | `string` |  |
| `background` | `string` |  |
| `broadcast` | `table` |  |
| `character` | `table` |  |
| `comments` | `number` |  |
| `completed` | `number` |  |
| `data` | `table` |  |
| `date` | `string` |  |
| `demographics` | `table` |  |
| `dropped` | `number` |  |
| `duration` | `number` |  |
| `endings` | `table` |  |
| `entry` | `table` |  |
| `episodes` | `number` |  |
| `explicit_genres` | `table` |  |
| `external` | `table` |  |
| `favorites` | `number` |  |
| `filler` | `boolean` |  |
| `genres` | `table` |  |
| `images` | `table` |  |
| `last_comment` | `table` |  |
| `licensors` | `table` |  |
| `mal_id` | `number` |  |
| `members` | `number` |  |
| `moreinfo` | `string` |  |
| `music_videos` | `table` |  |
| `name` | `string` |  |
| `on_hold` | `number` |  |
| `openings` | `table` |  |
| `pagination` | `table` |  |
| `person` | `table` |  |
| `plan_to_watch` | `number` |  |
| `popularity` | `number` |  |
| `positions` | `table` |  |
| `producers` | `table` |  |
| `promo` | `table` |  |
| `rank` | `number` |  |
| `rating` | `string` |  |
| `recap` | `boolean` |  |
| `relation` | `string` |  |
| `relations` | `table` |  |
| `role` | `string` |  |
| `score` | `number` |  |
| `scored_by` | `number` |  |
| `scores` | `table` |  |
| `season` | `string` |  |
| `source` | `string` |  |
| `status` | `string` |  |
| `streaming` | `table` |  |
| `studios` | `table` |  |
| `synopsis` | `string` |  |
| `theme` | `table` |  |
| `themes` | `table` |  |
| `title` | `string` |  |
| `title_english` | `string` |  |
| `title_japanese` | `string` |  |
| `title_romanji` | `string` |  |
| `title_synonyms` | `table` |  |
| `titles` | `table` |  |
| `total` | `number` |  |
| `trailer` | `table` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `voice_actors` | `table` |  |
| `watching` | `number` |  |
| `year` | `number` |  |

#### Example: Load

```lua
local anime, err = client:Anime():load({ id = 1 })
```

#### Example: List

```lua
local animes, err = client:Anime():list()
```


### Character

Create an instance: `local character = client:Character(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `string` |  |
| `anime` | `table` |  |
| `data` | `table` |  |
| `favorites` | `number` |  |
| `image_url` | `string` |  |
| `images` | `table` |  |
| `language` | `string` |  |
| `large_image_url` | `string` |  |
| `mal_id` | `number` |  |
| `manga` | `table` |  |
| `name` | `string` |  |
| `name_kanji` | `string` |  |
| `nicknames` | `table` |  |
| `pagination` | `table` |  |
| `person` | `table` |  |
| `role` | `string` |  |
| `url` | `string` |  |
| `voices` | `table` |  |

#### Example: Load

```lua
local character, err = client:Character():load({ id = 1 })
```

#### Example: List

```lua
local characters, err = client:Character():list()
```


### Club

Create an instance: `local club = client:Club(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `string` |  |
| `anime` | `table` |  |
| `category` | `string` |  |
| `characters` | `table` |  |
| `created` | `string` |  |
| `data` | `table` |  |
| `images` | `table` |  |
| `mal_id` | `number` |  |
| `manga` | `table` |  |
| `members` | `number` |  |
| `name` | `string` |  |
| `pagination` | `table` |  |
| `url` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```lua
local club, err = client:Club():load({ id = 1 })
```

#### Example: List

```lua
local clubs, err = client:Club():list()
```


### External

Create an instance: `local external = client:External(nil)`

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

```lua
local externals, err = client:External():list()
```


### Genre

Create an instance: `local genre = client:Genre(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` |  |
| `mal_id` | `number` |  |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: List

```lua
local genres, err = client:Genre():list()
```


### Magazine

Create an instance: `local magazine = client:Magazine(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `pagination` | `table` |  |

#### Example: List

```lua
local magazines, err = client:Magazine():list()
```


### Manga

Create an instance: `local manga = client:Manga(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved` | `boolean` |  |
| `author_url` | `string` |  |
| `author_username` | `string` |  |
| `authors` | `table` |  |
| `background` | `string` |  |
| `chapters` | `number` |  |
| `character` | `table` |  |
| `comments` | `number` |  |
| `completed` | `number` |  |
| `data` | `table` |  |
| `date` | `string` |  |
| `demographics` | `table` |  |
| `dropped` | `number` |  |
| `entry` | `table` |  |
| `explicit_genres` | `table` |  |
| `external` | `table` |  |
| `favorites` | `number` |  |
| `genres` | `table` |  |
| `images` | `table` |  |
| `jpg` | `table` |  |
| `last_comment` | `table` |  |
| `mal_id` | `number` |  |
| `members` | `number` |  |
| `moreinfo` | `string` |  |
| `name` | `string` |  |
| `on_hold` | `number` |  |
| `pagination` | `table` |  |
| `plan_to_read` | `number` |  |
| `popularity` | `number` |  |
| `published` | `table` |  |
| `publishing` | `boolean` |  |
| `rank` | `number` |  |
| `reading` | `number` |  |
| `relation` | `string` |  |
| `relations` | `table` |  |
| `role` | `string` |  |
| `score` | `number` |  |
| `scored_by` | `number` |  |
| `scores` | `table` |  |
| `serializations` | `table` |  |
| `status` | `string` |  |
| `synopsis` | `string` |  |
| `themes` | `table` |  |
| `title` | `string` |  |
| `title_english` | `string` |  |
| `title_japanese` | `string` |  |
| `title_synonyms` | `table` |  |
| `titles` | `table` |  |
| `total` | `number` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `volumes` | `number` |  |
| `webp` | `table` |  |

#### Example: Load

```lua
local manga, err = client:Manga():load({ id = 1 })
```

#### Example: List

```lua
local mangas, err = client:Manga():list()
```


### PeopleSearch

Create an instance: `local people_search = client:PeopleSearch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `pagination` | `table` |  |

#### Example: List

```lua
local people_searchs, err = client:PeopleSearch():list()
```


### Person

Create an instance: `local person = client:Person(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `string` |  |
| `alternate_names` | `table` |  |
| `anime` | `table` |  |
| `birthday` | `string` |  |
| `character` | `table` |  |
| `data` | `table` |  |
| `family_name` | `string` |  |
| `favorites` | `number` |  |
| `given_name` | `string` |  |
| `images` | `table` |  |
| `jpg` | `table` |  |
| `mal_id` | `number` |  |
| `manga` | `table` |  |
| `name` | `string` |  |
| `pagination` | `table` |  |
| `position` | `string` |  |
| `role` | `string` |  |
| `url` | `string` |  |
| `voices` | `table` |  |
| `website_url` | `string` |  |

#### Example: Load

```lua
local person, err = client:Person():load({ id = 1 })
```

#### Example: List

```lua
local persons, err = client:Person():list()
```


### Producer

Create an instance: `local producer = client:Producer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `string` |  |
| `count` | `number` |  |
| `data` | `table` |  |
| `established` | `string` |  |
| `external` | `table` |  |
| `favorites` | `number` |  |
| `images` | `table` |  |
| `mal_id` | `number` |  |
| `name` | `string` |  |
| `pagination` | `table` |  |
| `titles` | `table` |  |
| `url` | `string` |  |

#### Example: Load

```lua
local producer, err = client:Producer():load({ id = 1 })
```

#### Example: List

```lua
local producers, err = client:Producer():list()
```


### Random

Create an instance: `local random = client:Random(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `string` |  |
| `aired` | `table` |  |
| `airing` | `boolean` |  |
| `alternate_names` | `table` |  |
| `approved` | `boolean` |  |
| `authors` | `table` |  |
| `background` | `string` |  |
| `birthday` | `string` |  |
| `broadcast` | `table` |  |
| `chapters` | `number` |  |
| `demographics` | `table` |  |
| `duration` | `string` |  |
| `episodes` | `number` |  |
| `explicit_genres` | `table` |  |
| `family_name` | `string` |  |
| `favorites` | `number` |  |
| `gender` | `string` |  |
| `genres` | `table` |  |
| `given_name` | `string` |  |
| `images` | `table` |  |
| `joined` | `string` |  |
| `last_online` | `string` |  |
| `licensors` | `table` |  |
| `location` | `string` |  |
| `mal_id` | `number` |  |
| `members` | `number` |  |
| `name` | `string` |  |
| `name_kanji` | `string` |  |
| `nicknames` | `table` |  |
| `popularity` | `number` |  |
| `producers` | `table` |  |
| `published` | `table` |  |
| `publishing` | `boolean` |  |
| `rank` | `number` |  |
| `rating` | `string` |  |
| `score` | `number` |  |
| `scored_by` | `number` |  |
| `season` | `string` |  |
| `serializations` | `table` |  |
| `source` | `string` |  |
| `status` | `string` |  |
| `studios` | `table` |  |
| `synopsis` | `string` |  |
| `themes` | `table` |  |
| `title` | `string` |  |
| `title_english` | `string` |  |
| `title_japanese` | `string` |  |
| `title_synonyms` | `table` |  |
| `titles` | `table` |  |
| `trailer` | `table` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `username` | `string` |  |
| `volumes` | `number` |  |
| `website_url` | `string` |  |
| `year` | `number` |  |

#### Example: Load

```lua
local random, err = client:Random():load()
```


### Recommendation

Create an instance: `local recommendation = client:Recommendation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `pagination` | `table` |  |

#### Example: List

```lua
local recommendations, err = client:Recommendation():list()
```


### Review

Create an instance: `local review = client:Review(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local review, err = client:Review():load()
```


### Schedule

Create an instance: `local schedule = client:Schedule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `pagination` | `table` |  |

#### Example: List

```lua
local schedules, err = client:Schedule():list()
```


### Season

Create an instance: `local season = client:Season(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `pagination` | `table` |  |
| `seasons` | `table` |  |
| `year` | `number` |  |

#### Example: List

```lua
local seasons, err = client:Season():list()
```


### Top

Create an instance: `local top = client:Top(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `pagination` | `table` |  |

#### Example: Load

```lua
local top, err = client:Top():load()
```


### User

Create an instance: `local user = client:User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | `table` |  |
| `birthday` | `string` |  |
| `characters` | `table` |  |
| `data` | `table` |  |
| `external` | `table` |  |
| `gender` | `string` |  |
| `images` | `table` |  |
| `joined` | `string` |  |
| `last_online` | `string` |  |
| `location` | `string` |  |
| `mal_id` | `number` |  |
| `manga` | `table` |  |
| `pagination` | `table` |  |
| `people` | `table` |  |
| `statistics` | `table` |  |
| `url` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```lua
local user, err = client:User():load({ id = 1 })
```

#### Example: List

```lua
local users, err = client:User():list()
```


### UserAbout

Create an instance: `local user_about = client:UserAbout(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `string` |  |

#### Example: List

```lua
local user_abouts, err = client:UserAbout():list()
```


### UserClub

Create an instance: `local user_club = client:UserClub(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `pagination` | `table` |  |

#### Example: List

```lua
local user_clubs, err = client:UserClub():list()
```


### UserFriend

Create an instance: `local user_friend = client:UserFriend(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `pagination` | `table` |  |

#### Example: List

```lua
local user_friends, err = client:UserFriend():list()
```


### UserHistory

Create an instance: `local user_history = client:UserHistory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `entry` | `table` |  |
| `increment` | `number` |  |

#### Example: List

```lua
local user_historys, err = client:UserHistory():list()
```


### UserStatistic

Create an instance: `local user_statistic = client:UserStatistic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | `table` |  |
| `manga` | `table` |  |

#### Example: Load

```lua
local user_statistic, err = client:UserStatistic():load({ username = "username" })
```


### UserUpdate

Create an instance: `local user_update = client:UserUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | `table` |  |
| `manga` | `table` |  |

#### Example: Load

```lua
local user_update, err = client:UserUpdate():load({ username = "username" })
```


### WatchEpisode

Create an instance: `local watch_episode = client:WatchEpisode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `pagination` | `table` |  |

#### Example: List

```lua
local watch_episodes, err = client:WatchEpisode():list()
```


### WatchPromo

Create an instance: `local watch_promo = client:WatchPromo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `pagination` | `table` |  |

#### Example: List

```lua
local watch_promos, err = client:WatchPromo():list()
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── jikan-rest_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`jikan-rest_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local external = client:External()
external:list()

-- external:data_get() now returns the external data from the last list
-- external:match_get() returns the last match criteria
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
