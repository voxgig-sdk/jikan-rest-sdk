

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


describe('ScheduleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JIKAN_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('JIKAN_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JikanRestSDK.test()
    const ent = testsdk.Schedule()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JIKAN_REST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'schedule.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"data","req":false,"type":"`$ARRAY`","index$":0},{"active":true,"name":"pagination","req":false,"type":"`$OBJECT`","index$":1}],"name":"schedule","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"filter","orig":"filter","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"kid","orig":"kid","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"kind":"query","name":"sfw","orig":"sfw","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"unapproved","orig":"unapproved","reqd":false,"type":"`$BOOLEAN`","index$":5}]},"contract":{"id":"GET /schedules","json":"{\"operationId\":\"getSchedules\",\"parameters\":[{\"description\":\"Filter by day\",\"in\":\"query\",\"name\":\"filter\",\"required\":false,\"schema\":{\"enum\":[\"monday\",\"tuesday\",\"wednesday\",\"thursday\",\"friday\",\"saturday\",\"sunday\",\"unknown\",\"other\"],\"type\":\"string\"}},{\"description\":\"When supplied, it will filter entries with the `Kids` Genre Demographic. When supplied as `kids=true`, it will return only Kid entries and when supplied as `kids=false`, it will filter out any Kid entries. Defaults to `false`.\",\"in\":\"query\",\"name\":\"kids\",\"required\":false,\"schema\":{\"enum\":[\"true\",\"false\"],\"type\":\"string\"}},{\"description\":\"'Safe For Work'. When supplied, it will filter entries with the `Hentai` Genre. When supplied as `sfw=true`, it will return only SFW entries and when supplied as `sfw=false`, it will filter out any Hentai entries. Defaults to `false`.\",\"in\":\"query\",\"name\":\"sfw\",\"required\":false,\"schema\":{\"enum\":[\"true\",\"false\"],\"type\":\"string\"}},{\"description\":\"This is a flag. When supplied it will include entries which are unapproved. Unapproved entries on MyAnimeList are those that are user submitted and have not yet been approved by MAL to show up on other pages. They will have their own specifc pages and are often removed resulting in a 404 error. You do not need to pass a value to it. e.g usage: `?unapproved`\",\"in\":\"query\",\"name\":\"unapproved\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"in\":\"query\",\"name\":\"page\",\"schema\":{\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"allOf\":[{\"properties\":{\"data\":{\"items\":{\"description\":\"Anime Resource\",\"properties\":{\"aired\":{\"description\":\"Date range\",\"properties\":{\"from\":{\"description\":\"Date ISO8601\",\"nullable\":true,\"type\":\"string\"},\"prop\":{\"description\":\"Date Prop\",\"properties\":{\"from\":{\"description\":\"Date Prop From\",\"properties\":{\"day\":{\"description\":\"Day\",\"nullable\":true,\"type\":\"integer\"},\"month\":{\"description\":\"Month\",\"nullable\":true,\"type\":\"integer\"},\"year\":{\"description\":\"Year\",\"nullable\":true,\"type\":\"integer\"}},\"type\":\"object\"},\"string\":{\"description\":\"Raw parsed string\",\"nullable\":true,\"type\":\"string\"},\"to\":{\"description\":\"Date Prop To\",\"properties\":{\"day\":{\"description\":\"Day\",\"nullable\":true,\"type\":\"integer\"},\"month\":{\"description\":\"Month\",\"nullable\":true,\"type\":\"integer\"},\"year\":{\"description\":\"Year\",\"nullable\":true,\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"},\"to\":{\"description\":\"Date ISO8601\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"airing\":{\"description\":\"Airing boolean\",\"type\":\"boolean\"},\"approved\":{\"description\":\"Whether the entry is pending approval on MAL or not\",\"type\":\"boolean\"},\"background\":{\"description\":\"Background\",\"nullable\":true,\"type\":\"string\"},\"broadcast\":{\"description\":\"Broadcast Details\",\"properties\":{\"day\":{\"description\":\"Day of the week\",\"nullable\":true,\"type\":\"string\"},\"string\":{\"description\":\"Raw parsed broadcast string\",\"nullable\":true,\"type\":\"string\"},\"time\":{\"description\":\"Time in 24 hour format\",\"nullable\":true,\"type\":\"string\"},\"timezone\":{\"description\":\"Timezone (Tz Database format https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"demographics\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"duration\":{\"description\":\"Parsed raw duration\",\"nullable\":true,\"type\":\"string\"},\"episodes\":{\"description\":\"Episode count\",\"nullable\":true,\"type\":\"integer\"},\"explicit_genres\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"favorites\":{\"description\":\"Number of users who have favorited this entry\",\"nullable\":true,\"type\":\"integer\"},\"genres\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"licensors\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"members\":{\"description\":\"Number of users who have added this entry to their list\",\"nullable\":true,\"type\":\"integer\"},\"popularity\":{\"description\":\"Popularity\",\"nullable\":true,\"type\":\"integer\"},\"producers\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"rank\":{\"description\":\"Ranking\",\"nullable\":true,\"type\":\"integer\"},\"rating\":{\"description\":\"Anime audience rating\",\"enum\":[\"G - All Ages\",\"PG - Children\",\"PG-13 - Teens 13 or older\",\"R - 17+ (violence & profanity)\",\"R+ - Mild Nudity\",\"Rx - Hentai\"],\"nullable\":true,\"type\":\"string\"},\"score\":{\"description\":\"Score\",\"format\":\"float\",\"nullable\":true,\"type\":\"number\"},\"scored_by\":{\"description\":\"Number of users\",\"nullable\":true,\"type\":\"integer\"},\"season\":{\"description\":\"Season\",\"enum\":[\"summer\",\"winter\",\"spring\",\"fall\"],\"nullable\":true,\"type\":\"string\"},\"source\":{\"description\":\"Original Material/Source adapted from\",\"nullable\":true,\"type\":\"string\"},\"status\":{\"description\":\"Airing status\",\"enum\":[\"Finished Airing\",\"Currently Airing\",\"Not yet aired\"],\"nullable\":true,\"type\":\"string\"},\"studios\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"synopsis\":{\"description\":\"Synopsis\",\"nullable\":true,\"type\":\"string\"},\"themes\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"title\":{\"deprecated\":true,\"description\":\"Title\",\"type\":\"string\"},\"title_english\":{\"deprecated\":true,\"description\":\"English Title\",\"nullable\":true,\"type\":\"string\"},\"title_japanese\":{\"deprecated\":true,\"description\":\"Japanese Title\",\"nullable\":true,\"type\":\"string\"},\"title_synonyms\":{\"deprecated\":true,\"description\":\"Other Titles\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"titles\":{\"description\":\"All titles\",\"items\":{\"properties\":{\"title\":{\"description\":\"Title value\",\"type\":\"string\"},\"type\":{\"description\":\"Title type\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"trailer\":{\"description\":\"Youtube Details\",\"properties\":{\"embed_url\":{\"description\":\"Parsed Embed URL\",\"nullable\":true,\"type\":\"string\"},\"url\":{\"description\":\"YouTube URL\",\"nullable\":true,\"type\":\"string\"},\"youtube_id\":{\"description\":\"YouTube ID\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"type\":{\"description\":\"Anime Type\",\"enum\":[\"TV\",\"OVA\",\"Movie\",\"Special\",\"ONA\",\"Music\"],\"nullable\":true,\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"},\"year\":{\"description\":\"Year\",\"nullable\":true,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},{\"properties\":{\"pagination\":{\"properties\":{\"current_page\":{\"type\":\"integer\"},\"has_next_page\":{\"type\":\"boolean\"},\"items\":{\"properties\":{\"count\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"total\":{\"type\":\"integer\"}},\"type\":\"object\"},\"last_visible_page\":{\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}],\"description\":\"Anime resources currently airing\"}}},\"description\":\"Returns weekly schedule\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/schedules","segments":[{"lit":"schedules"}],"select":{"exist":["filter","kid","limit","page","sfw","unapproved"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"schedule","name__orig":"schedule","Name":"Schedule","name_":"schedule","name-":"schedule","NAME":"SCHEDULE","index$":13}, {"active":true,"entity":"schedule","key$":"BasicScheduleFlow","kind":"basic","name":"BasicScheduleFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"schedule_ref01"}}],"index$":0}]}, 'Schedule')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let schedule_ref01_data = Object.values(setup.data.existing.schedule)[0] as any

    // LIST
    const schedule_ref01_ent = client.Schedule()
    const schedule_ref01_match: any = {}

    const schedule_ref01_list = (await schedule_ref01_ent.list(schedule_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/schedule/ScheduleTestData.json')

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
    ['schedule01','schedule02','schedule03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JIKAN_REST_TEST_SCHEDULE_ENTID': idmap,
    'JIKAN_REST_TEST_LIVE': 'FALSE',
    'JIKAN_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JIKAN_REST_TEST_SCHEDULE_ENTID']

  const live = 'TRUE' === env.JIKAN_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JIKAN_REST_TEST_SCHEDULE_ENTID']
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
  
