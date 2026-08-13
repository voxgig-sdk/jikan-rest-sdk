# JikanRest Golang SDK Reference

Complete API reference for the JikanRest Golang SDK.


## JikanRestSDK

### Constructor

```go
func NewJikanRestSDK(options map[string]any) *JikanRestSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *JikanRestSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *JikanRestSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Anime(data map[string]any) JikanRestEntity`

Create a new `Anime` entity instance. Pass `nil` for no initial data.

#### `Character(data map[string]any) JikanRestEntity`

Create a new `Character` entity instance. Pass `nil` for no initial data.

#### `Club(data map[string]any) JikanRestEntity`

Create a new `Club` entity instance. Pass `nil` for no initial data.

#### `External(data map[string]any) JikanRestEntity`

Create a new `External` entity instance. Pass `nil` for no initial data.

#### `Genre(data map[string]any) JikanRestEntity`

Create a new `Genre` entity instance. Pass `nil` for no initial data.

#### `Magazine(data map[string]any) JikanRestEntity`

Create a new `Magazine` entity instance. Pass `nil` for no initial data.

#### `Manga(data map[string]any) JikanRestEntity`

Create a new `Manga` entity instance. Pass `nil` for no initial data.

#### `PeopleSearch(data map[string]any) JikanRestEntity`

Create a new `PeopleSearch` entity instance. Pass `nil` for no initial data.

#### `Person(data map[string]any) JikanRestEntity`

Create a new `Person` entity instance. Pass `nil` for no initial data.

#### `Producer(data map[string]any) JikanRestEntity`

Create a new `Producer` entity instance. Pass `nil` for no initial data.

#### `Random(data map[string]any) JikanRestEntity`

Create a new `Random` entity instance. Pass `nil` for no initial data.

#### `Recommendation(data map[string]any) JikanRestEntity`

Create a new `Recommendation` entity instance. Pass `nil` for no initial data.

#### `Review(data map[string]any) JikanRestEntity`

Create a new `Review` entity instance. Pass `nil` for no initial data.

#### `Schedule(data map[string]any) JikanRestEntity`

Create a new `Schedule` entity instance. Pass `nil` for no initial data.

#### `Season(data map[string]any) JikanRestEntity`

Create a new `Season` entity instance. Pass `nil` for no initial data.

#### `Top(data map[string]any) JikanRestEntity`

Create a new `Top` entity instance. Pass `nil` for no initial data.

#### `User(data map[string]any) JikanRestEntity`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserAbout(data map[string]any) JikanRestEntity`

Create a new `UserAbout` entity instance. Pass `nil` for no initial data.

#### `UserClub(data map[string]any) JikanRestEntity`

Create a new `UserClub` entity instance. Pass `nil` for no initial data.

#### `UserFriend(data map[string]any) JikanRestEntity`

Create a new `UserFriend` entity instance. Pass `nil` for no initial data.

#### `UserHistory(data map[string]any) JikanRestEntity`

Create a new `UserHistory` entity instance. Pass `nil` for no initial data.

#### `UserStatistic(data map[string]any) JikanRestEntity`

Create a new `UserStatistic` entity instance. Pass `nil` for no initial data.

#### `UserUpdate(data map[string]any) JikanRestEntity`

Create a new `UserUpdate` entity instance. Pass `nil` for no initial data.

#### `WatchEpisode(data map[string]any) JikanRestEntity`

Create a new `WatchEpisode` entity instance. Pass `nil` for no initial data.

#### `WatchPromo(data map[string]any) JikanRestEntity`

Create a new `WatchPromo` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AnimeEntity

```go
anime := client.Anime(nil)
fmt.Println(anime.GetName()) // "anime"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aired` | `string` | No |  |
| `airing` | `bool` | No |  |
| `approved` | `bool` | No |  |
| `author_url` | `string` | No |  |
| `author_username` | `string` | No |  |
| `background` | `string` | No |  |
| `broadcast` | `map[string]any` | No |  |
| `character` | `map[string]any` | No |  |
| `comments` | `int` | No |  |
| `completed` | `int` | No |  |
| `data` | `[]any` | No |  |
| `date` | `string` | No |  |
| `demographics` | `[]any` | No |  |
| `dropped` | `int` | No |  |
| `duration` | `int` | No |  |
| `endings` | `[]any` | No |  |
| `entry` | `map[string]any` | No |  |
| `episodes` | `int` | No |  |
| `explicit_genres` | `[]any` | No |  |
| `external` | `[]any` | No |  |
| `favorites` | `int` | No |  |
| `filler` | `bool` | No |  |
| `genres` | `[]any` | No |  |
| `images` | `map[string]any` | No |  |
| `last_comment` | `map[string]any` | No |  |
| `licensors` | `[]any` | No |  |
| `mal_id` | `int` | No |  |
| `members` | `int` | No |  |
| `moreinfo` | `string` | No |  |
| `music_videos` | `[]any` | No |  |
| `name` | `string` | No |  |
| `on_hold` | `int` | No |  |
| `openings` | `[]any` | No |  |
| `pagination` | `map[string]any` | No |  |
| `person` | `map[string]any` | No |  |
| `plan_to_watch` | `int` | No |  |
| `popularity` | `int` | No |  |
| `positions` | `[]any` | No |  |
| `producers` | `[]any` | No |  |
| `promo` | `[]any` | No |  |
| `rank` | `int` | No |  |
| `rating` | `string` | No |  |
| `recap` | `bool` | No |  |
| `relation` | `string` | No |  |
| `relations` | `[]any` | No |  |
| `role` | `string` | No |  |
| `score` | `float64` | No |  |
| `scored_by` | `int` | No |  |
| `scores` | `[]any` | No |  |
| `season` | `string` | No |  |
| `source` | `string` | No |  |
| `status` | `string` | No |  |
| `streaming` | `[]any` | No |  |
| `studios` | `[]any` | No |  |
| `synopsis` | `string` | No |  |
| `theme` | `map[string]any` | No |  |
| `themes` | `[]any` | No |  |
| `title` | `string` | No |  |
| `title_english` | `string` | No |  |
| `title_japanese` | `string` | No |  |
| `title_romanji` | `string` | No |  |
| `title_synonyms` | `[]any` | No |  |
| `titles` | `[]any` | No |  |
| `total` | `int` | No |  |
| `trailer` | `map[string]any` | No |  |
| `type` | `string` | No |  |
| `url` | `string` | No |  |
| `voice_actors` | `[]any` | No |  |
| `watching` | `int` | No |  |
| `year` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Anime(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Anime(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnimeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CharacterEntity

```go
character := client.Character(nil)
fmt.Println(character.GetName()) // "character"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `string` | No |  |
| `anime` | `[]any` | No |  |
| `data` | `[]any` | No |  |
| `favorites` | `int` | No |  |
| `image_url` | `string` | No |  |
| `images` | `map[string]any` | No |  |
| `language` | `string` | No |  |
| `large_image_url` | `string` | No |  |
| `mal_id` | `int` | No |  |
| `manga` | `[]any` | No |  |
| `name` | `string` | No |  |
| `name_kanji` | `string` | No |  |
| `nicknames` | `[]any` | No |  |
| `pagination` | `map[string]any` | No |  |
| `person` | `map[string]any` | No |  |
| `role` | `string` | No |  |
| `url` | `string` | No |  |
| `voices` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Character(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Character(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CharacterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ClubEntity

```go
club := client.Club(nil)
fmt.Println(club.GetName()) // "club"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `string` | No |  |
| `anime` | `[]any` | No |  |
| `category` | `string` | No |  |
| `characters` | `[]any` | No |  |
| `created` | `string` | No |  |
| `data` | `[]any` | No |  |
| `images` | `map[string]any` | No |  |
| `mal_id` | `int` | No |  |
| `manga` | `[]any` | No |  |
| `members` | `int` | No |  |
| `name` | `string` | No |  |
| `pagination` | `map[string]any` | No |  |
| `url` | `string` | No |  |
| `username` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Club(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Club(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ClubEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ExternalEntity

```go
external := client.External(nil)
fmt.Println(external.GetName()) // "external"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.External(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ExternalEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GenreEntity

```go
genre := client.Genre(nil)
fmt.Println(genre.GetName()) // "genre"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | No |  |
| `mal_id` | `int` | No |  |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Genre(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GenreEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MagazineEntity

```go
magazine := client.Magazine(nil)
fmt.Println(magazine.GetName()) // "magazine"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No |  |
| `pagination` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Magazine(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MagazineEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MangaEntity

```go
manga := client.Manga(nil)
fmt.Println(manga.GetName()) // "manga"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved` | `bool` | No |  |
| `author_url` | `string` | No |  |
| `author_username` | `string` | No |  |
| `authors` | `[]any` | No |  |
| `background` | `string` | No |  |
| `chapters` | `int` | No |  |
| `character` | `map[string]any` | No |  |
| `comments` | `int` | No |  |
| `completed` | `int` | No |  |
| `data` | `[]any` | No |  |
| `date` | `string` | No |  |
| `demographics` | `[]any` | No |  |
| `dropped` | `int` | No |  |
| `entry` | `map[string]any` | No |  |
| `explicit_genres` | `[]any` | No |  |
| `external` | `[]any` | No |  |
| `favorites` | `int` | No |  |
| `genres` | `[]any` | No |  |
| `images` | `map[string]any` | No |  |
| `jpg` | `map[string]any` | No |  |
| `last_comment` | `map[string]any` | No |  |
| `mal_id` | `int` | No |  |
| `members` | `int` | No |  |
| `moreinfo` | `string` | No |  |
| `name` | `string` | No |  |
| `on_hold` | `int` | No |  |
| `pagination` | `map[string]any` | No |  |
| `plan_to_read` | `int` | No |  |
| `popularity` | `int` | No |  |
| `published` | `map[string]any` | No |  |
| `publishing` | `bool` | No |  |
| `rank` | `int` | No |  |
| `reading` | `int` | No |  |
| `relation` | `string` | No |  |
| `relations` | `[]any` | No |  |
| `role` | `string` | No |  |
| `score` | `float64` | No |  |
| `scored_by` | `int` | No |  |
| `scores` | `[]any` | No |  |
| `serializations` | `[]any` | No |  |
| `status` | `string` | No |  |
| `synopsis` | `string` | No |  |
| `themes` | `[]any` | No |  |
| `title` | `string` | No |  |
| `title_english` | `string` | No |  |
| `title_japanese` | `string` | No |  |
| `title_synonyms` | `[]any` | No |  |
| `titles` | `[]any` | No |  |
| `total` | `int` | No |  |
| `type` | `string` | No |  |
| `url` | `string` | No |  |
| `volumes` | `int` | No |  |
| `webp` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Manga(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Manga(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MangaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PeopleSearchEntity

```go
peopleSearch := client.PeopleSearch(nil)
fmt.Println(peopleSearch.GetName()) // "people_search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No |  |
| `pagination` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PeopleSearch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PeopleSearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PersonEntity

```go
person := client.Person(nil)
fmt.Println(person.GetName()) // "person"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `string` | No |  |
| `alternate_names` | `[]any` | No |  |
| `anime` | `[]any` | No |  |
| `birthday` | `string` | No |  |
| `character` | `map[string]any` | No |  |
| `data` | `[]any` | No |  |
| `family_name` | `string` | No |  |
| `favorites` | `int` | No |  |
| `given_name` | `string` | No |  |
| `images` | `map[string]any` | No |  |
| `jpg` | `map[string]any` | No |  |
| `mal_id` | `int` | No |  |
| `manga` | `[]any` | No |  |
| `name` | `string` | No |  |
| `pagination` | `map[string]any` | No |  |
| `position` | `string` | No |  |
| `role` | `string` | No |  |
| `url` | `string` | No |  |
| `voices` | `[]any` | No |  |
| `website_url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Person(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Person(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PersonEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProducerEntity

```go
producer := client.Producer(nil)
fmt.Println(producer.GetName()) // "producer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `string` | No |  |
| `count` | `int` | No |  |
| `data` | `[]any` | No |  |
| `established` | `string` | No |  |
| `external` | `[]any` | No |  |
| `favorites` | `int` | No |  |
| `images` | `map[string]any` | No |  |
| `mal_id` | `int` | No |  |
| `name` | `string` | No |  |
| `pagination` | `map[string]any` | No |  |
| `titles` | `[]any` | No |  |
| `url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Producer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Producer(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProducerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RandomEntity

```go
random := client.Random(nil)
fmt.Println(random.GetName()) // "random"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `string` | No |  |
| `aired` | `map[string]any` | No |  |
| `airing` | `bool` | No |  |
| `alternate_names` | `[]any` | No |  |
| `approved` | `bool` | No |  |
| `authors` | `[]any` | No |  |
| `background` | `string` | No |  |
| `birthday` | `string` | No |  |
| `broadcast` | `map[string]any` | No |  |
| `chapters` | `int` | No |  |
| `demographics` | `[]any` | No |  |
| `duration` | `string` | No |  |
| `episodes` | `int` | No |  |
| `explicit_genres` | `[]any` | No |  |
| `family_name` | `string` | No |  |
| `favorites` | `int` | No |  |
| `gender` | `string` | No |  |
| `genres` | `[]any` | No |  |
| `given_name` | `string` | No |  |
| `images` | `map[string]any` | No |  |
| `joined` | `string` | No |  |
| `last_online` | `string` | No |  |
| `licensors` | `[]any` | No |  |
| `location` | `string` | No |  |
| `mal_id` | `int` | No |  |
| `members` | `int` | No |  |
| `name` | `string` | No |  |
| `name_kanji` | `string` | No |  |
| `nicknames` | `[]any` | No |  |
| `popularity` | `int` | No |  |
| `producers` | `[]any` | No |  |
| `published` | `map[string]any` | No |  |
| `publishing` | `bool` | No |  |
| `rank` | `int` | No |  |
| `rating` | `string` | No |  |
| `score` | `float64` | No |  |
| `scored_by` | `int` | No |  |
| `season` | `string` | No |  |
| `serializations` | `[]any` | No |  |
| `source` | `string` | No |  |
| `status` | `string` | No |  |
| `studios` | `[]any` | No |  |
| `synopsis` | `string` | No |  |
| `themes` | `[]any` | No |  |
| `title` | `string` | No |  |
| `title_english` | `string` | No |  |
| `title_japanese` | `string` | No |  |
| `title_synonyms` | `[]any` | No |  |
| `titles` | `[]any` | No |  |
| `trailer` | `map[string]any` | No |  |
| `type` | `string` | No |  |
| `url` | `string` | No |  |
| `username` | `string` | No |  |
| `volumes` | `int` | No |  |
| `website_url` | `string` | No |  |
| `year` | `int` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Random(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RandomEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RecommendationEntity

```go
recommendation := client.Recommendation(nil)
fmt.Println(recommendation.GetName()) // "recommendation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No |  |
| `pagination` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Recommendation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RecommendationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReviewEntity

```go
review := client.Review(nil)
fmt.Println(review.GetName()) // "review"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Review(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReviewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ScheduleEntity

```go
schedule := client.Schedule(nil)
fmt.Println(schedule.GetName()) // "schedule"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No |  |
| `pagination` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Schedule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScheduleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SeasonEntity

```go
season := client.Season(nil)
fmt.Println(season.GetName()) // "season"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No |  |
| `pagination` | `map[string]any` | No |  |
| `seasons` | `[]any` | No |  |
| `year` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Season(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SeasonEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TopEntity

```go
top := client.Top(nil)
fmt.Println(top.GetName()) // "top"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No |  |
| `pagination` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Top(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TopEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserEntity

```go
user := client.User(nil)
fmt.Println(user.GetName()) // "user"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | `[]any` | No |  |
| `birthday` | `string` | No |  |
| `characters` | `[]any` | No |  |
| `data` | `[]any` | No |  |
| `external` | `[]any` | No |  |
| `gender` | `string` | No |  |
| `images` | `map[string]any` | No |  |
| `joined` | `string` | No |  |
| `last_online` | `string` | No |  |
| `location` | `string` | No |  |
| `mal_id` | `int` | No |  |
| `manga` | `[]any` | No |  |
| `pagination` | `map[string]any` | No |  |
| `people` | `[]any` | No |  |
| `statistics` | `map[string]any` | No |  |
| `url` | `string` | No |  |
| `username` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.User(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserAboutEntity

```go
userAbout := client.UserAbout(nil)
fmt.Println(userAbout.GetName()) // "user_about"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.UserAbout(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserAboutEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserClubEntity

```go
userClub := client.UserClub(nil)
fmt.Println(userClub.GetName()) // "user_club"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No |  |
| `pagination` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.UserClub(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserClubEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserFriendEntity

```go
userFriend := client.UserFriend(nil)
fmt.Println(userFriend.GetName()) // "user_friend"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No |  |
| `pagination` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.UserFriend(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserFriendEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserHistoryEntity

```go
userHistory := client.UserHistory(nil)
fmt.Println(userHistory.GetName()) // "user_history"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | No |  |
| `entry` | `map[string]any` | No |  |
| `increment` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.UserHistory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserHistoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserStatisticEntity

```go
userStatistic := client.UserStatistic(nil)
fmt.Println(userStatistic.GetName()) // "user_statistic"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | `map[string]any` | No |  |
| `manga` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.UserStatistic(nil).Load(map[string]any{"username": "username"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserStatisticEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserUpdateEntity

```go
userUpdate := client.UserUpdate(nil)
fmt.Println(userUpdate.GetName()) // "user_update"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | `[]any` | No |  |
| `manga` | `[]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.UserUpdate(nil).Load(map[string]any{"username": "username"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserUpdateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WatchEpisodeEntity

```go
watchEpisode := client.WatchEpisode(nil)
fmt.Println(watchEpisode.GetName()) // "watch_episode"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No |  |
| `pagination` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WatchEpisode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WatchEpisodeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WatchPromoEntity

```go
watchPromo := client.WatchPromo(nil)
fmt.Println(watchPromo.GetName()) // "watch_promo"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `[]any` | No |  |
| `pagination` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WatchPromo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WatchPromoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewJikanRestSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

