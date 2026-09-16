# Jikan API

[Jikan](https://jikan.moe) is an **Unofficial** MyAnimeList API. It scrapes the website to satisfy the need for a complete API - which MyAnimeList lacks. # Information ⚡ Jikan is powered by its awesome backers - 🙏 [Become a backer](https://www.patreon.com/jikan) ## Rate Limiting | Duration | Requests | |----|----| | Daily | **Unlimited** | | Per Minute | 60 requests | | Per Second | 3 requests | Note: It&#39;s still possible to get rate limited from MyAnimeList.net instead. ## JSON Notes - Any property (except arrays or objects) whose value does not exist or is undetermined, will be `null`. - Any array or object property whose value does not exist or is undetermined, will be empty. - Any `score` property whose value does not exist or is undetermined, will be `0`. - All dates and timestamps are returned in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) format and in UTC timezone ## Caching By **CACHING**, we refer to the data parsed from MyAnimeList which is stored temporarily on our servers to provide better API performance. All requests are cached for **24 hours**. The following response headers will detail cache information. | Header | Remarks | | ---- | ---- | | `Expires` | Cache expiry date | | `Last-Modified` | Cache set date | | `X-Request-Fingerprint` | Unique request fingerprint (only for cachable requests, not queries) | Note: `X-Request-Fingerprint` will only be available on single resource requests and their child endpoints. for example `/anime/1`, `/anime/1/relations`. They won&#39;t be available on pages which perform queries, like /anime, or /top/anime, etc. ## Allowed HTTP(s) requests **Jikan REST API does not provide authenticated requests for MyAnimeList.** This means you can not use it to update your anime/manga list. Only GET requests are supported which return READ-ONLY data. ## HTTP Responses All error responses are accompanied by a JSON Error response. | Exception | HTTP Status | Remarks | | ---- | ---- | ---- | | N/A | `200 - OK` | The request was successful | | N/A | `304 - Not Modified` | You have the latest data (Cache Validation response) | | `BadRequestException`,`ValidationException` | `400 - Bad Request` | You&#39;ve made an invalid request. Recheck documentation | | `BadResponseException` | `404 - Not Found` | The resource was not found or MyAnimeList responded with a `404` | | `BadRequestException` | `405 - Method Not Allowed` | Requested Method is not supported for resource. Only `GET` requests are allowed | | `RateLimitException` | `429 - Too Many Request` | You are being rate limited by Jikan or MyAnimeList is rate-limiting our servers (specified in the error response) | | `UpstreamException`,`ParserException`,etc. | `500 - Internal Server Error` | Something didn&#39;t work. Try again later. If you see an error response with a `report_url` URL, please click on it to open an auto-generated GitHub issue | | `ServiceUnavailableException` | `503 - Service Unavailable` | In most cases this is intentionally done if the service is down for maintenance. | ## JSON Error Response ```json &#123; &quot;status&quot;: 500, &quot;type&quot;: &quot;InternalException&quot;, &quot;message&quot;: &quot;Exception Message&quot;, &quot;error&quot;: &quot;Exception Trace&quot;, &quot;report_url&quot;: &quot;https://github.com...&quot; &#125; ``` | Property | Remarks | | ---- | ---- | | `status` | Returned HTTP Status Code | | `type` | Thrown Exception | | `message` | Human-readable error message | | `error` | Error response and trace from the API | | `report_url` | Clicking this would redirect you to a generated GitHub issue | ## Cache Validation - All requests return a `ETag` header which is an MD5 hash of the response - You can use this hash to verify if there&#39;s new or updated content by suppliying it as the value for the `If-None-Match` in your next request header - You will get a HTTP `304 - Not Modified` response if the content has not changed - If the content has changed, you&#39;ll get a HTTP `200 - OK` response with the updated JSON response ![Cache Validation](https://i.imgur.com/925ozVn.png &#39;Cache Validation&#39;) ## Disclaimer - Jikan is not affiliated with MyAnimeList.net. - Jikan is a free, open-source API. Please use it responsibly. ---- By using the API, you are agreeing to Jikan&#39;s [terms of use](https://jikan.moe/terms) policy. [v3 Documentation](https://jikan.docs.apiary.io/) - [Wrappers/SDKs](https://github.com/jikan-me/jikan#wrappers) - [Report an issue](https://github.com/jikan-me/jikan-rest/issues/new) - [Host your own server](https://github.com/jikan-me/jikan-rest)

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 25 entities and 100 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Anime

Results: Returns search results for anime; Returns top anime; Returns anime reviews; Returns a list of anime episodes; Returns a list of forum topics related to the entry; Returns a list of news articles related to the entry; Returns a list of users who have added/updated/removed the entry on their list; Returns episode videos related to the entry; Returns anime characters resource; Returns anime external links; Returns pictures related to the entry; Returns anime recommendations; Returns anime relations; Returns anime staff resource; Returns anime streaming links; Returns a single anime episode resource; Returns anime resource; Returns complete anime resource data; Returns anime statistics; Returns anime themes; Returns videos related to the entry.

SDK operations: `list`, `load`.

Key fields to recognise:

- `aired`: Date range
- `airing`: Airing boolean
- `approved`: Whether the entry is pending approval on MAL or not
- `author_url`: Author Profile URL
- `author_username`: Author MyAnimeList Username

### Character

Results: Returns search results for characters; Returns top characters; Returns anime that character is in; Returns manga that character is in; Returns pictures related to the entry; Returns the character&#39;s voice actors; Returns character resource; Returns complete character resource data.

SDK operations: `list`, `load`.

Key fields to recognise:

- `about`: Biography
- `favorites`: Number of users who have favorited this entry
- `image_url`: Image URL JPG
- `language`: Character&#39;s Role
- `large_image_url`: Image URL JPG

### Club

Results: Returns search results for clubs; Returns Club Members Resource; Returns Club Staff; Returns Club Resource; Returns Club Relations.

SDK operations: `list`, `load`.

Key fields to recognise:

- `access`: Club access
- `category`: Club Category
- `created`: Date Created ISO8601
- `mal_id`: MyAnimeList ID
- `members`: Number of club members

### External

Results: Returns user&#39;s external links.

SDK operations: `list`.

### Genre

Results: Returns entry genres, explicit_genres, themes and demographics.

SDK operations: `list`.

Key fields to recognise:

- `count`: Genre&#39;s entry count
- `mal_id`: MyAnimeList ID
- `name`: Genre Name
- `url`: MyAnimeList URL

### Magazine

Results: Returns magazines collection.

SDK operations: `list`.

### Manga

Results: Returns search results for manga; Returns top manga; Returns manga reviews; Returns a list of manga forum topics; Returns a list of manga news topics; Returns manga user updates; Returns manga characters resource; Returns manga external links; Returns a list of manga pictures; Returns manga recommendations; Returns manga relations; Returns pictures related to the entry; Returns complete manga resource data; Returns manga moreinfo; Returns anime statistics.

SDK operations: `list`, `load`.

Key fields to recognise:

- `approved`: Whether the entry is pending approval on MAL or not
- `author_url`: Author Profile URL
- `author_username`: Author MyAnimeList Username
- `background`: Background
- `chapters`: Chapter count

### PeopleSearch

Results: Returns top people.

SDK operations: `list`.

### Person

Results: Returns search results for people; Returns person&#39;s anime staff positions; Returns person&#39;s published manga works; Returns a list of pictures of the person; Returns person&#39;s voice acting roles; Returns pictures related to the entry; Returns complete character resource data.

SDK operations: `list`, `load`.

Key fields to recognise:

- `about`: Biography
- `alternate_names`: Other Names
- `birthday`: Birthday Date ISO8601
- `family_name`: Family Name
- `favorites`: Number of users who have favorited this entry

### Producer

Results: Returns producers collection; Returns producer&#39;s external links; Returns producer resource.

SDK operations: `list`, `load`.

Key fields to recognise:

- `about`: About the Producer
- `count`: Producers&#39;s anime count
- `established`: Established Date ISO8601
- `favorites`: Producers&#39;s member favorites count
- `mal_id`: MyAnimeList ID

### Random

Results: Returns a random anime resource; Returns a random character resource; Returns a random manga resource; Returns a random person resource; Returns a random user profile resource.

SDK operations: `load`.

Key fields to recognise:

- `about`: Biography
- `aired`: Date range
- `airing`: Airing boolean
- `alternate_names`: Other Names
- `approved`: Whether the entry is pending approval on MAL or not

### Recommendation

Results: Returns Recent Anime Recommendations; Returns recent anime recommendations; Returns recent manga recommendations.

SDK operations: `list`.

### Review

Results: Returns recent anime reviews; Returns recent manga reviews.

SDK operations: `load`.

### Schedule

Results: Returns weekly schedule.

SDK operations: `list`.

### Season

Results: Returns current seasonal anime; Returns upcoming season&#39;s anime; Returns available list of seasons; Returns seasonal anime.

SDK operations: `list`, `load`.

Key fields to recognise:

- `seasons`: List of available seasons
- `year`: Year

### Top

Results: Returns top reviews.

SDK operations: `load`.

### User

Results: Returns search results for users; Returns user anime list; Returns user manga list; Returns user reviews; Returns username by ID search; Returns user profile; Returns user favorites; Returns complete user resource data.

SDK operations: `list`, `load`.

Key fields to recognise:

- `anime`: Favorite Anime
- `birthday`: Birthday Date ISO8601
- `characters`: Favorite Characters
- `gender`: User Gender
- `joined`: Joined Date ISO8601

### UserAbout

Results: Returns user about in raw HTML.

SDK operations: `list`.

Key fields to recognise:

- `about`: User About. NOTE: About information is customizable by users through BBCode on MyAnimeList. This means users can add multimedia content, different text sizes, etc. Due to this freeform, Jikan returns parsed HTML. Validate on your end!

### UserClub

Results: Returns user clubs.

SDK operations: `list`.

### UserFriend

Results: Returns user friends.

SDK operations: `list`.

### UserHistory

Results: Returns user history (past 30 days).

SDK operations: `list`.

Key fields to recognise:

- `date`: Date ISO8601
- `entry`: Parsed URL Data
- `increment`: Number of episodes/chapters watched/read

### UserStatistic

Results: Returns user statistics.

SDK operations: `load`.

Key fields to recognise:

- `anime`: Anime Statistics
- `manga`: Manga Statistics

### UserUpdate

Results: Returns user updates.

SDK operations: `load`.

Key fields to recognise:

- `anime`: Last updated Anime
- `manga`: Last updated Manga

### WatchEpisode

Results: Returns Recently Added Episodes; Returns Popular Episodes.

SDK operations: `list`.

### WatchPromo

Results: Returns Recently Added Promotional Videos; Returns Popular Promotional Videos.

SDK operations: `list`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Anime | `list` | `GET /anime` | See reference |
| Anime | `list` | `GET /top/anime` | See reference |
| Anime | `list` | `GET /anime/{id}/reviews` | See reference |
| Anime | `list` | `GET /anime/{id}/episodes` | See reference |
| Anime | `list` | `GET /anime/{id}/forum` | See reference |
| Anime | `list` | `GET /anime/{id}/news` | See reference |
| Anime | `list` | `GET /anime/{id}/userupdates` | See reference |
| Anime | `list` | `GET /anime/{id}/videos/episodes` | See reference |
| Anime | `list` | `GET /anime/{id}/characters` | See reference |
| Anime | `list` | `GET /anime/{id}/external` | See reference |
| Anime | `list` | `GET /anime/{id}/pictures` | See reference |
| Anime | `list` | `GET /anime/{id}/recommendations` | See reference |
| Anime | `list` | `GET /anime/{id}/relations` | See reference |
| Anime | `list` | `GET /anime/{id}/staff` | See reference |
| Anime | `list` | `GET /anime/{id}/streaming` | See reference |
| Anime | `load` | `GET /anime/{id}/episodes/{episode}` | See reference |
| Anime | `load` | `GET /anime/{id}` | See reference |
| Anime | `load` | `GET /anime/{id}/full` | See reference |
| Anime | `load` | `GET /anime/{id}/moreinfo` | See reference |
| Anime | `load` | `GET /anime/{id}/statistics` | See reference |
| Anime | `load` | `GET /anime/{id}/themes` | See reference |
| Anime | `load` | `GET /anime/{id}/videos` | See reference |
| Character | `list` | `GET /characters` | See reference |
| Character | `list` | `GET /top/characters` | See reference |
| Character | `list` | `GET /characters/{id}/anime` | See reference |
| Character | `list` | `GET /characters/{id}/manga` | See reference |
| Character | `list` | `GET /characters/{id}/pictures` | See reference |
| Character | `list` | `GET /characters/{id}/voices` | See reference |
| Character | `load` | `GET /characters/{id}` | See reference |
| Character | `load` | `GET /characters/{id}/full` | See reference |
| Club | `list` | `GET /clubs` | See reference |
| Club | `list` | `GET /clubs/{id}/members` | See reference |
| Club | `list` | `GET /clubs/{id}/staff` | See reference |
| Club | `load` | `GET /clubs/{id}` | See reference |
| Club | `load` | `GET /clubs/{id}/relations` | See reference |
| External | `list` | `GET /users/{username}/external` | See reference |
| Genre | `list` | `GET /genres/anime` | See reference |
| Genre | `list` | `GET /genres/manga` | See reference |
| Magazine | `list` | `GET /magazines` | See reference |
| Manga | `list` | `GET /manga` | See reference |
| Manga | `list` | `GET /top/manga` | See reference |
| Manga | `list` | `GET /manga/{id}/reviews` | See reference |
| Manga | `list` | `GET /manga/{id}/forum` | See reference |
| Manga | `list` | `GET /manga/{id}/news` | See reference |
| Manga | `list` | `GET /manga/{id}/userupdates` | See reference |
| Manga | `list` | `GET /manga/{id}/characters` | See reference |
| Manga | `list` | `GET /manga/{id}/external` | See reference |
| Manga | `list` | `GET /manga/{id}/pictures` | See reference |
| Manga | `list` | `GET /manga/{id}/recommendations` | See reference |
| Manga | `list` | `GET /manga/{id}/relations` | See reference |
| Manga | `load` | `GET /manga/{id}` | See reference |
| Manga | `load` | `GET /manga/{id}/full` | See reference |
| Manga | `load` | `GET /manga/{id}/moreinfo` | See reference |
| Manga | `load` | `GET /manga/{id}/statistics` | See reference |
| PeopleSearch | `list` | `GET /top/people` | See reference |
| Person | `list` | `GET /people` | See reference |
| Person | `list` | `GET /people/{id}/anime` | See reference |
| Person | `list` | `GET /people/{id}/manga` | See reference |
| Person | `list` | `GET /people/{id}/pictures` | See reference |
| Person | `list` | `GET /people/{id}/voices` | See reference |
| Person | `load` | `GET /people/{id}` | See reference |
| Person | `load` | `GET /people/{id}/full` | See reference |
| Producer | `list` | `GET /producers` | See reference |
| Producer | `list` | `GET /producers/{id}/external` | See reference |
| Producer | `load` | `GET /producers/{id}` | See reference |
| Producer | `load` | `GET /producers/{id}/full` | See reference |
| Random | `load` | `GET /random/anime` | See reference |
| Random | `load` | `GET /random/characters` | See reference |
| Random | `load` | `GET /random/manga` | See reference |
| Random | `load` | `GET /random/people` | See reference |
| Random | `load` | `GET /random/users` | See reference |
| Recommendation | `list` | `GET /users/{username}/recommendations` | See reference |
| Recommendation | `list` | `GET /recommendations/anime` | See reference |
| Recommendation | `list` | `GET /recommendations/manga` | See reference |
| Review | `load` | `GET /reviews/anime` | See reference |
| Review | `load` | `GET /reviews/manga` | See reference |
| Schedule | `list` | `GET /schedules` | See reference |
| Season | `list` | `GET /seasons/now` | See reference |
| Season | `list` | `GET /seasons/upcoming` | See reference |
| Season | `list` | `GET /seasons` | See reference |
| Season | `load` | `GET /seasons/{year}/{season}` | See reference |
| Top | `load` | `GET /top/reviews` | See reference |
| User | `list` | `GET /users` | See reference |
| User | `load` | `GET /users/{username}/animelist` | See reference |
| User | `load` | `GET /users/{username}/mangalist` | See reference |
| User | `load` | `GET /users/{username}/reviews` | See reference |
| User | `load` | `GET /users/userbyid/{id}` | See reference |
| User | `load` | `GET /users/{username}` | See reference |
| User | `load` | `GET /users/{username}/favorites` | See reference |
| User | `load` | `GET /users/{username}/full` | See reference |
| UserAbout | `list` | `GET /users/{username}/about` | See reference |
| UserClub | `list` | `GET /users/{username}/clubs` | See reference |
| UserFriend | `list` | `GET /users/{username}/friends` | See reference |
| UserHistory | `list` | `GET /users/{username}/history` | See reference |
| UserStatistic | `load` | `GET /users/{username}/statistics` | See reference |
| UserUpdate | `load` | `GET /users/{username}/userupdates` | See reference |
| WatchEpisode | `list` | `GET /watch/episodes` | See reference |
| WatchEpisode | `list` | `GET /watch/episodes/popular` | See reference |
| WatchPromo | `list` | `GET /watch/promos` | See reference |
| WatchPromo | `list` | `GET /watch/promos/popular` | See reference |

## Connect to the API

- Jikan REST API: `https://api.jikan.moe/v4`

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `jikan-rest_list`: List records for an entity. Supported entities: `anime`, `character`, `club`, `external`, `genre`, `magazine`, `manga`, `people_search`, `person`, `producer`, `recommendation`, `schedule`, `season`, `user`, `user_about`, `user_club`, `user_friend`, `user_history`, `watch_episode`, `watch_promo`.
- `jikan-rest_load`: Load one record for an entity. Supported entities: `anime`, `character`, `club`, `manga`, `person`, `producer`, `random`, `review`, `season`, `top`, `user`, `user_statistic`, `user_update`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

