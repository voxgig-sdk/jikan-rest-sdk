

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


describe('WatchPromoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JIKAN_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('JIKAN_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JikanRestSDK.test()
    const ent = testsdk.WatchPromo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JIKAN_REST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'watch_promo.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"data","req":false,"type":"`$ARRAY`","index$":0},{"active":true,"name":"pagination","req":false,"type":"`$OBJECT`","index$":1}],"name":"watch_promo","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /watch/promos","json":"{\"operationId\":\"getWatchRecentPromos\",\"parameters\":[{\"in\":\"query\",\"name\":\"page\",\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"allOf\":[{\"properties\":{\"pagination\":{\"properties\":{\"has_next_page\":{\"type\":\"boolean\"},\"last_visible_page\":{\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"},{\"properties\":{\"data\":{\"items\":{\"properties\":{\"entry\":{\"properties\":{\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"title\":{\"description\":\"Entry title\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":{\"description\":\"Promo Title\",\"type\":\"string\"},\"trailer\":{\"allOf\":[{\"description\":\"Youtube Details\",\"properties\":{\"embed_url\":{\"description\":\"Parsed Embed URL\",\"nullable\":true,\"type\":\"string\"},\"url\":{\"description\":\"YouTube URL\",\"nullable\":true,\"type\":\"string\"},\"youtube_id\":{\"description\":\"YouTube ID\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},{\"description\":\"Youtube Images\",\"properties\":{\"images\":{\"properties\":{\"image_url\":{\"description\":\"Default Image Size URL (120x90)\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Large Image Size URL (480x360)\",\"nullable\":true,\"type\":\"string\"},\"maximum_image_url\":{\"description\":\"Maximum Image Size URL (1280x720)\",\"nullable\":true,\"type\":\"string\"},\"medium_image_url\":{\"description\":\"Medium Image Size URL (320x180)\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image Size URL (640x480)\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}],\"description\":\"Youtube Details\",\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}],\"description\":\"Watch Promos\"}}},\"description\":\"Returns Recently Added Promotional Videos\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/watch/promos","segments":[{"lit":"watch"},{"lit":"promos"}],"select":{"exist":["page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"GET /watch/promos/popular","json":"{\"operationId\":\"getWatchPopularPromos\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"allOf\":[{\"properties\":{\"pagination\":{\"properties\":{\"has_next_page\":{\"type\":\"boolean\"},\"last_visible_page\":{\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"},{\"properties\":{\"data\":{\"items\":{\"properties\":{\"entry\":{\"properties\":{\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"title\":{\"description\":\"Entry title\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":{\"description\":\"Promo Title\",\"type\":\"string\"},\"trailer\":{\"allOf\":[{\"description\":\"Youtube Details\",\"properties\":{\"embed_url\":{\"description\":\"Parsed Embed URL\",\"nullable\":true,\"type\":\"string\"},\"url\":{\"description\":\"YouTube URL\",\"nullable\":true,\"type\":\"string\"},\"youtube_id\":{\"description\":\"YouTube ID\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},{\"description\":\"Youtube Images\",\"properties\":{\"images\":{\"properties\":{\"image_url\":{\"description\":\"Default Image Size URL (120x90)\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Large Image Size URL (480x360)\",\"nullable\":true,\"type\":\"string\"},\"maximum_image_url\":{\"description\":\"Maximum Image Size URL (1280x720)\",\"nullable\":true,\"type\":\"string\"},\"medium_image_url\":{\"description\":\"Medium Image Size URL (320x180)\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image Size URL (640x480)\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}],\"description\":\"Youtube Details\",\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}],\"description\":\"Watch Promos\"}}},\"description\":\"Returns Popular Promotional Videos\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/watch/promos/popular","segments":[{"lit":"watch"},{"lit":"promos"},{"lit":"popular"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"watch_promo","name__orig":"watch_promo","Name":"WatchPromo","name_":"watch_promo","name-":"watch-promo","NAME":"WATCH_PROMO","index$":24}, {"active":true,"entity":"watch_promo","key$":"BasicWatchPromoFlow","kind":"basic","name":"BasicWatchPromoFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"watch_promo_ref01"}}],"index$":0}]}, 'WatchPromo')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let watch_promo_ref01_data = Object.values(setup.data.existing.watch_promo)[0] as any

    // LIST
    const watch_promo_ref01_ent = client.WatchPromo()
    const watch_promo_ref01_match: any = {}

    const watch_promo_ref01_list = (await watch_promo_ref01_ent.list(watch_promo_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/watch_promo/WatchPromoTestData.json')

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
    ['watch_promo01','watch_promo02','watch_promo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JIKAN_REST_TEST_WATCH_PROMO_ENTID': idmap,
    'JIKAN_REST_TEST_LIVE': 'FALSE',
    'JIKAN_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JIKAN_REST_TEST_WATCH_PROMO_ENTID']

  const live = 'TRUE' === env.JIKAN_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JIKAN_REST_TEST_WATCH_PROMO_ENTID']
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
  
