# JikanRest Ruby SDK



The Ruby SDK for the JikanRest API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Anime` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/jikan-rest-sdk/releases](https://github.com/voxgig-sdk/jikan-rest-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "JikanRest_sdk"

client = JikanRestSDK.new
```

### 2. List anime records

```ruby
begin
  # list returns an Array of Anime records — iterate directly.
  animes = client.Anime.list
  animes.each do |item|
    puts "#{item["id"]} #{item["aired"]}"
  end
rescue => err
  warn "list failed: #{err}"
end
```

### 3. Load a season

Season is nested under season, so provide the `season`.

```ruby
begin
  # load returns the ENTITY — call data_get for the Season record (raises on error).
  season = client.Season.load({ "season" => "example_season", "year" => 1 })
  puts season
rescue => err
  warn "load failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  externals = client.External.list()
rescue => err
  warn "list failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = JikanRestSDK.test

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
external = client.External.list()
puts external
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = JikanRestSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### JikanRestSDK

```ruby
require_relative "JikanRest_sdk"
client = JikanRestSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = JikanRestSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### JikanRestSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `JikanRestError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `anime = client.Anime`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aired` | `String` | Aired Date ISO8601 |
| `airing` | `Boolean` | Airing boolean |
| `approved` | `Boolean` | Whether the entry is pending approval on MAL or not |
| `author_url` | `String` | Author Profile URL |
| `author_username` | `String` | Author MyAnimeList Username |
| `background` | `String` | Background |
| `broadcast` | `Hash` | Broadcast Details |
| `character` | `Hash` | Character details |
| `comments` | `Integer` | Comment count |
| `completed` | `Integer` | Number of users who have completed the resource |
| `data` | `Array` |  |
| `date` | `String` | Post Date ISO8601 |
| `demographics` | `Array` |  |
| `dropped` | `Integer` | Number of users who have dropped the resource |
| `duration` | `Integer` | Episode duration in seconds |
| `endings` | `Array` |  |
| `entry` | `Hash` | Related entries |
| `episodes` | `Integer` | Episode count |
| `explicit_genres` | `Array` |  |
| `external` | `Array` |  |
| `favorites` | `Integer` | Number of users who have favorited this entry |
| `filler` | `Boolean` | Filler episode |
| `genres` | `Array` |  |
| `id` | `String` |  |
| `images` | `Hash` |  |
| `last_comment` | `Hash` | Last comment details |
| `licensors` | `Array` |  |
| `mal_id` | `Integer` | MyAnimeList ID |
| `members` | `Integer` | Number of users who have added this entry to their list |
| `moreinfo` | `String` | Additional information on the entry |
| `music_videos` | `Array` |  |
| `name` | `String` |  |
| `on_hold` | `Integer` | Number of users who have put the resource on hold |
| `openings` | `Array` |  |
| `pagination` | `Hash` |  |
| `person` | `Hash` | Person details |
| `plan_to_watch` | `Integer` | Number of users who have planned to watch the resource |
| `popularity` | `Integer` | Popularity |
| `positions` | `Array` | Staff Positions |
| `producers` | `Array` |  |
| `promo` | `Array` |  |
| `rank` | `Integer` | Ranking |
| `rating` | `String` | Anime audience rating |
| `recap` | `Boolean` | Recap episode |
| `relation` | `String` | Relation type |
| `relations` | `Array` |  |
| `role` | `String` | Character's Role |
| `score` | `Float` | Score |
| `scored_by` | `Integer` | Number of users |
| `scores` | `Array` |  |
| `season` | `String` | Season |
| `source` | `String` | Original Material/Source adapted from |
| `status` | `String` | Airing status |
| `streaming` | `Array` |  |
| `studios` | `Array` |  |
| `synopsis` | `String` | Episode Synopsis |
| `theme` | `Hash` |  |
| `themes` | `Array` |  |
| `title` | `String` | Title |
| `title_english` | `String` | English Title |
| `title_japanese` | `String` | Title Japanese |
| `title_romanji` | `String` | title_romanji |
| `title_synonyms` | `Array` | Other Titles |
| `titles` | `Array` | All titles |
| `total` | `Integer` | Total number of users who have the resource added to their lists |
| `trailer` | `Hash` | Youtube Details |
| `type` | `String` | Anime Type |
| `url` | `String` | MyAnimeList URL |
| `voice_actors` | `Array` |  |
| `watching` | `Integer` | Number of users watching the resource |
| `year` | `Integer` | Year |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Anime record (raises on error).
anime = client.Anime.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Anime records (raises on error).
animes = client.Anime.list
```


### Character

Create an instance: `character = client.Character`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `String` | Biography |
| `anime` | `Array` |  |
| `data` | `Array` |  |
| `favorites` | `Integer` | Number of users who have favorited this entry |
| `id` | `String` |  |
| `image_url` | `String` | Default JPG Image Size URL |
| `images` | `Hash` |  |
| `language` | `String` | Character's Role |
| `large_image_url` | `String` | Large JPG Image Size URL |
| `mal_id` | `Integer` | MyAnimeList ID |
| `manga` | `Array` |  |
| `name` | `String` | Name |
| `name_kanji` | `String` | Name |
| `nicknames` | `Array` | Other Names |
| `pagination` | `Hash` |  |
| `person` | `Hash` |  |
| `role` | `String` | Character's Role |
| `url` | `String` | MyAnimeList URL |
| `voices` | `Array` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Character record (raises on error).
character = client.Character.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Character records (raises on error).
characters = client.Character.list
```


### Club

Create an instance: `club = client.Club`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `String` | Club access |
| `anime` | `Array` |  |
| `category` | `String` | Club Category |
| `characters` | `Array` |  |
| `created` | `String` | Date Created ISO8601 |
| `data` | `Array` |  |
| `id` | `String` |  |
| `images` | `Hash` |  |
| `mal_id` | `Integer` | MyAnimeList ID |
| `manga` | `Array` |  |
| `members` | `Integer` | Number of club members |
| `name` | `String` | Club name |
| `pagination` | `Hash` |  |
| `url` | `String` | Club URL |
| `username` | `String` | User's username |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Club record (raises on error).
club = client.Club.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Club records (raises on error).
clubs = client.Club.list
```


### External

Create an instance: `external = client.External`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `String` |  |
| `url` | `String` |  |

#### Example: List

```ruby
# list returns an Array of External records (raises on error).
externals = client.External.list
```


### Genre

Create an instance: `genre = client.Genre`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `Integer` | Genre's entry count |
| `mal_id` | `Integer` | MyAnimeList ID |
| `name` | `String` | Genre Name |
| `url` | `String` | MyAnimeList URL |

#### Example: List

```ruby
# list returns an Array of Genre records (raises on error).
genres = client.Genre.list
```


### Magazine

Create an instance: `magazine = client.Magazine`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` |  |
| `pagination` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of Magazine records (raises on error).
magazines = client.Magazine.list
```


### Manga

Create an instance: `manga = client.Manga`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved` | `Boolean` | Whether the entry is pending approval on MAL or not |
| `author_url` | `String` | Author Profile URL |
| `author_username` | `String` | Author MyAnimeList Username |
| `authors` | `Array` |  |
| `background` | `String` | Background |
| `chapters` | `Integer` | Chapter count |
| `character` | `Hash` |  |
| `comments` | `Integer` | Comment count |
| `completed` | `Integer` | Number of users who have completed the resource |
| `data` | `Array` |  |
| `date` | `String` | Post Date ISO8601 |
| `demographics` | `Array` |  |
| `dropped` | `Integer` | Number of users who have dropped the resource |
| `entry` | `Hash` | Related entries |
| `explicit_genres` | `Array` |  |
| `external` | `Array` |  |
| `favorites` | `Integer` | Number of users who have favorited this entry |
| `genres` | `Array` |  |
| `id` | `String` |  |
| `images` | `Hash` |  |
| `jpg` | `Hash` | Available images in JPG |
| `last_comment` | `Hash` | Last comment details |
| `mal_id` | `Integer` | MyAnimeList ID |
| `members` | `Integer` | Number of users who have added this entry to their list |
| `moreinfo` | `String` | Additional information on the entry |
| `name` | `String` |  |
| `on_hold` | `Integer` | Number of users who have put the resource on hold |
| `pagination` | `Hash` |  |
| `plan_to_read` | `Integer` | Number of users who have planned to read the resource |
| `popularity` | `Integer` | Popularity |
| `published` | `Hash` | Date range |
| `publishing` | `Boolean` | Publishing boolean |
| `rank` | `Integer` | Ranking |
| `reading` | `Integer` | Number of users reading the resource |
| `relation` | `String` | Relation type |
| `relations` | `Array` |  |
| `role` | `String` | Character's Role |
| `score` | `Float` | Score |
| `scored_by` | `Integer` | Number of users |
| `scores` | `Array` |  |
| `serializations` | `Array` |  |
| `status` | `String` | Publishing status |
| `synopsis` | `String` | Synopsis |
| `themes` | `Array` |  |
| `title` | `String` | Title |
| `title_english` | `String` | English Title |
| `title_japanese` | `String` | Japanese Title |
| `title_synonyms` | `Array` | Other Titles |
| `titles` | `Array` | All Titles |
| `total` | `Integer` | Total number of users who have the resource added to their lists |
| `type` | `String` | Manga Type |
| `url` | `String` | MyAnimeList URL |
| `volumes` | `Integer` | Volume count |
| `webp` | `Hash` | Available images in WEBP |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Manga record (raises on error).
manga = client.Manga.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Manga records (raises on error).
mangas = client.Manga.list
```


### PeopleSearch

Create an instance: `people_search = client.PeopleSearch`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` |  |
| `pagination` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of PeopleSearch records (raises on error).
people_searchs = client.PeopleSearch.list
```


### Person

Create an instance: `person = client.Person`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `String` | Biography |
| `alternate_names` | `Array` | Other Names |
| `anime` | `Array` |  |
| `birthday` | `String` | Birthday Date ISO8601 |
| `character` | `Hash` |  |
| `data` | `Array` |  |
| `family_name` | `String` | Family Name |
| `favorites` | `Integer` | Number of users who have favorited this entry |
| `given_name` | `String` | Given Name |
| `id` | `String` |  |
| `images` | `Hash` |  |
| `jpg` | `Hash` | Available images in JPG |
| `mal_id` | `Integer` | MyAnimeList ID |
| `manga` | `Array` |  |
| `name` | `String` | Name |
| `pagination` | `Hash` |  |
| `position` | `String` | Person's position |
| `role` | `String` | Person's Character's role in the anime |
| `url` | `String` | MyAnimeList URL |
| `voices` | `Array` |  |
| `website_url` | `String` | Person's website URL |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Person record (raises on error).
person = client.Person.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Person records (raises on error).
persons = client.Person.list
```


### Producer

Create an instance: `producer = client.Producer`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `String` | About the Producer |
| `count` | `Integer` | Producers's anime count |
| `data` | `Array` |  |
| `established` | `String` | Established Date ISO8601 |
| `external` | `Array` |  |
| `favorites` | `Integer` | Producers's member favorites count |
| `id` | `String` |  |
| `images` | `Hash` |  |
| `mal_id` | `Integer` | MyAnimeList ID |
| `name` | `String` |  |
| `pagination` | `Hash` |  |
| `titles` | `Array` | All titles |
| `url` | `String` | MyAnimeList URL |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Producer record (raises on error).
producer = client.Producer.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Producer records (raises on error).
producers = client.Producer.list
```


### Random

Create an instance: `random = client.Random`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `String` | Biography |
| `aired` | `Hash` | Date range |
| `airing` | `Boolean` | Airing boolean |
| `alternate_names` | `Array` | Other Names |
| `approved` | `Boolean` | Whether the entry is pending approval on MAL or not |
| `authors` | `Array` |  |
| `background` | `String` | Background |
| `birthday` | `String` | Birthday Date ISO8601 |
| `broadcast` | `Hash` | Broadcast Details |
| `chapters` | `Integer` | Chapter count |
| `demographics` | `Array` |  |
| `duration` | `String` | Parsed raw duration |
| `episodes` | `Integer` | Episode count |
| `explicit_genres` | `Array` |  |
| `family_name` | `String` | Family Name |
| `favorites` | `Integer` | Number of users who have favorited this entry |
| `gender` | `String` | User Gender |
| `genres` | `Array` |  |
| `given_name` | `String` | Given Name |
| `images` | `Hash` |  |
| `joined` | `String` | Joined Date ISO8601 |
| `last_online` | `String` | Last Online Date ISO8601 |
| `licensors` | `Array` |  |
| `location` | `String` | Location |
| `mal_id` | `Integer` | MyAnimeList ID |
| `members` | `Integer` | Number of users who have added this entry to their list |
| `name` | `String` | Name |
| `name_kanji` | `String` | Name |
| `nicknames` | `Array` | Other Names |
| `popularity` | `Integer` | Popularity |
| `producers` | `Array` |  |
| `published` | `Hash` | Date range |
| `publishing` | `Boolean` | Publishing boolean |
| `rank` | `Integer` | Ranking |
| `rating` | `String` | Anime audience rating |
| `score` | `Float` | Score |
| `scored_by` | `Integer` | Number of users |
| `season` | `String` | Season |
| `serializations` | `Array` |  |
| `source` | `String` | Original Material/Source adapted from |
| `status` | `String` | Airing status |
| `studios` | `Array` |  |
| `synopsis` | `String` | Synopsis |
| `themes` | `Array` |  |
| `title` | `String` | Title |
| `title_english` | `String` | English Title |
| `title_japanese` | `String` | Japanese Title |
| `title_synonyms` | `Array` | Other Titles |
| `titles` | `Array` | All titles |
| `trailer` | `Hash` | Youtube Details |
| `type` | `String` | Anime Type |
| `url` | `String` | MyAnimeList URL |
| `username` | `String` | MyAnimeList Username |
| `volumes` | `Integer` | Volume count |
| `website_url` | `String` | Person's website URL |
| `year` | `Integer` | Year |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Random record (raises on error).
random = client.Random.load()
```


### Recommendation

Create an instance: `recommendation = client.Recommendation`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` |  |
| `pagination` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of Recommendation records (raises on error).
recommendations = client.Recommendation.list
```


### Review

Create an instance: `review = client.Review`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Review record (raises on error).
review = client.Review.load()
```


### Schedule

Create an instance: `schedule = client.Schedule`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` |  |
| `pagination` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of Schedule records (raises on error).
schedules = client.Schedule.list
```


### Season

Create an instance: `season = client.Season`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` |  |
| `pagination` | `Hash` |  |
| `seasons` | `Array` | List of available seasons |
| `year` | `Integer` | Year |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Season record (raises on error).
season = client.Season.load({ "season" => "season", "year" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Season records (raises on error).
seasons = client.Season.list
```


### Top

Create an instance: `top = client.Top`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` |  |
| `pagination` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Top record (raises on error).
top = client.Top.load()
```


### User

Create an instance: `user = client.User`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | `Array` | Favorite Anime |
| `birthday` | `String` | Birthday Date ISO8601 |
| `characters` | `Array` | Favorite Characters |
| `data` | `Array` |  |
| `external` | `Array` |  |
| `gender` | `String` | User Gender |
| `id` | `String` |  |
| `images` | `Hash` |  |
| `joined` | `String` | Joined Date ISO8601 |
| `last_online` | `String` | Last Online Date ISO8601 |
| `location` | `String` | Location |
| `mal_id` | `Integer` | MyAnimeList ID |
| `manga` | `Array` | Favorite Manga |
| `pagination` | `Hash` |  |
| `people` | `Array` | Favorite People |
| `statistics` | `Hash` |  |
| `url` | `String` | MyAnimeList URL |
| `username` | `String` | MyAnimeList Username |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the User record (raises on error).
user = client.User.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of User records (raises on error).
users = client.User.list
```


### UserAbout

Create an instance: `user_about = client.UserAbout`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `String` | User About. |

#### Example: List

```ruby
# list returns an Array of UserAbout records (raises on error).
user_abouts = client.UserAbout.list
```


### UserClub

Create an instance: `user_club = client.UserClub`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` |  |
| `pagination` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of UserClub records (raises on error).
user_clubs = client.UserClub.list
```


### UserFriend

Create an instance: `user_friend = client.UserFriend`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` |  |
| `pagination` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of UserFriend records (raises on error).
user_friends = client.UserFriend.list
```


### UserHistory

Create an instance: `user_history = client.UserHistory`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `String` | Date ISO8601 |
| `entry` | `Hash` | Parsed URL Data |
| `increment` | `Integer` | Number of episodes/chapters watched/read |

#### Example: List

```ruby
# list returns an Array of UserHistory records (raises on error).
user_historys = client.UserHistory.list
```


### UserStatistic

Create an instance: `user_statistic = client.UserStatistic`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | `Hash` | Anime Statistics |
| `manga` | `Hash` | Manga Statistics |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the UserStatistic record (raises on error).
user_statistic = client.UserStatistic.load({ "username" => "username" })
```


### UserUpdate

Create an instance: `user_update = client.UserUpdate`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | `Array` | Last updated Anime |
| `manga` | `Array` | Last updated Manga |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the UserUpdate record (raises on error).
user_update = client.UserUpdate.load({ "username" => "username" })
```


### WatchEpisode

Create an instance: `watch_episode = client.WatchEpisode`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` |  |
| `pagination` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of WatchEpisode records (raises on error).
watch_episodes = client.WatchEpisode.list
```


### WatchPromo

Create an instance: `watch_promo = client.WatchPromo`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` |  |
| `pagination` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of WatchPromo records (raises on error).
watch_promos = client.WatchPromo.list
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── JikanRest_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`JikanRest_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```ruby
external = client.External
external.list()

# external.data_get now returns the external data from the last list
# external.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
