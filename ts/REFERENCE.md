# JikanRest TypeScript SDK Reference

Complete API reference for the JikanRest TypeScript SDK.


## JikanRestSDK

### Constructor

```ts
new JikanRestSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `JikanRestSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = JikanRestSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `JikanRestSDK` instance in test mode.


### Instance Methods

#### `Anime(data?: object)`

Create a new `Anime` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnimeEntity` instance.

#### `Character(data?: object)`

Create a new `Character` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CharacterEntity` instance.

#### `Club(data?: object)`

Create a new `Club` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ClubEntity` instance.

#### `External(data?: object)`

Create a new `External` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExternalEntity` instance.

#### `Genre(data?: object)`

Create a new `Genre` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenreEntity` instance.

#### `Magazine(data?: object)`

Create a new `Magazine` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MagazineEntity` instance.

#### `Manga(data?: object)`

Create a new `Manga` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MangaEntity` instance.

#### `PeopleSearch(data?: object)`

Create a new `PeopleSearch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PeopleSearchEntity` instance.

#### `Person(data?: object)`

Create a new `Person` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersonEntity` instance.

#### `Producer(data?: object)`

Create a new `Producer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProducerEntity` instance.

#### `Random(data?: object)`

Create a new `Random` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RandomEntity` instance.

#### `Recommendation(data?: object)`

Create a new `Recommendation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RecommendationEntity` instance.

#### `Review(data?: object)`

Create a new `Review` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReviewEntity` instance.

#### `Schedule(data?: object)`

Create a new `Schedule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScheduleEntity` instance.

#### `Season(data?: object)`

Create a new `Season` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeasonEntity` instance.

#### `Top(data?: object)`

Create a new `Top` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TopEntity` instance.

#### `User(data?: object)`

Create a new `User` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserEntity` instance.

#### `UserAbout(data?: object)`

Create a new `UserAbout` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserAboutEntity` instance.

#### `UserClub(data?: object)`

Create a new `UserClub` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserClubEntity` instance.

#### `UserFriend(data?: object)`

Create a new `UserFriend` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserFriendEntity` instance.

#### `UserHistory(data?: object)`

Create a new `UserHistory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserHistoryEntity` instance.

#### `UserStatistic(data?: object)`

Create a new `UserStatistic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserStatisticEntity` instance.

#### `UserUpdate(data?: object)`

Create a new `UserUpdate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserUpdateEntity` instance.

#### `WatchEpisode(data?: object)`

Create a new `WatchEpisode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WatchEpisodeEntity` instance.

#### `WatchPromo(data?: object)`

Create a new `WatchPromo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WatchPromoEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `JikanRestSDK.test()`.

**Returns:** `JikanRestSDK` instance in test mode.


---

## AnimeEntity

```ts
const anime = client.anime
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_url` | ``$STRING`` | No |  |
| `author_username` | ``$STRING`` | No |  |
| `character` | ``$OBJECT`` | No |  |
| `comment` | ``$INTEGER`` | No |  |
| `data` | ``$OBJECT`` | No |  |
| `date` | ``$STRING`` | No |  |
| `entry` | ``$OBJECT`` | No |  |
| `image` | ``$OBJECT`` | No |  |
| `last_comment` | ``$OBJECT`` | No |  |
| `mal_id` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |
| `person` | ``$OBJECT`` | No |  |
| `position` | ``$ARRAY`` | No |  |
| `relation` | ``$STRING`` | No |  |
| `role` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |
| `voice_actor` | ``$ARRAY`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.anime.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.anime.load({ id: 'anime_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnimeEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CharacterEntity

```ts
const character = client.character
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | ``$OBJECT`` | No |  |
| `data` | ``$OBJECT`` | No |  |
| `image_url` | ``$STRING`` | No |  |
| `language` | ``$STRING`` | No |  |
| `large_image_url` | ``$STRING`` | No |  |
| `manga` | ``$OBJECT`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |
| `person` | ``$OBJECT`` | No |  |
| `role` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.character.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.character.load({ id: 'character_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CharacterEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ClubEntity

```ts
const club = client.club
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$OBJECT`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |
| `url` | ``$STRING`` | No |  |
| `username` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.club.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.club.load({ id: 'club_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ClubEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExternalEntity

```ts
const external = client.external
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.external.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExternalEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenreEntity

```ts
const genre = client.genre
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | ``$INTEGER`` | No |  |
| `mal_id` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.genre.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenreEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MagazineEntity

```ts
const magazine = client.magazine
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.magazine.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MagazineEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MangaEntity

```ts
const manga = client.manga
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_url` | ``$STRING`` | No |  |
| `author_username` | ``$STRING`` | No |  |
| `character` | ``$OBJECT`` | No |  |
| `comment` | ``$INTEGER`` | No |  |
| `data` | ``$OBJECT`` | No |  |
| `date` | ``$STRING`` | No |  |
| `entry` | ``$OBJECT`` | No |  |
| `jpg` | ``$OBJECT`` | No |  |
| `last_comment` | ``$OBJECT`` | No |  |
| `mal_id` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |
| `relation` | ``$STRING`` | No |  |
| `role` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |
| `webp` | ``$OBJECT`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.manga.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.manga.load({ id: 'manga_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MangaEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PeopleSearchEntity

```ts
const people_search = client.people_search
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.people_search.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PeopleSearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersonEntity

```ts
const person = client.person
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | ``$OBJECT`` | No |  |
| `character` | ``$OBJECT`` | No |  |
| `data` | ``$OBJECT`` | No |  |
| `jpg` | ``$OBJECT`` | No |  |
| `manga` | ``$OBJECT`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |
| `position` | ``$STRING`` | No |  |
| `role` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.person.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.person.load({ id: 'person_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersonEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProducerEntity

```ts
const producer = client.producer
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$OBJECT`` | No |  |
| `name` | ``$STRING`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.producer.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.producer.load({ id: 'producer_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProducerEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RandomEntity

```ts
const random = client.random
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$OBJECT`` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.random.load({ id: 'random_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RandomEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RecommendationEntity

```ts
const recommendation = client.recommendation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.recommendation.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RecommendationEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReviewEntity

```ts
const review = client.review
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.review.load({ id: 'review_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScheduleEntity

```ts
const schedule = client.schedule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.schedule.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScheduleEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeasonEntity

```ts
const season = client.season
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |
| `season` | ``$ARRAY`` | No |  |
| `year` | ``$INTEGER`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.season.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeasonEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TopEntity

```ts
const top = client.top
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ANY`` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.top.load({ id: 'top_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TopEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserEntity

```ts
const user = client.user
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ANY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.user.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.user.load({ id: 'user_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserAboutEntity

```ts
const user_about = client.user_about
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.user_about.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserAboutEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserClubEntity

```ts
const user_club = client.user_club
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.user_club.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserClubEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserFriendEntity

```ts
const user_friend = client.user_friend
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.user_friend.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserFriendEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserHistoryEntity

```ts
const user_history = client.user_history
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | ``$STRING`` | No |  |
| `entry` | ``$OBJECT`` | No |  |
| `increment` | ``$INTEGER`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.user_history.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserHistoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserStatisticEntity

```ts
const user_statistic = client.user_statistic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$OBJECT`` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.user_statistic.load({ id: 'user_statistic_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserStatisticEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserUpdateEntity

```ts
const user_update = client.user_update
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$OBJECT`` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.user_update.load({ id: 'user_update_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserUpdateEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WatchEpisodeEntity

```ts
const watch_episode = client.watch_episode
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.watch_episode.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WatchEpisodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WatchPromoEntity

```ts
const watch_promo = client.watch_promo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$ARRAY`` | No |  |
| `pagination` | ``$OBJECT`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.watch_promo.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WatchPromoEntity` instance with the same client and
options.

#### `client()`

Return the parent `JikanRestSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new JikanRestSDK({
  feature: {
    test: { active: true },
  }
})
```

