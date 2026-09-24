

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('HistoryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JIKAN_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('JIKAN_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JikanRestSDK.test()
    const ent = testsdk.History()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JIKAN_REST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'history.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"date":{"a":true,"h":"Date","n":"date","r":false,"sh":"Date ISO8601","t":"`$STRING`","key$":"date","index$":0},"entry":{"a":true,"h":"Entry","n":"entry","r":false,"sh":"Parsed URL Data","t":"`$OBJECT`","key$":"entry","index$":1},"increment":{"a":true,"h":"Increment","n":"increment","r":false,"sh":"Number of episodes/chapters watched/read","t":"`$INTEGER`","key$":"increment","index$":2}},"name":"history","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /users/{username}/history","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"username","or":"username","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/users/{username}/history","q":{"exist":["type","username"]},"r":{},"s":[{"lit":"users"},{"var":"username"},{"lit":"history"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.user"]]},"key$":"history","name__orig":"history","Name":"History","name_":"history","name-":"history","NAME":"HISTORY","index$":5}, {"active":true,"entity":"history","key$":"BasicHistoryFlow","kind":"basic","name":"BasicHistoryFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"username":"username01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"history_ref01"}}],"index$":0}]}, 'History', {"GET /users/{username}/history":{"protocol":"http","operationId":"getUserHistory","responses":{"200":{"description":"Returns user history (past 30 days)","content":{"application/json":{"schema":{"properties":{"data":{"items":{"description":"Transform the resource into an array.","properties":{"date":{"description":"Date ISO8601","type":"string","key$":"date"},"entry":{"description":"Parsed URL Data","properties":{"mal_id":{"description":"MyAnimeList ID","type":"integer"},"name":{"description":"Resource Name/Title","type":"string"},"type":{"description":"Type of resource","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/mal_url","key$":"entry"},"increment":{"description":"Number of episodes/chapters watched/read","type":"integer","key$":"increment"}},"type":"object","x-ref":"#/components/schemas/history","index$":0},"key$":"data","type":"array"}},"type":"object","x-ref":"#/components/schemas/user_history"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"username","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"type","in":"query","required":false,"schema":{"type":"string","enum":["anime","manga"]},"index$":1}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let history_ref01_data = Object.values(setup.data.existing.history)[0] as any

    // LIST
    const history_ref01_ent = client.History()
    const history_ref01_match: any = {}
    history_ref01_match['username'] = setup.idmap['username01']

    const history_ref01_list = (await history_ref01_ent.list(history_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/history/HistoryTestData.json')

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
    ['history01','history02','history03','user01','user02','user03','username01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JIKAN_REST_TEST_HISTORY_ENTID': idmap,
    'JIKAN_REST_TEST_LIVE': 'FALSE',
    'JIKAN_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JIKAN_REST_TEST_HISTORY_ENTID']

  const live = 'TRUE' === env.JIKAN_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JIKAN_REST_TEST_HISTORY_ENTID']
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
  
