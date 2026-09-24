

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"access":{"a":true,"h":"Access","n":"access","r":false,"sh":"Club access","t":"`$STRING`","key$":"access","index$":0},"category":{"a":true,"h":"Category","n":"category","r":false,"sh":"Club Category","t":"`$STRING`","key$":"category","index$":1},"created":{"a":true,"h":"Created","n":"created","r":false,"sh":"Date Created ISO8601","t":"`$STRING`","key$":"created","index$":2},"data":{"a":true,"h":"Data","n":"data","r":false,"t":"`$ARRAY`","key$":"data","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"images":{"a":true,"h":"Images","n":"images","r":false,"t":"`$OBJECT`","key$":"images","index$":5},"mal_id":{"a":true,"h":"Mal Id","n":"mal_id","r":false,"sh":"MyAnimeList ID","t":"`$INTEGER`","key$":"mal_id","index$":6},"members":{"a":true,"h":"Members","n":"members","r":false,"sh":"Number of club members","t":"`$INTEGER`","key$":"members","index$":7},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Club name","t":"`$STRING`","key$":"name","index$":8},"pagination":{"a":true,"h":"Pagination","n":"pagination","r":false,"t":"`$OBJECT`","key$":"pagination","index$":9},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"Club URL","t":"`$STRING`","key$":"url","index$":10}},"id":{"field":"id","name":"id"},"name":"club","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /clubs","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"category","or":"category","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"letter","or":"letter","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/clubs","q":{"exist":["category","letter","limit","order_by","page","q","sort","type"]},"r":{},"s":[{"lit":"clubs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /clubs/{id}/members","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/clubs/{id}/members","q":{"$action":"member","exist":["id","page"]},"r":{},"s":[{"lit":"clubs"},{"var":"id"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /clubs/{id}/staff","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/clubs/{id}/staff","q":{"$action":"staff","exist":["id"]},"r":{},"s":[{"lit":"clubs"},{"var":"id"},{"lit":"staff"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":2}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /clubs/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/clubs/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"clubs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /clubs/{id}/relations","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/clubs/{id}/relations","q":{"$action":"relation","exist":["id"]},"r":{},"s":[{"lit":"clubs"},{"var":"id"},{"lit":"relations"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"club","name__orig":"club","Name":"Club","name_":"club","name-":"club","NAME":"CLUB","index$":2}, {"active":true,"entity":"club","key$":"BasicClubFlow","kind":"basic","name":"BasicClubFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"club_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"club_ref01","srcdatavar":"club_ref01_data","suffix":"_dt0"},"m":{"id":"club01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-club_ref01"}}],"index$":1}]}, 'Club', {"GET /clubs":{"protocol":"http","operationId":"getClubsSearch","responses":{"200":{"description":"Returns search results for clubs","content":{"application/json":{"schema":{"description":"Clubs Search Resource","allOf":[{"properties":{"data":{"items":{"description":"Club Resource","properties":{"access":{"description":"Club access","enum":["public","private","secret"],"type":"string"},"category":{"description":"Club Category","enum":["actors & artists","anime","characters","cities & neighborhoods","companies","conventions","games","japan","manga","music","others","schools"],"type":"string"},"created":{"description":"Date Created ISO8601","type":"string"},"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/common_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"members":{"description":"Number of club members","type":"integer"},"name":{"description":"Club name","type":"string"},"url":{"description":"Club URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/club"},"key$":"data","type":"array"}},"type":"object","index$":0},{"properties":{"pagination":{"key$":"pagination","properties":{"has_next_page":{"type":"boolean"},"last_visible_page":{"type":"integer"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/pagination","index$":1}],"x-ref":"#/components/schemas/clubs_search"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"page","in":"query","schema":{"type":"integer"},"x-ref":"#/components/parameters/page","index$":0},{"name":"limit","in":"query","schema":{"type":"integer"},"x-ref":"#/components/parameters/limit","index$":1},{"name":"q","in":"query","schema":{"type":"string"},"index$":2},{"name":"type","in":"query","schema":{"description":"Club Search Query Type","type":"string","enum":["public","private","secret"],"x-ref":"#/components/schemas/club_search_query_type"},"index$":3},{"name":"category","in":"query","schema":{"description":"Club Search Query Category","type":"string","enum":["anime","manga","actors_and_artists","characters","cities_and_neighborhoods","companies","conventions","games","japan","music","other","schools"],"x-ref":"#/components/schemas/club_search_query_category"},"index$":4},{"name":"order_by","in":"query","schema":{"description":"Club Search Query OrderBy","type":"string","enum":["mal_id","name","members_count","created"],"x-ref":"#/components/schemas/club_search_query_orderby"},"index$":5},{"name":"sort","in":"query","schema":{"description":"Search query sort direction","type":"string","enum":["desc","asc"],"x-ref":"#/components/schemas/search_query_sort"},"index$":6},{"name":"letter","in":"query","description":"Return entries starting with the given letter","schema":{"type":"string"},"index$":7}],"securitySource":"unspecified"},"GET /clubs/{id}/members":{"protocol":"http","operationId":"getClubMembers","responses":{"200":{"description":"Returns Club Members Resource","content":{"application/json":{"schema":{"allOf":[{"properties":{"pagination":{"key$":"pagination","properties":{"has_next_page":{"type":"boolean"},"last_visible_page":{"type":"integer"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/pagination"},{"description":"Club Member","properties":{"data":{"items":{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/user_images"},"url":{"description":"User URL","type":"string"},"username":{"description":"User's username","type":"string"}},"type":"object"},"key$":"data","type":"array"}},"type":"object","x-ref":"#/components/schemas/club_member"}]}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"integer"},"index$":0},{"name":"page","in":"query","schema":{"type":"integer"},"x-ref":"#/components/parameters/page","index$":1}],"securitySource":"unspecified"},"GET /clubs/{id}/staff":{"protocol":"http","operationId":"getClubStaff","responses":{"200":{"description":"Returns Club Staff","content":{"application/json":{"schema":{"description":"Club Staff Resource","properties":{"data":{"items":{"properties":{"url":{"description":"User URL","type":"string"},"username":{"description":"User's username","type":"string"}},"type":"object"},"key$":"data","type":"array"}},"type":"object","x-ref":"#/components/schemas/club_staff"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"},"GET /clubs/{id}":{"protocol":"http","operationId":"getClubsById","responses":{"200":{"description":"Returns Club Resource","content":{"application/json":{"schema":{"properties":{"data":{"description":"Club Resource","properties":{"mal_id":{"description":"MyAnimeList ID","type":"integer","key$":"mal_id"},"name":{"description":"Club name","type":"string","key$":"name"},"url":{"description":"Club URL","type":"string","key$":"url"},"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/common_images","key$":"images"},"members":{"description":"Number of club members","type":"integer","key$":"members"},"category":{"description":"Club Category","enum":["actors & artists","anime","characters","cities & neighborhoods","companies","conventions","games","japan","manga","music","others","schools"],"type":"string","key$":"category"},"created":{"description":"Date Created ISO8601","type":"string","key$":"created"},"access":{"description":"Club access","enum":["public","private","secret"],"type":"string","key$":"access"}},"type":"object","x-ref":"#/components/schemas/club","index$":0}},"type":"object"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"},"GET /clubs/{id}/relations":{"protocol":"http","operationId":"getClubRelations","responses":{"200":{"description":"Returns Club Relations","content":{"application/json":{"schema":{"description":"Club Relations","properties":{"data":{"key$":"data","properties":{"anime":{"items":{"description":"Parsed URL Data","properties":{"mal_id":{"description":"MyAnimeList ID","type":"integer"},"name":{"description":"Resource Name/Title","type":"string"},"type":{"description":"Type of resource","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/mal_url"},"type":"array"},"characters":{"items":{"description":"Parsed URL Data","properties":{"mal_id":{"description":"MyAnimeList ID","type":"integer"},"name":{"description":"Resource Name/Title","type":"string"},"type":{"description":"Type of resource","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/mal_url"},"type":"array"},"manga":{"items":{"description":"Parsed URL Data","properties":{"mal_id":{"description":"MyAnimeList ID","type":"integer"},"name":{"description":"Resource Name/Title","type":"string"},"type":{"description":"Type of resource","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/mal_url"},"type":"array"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/club_relations"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"}})
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
  
