# JikanRest SDK



Available for [Golang](go/) and [Go CLI](go-cli/) and [Lua](lua/) and [PHP](php/) and [Python](py/) and [Ruby](rb/) and [TypeScript](ts/).


## Entities

The API exposes 25 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Anime** |  | `/anime` |
| **Character** |  | `/characters` |
| **Club** |  | `/clubs` |
| **External** |  | `/users/{username}/external` |
| **Genre** |  | `/genres/anime` |
| **Magazine** |  | `/magazines` |
| **Manga** |  | `/manga` |
| **PeopleSearch** |  | `/top/people` |
| **Person** |  | `/people` |
| **Producer** |  | `/producers` |
| **Random** |  | `/random/anime` |
| **Recommendation** |  | `/users/{username}/recommendations` |
| **Review** |  | `/reviews/anime` |
| **Schedule** |  | `/schedules` |
| **Season** |  | `/seasons/{year}/{season}` |
| **Top** |  | `/top/reviews` |
| **User** |  | `/users` |
| **UserAbout** |  | `/users/{username}/about` |
| **UserClub** |  | `/users/{username}/clubs` |
| **UserFriend** |  | `/users/{username}/friends` |
| **UserHistory** |  | `/users/{username}/history` |
| **UserStatistic** |  | `/users/{username}/statistics` |
| **UserUpdate** |  | `/users/{username}/userupdates` |
| **WatchEpisode** |  | `/watch/episodes` |
| **WatchPromo** |  | `/watch/promos` |

Each entity supports the following operations where available: **load**, **list**, **create**,
**update**, and **remove**.


## Architecture

### Entity-operation model

Every SDK call follows the same pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

At each stage a feature hook fires (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), allowing features to inspect or modify the pipeline.

### Features

Features are hook-based middleware that extend SDK behaviour.

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

You can add custom features by passing them in the `extend` option at
construction time.

### Direct and Prepare

For endpoints not covered by the entity model, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`, `headers`,
and `body`.


## Quick start

### Golang

```go
import sdk "github.com/voxgig-sdk/jikan-rest-sdk/go"

client := sdk.NewJikanRestSDK(map[string]any{
    "apikey": os.Getenv("JIKAN-REST_APIKEY"),
})

// List all animes
animes, err := client.Anime(nil).List(nil, nil)
```

### Lua

```lua
local sdk = require("jikan-rest_sdk")

local client = sdk.new({
  apikey = os.getenv("JIKAN-REST_APIKEY"),
})

-- List all animes
local animes, err = client:Anime(nil):list(nil, nil)

-- Load a specific anime
local anime, err = client:Anime(nil):load(
  { id = "example_id" }, nil
)
```

### PHP

```php
<?php
require_once 'jikanrest_sdk.php';

$client = new JikanRestSDK([
    "apikey" => getenv("JIKAN-REST_APIKEY"),
]);

// List all animes
[$animes, $err] = $client->Anime(null)->list(null, null);

// Load a specific anime
[$anime, $err] = $client->Anime(null)->load(
    ["id" => "example_id"], null
);
```

### Python

```python
import os
from jikanrest_sdk import JikanRestSDK

client = JikanRestSDK({
    "apikey": os.environ.get("JIKAN-REST_APIKEY"),
})

# List all animes
animes, err = client.Anime(None).list(None, None)

# Load a specific anime
anime, err = client.Anime(None).load(
    {"id": "example_id"}, None
)
```

### Ruby

```ruby
require_relative "JikanRest_sdk"

client = JikanRestSDK.new({
  "apikey" => ENV["JIKAN-REST_APIKEY"],
})

# List all animes
animes, err = client.Anime(nil).list(nil, nil)

# Load a specific anime
anime, err = client.Anime(nil).load(
  { "id" => "example_id" }, nil
)
```

### TypeScript

```ts
import { JikanRestSDK } from 'jikan-rest'

const client = new JikanRestSDK({
  apikey: process.env.JIKAN-REST_APIKEY,
})

// List all animes
const animes = await client.Anime().list()
```


## Testing

Both SDKs provide a test mode that replaces the HTTP transport with an
in-memory mock, so tests run without a network connection.

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Anime(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Anime(nil):load(
  { id = "test01" }, nil
)
```

### PHP

```php
$client = JikanRestSDK::test(null, null);
[$result, $err] = $client->Anime(null)->load(
    ["id" => "test01"], null
);
```

### Python

```python
client = JikanRestSDK.test(None, None)
result, err = client.Anime(None).load(
    {"id": "test01"}, None
)
```

### Ruby

```ruby
client = JikanRestSDK.test(nil, nil)
result, err = client.Anime(nil).load(
  { "id" => "test01" }, nil
)
```

### TypeScript

```ts
const client = JikanRestSDK.test()
const result = await client.Anime().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```


## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
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

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
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

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```


## Language-specific documentation

- [Golang SDK](go/README.md)
- [Go CLI SDK](go-cli/README.md)
- [Lua SDK](lua/README.md)
- [PHP SDK](php/README.md)
- [Python SDK](py/README.md)
- [Ruby SDK](rb/README.md)
- [TypeScript SDK](ts/README.md)

