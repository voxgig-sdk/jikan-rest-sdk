# JikanRest SDK

Query MyAnimeList anime, manga, characters, people, and community data through an unofficial REST API

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Jikan API

[Jikan](https://jikan.moe) is an unofficial REST API for [MyAnimeList](https://myanimelist.net), maintained by an independent open-source community led by Irfan Dahir. Because MyAnimeList does not offer a full public API, Jikan scrapes and parses the site to expose its catalogue as JSON over HTTPS.

What you get from the API:

- Anime and manga records including titles, synopses, scores, rankings, genres, and related entries
- Character, person (voice actor / staff), producer, magazine, and club profiles
- Discovery endpoints for top lists, seasonal charts, broadcast schedules, random picks, recommendations, and reviews
- User profiles, friends lists, clubs, history, statistics, and update feeds
- Streaming and promotional video metadata under the watch endpoints

The public instance is served from `https://api.jikan.moe/v4` with CORS enabled and no authentication. Usage is throttled to roughly 3 requests per second and 60 requests per minute, with no hard daily cap. Because the data is scraped, freshness and availability depend on MyAnimeList being reachable; status is reported at [status.jikan.moe](https://status.jikan.moe).

## Try it

**TypeScript**
```bash
npm install jikan-rest
```

**Python**
```bash
pip install jikan-rest-sdk
```

**PHP**
```bash
composer require voxgig/jikan-rest-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/jikan-rest-sdk/go
```

**Ruby**
```bash
gem install jikan-rest-sdk
```

**Lua**
```bash
luarocks install jikan-rest-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { JikanRestSDK } from 'jikan-rest'

const client = new JikanRestSDK({})

// List all animes
const animes = await client.Anime().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o jikan-rest-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "jikan-rest": {
      "command": "/abs/path/to/jikan-rest-mcp"
    }
  }
}
```

## Entities

The API exposes 25 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Anime** | Anime titles and their detail sub-resources (characters, staff, episodes, news, videos, statistics, etc.) under `/anime` and `/anime/{id}/...` | `/anime` |
| **Character** | Character profiles with associated anime, manga, and voice actors under `/characters` | `/characters` |
| **Club** | MyAnimeList community clubs, their members, and related listings under `/clubs` | `/clubs` |
| **External** | External site links attached to anime, manga, or other resources via `.../external` sub-paths | `/users/{username}/external` |
| **Genre** | Genre, theme, and demographic taxonomies for anime and manga under `/genres/anime` and `/genres/manga` | `/genres/anime` |
| **Magazine** | Manga magazines and serializations under `/magazines` | `/magazines` |
| **Manga** | Manga titles and their detail sub-resources (characters, statistics, reviews, recommendations, etc.) under `/manga` and `/manga/{id}/...` | `/manga` |
| **PeopleSearch** | Search across people (voice actors, directors, staff) via `/people` query endpoints | `/top/people` |
| **Person** | Individual person profiles with their anime, manga, and voice roles under `/people/{id}` | `/people` |
| **Producer** | Anime producers, studios, and licensors under `/producers` | `/producers` |
| **Random** | Random selection endpoints that return a single resource per call under `/random/anime`, `/random/manga`, `/random/characters`, `/random/people`, `/random/users` | `/random/anime` |
| **Recommendation** | User-submitted anime and manga recommendations under `/recommendations/anime` and `/recommendations/manga` | `/users/{username}/recommendations` |
| **Review** | User-submitted reviews for anime and manga under `/reviews/anime` and `/reviews/manga` | `/reviews/anime` |
| **Schedule** | Weekly broadcast schedule for currently airing anime under `/schedules` | `/schedules` |
| **Season** | Seasonal anime listings (current, upcoming, archive) under `/seasons`, `/seasons/now`, and `/seasons/{year}/{season}` | `/seasons/{year}/{season}` |
| **Top** | Top-ranked lists for anime, manga, characters, people, and reviews under `/top/...` | `/top/reviews` |
| **User** | MyAnimeList user lookups and listings under `/users` | `/users` |
| **UserAbout** | The free-form 'about me' section of a user profile under `/users/{username}/about` | `/users/{username}/about` |
| **UserClub** | Clubs a given user belongs to under `/users/{username}/clubs` | `/users/{username}/clubs` |
| **UserFriend** | A user's friends list under `/users/{username}/friends` | `/users/{username}/friends` |
| **UserHistory** | A user's recent anime or manga activity under `/users/{username}/history` | `/users/{username}/history` |
| **UserStatistic** | Aggregated watching and reading statistics for a user under `/users/{username}/statistics` | `/users/{username}/statistics` |
| **UserUpdate** | A user's most recent list updates under `/users/{username}/userupdates` | `/users/{username}/userupdates` |
| **WatchEpisode** | Recently added and popular episode releases under `/watch/episodes` | `/watch/episodes` |
| **WatchPromo** | Recent and popular anime promotional videos under `/watch/promos` | `/watch/promos` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from jikanrest_sdk import JikanRestSDK

client = JikanRestSDK({})

# List all animes
animes, err = client.Anime(None).list(None, None)

# Load a specific anime
anime, err = client.Anime(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'jikanrest_sdk.php';

$client = new JikanRestSDK([]);

// List all animes
[$animes, $err] = $client->Anime(null)->list(null, null);

// Load a specific anime
[$anime, $err] = $client->Anime(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/jikan-rest-sdk/go"

client := sdk.NewJikanRestSDK(map[string]any{})

// List all animes
animes, err := client.Anime(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "JikanRest_sdk"

client = JikanRestSDK.new({})

# List all animes
animes, err = client.Anime(nil).list(nil, nil)

# Load a specific anime
anime, err = client.Anime(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("jikan-rest_sdk")

local client = sdk.new({})

-- List all animes
local animes, err = client:Anime(nil):list(nil, nil)

-- Load a specific anime
local anime, err = client:Anime(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = JikanRestSDK.test()
const result = await client.Anime().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = JikanRestSDK.test(None, None)
result, err = client.Anime(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = JikanRestSDK::test(null, null);
[$result, $err] = $client->Anime(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Anime(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = JikanRestSDK.test(nil, nil)
result, err = client.Anime(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Anime(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Jikan API

- Upstream: [https://jikan.moe](https://jikan.moe)
- API docs: [https://docs.api.jikan.moe/](https://docs.api.jikan.moe/)

- Source code is released under the MIT License
- Jikan is an unofficial, community-run project and is not endorsed by or affiliated with MyAnimeList
- Data is sourced by scraping MyAnimeList; downstream use should respect MyAnimeList's terms
- Attribution to the Jikan project is appreciated when redistributing data

---

Generated from the Jikan API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
