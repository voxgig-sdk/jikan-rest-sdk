# JikanRest TypeScript SDK



The TypeScript SDK for the JikanRest API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Anime()` — each with a small set of operations (`list`, `load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
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

### 3. Load a season

Season is nested under season, so provide the `season`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const season = await client.Season().load({
    season: 'example_season',
    year: 1,
  })
  console.log(season)
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

Operations: list, load.

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

Operations: list, load.

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
| `count` | Genre's entry count |
| `mal_id` | MyAnimeList ID |
| `name` | Genre Name |
| `url` | MyAnimeList URL |

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

Operations: list, load.

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

Operations: list, load.

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
| `seasons` | List of available seasons |
| `year` | Year |

Operations: list, load.

API path: `/seasons/now`

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

Operations: list, load.

API path: `/users`

#### UserAbout

| Field | Description |
| --- | --- |
| `about` | User About. |

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
| `date` | Date ISO8601 |
| `entry` | Parsed URL Data |
| `increment` | Number of episodes/chapters watched/read |

Operations: list.

API path: `/users/{username}/history`

#### UserStatistic

| Field | Description |
| --- | --- |
| `anime` | Anime Statistics |
| `manga` | Manga Statistics |

Operations: load.

API path: `/users/{username}/statistics`

#### UserUpdate

| Field | Description |
| --- | --- |
| `anime` | Last updated Anime |
| `manga` | Last updated Manga |

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
| `aired` | `string` | Aired Date ISO8601 |
| `airing` | `boolean` | Airing boolean |
| `approved` | `boolean` | Whether the entry is pending approval on MAL or not |
| `author_url` | `string` | Author Profile URL |
| `author_username` | `string` | Author MyAnimeList Username |
| `background` | `string` | Background |
| `broadcast` | `Record<string, any>` | Broadcast Details |
| `character` | `Record<string, any>` | Character details |
| `comments` | `number` | Comment count |
| `completed` | `number` | Number of users who have completed the resource |
| `data` | `any[]` |  |
| `date` | `string` | Post Date ISO8601 |
| `demographics` | `any[]` |  |
| `dropped` | `number` | Number of users who have dropped the resource |
| `duration` | `number` | Episode duration in seconds |
| `endings` | `any[]` |  |
| `entry` | `Record<string, any>` | Related entries |
| `episodes` | `number` | Episode count |
| `explicit_genres` | `any[]` |  |
| `external` | `any[]` |  |
| `favorites` | `number` | Number of users who have favorited this entry |
| `filler` | `boolean` | Filler episode |
| `genres` | `any[]` |  |
| `id` | `string` |  |
| `images` | `Record<string, any>` |  |
| `last_comment` | `Record<string, any>` | Last comment details |
| `licensors` | `any[]` |  |
| `mal_id` | `number` | MyAnimeList ID |
| `members` | `number` | Number of users who have added this entry to their list |
| `moreinfo` | `string` | Additional information on the entry |
| `music_videos` | `any[]` |  |
| `name` | `string` |  |
| `on_hold` | `number` | Number of users who have put the resource on hold |
| `openings` | `any[]` |  |
| `pagination` | `Record<string, any>` |  |
| `person` | `Record<string, any>` | Person details |
| `plan_to_watch` | `number` | Number of users who have planned to watch the resource |
| `popularity` | `number` | Popularity |
| `positions` | `any[]` | Staff Positions |
| `producers` | `any[]` |  |
| `promo` | `any[]` |  |
| `rank` | `number` | Ranking |
| `rating` | `string` | Anime audience rating |
| `recap` | `boolean` | Recap episode |
| `relation` | `string` | Relation type |
| `relations` | `any[]` |  |
| `role` | `string` | Character's Role |
| `score` | `number` | Score |
| `scored_by` | `number` | Number of users |
| `scores` | `any[]` |  |
| `season` | `string` | Season |
| `source` | `string` | Original Material/Source adapted from |
| `status` | `string` | Airing status |
| `streaming` | `any[]` |  |
| `studios` | `any[]` |  |
| `synopsis` | `string` | Episode Synopsis |
| `theme` | `Record<string, any>` |  |
| `themes` | `any[]` |  |
| `title` | `string` | Title |
| `title_english` | `string` | English Title |
| `title_japanese` | `string` | Title Japanese |
| `title_romanji` | `string` | title_romanji |
| `title_synonyms` | `any[]` | Other Titles |
| `titles` | `any[]` | All titles |
| `total` | `number` | Total number of users who have the resource added to their lists |
| `trailer` | `Record<string, any>` | Youtube Details |
| `type` | `string` | Anime Type |
| `url` | `string` | MyAnimeList URL |
| `voice_actors` | `any[]` |  |
| `watching` | `number` | Number of users watching the resource |
| `year` | `number` | Year |

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
| `about` | `string` | Biography |
| `anime` | `any[]` |  |
| `data` | `any[]` |  |
| `favorites` | `number` | Number of users who have favorited this entry |
| `id` | `string` |  |
| `image_url` | `string` | Default JPG Image Size URL |
| `images` | `Record<string, any>` |  |
| `language` | `string` | Character's Role |
| `large_image_url` | `string` | Large JPG Image Size URL |
| `mal_id` | `number` | MyAnimeList ID |
| `manga` | `any[]` |  |
| `name` | `string` | Name |
| `name_kanji` | `string` | Name |
| `nicknames` | `any[]` | Other Names |
| `pagination` | `Record<string, any>` |  |
| `person` | `Record<string, any>` |  |
| `role` | `string` | Character's Role |
| `url` | `string` | MyAnimeList URL |
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
| `access` | `string` | Club access |
| `anime` | `any[]` |  |
| `category` | `string` | Club Category |
| `characters` | `any[]` |  |
| `created` | `string` | Date Created ISO8601 |
| `data` | `any[]` |  |
| `id` | `string` |  |
| `images` | `Record<string, any>` |  |
| `mal_id` | `number` | MyAnimeList ID |
| `manga` | `any[]` |  |
| `members` | `number` | Number of club members |
| `name` | `string` | Club name |
| `pagination` | `Record<string, any>` |  |
| `url` | `string` | Club URL |
| `username` | `string` | User's username |

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
| `count` | `number` | Genre's entry count |
| `mal_id` | `number` | MyAnimeList ID |
| `name` | `string` | Genre Name |
| `url` | `string` | MyAnimeList URL |

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
| `approved` | `boolean` | Whether the entry is pending approval on MAL or not |
| `author_url` | `string` | Author Profile URL |
| `author_username` | `string` | Author MyAnimeList Username |
| `authors` | `any[]` |  |
| `background` | `string` | Background |
| `chapters` | `number` | Chapter count |
| `character` | `Record<string, any>` |  |
| `comments` | `number` | Comment count |
| `completed` | `number` | Number of users who have completed the resource |
| `data` | `any[]` |  |
| `date` | `string` | Post Date ISO8601 |
| `demographics` | `any[]` |  |
| `dropped` | `number` | Number of users who have dropped the resource |
| `entry` | `Record<string, any>` | Related entries |
| `explicit_genres` | `any[]` |  |
| `external` | `any[]` |  |
| `favorites` | `number` | Number of users who have favorited this entry |
| `genres` | `any[]` |  |
| `id` | `string` |  |
| `images` | `Record<string, any>` |  |
| `jpg` | `Record<string, any>` | Available images in JPG |
| `last_comment` | `Record<string, any>` | Last comment details |
| `mal_id` | `number` | MyAnimeList ID |
| `members` | `number` | Number of users who have added this entry to their list |
| `moreinfo` | `string` | Additional information on the entry |
| `name` | `string` |  |
| `on_hold` | `number` | Number of users who have put the resource on hold |
| `pagination` | `Record<string, any>` |  |
| `plan_to_read` | `number` | Number of users who have planned to read the resource |
| `popularity` | `number` | Popularity |
| `published` | `Record<string, any>` | Date range |
| `publishing` | `boolean` | Publishing boolean |
| `rank` | `number` | Ranking |
| `reading` | `number` | Number of users reading the resource |
| `relation` | `string` | Relation type |
| `relations` | `any[]` |  |
| `role` | `string` | Character's Role |
| `score` | `number` | Score |
| `scored_by` | `number` | Number of users |
| `scores` | `any[]` |  |
| `serializations` | `any[]` |  |
| `status` | `string` | Publishing status |
| `synopsis` | `string` | Synopsis |
| `themes` | `any[]` |  |
| `title` | `string` | Title |
| `title_english` | `string` | English Title |
| `title_japanese` | `string` | Japanese Title |
| `title_synonyms` | `any[]` | Other Titles |
| `titles` | `any[]` | All Titles |
| `total` | `number` | Total number of users who have the resource added to their lists |
| `type` | `string` | Manga Type |
| `url` | `string` | MyAnimeList URL |
| `volumes` | `number` | Volume count |
| `webp` | `Record<string, any>` | Available images in WEBP |

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
| `about` | `string` | Biography |
| `alternate_names` | `any[]` | Other Names |
| `anime` | `any[]` |  |
| `birthday` | `string` | Birthday Date ISO8601 |
| `character` | `Record<string, any>` |  |
| `data` | `any[]` |  |
| `family_name` | `string` | Family Name |
| `favorites` | `number` | Number of users who have favorited this entry |
| `given_name` | `string` | Given Name |
| `id` | `string` |  |
| `images` | `Record<string, any>` |  |
| `jpg` | `Record<string, any>` | Available images in JPG |
| `mal_id` | `number` | MyAnimeList ID |
| `manga` | `any[]` |  |
| `name` | `string` | Name |
| `pagination` | `Record<string, any>` |  |
| `position` | `string` | Person's position |
| `role` | `string` | Person's Character's role in the anime |
| `url` | `string` | MyAnimeList URL |
| `voices` | `any[]` |  |
| `website_url` | `string` | Person's website URL |

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
| `about` | `string` | About the Producer |
| `count` | `number` | Producers's anime count |
| `data` | `any[]` |  |
| `established` | `string` | Established Date ISO8601 |
| `external` | `any[]` |  |
| `favorites` | `number` | Producers's member favorites count |
| `id` | `string` |  |
| `images` | `Record<string, any>` |  |
| `mal_id` | `number` | MyAnimeList ID |
| `name` | `string` |  |
| `pagination` | `Record<string, any>` |  |
| `titles` | `any[]` | All titles |
| `url` | `string` | MyAnimeList URL |

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
| `about` | `string` | Biography |
| `aired` | `Record<string, any>` | Date range |
| `airing` | `boolean` | Airing boolean |
| `alternate_names` | `any[]` | Other Names |
| `approved` | `boolean` | Whether the entry is pending approval on MAL or not |
| `authors` | `any[]` |  |
| `background` | `string` | Background |
| `birthday` | `string` | Birthday Date ISO8601 |
| `broadcast` | `Record<string, any>` | Broadcast Details |
| `chapters` | `number` | Chapter count |
| `demographics` | `any[]` |  |
| `duration` | `string` | Parsed raw duration |
| `episodes` | `number` | Episode count |
| `explicit_genres` | `any[]` |  |
| `family_name` | `string` | Family Name |
| `favorites` | `number` | Number of users who have favorited this entry |
| `gender` | `string` | User Gender |
| `genres` | `any[]` |  |
| `given_name` | `string` | Given Name |
| `images` | `Record<string, any>` |  |
| `joined` | `string` | Joined Date ISO8601 |
| `last_online` | `string` | Last Online Date ISO8601 |
| `licensors` | `any[]` |  |
| `location` | `string` | Location |
| `mal_id` | `number` | MyAnimeList ID |
| `members` | `number` | Number of users who have added this entry to their list |
| `name` | `string` | Name |
| `name_kanji` | `string` | Name |
| `nicknames` | `any[]` | Other Names |
| `popularity` | `number` | Popularity |
| `producers` | `any[]` |  |
| `published` | `Record<string, any>` | Date range |
| `publishing` | `boolean` | Publishing boolean |
| `rank` | `number` | Ranking |
| `rating` | `string` | Anime audience rating |
| `score` | `number` | Score |
| `scored_by` | `number` | Number of users |
| `season` | `string` | Season |
| `serializations` | `any[]` |  |
| `source` | `string` | Original Material/Source adapted from |
| `status` | `string` | Airing status |
| `studios` | `any[]` |  |
| `synopsis` | `string` | Synopsis |
| `themes` | `any[]` |  |
| `title` | `string` | Title |
| `title_english` | `string` | English Title |
| `title_japanese` | `string` | Japanese Title |
| `title_synonyms` | `any[]` | Other Titles |
| `titles` | `any[]` | All titles |
| `trailer` | `Record<string, any>` | Youtube Details |
| `type` | `string` | Anime Type |
| `url` | `string` | MyAnimeList URL |
| `username` | `string` | MyAnimeList Username |
| `volumes` | `number` | Volume count |
| `website_url` | `string` | Person's website URL |
| `year` | `number` | Year |

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
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |
| `pagination` | `Record<string, any>` |  |
| `seasons` | `any[]` | List of available seasons |
| `year` | `number` | Year |

#### Example: Load

```ts
const season = await client.Season().load({ season: 'season', year: 1 })
```

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
| `anime` | `any[]` | Favorite Anime |
| `birthday` | `string` | Birthday Date ISO8601 |
| `characters` | `any[]` | Favorite Characters |
| `data` | `any[]` |  |
| `external` | `any[]` |  |
| `gender` | `string` | User Gender |
| `id` | `string` |  |
| `images` | `Record<string, any>` |  |
| `joined` | `string` | Joined Date ISO8601 |
| `last_online` | `string` | Last Online Date ISO8601 |
| `location` | `string` | Location |
| `mal_id` | `number` | MyAnimeList ID |
| `manga` | `any[]` | Favorite Manga |
| `pagination` | `Record<string, any>` |  |
| `people` | `any[]` | Favorite People |
| `statistics` | `Record<string, any>` |  |
| `url` | `string` | MyAnimeList URL |
| `username` | `string` | MyAnimeList Username |

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
| `about` | `string` | User About. |

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
| `date` | `string` | Date ISO8601 |
| `entry` | `Record<string, any>` | Parsed URL Data |
| `increment` | `number` | Number of episodes/chapters watched/read |

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
| `anime` | `Record<string, any>` | Anime Statistics |
| `manga` | `Record<string, any>` | Manga Statistics |

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
| `anime` | `any[]` | Last updated Anime |
| `manga` | `any[]` | Last updated Manga |

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
