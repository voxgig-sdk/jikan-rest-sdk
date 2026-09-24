

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


describe('RecommendationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JIKAN_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('JIKAN_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JikanRestSDK.test()
    const ent = testsdk.Recommendation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JIKAN_REST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'recommendation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":false,"t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":4},"key$":"data","index$":0},"pagination":{"a":true,"h":"Pagination","n":"pagination","r":false,"t":"`$OBJECT`","key$":"pagination","index$":1}},"name":"recommendation","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /users/{username}/recommendations","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"username","or":"username","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/users/{username}/recommendations","q":{"exist":["page","username"]},"r":{},"s":[{"lit":"users"},{"var":"username"},{"lit":"recommendations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /recommendations/anime","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/recommendations/anime","q":{"$action":"anime","exist":["page"]},"r":{},"s":[{"lit":"recommendations"},{"lit":"anime"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /recommendations/manga","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/recommendations/manga","q":{"$action":"manga","exist":["page"]},"r":{},"s":[{"lit":"recommendations"},{"lit":"manga"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.user"]]},"key$":"recommendation","name__orig":"recommendation","Name":"Recommendation","name_":"recommendation","name-":"recommendation","NAME":"RECOMMENDATION","index$":12}, {"active":true,"entity":"recommendation","key$":"BasicRecommendationFlow","kind":"basic","name":"BasicRecommendationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"recommendation_ref01"}}],"index$":0}]}, 'Recommendation', {"GET /users/{username}/recommendations":{"protocol":"http","operationId":"getUserRecommendations","responses":{"200":{"description":"Returns Recent Anime Recommendations","content":{"application/json":{"schema":{"description":"Recommendations","allOf":[{"properties":{"data":{"items":{"properties":{"content":{"description":"Recommendation context provided by the user","type":"string"},"entry":{"description":"Array of 2 entries that are being recommended to each other","items":{"anyOf":[{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/anime_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"title":{"description":"Entry title","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/anime_meta"},{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/manga_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"title":{"description":"Entry title","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/manga_meta"}],"type":"object"},"type":"array"},"mal_id":{"description":"MAL IDs of recommendations is both of the MAL ID's with a `-` delimiter","type":"string"},"user":{"description":"User Meta By ID","properties":{"url":{"description":"MyAnimeList URL","type":"string"},"username":{"description":"MyAnimeList Username","type":"string"}},"type":"object","x-ref":"#/components/schemas/user_by_id"}},"type":"object"},"key$":"data","type":"array"}},"type":"object","index$":0},{"properties":{"pagination":{"key$":"pagination","properties":{"has_next_page":{"type":"boolean"},"last_visible_page":{"type":"integer"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/pagination","index$":1}],"x-ref":"#/components/schemas/recommendations"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"username","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"page","in":"query","schema":{"type":"integer"},"x-ref":"#/components/parameters/page","index$":1}],"securitySource":"unspecified"},"GET /recommendations/anime":{"protocol":"http","operationId":"getRecentAnimeRecommendations","responses":{"200":{"description":"Returns recent anime recommendations","content":{"application/json":{"schema":{"description":"Recommendations","allOf":[{"properties":{"data":{"items":{"properties":{"content":{"description":"Recommendation context provided by the user","type":"string"},"entry":{"description":"Array of 2 entries that are being recommended to each other","items":{"anyOf":[{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/anime_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"title":{"description":"Entry title","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/anime_meta"},{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/manga_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"title":{"description":"Entry title","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/manga_meta"}],"type":"object"},"type":"array"},"mal_id":{"description":"MAL IDs of recommendations is both of the MAL ID's with a `-` delimiter","type":"string"},"user":{"description":"User Meta By ID","properties":{"url":{"description":"MyAnimeList URL","type":"string"},"username":{"description":"MyAnimeList Username","type":"string"}},"type":"object","x-ref":"#/components/schemas/user_by_id"}},"type":"object"},"key$":"data","type":"array"}},"type":"object","index$":0},{"properties":{"pagination":{"key$":"pagination","properties":{"has_next_page":{"type":"boolean"},"last_visible_page":{"type":"integer"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/pagination","index$":1}],"x-ref":"#/components/schemas/recommendations"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"page","in":"query","schema":{"type":"integer"},"x-ref":"#/components/parameters/page","index$":0}],"securitySource":"unspecified"},"GET /recommendations/manga":{"protocol":"http","operationId":"getRecentMangaRecommendations","responses":{"200":{"description":"Returns recent manga recommendations","content":{"application/json":{"schema":{"description":"Recommendations","allOf":[{"properties":{"data":{"items":{"properties":{"content":{"description":"Recommendation context provided by the user","type":"string"},"entry":{"description":"Array of 2 entries that are being recommended to each other","items":{"anyOf":[{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/anime_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"title":{"description":"Entry title","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/anime_meta"},{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/manga_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"title":{"description":"Entry title","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/manga_meta"}],"type":"object"},"type":"array"},"mal_id":{"description":"MAL IDs of recommendations is both of the MAL ID's with a `-` delimiter","type":"string"},"user":{"description":"User Meta By ID","properties":{"url":{"description":"MyAnimeList URL","type":"string"},"username":{"description":"MyAnimeList Username","type":"string"}},"type":"object","x-ref":"#/components/schemas/user_by_id"}},"type":"object"},"key$":"data","type":"array"}},"type":"object","index$":0},{"properties":{"pagination":{"key$":"pagination","properties":{"has_next_page":{"type":"boolean"},"last_visible_page":{"type":"integer"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/pagination","index$":1}],"x-ref":"#/components/schemas/recommendations"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"page","in":"query","schema":{"type":"integer"},"x-ref":"#/components/parameters/page","index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let recommendation_ref01_data = Object.values(setup.data.existing.recommendation)[0] as any

    // LIST
    const recommendation_ref01_ent = client.Recommendation()
    const recommendation_ref01_match: any = {}

    const recommendation_ref01_list = (await recommendation_ref01_ent.list(recommendation_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/recommendation/RecommendationTestData.json')

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
    ['recommendation01','recommendation02','recommendation03','user01','user02','user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JIKAN_REST_TEST_RECOMMENDATION_ENTID': idmap,
    'JIKAN_REST_TEST_LIVE': 'FALSE',
    'JIKAN_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JIKAN_REST_TEST_RECOMMENDATION_ENTID']

  const live = 'TRUE' === env.JIKAN_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JIKAN_REST_TEST_RECOMMENDATION_ENTID']
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
  
