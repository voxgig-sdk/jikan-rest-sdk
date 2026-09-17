

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { JikanRestSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('RandomEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JIKAN_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('JIKAN_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JikanRestSDK.test()
    const ent = testsdk.Random()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JIKAN_REST_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'random.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"random","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /random/anime","json":"{\"operationId\":\"getRandomAnime\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"description\":\"Anime Resource\",\"properties\":{\"aired\":{\"description\":\"Date range\",\"properties\":{\"from\":{\"description\":\"Date ISO8601\",\"nullable\":true,\"type\":\"string\"},\"prop\":{\"description\":\"Date Prop\",\"properties\":{\"from\":{\"description\":\"Date Prop From\",\"properties\":{\"day\":{\"description\":\"Day\",\"nullable\":true,\"type\":\"integer\"},\"month\":{\"description\":\"Month\",\"nullable\":true,\"type\":\"integer\"},\"year\":{\"description\":\"Year\",\"nullable\":true,\"type\":\"integer\"}},\"type\":\"object\"},\"string\":{\"description\":\"Raw parsed string\",\"nullable\":true,\"type\":\"string\"},\"to\":{\"description\":\"Date Prop To\",\"properties\":{\"day\":{\"description\":\"Day\",\"nullable\":true,\"type\":\"integer\"},\"month\":{\"description\":\"Month\",\"nullable\":true,\"type\":\"integer\"},\"year\":{\"description\":\"Year\",\"nullable\":true,\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"},\"to\":{\"description\":\"Date ISO8601\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"airing\":{\"description\":\"Airing boolean\",\"type\":\"boolean\"},\"approved\":{\"description\":\"Whether the entry is pending approval on MAL or not\",\"type\":\"boolean\"},\"background\":{\"description\":\"Background\",\"nullable\":true,\"type\":\"string\"},\"broadcast\":{\"description\":\"Broadcast Details\",\"properties\":{\"day\":{\"description\":\"Day of the week\",\"nullable\":true,\"type\":\"string\"},\"string\":{\"description\":\"Raw parsed broadcast string\",\"nullable\":true,\"type\":\"string\"},\"time\":{\"description\":\"Time in 24 hour format\",\"nullable\":true,\"type\":\"string\"},\"timezone\":{\"description\":\"Timezone (Tz Database format https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"demographics\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"duration\":{\"description\":\"Parsed raw duration\",\"nullable\":true,\"type\":\"string\"},\"episodes\":{\"description\":\"Episode count\",\"nullable\":true,\"type\":\"integer\"},\"explicit_genres\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"favorites\":{\"description\":\"Number of users who have favorited this entry\",\"nullable\":true,\"type\":\"integer\"},\"genres\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"licensors\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"members\":{\"description\":\"Number of users who have added this entry to their list\",\"nullable\":true,\"type\":\"integer\"},\"popularity\":{\"description\":\"Popularity\",\"nullable\":true,\"type\":\"integer\"},\"producers\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"rank\":{\"description\":\"Ranking\",\"nullable\":true,\"type\":\"integer\"},\"rating\":{\"description\":\"Anime audience rating\",\"enum\":[\"G - All Ages\",\"PG - Children\",\"PG-13 - Teens 13 or older\",\"R - 17+ (violence & profanity)\",\"R+ - Mild Nudity\",\"Rx - Hentai\"],\"nullable\":true,\"type\":\"string\"},\"score\":{\"description\":\"Score\",\"format\":\"float\",\"nullable\":true,\"type\":\"number\"},\"scored_by\":{\"description\":\"Number of users\",\"nullable\":true,\"type\":\"integer\"},\"season\":{\"description\":\"Season\",\"enum\":[\"summer\",\"winter\",\"spring\",\"fall\"],\"nullable\":true,\"type\":\"string\"},\"source\":{\"description\":\"Original Material/Source adapted from\",\"nullable\":true,\"type\":\"string\"},\"status\":{\"description\":\"Airing status\",\"enum\":[\"Finished Airing\",\"Currently Airing\",\"Not yet aired\"],\"nullable\":true,\"type\":\"string\"},\"studios\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"synopsis\":{\"description\":\"Synopsis\",\"nullable\":true,\"type\":\"string\"},\"themes\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"title\":{\"deprecated\":true,\"description\":\"Title\",\"type\":\"string\"},\"title_english\":{\"deprecated\":true,\"description\":\"English Title\",\"nullable\":true,\"type\":\"string\"},\"title_japanese\":{\"deprecated\":true,\"description\":\"Japanese Title\",\"nullable\":true,\"type\":\"string\"},\"title_synonyms\":{\"deprecated\":true,\"description\":\"Other Titles\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"titles\":{\"description\":\"All titles\",\"items\":{\"properties\":{\"title\":{\"description\":\"Title value\",\"type\":\"string\"},\"type\":{\"description\":\"Title type\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"trailer\":{\"description\":\"Youtube Details\",\"properties\":{\"embed_url\":{\"description\":\"Parsed Embed URL\",\"nullable\":true,\"type\":\"string\"},\"url\":{\"description\":\"YouTube URL\",\"nullable\":true,\"type\":\"string\"},\"youtube_id\":{\"description\":\"YouTube ID\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"type\":{\"description\":\"Anime Type\",\"enum\":[\"TV\",\"OVA\",\"Movie\",\"Special\",\"ONA\",\"Music\"],\"nullable\":true,\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"},\"year\":{\"description\":\"Year\",\"nullable\":true,\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Returns a random anime resource\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/random/anime","segments":[{"lit":"random"},{"lit":"anime"}],"select":{"$action":"anime"},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"active":true,"args":{},"contract":{"id":"GET /random/characters","json":"{\"operationId\":\"getRandomCharacters\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"description\":\"Character Resource\",\"properties\":{\"about\":{\"description\":\"Biography\",\"nullable\":true,\"type\":\"string\"},\"favorites\":{\"description\":\"Number of users who have favorited this entry\",\"type\":\"integer\"},\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Name\",\"type\":\"string\"},\"name_kanji\":{\"description\":\"Name\",\"nullable\":true,\"type\":\"string\"},\"nicknames\":{\"description\":\"Other Names\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Returns a random character resource\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/random/characters","segments":[{"lit":"random"},{"lit":"characters"}],"select":{"$action":"character"},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":1},{"active":true,"args":{},"contract":{"id":"GET /random/manga","json":"{\"operationId\":\"getRandomManga\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"description\":\"Manga Resource\",\"properties\":{\"approved\":{\"description\":\"Whether the entry is pending approval on MAL or not\",\"type\":\"boolean\"},\"authors\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"background\":{\"description\":\"Background\",\"nullable\":true,\"type\":\"string\"},\"chapters\":{\"description\":\"Chapter count\",\"nullable\":true,\"type\":\"integer\"},\"demographics\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"explicit_genres\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"favorites\":{\"description\":\"Number of users who have favorited this entry\",\"nullable\":true,\"type\":\"integer\"},\"genres\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"members\":{\"description\":\"Number of users who have added this entry to their list\",\"nullable\":true,\"type\":\"integer\"},\"popularity\":{\"description\":\"Popularity\",\"nullable\":true,\"type\":\"integer\"},\"published\":{\"description\":\"Date range\",\"properties\":{\"from\":{\"description\":\"Date ISO8601\",\"nullable\":true,\"type\":\"string\"},\"prop\":{\"description\":\"Date Prop\",\"properties\":{\"from\":{\"description\":\"Date Prop From\",\"properties\":{\"day\":{\"description\":\"Day\",\"nullable\":true,\"type\":\"integer\"},\"month\":{\"description\":\"Month\",\"nullable\":true,\"type\":\"integer\"},\"year\":{\"description\":\"Year\",\"nullable\":true,\"type\":\"integer\"}},\"type\":\"object\"},\"string\":{\"description\":\"Raw parsed string\",\"nullable\":true,\"type\":\"string\"},\"to\":{\"description\":\"Date Prop To\",\"properties\":{\"day\":{\"description\":\"Day\",\"nullable\":true,\"type\":\"integer\"},\"month\":{\"description\":\"Month\",\"nullable\":true,\"type\":\"integer\"},\"year\":{\"description\":\"Year\",\"nullable\":true,\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"},\"to\":{\"description\":\"Date ISO8601\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"publishing\":{\"description\":\"Publishing boolean\",\"type\":\"boolean\"},\"rank\":{\"description\":\"Ranking\",\"nullable\":true,\"type\":\"integer\"},\"score\":{\"description\":\"Score\",\"format\":\"float\",\"nullable\":true,\"type\":\"number\"},\"scored_by\":{\"description\":\"Number of users\",\"nullable\":true,\"type\":\"integer\"},\"serializations\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"status\":{\"description\":\"Publishing status\",\"enum\":[\"Finished\",\"Publishing\",\"On Hiatus\",\"Discontinued\",\"Not yet published\"],\"type\":\"string\"},\"synopsis\":{\"description\":\"Synopsis\",\"nullable\":true,\"type\":\"string\"},\"themes\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"title\":{\"deprecated\":true,\"description\":\"Title\",\"type\":\"string\"},\"title_english\":{\"deprecated\":true,\"description\":\"English Title\",\"nullable\":true,\"type\":\"string\"},\"title_japanese\":{\"deprecated\":true,\"description\":\"Japanese Title\",\"nullable\":true,\"type\":\"string\"},\"titles\":{\"description\":\"All Titles\",\"items\":{\"properties\":{\"title\":{\"description\":\"Title value\",\"type\":\"string\"},\"type\":{\"description\":\"Title type\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"Manga Type\",\"enum\":[\"Manga\",\"Novel\",\"Light Novel\",\"One-shot\",\"Doujinshi\",\"Manhua\",\"Manhwa\",\"OEL\"],\"nullable\":true,\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"},\"volumes\":{\"description\":\"Volume count\",\"nullable\":true,\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Returns a random manga resource\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/random/manga","segments":[{"lit":"random"},{"lit":"manga"}],"select":{"$action":"manga"},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":2},{"active":true,"args":{},"contract":{"id":"GET /random/people","json":"{\"operationId\":\"getRandomPeople\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"description\":\"Person Resource\",\"properties\":{\"about\":{\"description\":\"Biography\",\"nullable\":true,\"type\":\"string\"},\"alternate_names\":{\"description\":\"Other Names\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"birthday\":{\"description\":\"Birthday Date ISO8601\",\"nullable\":true,\"type\":\"string\"},\"family_name\":{\"description\":\"Family Name\",\"nullable\":true,\"type\":\"string\"},\"favorites\":{\"description\":\"Number of users who have favorited this entry\",\"type\":\"integer\"},\"given_name\":{\"description\":\"Given Name\",\"nullable\":true,\"type\":\"string\"},\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Name\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"},\"website_url\":{\"description\":\"Person's website URL\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Returns a random person resource\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/random/people","segments":[{"lit":"random"},{"lit":"people"}],"select":{"$action":"person"},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":3},{"active":true,"args":{},"contract":{"id":"GET /random/users","json":"{\"operationId\":\"getRandomUsers\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"birthday\":{\"description\":\"Birthday Date ISO8601\",\"nullable\":true,\"type\":\"string\"},\"gender\":{\"description\":\"User Gender\",\"nullable\":true,\"type\":\"string\"},\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"joined\":{\"description\":\"Joined Date ISO8601\",\"nullable\":true,\"type\":\"string\"},\"last_online\":{\"description\":\"Last Online Date ISO8601\",\"nullable\":true,\"type\":\"string\"},\"location\":{\"description\":\"Location\",\"nullable\":true,\"type\":\"string\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"nullable\":true,\"type\":\"integer\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"},\"username\":{\"description\":\"MyAnimeList Username\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Returns a random user profile resource\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/random/users","segments":[{"lit":"random"},{"lit":"users"}],"select":{"$action":"user"},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":4}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"random","name__orig":"random","Name":"Random","name_":"random","name-":"random","NAME":"RANDOM","index$":10}, {"active":true,"entity":"random","key$":"BasicRandomFlow","kind":"basic","name":"BasicRandomFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"random_ref01","srcdatavar":"random_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-random_ref01"}}],"index$":0}]}, 'Random')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let random_ref01_data = Object.values(setup.data.existing.random)[0] as any

    // LOAD
    const random_ref01_ent = client.Random()
    const random_ref01_match_dt0: any = {}
    const random_ref01_data_dt0 = (await random_ref01_ent.load(random_ref01_match_dt0)).data()
    assert(null != random_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/random/RandomTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = JikanRestSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['random01','random02','random03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JIKAN_REST_TEST_RANDOM_ENTID': idmap,
    'JIKAN_REST_TEST_LIVE': 'FALSE',
    'JIKAN_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JIKAN_REST_TEST_RANDOM_ENTID']

  const live = 'TRUE' === env.JIKAN_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JIKAN_REST_TEST_RANDOM_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new JikanRestSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.JIKAN_REST_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
