

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


describe('UserEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JIKAN_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('JIKAN_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JikanRestSDK.test()
    const ent = testsdk.User()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JIKAN_REST_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'user.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"birthday":{"a":true,"h":"Birthday","n":"birthday","r":false,"sh":"Birthday Date ISO8601","t":"`$STRING`","key$":"birthday","index$":0},"data":{"a":true,"h":"Data","n":"data","r":false,"t":"`$ARRAY`","key$":"data","index$":1},"gender":{"a":true,"h":"Gender","n":"gender","r":false,"sh":"User Gender","t":"`$STRING`","key$":"gender","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"images":{"a":true,"h":"Images","n":"images","r":false,"t":"`$OBJECT`","key$":"images","index$":4},"joined":{"a":true,"h":"Joined","n":"joined","r":false,"sh":"Joined Date ISO8601","t":"`$STRING`","key$":"joined","index$":5},"last_online":{"a":true,"h":"Last Online","n":"last_online","r":false,"sh":"Last Online Date ISO8601","t":"`$STRING`","key$":"last_online","index$":6},"location":{"a":true,"h":"Location","n":"location","r":false,"sh":"Location","t":"`$STRING`","key$":"location","index$":7},"mal_id":{"a":true,"h":"Mal Id","n":"mal_id","r":false,"sh":"MyAnimeList ID","t":"`$INTEGER`","key$":"mal_id","index$":8},"pagination":{"a":true,"h":"Pagination","n":"pagination","r":false,"t":"`$OBJECT`","key$":"pagination","index$":9},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"MyAnimeList URL","t":"`$STRING`","key$":"url","index$":10},"username":{"a":true,"h":"Username","n":"username","r":false,"sh":"MyAnimeList Username","t":"`$STRING`","key$":"username","index$":11}},"id":{"field":"id","name":"id"},"name":"user","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /users","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"gender","or":"gender","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"location","or":"location","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"max_age","or":"max_age","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"min_age","or":"min_age","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/users","q":{"exist":["gender","limit","location","max_age","min_age","page","q"]},"r":{},"s":[{"lit":"users"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /users/{username}/animelist","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"username","or":"username","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/users/{username}/animelist","q":{"$action":"animelist","exist":["status","username"]},"r":{},"s":[{"lit":"users"},{"var":"username"},{"lit":"animelist"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /users/{username}/mangalist","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"username","or":"username","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/users/{username}/mangalist","q":{"$action":"mangalist","exist":["status","username"]},"r":{},"s":[{"lit":"users"},{"var":"username"},{"lit":"mangalist"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /users/{username}/reviews","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"username","or":"username","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/users/{username}/reviews","q":{"$action":"review","exist":["page","username"]},"r":{},"s":[{"lit":"users"},{"var":"username"},{"lit":"reviews"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":2},{"a":true,"co":{"id":"GET /users/userbyid/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/users/userbyid/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"users"},{"lit":"userbyid"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":3},{"a":true,"co":{"id":"GET /users/{username}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"username","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/users/{username}","q":{"exist":["id"]},"r":{"param":{"username":"id"}},"s":[{"lit":"users"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":4},{"a":true,"co":{"id":"GET /users/{username}/favorites","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"username","or":"username","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/users/{username}/favorites","q":{"$action":"favorite","exist":["username"]},"r":{},"s":[{"lit":"users"},{"var":"username"},{"lit":"favorites"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":5},{"a":true,"co":{"id":"GET /users/{username}/full","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"username","or":"username","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/users/{username}/full","q":{"$action":"full","exist":["username"]},"r":{},"s":[{"lit":"users"},{"var":"username"},{"lit":"full"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":6}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"user","name__orig":"user","Name":"User","name_":"user","name-":"user","NAME":"USER","index$":17}, {"active":true,"entity":"user","key$":"BasicUserFlow","kind":"basic","name":"BasicUserFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"user_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"user_ref01","srcdatavar":"user_ref01_data","suffix":"_dt0"},"m":{"id":"user01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-user_ref01"}}],"index$":1}]}, 'User', {"GET /users":{"protocol":"http","operationId":"getUsersSearch","responses":{"200":{"description":"Returns search results for users","content":{"application/json":{"schema":{"description":"User Results","allOf":[{"properties":{"data":{"items":{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/user_images"},"last_online":{"description":"Last Online Date ISO8601","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"},"username":{"description":"MyAnimeList Username","type":"string"}},"type":"object"},"key$":"data","type":"array"}},"type":"object","index$":0},{"properties":{"pagination":{"key$":"pagination","properties":{"has_next_page":{"type":"boolean"},"last_visible_page":{"type":"integer"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/pagination","index$":1}],"x-ref":"#/components/schemas/users_search"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"page","in":"query","schema":{"type":"integer"},"x-ref":"#/components/parameters/page","index$":0},{"name":"limit","in":"query","schema":{"type":"integer"},"x-ref":"#/components/parameters/limit","index$":1},{"name":"q","in":"query","schema":{"type":"string"},"index$":2},{"name":"gender","in":"query","schema":{"description":"Users Search Query Gender.","type":"string","enum":["any","male","female","nonbinary"],"x-ref":"#/components/schemas/users_search_query_gender"},"index$":3},{"name":"location","in":"query","schema":{"type":"string"},"index$":4},{"name":"maxAge","in":"query","schema":{"type":"integer"},"index$":5},{"name":"minAge","in":"query","schema":{"type":"integer"},"index$":6}],"securitySource":"unspecified"},"GET /users/{username}/animelist":{"protocol":"http","operationId":"getUserAnimelist","responses":{"200":{"description":"Returns user anime list","content":{"application/json":{"schema":{}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"username","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"status","in":"query","schema":{"description":"User's anime list status filter options","type":"string","enum":["all","watching","completed","onhold","dropped","plantowatch"],"x-ref":"#/components/schemas/user_anime_list_status_filter"},"index$":1}],"securitySource":"unspecified"},"GET /users/{username}/mangalist":{"protocol":"http","operationId":"getUserMangaList","responses":{"200":{"description":"Returns user manga list","content":{"application/json":{"schema":{}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"username","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"status","in":"query","schema":{"description":"User's anime list status filter options","type":"string","enum":["all","reading","completed","onhold","dropped","plantoread"],"x-ref":"#/components/schemas/user_manga_list_status_filter"},"index$":1}],"securitySource":"unspecified"},"GET /users/{username}/reviews":{"protocol":"http","operationId":"getUserReviews","responses":{"200":{"description":"Returns user reviews","content":{"application/json":{"schema":{"properties":{"data":{"allOf":[{"properties":{"data":{"items":{"anyOf":[{"allOf":[{"properties":{"user":{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/user_images"},"url":{"description":"MyAnimeList Profile URL","type":"string"},"username":{"description":"MyAnimeList Username","type":"string"}},"type":"object","x-ref":"#/components/schemas/user_meta"}},"type":"object"},{"properties":{"anime":{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/anime_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"title":{"description":"Entry title","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/anime_meta"}},"type":"object"},{"properties":{"date":{"description":"Review created date ISO8601","type":"string"},"episodes_watched":{"description":"Number of episodes watched","type":"integer"},"is_preliminary":{"description":"The review was made before the entry was completed","type":"boolean"},"is_spoiler":{"description":"The review contains spoiler","type":"boolean"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"reactions":{"description":"User reaction count on the review","properties":{"confusing":{"description":"Confusing reaction count","type":"integer"},"creative":{"description":"Creative reaction count","type":"integer"},"funny":{"description":"Funny reaction count","type":"integer"},"informative":{"description":"Informative reaction count","type":"integer"},"love_it":{"description":"Love it reaction count","type":"integer"},"nice":{"description":"Nice reaction count","type":"integer"},"overall":{"description":"Overall reaction count","type":"integer"},"well_written":{"description":"Well written reaction count","type":"integer"}},"type":"object"},"review":{"description":"Review content","type":"string"},"score":{"description":"Number of user votes on the Review","type":"integer"},"tags":{"description":"Review tags","items":{"type":"string"},"type":"array"},"type":{"description":"Entry type","type":"string"},"url":{"description":"MyAnimeList review URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/anime_review"}]},{"allOf":[{"properties":{"user":{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/user_images"},"url":{"description":"MyAnimeList Profile URL","type":"string"},"username":{"description":"MyAnimeList Username","type":"string"}},"type":"object","x-ref":"#/components/schemas/user_meta"}},"type":"object"},{"properties":{"manga":{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/manga_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"title":{"description":"Entry title","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/manga_meta"}},"type":"object"},{"properties":{"date":{"description":"Review created date ISO8601","type":"string"},"is_preliminary":{"description":"The review was made before the entry was completed","type":"boolean"},"is_spoiler":{"description":"The review contains spoiler","type":"boolean"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"reactions":{"description":"User reaction count on the review","properties":{"confusing":{"description":"Confusing reaction count","type":"integer"},"creative":{"description":"Creative reaction count","type":"integer"},"funny":{"description":"Funny reaction count","type":"integer"},"informative":{"description":"Informative reaction count","type":"integer"},"love_it":{"description":"Love it reaction count","type":"integer"},"nice":{"description":"Nice reaction count","type":"integer"},"overall":{"description":"Overall reaction count","type":"integer"},"well_written":{"description":"Well written reaction count","type":"integer"}},"type":"object"},"review":{"description":"Review content","type":"string"},"score":{"description":"Number of user votes on the Review","type":"integer"},"tags":{"description":"Review tags","items":{"type":"string"},"type":"array"},"type":{"description":"Entry type","type":"string"},"url":{"description":"MyAnimeList review URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/manga_review"}]}]},"type":"array"}},"type":"object"},{"properties":{"pagination":{"key$":"pagination","properties":{"has_next_page":{"type":"boolean"},"last_visible_page":{"type":"integer"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/pagination"}],"key$":"data"}},"type":"object"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"username","in":"path","required":true,"schema":{"type":"string"},"index$":0},{"name":"page","in":"query","schema":{"type":"integer"},"x-ref":"#/components/parameters/page","index$":1}],"securitySource":"unspecified"},"GET /users/userbyid/{id}":{"protocol":"http","operationId":"getUserById","responses":{"200":{"description":"Returns username by ID search","content":{"application/json":{"schema":{"properties":{"data":{"description":"User Meta By ID","properties":{"url":{"description":"MyAnimeList URL","type":"string","key$":"url"},"username":{"description":"MyAnimeList Username","type":"string","key$":"username"}},"type":"object","x-ref":"#/components/schemas/user_by_id","index$":0}},"type":"object"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"},"GET /users/{username}":{"protocol":"http","operationId":"getUserProfile","responses":{"200":{"description":"Returns user profile","content":{"application/json":{"schema":{"properties":{"data":{"properties":{"mal_id":{"description":"MyAnimeList ID","nullable":true,"type":"integer","key$":"mal_id"},"username":{"description":"MyAnimeList Username","type":"string","key$":"username"},"url":{"description":"MyAnimeList URL","type":"string","key$":"url"},"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/user_images","key$":"images"},"last_online":{"description":"Last Online Date ISO8601","nullable":true,"type":"string","key$":"last_online"},"gender":{"description":"User Gender","nullable":true,"type":"string","key$":"gender"},"birthday":{"description":"Birthday Date ISO8601","nullable":true,"type":"string","key$":"birthday"},"location":{"description":"Location","nullable":true,"type":"string","key$":"location"},"joined":{"description":"Joined Date ISO8601","nullable":true,"type":"string","key$":"joined"}},"type":"object","x-ref":"#/components/schemas/user_profile","index$":0}},"type":"object"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"username","in":"path","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"},"GET /users/{username}/favorites":{"protocol":"http","operationId":"getUserFavorites","responses":{"200":{"description":"Returns user favorites","content":{"application/json":{"schema":{"properties":{"data":{"key$":"data","properties":{"anime":{"description":"Favorite Anime","items":{"allOf":[{"properties":{"start_year":{"type":"integer"},"type":{"type":"string"}},"type":"object"},{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/anime_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"title":{"description":"Entry title","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/anime_meta"}],"type":"object"},"type":"array"},"characters":{"description":"Favorite Characters","items":{"allOf":[{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/character_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"name":{"description":"Entry name","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/character_meta"},{"description":"Parsed URL Data","properties":{"mal_id":{"description":"MyAnimeList ID","type":"integer"},"title":{"description":"Resource Name/Title","type":"string"},"type":{"description":"Type of resource","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/mal_url_2"}],"type":"object"},"type":"array"},"manga":{"description":"Favorite Manga","items":{"allOf":[{"properties":{"start_year":{"type":"integer"},"type":{"type":"string"}},"type":"object"},{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"large_image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/manga_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"title":{"description":"Entry title","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/manga_meta"}],"type":"object"},"type":"array"},"people":{"description":"Favorite People","items":{"properties":{"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"},"small_image_url":{"description":"Small Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/character_images"},"mal_id":{"description":"MyAnimeList ID","type":"integer"},"name":{"description":"Entry name","type":"string"},"url":{"description":"MyAnimeList URL","type":"string"}},"type":"object","x-ref":"#/components/schemas/character_meta"},"type":"array"}},"type":"object","x-ref":"#/components/schemas/user_favorites"}},"type":"object"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"username","in":"path","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"},"GET /users/{username}/full":{"protocol":"http","operationId":"getUserFullProfile","responses":{"200":{"description":"Returns complete user resource data","content":{"application/json":{"schema":{"properties":{"data":{"description":"Transform the resource into an array.","key$":"data","properties":{"birthday":{"description":"Birthday Date ISO8601","nullable":true,"type":"string"},"external":{"items":{"properties":{"name":{"type":"string"},"url":{"type":"string"}},"type":"object"},"type":"array"},"gender":{"description":"User Gender","nullable":true,"type":"string"},"images":{"properties":{"jpg":{"description":"Available images in JPG","properties":{"image_url":{"description":"Image URL JPG","nullable":true,"type":"string"}},"type":"object"},"webp":{"description":"Available images in WEBP","properties":{"image_url":{"description":"Image URL WEBP","nullable":true,"type":"string"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/user_images"},"joined":{"description":"Joined Date ISO8601","nullable":true,"type":"string"},"last_online":{"description":"Last Online Date ISO8601","nullable":true,"type":"string"},"location":{"description":"Location","nullable":true,"type":"string"},"mal_id":{"description":"MyAnimeList ID","nullable":true,"type":"integer"},"statistics":{"properties":{"anime":{"description":"Anime Statistics","properties":{"completed":{"description":"Anime Completed","type":"integer"},"days_watched":{"description":"Number of days spent watching Anime","format":"float","type":"number"},"dropped":{"description":"Anime Dropped","type":"integer"},"episodes_watched":{"description":"Number of Anime Episodes Watched","type":"integer"},"mean_score":{"description":"Mean Score","format":"float","type":"number"},"on_hold":{"description":"Anime On-Hold","type":"integer"},"plan_to_watch":{"description":"Anime Planned to Watch","type":"integer"},"rewatched":{"description":"Anime re-watched","type":"integer"},"total_entries":{"description":"Total Anime entries on User list","type":"integer"},"watching":{"description":"Anime Watching","type":"integer"}},"type":"object"},"manga":{"description":"Manga Statistics","properties":{"chapters_read":{"description":"Number of Manga Chapters Read","type":"integer"},"completed":{"description":"Manga Completed","type":"integer"},"days_read":{"description":"Number of days spent reading Manga","format":"float","type":"number"},"dropped":{"description":"Manga Dropped","type":"integer"},"mean_score":{"description":"Mean Score","format":"float","type":"number"},"on_hold":{"description":"Manga On-Hold","type":"integer"},"plan_to_read":{"description":"Manga Planned to Read","type":"integer"},"reading":{"description":"Manga Reading","type":"integer"},"reread":{"description":"Manga re-read","type":"integer"},"total_entries":{"description":"Total Manga entries on User list","type":"integer"},"volumes_read":{"description":"Number of Manga Volumes Read","type":"integer"}},"type":"object"}},"type":"object"},"url":{"description":"MyAnimeList URL","type":"string"},"username":{"description":"MyAnimeList Username","type":"string"}},"type":"object","x-ref":"#/components/schemas/user_profile_full"}},"type":"object"}}}},"400":{"description":"Error: Bad request. When required parameters were not supplied."}},"parameters":[{"name":"username","in":"path","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let user_ref01_data = Object.values(setup.data.existing.user)[0] as any

    // LIST
    const user_ref01_ent = client.User()
    const user_ref01_match: any = {}

    const user_ref01_list = (await user_ref01_ent.list(user_ref01_match)).map((e: any) => e.data())


    // LOAD
    const user_ref01_match_dt0: any = {}
    user_ref01_match_dt0.id = user_ref01_data.id
    const user_ref01_data_dt0 = (await user_ref01_ent.load(user_ref01_match_dt0)).data()
    assert(user_ref01_data_dt0.id === user_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/user/UserTestData.json')

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
    ['user01','user02','user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JIKAN_REST_TEST_USER_ENTID': idmap,
    'JIKAN_REST_TEST_LIVE': 'FALSE',
    'JIKAN_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JIKAN_REST_TEST_USER_ENTID']

  const live = 'TRUE' === env.JIKAN_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JIKAN_REST_TEST_USER_ENTID']
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
  
