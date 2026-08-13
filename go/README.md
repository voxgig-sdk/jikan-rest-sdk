# JikanRest Golang SDK



The Golang SDK for the JikanRest API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Anime(nil)` — each with the same small set of operations (`List`, `Load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

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
    anime, err := client.Anime(nil).Load(map[string]any{"id": 1}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(anime)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
externals, err := client.External(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = externals
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
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

external, err := client.External(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(external) // the returned mock data
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
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    anime, err := client.Anime(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // anime is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Anime

| Field | Description |
| --- | --- |
| `"aired"` |  |
| `"airing"` |  |
| `"approved"` |  |
| `"author_url"` |  |
| `"author_username"` |  |
| `"background"` |  |
| `"broadcast"` |  |
| `"character"` |  |
| `"comments"` |  |
| `"completed"` |  |
| `"data"` |  |
| `"date"` |  |
| `"demographics"` |  |
| `"dropped"` |  |
| `"duration"` |  |
| `"endings"` |  |
| `"entry"` |  |
| `"episodes"` |  |
| `"explicit_genres"` |  |
| `"external"` |  |
| `"favorites"` |  |
| `"filler"` |  |
| `"genres"` |  |
| `"images"` |  |
| `"last_comment"` |  |
| `"licensors"` |  |
| `"mal_id"` |  |
| `"members"` |  |
| `"moreinfo"` |  |
| `"music_videos"` |  |
| `"name"` |  |
| `"on_hold"` |  |
| `"openings"` |  |
| `"pagination"` |  |
| `"person"` |  |
| `"plan_to_watch"` |  |
| `"popularity"` |  |
| `"positions"` |  |
| `"producers"` |  |
| `"promo"` |  |
| `"rank"` |  |
| `"rating"` |  |
| `"recap"` |  |
| `"relation"` |  |
| `"relations"` |  |
| `"role"` |  |
| `"score"` |  |
| `"scored_by"` |  |
| `"scores"` |  |
| `"season"` |  |
| `"source"` |  |
| `"status"` |  |
| `"streaming"` |  |
| `"studios"` |  |
| `"synopsis"` |  |
| `"theme"` |  |
| `"themes"` |  |
| `"title"` |  |
| `"title_english"` |  |
| `"title_japanese"` |  |
| `"title_romanji"` |  |
| `"title_synonyms"` |  |
| `"titles"` |  |
| `"total"` |  |
| `"trailer"` |  |
| `"type"` |  |
| `"url"` |  |
| `"voice_actors"` |  |
| `"watching"` |  |
| `"year"` |  |

Operations: List, Load.

API path: `/anime`

#### Character

| Field | Description |
| --- | --- |
| `"about"` |  |
| `"anime"` |  |
| `"data"` |  |
| `"favorites"` |  |
| `"image_url"` |  |
| `"images"` |  |
| `"language"` |  |
| `"large_image_url"` |  |
| `"mal_id"` |  |
| `"manga"` |  |
| `"name"` |  |
| `"name_kanji"` |  |
| `"nicknames"` |  |
| `"pagination"` |  |
| `"person"` |  |
| `"role"` |  |
| `"url"` |  |
| `"voices"` |  |

Operations: List, Load.

API path: `/characters`

#### Club

| Field | Description |
| --- | --- |
| `"access"` |  |
| `"anime"` |  |
| `"category"` |  |
| `"characters"` |  |
| `"created"` |  |
| `"data"` |  |
| `"images"` |  |
| `"mal_id"` |  |
| `"manga"` |  |
| `"members"` |  |
| `"name"` |  |
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
| `"approved"` |  |
| `"author_url"` |  |
| `"author_username"` |  |
| `"authors"` |  |
| `"background"` |  |
| `"chapters"` |  |
| `"character"` |  |
| `"comments"` |  |
| `"completed"` |  |
| `"data"` |  |
| `"date"` |  |
| `"demographics"` |  |
| `"dropped"` |  |
| `"entry"` |  |
| `"explicit_genres"` |  |
| `"external"` |  |
| `"favorites"` |  |
| `"genres"` |  |
| `"images"` |  |
| `"jpg"` |  |
| `"last_comment"` |  |
| `"mal_id"` |  |
| `"members"` |  |
| `"moreinfo"` |  |
| `"name"` |  |
| `"on_hold"` |  |
| `"pagination"` |  |
| `"plan_to_read"` |  |
| `"popularity"` |  |
| `"published"` |  |
| `"publishing"` |  |
| `"rank"` |  |
| `"reading"` |  |
| `"relation"` |  |
| `"relations"` |  |
| `"role"` |  |
| `"score"` |  |
| `"scored_by"` |  |
| `"scores"` |  |
| `"serializations"` |  |
| `"status"` |  |
| `"synopsis"` |  |
| `"themes"` |  |
| `"title"` |  |
| `"title_english"` |  |
| `"title_japanese"` |  |
| `"title_synonyms"` |  |
| `"titles"` |  |
| `"total"` |  |
| `"type"` |  |
| `"url"` |  |
| `"volumes"` |  |
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
| `"about"` |  |
| `"alternate_names"` |  |
| `"anime"` |  |
| `"birthday"` |  |
| `"character"` |  |
| `"data"` |  |
| `"family_name"` |  |
| `"favorites"` |  |
| `"given_name"` |  |
| `"images"` |  |
| `"jpg"` |  |
| `"mal_id"` |  |
| `"manga"` |  |
| `"name"` |  |
| `"pagination"` |  |
| `"position"` |  |
| `"role"` |  |
| `"url"` |  |
| `"voices"` |  |
| `"website_url"` |  |

Operations: List, Load.

API path: `/people`

#### Producer

| Field | Description |
| --- | --- |
| `"about"` |  |
| `"count"` |  |
| `"data"` |  |
| `"established"` |  |
| `"external"` |  |
| `"favorites"` |  |
| `"images"` |  |
| `"mal_id"` |  |
| `"name"` |  |
| `"pagination"` |  |
| `"titles"` |  |
| `"url"` |  |

Operations: List, Load.

API path: `/producers`

#### Random

| Field | Description |
| --- | --- |
| `"about"` |  |
| `"aired"` |  |
| `"airing"` |  |
| `"alternate_names"` |  |
| `"approved"` |  |
| `"authors"` |  |
| `"background"` |  |
| `"birthday"` |  |
| `"broadcast"` |  |
| `"chapters"` |  |
| `"demographics"` |  |
| `"duration"` |  |
| `"episodes"` |  |
| `"explicit_genres"` |  |
| `"family_name"` |  |
| `"favorites"` |  |
| `"gender"` |  |
| `"genres"` |  |
| `"given_name"` |  |
| `"images"` |  |
| `"joined"` |  |
| `"last_online"` |  |
| `"licensors"` |  |
| `"location"` |  |
| `"mal_id"` |  |
| `"members"` |  |
| `"name"` |  |
| `"name_kanji"` |  |
| `"nicknames"` |  |
| `"popularity"` |  |
| `"producers"` |  |
| `"published"` |  |
| `"publishing"` |  |
| `"rank"` |  |
| `"rating"` |  |
| `"score"` |  |
| `"scored_by"` |  |
| `"season"` |  |
| `"serializations"` |  |
| `"source"` |  |
| `"status"` |  |
| `"studios"` |  |
| `"synopsis"` |  |
| `"themes"` |  |
| `"title"` |  |
| `"title_english"` |  |
| `"title_japanese"` |  |
| `"title_synonyms"` |  |
| `"titles"` |  |
| `"trailer"` |  |
| `"type"` |  |
| `"url"` |  |
| `"username"` |  |
| `"volumes"` |  |
| `"website_url"` |  |
| `"year"` |  |

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
| `"seasons"` |  |
| `"year"` |  |

Operations: List.

API path: `/seasons/{year}/{season}`

#### Top

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"pagination"` |  |

Operations: Load.

API path: `/top/reviews`

#### User

| Field | Description |
| --- | --- |
| `"anime"` |  |
| `"birthday"` |  |
| `"characters"` |  |
| `"data"` |  |
| `"external"` |  |
| `"gender"` |  |
| `"images"` |  |
| `"joined"` |  |
| `"last_online"` |  |
| `"location"` |  |
| `"mal_id"` |  |
| `"manga"` |  |
| `"pagination"` |  |
| `"people"` |  |
| `"statistics"` |  |
| `"url"` |  |
| `"username"` |  |

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
| `"anime"` |  |
| `"manga"` |  |

Operations: Load.

API path: `/users/{username}/statistics`

#### UserUpdate

| Field | Description |
| --- | --- |
| `"anime"` |  |
| `"manga"` |  |

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
| `aired` | `string` |  |
| `airing` | `bool` |  |
| `approved` | `bool` |  |
| `author_url` | `string` |  |
| `author_username` | `string` |  |
| `background` | `string` |  |
| `broadcast` | `map[string]any` |  |
| `character` | `map[string]any` |  |
| `comments` | `int` |  |
| `completed` | `int` |  |
| `data` | `[]any` |  |
| `date` | `string` |  |
| `demographics` | `[]any` |  |
| `dropped` | `int` |  |
| `duration` | `int` |  |
| `endings` | `[]any` |  |
| `entry` | `map[string]any` |  |
| `episodes` | `int` |  |
| `explicit_genres` | `[]any` |  |
| `external` | `[]any` |  |
| `favorites` | `int` |  |
| `filler` | `bool` |  |
| `genres` | `[]any` |  |
| `images` | `map[string]any` |  |
| `last_comment` | `map[string]any` |  |
| `licensors` | `[]any` |  |
| `mal_id` | `int` |  |
| `members` | `int` |  |
| `moreinfo` | `string` |  |
| `music_videos` | `[]any` |  |
| `name` | `string` |  |
| `on_hold` | `int` |  |
| `openings` | `[]any` |  |
| `pagination` | `map[string]any` |  |
| `person` | `map[string]any` |  |
| `plan_to_watch` | `int` |  |
| `popularity` | `int` |  |
| `positions` | `[]any` |  |
| `producers` | `[]any` |  |
| `promo` | `[]any` |  |
| `rank` | `int` |  |
| `rating` | `string` |  |
| `recap` | `bool` |  |
| `relation` | `string` |  |
| `relations` | `[]any` |  |
| `role` | `string` |  |
| `score` | `float64` |  |
| `scored_by` | `int` |  |
| `scores` | `[]any` |  |
| `season` | `string` |  |
| `source` | `string` |  |
| `status` | `string` |  |
| `streaming` | `[]any` |  |
| `studios` | `[]any` |  |
| `synopsis` | `string` |  |
| `theme` | `map[string]any` |  |
| `themes` | `[]any` |  |
| `title` | `string` |  |
| `title_english` | `string` |  |
| `title_japanese` | `string` |  |
| `title_romanji` | `string` |  |
| `title_synonyms` | `[]any` |  |
| `titles` | `[]any` |  |
| `total` | `int` |  |
| `trailer` | `map[string]any` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `voice_actors` | `[]any` |  |
| `watching` | `int` |  |
| `year` | `int` |  |

#### Example: Load

```go
anime, err := client.Anime(nil).Load(map[string]any{"id": 1}, nil)
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
| `about` | `string` |  |
| `anime` | `[]any` |  |
| `data` | `[]any` |  |
| `favorites` | `int` |  |
| `image_url` | `string` |  |
| `images` | `map[string]any` |  |
| `language` | `string` |  |
| `large_image_url` | `string` |  |
| `mal_id` | `int` |  |
| `manga` | `[]any` |  |
| `name` | `string` |  |
| `name_kanji` | `string` |  |
| `nicknames` | `[]any` |  |
| `pagination` | `map[string]any` |  |
| `person` | `map[string]any` |  |
| `role` | `string` |  |
| `url` | `string` |  |
| `voices` | `[]any` |  |

#### Example: Load

```go
character, err := client.Character(nil).Load(map[string]any{"id": 1}, nil)
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
| `access` | `string` |  |
| `anime` | `[]any` |  |
| `category` | `string` |  |
| `characters` | `[]any` |  |
| `created` | `string` |  |
| `data` | `[]any` |  |
| `images` | `map[string]any` |  |
| `mal_id` | `int` |  |
| `manga` | `[]any` |  |
| `members` | `int` |  |
| `name` | `string` |  |
| `pagination` | `map[string]any` |  |
| `url` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```go
club, err := client.Club(nil).Load(map[string]any{"id": 1}, nil)
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
| `name` | `string` |  |
| `url` | `string` |  |

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
| `count` | `int` |  |
| `mal_id` | `int` |  |
| `name` | `string` |  |
| `url` | `string` |  |

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
| `data` | `[]any` |  |
| `pagination` | `map[string]any` |  |

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
| `approved` | `bool` |  |
| `author_url` | `string` |  |
| `author_username` | `string` |  |
| `authors` | `[]any` |  |
| `background` | `string` |  |
| `chapters` | `int` |  |
| `character` | `map[string]any` |  |
| `comments` | `int` |  |
| `completed` | `int` |  |
| `data` | `[]any` |  |
| `date` | `string` |  |
| `demographics` | `[]any` |  |
| `dropped` | `int` |  |
| `entry` | `map[string]any` |  |
| `explicit_genres` | `[]any` |  |
| `external` | `[]any` |  |
| `favorites` | `int` |  |
| `genres` | `[]any` |  |
| `images` | `map[string]any` |  |
| `jpg` | `map[string]any` |  |
| `last_comment` | `map[string]any` |  |
| `mal_id` | `int` |  |
| `members` | `int` |  |
| `moreinfo` | `string` |  |
| `name` | `string` |  |
| `on_hold` | `int` |  |
| `pagination` | `map[string]any` |  |
| `plan_to_read` | `int` |  |
| `popularity` | `int` |  |
| `published` | `map[string]any` |  |
| `publishing` | `bool` |  |
| `rank` | `int` |  |
| `reading` | `int` |  |
| `relation` | `string` |  |
| `relations` | `[]any` |  |
| `role` | `string` |  |
| `score` | `float64` |  |
| `scored_by` | `int` |  |
| `scores` | `[]any` |  |
| `serializations` | `[]any` |  |
| `status` | `string` |  |
| `synopsis` | `string` |  |
| `themes` | `[]any` |  |
| `title` | `string` |  |
| `title_english` | `string` |  |
| `title_japanese` | `string` |  |
| `title_synonyms` | `[]any` |  |
| `titles` | `[]any` |  |
| `total` | `int` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `volumes` | `int` |  |
| `webp` | `map[string]any` |  |

#### Example: Load

```go
manga, err := client.Manga(nil).Load(map[string]any{"id": 1}, nil)
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

Create an instance: `peopleSearch := client.PeopleSearch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` |  |
| `pagination` | `map[string]any` |  |

#### Example: List

```go
peopleSearchs, err := client.PeopleSearch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(peopleSearchs) // the array of records
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
| `about` | `string` |  |
| `alternate_names` | `[]any` |  |
| `anime` | `[]any` |  |
| `birthday` | `string` |  |
| `character` | `map[string]any` |  |
| `data` | `[]any` |  |
| `family_name` | `string` |  |
| `favorites` | `int` |  |
| `given_name` | `string` |  |
| `images` | `map[string]any` |  |
| `jpg` | `map[string]any` |  |
| `mal_id` | `int` |  |
| `manga` | `[]any` |  |
| `name` | `string` |  |
| `pagination` | `map[string]any` |  |
| `position` | `string` |  |
| `role` | `string` |  |
| `url` | `string` |  |
| `voices` | `[]any` |  |
| `website_url` | `string` |  |

#### Example: Load

```go
person, err := client.Person(nil).Load(map[string]any{"id": 1}, nil)
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
| `about` | `string` |  |
| `count` | `int` |  |
| `data` | `[]any` |  |
| `established` | `string` |  |
| `external` | `[]any` |  |
| `favorites` | `int` |  |
| `images` | `map[string]any` |  |
| `mal_id` | `int` |  |
| `name` | `string` |  |
| `pagination` | `map[string]any` |  |
| `titles` | `[]any` |  |
| `url` | `string` |  |

#### Example: Load

```go
producer, err := client.Producer(nil).Load(map[string]any{"id": 1}, nil)
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
| `about` | `string` |  |
| `aired` | `map[string]any` |  |
| `airing` | `bool` |  |
| `alternate_names` | `[]any` |  |
| `approved` | `bool` |  |
| `authors` | `[]any` |  |
| `background` | `string` |  |
| `birthday` | `string` |  |
| `broadcast` | `map[string]any` |  |
| `chapters` | `int` |  |
| `demographics` | `[]any` |  |
| `duration` | `string` |  |
| `episodes` | `int` |  |
| `explicit_genres` | `[]any` |  |
| `family_name` | `string` |  |
| `favorites` | `int` |  |
| `gender` | `string` |  |
| `genres` | `[]any` |  |
| `given_name` | `string` |  |
| `images` | `map[string]any` |  |
| `joined` | `string` |  |
| `last_online` | `string` |  |
| `licensors` | `[]any` |  |
| `location` | `string` |  |
| `mal_id` | `int` |  |
| `members` | `int` |  |
| `name` | `string` |  |
| `name_kanji` | `string` |  |
| `nicknames` | `[]any` |  |
| `popularity` | `int` |  |
| `producers` | `[]any` |  |
| `published` | `map[string]any` |  |
| `publishing` | `bool` |  |
| `rank` | `int` |  |
| `rating` | `string` |  |
| `score` | `float64` |  |
| `scored_by` | `int` |  |
| `season` | `string` |  |
| `serializations` | `[]any` |  |
| `source` | `string` |  |
| `status` | `string` |  |
| `studios` | `[]any` |  |
| `synopsis` | `string` |  |
| `themes` | `[]any` |  |
| `title` | `string` |  |
| `title_english` | `string` |  |
| `title_japanese` | `string` |  |
| `title_synonyms` | `[]any` |  |
| `titles` | `[]any` |  |
| `trailer` | `map[string]any` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `username` | `string` |  |
| `volumes` | `int` |  |
| `website_url` | `string` |  |
| `year` | `int` |  |

#### Example: Load

```go
random, err := client.Random(nil).Load(nil, nil)
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
| `data` | `[]any` |  |
| `pagination` | `map[string]any` |  |

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
review, err := client.Review(nil).Load(nil, nil)
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
| `data` | `[]any` |  |
| `pagination` | `map[string]any` |  |

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
| `data` | `[]any` |  |
| `pagination` | `map[string]any` |  |
| `seasons` | `[]any` |  |
| `year` | `int` |  |

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
| `data` | `[]any` |  |
| `pagination` | `map[string]any` |  |

#### Example: Load

```go
top, err := client.Top(nil).Load(nil, nil)
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
| `anime` | `[]any` |  |
| `birthday` | `string` |  |
| `characters` | `[]any` |  |
| `data` | `[]any` |  |
| `external` | `[]any` |  |
| `gender` | `string` |  |
| `images` | `map[string]any` |  |
| `joined` | `string` |  |
| `last_online` | `string` |  |
| `location` | `string` |  |
| `mal_id` | `int` |  |
| `manga` | `[]any` |  |
| `pagination` | `map[string]any` |  |
| `people` | `[]any` |  |
| `statistics` | `map[string]any` |  |
| `url` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```go
user, err := client.User(nil).Load(map[string]any{"id": 1}, nil)
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

Create an instance: `userAbout := client.UserAbout(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `string` |  |

#### Example: List

```go
userAbouts, err := client.UserAbout(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(userAbouts) // the array of records
```


### UserClub

Create an instance: `userClub := client.UserClub(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` |  |
| `pagination` | `map[string]any` |  |

#### Example: List

```go
userClubs, err := client.UserClub(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(userClubs) // the array of records
```


### UserFriend

Create an instance: `userFriend := client.UserFriend(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` |  |
| `pagination` | `map[string]any` |  |

#### Example: List

```go
userFriends, err := client.UserFriend(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(userFriends) // the array of records
```


### UserHistory

Create an instance: `userHistory := client.UserHistory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `entry` | `map[string]any` |  |
| `increment` | `int` |  |

#### Example: List

```go
userHistorys, err := client.UserHistory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(userHistorys) // the array of records
```


### UserStatistic

Create an instance: `userStatistic := client.UserStatistic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | `map[string]any` |  |
| `manga` | `map[string]any` |  |

#### Example: Load

```go
userStatistic, err := client.UserStatistic(nil).Load(map[string]any{"username": "username"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(userStatistic) // the loaded record
```


### UserUpdate

Create an instance: `userUpdate := client.UserUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | `[]any` |  |
| `manga` | `[]any` |  |

#### Example: Load

```go
userUpdate, err := client.UserUpdate(nil).Load(map[string]any{"username": "username"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(userUpdate) // the loaded record
```


### WatchEpisode

Create an instance: `watchEpisode := client.WatchEpisode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` |  |
| `pagination` | `map[string]any` |  |

#### Example: List

```go
watchEpisodes, err := client.WatchEpisode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(watchEpisodes) // the array of records
```


### WatchPromo

Create an instance: `watchPromo := client.WatchPromo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `[]any` |  |
| `pagination` | `map[string]any` |  |

#### Example: List

```go
watchPromos, err := client.WatchPromo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(watchPromos) // the array of records
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

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
external := client.External(nil)
external.List(nil, nil)

// external.Data() now returns the external data from the last list
// external.Match() returns the last match criteria
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
