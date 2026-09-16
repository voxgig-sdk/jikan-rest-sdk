

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


describe('UserStatisticEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JIKAN_REST_TEST_LIVE=TRUE.
  afterEach(liveDelay('JIKAN_REST_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JikanRestSDK.test()
    const ent = testsdk.UserStatistic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JIKAN_REST_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'user_statistic.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"anime","req":false,"short":"Anime Statistics","type":"`$OBJECT`","index$":0},{"active":true,"name":"manga","req":false,"short":"Manga Statistics","type":"`$OBJECT`","index$":1}],"name":"user_statistic","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"username","orig":"username","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /users/{username}/statistics","json":"{\"operationId\":\"getUserStatistics\",\"parameters\":[{\"in\":\"path\",\"name\":\"username\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"anime\":{\"description\":\"Anime Statistics\",\"properties\":{\"completed\":{\"description\":\"Anime Completed\",\"type\":\"integer\"},\"days_watched\":{\"description\":\"Number of days spent watching Anime\",\"format\":\"float\",\"type\":\"number\"},\"dropped\":{\"description\":\"Anime Dropped\",\"type\":\"integer\"},\"episodes_watched\":{\"description\":\"Number of Anime Episodes Watched\",\"type\":\"integer\"},\"mean_score\":{\"description\":\"Mean Score\",\"format\":\"float\",\"type\":\"number\"},\"on_hold\":{\"description\":\"Anime On-Hold\",\"type\":\"integer\"},\"plan_to_watch\":{\"description\":\"Anime Planned to Watch\",\"type\":\"integer\"},\"rewatched\":{\"description\":\"Anime re-watched\",\"type\":\"integer\"},\"total_entries\":{\"description\":\"Total Anime entries on User list\",\"type\":\"integer\"},\"watching\":{\"description\":\"Anime Watching\",\"type\":\"integer\"}},\"type\":\"object\"},\"manga\":{\"description\":\"Manga Statistics\",\"properties\":{\"chapters_read\":{\"description\":\"Number of Manga Chapters Read\",\"type\":\"integer\"},\"completed\":{\"description\":\"Manga Completed\",\"type\":\"integer\"},\"days_read\":{\"description\":\"Number of days spent reading Manga\",\"format\":\"float\",\"type\":\"number\"},\"dropped\":{\"description\":\"Manga Dropped\",\"type\":\"integer\"},\"mean_score\":{\"description\":\"Mean Score\",\"format\":\"float\",\"type\":\"number\"},\"on_hold\":{\"description\":\"Manga On-Hold\",\"type\":\"integer\"},\"plan_to_read\":{\"description\":\"Manga Planned to Read\",\"type\":\"integer\"},\"reading\":{\"description\":\"Manga Reading\",\"type\":\"integer\"},\"reread\":{\"description\":\"Manga re-read\",\"type\":\"integer\"},\"total_entries\":{\"description\":\"Total Manga entries on User list\",\"type\":\"integer\"},\"volumes_read\":{\"description\":\"Number of Manga Volumes Read\",\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Returns user statistics\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/users/{username}/statistics","segments":[{"lit":"users"},{"var":"username"},{"lit":"statistics"}],"select":{"exist":["username"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["user"]]},"key$":"user_statistic","name__orig":"user_statistic","Name":"UserStatistic","name_":"user_statistic","name-":"user-statistic","NAME":"USER_STATISTIC","index$":21}, {"active":true,"entity":"user_statistic","key$":"BasicUserStatisticFlow","kind":"basic","name":"BasicUserStatisticFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"user_statistic_ref01","srcdatavar":"user_statistic_ref01_data","suffix":"_dt0"},"match":{"id":"user_statistic01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-user_statistic_ref01"}}],"index$":0}]}, 'UserStatistic')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let user_statistic_ref01_data = Object.values(setup.data.existing.user_statistic)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const user_statistic_ref01_ent = client.UserStatistic()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/user_statistic/UserStatisticTestData.json')

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
    ['user_statistic01','user_statistic02','user_statistic03','user01','user02','user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JIKAN_REST_TEST_USER_STATISTIC_ENTID': idmap,
    'JIKAN_REST_TEST_LIVE': 'FALSE',
    'JIKAN_REST_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JIKAN_REST_TEST_USER_STATISTIC_ENTID']

  const live = 'TRUE' === env.JIKAN_REST_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JIKAN_REST_TEST_USER_STATISTIC_ENTID']
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
  
