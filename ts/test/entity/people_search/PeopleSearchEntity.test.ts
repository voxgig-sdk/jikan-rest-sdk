

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


describe('PeopleSearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JIKAN_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('JIKAN_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JikanRestSDK.test()
    const ent = testsdk.PeopleSearch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JIKAN_REST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'people_search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":false,"t":"`$ARRAY`","key$":"data","index$":0},"pagination":{"a":true,"h":"Pagination","n":"pagination","r":false,"t":"`$OBJECT`","key$":"pagination","index$":1}},"name":"people_search","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /top/people","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/top/people","q":{"exist":["limit","page"]},"r":{},"s":[{"lit":"top"},{"lit":"people"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"people_search","name__orig":"people_search","Name":"PeopleSearch","name_":"people_search","name-":"people-search","NAME":"PEOPLE_SEARCH","index$":8}, {"active":true,"entity":"people_search","key$":"BasicPeopleSearchFlow","kind":"basic","name":"BasicPeopleSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"people_search_ref01"}}],"index$":0}]}, 'PeopleSearch', {"GET /top/people":{"protocol":"http","operationId":"getTopPeople","responses":{"200":{"description":"Returns top people","content":{"application/json":{"schema":{"description":"People Search","allOf":[{"properties":{"data":{"items":{"allOf":[{"description":"Person Resource","properties":{"about":{"description":"Biography","nullable":true,"type":"string"},"alternate_names":{"description":"Other Names","items":{"type":"string"},"type":"array"},"birthday":{"description":"Birthday Date ISO8601","nullable":true,"type":"string"},"family_name":{"description":"Family Name","nullable":true,"type":"string"},"favorites":{"description":"Number of users who have favorited this entry","type":"integer"},"given_name":{"description":"Given Name","nullable":true,"type":"string"},"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/people_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"name":{"description":"Name","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"},"website_url":{"description":"Person's website URL","nullable":true,"type":"string"}},"type":"object","x-ref":"#/components/schemas/person"}]},"key$":"data","type":"array"}},"type":"object","index$":0},{"properties":{"pagination":{"key$":"pagination","properties":{"current_page":{"type":"integer"},"has_next_page":{"type":"boolean"},"items":{"properties":{"count":{"type":"integer"},"per_page":{"type":"integer"},"total":{"type":"integer"}},"type":"object"},"last_visible_page":{"type":"integer"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/pagination_plus","index$":1}],"x-ref":"#/components/schemas/people_search"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"page","in":"query","schema":{"type":"integer"},"x-ref":"#/components/parameters/page","index$":0},{"name":"limit","in":"query","schema":{"type":"integer"},"x-ref":"#/components/parameters/limit","index$":1}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let people_search_ref01_data = Object.values(setup.data.existing.people_search)[0] as any

    // LIST
    const people_search_ref01_ent = client.PeopleSearch()
    const people_search_ref01_match: any = {}

    const people_search_ref01_list = (await people_search_ref01_ent.list(people_search_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/people_search/PeopleSearchTestData.json')

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
    ['people_search01','people_search02','people_search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JIKAN_REST_TEST_PEOPLE_SEARCH_ENTID': idmap,
    'JIKAN_REST_TEST_LIVE': 'FALSE',
    'JIKAN_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JIKAN_REST_TEST_PEOPLE_SEARCH_ENTID']

  const live = 'TRUE' === env.JIKAN_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JIKAN_REST_TEST_PEOPLE_SEARCH_ENTID']
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
  
