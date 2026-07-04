# JikanRest Golang SDK



The Golang SDK for the JikanRest API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/jikan-rest-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/jikan-rest-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/jikan-rest-sdk/go=../jikan-rest-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/jikan-rest-sdk/go"
)

func main() {
    client := sdk.New()

    // List anime records — the value is the array of records itself.
    animes, err := client.Anime(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range animes.([]any) {
        fmt.Println(item)
    }

    // Load a single anime — the value is the loaded record.
    anime, err := client.Anime(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(anime)
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

anime, err := client.Anime(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(anime) // the loaded mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewJikanRestSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewJikanRestSDK

```go
func NewJikanRestSDK(options map[string]any) *JikanRestSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *JikanRestSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### JikanRestSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Anime` | `(data map[string]any) JikanRestEntity` | Create an Anime entity instance. |
| `Character` | `(data map[string]any) JikanRestEntity` | Create a Character entity instance. |
| `Club` | `(data map[string]any) JikanRestEntity` | Create a Club entity instance. |
| `External` | `(data map[string]any) JikanRestEntity` | Create an External entity instance. |
| `Genre` | `(data map[string]any) JikanRestEntity` | Create a Genre entity instance. |
| `Magazine` | `(data map[string]any) JikanRestEntity` | Create a Magazine entity instance. |
| `Manga` | `(data map[string]any) JikanRestEntity` | Create a Manga entity instance. |
| `PeopleSearch` | `(data map[string]any) JikanRestEntity` | Create a PeopleSearch entity instance. |
| `Person` | `(data map[string]any) JikanRestEntity` | Create a Person entity instance. |
| `Producer` | `(data map[string]any) JikanRestEntity` | Create a Producer entity instance. |
| `Random` | `(data map[string]any) JikanRestEntity` | Create a Random entity instance. |
| `Recommendation` | `(data map[string]any) JikanRestEntity` | Create a Recommendation entity instance. |
| `Review` | `(data map[string]any) JikanRestEntity` | Create a Review entity instance. |
| `Schedule` | `(data map[string]any) JikanRestEntity` | Create a Schedule entity instance. |
| `Season` | `(data map[string]any) JikanRestEntity` | Create a Season entity instance. |
| `Top` | `(data map[string]any) JikanRestEntity` | Create a Top entity instance. |
| `User` | `(data map[string]any) JikanRestEntity` | Create an User entity instance. |
| `UserAbout` | `(data map[string]any) JikanRestEntity` | Create an UserAbout entity instance. |
| `UserClub` | `(data map[string]any) JikanRestEntity` | Create an UserClub entity instance. |
| `UserFriend` | `(data map[string]any) JikanRestEntity` | Create an UserFriend entity instance. |
| `UserHistory` | `(data map[string]any) JikanRestEntity` | Create an UserHistory entity instance. |
| `UserStatistic` | `(data map[string]any) JikanRestEntity` | Create an UserStatistic entity instance. |
| `UserUpdate` | `(data map[string]any) JikanRestEntity` | Create an UserUpdate entity instance. |
| `WatchEpisode` | `(data map[string]any) JikanRestEntity` | Create a WatchEpisode entity instance. |
| `WatchPromo` | `(data map[string]any) JikanRestEntity` | Create a WatchPromo entity instance. |

### Entity interface (JikanRestEntity)

All entities implement the `JikanRestEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    anime, err := client.Anime(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil { /* handle */ }
    // anime is the loaded record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Anime

| Field | Description |
| --- | --- |
| `"author_url"` |  |
| `"author_username"` |  |
| `"character"` |  |
| `"comment"` |  |
| `"data"` |  |
| `"date"` |  |
| `"entry"` |  |
| `"image"` |  |
| `"last_comment"` |  |
| `"mal_id"` |  |
| `"name"` |  |
| `"pagination"` |  |
| `"person"` |  |
| `"position"` |  |
| `"relation"` |  |
| `"role"` |  |
| `"title"` |  |
| `"url"` |  |
| `"voice_actor"` |  |

Operations: List, Load.

API path: `/anime`

#### Character

| Field | Description |
| --- | --- |
| `"anime"` |  |
| `"data"` |  |
| `"image_url"` |  |
| `"language"` |  |
| `"large_image_url"` |  |
| `"manga"` |  |
| `"pagination"` |  |
| `"person"` |  |
| `"role"` |  |

Operations: List, Load.

API path: `/characters`

#### Club

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"pagination"` |  |
| `"url"` |  |
| `"username"` |  |

Operations: List, Load.

API path: `/clubs`

#### External

| Field | Description |
| --- | --- |
| `"name"` |  |
| `"url"` |  |

Operations: List.

API path: `/users/{username}/external`

#### Genre

| Field | Description |
| --- | --- |
| `"count"` |  |
| `"mal_id"` |  |
| `"name"` |  |
| `"url"` |  |

Operations: List.

API path: `/genres/anime`

#### Magazine

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"pagination"` |  |

Operations: List.

API path: `/magazines`

#### Manga

| Field | Description |
| --- | --- |
| `"author_url"` |  |
| `"author_username"` |  |
| `"character"` |  |
| `"comment"` |  |
| `"data"` |  |
| `"date"` |  |
| `"entry"` |  |
| `"jpg"` |  |
| `"last_comment"` |  |
| `"mal_id"` |  |
| `"name"` |  |
| `"pagination"` |  |
| `"relation"` |  |
| `"role"` |  |
| `"title"` |  |
| `"url"` |  |
| `"webp"` |  |

Operations: List, Load.

API path: `/manga`

#### PeopleSearch

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"pagination"` |  |

Operations: List.

API path: `/top/people`

#### Person

| Field | Description |
| --- | --- |
| `"anime"` |  |
| `"character"` |  |
| `"data"` |  |
| `"jpg"` |  |
| `"manga"` |  |
| `"pagination"` |  |
| `"position"` |  |
| `"role"` |  |

Operations: List, Load.

API path: `/people`

#### Producer

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"name"` |  |
| `"pagination"` |  |
| `"url"` |  |

Operations: List, Load.

API path: `/producers`

#### Random

| Field | Description |
| --- | --- |
| `"data"` |  |

Operations: Load.

API path: `/random/anime`

#### Recommendation

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"pagination"` |  |

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
| `"data"` |  |
| `"pagination"` |  |

Operations: List.

API path: `/schedules`

#### Season

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"pagination"` |  |
| `"season"` |  |
| `"year"` |  |

Operations: List.

API path: `/seasons/{year}/{season}`

#### Top

| Field | Description |
| --- | --- |
| `"data"` |  |

Operations: Load.

API path: `/top/reviews`

#### User

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"pagination"` |  |

Operations: List, Load.

API path: `/users`

#### UserAbout

| Field | Description |
| --- | --- |
| `"about"` |  |

Operations: List.

API path: `/users/{username}/about`

#### UserClub

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"pagination"` |  |

Operations: List.

API path: `/users/{username}/clubs`

#### UserFriend

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"pagination"` |  |

Operations: List.

API path: `/users/{username}/friends`

#### UserHistory

| Field | Description |
| --- | --- |
| `"date"` |  |
| `"entry"` |  |
| `"increment"` |  |

Operations: List.

API path: `/users/{username}/history`

#### UserStatistic

| Field | Description |
| --- | --- |
| `"data"` |  |

Operations: Load.

API path: `/users/{username}/statistics`

#### UserUpdate

| Field | Description |
| --- | --- |
| `"data"` |  |

Operations: Load.

API path: `/users/{username}/userupdates`

#### WatchEpisode

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"pagination"` |  |

Operations: List.

API path: `/watch/episodes`

#### WatchPromo

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"pagination"` |  |

Operations: List.

API path: `/watch/promos`



## Entities


### Anime

Create an instance: `anime := client.Anime(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_url` | ``$STRING`` |  |
| `author_username` | ``$STRING`` |  |
| `character` | ``$OBJECT`` |  |
| `comment` | ``$INTEGER`` |  |
| `data` | ``$OBJECT`` |  |
| `date` | ``$STRING`` |  |
| `entry` | ``$OBJECT`` |  |
| `image` | ``$OBJECT`` |  |
| `last_comment` | ``$OBJECT`` |  |
| `mal_id` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |
| `pagination` | ``$OBJECT`` |  |
| `person` | ``$OBJECT`` |  |
| `position` | ``$ARRAY`` |  |
| `relation` | ``$STRING`` |  |
| `role` | ``$STRING`` |  |
| `title` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |
| `voice_actor` | ``$ARRAY`` |  |

#### Example: Load

```go
anime, err := client.Anime(nil).Load(map[string]any{"id": "anime_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(anime) // the loaded record
```

#### Example: List

```go
animes, err := client.Anime(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(animes) // the array of records
```


### Character

Create an instance: `character := client.Character(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | ``$OBJECT`` |  |
| `data` | ``$OBJECT`` |  |
| `image_url` | ``$STRING`` |  |
| `language` | ``$STRING`` |  |
| `large_image_url` | ``$STRING`` |  |
| `manga` | ``$OBJECT`` |  |
| `pagination` | ``$OBJECT`` |  |
| `person` | ``$OBJECT`` |  |
| `role` | ``$STRING`` |  |

#### Example: Load

```go
character, err := client.Character(nil).Load(map[string]any{"id": "character_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(character) // the loaded record
```

#### Example: List

```go
characters, err := client.Character(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(characters) // the array of records
```


### Club

Create an instance: `club := client.Club(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$OBJECT`` |  |
| `pagination` | ``$OBJECT`` |  |
| `url` | ``$STRING`` |  |
| `username` | ``$STRING`` |  |

#### Example: Load

```go
club, err := client.Club(nil).Load(map[string]any{"id": "club_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(club) // the loaded record
```

#### Example: List

```go
clubs, err := client.Club(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(clubs) // the array of records
```


### External

Create an instance: `external := client.External(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |

#### Example: List

```go
externals, err := client.External(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(externals) // the array of records
```


### Genre

Create an instance: `genre := client.Genre(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | ``$INTEGER`` |  |
| `mal_id` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |

#### Example: List

```go
genres, err := client.Genre(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(genres) // the array of records
```


### Magazine

Create an instance: `magazine := client.Magazine(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```go
magazines, err := client.Magazine(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(magazines) // the array of records
```


### Manga

Create an instance: `manga := client.Manga(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author_url` | ``$STRING`` |  |
| `author_username` | ``$STRING`` |  |
| `character` | ``$OBJECT`` |  |
| `comment` | ``$INTEGER`` |  |
| `data` | ``$OBJECT`` |  |
| `date` | ``$STRING`` |  |
| `entry` | ``$OBJECT`` |  |
| `jpg` | ``$OBJECT`` |  |
| `last_comment` | ``$OBJECT`` |  |
| `mal_id` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |
| `pagination` | ``$OBJECT`` |  |
| `relation` | ``$STRING`` |  |
| `role` | ``$STRING`` |  |
| `title` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |
| `webp` | ``$OBJECT`` |  |

#### Example: Load

```go
manga, err := client.Manga(nil).Load(map[string]any{"id": "manga_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(manga) // the loaded record
```

#### Example: List

```go
mangas, err := client.Manga(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(mangas) // the array of records
```


### PeopleSearch

Create an instance: `people_search := client.PeopleSearch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```go
people_searchs, err := client.PeopleSearch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(people_searchs) // the array of records
```


### Person

Create an instance: `person := client.Person(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | ``$OBJECT`` |  |
| `character` | ``$OBJECT`` |  |
| `data` | ``$OBJECT`` |  |
| `jpg` | ``$OBJECT`` |  |
| `manga` | ``$OBJECT`` |  |
| `pagination` | ``$OBJECT`` |  |
| `position` | ``$STRING`` |  |
| `role` | ``$STRING`` |  |

#### Example: Load

```go
person, err := client.Person(nil).Load(map[string]any{"id": "person_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(person) // the loaded record
```

#### Example: List

```go
persons, err := client.Person(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(persons) // the array of records
```


### Producer

Create an instance: `producer := client.Producer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$OBJECT`` |  |
| `name` | ``$STRING`` |  |
| `pagination` | ``$OBJECT`` |  |
| `url` | ``$STRING`` |  |

#### Example: Load

```go
producer, err := client.Producer(nil).Load(map[string]any{"id": "producer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(producer) // the loaded record
```

#### Example: List

```go
producers, err := client.Producer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(producers) // the array of records
```


### Random

Create an instance: `random := client.Random(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$OBJECT`` |  |

#### Example: Load

```go
random, err := client.Random(nil).Load(map[string]any{"id": "random_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(random) // the loaded record
```


### Recommendation

Create an instance: `recommendation := client.Recommendation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```go
recommendations, err := client.Recommendation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(recommendations) // the array of records
```


### Review

Create an instance: `review := client.Review(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
review, err := client.Review(nil).Load(map[string]any{"id": "review_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(review) // the loaded record
```


### Schedule

Create an instance: `schedule := client.Schedule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```go
schedules, err := client.Schedule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(schedules) // the array of records
```


### Season

Create an instance: `season := client.Season(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |
| `season` | ``$ARRAY`` |  |
| `year` | ``$INTEGER`` |  |

#### Example: List

```go
seasons, err := client.Season(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(seasons) // the array of records
```


### Top

Create an instance: `top := client.Top(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ANY`` |  |

#### Example: Load

```go
top, err := client.Top(nil).Load(map[string]any{"id": "top_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(top) // the loaded record
```


### User

Create an instance: `user := client.User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ANY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: Load

```go
user, err := client.User(nil).Load(map[string]any{"id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(user) // the loaded record
```

#### Example: List

```go
users, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(users) // the array of records
```


### UserAbout

Create an instance: `user_about := client.UserAbout(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | ``$STRING`` |  |

#### Example: List

```go
user_abouts, err := client.UserAbout(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(user_abouts) // the array of records
```


### UserClub

Create an instance: `user_club := client.UserClub(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```go
user_clubs, err := client.UserClub(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(user_clubs) // the array of records
```


### UserFriend

Create an instance: `user_friend := client.UserFriend(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```go
user_friends, err := client.UserFriend(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(user_friends) // the array of records
```


### UserHistory

Create an instance: `user_history := client.UserHistory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | ``$STRING`` |  |
| `entry` | ``$OBJECT`` |  |
| `increment` | ``$INTEGER`` |  |

#### Example: List

```go
user_historys, err := client.UserHistory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(user_historys) // the array of records
```


### UserStatistic

Create an instance: `user_statistic := client.UserStatistic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$OBJECT`` |  |

#### Example: Load

```go
user_statistic, err := client.UserStatistic(nil).Load(map[string]any{"id": "user_statistic_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(user_statistic) // the loaded record
```


### UserUpdate

Create an instance: `user_update := client.UserUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$OBJECT`` |  |

#### Example: Load

```go
user_update, err := client.UserUpdate(nil).Load(map[string]any{"id": "user_update_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(user_update) // the loaded record
```


### WatchEpisode

Create an instance: `watch_episode := client.WatchEpisode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```go
watch_episodes, err := client.WatchEpisode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(watch_episodes) // the array of records
```


### WatchPromo

Create an instance: `watch_promo := client.WatchPromo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```go
watch_promos, err := client.WatchPromo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(watch_promos) // the array of records
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

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

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller. An unexpected panic triggers the
`PreUnexpected` hook.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/jikan-rest-sdk/go/
├── jikan-rest.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/jikan-rest-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
anime := client.Anime(nil)
anime.Load(map[string]any{"id": "example_id"}, nil)

// anime.Data() now returns the loaded anime data
// anime.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
