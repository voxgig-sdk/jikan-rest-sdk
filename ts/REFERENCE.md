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
const anime = client.Anime()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aired` | `string` | No |  |
| `airing` | `boolean` | No |  |
| `approved` | `boolean` | No |  |
| `author_url` | `string` | No |  |
| `author_username` | `string` | No |  |
| `background` | `string` | No |  |
| `broadcast` | `Record<string, any>` | No |  |
| `character` | `Record<string, any>` | No |  |
| `comments` | `number` | No |  |
| `completed` | `number` | No |  |
| `data` | `any[]` | No |  |
| `date` | `string` | No |  |
| `demographics` | `any[]` | No |  |
| `dropped` | `number` | No |  |
| `duration` | `number` | No |  |
| `endings` | `any[]` | No |  |
| `entry` | `Record<string, any>` | No |  |
| `episodes` | `number` | No |  |
| `explicit_genres` | `any[]` | No |  |
| `external` | `any[]` | No |  |
| `favorites` | `number` | No |  |
| `filler` | `boolean` | No |  |
| `genres` | `any[]` | No |  |
| `images` | `Record<string, any>` | No |  |
| `last_comment` | `Record<string, any>` | No |  |
| `licensors` | `any[]` | No |  |
| `mal_id` | `number` | No |  |
| `members` | `number` | No |  |
| `moreinfo` | `string` | No |  |
| `music_videos` | `any[]` | No |  |
| `name` | `string` | No |  |
| `on_hold` | `number` | No |  |
| `openings` | `any[]` | No |  |
| `pagination` | `Record<string, any>` | No |  |
| `person` | `Record<string, any>` | No |  |
| `plan_to_watch` | `number` | No |  |
| `popularity` | `number` | No |  |
| `positions` | `any[]` | No |  |
| `producers` | `any[]` | No |  |
| `promo` | `any[]` | No |  |
| `rank` | `number` | No |  |
| `rating` | `string` | No |  |
| `recap` | `boolean` | No |  |
| `relation` | `string` | No |  |
| `relations` | `any[]` | No |  |
| `role` | `string` | No |  |
| `score` | `number` | No |  |
| `scored_by` | `number` | No |  |
| `scores` | `any[]` | No |  |
| `season` | `string` | No |  |
| `source` | `string` | No |  |
| `status` | `string` | No |  |
| `streaming` | `any[]` | No |  |
| `studios` | `any[]` | No |  |
| `synopsis` | `string` | No |  |
| `theme` | `Record<string, any>` | No |  |
| `themes` | `any[]` | No |  |
| `title` | `string` | No |  |
| `title_english` | `string` | No |  |
| `title_japanese` | `string` | No |  |
| `title_romanji` | `string` | No |  |
| `title_synonyms` | `any[]` | No |  |
| `titles` | `any[]` | No |  |
| `total` | `number` | No |  |
| `trailer` | `Record<string, any>` | No |  |
| `type` | `string` | No |  |
| `url` | `string` | No |  |
| `voice_actors` | `any[]` | No |  |
| `watching` | `number` | No |  |
| `year` | `number` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `character` | `/anime/{id}/characters` | `client.Anime().list({ $action: 'character', ... })` |
| `episode` | `/anime/{id}/episodes` | `client.Anime().list({ $action: 'episode', ... })` |
| `external` | `/anime/{id}/external` | `client.Anime().list({ $action: 'external', ... })` |
| `forum` | `/anime/{id}/forum` | `client.Anime().list({ $action: 'forum', ... })` |
| `new` | `/anime/{id}/news` | `client.Anime().list({ $action: 'new', ... })` |
| `picture` | `/anime/{id}/pictures` | `client.Anime().list({ $action: 'picture', ... })` |
| `recommendation` | `/anime/{id}/recommendations` | `client.Anime().list({ $action: 'recommendation', ... })` |
| `relation` | `/anime/{id}/relations` | `client.Anime().list({ $action: 'relation', ... })` |
| `review` | `/anime/{id}/reviews` | `client.Anime().list({ $action: 'review', ... })` |
| `staff` | `/anime/{id}/staff` | `client.Anime().list({ $action: 'staff', ... })` |
| `streaming` | `/anime/{id}/streaming` | `client.Anime().list({ $action: 'streaming', ... })` |
| `userupdate` | `/anime/{id}/userupdates` | `client.Anime().list({ $action: 'userupdate', ... })` |
| `video_episode` | `/anime/{id}/videos/episodes` | `client.Anime().list({ $action: 'video_episode', ... })` |
| `full` | `/anime/{id}/full` | `client.Anime().load({ $action: 'full', ... })` |
| `moreinfo` | `/anime/{id}/moreinfo` | `client.Anime().load({ $action: 'moreinfo', ... })` |
| `statistic` | `/anime/{id}/statistics` | `client.Anime().load({ $action: 'statistic', ... })` |
| `theme` | `/anime/{id}/themes` | `client.Anime().load({ $action: 'theme', ... })` |
| `video` | `/anime/{id}/videos` | `client.Anime().load({ $action: 'video', ... })` |

An action returns that action's OWN response, which is not necessarily a
Anime record — check the API definition for its shape.

```ts
const result = await client.Anime().list({
  $action: 'character',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Anime().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Anime().load({ id: 1 })
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
const character = client.Character()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `string` | No |  |
| `anime` | `any[]` | No |  |
| `data` | `any[]` | No |  |
| `favorites` | `number` | No |  |
| `image_url` | `string` | No |  |
| `images` | `Record<string, any>` | No |  |
| `language` | `string` | No |  |
| `large_image_url` | `string` | No |  |
| `mal_id` | `number` | No |  |
| `manga` | `any[]` | No |  |
| `name` | `string` | No |  |
| `name_kanji` | `string` | No |  |
| `nicknames` | `any[]` | No |  |
| `pagination` | `Record<string, any>` | No |  |
| `person` | `Record<string, any>` | No |  |
| `role` | `string` | No |  |
| `url` | `string` | No |  |
| `voices` | `any[]` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `anime` | `/characters/{id}/anime` | `client.Character().list({ $action: 'anime', ... })` |
| `manga` | `/characters/{id}/manga` | `client.Character().list({ $action: 'manga', ... })` |
| `picture` | `/characters/{id}/pictures` | `client.Character().list({ $action: 'picture', ... })` |
| `voice` | `/characters/{id}/voices` | `client.Character().list({ $action: 'voice', ... })` |
| `full` | `/characters/{id}/full` | `client.Character().load({ $action: 'full', ... })` |

An action returns that action's OWN response, which is not necessarily a
Character record — check the API definition for its shape.

```ts
const result = await client.Character().list({
  $action: 'anime',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Character().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Character().load({ id: 1 })
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
const club = client.Club()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access` | `string` | No |  |
| `anime` | `any[]` | No |  |
| `category` | `string` | No |  |
| `characters` | `any[]` | No |  |
| `created` | `string` | No |  |
| `data` | `any[]` | No |  |
| `images` | `Record<string, any>` | No |  |
| `mal_id` | `number` | No |  |
| `manga` | `any[]` | No |  |
| `members` | `number` | No |  |
| `name` | `string` | No |  |
| `pagination` | `Record<string, any>` | No |  |
| `url` | `string` | No |  |
| `username` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `member` | `/clubs/{id}/members` | `client.Club().list({ $action: 'member', ... })` |
| `staff` | `/clubs/{id}/staff` | `client.Club().list({ $action: 'staff', ... })` |
| `relation` | `/clubs/{id}/relations` | `client.Club().load({ $action: 'relation', ... })` |

An action returns that action's OWN response, which is not necessarily a
Club record — check the API definition for its shape.

```ts
const result = await client.Club().list({
  $action: 'member',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Club().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Club().load({ id: 1 })
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
const external = client.External()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.External().list({ username: "example" })
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
const genre = client.Genre()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | No |  |
| `mal_id` | `number` | No |  |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `anime` | `/genres/anime` | `client.Genre().list({ $action: 'anime', ... })` |
| `manga` | `/genres/manga` | `client.Genre().list({ $action: 'manga', ... })` |

An action returns that action's OWN response, which is not necessarily a
Genre record — check the API definition for its shape.

```ts
const result = await client.Genre().list({
  $action: 'anime',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Genre().list()
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
const magazine = client.Magazine()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No |  |
| `pagination` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Magazine().list()
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
const manga = client.Manga()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved` | `boolean` | No |  |
| `author_url` | `string` | No |  |
| `author_username` | `string` | No |  |
| `authors` | `any[]` | No |  |
| `background` | `string` | No |  |
| `chapters` | `number` | No |  |
| `character` | `Record<string, any>` | No |  |
| `comments` | `number` | No |  |
| `completed` | `number` | No |  |
| `data` | `any[]` | No |  |
| `date` | `string` | No |  |
| `demographics` | `any[]` | No |  |
| `dropped` | `number` | No |  |
| `entry` | `Record<string, any>` | No |  |
| `explicit_genres` | `any[]` | No |  |
| `external` | `any[]` | No |  |
| `favorites` | `number` | No |  |
| `genres` | `any[]` | No |  |
| `images` | `Record<string, any>` | No |  |
| `jpg` | `Record<string, any>` | No |  |
| `last_comment` | `Record<string, any>` | No |  |
| `mal_id` | `number` | No |  |
| `members` | `number` | No |  |
| `moreinfo` | `string` | No |  |
| `name` | `string` | No |  |
| `on_hold` | `number` | No |  |
| `pagination` | `Record<string, any>` | No |  |
| `plan_to_read` | `number` | No |  |
| `popularity` | `number` | No |  |
| `published` | `Record<string, any>` | No |  |
| `publishing` | `boolean` | No |  |
| `rank` | `number` | No |  |
| `reading` | `number` | No |  |
| `relation` | `string` | No |  |
| `relations` | `any[]` | No |  |
| `role` | `string` | No |  |
| `score` | `number` | No |  |
| `scored_by` | `number` | No |  |
| `scores` | `any[]` | No |  |
| `serializations` | `any[]` | No |  |
| `status` | `string` | No |  |
| `synopsis` | `string` | No |  |
| `themes` | `any[]` | No |  |
| `title` | `string` | No |  |
| `title_english` | `string` | No |  |
| `title_japanese` | `string` | No |  |
| `title_synonyms` | `any[]` | No |  |
| `titles` | `any[]` | No |  |
| `total` | `number` | No |  |
| `type` | `string` | No |  |
| `url` | `string` | No |  |
| `volumes` | `number` | No |  |
| `webp` | `Record<string, any>` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `character` | `/manga/{id}/characters` | `client.Manga().list({ $action: 'character', ... })` |
| `external` | `/manga/{id}/external` | `client.Manga().list({ $action: 'external', ... })` |
| `forum` | `/manga/{id}/forum` | `client.Manga().list({ $action: 'forum', ... })` |
| `new` | `/manga/{id}/news` | `client.Manga().list({ $action: 'new', ... })` |
| `picture` | `/manga/{id}/pictures` | `client.Manga().list({ $action: 'picture', ... })` |
| `recommendation` | `/manga/{id}/recommendations` | `client.Manga().list({ $action: 'recommendation', ... })` |
| `relation` | `/manga/{id}/relations` | `client.Manga().list({ $action: 'relation', ... })` |
| `review` | `/manga/{id}/reviews` | `client.Manga().list({ $action: 'review', ... })` |
| `userupdate` | `/manga/{id}/userupdates` | `client.Manga().list({ $action: 'userupdate', ... })` |
| `full` | `/manga/{id}/full` | `client.Manga().load({ $action: 'full', ... })` |
| `moreinfo` | `/manga/{id}/moreinfo` | `client.Manga().load({ $action: 'moreinfo', ... })` |
| `statistic` | `/manga/{id}/statistics` | `client.Manga().load({ $action: 'statistic', ... })` |

An action returns that action's OWN response, which is not necessarily a
Manga record — check the API definition for its shape.

```ts
const result = await client.Manga().list({
  $action: 'character',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Manga().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Manga().load({ id: 1 })
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
const people_search = client.PeopleSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No |  |
| `pagination` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PeopleSearch().list()
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
const person = client.Person()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `string` | No |  |
| `alternate_names` | `any[]` | No |  |
| `anime` | `any[]` | No |  |
| `birthday` | `string` | No |  |
| `character` | `Record<string, any>` | No |  |
| `data` | `any[]` | No |  |
| `family_name` | `string` | No |  |
| `favorites` | `number` | No |  |
| `given_name` | `string` | No |  |
| `images` | `Record<string, any>` | No |  |
| `jpg` | `Record<string, any>` | No |  |
| `mal_id` | `number` | No |  |
| `manga` | `any[]` | No |  |
| `name` | `string` | No |  |
| `pagination` | `Record<string, any>` | No |  |
| `position` | `string` | No |  |
| `role` | `string` | No |  |
| `url` | `string` | No |  |
| `voices` | `any[]` | No |  |
| `website_url` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `anime` | `/people/{id}/anime` | `client.Person().list({ $action: 'anime', ... })` |
| `manga` | `/people/{id}/manga` | `client.Person().list({ $action: 'manga', ... })` |
| `picture` | `/people/{id}/pictures` | `client.Person().list({ $action: 'picture', ... })` |
| `voice` | `/people/{id}/voices` | `client.Person().list({ $action: 'voice', ... })` |
| `full` | `/people/{id}/full` | `client.Person().load({ $action: 'full', ... })` |

An action returns that action's OWN response, which is not necessarily a
Person record — check the API definition for its shape.

```ts
const result = await client.Person().list({
  $action: 'anime',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Person().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Person().load({ id: 1 })
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
const producer = client.Producer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `string` | No |  |
| `count` | `number` | No |  |
| `data` | `any[]` | No |  |
| `established` | `string` | No |  |
| `external` | `any[]` | No |  |
| `favorites` | `number` | No |  |
| `images` | `Record<string, any>` | No |  |
| `mal_id` | `number` | No |  |
| `name` | `string` | No |  |
| `pagination` | `Record<string, any>` | No |  |
| `titles` | `any[]` | No |  |
| `url` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `external` | `/producers/{id}/external` | `client.Producer().list({ $action: 'external', ... })` |
| `full` | `/producers/{id}/full` | `client.Producer().load({ $action: 'full', ... })` |

An action returns that action's OWN response, which is not necessarily a
Producer record — check the API definition for its shape.

```ts
const result = await client.Producer().list({
  $action: 'external',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Producer().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Producer().load({ id: 1 })
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
const random = client.Random()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `string` | No |  |
| `aired` | `Record<string, any>` | No |  |
| `airing` | `boolean` | No |  |
| `alternate_names` | `any[]` | No |  |
| `approved` | `boolean` | No |  |
| `authors` | `any[]` | No |  |
| `background` | `string` | No |  |
| `birthday` | `string` | No |  |
| `broadcast` | `Record<string, any>` | No |  |
| `chapters` | `number` | No |  |
| `demographics` | `any[]` | No |  |
| `duration` | `string` | No |  |
| `episodes` | `number` | No |  |
| `explicit_genres` | `any[]` | No |  |
| `family_name` | `string` | No |  |
| `favorites` | `number` | No |  |
| `gender` | `string` | No |  |
| `genres` | `any[]` | No |  |
| `given_name` | `string` | No |  |
| `images` | `Record<string, any>` | No |  |
| `joined` | `string` | No |  |
| `last_online` | `string` | No |  |
| `licensors` | `any[]` | No |  |
| `location` | `string` | No |  |
| `mal_id` | `number` | No |  |
| `members` | `number` | No |  |
| `name` | `string` | No |  |
| `name_kanji` | `string` | No |  |
| `nicknames` | `any[]` | No |  |
| `popularity` | `number` | No |  |
| `producers` | `any[]` | No |  |
| `published` | `Record<string, any>` | No |  |
| `publishing` | `boolean` | No |  |
| `rank` | `number` | No |  |
| `rating` | `string` | No |  |
| `score` | `number` | No |  |
| `scored_by` | `number` | No |  |
| `season` | `string` | No |  |
| `serializations` | `any[]` | No |  |
| `source` | `string` | No |  |
| `status` | `string` | No |  |
| `studios` | `any[]` | No |  |
| `synopsis` | `string` | No |  |
| `themes` | `any[]` | No |  |
| `title` | `string` | No |  |
| `title_english` | `string` | No |  |
| `title_japanese` | `string` | No |  |
| `title_synonyms` | `any[]` | No |  |
| `titles` | `any[]` | No |  |
| `trailer` | `Record<string, any>` | No |  |
| `type` | `string` | No |  |
| `url` | `string` | No |  |
| `username` | `string` | No |  |
| `volumes` | `number` | No |  |
| `website_url` | `string` | No |  |
| `year` | `number` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `anime` | `/random/anime` | `client.Random().load({ $action: 'anime', ... })` |
| `character` | `/random/characters` | `client.Random().load({ $action: 'character', ... })` |
| `manga` | `/random/manga` | `client.Random().load({ $action: 'manga', ... })` |
| `person` | `/random/people` | `client.Random().load({ $action: 'person', ... })` |
| `user` | `/random/users` | `client.Random().load({ $action: 'user', ... })` |

An action returns that action's OWN response, which is not necessarily a
Random record — check the API definition for its shape.

```ts
const result = await client.Random().load({
  $action: 'anime',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Random().load()
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
const recommendation = client.Recommendation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No |  |
| `pagination` | `Record<string, any>` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `anime` | `/recommendations/anime` | `client.Recommendation().list({ $action: 'anime', ... })` |
| `manga` | `/recommendations/manga` | `client.Recommendation().list({ $action: 'manga', ... })` |

An action returns that action's OWN response, which is not necessarily a
Recommendation record — check the API definition for its shape.

```ts
const result = await client.Recommendation().list({
  $action: 'anime',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Recommendation().list({ username: "example" })
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
const review = client.Review()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `anime` | `/reviews/anime` | `client.Review().load({ $action: 'anime', ... })` |
| `manga` | `/reviews/manga` | `client.Review().load({ $action: 'manga', ... })` |

An action returns that action's OWN response, which is not necessarily a
Review record — check the API definition for its shape.

```ts
const result = await client.Review().load({
  $action: 'anime',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Review().load()
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
const schedule = client.Schedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No |  |
| `pagination` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Schedule().list()
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
const season = client.Season()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No |  |
| `pagination` | `Record<string, any>` | No |  |
| `seasons` | `any[]` | No |  |
| `year` | `number` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `now` | `/seasons/now` | `client.Season().list({ $action: 'now', ... })` |
| `upcoming` | `/seasons/upcoming` | `client.Season().list({ $action: 'upcoming', ... })` |

An action returns that action's OWN response, which is not necessarily a
Season record — check the API definition for its shape.

```ts
const result = await client.Season().list({
  $action: 'now',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Season().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Season().load({ season: 'season', year: 1 })
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
const top = client.Top()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No |  |
| `pagination` | `Record<string, any>` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `review` | `/top/reviews` | `client.Top().load({ $action: 'review', ... })` |

An action returns that action's OWN response, which is not necessarily a
Top record — check the API definition for its shape.

```ts
const result = await client.Top().load({
  $action: 'review',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Top().load()
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
const user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | `any[]` | No |  |
| `birthday` | `string` | No |  |
| `characters` | `any[]` | No |  |
| `data` | `any[]` | No |  |
| `external` | `any[]` | No |  |
| `gender` | `string` | No |  |
| `images` | `Record<string, any>` | No |  |
| `joined` | `string` | No |  |
| `last_online` | `string` | No |  |
| `location` | `string` | No |  |
| `mal_id` | `number` | No |  |
| `manga` | `any[]` | No |  |
| `pagination` | `Record<string, any>` | No |  |
| `people` | `any[]` | No |  |
| `statistics` | `Record<string, any>` | No |  |
| `url` | `string` | No |  |
| `username` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `animelist` | `/users/{username}/animelist` | `client.User().load({ $action: 'animelist', ... })` |
| `favorite` | `/users/{username}/favorites` | `client.User().load({ $action: 'favorite', ... })` |
| `full` | `/users/{username}/full` | `client.User().load({ $action: 'full', ... })` |
| `mangalist` | `/users/{username}/mangalist` | `client.User().load({ $action: 'mangalist', ... })` |
| `review` | `/users/{username}/reviews` | `client.User().load({ $action: 'review', ... })` |

An action returns that action's OWN response, which is not necessarily a
User record — check the API definition for its shape.

```ts
const result = await client.User().load({
  $action: 'animelist',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.User().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.User().load({ id: 1 })
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
const user_about = client.UserAbout()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `about` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UserAbout().list({ username: "example" })
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
const user_club = client.UserClub()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No |  |
| `pagination` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UserClub().list({ username: "example" })
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
const user_friend = client.UserFriend()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No |  |
| `pagination` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UserFriend().list({ username: "example" })
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
const user_history = client.UserHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | No |  |
| `entry` | `Record<string, any>` | No |  |
| `increment` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UserHistory().list({ username: "example" })
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
const user_statistic = client.UserStatistic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | `Record<string, any>` | No |  |
| `manga` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.UserStatistic().load({ username: 'username' })
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
const user_update = client.UserUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `anime` | `any[]` | No |  |
| `manga` | `any[]` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.UserUpdate().load({ username: 'username' })
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
const watch_episode = client.WatchEpisode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No |  |
| `pagination` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WatchEpisode().list()
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
const watch_promo = client.WatchPromo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No |  |
| `pagination` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WatchPromo().list()
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

