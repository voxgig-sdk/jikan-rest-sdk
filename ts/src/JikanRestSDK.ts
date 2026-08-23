// JikanRest Ts SDK

import { AnimeEntity } from './entity/AnimeEntity'
import { CharacterEntity } from './entity/CharacterEntity'
import { ClubEntity } from './entity/ClubEntity'
import { ExternalEntity } from './entity/ExternalEntity'
import { GenreEntity } from './entity/GenreEntity'
import { MagazineEntity } from './entity/MagazineEntity'
import { MangaEntity } from './entity/MangaEntity'
import { PeopleSearchEntity } from './entity/PeopleSearchEntity'
import { PersonEntity } from './entity/PersonEntity'
import { ProducerEntity } from './entity/ProducerEntity'
import { RandomEntity } from './entity/RandomEntity'
import { RecommendationEntity } from './entity/RecommendationEntity'
import { ReviewEntity } from './entity/ReviewEntity'
import { ScheduleEntity } from './entity/ScheduleEntity'
import { SeasonEntity } from './entity/SeasonEntity'
import { TopEntity } from './entity/TopEntity'
import { UserEntity } from './entity/UserEntity'
import { UserAboutEntity } from './entity/UserAboutEntity'
import { UserClubEntity } from './entity/UserClubEntity'
import { UserFriendEntity } from './entity/UserFriendEntity'
import { UserHistoryEntity } from './entity/UserHistoryEntity'
import { UserStatisticEntity } from './entity/UserStatisticEntity'
import { UserUpdateEntity } from './entity/UserUpdateEntity'
import { WatchEpisodeEntity } from './entity/WatchEpisodeEntity'
import { WatchPromoEntity } from './entity/WatchPromoEntity'

export type * from './JikanRestTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { JikanRestEntityBase } from './JikanRestEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'


const stdutil = new Utility()


class JikanRestSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('JikanRestSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  // Raw GraphQL access: the pressure valve that makes the generated
  // surface's deliberate omissions (per-call selection sets, typed filter
  // builders, batching, subscriptions) livable — the whole schema stays
  // reachable.
  //
  // Thin wrapper over the same prepare/fetch path `direct` uses, with the
  // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
  // HTTP 200 as a top-level `errors` array, so status alone would report a
  // failed query as ok.
  //
  // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
  // ratelimit or paging features apply.
  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('JikanRestSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('JikanRestSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Anime().list()` / `client.Anime().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Anime(entopts?: Record<string, any>) {
    const self = this
    return new AnimeEntity(self, entopts)
  }


  // Entity access: `client.Character().list()` / `client.Character().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Character(entopts?: Record<string, any>) {
    const self = this
    return new CharacterEntity(self, entopts)
  }


  // Entity access: `client.Club().list()` / `client.Club().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Club(entopts?: Record<string, any>) {
    const self = this
    return new ClubEntity(self, entopts)
  }


  // Entity access: `client.External().list()` / `client.External().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  External(entopts?: Record<string, any>) {
    const self = this
    return new ExternalEntity(self, entopts)
  }


  // Entity access: `client.Genre().list()` / `client.Genre().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Genre(entopts?: Record<string, any>) {
    const self = this
    return new GenreEntity(self, entopts)
  }


  // Entity access: `client.Magazine().list()` / `client.Magazine().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Magazine(entopts?: Record<string, any>) {
    const self = this
    return new MagazineEntity(self, entopts)
  }


  // Entity access: `client.Manga().list()` / `client.Manga().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Manga(entopts?: Record<string, any>) {
    const self = this
    return new MangaEntity(self, entopts)
  }


  // Entity access: `client.PeopleSearch().list()` / `client.PeopleSearch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PeopleSearch(entopts?: Record<string, any>) {
    const self = this
    return new PeopleSearchEntity(self, entopts)
  }


  // Entity access: `client.Person().list()` / `client.Person().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Person(entopts?: Record<string, any>) {
    const self = this
    return new PersonEntity(self, entopts)
  }


  // Entity access: `client.Producer().list()` / `client.Producer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Producer(entopts?: Record<string, any>) {
    const self = this
    return new ProducerEntity(self, entopts)
  }


  // Entity access: `client.Random().list()` / `client.Random().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Random(entopts?: Record<string, any>) {
    const self = this
    return new RandomEntity(self, entopts)
  }


  // Entity access: `client.Recommendation().list()` / `client.Recommendation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Recommendation(entopts?: Record<string, any>) {
    const self = this
    return new RecommendationEntity(self, entopts)
  }


  // Entity access: `client.Review().list()` / `client.Review().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Review(entopts?: Record<string, any>) {
    const self = this
    return new ReviewEntity(self, entopts)
  }


  // Entity access: `client.Schedule().list()` / `client.Schedule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Schedule(entopts?: Record<string, any>) {
    const self = this
    return new ScheduleEntity(self, entopts)
  }


  // Entity access: `client.Season().list()` / `client.Season().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Season(entopts?: Record<string, any>) {
    const self = this
    return new SeasonEntity(self, entopts)
  }


  // Entity access: `client.Top().list()` / `client.Top().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Top(entopts?: Record<string, any>) {
    const self = this
    return new TopEntity(self, entopts)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  User(entopts?: Record<string, any>) {
    const self = this
    return new UserEntity(self, entopts)
  }


  // Entity access: `client.UserAbout().list()` / `client.UserAbout().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserAbout(entopts?: Record<string, any>) {
    const self = this
    return new UserAboutEntity(self, entopts)
  }


  // Entity access: `client.UserClub().list()` / `client.UserClub().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserClub(entopts?: Record<string, any>) {
    const self = this
    return new UserClubEntity(self, entopts)
  }


  // Entity access: `client.UserFriend().list()` / `client.UserFriend().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserFriend(entopts?: Record<string, any>) {
    const self = this
    return new UserFriendEntity(self, entopts)
  }


  // Entity access: `client.UserHistory().list()` / `client.UserHistory().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserHistory(entopts?: Record<string, any>) {
    const self = this
    return new UserHistoryEntity(self, entopts)
  }


  // Entity access: `client.UserStatistic().list()` / `client.UserStatistic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserStatistic(entopts?: Record<string, any>) {
    const self = this
    return new UserStatisticEntity(self, entopts)
  }


  // Entity access: `client.UserUpdate().list()` / `client.UserUpdate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserUpdate(entopts?: Record<string, any>) {
    const self = this
    return new UserUpdateEntity(self, entopts)
  }


  // Entity access: `client.WatchEpisode().list()` / `client.WatchEpisode().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WatchEpisode(entopts?: Record<string, any>) {
    const self = this
    return new WatchEpisodeEntity(self, entopts)
  }


  // Entity access: `client.WatchPromo().list()` / `client.WatchPromo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WatchPromo(entopts?: Record<string, any>) {
    const self = this
    return new WatchPromoEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new JikanRestSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return JikanRestSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'JikanRest' }
  }

  toString() {
    return 'JikanRest ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = JikanRestSDK


export {
  stdutil,
  config,

  BaseFeature,
  JikanRestEntityBase,

  JikanRestSDK,
  SDK,
}


