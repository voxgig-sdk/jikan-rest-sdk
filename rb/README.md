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
    puts "#{item["author_url"]}"
  end
rescue => err
  warn "list failed: #{err}"
end
```

### 3. Load an userstatistic

UserStatistic is nested under username, so provide the `username`.

```ruby
begin
  # load returns the bare UserStatistic record (raises on error).
  userstatistic = client.UserStatistic.load({ "username" => "example_username" })
  puts userstatistic
rescue => err
  warn "load failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  animes = client.Anime.list()
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

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```ruby
client = JikanRestSDK.test({
  "entity" => { "anime" => { "test01" => { "id" => "test01" } } },
})

# Entity ops return the bare mock record (raises on error).
anime = client.Anime.list()
puts anime
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

Create an instance: `anime = client.Anime`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_url` | `String` |  |
| `author_username` | `String` |  |
| `character` | `Hash` |  |
| `comment` | `Integer` |  |
| `data` | `Hash` |  |
| `date` | `String` |  |
| `entry` | `Hash` |  |
| `image` | `Hash` |  |
| `last_comment` | `Hash` |  |
| `mal_id` | `Integer` |  |
| `name` | `String` |  |
| `pagination` | `Hash` |  |
| `person` | `Hash` |  |
| `position` | `Array` |  |
| `relation` | `String` |  |
| `role` | `String` |  |
| `title` | `String` |  |
| `url` | `String` |  |
| `voice_actor` | `Array` |  |

#### Example: Load

```ruby
# load returns the bare Anime record (raises on error).
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
| `anime` | `Hash` |  |
| `data` | `Hash` |  |
| `image_url` | `String` |  |
| `language` | `String` |  |
| `large_image_url` | `String` |  |
| `manga` | `Hash` |  |
| `pagination` | `Hash` |  |
| `person` | `Hash` |  |
| `role` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Character record (raises on error).
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
| `data` | `Hash` |  |
| `pagination` | `Hash` |  |
| `url` | `String` |  |
| `username` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Club record (raises on error).
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
| `count` | `Integer` |  |
| `mal_id` | `Integer` |  |
| `name` | `String` |  |
| `url` | `String` |  |

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
| `author_url` | `String` |  |
| `author_username` | `String` |  |
| `character` | `Hash` |  |
| `comment` | `Integer` |  |
| `data` | `Hash` |  |
| `date` | `String` |  |
| `entry` | `Hash` |  |
| `jpg` | `Hash` |  |
| `last_comment` | `Hash` |  |
| `mal_id` | `Integer` |  |
| `name` | `String` |  |
| `pagination` | `Hash` |  |
| `relation` | `String` |  |
| `role` | `String` |  |
| `title` | `String` |  |
| `url` | `String` |  |
| `webp` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare Manga record (raises on error).
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
| `anime` | `Hash` |  |
| `character` | `Hash` |  |
| `data` | `Hash` |  |
| `jpg` | `Hash` |  |
| `manga` | `Hash` |  |
| `pagination` | `Hash` |  |
| `position` | `String` |  |
| `role` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Person record (raises on error).
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
| `data` | `Hash` |  |
| `name` | `String` |  |
| `pagination` | `Hash` |  |
| `url` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Producer record (raises on error).
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
| `data` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare Random record (raises on error).
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
# load returns the bare Review record (raises on error).
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

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Array` |  |
| `pagination` | `Hash` |  |
| `season` | `Array` |  |
| `year` | `Integer` |  |

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
| `data` | `Object` |  |

#### Example: Load

```ruby
# load returns the bare Top record (raises on error).
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
| `data` | `Object` |  |
| `pagination` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare User record (raises on error).
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
| `about` | `String` |  |

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
| `date` | `String` |  |
| `entry` | `Hash` |  |
| `increment` | `Integer` |  |

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
| `data` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare UserStatistic record (raises on error).
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
| `data` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare UserUpdate record (raises on error).
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
anime = client.Anime
anime.list()

# anime.data_get now returns the anime data from the last list
# anime.match_get returns the last match criteria
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
