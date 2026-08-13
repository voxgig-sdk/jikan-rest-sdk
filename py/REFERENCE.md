# JikanRest Python SDK Reference

Complete API reference for the JikanRest Python SDK.


## JikanRestSDK

### Constructor

```python
from jikanrest_sdk import JikanRestSDK

client = JikanRestSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `JikanRestSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = JikanRestSDK.test()
```


### Instance Methods

#### `Anime(data=None)`

Create a new `AnimeEntity` instance. Pass `None` for no initial data.

#### `Character(data=None)`

Create a new `CharacterEntity` instance. Pass `None` for no initial data.

#### `Club(data=None)`

Create a new `ClubEntity` instance. Pass `None` for no initial data.

#### `External(data=None)`

Create a new `ExternalEntity` instance. Pass `None` for no initial data.

#### `Genre(data=None)`

Create a new `GenreEntity` instance. Pass `None` for no initial data.

#### `Magazine(data=None)`

Create a new `MagazineEntity` instance. Pass `None` for no initial data.

#### `Manga(data=None)`

Create a new `MangaEntity` instance. Pass `None` for no initial data.

#### `PeopleSearch(data=None)`

Create a new `PeopleSearchEntity` instance. Pass `None` for no initial data.

#### `Person(data=None)`

Create a new `PersonEntity` instance. Pass `None` for no initial data.

#### `Producer(data=None)`

Create a new `ProducerEntity` instance. Pass `None` for no initial data.

#### `Random(data=None)`

Create a new `RandomEntity` instance. Pass `None` for no initial data.

#### `Recommendation(data=None)`

Create a new `RecommendationEntity` instance. Pass `None` for no initial data.

#### `Review(data=None)`

Create a new `ReviewEntity` instance. Pass `None` for no initial data.

#### `Schedule(data=None)`

Create a new `ScheduleEntity` instance. Pass `None` for no initial data.

#### `Season(data=None)`

Create a new `SeasonEntity` instance. Pass `None` for no initial data.

#### `Top(data=None)`

Create a new `TopEntity` instance. Pass `None` for no initial data.

#### `User(data=None)`

Create a new `UserEntity` instance. Pass `None` for no initial data.

#### `UserAbout(data=None)`

Create a new `UserAboutEntity` instance. Pass `None` for no initial data.

#### `UserClub(data=None)`

Create a new `UserClubEntity` instance. Pass `None` for no initial data.

#### `UserFriend(data=None)`

Create a new `UserFriendEntity` instance. Pass `None` for no initial data.

#### `UserHistory(data=None)`

Create a new `UserHistoryEntity` instance. Pass `None` for no initial data.

#### `UserStatistic(data=None)`

Create a new `UserStatisticEntity` instance. Pass `None` for no initial data.

#### `UserUpdate(data=None)`

Create a new `UserUpdateEntity` instance. Pass `None` for no initial data.

#### `WatchEpisode(data=None)`

Create a new `WatchEpisodeEntity` instance. Pass `None` for no initial data.

#### `WatchPromo(data=None)`

Create a new `WatchPromoEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AnimeEntity

```python
anime = client.Anime()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aired` | `str` | No |  |
| `airing` | `bool` | No |  |
| `approved` | `bool` | No |  |
| `author_url` | `str` | No |  |
| `author_username` | `str` | No |  |
| `background` | `str` | No |  |
| `broadcast` | `dict` | No |  |
| `character` | `dict` | No |  |
| `comments` | `int` | No |  |
| `completed` | `int` | No |  |
| `data` | `list` | No |  |
| `date` | `str` | No |  |
| `demographics` | `list` | No |  |
| `dropped` | `int` | No |  |
| `duration` | `int` | No |  |
| `endings` | `list` | No |  |
| `entry` | `dict` | No |  |
| `episodes` | `int` | No |  |
| `explicit_genres` | `list` | No |  |
| `external` | `list` | No |  |
| `favorites` | `int` | No |  |
| `filler` | `bool` | No |  |
| `genres` | `list` | No |  |
| `images` | `dict` | No |  |
| `last_comment` | `dict` | No |  |
| `licensors` | `list` | No |  |
| `mal_id` | `int` | No |  |
| `members` | `int` | No |  |
| `moreinfo` | `str` | No |  |
| `music_videos` | `list` | No |  |
| `name` | `str` | No |  |
| `on_hold` | `int` | No |  |
| `openings` | `list` | No |  |
| `pagination` | `dict` | No |  |
| `person` | `dict` | No |  |
| `plan_to_watch` | `int` | No |  |
| `popularity` | `int` | No |  |
| `positions` | `list` | No |  |
| `producers` | `list` | No |  |
| `promo` | `list` | No |  |
| `rank` | `int` | No |  |
| `rating` | `str` | No |  |
| `recap` | `bool` | No |  |
| `relation` | `str` | No |  |
| `relations` | `list` | No |  |
| `role` | `str` | No |  |
| `score` | `float` | No |  |
| `scored_by` | `int` | No |  |
| `scores` | `list` | No |  |
| `season` | `str` | No |  |
| `source` | `str` | No |  |
| `status` | `str` | No |  |
| `streaming` | `list` | No |  |
| `studios` | `list` | No |  |
| `synopsis` | `str` | No |  |
| `theme` | `dict` | No |  |
| `themes` | `list` | No |  |
| `title` | `str` | No |  |
| `title_english` | `str` | No |  |
| `title_japanese` | `str` | No |  |
| `title_romanji` | `str` | No |  |
| `title_synonyms` | `list` | No |  |
| `titles` | `list` | No |  |
| `total` | `int` | No |  |
| `trailer` | `dict` | No |  |
| `type` | `str` | No |  |
| `url` | `str` | No |  |
| `voice_actors` | `list` | No |  |
| `watching` | `int` | No |  |
| `year` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Anime().list()
for anime in results:
    print(anime)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Anime().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnimeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CharacterEntity

```python
character = client.Character()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `str` | No |  |
| `anime` | `list` | No |  |
| `data` | `list` | No |  |
| `favorites` | `int` | No |  |
| `image_url` | `str` | No |  |
| `images` | `dict` | No |  |
| `language` | `str` | No |  |
| `large_image_url` | `str` | No |  |
| `mal_id` | `int` | No |  |
| `manga` | `list` | No |  |
| `name` | `str` | No |  |
| `name_kanji` | `str` | No |  |
| `nicknames` | `list` | No |  |
| `pagination` | `dict` | No |  |
| `person` | `dict` | No |  |
| `role` | `str` | No |  |
| `url` | `str` | No |  |
| `voices` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Character().list()
for character in results:
    print(character)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Character().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CharacterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ClubEntity

```python
club = client.Club()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `str` | No |  |
| `anime` | `list` | No |  |
| `category` | `str` | No |  |
| `characters` | `list` | No |  |
| `created` | `str` | No |  |
| `data` | `list` | No |  |
| `images` | `dict` | No |  |
| `mal_id` | `int` | No |  |
| `manga` | `list` | No |  |
| `members` | `int` | No |  |
| `name` | `str` | No |  |
| `pagination` | `dict` | No |  |
| `url` | `str` | No |  |
| `username` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Club().list()
for club in results:
    print(club)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Club().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClubEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ExternalEntity

```python
external = client.External()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `str` | No |  |
| `url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.External().list({"username": "example"})
for external in results:
    print(external)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExternalEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GenreEntity

```python
genre = client.Genre()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int` | No |  |
| `mal_id` | `int` | No |  |
| `name` | `str` | No |  |
| `url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Genre().list()
for genre in results:
    print(genre)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenreEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MagazineEntity

```python
magazine = client.Magazine()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No |  |
| `pagination` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Magazine().list()
for magazine in results:
    print(magazine)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MagazineEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MangaEntity

```python
manga = client.Manga()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved` | `bool` | No |  |
| `author_url` | `str` | No |  |
| `author_username` | `str` | No |  |
| `authors` | `list` | No |  |
| `background` | `str` | No |  |
| `chapters` | `int` | No |  |
| `character` | `dict` | No |  |
| `comments` | `int` | No |  |
| `completed` | `int` | No |  |
| `data` | `list` | No |  |
| `date` | `str` | No |  |
| `demographics` | `list` | No |  |
| `dropped` | `int` | No |  |
| `entry` | `dict` | No |  |
| `explicit_genres` | `list` | No |  |
| `external` | `list` | No |  |
| `favorites` | `int` | No |  |
| `genres` | `list` | No |  |
| `images` | `dict` | No |  |
| `jpg` | `dict` | No |  |
| `last_comment` | `dict` | No |  |
| `mal_id` | `int` | No |  |
| `members` | `int` | No |  |
| `moreinfo` | `str` | No |  |
| `name` | `str` | No |  |
| `on_hold` | `int` | No |  |
| `pagination` | `dict` | No |  |
| `plan_to_read` | `int` | No |  |
| `popularity` | `int` | No |  |
| `published` | `dict` | No |  |
| `publishing` | `bool` | No |  |
| `rank` | `int` | No |  |
| `reading` | `int` | No |  |
| `relation` | `str` | No |  |
| `relations` | `list` | No |  |
| `role` | `str` | No |  |
| `score` | `float` | No |  |
| `scored_by` | `int` | No |  |
| `scores` | `list` | No |  |
| `serializations` | `list` | No |  |
| `status` | `str` | No |  |
| `synopsis` | `str` | No |  |
| `themes` | `list` | No |  |
| `title` | `str` | No |  |
| `title_english` | `str` | No |  |
| `title_japanese` | `str` | No |  |
| `title_synonyms` | `list` | No |  |
| `titles` | `list` | No |  |
| `total` | `int` | No |  |
| `type` | `str` | No |  |
| `url` | `str` | No |  |
| `volumes` | `int` | No |  |
| `webp` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Manga().list()
for manga in results:
    print(manga)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Manga().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MangaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PeopleSearchEntity

```python
people_search = client.PeopleSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No |  |
| `pagination` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PeopleSearch().list()
for people_search in results:
    print(people_search)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PeopleSearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PersonEntity

```python
person = client.Person()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `str` | No |  |
| `alternate_names` | `list` | No |  |
| `anime` | `list` | No |  |
| `birthday` | `str` | No |  |
| `character` | `dict` | No |  |
| `data` | `list` | No |  |
| `family_name` | `str` | No |  |
| `favorites` | `int` | No |  |
| `given_name` | `str` | No |  |
| `images` | `dict` | No |  |
| `jpg` | `dict` | No |  |
| `mal_id` | `int` | No |  |
| `manga` | `list` | No |  |
| `name` | `str` | No |  |
| `pagination` | `dict` | No |  |
| `position` | `str` | No |  |
| `role` | `str` | No |  |
| `url` | `str` | No |  |
| `voices` | `list` | No |  |
| `website_url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Person().list()
for person in results:
    print(person)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Person().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PersonEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProducerEntity

```python
producer = client.Producer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `str` | No |  |
| `count` | `int` | No |  |
| `data` | `list` | No |  |
| `established` | `str` | No |  |
| `external` | `list` | No |  |
| `favorites` | `int` | No |  |
| `images` | `dict` | No |  |
| `mal_id` | `int` | No |  |
| `name` | `str` | No |  |
| `pagination` | `dict` | No |  |
| `titles` | `list` | No |  |
| `url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Producer().list()
for producer in results:
    print(producer)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Producer().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProducerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RandomEntity

```python
random = client.Random()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `str` | No |  |
| `aired` | `dict` | No |  |
| `airing` | `bool` | No |  |
| `alternate_names` | `list` | No |  |
| `approved` | `bool` | No |  |
| `authors` | `list` | No |  |
| `background` | `str` | No |  |
| `birthday` | `str` | No |  |
| `broadcast` | `dict` | No |  |
| `chapters` | `int` | No |  |
| `demographics` | `list` | No |  |
| `duration` | `str` | No |  |
| `episodes` | `int` | No |  |
| `explicit_genres` | `list` | No |  |
| `family_name` | `str` | No |  |
| `favorites` | `int` | No |  |
| `gender` | `str` | No |  |
| `genres` | `list` | No |  |
| `given_name` | `str` | No |  |
| `images` | `dict` | No |  |
| `joined` | `str` | No |  |
| `last_online` | `str` | No |  |
| `licensors` | `list` | No |  |
| `location` | `str` | No |  |
| `mal_id` | `int` | No |  |
| `members` | `int` | No |  |
| `name` | `str` | No |  |
| `name_kanji` | `str` | No |  |
| `nicknames` | `list` | No |  |
| `popularity` | `int` | No |  |
| `producers` | `list` | No |  |
| `published` | `dict` | No |  |
| `publishing` | `bool` | No |  |
| `rank` | `int` | No |  |
| `rating` | `str` | No |  |
| `score` | `float` | No |  |
| `scored_by` | `int` | No |  |
| `season` | `str` | No |  |
| `serializations` | `list` | No |  |
| `source` | `str` | No |  |
| `status` | `str` | No |  |
| `studios` | `list` | No |  |
| `synopsis` | `str` | No |  |
| `themes` | `list` | No |  |
| `title` | `str` | No |  |
| `title_english` | `str` | No |  |
| `title_japanese` | `str` | No |  |
| `title_synonyms` | `list` | No |  |
| `titles` | `list` | No |  |
| `trailer` | `dict` | No |  |
| `type` | `str` | No |  |
| `url` | `str` | No |  |
| `username` | `str` | No |  |
| `volumes` | `int` | No |  |
| `website_url` | `str` | No |  |
| `year` | `int` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Random().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RandomEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RecommendationEntity

```python
recommendation = client.Recommendation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No |  |
| `pagination` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Recommendation().list({"username": "example"})
for recommendation in results:
    print(recommendation)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RecommendationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReviewEntity

```python
review = client.Review()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Review().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReviewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScheduleEntity

```python
schedule = client.Schedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No |  |
| `pagination` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Schedule().list()
for schedule in results:
    print(schedule)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SeasonEntity

```python
season = client.Season()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No |  |
| `pagination` | `dict` | No |  |
| `seasons` | `list` | No |  |
| `year` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Season().list()
for season in results:
    print(season)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeasonEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TopEntity

```python
top = client.Top()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No |  |
| `pagination` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Top().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserEntity

```python
user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | `list` | No |  |
| `birthday` | `str` | No |  |
| `characters` | `list` | No |  |
| `data` | `list` | No |  |
| `external` | `list` | No |  |
| `gender` | `str` | No |  |
| `images` | `dict` | No |  |
| `joined` | `str` | No |  |
| `last_online` | `str` | No |  |
| `location` | `str` | No |  |
| `mal_id` | `int` | No |  |
| `manga` | `list` | No |  |
| `pagination` | `dict` | No |  |
| `people` | `list` | No |  |
| `statistics` | `dict` | No |  |
| `url` | `str` | No |  |
| `username` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.User().list()
for user in results:
    print(user)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.User().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserAboutEntity

```python
user_about = client.UserAbout()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.UserAbout().list({"username": "example"})
for user_about in results:
    print(user_about)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserAboutEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserClubEntity

```python
user_club = client.UserClub()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No |  |
| `pagination` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.UserClub().list({"username": "example"})
for user_club in results:
    print(user_club)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserClubEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserFriendEntity

```python
user_friend = client.UserFriend()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No |  |
| `pagination` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.UserFriend().list({"username": "example"})
for user_friend in results:
    print(user_friend)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserFriendEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserHistoryEntity

```python
user_history = client.UserHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `str` | No |  |
| `entry` | `dict` | No |  |
| `increment` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.UserHistory().list({"username": "example"})
for user_history in results:
    print(user_history)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserHistoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserStatisticEntity

```python
user_statistic = client.UserStatistic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | `dict` | No |  |
| `manga` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.UserStatistic().load({"username": "username"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserStatisticEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserUpdateEntity

```python
user_update = client.UserUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | `list` | No |  |
| `manga` | `list` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.UserUpdate().load({"username": "username"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserUpdateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WatchEpisodeEntity

```python
watch_episode = client.WatchEpisode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No |  |
| `pagination` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WatchEpisode().list()
for watch_episode in results:
    print(watch_episode)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WatchEpisodeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WatchPromoEntity

```python
watch_promo = client.WatchPromo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No |  |
| `pagination` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WatchPromo().list()
for watch_promo in results:
    print(watch_promo)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WatchPromoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = JikanRestSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

