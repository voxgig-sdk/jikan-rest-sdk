

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


describe('ProducerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JIKAN_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('JIKAN_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JikanRestSDK.test()
    const ent = testsdk.Producer()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JIKAN_REST_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'producer.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"about":{"a":true,"h":"About","n":"about","r":false,"sh":"About the Producer","t":"`$STRING`","key$":"about","index$":0},"count":{"a":true,"h":"Count","n":"count","r":false,"sh":"Producers's anime count","t":"`$INTEGER`","key$":"count","index$":1},"data":{"a":true,"h":"Data","n":"data","r":false,"t":"`$ARRAY`","key$":"data","index$":2},"established":{"a":true,"h":"Established","n":"established","r":false,"sh":"Established Date ISO8601","t":"`$STRING`","key$":"established","index$":3},"favorites":{"a":true,"h":"Favorites","n":"favorites","r":false,"sh":"Producers's member favorites count","t":"`$INTEGER`","key$":"favorites","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":5},"images":{"a":true,"h":"Images","n":"images","r":false,"t":"`$OBJECT`","key$":"images","index$":6},"mal_id":{"a":true,"h":"Mal Id","n":"mal_id","r":false,"sh":"MyAnimeList ID","t":"`$INTEGER`","key$":"mal_id","index$":7},"pagination":{"a":true,"h":"Pagination","n":"pagination","r":false,"t":"`$OBJECT`","key$":"pagination","index$":8},"titles":{"a":true,"h":"Titles","n":"titles","r":false,"sh":"All titles","t":"`$ARRAY`","key$":"titles","index$":9},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"MyAnimeList URL","t":"`$STRING`","key$":"url","index$":10}},"id":{"field":"id","name":"id"},"name":"producer","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /producers","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"letter","or":"letter","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/producers","q":{"exist":["letter","limit","order_by","page","q","sort"]},"r":{},"s":[{"lit":"producers"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /producers/{id}/external","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/producers/{id}/external","q":{"$action":"external","exist":["id"]},"r":{},"s":[{"lit":"producers"},{"var":"id"},{"lit":"external"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /producers/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/producers/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"producers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /producers/{id}/full","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/producers/{id}/full","q":{"$action":"full","exist":["id"]},"r":{},"s":[{"lit":"producers"},{"var":"id"},{"lit":"full"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"producer","name__orig":"producer","Name":"Producer","name_":"producer","name-":"producer","NAME":"PRODUCER","index$":10}, {"active":true,"entity":"producer","key$":"BasicProducerFlow","kind":"basic","name":"BasicProducerFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"producer_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"producer_ref01","srcdatavar":"producer_ref01_data","suffix":"_dt0"},"m":{"id":"producer01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-producer_ref01"}}],"index$":1}]}, 'Producer', {"GET /producers":{"protocol":"http","operationId":"getProducers","responses":{"200":{"description":"Returns producers collection","content":{"application/json":{"schema":{"description":"Producers Collection Resource","allOf":[{"properties":{"data":{"items":{"description":"Producers Resource","properties":{"about":{"description":"About the Producer","nullable":true,"type":"string"},"count":{"description":"Producers's anime count","type":"integer"},"established":{"description":"Established Date ISO8601","nullable":true,"type":"string"},"favorites":{"description":"Producers's member favorites count","type":"integer"},"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/common_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"titles":{"description":"All titles","items":{"properties":{"title":{"description":"Title value","type":"string"},"type":{"description":"Title type","type":"string"}},"type":"object","x-ref":"#/components/schemas/title"},"type":"array"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/producer"},"key$":"data","type":"array"}},"type":"object","index$":0},{"properties":{"pagination":{"key$":"pagination","properties":{"has_next_page":{"type":"boolean"},"last_visible_page":{"type":"integer"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/pagination","index$":1}],"x-ref":"#/components/schemas/producers"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"page","in":"query","schema":{"type":"integer"},"x-ref":"#/components/parameters/page","index$":0},{"name":"limit","in":"query","schema":{"type":"integer"},"x-ref":"#/components/parameters/limit","index$":1},{"name":"q","in":"query","schema":{"type":"string"},"index$":2},{"name":"order_by","in":"query","schema":{"description":"Producers Search Query Order By","type":"string","enum":["mal_id","count","favorites","established"],"x-ref":"#/components/schemas/producers_query_orderby"},"index$":3},{"name":"sort","in":"query","schema":{"description":"Search query sort direction","type":"string","enum":["desc","asc"],"x-ref":"#/components/schemas/search_query_sort"},"index$":4},{"name":"letter","in":"query","description":"Return entries starting with the given letter","schema":{"type":"string"},"index$":5}],"securitySource":"unspecified"},"GET /producers/{id}/external":{"protocol":"http","operationId":"getProducerExternal","responses":{"200":{"description":"Returns producer's external links","content":{"application/json":{"schema":{"description":"External links","properties":{"data":{"items":{"properties":{"name":{"type":"string","key$":"name"},"url":{"type":"string","key$":"url"}},"type":"object","index$":0},"key$":"data","type":"array"}},"type":"object","x-ref":"#/components/schemas/external_links"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"},"GET /producers/{id}":{"protocol":"http","operationId":"getProducerById","responses":{"200":{"description":"Returns producer resource","content":{"application/json":{"schema":{"properties":{"data":{"description":"Producers Resource","properties":{"mal_id":{"description":"MyAnimeList ID","type":"integer","key$":"mal_id"},"url":{"description":"MyAnimeList URL","type":"string","key$":"url"},"titles":{"description":"All titles","items":{"properties":{"title":{"description":"Title value","type":"string"},"type":{"description":"Title type","type":"string"}},"type":"object","x-ref":"#/components/schemas/title"},"type":"array","key$":"titles"},"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/common_images","key$":"images"},"favorites":{"description":"Producers's member favorites count","type":"integer","key$":"favorites"},"count":{"description":"Producers's anime count","type":"integer","key$":"count"},"established":{"description":"Established Date ISO8601","nullable":true,"type":"string","key$":"established"},"about":{"description":"About the Producer","nullable":true,"type":"string","key$":"about"}},"type":"object","x-ref":"#/components/schemas/producer","index$":0}},"type":"object"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"},"GET /producers/{id}/full":{"protocol":"http","operationId":"getProducerFullById","responses":{"200":{"description":"Returns producer resource","content":{"application/json":{"schema":{"properties":{"data":{"description":"Producers Resource","key$":"data","properties":{"about":{"description":"About the Producer","nullable":true,"type":"string"},"count":{"description":"Producers's anime count","type":"integer"},"established":{"description":"Established Date ISO8601","nullable":true,"type":"string"},"external":{"items":{"properties":{"name":{"type":"string"},"url":{"type":"string"}},"type":"object"},"type":"array"},"favorites":{"description":"Producers's member favorites count","type":"integer"},"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/common_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"titles":{"description":"All titles","items":{"properties":{"title":{"description":"Title value","type":"string"},"type":{"description":"Title type","type":"string"}},"type":"object","x-ref":"#/components/schemas/title"},"type":"array"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/producer_full"}},"type":"object"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let producer_ref01_data = Object.values(setup.data.existing.producer)[0] as any

    // LIST
    const producer_ref01_ent = client.Producer()
    const producer_ref01_match: any = {}

    const producer_ref01_list = (await producer_ref01_ent.list(producer_ref01_match)).map((e: any) => e.data())


    // LOAD
    const producer_ref01_match_dt0: any = {}
    producer_ref01_match_dt0.id = producer_ref01_data.id
    const producer_ref01_data_dt0 = (await producer_ref01_ent.load(producer_ref01_match_dt0)).data()
    assert(producer_ref01_data_dt0.id === producer_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/producer/ProducerTestData.json')

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
    ['producer01','producer02','producer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JIKAN_REST_TEST_PRODUCER_ENTID': idmap,
    'JIKAN_REST_TEST_LIVE': 'FALSE',
    'JIKAN_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JIKAN_REST_TEST_PRODUCER_ENTID']

  const live = 'TRUE' === env.JIKAN_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JIKAN_REST_TEST_PRODUCER_ENTID']
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
  
