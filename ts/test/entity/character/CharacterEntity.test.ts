

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


describe('CharacterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JIKAN_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('JIKAN_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JikanRestSDK.test()
    const ent = testsdk.Character()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JIKAN_REST_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'character.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"about":{"a":true,"h":"About","n":"about","r":false,"sh":"Biography","t":"`$STRING`","key$":"about","index$":0},"data":{"a":true,"h":"Data","n":"data","r":false,"t":"`$ARRAY`","key$":"data","index$":1},"favorites":{"a":true,"h":"Favorites","n":"favorites","r":false,"sh":"Number of users who have favorited this entry","t":"`$INTEGER`","key$":"favorites","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"images":{"a":true,"h":"Images","n":"images","r":false,"t":"`$OBJECT`","key$":"images","index$":4},"mal_id":{"a":true,"h":"Mal Id","n":"mal_id","r":false,"sh":"MyAnimeList ID","t":"`$INTEGER`","key$":"mal_id","index$":5},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name","t":"`$STRING`","key$":"name","index$":6},"name_kanji":{"a":true,"h":"Name Kanji","n":"name_kanji","r":false,"sh":"Name","t":"`$STRING`","key$":"name_kanji","index$":7},"nicknames":{"a":true,"h":"Nicknames","n":"nicknames","r":false,"sh":"Other Names","t":"`$ARRAY`","key$":"nicknames","index$":8},"pagination":{"a":true,"h":"Pagination","n":"pagination","r":false,"t":"`$OBJECT`","key$":"pagination","index$":9},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"MyAnimeList URL","t":"`$STRING`","key$":"url","index$":10}},"id":{"field":"id","name":"id"},"name":"character","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /characters","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"letter","or":"letter","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"order_by","or":"order_by","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/characters","q":{"exist":["letter","limit","order_by","page","q","sort"]},"r":{},"s":[{"lit":"characters"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /top/characters","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/top/characters","q":{"exist":["limit","page"]},"r":{},"s":[{"lit":"top"},{"lit":"characters"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /characters/{id}/anime","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/characters/{id}/anime","q":{"$action":"anime","exist":["id"]},"r":{},"s":[{"lit":"characters"},{"var":"id"},{"lit":"anime"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":2},{"a":true,"co":{"id":"GET /characters/{id}/manga","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/characters/{id}/manga","q":{"$action":"manga","exist":["id"]},"r":{},"s":[{"lit":"characters"},{"var":"id"},{"lit":"manga"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":3},{"a":true,"co":{"id":"GET /characters/{id}/pictures","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/characters/{id}/pictures","q":{"$action":"picture","exist":["id"]},"r":{},"s":[{"lit":"characters"},{"var":"id"},{"lit":"pictures"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":4},{"a":true,"co":{"id":"GET /characters/{id}/voices","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/characters/{id}/voices","q":{"$action":"voice","exist":["id"]},"r":{},"s":[{"lit":"characters"},{"var":"id"},{"lit":"voices"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":5}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /characters/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/characters/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"characters"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /characters/{id}/full","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/characters/{id}/full","q":{"$action":"full","exist":["id"]},"r":{},"s":[{"lit":"characters"},{"var":"id"},{"lit":"full"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"character","name__orig":"character","Name":"Character","name_":"character","name-":"character","NAME":"CHARACTER","index$":1}, {"active":true,"entity":"character","key$":"BasicCharacterFlow","kind":"basic","name":"BasicCharacterFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"character_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"character_ref01","srcdatavar":"character_ref01_data","suffix":"_dt0"},"m":{"id":"character01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-character_ref01"}}],"index$":1}]}, 'Character', {"GET /characters":{"protocol":"http","operationId":"getCharactersSearch","responses":{"200":{"description":"Returns search results for characters","content":{"application/json":{"schema":{"description":"Characters Search Resource","allOf":[{"properties":{"data":{"items":{"description":"Character Resource","properties":{"about":{"description":"Biography","nullable":true,"type":"string"},"favorites":{"description":"Number of users who have favorited this entry","type":"integer"},"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/character_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"name":{"description":"Name","type":"string"},"name_kanji":{"description":"Name","nullable":true,"type":"string"},"nicknames":{"description":"Other Names","items":{"type":"string"},"type":"array"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/character"},"key$":"data","type":"array"}},"type":"object","index$":0},{"properties":{"pagination":{"key$":"pagination","properties":{"current_page":{"type":"integer"},"has_next_page":{"type":"boolean"},"items":{"properties":{"count":{"type":"integer"},"per_page":{"type":"integer"},"total":{"type":"integer"}},"type":"object"},"last_visible_page":{"type":"integer"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/pagination_plus","index$":1}],"x-ref":"#/components/schemas/characters_search"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"page","in":"query","schema":{"type":"integer"},"x-ref":"#/components/parameters/page","index$":0},{"name":"limit","in":"query","schema":{"type":"integer"},"x-ref":"#/components/parameters/limit","index$":1},{"name":"q","in":"query","schema":{"type":"string"},"index$":2},{"name":"order_by","in":"query","schema":{"description":"Available Character order_by properties","type":"string","enum":["mal_id","name","favorites"],"x-ref":"#/components/schemas/characters_search_query_orderby"},"index$":3},{"name":"sort","in":"query","schema":{"description":"Search query sort direction","type":"string","enum":["desc","asc"],"x-ref":"#/components/schemas/search_query_sort"},"index$":4},{"name":"letter","in":"query","description":"Return entries starting with the given letter","schema":{"type":"string"},"index$":5}],"securitySource":"unspecified"},"GET /top/characters":{"protocol":"http","operationId":"getTopCharacters","responses":{"200":{"description":"Returns top characters","content":{"application/json":{"schema":{"description":"Characters Search Resource","allOf":[{"properties":{"data":{"items":{"description":"Character Resource","properties":{"about":{"description":"Biography","nullable":true,"type":"string"},"favorites":{"description":"Number of users who have favorited this entry","type":"integer"},"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/character_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"name":{"description":"Name","type":"string"},"name_kanji":{"description":"Name","nullable":true,"type":"string"},"nicknames":{"description":"Other Names","items":{"type":"string"},"type":"array"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/character"},"key$":"data","type":"array"}},"type":"object","index$":0},{"properties":{"pagination":{"key$":"pagination","properties":{"current_page":{"type":"integer"},"has_next_page":{"type":"boolean"},"items":{"properties":{"count":{"type":"integer"},"per_page":{"type":"integer"},"total":{"type":"integer"}},"type":"object"},"last_visible_page":{"type":"integer"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/pagination_plus","index$":1}],"x-ref":"#/components/schemas/characters_search"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"page","in":"query","schema":{"type":"integer"},"x-ref":"#/components/parameters/page","index$":0},{"name":"limit","in":"query","schema":{"type":"integer"},"x-ref":"#/components/parameters/limit","index$":1}],"securitySource":"unspecified"},"GET /characters/{id}/anime":{"protocol":"http","operationId":"getCharacterAnime","responses":{"200":{"description":"Returns anime that character is in","content":{"application/json":{"schema":{"description":"Character casted in anime","properties":{"data":{"items":{"properties":{"anime":{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/anime_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"title":{"description":"Entry title","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/anime_meta"},"role":{"description":"Character's Role","type":"string"}},"type":"object"},"key$":"data","type":"array"}},"type":"object","x-ref":"#/components/schemas/character_anime"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"},"GET /characters/{id}/manga":{"protocol":"http","operationId":"getCharacterManga","responses":{"200":{"description":"Returns manga that character is in","content":{"application/json":{"schema":{"description":"Character casted in manga","properties":{"data":{"items":{"properties":{"manga":{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/manga_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"title":{"description":"Entry title","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/manga_meta"},"role":{"description":"Character's Role","type":"string"}},"type":"object"},"key$":"data","type":"array"}},"type":"object","x-ref":"#/components/schemas/character_manga"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"},"GET /characters/{id}/pictures":{"protocol":"http","operationId":"getCharacterPictures","responses":{"200":{"description":"Returns pictures related to the entry","content":{"application/json":{"schema":{"description":"Character Pictures","properties":{"data":{"items":{"properties":{"image_url":{"description":"Default JPG Image Size URL","nullable":true,"type":"string"},"large_image_url":{"description":"Large JPG Image Size URL","nullable":true,"type":"string"}},"type":"object"},"key$":"data","type":"array"}},"type":"object","x-ref":"#/components/schemas/character_pictures"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"},"GET /characters/{id}/voices":{"protocol":"http","operationId":"getCharacterVoiceActors","responses":{"200":{"description":"Returns the character's voice actors","content":{"application/json":{"schema":{"description":"Character voice actors","properties":{"data":{"items":{"properties":{"language":{"description":"Character's Role","type":"string"},"person":{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/people_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"name":{"description":"Entry name","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/person_meta"}},"type":"object"},"key$":"data","type":"array"}},"type":"object","x-ref":"#/components/schemas/character_voice_actors"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"},"GET /characters/{id}":{"protocol":"http","operationId":"getCharacterById","responses":{"200":{"description":"Returns character resource","content":{"application/json":{"schema":{"properties":{"data":{"description":"Character Resource","properties":{"mal_id":{"description":"MyAnimeList ID","type":"integer","key$":"mal_id"},"url":{"description":"MyAnimeList URL","type":"string","key$":"url"},"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/character_images","key$":"images"},"name":{"description":"Name","type":"string","key$":"name"},"name_kanji":{"description":"Name","nullable":true,"type":"string","key$":"name_kanji"},"nicknames":{"description":"Other Names","items":{"type":"string"},"type":"array","key$":"nicknames"},"favorites":{"description":"Number of users who have favorited this entry","type":"integer","key$":"favorites"},"about":{"description":"Biography","nullable":true,"type":"string","key$":"about"}},"type":"object","x-ref":"#/components/schemas/character","index$":0}},"type":"object"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"},"GET /characters/{id}/full":{"protocol":"http","operationId":"getCharacterFullById","responses":{"200":{"description":"Returns complete character resource data","content":{"application/json":{"schema":{"properties":{"data":{"description":"Character Resource","key$":"data","properties":{"about":{"description":"Biography","nullable":true,"type":"string"},"anime":{"items":{"properties":{"anime":{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/anime_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"title":{"description":"Entry title","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/anime_meta"},"role":{"description":"Character's Role","type":"string"}},"type":"object"},"type":"array"},"favorites":{"description":"Number of users who have favorited this entry","type":"integer"},"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/character_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"manga":{"items":{"properties":{"manga":{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/manga_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"title":{"description":"Entry title","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/manga_meta"},"role":{"description":"Character's Role","type":"string"}},"type":"object"},"type":"array"},"name":{"description":"Name","type":"string"},"name_kanji":{"description":"Name","nullable":true,"type":"string"},"nicknames":{"description":"Other Names","items":{"type":"string"},"type":"array"},"url":{"description":"MyAnimeList URL","type":"string"},"voices":{"items":{"properties":{"language":{"description":"Character's Role","type":"string"},"person":{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/people_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"name":{"description":"Entry name","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/person_meta"}},"type":"object"},"type":"array"}},"type":"object","x-ref":"#/components/schemas/character_full"}},"type":"object"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let character_ref01_data = Object.values(setup.data.existing.character)[0] as any

    // LIST
    const character_ref01_ent = client.Character()
    const character_ref01_match: any = {}

    const character_ref01_list = (await character_ref01_ent.list(character_ref01_match)).map((e: any) => e.data())


    // LOAD
    const character_ref01_match_dt0: any = {}
    character_ref01_match_dt0.id = character_ref01_data.id
    const character_ref01_data_dt0 = (await character_ref01_ent.load(character_ref01_match_dt0)).data()
    assert(character_ref01_data_dt0.id === character_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/character/CharacterTestData.json')

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
    ['character01','character02','character03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JIKAN_REST_TEST_CHARACTER_ENTID': idmap,
    'JIKAN_REST_TEST_LIVE': 'FALSE',
    'JIKAN_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JIKAN_REST_TEST_CHARACTER_ENTID']

  const live = 'TRUE' === env.JIKAN_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JIKAN_REST_TEST_CHARACTER_ENTID']
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
  
