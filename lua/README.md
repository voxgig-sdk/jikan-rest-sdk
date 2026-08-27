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
  print(item["id"], item["aired"])
end
```

### 3. Load a season

Season is nested under season, so provide the `season`.

```lua
local season, err = client:Season():load({ season = "example_season", year = 1 })
if err then error(err) end
print(season)
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
| `aired` | Aired Date ISO8601 |
| `airing` | Airing boolean |
| `approved` | Whether the entry is pending approval on MAL or not |
| `author_url` | Author Profile URL |
| `author_username` | Author MyAnimeList Username |
| `background` | Background |
| `broadcast` | Broadcast Details |
| `character` | Character details |
| `comments` | Comment count |
| `completed` | Number of users who have completed the resource |
| `data` |  |
| `date` | Post Date ISO8601 |
| `demographics` |  |
| `dropped` | Number of users who have dropped the resource |
| `duration` | Episode duration in seconds |
| `endings` |  |
| `entry` | Related entries |
| `episodes` | Episode count |
| `explicit_genres` |  |
| `external` |  |
| `favorites` | Number of users who have favorited this entry |
| `filler` | Filler episode |
| `genres` |  |
| `id` |  |
| `images` |  |
| `last_comment` | Last comment details |
| `licensors` |  |
| `mal_id` | MyAnimeList ID |
| `members` | Number of users who have added this entry to their list |
| `moreinfo` | Additional information on the entry |
| `music_videos` |  |
| `name` |  |
| `on_hold` | Number of users who have put the resource on hold |
| `openings` |  |
| `pagination` |  |
| `person` | Person details |
| `plan_to_watch` | Number of users who have planned to watch the resource |
| `popularity` | Popularity |
| `positions` | Staff Positions |
| `producers` |  |
| `promo` |  |
| `rank` | Ranking |
| `rating` | Anime audience rating |
| `recap` | Recap episode |
| `relation` | Relation type |
| `relations` |  |
| `role` | Character's Role |
| `score` | Score |
| `scored_by` | Number of users |
| `scores` |  |
| `season` | Season |
| `source` | Original Material/Source adapted from |
| `status` | Airing status |
| `streaming` |  |
| `studios` |  |
| `synopsis` | Episode Synopsis |
| `theme` |  |
| `themes` |  |
| `title` | Title |
| `title_english` | English Title |
| `title_japanese` | Title Japanese |
| `title_romanji` | title_romanji |
| `title_synonyms` | Other Titles |
| `titles` | All titles |
| `total` | Total number of users who have the resource added to their lists |
| `trailer` | Youtube Details |
| `type` | Anime Type |
| `url` | MyAnimeList URL |
| `voice_actors` |  |
| `watching` | Number of users watching the resource |
| `year` | Year |

Operations: List, Load.

API path: `/anime`

#### Character

| Field | Description |
| --- | --- |
| `about` | Biography |
| `anime` |  |
| `data` |  |
| `favorites` | Number of users who have favorited this entry |
| `id` |  |
| `image_url` | Default JPG Image Size URL |
| `images` |  |
| `language` | Character's Role |
| `large_image_url` | Large JPG Image Size URL |
| `mal_id` | MyAnimeList ID |
| `manga` |  |
| `name` | Name |
| `name_kanji` | Name |
| `nicknames` | Other Names |
| `pagination` |  |
| `person` |  |
| `role` | Character's Role |
| `url` | MyAnimeList URL |
| `voices` |  |

Operations: List, Load.

API path: `/characters`

#### Club

| Field | Description |
| --- | --- |
| `access` | Club access |
| `anime` |  |
| `category` | Club Category |
| `characters` |  |
| `created` | Date Created ISO8601 |
| `data` |  |
| `id` |  |
| `images` |  |
| `mal_id` | MyAnimeList ID |
| `manga` |  |
| `members` | Number of club members |
| `name` | Club name |
| `pagination` |  |
| `url` | Club URL |
| `username` | User's username |

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
| `author_url` | Author Profile URL |
| `author_username` | Author MyAnimeList Username |
| `authors` |  |
| `background` | Background |
| `chapters` | Chapter count |
| `character` |  |
| `comments` | Comment count |
| `completed` | Number of users who have completed the resource |
| `data` |  |
| `date` | Post Date ISO8601 |
| `demographics` |  |
| `dropped` | Number of users who have dropped the resource |
| `entry` | Related entries |
| `explicit_genres` |  |
| `external` |  |
| `favorites` | Number of users who have favorited this entry |
| `genres` |  |
| `id` |  |
| `images` |  |
| `jpg` | Available images in JPG |
| `last_comment` | Last comment details |
| `mal_id` | MyAnimeList ID |
| `members` | Number of users who have added this entry to their list |
| `moreinfo` | Additional information on the entry |
| `name` |  |
| `on_hold` | Number of users who have put the resource on hold |
| `pagination` |  |
| `plan_to_read` | Number of users who have planned to read the resource |
| `popularity` | Popularity |
| `published` | Date range |
| `publishing` | Publishing boolean |
| `rank` | Ranking |
| `reading` | Number of users reading the resource |
| `relation` | Relation type |
| `relations` |  |
| `role` | Character's Role |
| `score` | Score |
| `scored_by` | Number of users |
| `scores` |  |
| `serializations` |  |
| `status` | Publishing status |
| `synopsis` | Synopsis |
| `themes` |  |
| `title` | Title |
| `title_english` | English Title |
| `title_japanese` | Japanese Title |
| `title_synonyms` | Other Titles |
| `titles` | All Titles |
| `total` | Total number of users who have the resource added to their lists |
| `type` | Manga Type |
| `url` | MyAnimeList URL |
| `volumes` | Volume count |
| `webp` | Available images in WEBP |

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
| `anime` |  |
| `birthday` | Birthday Date ISO8601 |
| `character` |  |
| `data` |  |
| `family_name` | Family Name |
| `favorites` | Number of users who have favorited this entry |
| `given_name` | Given Name |
| `id` |  |
| `images` |  |
| `jpg` | Available images in JPG |
| `mal_id` | MyAnimeList ID |
| `manga` |  |
| `name` | Name |
| `pagination` |  |
| `position` | Person's position |
| `role` | Person's Character's role in the anime |
| `url` | MyAnimeList URL |
| `voices` |  |
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
| `external` |  |
| `favorites` | Producers's member favorites count |
| `id` |  |
| `images` |  |
| `mal_id` | MyAnimeList ID |
| `name` |  |
| `pagination` |  |
| `titles` | All titles |
| `url` | MyAnimeList URL |

Operations: List, Load.

API path: `/producers`

#### Random

| Field | Description |
| --- | --- |
| `about` | Biography |
| `aired` | Date range |
| `airing` | Airing boolean |
| `alternate_names` | Other Names |
| `approved` | Whether the entry is pending approval on MAL or not |
| `authors` |  |
| `background` | Background |
| `birthday` | Birthday Date ISO8601 |
| `broadcast` | Broadcast Details |
| `chapters` | Chapter count |
| `demographics` |  |
| `duration` | Parsed raw duration |
| `episodes` | Episode count |
| `explicit_genres` |  |
| `family_name` | Family Name |
| `favorites` | Number of users who have favorited this entry |
| `gender` | User Gender |
| `genres` |  |
| `given_name` | Given Name |
| `images` |  |
| `joined` | Joined Date ISO8601 |
| `last_online` | Last Online Date ISO8601 |
| `licensors` |  |
| `location` | Location |
| `mal_id` | MyAnimeList ID |
| `members` | Number of users who have added this entry to their list |
| `name` | Name |
| `name_kanji` | Name |
| `nicknames` | Other Names |
| `popularity` | Popularity |
| `producers` |  |
| `published` | Date range |
| `publishing` | Publishing boolean |
| `rank` | Ranking |
| `rating` | Anime audience rating |
| `score` | Score |
| `scored_by` | Number of users |
| `season` | Season |
| `serializations` |  |
| `source` | Original Material/Source adapted from |
| `status` | Airing status |
| `studios` |  |
| `synopsis` | Synopsis |
| `themes` |  |
| `title` | Title |
| `title_english` | English Title |
| `title_japanese` | Japanese Title |
| `title_synonyms` | Other Titles |
| `titles` | All titles |
| `trailer` | Youtube Details |
| `type` | Anime Type |
| `url` | MyAnimeList URL |
| `username` | MyAnimeList Username |
| `volumes` | Volume count |
| `website_url` | Person's website URL |
| `year` | Year |

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
| `seasons` | List of available seasons |
| `year` | Year |

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
| `anime` | Favorite Anime |
| `birthday` | Birthday Date ISO8601 |
| `characters` | Favorite Characters |
| `data` |  |
| `external` |  |
| `gender` | User Gender |
| `id` |  |
| `images` |  |
| `joined` | Joined Date ISO8601 |
| `last_online` | Last Online Date ISO8601 |
| `location` | Location |
| `mal_id` | MyAnimeList ID |
| `manga` | Favorite Manga |
| `pagination` |  |
| `people` | Favorite People |
| `statistics` |  |
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

Create an instance: `local anime = client:Anime(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aired` | `string` | Aired Date ISO8601 |
| `airing` | `boolean` | Airing boolean |
| `approved` | `boolean` | Whether the entry is pending approval on MAL or not |
| `author_url` | `string` | Author Profile URL |
| `author_username` | `string` | Author MyAnimeList Username |
| `background` | `string` | Background |
| `broadcast` | `table` | Broadcast Details |
| `character` | `table` | Character details |
| `comments` | `number` | Comment count |
| `completed` | `number` | Number of users who have completed the resource |
| `data` | `table` |  |
| `date` | `string` | Post Date ISO8601 |
| `demographics` | `table` |  |
| `dropped` | `number` | Number of users who have dropped the resource |
| `duration` | `number` | Episode duration in seconds |
| `endings` | `table` |  |
| `entry` | `table` | Related entries |
| `episodes` | `number` | Episode count |
| `explicit_genres` | `table` |  |
| `external` | `table` |  |
| `favorites` | `number` | Number of users who have favorited this entry |
| `filler` | `boolean` | Filler episode |
| `genres` | `table` |  |
| `id` | `string` |  |
| `images` | `table` |  |
| `last_comment` | `table` | Last comment details |
| `licensors` | `table` |  |
| `mal_id` | `number` | MyAnimeList ID |
| `members` | `number` | Number of users who have added this entry to their list |
| `moreinfo` | `string` | Additional information on the entry |
| `music_videos` | `table` |  |
| `name` | `string` |  |
| `on_hold` | `number` | Number of users who have put the resource on hold |
| `openings` | `table` |  |
| `pagination` | `table` |  |
| `person` | `table` | Person details |
| `plan_to_watch` | `number` | Number of users who have planned to watch the resource |
| `popularity` | `number` | Popularity |
| `positions` | `table` | Staff Positions |
| `producers` | `table` |  |
| `promo` | `table` |  |
| `rank` | `number` | Ranking |
| `rating` | `string` | Anime audience rating |
| `recap` | `boolean` | Recap episode |
| `relation` | `string` | Relation type |
| `relations` | `table` |  |
| `role` | `string` | Character's Role |
| `score` | `number` | Score |
| `scored_by` | `number` | Number of users |
| `scores` | `table` |  |
| `season` | `string` | Season |
| `source` | `string` | Original Material/Source adapted from |
| `status` | `string` | Airing status |
| `streaming` | `table` |  |
| `studios` | `table` |  |
| `synopsis` | `string` | Episode Synopsis |
| `theme` | `table` |  |
| `themes` | `table` |  |
| `title` | `string` | Title |
| `title_english` | `string` | English Title |
| `title_japanese` | `string` | Title Japanese |
| `title_romanji` | `string` | title_romanji |
| `title_synonyms` | `table` | Other Titles |
| `titles` | `table` | All titles |
| `total` | `number` | Total number of users who have the resource added to their lists |
| `trailer` | `table` | Youtube Details |
| `type` | `string` | Anime Type |
| `url` | `string` | MyAnimeList URL |
| `voice_actors` | `table` |  |
| `watching` | `number` | Number of users watching the resource |
| `year` | `number` | Year |

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
| `about` | `string` | Biography |
| `anime` | `table` |  |
| `data` | `table` |  |
| `favorites` | `number` | Number of users who have favorited this entry |
| `id` | `string` |  |
| `image_url` | `string` | Default JPG Image Size URL |
| `images` | `table` |  |
| `language` | `string` | Character's Role |
| `large_image_url` | `string` | Large JPG Image Size URL |
| `mal_id` | `number` | MyAnimeList ID |
| `manga` | `table` |  |
| `name` | `string` | Name |
| `name_kanji` | `string` | Name |
| `nicknames` | `table` | Other Names |
| `pagination` | `table` |  |
| `person` | `table` |  |
| `role` | `string` | Character's Role |
| `url` | `string` | MyAnimeList URL |
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
| `access` | `string` | Club access |
| `anime` | `table` |  |
| `category` | `string` | Club Category |
| `characters` | `table` |  |
| `created` | `string` | Date Created ISO8601 |
| `data` | `table` |  |
| `id` | `string` |  |
| `images` | `table` |  |
| `mal_id` | `number` | MyAnimeList ID |
| `manga` | `table` |  |
| `members` | `number` | Number of club members |
| `name` | `string` | Club name |
| `pagination` | `table` |  |
| `url` | `string` | Club URL |
| `username` | `string` | User's username |

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
| `count` | `number` | Genre's entry count |
| `mal_id` | `number` | MyAnimeList ID |
| `name` | `string` | Genre Name |
| `url` | `string` | MyAnimeList URL |

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
| `approved` | `boolean` | Whether the entry is pending approval on MAL or not |
| `author_url` | `string` | Author Profile URL |
| `author_username` | `string` | Author MyAnimeList Username |
| `authors` | `table` |  |
| `background` | `string` | Background |
| `chapters` | `number` | Chapter count |
| `character` | `table` |  |
| `comments` | `number` | Comment count |
| `completed` | `number` | Number of users who have completed the resource |
| `data` | `table` |  |
| `date` | `string` | Post Date ISO8601 |
| `demographics` | `table` |  |
| `dropped` | `number` | Number of users who have dropped the resource |
| `entry` | `table` | Related entries |
| `explicit_genres` | `table` |  |
| `external` | `table` |  |
| `favorites` | `number` | Number of users who have favorited this entry |
| `genres` | `table` |  |
| `id` | `string` |  |
| `images` | `table` |  |
| `jpg` | `table` | Available images in JPG |
| `last_comment` | `table` | Last comment details |
| `mal_id` | `number` | MyAnimeList ID |
| `members` | `number` | Number of users who have added this entry to their list |
| `moreinfo` | `string` | Additional information on the entry |
| `name` | `string` |  |
| `on_hold` | `number` | Number of users who have put the resource on hold |
| `pagination` | `table` |  |
| `plan_to_read` | `number` | Number of users who have planned to read the resource |
| `popularity` | `number` | Popularity |
| `published` | `table` | Date range |
| `publishing` | `boolean` | Publishing boolean |
| `rank` | `number` | Ranking |
| `reading` | `number` | Number of users reading the resource |
| `relation` | `string` | Relation type |
| `relations` | `table` |  |
| `role` | `string` | Character's Role |
| `score` | `number` | Score |
| `scored_by` | `number` | Number of users |
| `scores` | `table` |  |
| `serializations` | `table` |  |
| `status` | `string` | Publishing status |
| `synopsis` | `string` | Synopsis |
| `themes` | `table` |  |
| `title` | `string` | Title |
| `title_english` | `string` | English Title |
| `title_japanese` | `string` | Japanese Title |
| `title_synonyms` | `table` | Other Titles |
| `titles` | `table` | All Titles |
| `total` | `number` | Total number of users who have the resource added to their lists |
| `type` | `string` | Manga Type |
| `url` | `string` | MyAnimeList URL |
| `volumes` | `number` | Volume count |
| `webp` | `table` | Available images in WEBP |

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
| `about` | `string` | Biography |
| `alternate_names` | `table` | Other Names |
| `anime` | `table` |  |
| `birthday` | `string` | Birthday Date ISO8601 |
| `character` | `table` |  |
| `data` | `table` |  |
| `family_name` | `string` | Family Name |
| `favorites` | `number` | Number of users who have favorited this entry |
| `given_name` | `string` | Given Name |
| `id` | `string` |  |
| `images` | `table` |  |
| `jpg` | `table` | Available images in JPG |
| `mal_id` | `number` | MyAnimeList ID |
| `manga` | `table` |  |
| `name` | `string` | Name |
| `pagination` | `table` |  |
| `position` | `string` | Person's position |
| `role` | `string` | Person's Character's role in the anime |
| `url` | `string` | MyAnimeList URL |
| `voices` | `table` |  |
| `website_url` | `string` | Person's website URL |

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
| `about` | `string` | About the Producer |
| `count` | `number` | Producers's anime count |
| `data` | `table` |  |
| `established` | `string` | Established Date ISO8601 |
| `external` | `table` |  |
| `favorites` | `number` | Producers's member favorites count |
| `id` | `string` |  |
| `images` | `table` |  |
| `mal_id` | `number` | MyAnimeList ID |
| `name` | `string` |  |
| `pagination` | `table` |  |
| `titles` | `table` | All titles |
| `url` | `string` | MyAnimeList URL |

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
| `about` | `string` | Biography |
| `aired` | `table` | Date range |
| `airing` | `boolean` | Airing boolean |
| `alternate_names` | `table` | Other Names |
| `approved` | `boolean` | Whether the entry is pending approval on MAL or not |
| `authors` | `table` |  |
| `background` | `string` | Background |
| `birthday` | `string` | Birthday Date ISO8601 |
| `broadcast` | `table` | Broadcast Details |
| `chapters` | `number` | Chapter count |
| `demographics` | `table` |  |
| `duration` | `string` | Parsed raw duration |
| `episodes` | `number` | Episode count |
| `explicit_genres` | `table` |  |
| `family_name` | `string` | Family Name |
| `favorites` | `number` | Number of users who have favorited this entry |
| `gender` | `string` | User Gender |
| `genres` | `table` |  |
| `given_name` | `string` | Given Name |
| `images` | `table` |  |
| `joined` | `string` | Joined Date ISO8601 |
| `last_online` | `string` | Last Online Date ISO8601 |
| `licensors` | `table` |  |
| `location` | `string` | Location |
| `mal_id` | `number` | MyAnimeList ID |
| `members` | `number` | Number of users who have added this entry to their list |
| `name` | `string` | Name |
| `name_kanji` | `string` | Name |
| `nicknames` | `table` | Other Names |
| `popularity` | `number` | Popularity |
| `producers` | `table` |  |
| `published` | `table` | Date range |
| `publishing` | `boolean` | Publishing boolean |
| `rank` | `number` | Ranking |
| `rating` | `string` | Anime audience rating |
| `score` | `number` | Score |
| `scored_by` | `number` | Number of users |
| `season` | `string` | Season |
| `serializations` | `table` |  |
| `source` | `string` | Original Material/Source adapted from |
| `status` | `string` | Airing status |
| `studios` | `table` |  |
| `synopsis` | `string` | Synopsis |
| `themes` | `table` |  |
| `title` | `string` | Title |
| `title_english` | `string` | English Title |
| `title_japanese` | `string` | Japanese Title |
| `title_synonyms` | `table` | Other Titles |
| `titles` | `table` | All titles |
| `trailer` | `table` | Youtube Details |
| `type` | `string` | Anime Type |
| `url` | `string` | MyAnimeList URL |
| `username` | `string` | MyAnimeList Username |
| `volumes` | `number` | Volume count |
| `website_url` | `string` | Person's website URL |
| `year` | `number` | Year |

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
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `pagination` | `table` |  |
| `seasons` | `table` | List of available seasons |
| `year` | `number` | Year |

#### Example: Load

```lua
local season, err = client:Season():load({ season = "season", year = 1 })
```

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
| `anime` | `table` | Favorite Anime |
| `birthday` | `string` | Birthday Date ISO8601 |
| `characters` | `table` | Favorite Characters |
| `data` | `table` |  |
| `external` | `table` |  |
| `gender` | `string` | User Gender |
| `id` | `string` |  |
| `images` | `table` |  |
| `joined` | `string` | Joined Date ISO8601 |
| `last_online` | `string` | Last Online Date ISO8601 |
| `location` | `string` | Location |
| `mal_id` | `number` | MyAnimeList ID |
| `manga` | `table` | Favorite Manga |
| `pagination` | `table` |  |
| `people` | `table` | Favorite People |
| `statistics` | `table` |  |
| `url` | `string` | MyAnimeList URL |
| `username` | `string` | MyAnimeList Username |

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
| `about` | `string` | User About. |

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
| `date` | `string` | Date ISO8601 |
| `entry` | `table` | Parsed URL Data |
| `increment` | `number` | Number of episodes/chapters watched/read |

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
| `anime` | `table` | Anime Statistics |
| `manga` | `table` | Manga Statistics |

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
| `anime` | `table` | Last updated Anime |
| `manga` | `table` | Last updated Manga |

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
