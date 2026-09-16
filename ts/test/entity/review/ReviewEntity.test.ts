

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


describe('ReviewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JIKAN_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('JIKAN_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JikanRestSDK.test()
    const ent = testsdk.Review()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JIKAN_REST_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'review.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"review","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"preliminary","orig":"preliminary","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"kind":"query","name":"spoiler","orig":"spoiler","reqd":false,"type":"`$BOOLEAN`","index$":2}]},"contract":{"id":"GET /reviews/anime","json":"{\"operationId\":\"getRecentAnimeReviews\",\"parameters\":[{\"in\":\"query\",\"name\":\"page\",\"schema\":{\"type\":\"integer\"}},{\"description\":\"Any reviews left during an ongoing anime/manga, those reviews are tagged as preliminary. NOTE: Preliminary reviews are not returned by default so if the entry is airing/publishing you need to add this otherwise you will get an empty list. e.g usage: `?preliminary=true`\",\"in\":\"query\",\"name\":\"preliminary\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Any reviews that are tagged as a spoiler. Spoiler reviews are not returned by default. e.g usage: `?spoiler=true`\",\"in\":\"query\",\"name\":\"spoilers\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{}}},\"description\":\"Returns recent anime reviews\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/reviews/anime","segments":[{"lit":"reviews"},{"lit":"anime"}],"select":{"$action":"anime","exist":["page","preliminary","spoiler"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"preliminary","orig":"preliminary","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"kind":"query","name":"spoiler","orig":"spoiler","reqd":false,"type":"`$BOOLEAN`","index$":2}]},"contract":{"id":"GET /reviews/manga","json":"{\"operationId\":\"getRecentMangaReviews\",\"parameters\":[{\"in\":\"query\",\"name\":\"page\",\"schema\":{\"type\":\"integer\"}},{\"description\":\"Any reviews left during an ongoing anime/manga, those reviews are tagged as preliminary. NOTE: Preliminary reviews are not returned by default so if the entry is airing/publishing you need to add this otherwise you will get an empty list. e.g usage: `?preliminary=true`\",\"in\":\"query\",\"name\":\"preliminary\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Any reviews that are tagged as a spoiler. Spoiler reviews are not returned by default. e.g usage: `?spoiler=true`\",\"in\":\"query\",\"name\":\"spoilers\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{}}},\"description\":\"Returns recent manga reviews\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/reviews/manga","segments":[{"lit":"reviews"},{"lit":"manga"}],"select":{"$action":"manga","exist":["page","preliminary","spoiler"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"review","name__orig":"review","Name":"Review","name_":"review","name-":"review","NAME":"REVIEW","index$":12}, {"active":true,"entity":"review","key$":"BasicReviewFlow","kind":"basic","name":"BasicReviewFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"review_ref01","srcdatavar":"review_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-review_ref01"}}],"index$":0}]}, 'Review')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let review_ref01_data = Object.values(setup.data.existing.review)[0] as any

    // LOAD
    const review_ref01_ent = client.Review()
    const review_ref01_match_dt0: any = {}
    const review_ref01_data_dt0 = (await review_ref01_ent.load(review_ref01_match_dt0)).data()
    assert(null != review_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/review/ReviewTestData.json')

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
    ['review01','review02','review03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JIKAN_REST_TEST_REVIEW_ENTID': idmap,
    'JIKAN_REST_TEST_LIVE': 'FALSE',
    'JIKAN_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JIKAN_REST_TEST_REVIEW_ENTID']

  const live = 'TRUE' === env.JIKAN_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JIKAN_REST_TEST_REVIEW_ENTID']
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
  
