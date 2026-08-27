# JikanRest Ruby SDK Reference

Complete API reference for the JikanRest Ruby SDK.


## JikanRestSDK

### Constructor

```ruby
require_relative 'JikanRest_sdk'

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
anime = client.Anime
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aired` | `String` | No | Aired Date ISO8601 |
| `airing` | `Boolean` | No | Airing boolean |
| `approved` | `Boolean` | No | Whether the entry is pending approval on MAL or not |
| `author_url` | `String` | No | Author Profile URL |
| `author_username` | `String` | No | Author MyAnimeList Username |
| `background` | `String` | No | Background |
| `broadcast` | `Hash` | No | Broadcast Details |
| `character` | `Hash` | No | Character details |
| `comments` | `Integer` | No | Comment count |
| `completed` | `Integer` | No | Number of users who have completed the resource |
| `data` | `Array` | No |  |
| `date` | `String` | No | Post Date ISO8601 |
| `demographics` | `Array` | No |  |
| `dropped` | `Integer` | No | Number of users who have dropped the resource |
| `duration` | `Integer` | No | Episode duration in seconds |
| `endings` | `Array` | No |  |
| `entry` | `Hash` | No | Related entries |
| `episodes` | `Integer` | No | Episode count |
| `explicit_genres` | `Array` | No |  |
| `external` | `Array` | No |  |
| `favorites` | `Integer` | No | Number of users who have favorited this entry |
| `filler` | `Boolean` | No | Filler episode |
| `genres` | `Array` | No |  |
| `id` | `String` | No |  |
| `images` | `Hash` | No |  |
| `last_comment` | `Hash` | No | Last comment details |
| `licensors` | `Array` | No |  |
| `mal_id` | `Integer` | No | MyAnimeList ID |
| `members` | `Integer` | No | Number of users who have added this entry to their list |
| `moreinfo` | `String` | No | Additional information on the entry |
| `music_videos` | `Array` | No |  |
| `name` | `String` | No |  |
| `on_hold` | `Integer` | No | Number of users who have put the resource on hold |
| `openings` | `Array` | No |  |
| `pagination` | `Hash` | No |  |
| `person` | `Hash` | No | Person details |
| `plan_to_watch` | `Integer` | No | Number of users who have planned to watch the resource |
| `popularity` | `Integer` | No | Popularity |
| `positions` | `Array` | No | Staff Positions |
| `producers` | `Array` | No |  |
| `promo` | `Array` | No |  |
| `rank` | `Integer` | No | Ranking |
| `rating` | `String` | No | Anime audience rating |
| `recap` | `Boolean` | No | Recap episode |
| `relation` | `String` | No | Relation type |
| `relations` | `Array` | No |  |
| `role` | `String` | No | Character's Role |
| `score` | `Float` | No | Score |
| `scored_by` | `Integer` | No | Number of users |
| `scores` | `Array` | No |  |
| `season` | `String` | No | Season |
| `source` | `String` | No | Original Material/Source adapted from |
| `status` | `String` | No | Airing status |
| `streaming` | `Array` | No |  |
| `studios` | `Array` | No |  |
| `synopsis` | `String` | No | Episode Synopsis |
| `theme` | `Hash` | No |  |
| `themes` | `Array` | No |  |
| `title` | `String` | No | Title |
| `title_english` | `String` | No | English Title |
| `title_japanese` | `String` | No | Title Japanese |
| `title_romanji` | `String` | No | title_romanji |
| `title_synonyms` | `Array` | No | Other Titles |
| `titles` | `Array` | No | All titles |
| `total` | `Integer` | No | Total number of users who have the resource added to their lists |
| `trailer` | `Hash` | No | Youtube Details |
| `type` | `String` | No | Anime Type |
| `url` | `String` | No | MyAnimeList URL |
| `voice_actors` | `Array` | No |  |
| `watching` | `Integer` | No | Number of users watching the resource |
| `year` | `Integer` | No | Year |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Anime.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Anime.load({ "id" => 1 })
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
character = client.Character
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `String` | No | Biography |
| `anime` | `Array` | No |  |
| `data` | `Array` | No |  |
| `favorites` | `Integer` | No | Number of users who have favorited this entry |
| `id` | `String` | No |  |
| `image_url` | `String` | No | Default JPG Image Size URL |
| `images` | `Hash` | No |  |
| `language` | `String` | No | Character's Role |
| `large_image_url` | `String` | No | Large JPG Image Size URL |
| `mal_id` | `Integer` | No | MyAnimeList ID |
| `manga` | `Array` | No |  |
| `name` | `String` | No | Name |
| `name_kanji` | `String` | No | Name |
| `nicknames` | `Array` | No | Other Names |
| `pagination` | `Hash` | No |  |
| `person` | `Hash` | No |  |
| `role` | `String` | No | Character's Role |
| `url` | `String` | No | MyAnimeList URL |
| `voices` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Character.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Character.load({ "id" => 1 })
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
club = client.Club
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `String` | No | Club access |
| `anime` | `Array` | No |  |
| `category` | `String` | No | Club Category |
| `characters` | `Array` | No |  |
| `created` | `String` | No | Date Created ISO8601 |
| `data` | `Array` | No |  |
| `id` | `String` | No |  |
| `images` | `Hash` | No |  |
| `mal_id` | `Integer` | No | MyAnimeList ID |
| `manga` | `Array` | No |  |
| `members` | `Integer` | No | Number of club members |
| `name` | `String` | No | Club name |
| `pagination` | `Hash` | No |  |
| `url` | `String` | No | Club URL |
| `username` | `String` | No | User's username |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Club.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Club.load({ "id" => 1 })
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
external = client.External
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | No |  |
| `url` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.External.list
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
genre = client.Genre
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `Integer` | No | Genre's entry count |
| `mal_id` | `Integer` | No | MyAnimeList ID |
| `name` | `String` | No | Genre Name |
| `url` | `String` | No | MyAnimeList URL |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Genre.list
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
magazine = client.Magazine
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | No |  |
| `pagination` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Magazine.list
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
manga = client.Manga
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved` | `Boolean` | No | Whether the entry is pending approval on MAL or not |
| `author_url` | `String` | No | Author Profile URL |
| `author_username` | `String` | No | Author MyAnimeList Username |
| `authors` | `Array` | No |  |
| `background` | `String` | No | Background |
| `chapters` | `Integer` | No | Chapter count |
| `character` | `Hash` | No |  |
| `comments` | `Integer` | No | Comment count |
| `completed` | `Integer` | No | Number of users who have completed the resource |
| `data` | `Array` | No |  |
| `date` | `String` | No | Post Date ISO8601 |
| `demographics` | `Array` | No |  |
| `dropped` | `Integer` | No | Number of users who have dropped the resource |
| `entry` | `Hash` | No | Related entries |
| `explicit_genres` | `Array` | No |  |
| `external` | `Array` | No |  |
| `favorites` | `Integer` | No | Number of users who have favorited this entry |
| `genres` | `Array` | No |  |
| `id` | `String` | No |  |
| `images` | `Hash` | No |  |
| `jpg` | `Hash` | No | Available images in JPG |
| `last_comment` | `Hash` | No | Last comment details |
| `mal_id` | `Integer` | No | MyAnimeList ID |
| `members` | `Integer` | No | Number of users who have added this entry to their list |
| `moreinfo` | `String` | No | Additional information on the entry |
| `name` | `String` | No |  |
| `on_hold` | `Integer` | No | Number of users who have put the resource on hold |
| `pagination` | `Hash` | No |  |
| `plan_to_read` | `Integer` | No | Number of users who have planned to read the resource |
| `popularity` | `Integer` | No | Popularity |
| `published` | `Hash` | No | Date range |
| `publishing` | `Boolean` | No | Publishing boolean |
| `rank` | `Integer` | No | Ranking |
| `reading` | `Integer` | No | Number of users reading the resource |
| `relation` | `String` | No | Relation type |
| `relations` | `Array` | No |  |
| `role` | `String` | No | Character's Role |
| `score` | `Float` | No | Score |
| `scored_by` | `Integer` | No | Number of users |
| `scores` | `Array` | No |  |
| `serializations` | `Array` | No |  |
| `status` | `String` | No | Publishing status |
| `synopsis` | `String` | No | Synopsis |
| `themes` | `Array` | No |  |
| `title` | `String` | No | Title |
| `title_english` | `String` | No | English Title |
| `title_japanese` | `String` | No | Japanese Title |
| `title_synonyms` | `Array` | No | Other Titles |
| `titles` | `Array` | No | All Titles |
| `total` | `Integer` | No | Total number of users who have the resource added to their lists |
| `type` | `String` | No | Manga Type |
| `url` | `String` | No | MyAnimeList URL |
| `volumes` | `Integer` | No | Volume count |
| `webp` | `Hash` | No | Available images in WEBP |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Manga.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Manga.load({ "id" => 1 })
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
people_search = client.PeopleSearch
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | No |  |
| `pagination` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PeopleSearch.list
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
person = client.Person
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `String` | No | Biography |
| `alternate_names` | `Array` | No | Other Names |
| `anime` | `Array` | No |  |
| `birthday` | `String` | No | Birthday Date ISO8601 |
| `character` | `Hash` | No |  |
| `data` | `Array` | No |  |
| `family_name` | `String` | No | Family Name |
| `favorites` | `Integer` | No | Number of users who have favorited this entry |
| `given_name` | `String` | No | Given Name |
| `id` | `String` | No |  |
| `images` | `Hash` | No |  |
| `jpg` | `Hash` | No | Available images in JPG |
| `mal_id` | `Integer` | No | MyAnimeList ID |
| `manga` | `Array` | No |  |
| `name` | `String` | No | Name |
| `pagination` | `Hash` | No |  |
| `position` | `String` | No | Person's position |
| `role` | `String` | No | Person's Character's role in the anime |
| `url` | `String` | No | MyAnimeList URL |
| `voices` | `Array` | No |  |
| `website_url` | `String` | No | Person's website URL |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Person.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Person.load({ "id" => 1 })
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
producer = client.Producer
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `String` | No | About the Producer |
| `count` | `Integer` | No | Producers's anime count |
| `data` | `Array` | No |  |
| `established` | `String` | No | Established Date ISO8601 |
| `external` | `Array` | No |  |
| `favorites` | `Integer` | No | Producers's member favorites count |
| `id` | `String` | No |  |
| `images` | `Hash` | No |  |
| `mal_id` | `Integer` | No | MyAnimeList ID |
| `name` | `String` | No |  |
| `pagination` | `Hash` | No |  |
| `titles` | `Array` | No | All titles |
| `url` | `String` | No | MyAnimeList URL |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Producer.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Producer.load({ "id" => 1 })
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
random = client.Random
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `String` | No | Biography |
| `aired` | `Hash` | No | Date range |
| `airing` | `Boolean` | No | Airing boolean |
| `alternate_names` | `Array` | No | Other Names |
| `approved` | `Boolean` | No | Whether the entry is pending approval on MAL or not |
| `authors` | `Array` | No |  |
| `background` | `String` | No | Background |
| `birthday` | `String` | No | Birthday Date ISO8601 |
| `broadcast` | `Hash` | No | Broadcast Details |
| `chapters` | `Integer` | No | Chapter count |
| `demographics` | `Array` | No |  |
| `duration` | `String` | No | Parsed raw duration |
| `episodes` | `Integer` | No | Episode count |
| `explicit_genres` | `Array` | No |  |
| `family_name` | `String` | No | Family Name |
| `favorites` | `Integer` | No | Number of users who have favorited this entry |
| `gender` | `String` | No | User Gender |
| `genres` | `Array` | No |  |
| `given_name` | `String` | No | Given Name |
| `images` | `Hash` | No |  |
| `joined` | `String` | No | Joined Date ISO8601 |
| `last_online` | `String` | No | Last Online Date ISO8601 |
| `licensors` | `Array` | No |  |
| `location` | `String` | No | Location |
| `mal_id` | `Integer` | No | MyAnimeList ID |
| `members` | `Integer` | No | Number of users who have added this entry to their list |
| `name` | `String` | No | Name |
| `name_kanji` | `String` | No | Name |
| `nicknames` | `Array` | No | Other Names |
| `popularity` | `Integer` | No | Popularity |
| `producers` | `Array` | No |  |
| `published` | `Hash` | No | Date range |
| `publishing` | `Boolean` | No | Publishing boolean |
| `rank` | `Integer` | No | Ranking |
| `rating` | `String` | No | Anime audience rating |
| `score` | `Float` | No | Score |
| `scored_by` | `Integer` | No | Number of users |
| `season` | `String` | No | Season |
| `serializations` | `Array` | No |  |
| `source` | `String` | No | Original Material/Source adapted from |
| `status` | `String` | No | Airing status |
| `studios` | `Array` | No |  |
| `synopsis` | `String` | No | Synopsis |
| `themes` | `Array` | No |  |
| `title` | `String` | No | Title |
| `title_english` | `String` | No | English Title |
| `title_japanese` | `String` | No | Japanese Title |
| `title_synonyms` | `Array` | No | Other Titles |
| `titles` | `Array` | No | All titles |
| `trailer` | `Hash` | No | Youtube Details |
| `type` | `String` | No | Anime Type |
| `url` | `String` | No | MyAnimeList URL |
| `username` | `String` | No | MyAnimeList Username |
| `volumes` | `Integer` | No | Volume count |
| `website_url` | `String` | No | Person's website URL |
| `year` | `Integer` | No | Year |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Random.load()
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
recommendation = client.Recommendation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | No |  |
| `pagination` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Recommendation.list
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
review = client.Review
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Review.load()
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
schedule = client.Schedule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | No |  |
| `pagination` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Schedule.list
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
season = client.Season
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | No |  |
| `pagination` | `Hash` | No |  |
| `seasons` | `Array` | No | List of available seasons |
| `year` | `Integer` | No | Year |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Season.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Season.load({ "season" => "season", "year" => 1 })
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
top = client.Top
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | No |  |
| `pagination` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Top.load()
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
user = client.User
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | `Array` | No | Favorite Anime |
| `birthday` | `String` | No | Birthday Date ISO8601 |
| `characters` | `Array` | No | Favorite Characters |
| `data` | `Array` | No |  |
| `external` | `Array` | No |  |
| `gender` | `String` | No | User Gender |
| `id` | `String` | No |  |
| `images` | `Hash` | No |  |
| `joined` | `String` | No | Joined Date ISO8601 |
| `last_online` | `String` | No | Last Online Date ISO8601 |
| `location` | `String` | No | Location |
| `mal_id` | `Integer` | No | MyAnimeList ID |
| `manga` | `Array` | No | Favorite Manga |
| `pagination` | `Hash` | No |  |
| `people` | `Array` | No | Favorite People |
| `statistics` | `Hash` | No |  |
| `url` | `String` | No | MyAnimeList URL |
| `username` | `String` | No | MyAnimeList Username |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.User.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.User.load({ "id" => 1 })
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
user_about = client.UserAbout
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `String` | No | User About. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.UserAbout.list
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
user_club = client.UserClub
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | No |  |
| `pagination` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.UserClub.list
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
user_friend = client.UserFriend
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | No |  |
| `pagination` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.UserFriend.list
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
user_history = client.UserHistory
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `String` | No | Date ISO8601 |
| `entry` | `Hash` | No | Parsed URL Data |
| `increment` | `Integer` | No | Number of episodes/chapters watched/read |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.UserHistory.list
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
user_statistic = client.UserStatistic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | `Hash` | No | Anime Statistics |
| `manga` | `Hash` | No | Manga Statistics |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.UserStatistic.load({ "username" => "username" })
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
user_update = client.UserUpdate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | `Array` | No | Last updated Anime |
| `manga` | `Array` | No | Last updated Manga |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.UserUpdate.load({ "username" => "username" })
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
watch_episode = client.WatchEpisode
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | No |  |
| `pagination` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WatchEpisode.list
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
watch_promo = client.WatchPromo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Array` | No |  |
| `pagination` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WatchPromo.list
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

