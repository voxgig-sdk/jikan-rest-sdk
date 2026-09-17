

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


describe('TopEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JIKAN_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('JIKAN_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JikanRestSDK.test()
    const ent = testsdk.Top()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JIKAN_REST_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'top.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"top","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"preliminary","orig":"preliminary","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"kind":"query","name":"spoiler","orig":"spoiler","reqd":false,"type":"`$BOOLEAN`","index$":2},{"active":true,"kind":"query","name":"type","orig":"type","reqd":false,"type":"`$STRING`","index$":3}]},"contract":{"id":"GET /top/reviews","json":"{\"operationId\":\"getTopReviews\",\"parameters\":[{\"in\":\"query\",\"name\":\"page\",\"schema\":{\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"type\",\"required\":false,\"schema\":{\"description\":\"The type of reviews to filter by. Defaults to anime.\",\"enum\":[\"anime\",\"manga\"],\"type\":\"string\"}},{\"description\":\"Whether the results include preliminary reviews or not. Defaults to true.\",\"in\":\"query\",\"name\":\"preliminary\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Whether the results include reviews with spoilers or not. Defaults to true.\",\"in\":\"query\",\"name\":\"spoilers\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"allOf\":[{\"properties\":{\"data\":{\"items\":{\"anyOf\":[{\"allOf\":[{\"properties\":{\"user\":{\"properties\":{\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"url\":{\"description\":\"MyAnimeList Profile URL\",\"type\":\"string\"},\"username\":{\"description\":\"MyAnimeList Username\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},{\"properties\":{\"anime\":{\"properties\":{\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"title\":{\"description\":\"Entry title\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},{\"properties\":{\"date\":{\"description\":\"Review created date ISO8601\",\"type\":\"string\"},\"episodes_watched\":{\"description\":\"Number of episodes watched\",\"type\":\"integer\"},\"is_preliminary\":{\"description\":\"The review was made before the entry was completed\",\"type\":\"boolean\"},\"is_spoiler\":{\"description\":\"The review contains spoiler\",\"type\":\"boolean\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"reactions\":{\"description\":\"User reaction count on the review\",\"properties\":{\"confusing\":{\"description\":\"Confusing reaction count\",\"type\":\"integer\"},\"creative\":{\"description\":\"Creative reaction count\",\"type\":\"integer\"},\"funny\":{\"description\":\"Funny reaction count\",\"type\":\"integer\"},\"informative\":{\"description\":\"Informative reaction count\",\"type\":\"integer\"},\"love_it\":{\"description\":\"Love it reaction count\",\"type\":\"integer\"},\"nice\":{\"description\":\"Nice reaction count\",\"type\":\"integer\"},\"overall\":{\"description\":\"Overall reaction count\",\"type\":\"integer\"},\"well_written\":{\"description\":\"Well written reaction count\",\"type\":\"integer\"}},\"type\":\"object\"},\"review\":{\"description\":\"Review content\",\"type\":\"string\"},\"score\":{\"description\":\"Number of user votes on the Review\",\"type\":\"integer\"},\"tags\":{\"description\":\"Review tags\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"description\":\"Entry type\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList review URL\",\"type\":\"string\"}},\"type\":\"object\"}]},{\"allOf\":[{\"properties\":{\"user\":{\"properties\":{\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"url\":{\"description\":\"MyAnimeList Profile URL\",\"type\":\"string\"},\"username\":{\"description\":\"MyAnimeList Username\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},{\"properties\":{\"manga\":{\"properties\":{\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"title\":{\"description\":\"Entry title\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},{\"properties\":{\"date\":{\"description\":\"Review created date ISO8601\",\"type\":\"string\"},\"is_preliminary\":{\"description\":\"The review was made before the entry was completed\",\"type\":\"boolean\"},\"is_spoiler\":{\"description\":\"The review contains spoiler\",\"type\":\"boolean\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"reactions\":{\"description\":\"User reaction count on the review\",\"properties\":{\"confusing\":{\"description\":\"Confusing reaction count\",\"type\":\"integer\"},\"creative\":{\"description\":\"Creative reaction count\",\"type\":\"integer\"},\"funny\":{\"description\":\"Funny reaction count\",\"type\":\"integer\"},\"informative\":{\"description\":\"Informative reaction count\",\"type\":\"integer\"},\"love_it\":{\"description\":\"Love it reaction count\",\"type\":\"integer\"},\"nice\":{\"description\":\"Nice reaction count\",\"type\":\"integer\"},\"overall\":{\"description\":\"Overall reaction count\",\"type\":\"integer\"},\"well_written\":{\"description\":\"Well written reaction count\",\"type\":\"integer\"}},\"type\":\"object\"},\"review\":{\"description\":\"Review content\",\"type\":\"string\"},\"score\":{\"description\":\"Number of user votes on the Review\",\"type\":\"integer\"},\"tags\":{\"description\":\"Review tags\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"description\":\"Entry type\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList review URL\",\"type\":\"string\"}},\"type\":\"object\"}]}]},\"type\":\"array\"}},\"type\":\"object\"},{\"properties\":{\"pagination\":{\"properties\":{\"has_next_page\":{\"type\":\"boolean\"},\"last_visible_page\":{\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}]}},\"type\":\"object\"}}},\"description\":\"Returns top reviews\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/top/reviews","segments":[{"lit":"top"},{"lit":"reviews"}],"select":{"$action":"review","exist":["page","preliminary","spoiler","type"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"top","name__orig":"top","Name":"Top","name_":"top","name-":"top","NAME":"TOP","index$":15}, {"active":true,"entity":"top","key$":"BasicTopFlow","kind":"basic","name":"BasicTopFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"top_ref01","srcdatavar":"top_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-top_ref01"}}],"index$":0}]}, 'Top')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let top_ref01_data = Object.values(setup.data.existing.top)[0] as any

    // LOAD
    const top_ref01_ent = client.Top()
    const top_ref01_match_dt0: any = {}
    const top_ref01_data_dt0 = (await top_ref01_ent.load(top_ref01_match_dt0)).data()
    assert(null != top_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/top/TopTestData.json')

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
    ['top01','top02','top03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JIKAN_REST_TEST_TOP_ENTID': idmap,
    'JIKAN_REST_TEST_LIVE': 'FALSE',
    'JIKAN_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JIKAN_REST_TEST_TOP_ENTID']

  const live = 'TRUE' === env.JIKAN_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JIKAN_REST_TEST_TOP_ENTID']
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
  
