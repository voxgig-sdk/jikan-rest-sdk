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
    const items = struct.items

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    items(this._options.feature, (fitem: [string, any]) => {
      const fname = fitem[0]
      const fopts = fitem[1]
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    })

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



  Anime(data?: any) {
    const self = this
    return new AnimeEntity(self,data)
  }


  Character(data?: any) {
    const self = this
    return new CharacterEntity(self,data)
  }


  Club(data?: any) {
    const self = this
    return new ClubEntity(self,data)
  }


  External(data?: any) {
    const self = this
    return new ExternalEntity(self,data)
  }


  Genre(data?: any) {
    const self = this
    return new GenreEntity(self,data)
  }


  Magazine(data?: any) {
    const self = this
    return new MagazineEntity(self,data)
  }


  Manga(data?: any) {
    const self = this
    return new MangaEntity(self,data)
  }


  PeopleSearch(data?: any) {
    const self = this
    return new PeopleSearchEntity(self,data)
  }


  Person(data?: any) {
    const self = this
    return new PersonEntity(self,data)
  }


  Producer(data?: any) {
    const self = this
    return new ProducerEntity(self,data)
  }


  Random(data?: any) {
    const self = this
    return new RandomEntity(self,data)
  }


  Recommendation(data?: any) {
    const self = this
    return new RecommendationEntity(self,data)
  }


  Review(data?: any) {
    const self = this
    return new ReviewEntity(self,data)
  }


  Schedule(data?: any) {
    const self = this
    return new ScheduleEntity(self,data)
  }


  Season(data?: any) {
    const self = this
    return new SeasonEntity(self,data)
  }


  Top(data?: any) {
    const self = this
    return new TopEntity(self,data)
  }


  User(data?: any) {
    const self = this
    return new UserEntity(self,data)
  }


  UserAbout(data?: any) {
    const self = this
    return new UserAboutEntity(self,data)
  }


  UserClub(data?: any) {
    const self = this
    return new UserClubEntity(self,data)
  }


  UserFriend(data?: any) {
    const self = this
    return new UserFriendEntity(self,data)
  }


  UserHistory(data?: any) {
    const self = this
    return new UserHistoryEntity(self,data)
  }


  UserStatistic(data?: any) {
    const self = this
    return new UserStatisticEntity(self,data)
  }


  UserUpdate(data?: any) {
    const self = this
    return new UserUpdateEntity(self,data)
  }


  WatchEpisode(data?: any) {
    const self = this
    return new WatchEpisodeEntity(self,data)
  }


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

  BaseFeature,
  JikanRestEntityBase,

  JikanRestSDK,
  SDK,
}


