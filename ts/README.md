# JikanRest TypeScript SDK



The TypeScript SDK for the JikanRest API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Anime()` — each with a small set of operations (`list`, `load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/jikan-rest-sdk/releases](https://github.com/voxgig-sdk/jikan-rest-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { JikanRestSDK } from '@voxgig-sdk/jikan-rest'

const client = new JikanRestSDK()
```

### 2. List anime records

`list()` resolves to an array of Anime ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const animes = await client.Anime().list()

for (const anime of animes) {
  console.log(anime)
}
```

### 3. Load an userstatistic

UserStatistic is nested under username, so provide the `username`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const userstatistic = await client.UserStatistic().load({
    username: 'example_username',
  })
  console.log(userstatistic)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const externals = await client.External().list()
  console.log(externals)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = JikanRestSDK.test()

const external = await client.External().list()
// external is the entity, populated with mock response data
// — call external.data() for the record itself
console.log(external)
```

You can also use the instance method:

```ts
const client = new JikanRestSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.External()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new JikanRestSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
JIKAN_REST_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### JikanRestSDK

#### Constructor

```ts
new JikanRestSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Anime(data?)` | `AnimeEntity` | Create an Anime entity instance. |
| `Character(data?)` | `CharacterEntity` | Create a Character entity instance. |
| `Club(data?)` | `ClubEntity` | Create a Club entity instance. |
| `External(data?)` | `ExternalEntity` | Create an External entity instance. |
| `Genre(data?)` | `GenreEntity` | Create a Genre entity instance. |
| `Magazine(data?)` | `MagazineEntity` | Create a Magazine entity instance. |
| `Manga(data?)` | `MangaEntity` | Create a Manga entity instance. |
| `PeopleSearch(data?)` | `PeopleSearchEntity` | Create a PeopleSearch entity instance. |
| `Person(data?)` | `PersonEntity` | Create a Person entity instance. |
| `Producer(data?)` | `ProducerEntity` | Create a Producer entity instance. |
| `Random(data?)` | `RandomEntity` | Create a Random entity instance. |
| `Recommendation(data?)` | `RecommendationEntity` | Create a Recommendation entity instance. |
| `Review(data?)` | `ReviewEntity` | Create a Review entity instance. |
| `Schedule(data?)` | `ScheduleEntity` | Create a Schedule entity instance. |
| `Season(data?)` | `SeasonEntity` | Create a Season entity instance. |
| `Top(data?)` | `TopEntity` | Create a Top entity instance. |
| `User(data?)` | `UserEntity` | Create an User entity instance. |
| `UserAbout(data?)` | `UserAboutEntity` | Create an UserAbout entity instance. |
| `UserClub(data?)` | `UserClubEntity` | Create an UserClub entity instance. |
| `UserFriend(data?)` | `UserFriendEntity` | Create an UserFriend entity instance. |
| `UserHistory(data?)` | `UserHistoryEntity` | Create an UserHistory entity instance. |
| `UserStatistic(data?)` | `UserStatisticEntity` | Create an UserStatistic entity instance. |
| `UserUpdate(data?)` | `UserUpdateEntity` | Create an UserUpdate entity instance. |
| `WatchEpisode(data?)` | `WatchEpisodeEntity` | Create a WatchEpisode entity instance. |
| `WatchPromo(data?)` | `WatchPromoEntity` | Create a WatchPromo entity instance. |
| `tester(testopts?, sdkopts?)` | `JikanRestSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `JikanRestSDK.test(testopts?, sdkopts?)` | `JikanRestSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): JikanRestSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` resolves to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Anime

| Field | Description |
| --- | --- |
| `aired` |  |
| `airing` |  |
| `approved` |  |
| `author_url` |  |
| `author_username` |  |
| `background` |  |
| `broadcast` |  |
| `character` |  |
| `comments` |  |
| `completed` |  |
| `data` |  |
| `date` |  |
| `demographics` |  |
| `dropped` |  |
| `duration` |  |
| `endings` |  |
| `entry` |  |
| `episodes` |  |
| `explicit_genres` |  |
| `external` |  |
| `favorites` |  |
| `filler` |  |
| `genres` |  |
| `images` |  |
| `last_comment` |  |
| `licensors` |  |
| `mal_id` |  |
| `members` |  |
| `moreinfo` |  |
| `music_videos` |  |
| `name` |  |
| `on_hold` |  |
| `openings` |  |
| `pagination` |  |
| `person` |  |
| `plan_to_watch` |  |
| `popularity` |  |
| `positions` |  |
| `producers` |  |
| `promo` |  |
| `rank` |  |
| `rating` |  |
| `recap` |  |
| `relation` |  |
| `relations` |  |
| `role` |  |
| `score` |  |
| `scored_by` |  |
| `scores` |  |
| `season` |  |
| `source` |  |
| `status` |  |
| `streaming` |  |
| `studios` |  |
| `synopsis` |  |
| `theme` |  |
| `themes` |  |
| `title` |  |
| `title_english` |  |
| `title_japanese` |  |
| `title_romanji` |  |
| `title_synonyms` |  |
| `titles` |  |
| `total` |  |
| `trailer` |  |
| `type` |  |
| `url` |  |
| `voice_actors` |  |
| `watching` |  |
| `year` |  |

Operations: list, load.

API path: `/anime`

#### Character

| Field | Description |
| --- | --- |
| `about` |  |
| `anime` |  |
| `data` |  |
| `favorites` |  |
| `image_url` |  |
| `images` |  |
| `language` |  |
| `large_image_url` |  |
| `mal_id` |  |
| `manga` |  |
| `name` |  |
| `name_kanji` |  |
| `nicknames` |  |
| `pagination` |  |
| `person` |  |
| `role` |  |
| `url` |  |
| `voices` |  |

Operations: list, load.

API path: `/characters`

#### Club

| Field | Description |
| --- | --- |
| `access` |  |
| `anime` |  |
| `category` |  |
| `characters` |  |
| `created` |  |
| `data` |  |
| `images` |  |
| `mal_id` |  |
| `manga` |  |
| `members` |  |
| `name` |  |
| `pagination` |  |
| `url` |  |
| `username` |  |

Operations: list, load.

API path: `/clubs`

#### External

| Field | Description |
| --- | --- |
| `name` |  |
| `url` |  |

Operations: list.

API path: `/users/{username}/external`

#### Genre

| Field | Description |
| --- | --- |
| `count` |  |
| `mal_id` |  |
| `name` |  |
| `url` |  |

Operations: list.

API path: `/genres/anime`

#### Magazine

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

Operations: list.

API path: `/magazines`

#### Manga

| Field | Description |
| --- | --- |
| `approved` |  |
| `author_url` |  |
| `author_username` |  |
| `authors` |  |
| `background` |  |
| `chapters` |  |
| `character` |  |
| `comments` |  |
| `completed` |  |
| `data` |  |
| `date` |  |
| `demographics` |  |
| `dropped` |  |
| `entry` |  |
| `explicit_genres` |  |
| `external` |  |
| `favorites` |  |
| `genres` |  |
| `images` |  |
| `jpg` |  |
| `last_comment` |  |
| `mal_id` |  |
| `members` |  |
| `moreinfo` |  |
| `name` |  |
| `on_hold` |  |
| `pagination` |  |
| `plan_to_read` |  |
| `popularity` |  |
| `published` |  |
| `publishing` |  |
| `rank` |  |
| `reading` |  |
| `relation` |  |
| `relations` |  |
| `role` |  |
| `score` |  |
| `scored_by` |  |
| `scores` |  |
| `serializations` |  |
| `status` |  |
| `synopsis` |  |
| `themes` |  |
| `title` |  |
| `title_english` |  |
| `title_japanese` |  |
| `title_synonyms` |  |
| `titles` |  |
| `total` |  |
| `type` |  |
| `url` |  |
| `volumes` |  |
| `webp` |  |

Operations: list, load.

API path: `/manga`

#### PeopleSearch

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

Operations: list.

API path: `/top/people`

#### Person

| Field | Description |
| --- | --- |
| `about` |  |
| `alternate_names` |  |
| `anime` |  |
| `birthday` |  |
| `character` |  |
| `data` |  |
| `family_name` |  |
| `favorites` |  |
| `given_name` |  |
| `images` |  |
| `jpg` |  |
| `mal_id` |  |
| `manga` |  |
| `name` |  |
| `pagination` |  |
| `position` |  |
| `role` |  |
| `url` |  |
| `voices` |  |
| `website_url` |  |

Operations: list, load.

API path: `/people`

#### Producer

| Field | Description |
| --- | --- |
| `about` |  |
| `count` |  |
| `data` |  |
| `established` |  |
| `external` |  |
| `favorites` |  |
| `images` |  |
| `mal_id` |  |
| `name` |  |
| `pagination` |  |
| `titles` |  |
| `url` |  |

Operations: list, load.

API path: `/producers`

#### Random

| Field | Description |
| --- | --- |
| `about` |  |
| `aired` |  |
| `airing` |  |
| `alternate_names` |  |
| `approved` |  |
| `authors` |  |
| `background` |  |
| `birthday` |  |
| `broadcast` |  |
| `chapters` |  |
| `demographics` |  |
| `duration` |  |
| `episodes` |  |
| `explicit_genres` |  |
| `family_name` |  |
| `favorites` |  |
| `gender` |  |
| `genres` |  |
| `given_name` |  |
| `images` |  |
| `joined` |  |
| `last_online` |  |
| `licensors` |  |
| `location` |  |
| `mal_id` |  |
| `members` |  |
| `name` |  |
| `name_kanji` |  |
| `nicknames` |  |
| `popularity` |  |
| `producers` |  |
| `published` |  |
| `publishing` |  |
| `rank` |  |
| `rating` |  |
| `score` |  |
| `scored_by` |  |
| `season` |  |
| `serializations` |  |
| `source` |  |
| `status` |  |
| `studios` |  |
| `synopsis` |  |
| `themes` |  |
| `title` |  |
| `title_english` |  |
| `title_japanese` |  |
| `title_synonyms` |  |
| `titles` |  |
| `trailer` |  |
| `type` |  |
| `url` |  |
| `username` |  |
| `volumes` |  |
| `website_url` |  |
| `year` |  |

Operations: load.

API path: `/random/anime`

#### Recommendation

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

Operations: list.

API path: `/users/{username}/recommendations`

#### Review

| Field | Description |
| --- | --- |

Operations: load.

API path: `/reviews/anime`

#### Schedule

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

Operations: list.

API path: `/schedules`

#### Season

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |
| `seasons` |  |
| `year` |  |

Operations: list.

API path: `/seasons/{year}/{season}`

#### Top

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

Operations: load.

API path: `/top/reviews`

#### User

| Field | Description |
| --- | --- |
| `anime` |  |
| `birthday` |  |
| `characters` |  |
| `data` |  |
| `external` |  |
| `gender` |  |
| `images` |  |
| `joined` |  |
| `last_online` |  |
| `location` |  |
| `mal_id` |  |
| `manga` |  |
| `pagination` |  |
| `people` |  |
| `statistics` |  |
| `url` |  |
| `username` |  |

Operations: list, load.

API path: `/users`

#### UserAbout

| Field | Description |
| --- | --- |
| `about` |  |

Operations: list.

API path: `/users/{username}/about`

#### UserClub

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

Operations: list.

API path: `/users/{username}/clubs`

#### UserFriend

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

Operations: list.

API path: `/users/{username}/friends`

#### UserHistory

| Field | Description |
| --- | --- |
| `date` |  |
| `entry` |  |
| `increment` |  |

Operations: list.

API path: `/users/{username}/history`

#### UserStatistic

| Field | Description |
| --- | --- |
| `anime` |  |
| `manga` |  |

Operations: load.

API path: `/users/{username}/statistics`

#### UserUpdate

| Field | Description |
| --- | --- |
| `anime` |  |
| `manga` |  |

Operations: load.

API path: `/users/{username}/userupdates`

#### WatchEpisode

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

Operations: list.

API path: `/watch/episodes`

#### WatchPromo

| Field | Description |
| --- | --- |
| `data` |  |
| `pagination` |  |

Operations: list.

API path: `/watch/promos`



## Entities


### Anime

Create an instance: `const anime = client.Anime()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aired` | `string` |  |
| `airing` | `boolean` |  |
| `approved` | `boolean` |  |
| `author_url` | `string` |  |
| `author_username` | `string` |  |
| `background` | `string` |  |
| `broadcast` | `Record<string, any>` |  |
| `character` | `Record<string, any>` |  |
| `comments` | `number` |  |
| `completed` | `number` |  |
| `data` | `any[]` |  |
| `date` | `string` |  |
| `demographics` | `any[]` |  |
| `dropped` | `number` |  |
| `duration` | `number` |  |
| `endings` | `any[]` |  |
| `entry` | `Record<string, any>` |  |
| `episodes` | `number` |  |
| `explicit_genres` | `any[]` |  |
| `external` | `any[]` |  |
| `favorites` | `number` |  |
| `filler` | `boolean` |  |
| `genres` | `any[]` |  |
| `images` | `Record<string, any>` |  |
| `last_comment` | `Record<string, any>` |  |
| `licensors` | `any[]` |  |
| `mal_id` | `number` |  |
| `members` | `number` |  |
| `moreinfo` | `string` |  |
| `music_videos` | `any[]` |  |
| `name` | `string` |  |
| `on_hold` | `number` |  |
| `openings` | `any[]` |  |
| `pagination` | `Record<string, any>` |  |
| `person` | `Record<string, any>` |  |
| `plan_to_watch` | `number` |  |
| `popularity` | `number` |  |
| `positions` | `any[]` |  |
| `producers` | `any[]` |  |
| `promo` | `any[]` |  |
| `rank` | `number` |  |
| `rating` | `string` |  |
| `recap` | `boolean` |  |
| `relation` | `string` |  |
| `relations` | `any[]` |  |
| `role` | `string` |  |
| `score` | `number` |  |
| `scored_by` | `number` |  |
| `scores` | `any[]` |  |
| `season` | `string` |  |
| `source` | `string` |  |
| `status` | `string` |  |
| `streaming` | `any[]` |  |
| `studios` | `any[]` |  |
| `synopsis` | `string` |  |
| `theme` | `Record<string, any>` |  |
| `themes` | `any[]` |  |
| `title` | `string` |  |
| `title_english` | `string` |  |
| `title_japanese` | `string` |  |
| `title_romanji` | `string` |  |
| `title_synonyms` | `any[]` |  |
| `titles` | `any[]` |  |
| `total` | `number` |  |
| `trailer` | `Record<string, any>` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `voice_actors` | `any[]` |  |
| `watching` | `number` |  |
| `year` | `number` |  |

#### Example: Load

```ts
const anime = await client.Anime().load({ id: 1 })
```

#### Example: List

```ts
const animes = await client.Anime().list()
```


### Character

Create an instance: `const character = client.Character()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `string` |  |
| `anime` | `any[]` |  |
| `data` | `any[]` |  |
| `favorites` | `number` |  |
| `image_url` | `string` |  |
| `images` | `Record<string, any>` |  |
| `language` | `string` |  |
| `large_image_url` | `string` |  |
| `mal_id` | `number` |  |
| `manga` | `any[]` |  |
| `name` | `string` |  |
| `name_kanji` | `string` |  |
| `nicknames` | `any[]` |  |
| `pagination` | `Record<string, any>` |  |
| `person` | `Record<string, any>` |  |
| `role` | `string` |  |
| `url` | `string` |  |
| `voices` | `any[]` |  |

#### Example: Load

```ts
const character = await client.Character().load({ id: 1 })
```

#### Example: List

```ts
const characters = await client.Character().list()
```


### Club

Create an instance: `const club = client.Club()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access` | `string` |  |
| `anime` | `any[]` |  |
| `category` | `string` |  |
| `characters` | `any[]` |  |
| `created` | `string` |  |
| `data` | `any[]` |  |
| `images` | `Record<string, any>` |  |
| `mal_id` | `number` |  |
| `manga` | `any[]` |  |
| `members` | `number` |  |
| `name` | `string` |  |
| `pagination` | `Record<string, any>` |  |
| `url` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```ts
const club = await client.Club().load({ id: 1 })
```

#### Example: List

```ts
const clubs = await client.Club().list()
```


### External

Create an instance: `const external = client.External()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: List

```ts
const externals = await client.External().list({ username: "example" })
```


### Genre

Create an instance: `const genre = client.Genre()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` |  |
| `mal_id` | `number` |  |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: List

```ts
const genres = await client.Genre().list()
```


### Magazine

Create an instance: `const magazine = client.Magazine()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `pagination` | `Record<string, any>` |  |

#### Example: List

```ts
const magazines = await client.Magazine().list()
```


### Manga

Create an instance: `const manga = client.Manga()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved` | `boolean` |  |
| `author_url` | `string` |  |
| `author_username` | `string` |  |
| `authors` | `any[]` |  |
| `background` | `string` |  |
| `chapters` | `number` |  |
| `character` | `Record<string, any>` |  |
| `comments` | `number` |  |
| `completed` | `number` |  |
| `data` | `any[]` |  |
| `date` | `string` |  |
| `demographics` | `any[]` |  |
| `dropped` | `number` |  |
| `entry` | `Record<string, any>` |  |
| `explicit_genres` | `any[]` |  |
| `external` | `any[]` |  |
| `favorites` | `number` |  |
| `genres` | `any[]` |  |
| `images` | `Record<string, any>` |  |
| `jpg` | `Record<string, any>` |  |
| `last_comment` | `Record<string, any>` |  |
| `mal_id` | `number` |  |
| `members` | `number` |  |
| `moreinfo` | `string` |  |
| `name` | `string` |  |
| `on_hold` | `number` |  |
| `pagination` | `Record<string, any>` |  |
| `plan_to_read` | `number` |  |
| `popularity` | `number` |  |
| `published` | `Record<string, any>` |  |
| `publishing` | `boolean` |  |
| `rank` | `number` |  |
| `reading` | `number` |  |
| `relation` | `string` |  |
| `relations` | `any[]` |  |
| `role` | `string` |  |
| `score` | `number` |  |
| `scored_by` | `number` |  |
| `scores` | `any[]` |  |
| `serializations` | `any[]` |  |
| `status` | `string` |  |
| `synopsis` | `string` |  |
| `themes` | `any[]` |  |
| `title` | `string` |  |
| `title_english` | `string` |  |
| `title_japanese` | `string` |  |
| `title_synonyms` | `any[]` |  |
| `titles` | `any[]` |  |
| `total` | `number` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `volumes` | `number` |  |
| `webp` | `Record<string, any>` |  |

#### Example: Load

```ts
const manga = await client.Manga().load({ id: 1 })
```

#### Example: List

```ts
const mangas = await client.Manga().list()
```


### PeopleSearch

Create an instance: `const people_search = client.PeopleSearch()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `pagination` | `Record<string, any>` |  |

#### Example: List

```ts
const people_searchs = await client.PeopleSearch().list()
```


### Person

Create an instance: `const person = client.Person()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `string` |  |
| `alternate_names` | `any[]` |  |
| `anime` | `any[]` |  |
| `birthday` | `string` |  |
| `character` | `Record<string, any>` |  |
| `data` | `any[]` |  |
| `family_name` | `string` |  |
| `favorites` | `number` |  |
| `given_name` | `string` |  |
| `images` | `Record<string, any>` |  |
| `jpg` | `Record<string, any>` |  |
| `mal_id` | `number` |  |
| `manga` | `any[]` |  |
| `name` | `string` |  |
| `pagination` | `Record<string, any>` |  |
| `position` | `string` |  |
| `role` | `string` |  |
| `url` | `string` |  |
| `voices` | `any[]` |  |
| `website_url` | `string` |  |

#### Example: Load

```ts
const person = await client.Person().load({ id: 1 })
```

#### Example: List

```ts
const persons = await client.Person().list()
```


### Producer

Create an instance: `const producer = client.Producer()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `string` |  |
| `count` | `number` |  |
| `data` | `any[]` |  |
| `established` | `string` |  |
| `external` | `any[]` |  |
| `favorites` | `number` |  |
| `images` | `Record<string, any>` |  |
| `mal_id` | `number` |  |
| `name` | `string` |  |
| `pagination` | `Record<string, any>` |  |
| `titles` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const producer = await client.Producer().load({ id: 1 })
```

#### Example: List

```ts
const producers = await client.Producer().list()
```


### Random

Create an instance: `const random = client.Random()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `string` |  |
| `aired` | `Record<string, any>` |  |
| `airing` | `boolean` |  |
| `alternate_names` | `any[]` |  |
| `approved` | `boolean` |  |
| `authors` | `any[]` |  |
| `background` | `string` |  |
| `birthday` | `string` |  |
| `broadcast` | `Record<string, any>` |  |
| `chapters` | `number` |  |
| `demographics` | `any[]` |  |
| `duration` | `string` |  |
| `episodes` | `number` |  |
| `explicit_genres` | `any[]` |  |
| `family_name` | `string` |  |
| `favorites` | `number` |  |
| `gender` | `string` |  |
| `genres` | `any[]` |  |
| `given_name` | `string` |  |
| `images` | `Record<string, any>` |  |
| `joined` | `string` |  |
| `last_online` | `string` |  |
| `licensors` | `any[]` |  |
| `location` | `string` |  |
| `mal_id` | `number` |  |
| `members` | `number` |  |
| `name` | `string` |  |
| `name_kanji` | `string` |  |
| `nicknames` | `any[]` |  |
| `popularity` | `number` |  |
| `producers` | `any[]` |  |
| `published` | `Record<string, any>` |  |
| `publishing` | `boolean` |  |
| `rank` | `number` |  |
| `rating` | `string` |  |
| `score` | `number` |  |
| `scored_by` | `number` |  |
| `season` | `string` |  |
| `serializations` | `any[]` |  |
| `source` | `string` |  |
| `status` | `string` |  |
| `studios` | `any[]` |  |
| `synopsis` | `string` |  |
| `themes` | `any[]` |  |
| `title` | `string` |  |
| `title_english` | `string` |  |
| `title_japanese` | `string` |  |
| `title_synonyms` | `any[]` |  |
| `titles` | `any[]` |  |
| `trailer` | `Record<string, any>` |  |
| `type` | `string` |  |
| `url` | `string` |  |
| `username` | `string` |  |
| `volumes` | `number` |  |
| `website_url` | `string` |  |
| `year` | `number` |  |

#### Example: Load

```ts
const random = await client.Random().load()
```


### Recommendation

Create an instance: `const recommendation = client.Recommendation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `pagination` | `Record<string, any>` |  |

#### Example: List

```ts
const recommendations = await client.Recommendation().list({ username: "example" })
```


### Review

Create an instance: `const review = client.Review()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const review = await client.Review().load()
```


### Schedule

Create an instance: `const schedule = client.Schedule()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `pagination` | `Record<string, any>` |  |

#### Example: List

```ts
const schedules = await client.Schedule().list()
```


### Season

Create an instance: `const season = client.Season()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `pagination` | `Record<string, any>` |  |
| `seasons` | `any[]` |  |
| `year` | `number` |  |

#### Example: List

```ts
const seasons = await client.Season().list()
```


### Top

Create an instance: `const top = client.Top()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `pagination` | `Record<string, any>` |  |

#### Example: Load

```ts
const top = await client.Top().load()
```


### User

Create an instance: `const user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | `any[]` |  |
| `birthday` | `string` |  |
| `characters` | `any[]` |  |
| `data` | `any[]` |  |
| `external` | `any[]` |  |
| `gender` | `string` |  |
| `images` | `Record<string, any>` |  |
| `joined` | `string` |  |
| `last_online` | `string` |  |
| `location` | `string` |  |
| `mal_id` | `number` |  |
| `manga` | `any[]` |  |
| `pagination` | `Record<string, any>` |  |
| `people` | `any[]` |  |
| `statistics` | `Record<string, any>` |  |
| `url` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```ts
const user = await client.User().load({ id: 1 })
```

#### Example: List

```ts
const users = await client.User().list()
```


### UserAbout

Create an instance: `const user_about = client.UserAbout()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `about` | `string` |  |

#### Example: List

```ts
const user_abouts = await client.UserAbout().list({ username: "example" })
```


### UserClub

Create an instance: `const user_club = client.UserClub()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `pagination` | `Record<string, any>` |  |

#### Example: List

```ts
const user_clubs = await client.UserClub().list({ username: "example" })
```


### UserFriend

Create an instance: `const user_friend = client.UserFriend()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `pagination` | `Record<string, any>` |  |

#### Example: List

```ts
const user_friends = await client.UserFriend().list({ username: "example" })
```


### UserHistory

Create an instance: `const user_history = client.UserHistory()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `entry` | `Record<string, any>` |  |
| `increment` | `number` |  |

#### Example: List

```ts
const user_historys = await client.UserHistory().list({ username: "example" })
```


### UserStatistic

Create an instance: `const user_statistic = client.UserStatistic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | `Record<string, any>` |  |
| `manga` | `Record<string, any>` |  |

#### Example: Load

```ts
const user_statistic = await client.UserStatistic().load({ username: 'username' })
```


### UserUpdate

Create an instance: `const user_update = client.UserUpdate()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `anime` | `any[]` |  |
| `manga` | `any[]` |  |

#### Example: Load

```ts
const user_update = await client.UserUpdate().load({ username: 'username' })
```


### WatchEpisode

Create an instance: `const watch_episode = client.WatchEpisode()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `pagination` | `Record<string, any>` |  |

#### Example: List

```ts
const watch_episodes = await client.WatchEpisode().list()
```


### WatchPromo

Create an instance: `const watch_promo = client.WatchPromo()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `pagination` | `Record<string, any>` |  |

#### Example: List

```ts
const watch_promos = await client.WatchPromo().list()
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
jikan-rest/
├── src/
│   ├── JikanRestSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { JikanRestSDK } from '@voxgig-sdk/jikan-rest'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const external = client.External()
await external.list()

// external.data() now returns the external data from the last `list`
// external.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
