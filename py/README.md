# JikanRest Python SDK



The Python SDK for the JikanRest API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Anime()` — each
carrying a small, uniform set of operations (`list`, `load`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

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

### 2. List anime records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    animes = client.Anime().list()
    for anime in animes:
        print(anime)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load a season

Season is nested under season, so provide the `season`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    season = client.Season().load({"season": "example_season", "year": 1})
    print(season)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    externals = client.External().list()
    print(externals)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
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
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
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

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
external = client.External().list()
# external contains the mock response record
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
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
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

Create an instance: `anime = client.Anime()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aired` | `str` | Aired Date ISO8601 |
| `airing` | `bool` | Airing boolean |
| `approved` | `bool` | Whether the entry is pending approval on MAL or not |
| `author_url` | `str` | Author Profile URL |
| `author_username` | `str` | Author MyAnimeList Username |
| `background` | `str` | Background |
| `broadcast` | `dict` | Broadcast Details |
| `character` | `dict` | Character details |
| `comments` | `int` | Comment count |
| `completed` | `int` | Number of users who have completed the resource |
| `data` | `list` |  |
| `date` | `str` | Post Date ISO8601 |
| `demographics` | `list` |  |
| `dropped` | `int` | Number of users who have dropped the resource |
| `duration` | `int` | Episode duration in seconds |
| `endings` | `list` |  |
| `entry` | `dict` | Related entries |
| `episodes` | `int` | Episode count |
| `explicit_genres` | `list` |  |
| `external` | `list` |  |
| `favorites` | `int` | Number of users who have favorited this entry |
| `filler` | `bool` | Filler episode |
| `genres` | `list` |  |
| `id` | `str` |  |
| `images` | `dict` |  |
| `last_comment` | `dict` | Last comment details |
| `licensors` | `list` |  |
| `mal_id` | `int` | MyAnimeList ID |
| `members` | `int` | Number of users who have added this entry to their list |
| `moreinfo` | `str` | Additional information on the entry |
| `music_videos` | `list` |  |
| `name` | `str` |  |
| `on_hold` | `int` | Number of users who have put the resource on hold |
| `openings` | `list` |  |
| `pagination` | `dict` |  |
| `person` | `dict` | Person details |
| `plan_to_watch` | `int` | Number of users who have planned to watch the resource |
| `popularity` | `int` | Popularity |
| `positions` | `list` | Staff Positions |
| `producers` | `list` |  |
| `promo` | `list` |  |
| `rank` | `int` | Ranking |
| `rating` | `str` | Anime audience rating |
| `recap` | `bool` | Recap episode |
| `relation` | `str` | Relation type |
| `relations` | `list` |  |
| `role` | `str` | Character's Role |
| `score` | `float` | Score |
| `scored_by` | `int` | Number of users |
| `scores` | `list` |  |
| `season` | `str` | Season |
| `source` | `str` | Original Material/Source adapted from |
| `status` | `str` | Airing status |
| `streaming` | `list` |  |
| `studios` | `list` |  |
| `synopsis` | `str` | Episode Synopsis |
| `theme` | `dict` |  |
| `themes` | `list` |  |
| `title` | `str` | Title |
| `title_english` | `str` | English Title |
| `title_japanese` | `str` | Title Japanese |
| `title_romanji` | `str` | title_romanji |
| `title_synonyms` | `list` | Other Titles |
| `titles` | `list` | All titles |
| `total` | `int` | Total number of users who have the resource added to their lists |
| `trailer` | `dict` | Youtube Details |
| `type` | `str` | Anime Type |
| `url` | `str` | MyAnimeList URL |
| `voice_actors` | `list` |  |
| `watching` | `int` | Number of users watching the resource |
| `year` | `int` | Year |

#### Example: Load

```python
anime = client.Anime().load({"id": 1})
```

#### Example: List

```python
animes = client.Anime().list()
```


### Character

Create an instance: `character = client.Character()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `str` | Biography |
| `anime` | `list` |  |
| `data` | `list` |  |
| `favorites` | `int` | Number of users who have favorited this entry |
| `id` | `str` |  |
| `image_url` | `str` | Default JPG Image Size URL |
| `images` | `dict` |  |
| `language` | `str` | Character's Role |
| `large_image_url` | `str` | Large JPG Image Size URL |
| `mal_id` | `int` | MyAnimeList ID |
| `manga` | `list` |  |
| `name` | `str` | Name |
| `name_kanji` | `str` | Name |
| `nicknames` | `list` | Other Names |
| `pagination` | `dict` |  |
| `person` | `dict` |  |
| `role` | `str` | Character's Role |
| `url` | `str` | MyAnimeList URL |
| `voices` | `list` |  |

#### Example: Load

```python
character = client.Character().load({"id": 1})
```

#### Example: List

```python
characters = client.Character().list()
```


### Club

Create an instance: `club = client.Club()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `str` | Club access |
| `anime` | `list` |  |
| `category` | `str` | Club Category |
| `characters` | `list` |  |
| `created` | `str` | Date Created ISO8601 |
| `data` | `list` |  |
| `id` | `str` |  |
| `images` | `dict` |  |
| `mal_id` | `int` | MyAnimeList ID |
| `manga` | `list` |  |
| `members` | `int` | Number of club members |
| `name` | `str` | Club name |
| `pagination` | `dict` |  |
| `url` | `str` | Club URL |
| `username` | `str` | User's username |

#### Example: Load

```python
club = client.Club().load({"id": 1})
```

#### Example: List

```python
clubs = client.Club().list()
```


### External

Create an instance: `external = client.External()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `str` |  |
| `url` | `str` |  |

#### Example: List

```python
externals = client.External().list({"username": "example"})
```


### Genre

Create an instance: `genre = client.Genre()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `int` | Genre's entry count |
| `mal_id` | `int` | MyAnimeList ID |
| `name` | `str` | Genre Name |
| `url` | `str` | MyAnimeList URL |

#### Example: List

```python
genres = client.Genre().list()
```


### Magazine

Create an instance: `magazine = client.Magazine()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |
| `pagination` | `dict` |  |

#### Example: List

```python
magazines = client.Magazine().list()
```


### Manga

Create an instance: `manga = client.Manga()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved` | `bool` | Whether the entry is pending approval on MAL or not |
| `author_url` | `str` | Author Profile URL |
| `author_username` | `str` | Author MyAnimeList Username |
| `authors` | `list` |  |
| `background` | `str` | Background |
| `chapters` | `int` | Chapter count |
| `character` | `dict` |  |
| `comments` | `int` | Comment count |
| `completed` | `int` | Number of users who have completed the resource |
| `data` | `list` |  |
| `date` | `str` | Post Date ISO8601 |
| `demographics` | `list` |  |
| `dropped` | `int` | Number of users who have dropped the resource |
| `entry` | `dict` | Related entries |
| `explicit_genres` | `list` |  |
| `external` | `list` |  |
| `favorites` | `int` | Number of users who have favorited this entry |
| `genres` | `list` |  |
| `id` | `str` |  |
| `images` | `dict` |  |
| `jpg` | `dict` | Available images in JPG |
| `last_comment` | `dict` | Last comment details |
| `mal_id` | `int` | MyAnimeList ID |
| `members` | `int` | Number of users who have added this entry to their list |
| `moreinfo` | `str` | Additional information on the entry |
| `name` | `str` |  |
| `on_hold` | `int` | Number of users who have put the resource on hold |
| `pagination` | `dict` |  |
| `plan_to_read` | `int` | Number of users who have planned to read the resource |
| `popularity` | `int` | Popularity |
| `published` | `dict` | Date range |
| `publishing` | `bool` | Publishing boolean |
| `rank` | `int` | Ranking |
| `reading` | `int` | Number of users reading the resource |
| `relation` | `str` | Relation type |
| `relations` | `list` |  |
| `role` | `str` | Character's Role |
| `score` | `float` | Score |
| `scored_by` | `int` | Number of users |
| `scores` | `list` |  |
| `serializations` | `list` |  |
| `status` | `str` | Publishing status |
| `synopsis` | `str` | Synopsis |
| `themes` | `list` |  |
| `title` | `str` | Title |
| `title_english` | `str` | English Title |
| `title_japanese` | `str` | Japanese Title |
| `title_synonyms` | `list` | Other Titles |
| `titles` | `list` | All Titles |
| `total` | `int` | Total number of users who have the resource added to their lists |
| `type` | `str` | Manga Type |
| `url` | `str` | MyAnimeList URL |
| `volumes` | `int` | Volume count |
| `webp` | `dict` | Available images in WEBP |

#### Example: Load

```python
manga = client.Manga().load({"id": 1})
```

#### Example: List

```python
mangas = client.Manga().list()
```


### PeopleSearch

Create an instance: `people_search = client.PeopleSearch()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |
| `pagination` | `dict` |  |

#### Example: List

```python
people_searchs = client.PeopleSearch().list()
```


### Person

Create an instance: `person = client.Person()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `str` | Biography |
| `alternate_names` | `list` | Other Names |
| `anime` | `list` |  |
| `birthday` | `str` | Birthday Date ISO8601 |
| `character` | `dict` |  |
| `data` | `list` |  |
| `family_name` | `str` | Family Name |
| `favorites` | `int` | Number of users who have favorited this entry |
| `given_name` | `str` | Given Name |
| `id` | `str` |  |
| `images` | `dict` |  |
| `jpg` | `dict` | Available images in JPG |
| `mal_id` | `int` | MyAnimeList ID |
| `manga` | `list` |  |
| `name` | `str` | Name |
| `pagination` | `dict` |  |
| `position` | `str` | Person's position |
| `role` | `str` | Person's Character's role in the anime |
| `url` | `str` | MyAnimeList URL |
| `voices` | `list` |  |
| `website_url` | `str` | Person's website URL |

#### Example: Load

```python
person = client.Person().load({"id": 1})
```

#### Example: List

```python
persons = client.Person().list()
```


### Producer

Create an instance: `producer = client.Producer()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `str` | About the Producer |
| `count` | `int` | Producers's anime count |
| `data` | `list` |  |
| `established` | `str` | Established Date ISO8601 |
| `external` | `list` |  |
| `favorites` | `int` | Producers's member favorites count |
| `id` | `str` |  |
| `images` | `dict` |  |
| `mal_id` | `int` | MyAnimeList ID |
| `name` | `str` |  |
| `pagination` | `dict` |  |
| `titles` | `list` | All titles |
| `url` | `str` | MyAnimeList URL |

#### Example: Load

```python
producer = client.Producer().load({"id": 1})
```

#### Example: List

```python
producers = client.Producer().list()
```


### Random

Create an instance: `random = client.Random()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `str` | Biography |
| `aired` | `dict` | Date range |
| `airing` | `bool` | Airing boolean |
| `alternate_names` | `list` | Other Names |
| `approved` | `bool` | Whether the entry is pending approval on MAL or not |
| `authors` | `list` |  |
| `background` | `str` | Background |
| `birthday` | `str` | Birthday Date ISO8601 |
| `broadcast` | `dict` | Broadcast Details |
| `chapters` | `int` | Chapter count |
| `demographics` | `list` |  |
| `duration` | `str` | Parsed raw duration |
| `episodes` | `int` | Episode count |
| `explicit_genres` | `list` |  |
| `family_name` | `str` | Family Name |
| `favorites` | `int` | Number of users who have favorited this entry |
| `gender` | `str` | User Gender |
| `genres` | `list` |  |
| `given_name` | `str` | Given Name |
| `images` | `dict` |  |
| `joined` | `str` | Joined Date ISO8601 |
| `last_online` | `str` | Last Online Date ISO8601 |
| `licensors` | `list` |  |
| `location` | `str` | Location |
| `mal_id` | `int` | MyAnimeList ID |
| `members` | `int` | Number of users who have added this entry to their list |
| `name` | `str` | Name |
| `name_kanji` | `str` | Name |
| `nicknames` | `list` | Other Names |
| `popularity` | `int` | Popularity |
| `producers` | `list` |  |
| `published` | `dict` | Date range |
| `publishing` | `bool` | Publishing boolean |
| `rank` | `int` | Ranking |
| `rating` | `str` | Anime audience rating |
| `score` | `float` | Score |
| `scored_by` | `int` | Number of users |
| `season` | `str` | Season |
| `serializations` | `list` |  |
| `source` | `str` | Original Material/Source adapted from |
| `status` | `str` | Airing status |
| `studios` | `list` |  |
| `synopsis` | `str` | Synopsis |
| `themes` | `list` |  |
| `title` | `str` | Title |
| `title_english` | `str` | English Title |
| `title_japanese` | `str` | Japanese Title |
| `title_synonyms` | `list` | Other Titles |
| `titles` | `list` | All titles |
| `trailer` | `dict` | Youtube Details |
| `type` | `str` | Anime Type |
| `url` | `str` | MyAnimeList URL |
| `username` | `str` | MyAnimeList Username |
| `volumes` | `int` | Volume count |
| `website_url` | `str` | Person's website URL |
| `year` | `int` | Year |

#### Example: Load

```python
random = client.Random().load()
```


### Recommendation

Create an instance: `recommendation = client.Recommendation()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |
| `pagination` | `dict` |  |

#### Example: List

```python
recommendations = client.Recommendation().list({"username": "example"})
```


### Review

Create an instance: `review = client.Review()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
review = client.Review().load()
```


### Schedule

Create an instance: `schedule = client.Schedule()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |
| `pagination` | `dict` |  |

#### Example: List

```python
schedules = client.Schedule().list()
```


### Season

Create an instance: `season = client.Season()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |
| `pagination` | `dict` |  |
| `seasons` | `list` | List of available seasons |
| `year` | `int` | Year |

#### Example: Load

```python
season = client.Season().load({"season": "season", "year": 1})
```

#### Example: List

```python
seasons = client.Season().list()
```


### Top

Create an instance: `top = client.Top()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |
| `pagination` | `dict` |  |

#### Example: Load

```python
top = client.Top().load()
```


### User

Create an instance: `user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | `list` | Favorite Anime |
| `birthday` | `str` | Birthday Date ISO8601 |
| `characters` | `list` | Favorite Characters |
| `data` | `list` |  |
| `external` | `list` |  |
| `gender` | `str` | User Gender |
| `id` | `str` |  |
| `images` | `dict` |  |
| `joined` | `str` | Joined Date ISO8601 |
| `last_online` | `str` | Last Online Date ISO8601 |
| `location` | `str` | Location |
| `mal_id` | `int` | MyAnimeList ID |
| `manga` | `list` | Favorite Manga |
| `pagination` | `dict` |  |
| `people` | `list` | Favorite People |
| `statistics` | `dict` |  |
| `url` | `str` | MyAnimeList URL |
| `username` | `str` | MyAnimeList Username |

#### Example: Load

```python
user = client.User().load({"id": 1})
```

#### Example: List

```python
users = client.User().list()
```


### UserAbout

Create an instance: `user_about = client.UserAbout()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `str` | User About. |

#### Example: List

```python
user_abouts = client.UserAbout().list({"username": "example"})
```


### UserClub

Create an instance: `user_club = client.UserClub()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |
| `pagination` | `dict` |  |

#### Example: List

```python
user_clubs = client.UserClub().list({"username": "example"})
```


### UserFriend

Create an instance: `user_friend = client.UserFriend()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |
| `pagination` | `dict` |  |

#### Example: List

```python
user_friends = client.UserFriend().list({"username": "example"})
```


### UserHistory

Create an instance: `user_history = client.UserHistory()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `str` | Date ISO8601 |
| `entry` | `dict` | Parsed URL Data |
| `increment` | `int` | Number of episodes/chapters watched/read |

#### Example: List

```python
user_historys = client.UserHistory().list({"username": "example"})
```


### UserStatistic

Create an instance: `user_statistic = client.UserStatistic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | `dict` | Anime Statistics |
| `manga` | `dict` | Manga Statistics |

#### Example: Load

```python
user_statistic = client.UserStatistic().load({"username": "username"})
```


### UserUpdate

Create an instance: `user_update = client.UserUpdate()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | `list` | Last updated Anime |
| `manga` | `list` | Last updated Manga |

#### Example: Load

```python
user_update = client.UserUpdate().load({"username": "username"})
```


### WatchEpisode

Create an instance: `watch_episode = client.WatchEpisode()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |
| `pagination` | `dict` |  |

#### Example: List

```python
watch_episodes = client.WatchEpisode().list()
```


### WatchPromo

Create an instance: `watch_promo = client.WatchPromo()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |
| `pagination` | `dict` |  |

#### Example: List

```python
watch_promos = client.WatchPromo().list()
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

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
external = client.External()
external.list()

# external.data_get() now returns the external data from the last list
# external.match_get() returns the last match criteria
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
