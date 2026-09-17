

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"about","req":false,"short":"Biography","type":"`$STRING`","index$":0},{"active":true,"name":"data","req":false,"type":"`$ARRAY`","index$":1},{"active":true,"name":"favorites","req":false,"short":"Number of users who have favorited this entry","type":"`$INTEGER`","index$":2},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"images","req":false,"type":"`$OBJECT`","index$":4},{"active":true,"name":"mal_id","req":false,"short":"MyAnimeList ID","type":"`$INTEGER`","index$":5},{"active":true,"name":"name","req":false,"short":"Name","type":"`$STRING`","index$":6},{"active":true,"name":"name_kanji","req":false,"short":"Name","type":"`$STRING`","index$":7},{"active":true,"name":"nicknames","req":false,"short":"Other Names","type":"`$ARRAY`","index$":8},{"active":true,"name":"pagination","req":false,"type":"`$OBJECT`","index$":9},{"active":true,"name":"url","req":false,"short":"MyAnimeList URL","type":"`$STRING`","index$":10}],"id":{"field":"id","name":"id"},"name":"character","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"letter","orig":"letter","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"order_by","orig":"order_by","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"kind":"query","name":"q","orig":"q","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$STRING`","index$":5}]},"contract":{"id":"GET /characters","json":"{\"operationId\":\"getCharactersSearch\",\"parameters\":[{\"in\":\"query\",\"name\":\"page\",\"schema\":{\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"q\",\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"order_by\",\"schema\":{\"description\":\"Available Character order_by properties\",\"enum\":[\"mal_id\",\"name\",\"favorites\"],\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"sort\",\"schema\":{\"description\":\"Search query sort direction\",\"enum\":[\"desc\",\"asc\"],\"type\":\"string\"}},{\"description\":\"Return entries starting with the given letter\",\"in\":\"query\",\"name\":\"letter\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"allOf\":[{\"properties\":{\"data\":{\"items\":{\"description\":\"Character Resource\",\"properties\":{\"about\":{\"description\":\"Biography\",\"nullable\":true,\"type\":\"string\"},\"favorites\":{\"description\":\"Number of users who have favorited this entry\",\"type\":\"integer\"},\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Name\",\"type\":\"string\"},\"name_kanji\":{\"description\":\"Name\",\"nullable\":true,\"type\":\"string\"},\"nicknames\":{\"description\":\"Other Names\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},{\"properties\":{\"pagination\":{\"properties\":{\"current_page\":{\"type\":\"integer\"},\"has_next_page\":{\"type\":\"boolean\"},\"items\":{\"properties\":{\"count\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"total\":{\"type\":\"integer\"}},\"type\":\"object\"},\"last_visible_page\":{\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}],\"description\":\"Characters Search Resource\"}}},\"description\":\"Returns search results for characters\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/characters","segments":[{"lit":"characters"}],"select":{"exist":["letter","limit","order_by","page","q","sort"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /top/characters","json":"{\"operationId\":\"getTopCharacters\",\"parameters\":[{\"in\":\"query\",\"name\":\"page\",\"schema\":{\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"allOf\":[{\"properties\":{\"data\":{\"items\":{\"description\":\"Character Resource\",\"properties\":{\"about\":{\"description\":\"Biography\",\"nullable\":true,\"type\":\"string\"},\"favorites\":{\"description\":\"Number of users who have favorited this entry\",\"type\":\"integer\"},\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Name\",\"type\":\"string\"},\"name_kanji\":{\"description\":\"Name\",\"nullable\":true,\"type\":\"string\"},\"nicknames\":{\"description\":\"Other Names\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},{\"properties\":{\"pagination\":{\"properties\":{\"current_page\":{\"type\":\"integer\"},\"has_next_page\":{\"type\":\"boolean\"},\"items\":{\"properties\":{\"count\":{\"type\":\"integer\"},\"per_page\":{\"type\":\"integer\"},\"total\":{\"type\":\"integer\"}},\"type\":\"object\"},\"last_visible_page\":{\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}],\"description\":\"Characters Search Resource\"}}},\"description\":\"Returns top characters\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/top/characters","segments":[{"lit":"top"},{"lit":"characters"}],"select":{"exist":["limit","page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`"}]},"contract":{"id":"GET /characters/{id}/anime","json":"{\"operationId\":\"getCharacterAnime\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Character casted in anime\",\"properties\":{\"data\":{\"items\":{\"properties\":{\"anime\":{\"properties\":{\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"title\":{\"description\":\"Entry title\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"role\":{\"description\":\"Character's Role\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Returns anime that character is in\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/characters/{id}/anime","segments":[{"lit":"characters"},{"var":"id"},{"lit":"anime"}],"select":{"$action":"anime","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":2},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`"}]},"contract":{"id":"GET /characters/{id}/manga","json":"{\"operationId\":\"getCharacterManga\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Character casted in manga\",\"properties\":{\"data\":{\"items\":{\"properties\":{\"manga\":{\"properties\":{\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"title\":{\"description\":\"Entry title\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"role\":{\"description\":\"Character's Role\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Returns manga that character is in\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/characters/{id}/manga","segments":[{"lit":"characters"},{"var":"id"},{"lit":"manga"}],"select":{"$action":"manga","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":3},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`"}]},"contract":{"id":"GET /characters/{id}/pictures","json":"{\"operationId\":\"getCharacterPictures\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Character Pictures\",\"properties\":{\"data\":{\"items\":{\"properties\":{\"image_url\":{\"description\":\"Default JPG Image Size URL\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Large JPG Image Size URL\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Returns pictures related to the entry\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/characters/{id}/pictures","segments":[{"lit":"characters"},{"var":"id"},{"lit":"pictures"}],"select":{"$action":"picture","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":4},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`"}]},"contract":{"id":"GET /characters/{id}/voices","json":"{\"operationId\":\"getCharacterVoiceActors\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Character voice actors\",\"properties\":{\"data\":{\"items\":{\"properties\":{\"language\":{\"description\":\"Character's Role\",\"type\":\"string\"},\"person\":{\"properties\":{\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Entry name\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Returns the character's voice actors\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/characters/{id}/voices","segments":[{"lit":"characters"},{"var":"id"},{"lit":"voices"}],"select":{"$action":"voice","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":5}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /characters/{id}","json":"{\"operationId\":\"getCharacterById\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"description\":\"Character Resource\",\"properties\":{\"about\":{\"description\":\"Biography\",\"nullable\":true,\"type\":\"string\"},\"favorites\":{\"description\":\"Number of users who have favorited this entry\",\"type\":\"integer\"},\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Name\",\"type\":\"string\"},\"name_kanji\":{\"description\":\"Name\",\"nullable\":true,\"type\":\"string\"},\"nicknames\":{\"description\":\"Other Names\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Returns character resource\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/characters/{id}","segments":[{"lit":"characters"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`"}]},"contract":{"id":"GET /characters/{id}/full","json":"{\"operationId\":\"getCharacterFullById\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"description\":\"Character Resource\",\"properties\":{\"about\":{\"description\":\"Biography\",\"nullable\":true,\"type\":\"string\"},\"anime\":{\"items\":{\"properties\":{\"anime\":{\"properties\":{\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"title\":{\"description\":\"Entry title\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"role\":{\"description\":\"Character's Role\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"favorites\":{\"description\":\"Number of users who have favorited this entry\",\"type\":\"integer\"},\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"manga\":{\"items\":{\"properties\":{\"manga\":{\"properties\":{\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"webp\":{\"description\":\"Available images in WEBP\",\"properties\":{\"image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"large_image_url\":{\"description\":\"Image URL WEBP\",\"nullable\":true,\"type\":\"string\"},\"small_image_url\":{\"description\":\"Small Image URL WEBP\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"title\":{\"description\":\"Entry title\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"role\":{\"description\":\"Character's Role\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"name\":{\"description\":\"Name\",\"type\":\"string\"},\"name_kanji\":{\"description\":\"Name\",\"nullable\":true,\"type\":\"string\"},\"nicknames\":{\"description\":\"Other Names\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"},\"voices\":{\"items\":{\"properties\":{\"language\":{\"description\":\"Character's Role\",\"type\":\"string\"},\"person\":{\"properties\":{\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"name\":{\"description\":\"Entry name\",\"type\":\"string\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Returns complete character resource data\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/characters/{id}/full","segments":[{"lit":"characters"},{"var":"id"},{"lit":"full"}],"select":{"$action":"full","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"character","name__orig":"character","Name":"Character","name_":"character","name-":"character","NAME":"CHARACTER","index$":1}, {"active":true,"entity":"character","key$":"BasicCharacterFlow","kind":"basic","name":"BasicCharacterFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"character_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"character_ref01","srcdatavar":"character_ref01_data","suffix":"_dt0"},"match":{"id":"character01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-character_ref01"}}],"index$":1}]}, 'Character')
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
  
