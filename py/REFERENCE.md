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
| `aired` | `str` | No | Aired Date ISO8601 |
| `airing` | `bool` | No | Airing boolean |
| `approved` | `bool` | No | Whether the entry is pending approval on MAL or not |
| `author_url` | `str` | No | Author Profile URL |
| `author_username` | `str` | No | Author MyAnimeList Username |
| `background` | `str` | No | Background |
| `broadcast` | `dict` | No | Broadcast Details |
| `character` | `dict` | No | Character details |
| `comments` | `int` | No | Comment count |
| `completed` | `int` | No | Number of users who have completed the resource |
| `data` | `list` | No |  |
| `date` | `str` | No | Post Date ISO8601 |
| `demographics` | `list` | No |  |
| `dropped` | `int` | No | Number of users who have dropped the resource |
| `duration` | `int` | No | Episode duration in seconds |
| `endings` | `list` | No |  |
| `entry` | `dict` | No | Related entries |
| `episodes` | `int` | No | Episode count |
| `explicit_genres` | `list` | No |  |
| `external` | `list` | No |  |
| `favorites` | `int` | No | Number of users who have favorited this entry |
| `filler` | `bool` | No | Filler episode |
| `genres` | `list` | No |  |
| `id` | `str` | No |  |
| `images` | `dict` | No |  |
| `last_comment` | `dict` | No | Last comment details |
| `licensors` | `list` | No |  |
| `mal_id` | `int` | No | MyAnimeList ID |
| `members` | `int` | No | Number of users who have added this entry to their list |
| `moreinfo` | `str` | No | Additional information on the entry |
| `music_videos` | `list` | No |  |
| `name` | `str` | No |  |
| `on_hold` | `int` | No | Number of users who have put the resource on hold |
| `openings` | `list` | No |  |
| `pagination` | `dict` | No |  |
| `person` | `dict` | No | Person details |
| `plan_to_watch` | `int` | No | Number of users who have planned to watch the resource |
| `popularity` | `int` | No | Popularity |
| `positions` | `list` | No | Staff Positions |
| `producers` | `list` | No |  |
| `promo` | `list` | No |  |
| `rank` | `int` | No | Ranking |
| `rating` | `str` | No | Anime audience rating |
| `recap` | `bool` | No | Recap episode |
| `relation` | `str` | No | Relation type |
| `relations` | `list` | No |  |
| `role` | `str` | No | Character's Role |
| `score` | `float` | No | Score |
| `scored_by` | `int` | No | Number of users |
| `scores` | `list` | No |  |
| `season` | `str` | No | Season |
| `source` | `str` | No | Original Material/Source adapted from |
| `status` | `str` | No | Airing status |
| `streaming` | `list` | No |  |
| `studios` | `list` | No |  |
| `synopsis` | `str` | No | Episode Synopsis |
| `theme` | `dict` | No |  |
| `themes` | `list` | No |  |
| `title` | `str` | No | Title |
| `title_english` | `str` | No | English Title |
| `title_japanese` | `str` | No | Title Japanese |
| `title_romanji` | `str` | No | title_romanji |
| `title_synonyms` | `list` | No | Other Titles |
| `titles` | `list` | No | All titles |
| `total` | `int` | No | Total number of users who have the resource added to their lists |
| `trailer` | `dict` | No | Youtube Details |
| `type` | `str` | No | Anime Type |
| `url` | `str` | No | MyAnimeList URL |
| `voice_actors` | `list` | No |  |
| `watching` | `int` | No | Number of users watching the resource |
| `year` | `int` | No | Year |

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
| `about` | `str` | No | Biography |
| `anime` | `list` | No |  |
| `data` | `list` | No |  |
| `favorites` | `int` | No | Number of users who have favorited this entry |
| `id` | `str` | No |  |
| `image_url` | `str` | No | Default JPG Image Size URL |
| `images` | `dict` | No |  |
| `language` | `str` | No | Character's Role |
| `large_image_url` | `str` | No | Large JPG Image Size URL |
| `mal_id` | `int` | No | MyAnimeList ID |
| `manga` | `list` | No |  |
| `name` | `str` | No | Name |
| `name_kanji` | `str` | No | Name |
| `nicknames` | `list` | No | Other Names |
| `pagination` | `dict` | No |  |
| `person` | `dict` | No |  |
| `role` | `str` | No | Character's Role |
| `url` | `str` | No | MyAnimeList URL |
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
| `access` | `str` | No | Club access |
| `anime` | `list` | No |  |
| `category` | `str` | No | Club Category |
| `characters` | `list` | No |  |
| `created` | `str` | No | Date Created ISO8601 |
| `data` | `list` | No |  |
| `id` | `str` | No |  |
| `images` | `dict` | No |  |
| `mal_id` | `int` | No | MyAnimeList ID |
| `manga` | `list` | No |  |
| `members` | `int` | No | Number of club members |
| `name` | `str` | No | Club name |
| `pagination` | `dict` | No |  |
| `url` | `str` | No | Club URL |
| `username` | `str` | No | User's username |

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
| `count` | `int` | No | Genre's entry count |
| `mal_id` | `int` | No | MyAnimeList ID |
| `name` | `str` | No | Genre Name |
| `url` | `str` | No | MyAnimeList URL |

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
| `approved` | `bool` | No | Whether the entry is pending approval on MAL or not |
| `author_url` | `str` | No | Author Profile URL |
| `author_username` | `str` | No | Author MyAnimeList Username |
| `authors` | `list` | No |  |
| `background` | `str` | No | Background |
| `chapters` | `int` | No | Chapter count |
| `character` | `dict` | No |  |
| `comments` | `int` | No | Comment count |
| `completed` | `int` | No | Number of users who have completed the resource |
| `data` | `list` | No |  |
| `date` | `str` | No | Post Date ISO8601 |
| `demographics` | `list` | No |  |
| `dropped` | `int` | No | Number of users who have dropped the resource |
| `entry` | `dict` | No | Related entries |
| `explicit_genres` | `list` | No |  |
| `external` | `list` | No |  |
| `favorites` | `int` | No | Number of users who have favorited this entry |
| `genres` | `list` | No |  |
| `id` | `str` | No |  |
| `images` | `dict` | No |  |
| `jpg` | `dict` | No | Available images in JPG |
| `last_comment` | `dict` | No | Last comment details |
| `mal_id` | `int` | No | MyAnimeList ID |
| `members` | `int` | No | Number of users who have added this entry to their list |
| `moreinfo` | `str` | No | Additional information on the entry |
| `name` | `str` | No |  |
| `on_hold` | `int` | No | Number of users who have put the resource on hold |
| `pagination` | `dict` | No |  |
| `plan_to_read` | `int` | No | Number of users who have planned to read the resource |
| `popularity` | `int` | No | Popularity |
| `published` | `dict` | No | Date range |
| `publishing` | `bool` | No | Publishing boolean |
| `rank` | `int` | No | Ranking |
| `reading` | `int` | No | Number of users reading the resource |
| `relation` | `str` | No | Relation type |
| `relations` | `list` | No |  |
| `role` | `str` | No | Character's Role |
| `score` | `float` | No | Score |
| `scored_by` | `int` | No | Number of users |
| `scores` | `list` | No |  |
| `serializations` | `list` | No |  |
| `status` | `str` | No | Publishing status |
| `synopsis` | `str` | No | Synopsis |
| `themes` | `list` | No |  |
| `title` | `str` | No | Title |
| `title_english` | `str` | No | English Title |
| `title_japanese` | `str` | No | Japanese Title |
| `title_synonyms` | `list` | No | Other Titles |
| `titles` | `list` | No | All Titles |
| `total` | `int` | No | Total number of users who have the resource added to their lists |
| `type` | `str` | No | Manga Type |
| `url` | `str` | No | MyAnimeList URL |
| `volumes` | `int` | No | Volume count |
| `webp` | `dict` | No | Available images in WEBP |

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
| `about` | `str` | No | Biography |
| `alternate_names` | `list` | No | Other Names |
| `anime` | `list` | No |  |
| `birthday` | `str` | No | Birthday Date ISO8601 |
| `character` | `dict` | No |  |
| `data` | `list` | No |  |
| `family_name` | `str` | No | Family Name |
| `favorites` | `int` | No | Number of users who have favorited this entry |
| `given_name` | `str` | No | Given Name |
| `id` | `str` | No |  |
| `images` | `dict` | No |  |
| `jpg` | `dict` | No | Available images in JPG |
| `mal_id` | `int` | No | MyAnimeList ID |
| `manga` | `list` | No |  |
| `name` | `str` | No | Name |
| `pagination` | `dict` | No |  |
| `position` | `str` | No | Person's position |
| `role` | `str` | No | Person's Character's role in the anime |
| `url` | `str` | No | MyAnimeList URL |
| `voices` | `list` | No |  |
| `website_url` | `str` | No | Person's website URL |

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
| `about` | `str` | No | About the Producer |
| `count` | `int` | No | Producers's anime count |
| `data` | `list` | No |  |
| `established` | `str` | No | Established Date ISO8601 |
| `external` | `list` | No |  |
| `favorites` | `int` | No | Producers's member favorites count |
| `id` | `str` | No |  |
| `images` | `dict` | No |  |
| `mal_id` | `int` | No | MyAnimeList ID |
| `name` | `str` | No |  |
| `pagination` | `dict` | No |  |
| `titles` | `list` | No | All titles |
| `url` | `str` | No | MyAnimeList URL |

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
| `about` | `str` | No | Biography |
| `aired` | `dict` | No | Date range |
| `airing` | `bool` | No | Airing boolean |
| `alternate_names` | `list` | No | Other Names |
| `approved` | `bool` | No | Whether the entry is pending approval on MAL or not |
| `authors` | `list` | No |  |
| `background` | `str` | No | Background |
| `birthday` | `str` | No | Birthday Date ISO8601 |
| `broadcast` | `dict` | No | Broadcast Details |
| `chapters` | `int` | No | Chapter count |
| `demographics` | `list` | No |  |
| `duration` | `str` | No | Parsed raw duration |
| `episodes` | `int` | No | Episode count |
| `explicit_genres` | `list` | No |  |
| `family_name` | `str` | No | Family Name |
| `favorites` | `int` | No | Number of users who have favorited this entry |
| `gender` | `str` | No | User Gender |
| `genres` | `list` | No |  |
| `given_name` | `str` | No | Given Name |
| `images` | `dict` | No |  |
| `joined` | `str` | No | Joined Date ISO8601 |
| `last_online` | `str` | No | Last Online Date ISO8601 |
| `licensors` | `list` | No |  |
| `location` | `str` | No | Location |
| `mal_id` | `int` | No | MyAnimeList ID |
| `members` | `int` | No | Number of users who have added this entry to their list |
| `name` | `str` | No | Name |
| `name_kanji` | `str` | No | Name |
| `nicknames` | `list` | No | Other Names |
| `popularity` | `int` | No | Popularity |
| `producers` | `list` | No |  |
| `published` | `dict` | No | Date range |
| `publishing` | `bool` | No | Publishing boolean |
| `rank` | `int` | No | Ranking |
| `rating` | `str` | No | Anime audience rating |
| `score` | `float` | No | Score |
| `scored_by` | `int` | No | Number of users |
| `season` | `str` | No | Season |
| `serializations` | `list` | No |  |
| `source` | `str` | No | Original Material/Source adapted from |
| `status` | `str` | No | Airing status |
| `studios` | `list` | No |  |
| `synopsis` | `str` | No | Synopsis |
| `themes` | `list` | No |  |
| `title` | `str` | No | Title |
| `title_english` | `str` | No | English Title |
| `title_japanese` | `str` | No | Japanese Title |
| `title_synonyms` | `list` | No | Other Titles |
| `titles` | `list` | No | All titles |
| `trailer` | `dict` | No | Youtube Details |
| `type` | `str` | No | Anime Type |
| `url` | `str` | No | MyAnimeList URL |
| `username` | `str` | No | MyAnimeList Username |
| `volumes` | `int` | No | Volume count |
| `website_url` | `str` | No | Person's website URL |
| `year` | `int` | No | Year |

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
| `seasons` | `list` | No | List of available seasons |
| `year` | `int` | No | Year |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Season().list()
for season in results:
    print(season)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Season().load({"season": "season", "year": 1})
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
| `anime` | `list` | No | Favorite Anime |
| `birthday` | `str` | No | Birthday Date ISO8601 |
| `characters` | `list` | No | Favorite Characters |
| `data` | `list` | No |  |
| `external` | `list` | No |  |
| `gender` | `str` | No | User Gender |
| `id` | `str` | No |  |
| `images` | `dict` | No |  |
| `joined` | `str` | No | Joined Date ISO8601 |
| `last_online` | `str` | No | Last Online Date ISO8601 |
| `location` | `str` | No | Location |
| `mal_id` | `int` | No | MyAnimeList ID |
| `manga` | `list` | No | Favorite Manga |
| `pagination` | `dict` | No |  |
| `people` | `list` | No | Favorite People |
| `statistics` | `dict` | No |  |
| `url` | `str` | No | MyAnimeList URL |
| `username` | `str` | No | MyAnimeList Username |

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
| `about` | `str` | No | User About. |

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
| `date` | `str` | No | Date ISO8601 |
| `entry` | `dict` | No | Parsed URL Data |
| `increment` | `int` | No | Number of episodes/chapters watched/read |

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
| `anime` | `dict` | No | Anime Statistics |
| `manga` | `dict` | No | Manga Statistics |

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
| `anime` | `list` | No | Last updated Anime |
| `manga` | `list` | No | Last updated Manga |

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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

