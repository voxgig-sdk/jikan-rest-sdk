# JikanRest Ruby SDK Reference

Complete API reference for the JikanRest Ruby SDK.


## JikanRestSDK

### Constructor

```ruby
require_relative 'jikan-rest_sdk'

client = JikanRestSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `JikanRestSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = JikanRestSDK.test
```


### Instance Methods

#### `Anime(data = nil)`

Create a new `Anime` entity instance. Pass `nil` for no initial data.

#### `Character(data = nil)`

Create a new `Character` entity instance. Pass `nil` for no initial data.

#### `Club(data = nil)`

Create a new `Club` entity instance. Pass `nil` for no initial data.

#### `External(data = nil)`

Create a new `External` entity instance. Pass `nil` for no initial data.

#### `Genre(data = nil)`

Create a new `Genre` entity instance. Pass `nil` for no initial data.

#### `Magazine(data = nil)`

Create a new `Magazine` entity instance. Pass `nil` for no initial data.

#### `Manga(data = nil)`

Create a new `Manga` entity instance. Pass `nil` for no initial data.

#### `PeopleSearch(data = nil)`

Create a new `PeopleSearch` entity instance. Pass `nil` for no initial data.

#### `Person(data = nil)`

Create a new `Person` entity instance. Pass `nil` for no initial data.

#### `Producer(data = nil)`

Create a new `Producer` entity instance. Pass `nil` for no initial data.

#### `Random(data = nil)`

Create a new `Random` entity instance. Pass `nil` for no initial data.

#### `Recommendation(data = nil)`

Create a new `Recommendation` entity instance. Pass `nil` for no initial data.

#### `Review(data = nil)`

Create a new `Review` entity instance. Pass `nil` for no initial data.

#### `Schedule(data = nil)`

Create a new `Schedule` entity instance. Pass `nil` for no initial data.

#### `Season(data = nil)`

Create a new `Season` entity instance. Pass `nil` for no initial data.

#### `Top(data = nil)`

Create a new `Top` entity instance. Pass `nil` for no initial data.

#### `User(data = nil)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserAbout(data = nil)`

Create a new `UserAbout` entity instance. Pass `nil` for no initial data.

#### `UserClub(data = nil)`

Create a new `UserClub` entity instance. Pass `nil` for no initial data.

#### `UserFriend(data = nil)`

Create a new `UserFriend` entity instance. Pass `nil` for no initial data.

#### `UserHistory(data = nil)`

Create a new `UserHistory` entity instance. Pass `nil` for no initial data.

#### `UserStatistic(data = nil)`

Create a new `UserStatistic` entity instance. Pass `nil` for no initial data.

#### `UserUpdate(data = nil)`

Create a new `UserUpdate` entity instance. Pass `nil` for no initial data.

#### `WatchEpisode(data = nil)`

Create a new `WatchEpisode` entity instance. Pass `nil` for no initial data.

#### `WatchPromo(data = nil)`

Create a new `WatchPromo` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AnimeEntity

```ruby
anime = client.anime
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_url` | ``$STRING`` | No |  |
| `author_username` | ``$STRING`` | No |  |
| `character` | ``$OBJECT`` | No |  |
| `comment` | ``$INTEGER`` | No |  |
| `data` | ``$OBJECT`` | No |  |
| `date` | ``$STRING`` | No |  |
| `entry` | ``$OBJECT`` | No |  |
| `image` | ``$OBJECT`` | No |  |
| `last_comment` | ``$OBJECT`` | No |  |
| `mal_id` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |
| `person` | ``$OBJECT`` | No |  |
| `position` | ``$ARRAY`` | No |  |
| `relation` | ``$STRING`` | No |  |
| `role` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |
| `voice_actor` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.anime.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.anime.load({ "id" => "anime_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AnimeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CharacterEntity

```ruby
character = client.character
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | ``$OBJECT`` | No |  |
| `data` | ``$OBJECT`` | No |  |
| `image_url` | ``$STRING`` | No |  |
| `language` | ``$STRING`` | No |  |
| `large_image_url` | ``$STRING`` | No |  |
| `manga` | ``$OBJECT`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |
| `person` | ``$OBJECT`` | No |  |
| `role` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.character.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.character.load({ "id" => "character_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CharacterEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ClubEntity

```ruby
club = client.club
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$OBJECT`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |
| `url` | ``$STRING`` | No |  |
| `username` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.club.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.club.load({ "id" => "club_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ClubEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ExternalEntity

```ruby
external = client.external
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.external.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ExternalEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GenreEntity

```ruby
genre = client.genre
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | ``$INTEGER`` | No |  |
| `mal_id` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.genre.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GenreEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MagazineEntity

```ruby
magazine = client.magazine
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.magazine.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MagazineEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MangaEntity

```ruby
manga = client.manga
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_url` | ``$STRING`` | No |  |
| `author_username` | ``$STRING`` | No |  |
| `character` | ``$OBJECT`` | No |  |
| `comment` | ``$INTEGER`` | No |  |
| `data` | ``$OBJECT`` | No |  |
| `date` | ``$STRING`` | No |  |
| `entry` | ``$OBJECT`` | No |  |
| `jpg` | ``$OBJECT`` | No |  |
| `last_comment` | ``$OBJECT`` | No |  |
| `mal_id` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |
| `relation` | ``$STRING`` | No |  |
| `role` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |
| `webp` | ``$OBJECT`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.manga.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.manga.load({ "id" => "manga_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MangaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PeopleSearchEntity

```ruby
people_search = client.people_search
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.people_search.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PeopleSearchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PersonEntity

```ruby
person = client.person
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | ``$OBJECT`` | No |  |
| `character` | ``$OBJECT`` | No |  |
| `data` | ``$OBJECT`` | No |  |
| `jpg` | ``$OBJECT`` | No |  |
| `manga` | ``$OBJECT`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |
| `position` | ``$STRING`` | No |  |
| `role` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.person.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.person.load({ "id" => "person_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PersonEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProducerEntity

```ruby
producer = client.producer
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$OBJECT`` | No |  |
| `name` | ``$STRING`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.producer.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.producer.load({ "id" => "producer_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProducerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RandomEntity

```ruby
random = client.random
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$OBJECT`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.random.load({ "id" => "random_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RandomEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RecommendationEntity

```ruby
recommendation = client.recommendation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.recommendation.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RecommendationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ReviewEntity

```ruby
review = client.review
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.review.load({ "id" => "review_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ReviewEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScheduleEntity

```ruby
schedule = client.schedule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.schedule.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScheduleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SeasonEntity

```ruby
season = client.season
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |
| `season` | ``$ARRAY`` | No |  |
| `year` | ``$INTEGER`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.season.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SeasonEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TopEntity

```ruby
top = client.top
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ANY`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.top.load({ "id" => "top_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TopEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserEntity

```ruby
user = client.user
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ANY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.user.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.user.load({ "id" => "user_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserAboutEntity

```ruby
user_about = client.user_about
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.user_about.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserAboutEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserClubEntity

```ruby
user_club = client.user_club
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.user_club.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserClubEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserFriendEntity

```ruby
user_friend = client.user_friend
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.user_friend.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserFriendEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserHistoryEntity

```ruby
user_history = client.user_history
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | ``$STRING`` | No |  |
| `entry` | ``$OBJECT`` | No |  |
| `increment` | ``$INTEGER`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.user_history.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserHistoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserStatisticEntity

```ruby
user_statistic = client.user_statistic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$OBJECT`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.user_statistic.load({ "id" => "user_statistic_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserStatisticEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserUpdateEntity

```ruby
user_update = client.user_update
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$OBJECT`` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.user_update.load({ "id" => "user_update_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserUpdateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WatchEpisodeEntity

```ruby
watch_episode = client.watch_episode
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.watch_episode.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WatchEpisodeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WatchPromoEntity

```ruby
watch_promo = client.watch_promo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.watch_promo.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WatchPromoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = JikanRestSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

