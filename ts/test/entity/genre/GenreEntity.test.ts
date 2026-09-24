

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


describe('GenreEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JIKAN_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('JIKAN_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JikanRestSDK.test()
    const ent = testsdk.Genre()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JIKAN_REST_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'genre.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"count":{"a":true,"h":"Count","n":"count","r":false,"sh":"Genre's entry count","t":"`$INTEGER`","key$":"count","index$":0},"mal_id":{"a":true,"h":"Mal Id","n":"mal_id","r":false,"sh":"MyAnimeList ID","t":"`$INTEGER`","key$":"mal_id","index$":1},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Genre Name","t":"`$STRING`","key$":"name","index$":2},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"MyAnimeList URL","t":"`$STRING`","key$":"url","index$":3}},"name":"genre","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /genres/anime","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/genres/anime","q":{"$action":"anime","exist":["filter"]},"r":{},"s":[{"lit":"genres"},{"lit":"anime"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /genres/manga","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/genres/manga","q":{"$action":"manga","exist":["filter"]},"r":{},"s":[{"lit":"genres"},{"lit":"manga"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"genre","name__orig":"genre","Name":"Genre","name_":"genre","name-":"genre","NAME":"GENRE","index$":4}, {"active":true,"entity":"genre","key$":"BasicGenreFlow","kind":"basic","name":"BasicGenreFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"genre_ref01"}}],"index$":0}]}, 'Genre', {"GET /genres/anime":{"protocol":"http","operationId":"getAnimeGenres","responses":{"200":{"description":"Returns entry genres, explicit_genres, themes and demographics","content":{"application/json":{"schema":{"description":"Genres Collection Resource","properties":{"data":{"items":{"description":"Genre Resource","properties":{"count":{"description":"Genre's entry count","type":"integer","key$":"count"},"mal_id":{"description":"MyAnimeList ID","type":"integer","key$":"mal_id"},"name":{"description":"Genre Name","type":"string","key$":"name"},"url":{"description":"MyAnimeList URL","type":"string","key$":"url"}},"type":"object","x-ref":"#/components/schemas/genre","index$":0},"key$":"data","type":"array"}},"type":"object","x-ref":"#/components/schemas/genres"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"filter","in":"query","schema":{"description":"Filter genres by type","type":"string","enum":["genres","explicit_genres","themes","demographics"],"x-ref":"#/components/schemas/genre_query_filter"},"index$":0}],"securitySource":"unspecified"},"GET /genres/manga":{"protocol":"http","operationId":"getMangaGenres","responses":{"200":{"description":"Returns entry genres, explicit_genres, themes and demographics","content":{"application/json":{"schema":{"description":"Genres Collection Resource","properties":{"data":{"items":{"description":"Genre Resource","properties":{"count":{"description":"Genre's entry count","type":"integer","key$":"count"},"mal_id":{"description":"MyAnimeList ID","type":"integer","key$":"mal_id"},"name":{"description":"Genre Name","type":"string","key$":"name"},"url":{"description":"MyAnimeList URL","type":"string","key$":"url"}},"type":"object","x-ref":"#/components/schemas/genre","index$":0},"key$":"data","type":"array"}},"type":"object","x-ref":"#/components/schemas/genres"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"filter","in":"query","schema":{"description":"Filter genres by type","type":"string","enum":["genres","explicit_genres","themes","demographics"],"x-ref":"#/components/schemas/genre_query_filter"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let genre_ref01_data = Object.values(setup.data.existing.genre)[0] as any

    // LIST
    const genre_ref01_ent = client.Genre()
    const genre_ref01_match: any = {}

    const genre_ref01_list = (await genre_ref01_ent.list(genre_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/genre/GenreTestData.json')

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
    ['genre01','genre02','genre03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JIKAN_REST_TEST_GENRE_ENTID': idmap,
    'JIKAN_REST_TEST_LIVE': 'FALSE',
    'JIKAN_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JIKAN_REST_TEST_GENRE_ENTID']

  const live = 'TRUE' === env.JIKAN_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JIKAN_REST_TEST_GENRE_ENTID']
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
  
