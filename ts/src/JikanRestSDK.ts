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
    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    if (null != this._options.extend) {
      for (let f of this._options.extend) {
        featureAdd(this._rootctx, f)
      }
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


  async direct(fetchargs?: any) {
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



  // Entity access: `client.Anime().list()` / `client.Anime().load({ id })`.
  Anime(data?: any) {
    const self = this
    return new AnimeEntity(self,data)
  }


  // Entity access: `client.Character().list()` / `client.Character().load({ id })`.
  Character(data?: any) {
    const self = this
    return new CharacterEntity(self,data)
  }


  // Entity access: `client.Club().list()` / `client.Club().load({ id })`.
  Club(data?: any) {
    const self = this
    return new ClubEntity(self,data)
  }


  // Entity access: `client.External().list()` / `client.External().load({ id })`.
  External(data?: any) {
    const self = this
    return new ExternalEntity(self,data)
  }


  // Entity access: `client.Genre().list()` / `client.Genre().load({ id })`.
  Genre(data?: any) {
    const self = this
    return new GenreEntity(self,data)
  }


  // Entity access: `client.Magazine().list()` / `client.Magazine().load({ id })`.
  Magazine(data?: any) {
    const self = this
    return new MagazineEntity(self,data)
  }


  // Entity access: `client.Manga().list()` / `client.Manga().load({ id })`.
  Manga(data?: any) {
    const self = this
    return new MangaEntity(self,data)
  }


  // Entity access: `client.PeopleSearch().list()` / `client.PeopleSearch().load({ id })`.
  PeopleSearch(data?: any) {
    const self = this
    return new PeopleSearchEntity(self,data)
  }


  // Entity access: `client.Person().list()` / `client.Person().load({ id })`.
  Person(data?: any) {
    const self = this
    return new PersonEntity(self,data)
  }


  // Entity access: `client.Producer().list()` / `client.Producer().load({ id })`.
  Producer(data?: any) {
    const self = this
    return new ProducerEntity(self,data)
  }


  // Entity access: `client.Random().list()` / `client.Random().load({ id })`.
  Random(data?: any) {
    const self = this
    return new RandomEntity(self,data)
  }


  // Entity access: `client.Recommendation().list()` / `client.Recommendation().load({ id })`.
  Recommendation(data?: any) {
    const self = this
    return new RecommendationEntity(self,data)
  }


  // Entity access: `client.Review().list()` / `client.Review().load({ id })`.
  Review(data?: any) {
    const self = this
    return new ReviewEntity(self,data)
  }


  // Entity access: `client.Schedule().list()` / `client.Schedule().load({ id })`.
  Schedule(data?: any) {
    const self = this
    return new ScheduleEntity(self,data)
  }


  // Entity access: `client.Season().list()` / `client.Season().load({ id })`.
  Season(data?: any) {
    const self = this
    return new SeasonEntity(self,data)
  }


  // Entity access: `client.Top().list()` / `client.Top().load({ id })`.
  Top(data?: any) {
    const self = this
    return new TopEntity(self,data)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  User(data?: any) {
    const self = this
    return new UserEntity(self,data)
  }


  // Entity access: `client.UserAbout().list()` / `client.UserAbout().load({ id })`.
  UserAbout(data?: any) {
    const self = this
    return new UserAboutEntity(self,data)
  }


  // Entity access: `client.UserClub().list()` / `client.UserClub().load({ id })`.
  UserClub(data?: any) {
    const self = this
    return new UserClubEntity(self,data)
  }


  // Entity access: `client.UserFriend().list()` / `client.UserFriend().load({ id })`.
  UserFriend(data?: any) {
    const self = this
    return new UserFriendEntity(self,data)
  }


  // Entity access: `client.UserHistory().list()` / `client.UserHistory().load({ id })`.
  UserHistory(data?: any) {
    const self = this
    return new UserHistoryEntity(self,data)
  }


  // Entity access: `client.UserStatistic().list()` / `client.UserStatistic().load({ id })`.
  UserStatistic(data?: any) {
    const self = this
    return new UserStatisticEntity(self,data)
  }


  // Entity access: `client.UserUpdate().list()` / `client.UserUpdate().load({ id })`.
  UserUpdate(data?: any) {
    const self = this
    return new UserUpdateEntity(self,data)
  }


  // Entity access: `client.WatchEpisode().list()` / `client.WatchEpisode().load({ id })`.
  WatchEpisode(data?: any) {
    const self = this
    return new WatchEpisodeEntity(self,data)
  }


  // Entity access: `client.WatchPromo().list()` / `client.WatchPromo().load({ id })`.
  WatchPromo(data?: any) {
    const self = this
    return new WatchPromoEntity(self,data)
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


