

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


describe('ClubEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JIKAN_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('JIKAN_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JikanRestSDK.test()
    const ent = testsdk.Club()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JIKAN_REST_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'club.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"access","req":false,"short":"Club access","type":"`$STRING`","index$":0},{"active":true,"name":"anime","req":false,"type":"`$ARRAY`","index$":1},{"active":true,"name":"category","req":false,"short":"Club Category","type":"`$STRING`","index$":2},{"active":true,"name":"characters","req":false,"type":"`$ARRAY`","index$":3},{"active":true,"name":"created","req":false,"short":"Date Created ISO8601","type":"`$STRING`","index$":4},{"active":true,"name":"data","req":false,"type":"`$ARRAY`","index$":5},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"images","req":false,"type":"`$OBJECT`","index$":7},{"active":true,"name":"mal_id","req":false,"short":"MyAnimeList ID","type":"`$INTEGER`","index$":8},{"active":true,"name":"manga","req":false,"type":"`$ARRAY`","index$":9},{"active":true,"name":"members","req":false,"short":"Number of club members","type":"`$INTEGER`","index$":10},{"active":true,"name":"name","req":false,"short":"Club name","type":"`$STRING`","index$":11},{"active":true,"name":"pagination","req":false,"type":"`$OBJECT`","index$":12},{"active":true,"name":"url","req":false,"short":"Club URL","type":"`$STRING`","index$":13},{"active":true,"name":"username","req":false,"short":"User's username","type":"`$STRING`","index$":14}],"id":{"field":"id","name":"id"},"name":"club","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"category","orig":"category","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"letter","orig":"letter","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"order_by","orig":"order_by","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":4},{"active":true,"kind":"query","name":"q","orig":"q","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"kind":"query","name":"type","orig":"type","reqd":false,"type":"`$STRING`","index$":7}]},"contract":{"id":"GET /clubs","json":"{\"operationId\":\"getClubsSearch\",\"parameters\":[{\"in\":\"query\",\"name\":\"page\",\"schema\":{\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"q\",\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"type\",\"schema\":{\"description\":\"Club Search Query Type\",\"enum\":[\"public\",\"private\",\"secret\"],\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"category\",\"schema\":{\"description\":\"Club Search Query Category\",\"enum\":[\"anime\",\"manga\",\"actors_and_artists\",\"characters\",\"cities_and_neighborhoods\",\"companies\",\"conventions\",\"games\",\"japan\",\"music\",\"other\",\"schools\"],\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"order_by\",\"schema\":{\"description\":\"Club Search Query OrderBy\",\"enum\":[\"mal_id\",\"name\",\"members_count\",\"created\"],\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"sort\",\"schema\":{\"description\":\"Search query sort direction\",\"enum\":[\"desc\",\"asc\"],\"type\":\"string\"}},{\"description\":\"Return entries starting with the given letter\",\"in\":\"query\",\"name\":\"letter\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"allOf\":[{\"properties\":{\"data\":{\"items\":{\"description\":\"Club Resource\",\"properties\":{\"access\":{\"description\":\"Club access\",\"enum\":[\"public\",\"private\",\"secret\"],\"type\":\"string\"},\"category\":{\"description\":\"Club Category\",\"enum\":[\"actors & artists\",\"anime\",\"characters\",\"cities & neighborhoods\",\"companies\",\"conventions\",\"games\",\"japan\",\"manga\",\"music\",\"others\",\"schools\"],\"type\":\"string\"},\"created\":{\"description\":\"Date Created ISO8601\",\"type\":\"string\"},\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"members\":{\"description\":\"Number of club members\",\"type\":\"integer\"},\"name\":{\"description\":\"Club name\",\"type\":\"string\"},\"url\":{\"description\":\"Club URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},{\"properties\":{\"pagination\":{\"properties\":{\"has_next_page\":{\"type\":\"boolean\"},\"last_visible_page\":{\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}],\"description\":\"Clubs Search Resource\"}}},\"description\":\"Returns search results for clubs\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/clubs","segments":[{"lit":"clubs"}],"select":{"exist":["category","letter","limit","order_by","page","q","sort","type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`"}],"query":[{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`"}]},"contract":{"id":"GET /clubs/{id}/members","json":"{\"operationId\":\"getClubMembers\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"page\",\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"allOf\":[{\"properties\":{\"pagination\":{\"properties\":{\"has_next_page\":{\"type\":\"boolean\"},\"last_visible_page\":{\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"},{\"description\":\"Club Member\",\"properties\":{\"data\":{\"items\":{\"properties\":{\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"url\":{\"description\":\"User URL\",\"type\":\"string\"},\"username\":{\"description\":\"User's username\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}]}}},\"description\":\"Returns Club Members Resource\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/clubs/{id}/members","segments":[{"lit":"clubs"},{"var":"id"},{"lit":"members"}],"select":{"$action":"member","exist":["id","page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`"}]},"contract":{"id":"GET /clubs/{id}/staff","json":"{\"operationId\":\"getClubStaff\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Club Staff Resource\",\"properties\":{\"data\":{\"items\":{\"properties\":{\"url\":{\"description\":\"User URL\",\"type\":\"string\"},\"username\":{\"description\":\"User's username\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Returns Club Staff\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/clubs/{id}/staff","segments":[{"lit":"clubs"},{"var":"id"},{"lit":"staff"}],"select":{"$action":"staff","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":2}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /clubs/{id}","json":"{\"operationId\":\"getClubsById\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"description\":\"Club Resource\",\"properties\":{\"access\":{\"description\":\"Club access\",\"enum\":[\"public\",\"private\",\"secret\"],\"type\":\"string\"},\"category\":{\"description\":\"Club Category\",\"enum\":[\"actors & artists\",\"anime\",\"characters\",\"cities & neighborhoods\",\"companies\",\"conventions\",\"games\",\"japan\",\"manga\",\"music\",\"others\",\"schools\"],\"type\":\"string\"},\"created\":{\"description\":\"Date Created ISO8601\",\"type\":\"string\"},\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"members\":{\"description\":\"Number of club members\",\"type\":\"integer\"},\"name\":{\"description\":\"Club name\",\"type\":\"string\"},\"url\":{\"description\":\"Club URL\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Returns Club Resource\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/clubs/{id}","segments":[{"lit":"clubs"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`"}]},"contract":{"id":"GET /clubs/{id}/relations","json":"{\"operationId\":\"getClubRelations\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Club Relations\",\"properties\":{\"data\":{\"properties\":{\"anime\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"characters\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"manga\":{\"items\":{\"description\":\"Parsed URL Data\",\"properties\":{\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Resource Name/Title\",\"type\":\"string\"},\"type\":{\"description\":\"Type of resource\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Returns Club Relations\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/clubs/{id}/relations","segments":[{"lit":"clubs"},{"var":"id"},{"lit":"relations"}],"select":{"$action":"relation","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"club","name__orig":"club","Name":"Club","name_":"club","name-":"club","NAME":"CLUB","index$":2}, {"active":true,"entity":"club","key$":"BasicClubFlow","kind":"basic","name":"BasicClubFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"club_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"club_ref01","srcdatavar":"club_ref01_data","suffix":"_dt0"},"match":{"id":"club01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-club_ref01"}}],"index$":1}]}, 'Club')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let club_ref01_data = Object.values(setup.data.existing.club)[0] as any

    // LIST
    const club_ref01_ent = client.Club()
    const club_ref01_match: any = {}

    const club_ref01_list = (await club_ref01_ent.list(club_ref01_match)).map((e: any) => e.data())


    // LOAD
    const club_ref01_match_dt0: any = {}
    club_ref01_match_dt0.id = club_ref01_data.id
    const club_ref01_data_dt0 = (await club_ref01_ent.load(club_ref01_match_dt0)).data()
    assert(club_ref01_data_dt0.id === club_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/club/ClubTestData.json')

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
    ['club01','club02','club03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JIKAN_REST_TEST_CLUB_ENTID': idmap,
    'JIKAN_REST_TEST_LIVE': 'FALSE',
    'JIKAN_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JIKAN_REST_TEST_CLUB_ENTID']

  const live = 'TRUE' === env.JIKAN_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JIKAN_REST_TEST_CLUB_ENTID']
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
  
