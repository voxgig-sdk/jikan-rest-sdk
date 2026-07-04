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



  _anime?: AnimeEntity

  // Idiomatic facade: `client.anime.list()` / `client.anime.load({ id })`.
  get anime(): AnimeEntity {
    return (this._anime ??= new AnimeEntity(this, undefined))
  }

  /** @deprecated Use `client.anime` instead. */
  Anime(data?: any) {
    const self = this
    return new AnimeEntity(self,data)
  }


  _character?: CharacterEntity

  // Idiomatic facade: `client.character.list()` / `client.character.load({ id })`.
  get character(): CharacterEntity {
    return (this._character ??= new CharacterEntity(this, undefined))
  }

  /** @deprecated Use `client.character` instead. */
  Character(data?: any) {
    const self = this
    return new CharacterEntity(self,data)
  }


  _club?: ClubEntity

  // Idiomatic facade: `client.club.list()` / `client.club.load({ id })`.
  get club(): ClubEntity {
    return (this._club ??= new ClubEntity(this, undefined))
  }

  /** @deprecated Use `client.club` instead. */
  Club(data?: any) {
    const self = this
    return new ClubEntity(self,data)
  }


  _external?: ExternalEntity

  // Idiomatic facade: `client.external.list()` / `client.external.load({ id })`.
  get external(): ExternalEntity {
    return (this._external ??= new ExternalEntity(this, undefined))
  }

  /** @deprecated Use `client.external` instead. */
  External(data?: any) {
    const self = this
    return new ExternalEntity(self,data)
  }


  _genre?: GenreEntity

  // Idiomatic facade: `client.genre.list()` / `client.genre.load({ id })`.
  get genre(): GenreEntity {
    return (this._genre ??= new GenreEntity(this, undefined))
  }

  /** @deprecated Use `client.genre` instead. */
  Genre(data?: any) {
    const self = this
    return new GenreEntity(self,data)
  }


  _magazine?: MagazineEntity

  // Idiomatic facade: `client.magazine.list()` / `client.magazine.load({ id })`.
  get magazine(): MagazineEntity {
    return (this._magazine ??= new MagazineEntity(this, undefined))
  }

  /** @deprecated Use `client.magazine` instead. */
  Magazine(data?: any) {
    const self = this
    return new MagazineEntity(self,data)
  }


  _manga?: MangaEntity

  // Idiomatic facade: `client.manga.list()` / `client.manga.load({ id })`.
  get manga(): MangaEntity {
    return (this._manga ??= new MangaEntity(this, undefined))
  }

  /** @deprecated Use `client.manga` instead. */
  Manga(data?: any) {
    const self = this
    return new MangaEntity(self,data)
  }


  _people_search?: PeopleSearchEntity

  // Idiomatic facade: `client.people_search.list()` / `client.people_search.load({ id })`.
  get people_search(): PeopleSearchEntity {
    return (this._people_search ??= new PeopleSearchEntity(this, undefined))
  }

  /** @deprecated Use `client.people_search` instead. */
  PeopleSearch(data?: any) {
    const self = this
    return new PeopleSearchEntity(self,data)
  }


  _person?: PersonEntity

  // Idiomatic facade: `client.person.list()` / `client.person.load({ id })`.
  get person(): PersonEntity {
    return (this._person ??= new PersonEntity(this, undefined))
  }

  /** @deprecated Use `client.person` instead. */
  Person(data?: any) {
    const self = this
    return new PersonEntity(self,data)
  }


  _producer?: ProducerEntity

  // Idiomatic facade: `client.producer.list()` / `client.producer.load({ id })`.
  get producer(): ProducerEntity {
    return (this._producer ??= new ProducerEntity(this, undefined))
  }

  /** @deprecated Use `client.producer` instead. */
  Producer(data?: any) {
    const self = this
    return new ProducerEntity(self,data)
  }


  _random?: RandomEntity

  // Idiomatic facade: `client.random.list()` / `client.random.load({ id })`.
  get random(): RandomEntity {
    return (this._random ??= new RandomEntity(this, undefined))
  }

  /** @deprecated Use `client.random` instead. */
  Random(data?: any) {
    const self = this
    return new RandomEntity(self,data)
  }


  _recommendation?: RecommendationEntity

  // Idiomatic facade: `client.recommendation.list()` / `client.recommendation.load({ id })`.
  get recommendation(): RecommendationEntity {
    return (this._recommendation ??= new RecommendationEntity(this, undefined))
  }

  /** @deprecated Use `client.recommendation` instead. */
  Recommendation(data?: any) {
    const self = this
    return new RecommendationEntity(self,data)
  }


  _review?: ReviewEntity

  // Idiomatic facade: `client.review.list()` / `client.review.load({ id })`.
  get review(): ReviewEntity {
    return (this._review ??= new ReviewEntity(this, undefined))
  }

  /** @deprecated Use `client.review` instead. */
  Review(data?: any) {
    const self = this
    return new ReviewEntity(self,data)
  }


  _schedule?: ScheduleEntity

  // Idiomatic facade: `client.schedule.list()` / `client.schedule.load({ id })`.
  get schedule(): ScheduleEntity {
    return (this._schedule ??= new ScheduleEntity(this, undefined))
  }

  /** @deprecated Use `client.schedule` instead. */
  Schedule(data?: any) {
    const self = this
    return new ScheduleEntity(self,data)
  }


  _season?: SeasonEntity

  // Idiomatic facade: `client.season.list()` / `client.season.load({ id })`.
  get season(): SeasonEntity {
    return (this._season ??= new SeasonEntity(this, undefined))
  }

  /** @deprecated Use `client.season` instead. */
  Season(data?: any) {
    const self = this
    return new SeasonEntity(self,data)
  }


  _top?: TopEntity

  // Idiomatic facade: `client.top.list()` / `client.top.load({ id })`.
  get top(): TopEntity {
    return (this._top ??= new TopEntity(this, undefined))
  }

  /** @deprecated Use `client.top` instead. */
  Top(data?: any) {
    const self = this
    return new TopEntity(self,data)
  }


  _user?: UserEntity

  // Idiomatic facade: `client.user.list()` / `client.user.load({ id })`.
  get user(): UserEntity {
    return (this._user ??= new UserEntity(this, undefined))
  }

  /** @deprecated Use `client.user` instead. */
  User(data?: any) {
    const self = this
    return new UserEntity(self,data)
  }


  _user_about?: UserAboutEntity

  // Idiomatic facade: `client.user_about.list()` / `client.user_about.load({ id })`.
  get user_about(): UserAboutEntity {
    return (this._user_about ??= new UserAboutEntity(this, undefined))
  }

  /** @deprecated Use `client.user_about` instead. */
  UserAbout(data?: any) {
    const self = this
    return new UserAboutEntity(self,data)
  }


  _user_club?: UserClubEntity

  // Idiomatic facade: `client.user_club.list()` / `client.user_club.load({ id })`.
  get user_club(): UserClubEntity {
    return (this._user_club ??= new UserClubEntity(this, undefined))
  }

  /** @deprecated Use `client.user_club` instead. */
  UserClub(data?: any) {
    const self = this
    return new UserClubEntity(self,data)
  }


  _user_friend?: UserFriendEntity

  // Idiomatic facade: `client.user_friend.list()` / `client.user_friend.load({ id })`.
  get user_friend(): UserFriendEntity {
    return (this._user_friend ??= new UserFriendEntity(this, undefined))
  }

  /** @deprecated Use `client.user_friend` instead. */
  UserFriend(data?: any) {
    const self = this
    return new UserFriendEntity(self,data)
  }


  _user_history?: UserHistoryEntity

  // Idiomatic facade: `client.user_history.list()` / `client.user_history.load({ id })`.
  get user_history(): UserHistoryEntity {
    return (this._user_history ??= new UserHistoryEntity(this, undefined))
  }

  /** @deprecated Use `client.user_history` instead. */
  UserHistory(data?: any) {
    const self = this
    return new UserHistoryEntity(self,data)
  }


  _user_statistic?: UserStatisticEntity

  // Idiomatic facade: `client.user_statistic.list()` / `client.user_statistic.load({ id })`.
  get user_statistic(): UserStatisticEntity {
    return (this._user_statistic ??= new UserStatisticEntity(this, undefined))
  }

  /** @deprecated Use `client.user_statistic` instead. */
  UserStatistic(data?: any) {
    const self = this
    return new UserStatisticEntity(self,data)
  }


  _user_update?: UserUpdateEntity

  // Idiomatic facade: `client.user_update.list()` / `client.user_update.load({ id })`.
  get user_update(): UserUpdateEntity {
    return (this._user_update ??= new UserUpdateEntity(this, undefined))
  }

  /** @deprecated Use `client.user_update` instead. */
  UserUpdate(data?: any) {
    const self = this
    return new UserUpdateEntity(self,data)
  }


  _watch_episode?: WatchEpisodeEntity

  // Idiomatic facade: `client.watch_episode.list()` / `client.watch_episode.load({ id })`.
  get watch_episode(): WatchEpisodeEntity {
    return (this._watch_episode ??= new WatchEpisodeEntity(this, undefined))
  }

  /** @deprecated Use `client.watch_episode` instead. */
  WatchEpisode(data?: any) {
    const self = this
    return new WatchEpisodeEntity(self,data)
  }


  _watch_promo?: WatchPromoEntity

  // Idiomatic facade: `client.watch_promo.list()` / `client.watch_promo.load({ id })`.
  get watch_promo(): WatchPromoEntity {
    return (this._watch_promo ??= new WatchPromoEntity(this, undefined))
  }

  /** @deprecated Use `client.watch_promo` instead. */
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


