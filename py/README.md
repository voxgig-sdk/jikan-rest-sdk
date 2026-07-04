# JikanRest Python SDK



The Python SDK for the JikanRest API — an entity-oriented client following Pythonic conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/jikan-rest-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
from jikanrest_sdk import JikanRestSDK

client = JikanRestSDK()
```

### 2. List animes

```python
try:
    result = client.anime.list()
    for item in result:
        d = item.data_get()
        print(d["id"], d["name"])
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load an anime

```python
try:
    result = client.anime.load({"id": "example_id"})
    print(result)
except Exception as err:
    print(f"load failed: {err}")
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    print(result["err"])     # error value
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = JikanRestSDK.test()

result = client.anime.load({"id": "test01"})
# result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = JikanRestSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### JikanRestSDK

```python
from jikanrest_sdk import JikanRestSDK

client = JikanRestSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = JikanRestSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### JikanRestSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Anime` | `(data) -> AnimeEntity` | Create a Anime entity instance. |
| `Character` | `(data) -> CharacterEntity` | Create a Character entity instance. |
| `Club` | `(data) -> ClubEntity` | Create a Club entity instance. |
| `External` | `(data) -> ExternalEntity` | Create a External entity instance. |
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
| `User` | `(data) -> UserEntity` | Create a User entity instance. |
| `UserAbout` | `(data) -> UserAboutEntity` | Create a UserAbout entity instance. |
| `UserClub` | `(data) -> UserClubEntity` | Create a UserClub entity instance. |
| `UserFriend` | `(data) -> UserFriendEntity` | Create a UserFriend entity instance. |
| `UserHistory` | `(data) -> UserHistoryEntity` | Create a UserHistory entity instance. |
| `UserStatistic` | `(data) -> UserStatisticEntity` | Create a UserStatistic entity instance. |
| `UserUpdate` | `(data) -> UserUpdateEntity` | Create a UserUpdate entity instance. |
| `WatchEpisode` | `(data) -> WatchEpisodeEntity` | Create a WatchEpisode entity instance. |
| `WatchPromo` | `(data) -> WatchPromoEntity` | Create a WatchPromo entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the bare result data (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `const anime = client.anime`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

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

```ts
const anime = await client.anime.load({ id: 'anime_id' })
```

#### Example: List

```ts
const animes = await client.anime.list()
```


### Character

Create an instance: `const character = client.character`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

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

```ts
const character = await client.character.load({ id: 'character_id' })
```

#### Example: List

```ts
const characters = await client.character.list()
```


### Club

Create an instance: `const club = client.club`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$OBJECT`` |  |
| `pagination` | ``$OBJECT`` |  |
| `url` | ``$STRING`` |  |
| `username` | ``$STRING`` |  |

#### Example: Load

```ts
const club = await client.club.load({ id: 'club_id' })
```

#### Example: List

```ts
const clubs = await client.club.list()
```


### External

Create an instance: `const external = client.external`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |

#### Example: List

```ts
const externals = await client.external.list()
```


### Genre

Create an instance: `const genre = client.genre`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | ``$INTEGER`` |  |
| `mal_id` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |

#### Example: List

```ts
const genres = await client.genre.list()
```


### Magazine

Create an instance: `const magazine = client.magazine`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```ts
const magazines = await client.magazine.list()
```


### Manga

Create an instance: `const manga = client.manga`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

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

```ts
const manga = await client.manga.load({ id: 'manga_id' })
```

#### Example: List

```ts
const mangas = await client.manga.list()
```


### PeopleSearch

Create an instance: `const people_search = client.people_search`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```ts
const people_searchs = await client.people_search.list()
```


### Person

Create an instance: `const person = client.person`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

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

```ts
const person = await client.person.load({ id: 'person_id' })
```

#### Example: List

```ts
const persons = await client.person.list()
```


### Producer

Create an instance: `const producer = client.producer`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$OBJECT`` |  |
| `name` | ``$STRING`` |  |
| `pagination` | ``$OBJECT`` |  |
| `url` | ``$STRING`` |  |

#### Example: Load

```ts
const producer = await client.producer.load({ id: 'producer_id' })
```

#### Example: List

```ts
const producers = await client.producer.list()
```


### Random

Create an instance: `const random = client.random`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$OBJECT`` |  |

#### Example: Load

```ts
const random = await client.random.load({ id: 'random_id' })
```


### Recommendation

Create an instance: `const recommendation = client.recommendation`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```ts
const recommendations = await client.recommendation.list()
```


### Review

Create an instance: `const review = client.review`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const review = await client.review.load({ id: 'review_id' })
```


### Schedule

Create an instance: `const schedule = client.schedule`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```ts
const schedules = await client.schedule.list()
```


### Season

Create an instance: `const season = client.season`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |
| `season` | ``$ARRAY`` |  |
| `year` | ``$INTEGER`` |  |

#### Example: List

```ts
const seasons = await client.season.list()
```


### Top

Create an instance: `const top = client.top`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ANY`` |  |

#### Example: Load

```ts
const top = await client.top.load({ id: 'top_id' })
```


### User

Create an instance: `const user = client.user`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ANY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: Load

```ts
const user = await client.user.load({ id: 'user_id' })
```

#### Example: List

```ts
const users = await client.user.list()
```


### UserAbout

Create an instance: `const user_about = client.user_about`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | ``$STRING`` |  |

#### Example: List

```ts
const user_abouts = await client.user_about.list()
```


### UserClub

Create an instance: `const user_club = client.user_club`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```ts
const user_clubs = await client.user_club.list()
```


### UserFriend

Create an instance: `const user_friend = client.user_friend`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```ts
const user_friends = await client.user_friend.list()
```


### UserHistory

Create an instance: `const user_history = client.user_history`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | ``$STRING`` |  |
| `entry` | ``$OBJECT`` |  |
| `increment` | ``$INTEGER`` |  |

#### Example: List

```ts
const user_historys = await client.user_history.list()
```


### UserStatistic

Create an instance: `const user_statistic = client.user_statistic`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$OBJECT`` |  |

#### Example: Load

```ts
const user_statistic = await client.user_statistic.load({ id: 'user_statistic_id' })
```


### UserUpdate

Create an instance: `const user_update = client.user_update`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$OBJECT`` |  |

#### Example: Load

```ts
const user_update = await client.user_update.load({ id: 'user_update_id' })
```


### WatchEpisode

Create an instance: `const watch_episode = client.watch_episode`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```ts
const watch_episodes = await client.watch_episode.list()
```


### WatchPromo

Create an instance: `const watch_promo = client.watch_promo`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | ``$ARRAY`` |  |
| `pagination` | ``$OBJECT`` |  |

#### Example: List

```ts
const watch_promos = await client.watch_promo.list()
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
error is returned to the caller as the second element in the return tuple.

### Features and hooks

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── jikanrest_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`jikanrest_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
anime = client.anime
anime.load({"id": "example_id"})

# anime.data_get() now returns the loaded anime data
# anime.match_get() returns the last match criteria
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
