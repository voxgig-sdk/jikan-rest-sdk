// Typed models for the JikanRest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Anime {
  aired?: string
  airing?: boolean
  approved?: boolean
  background?: string
  broadcast?: Record<string, any>
  data?: any[]
  demographics?: any[]
  duration?: number
  episodes?: number
  explicit_genres?: any[]
  favorites?: number
  filler?: boolean
  genres?: any[]
  id?: string
  images?: Record<string, any>
  licensors?: any[]
  mal_id?: number
  members?: number
  pagination?: Record<string, any>
  popularity?: number
  producers?: any[]
  rank?: number
  rating?: string
  recap?: boolean
  score?: number
  scored_by?: number
  season?: string
  source?: string
  status?: string
  studios?: any[]
  synopsis?: string
  themes?: any[]
  title?: string
  title_english?: string
  title_japanese?: string
  title_romanji?: string
  title_synonyms?: any[]
  titles?: any[]
  trailer?: Record<string, any>
  type?: string
  url?: string
  year?: number
}

export interface AnimeLoadMatch {
  episode?: number
  id: number

  // Selects a custom action instead of the plain load:
  //   'full' | 'moreinfo' | 'statistic' | 'theme' | 'video'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AnimeListMatch {
  end_date?: string
  genre?: string
  genres_exclude?: string
  letter?: string
  limit?: number
  max_score?: number
  min_score?: number
  order_by?: string
  page?: number
  producer?: string
  q?: string
  rating?: string
  score?: number
  sfw?: boolean
  sort?: string
  start_date?: string
  status?: string
  type?: string
  unapproved?: boolean

  // Selects a custom action instead of the plain list:
  //   'character' | 'episode' | 'external' | 'forum' | 'new' | 'picture' | 'recommendation' | 'relation' | 'review' | 'staff' | 'streaming' | 'userupdate' | 'video_episode'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Character {
  about?: string
  data?: any[]
  favorites?: number
  id?: string
  images?: Record<string, any>
  mal_id?: number
  name?: string
  name_kanji?: string
  nicknames?: any[]
  pagination?: Record<string, any>
  url?: string
}

export interface CharacterLoadMatch {
  id: number

  // Selects a custom action instead of the plain load:
  //   'full'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CharacterListMatch {
  letter?: string
  limit?: number
  order_by?: string
  page?: number
  q?: string
  sort?: string

  // Selects a custom action instead of the plain list:
  //   'anime' | 'manga' | 'picture' | 'voice'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Club {
  access?: string
  category?: string
  created?: string
  data?: any[]
  id?: string
  images?: Record<string, any>
  mal_id?: number
  members?: number
  name?: string
  pagination?: Record<string, any>
  url?: string
}

export interface ClubLoadMatch {
  id: number

  // Selects a custom action instead of the plain load:
  //   'relation'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ClubListMatch {
  category?: string
  letter?: string
  limit?: number
  order_by?: string
  page?: number
  q?: string
  sort?: string
  type?: string

  // Selects a custom action instead of the plain list:
  //   'member' | 'staff'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface External {
  name?: string
  url?: string
}

export interface ExternalListMatch {
  username: string
}

export interface Genre {
  count?: number
  mal_id?: number
  name?: string
  url?: string
}

export interface GenreListMatch {
  filter?: string

  // Selects a custom action instead of the plain list:
  //   'anime' | 'manga'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Magazine {
  data?: any[]
  pagination?: Record<string, any>
}

export interface MagazineListMatch {
  letter?: string
  limit?: number
  order_by?: string
  page?: number
  q?: string
  sort?: string
}

export interface Manga {
  approved?: boolean
  authors?: any[]
  background?: string
  chapters?: number
  data?: any[]
  demographics?: any[]
  explicit_genres?: any[]
  favorites?: number
  genres?: any[]
  id?: string
  images?: Record<string, any>
  mal_id?: number
  members?: number
  pagination?: Record<string, any>
  popularity?: number
  published?: Record<string, any>
  publishing?: boolean
  rank?: number
  score?: number
  scored_by?: number
  serializations?: any[]
  status?: string
  synopsis?: string
  themes?: any[]
  title?: string
  title_english?: string
  title_japanese?: string
  titles?: any[]
  type?: string
  url?: string
  volumes?: number
}

export interface MangaLoadMatch {
  id: number

  // Selects a custom action instead of the plain load:
  //   'full' | 'moreinfo' | 'statistic'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface MangaListMatch {
  end_date?: string
  genre?: string
  genres_exclude?: string
  letter?: string
  limit?: number
  magazine?: string
  max_score?: number
  min_score?: number
  order_by?: string
  page?: number
  q?: string
  score?: number
  sfw?: boolean
  sort?: string
  start_date?: string
  status?: string
  type?: string
  unapproved?: boolean

  // Selects a custom action instead of the plain list:
  //   'character' | 'external' | 'forum' | 'new' | 'picture' | 'recommendation' | 'relation' | 'review' | 'userupdate'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface PeopleSearch {
  data?: any[]
  pagination?: Record<string, any>
}

export interface PeopleSearchListMatch {
  limit?: number
  page?: number
}

export interface Person {
  about?: string
  alternate_names?: any[]
  birthday?: string
  data?: any[]
  family_name?: string
  favorites?: number
  given_name?: string
  id?: string
  images?: Record<string, any>
  mal_id?: number
  name?: string
  pagination?: Record<string, any>
  url?: string
  website_url?: string
}

export interface PersonLoadMatch {
  id: number

  // Selects a custom action instead of the plain load:
  //   'full'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface PersonListMatch {
  letter?: string
  limit?: number
  order_by?: string
  page?: number
  q?: string
  sort?: string

  // Selects a custom action instead of the plain list:
  //   'anime' | 'manga' | 'picture' | 'voice'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Producer {
  about?: string
  count?: number
  data?: any[]
  established?: string
  favorites?: number
  id?: string
  images?: Record<string, any>
  mal_id?: number
  pagination?: Record<string, any>
  titles?: any[]
  url?: string
}

export interface ProducerLoadMatch {
  id: number

  // Selects a custom action instead of the plain load:
  //   'full'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ProducerListMatch {
  letter?: string
  limit?: number
  order_by?: string
  page?: number
  q?: string
  sort?: string

  // Selects a custom action instead of the plain list:
  //   'external'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Random {
}

export interface RandomLoadMatch {

  // Selects a custom action instead of the plain load:
  //   'anime' | 'character' | 'manga' | 'person' | 'user'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Recommendation {
  data?: any[]
  pagination?: Record<string, any>
}

export interface RecommendationListMatch {
  username: string
  page?: number

  // Selects a custom action instead of the plain list:
  //   'anime' | 'manga'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Review {
}

export interface ReviewLoadMatch {
  page?: number
  preliminary?: boolean
  spoiler?: boolean

  // Selects a custom action instead of the plain load:
  //   'anime' | 'manga'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Schedule {
  data?: any[]
  pagination?: Record<string, any>
}

export interface ScheduleListMatch {
  filter?: string
  kid?: string
  limit?: number
  page?: number
  sfw?: string
  unapproved?: boolean
}

export interface Season {
  data?: any[]
  id?: string
  pagination?: Record<string, any>
  seasons?: any[]
  year?: number
}

export interface SeasonLoadMatch {
  season: string
  year: number
  continuing?: boolean
  filter?: string
  limit?: number
  page?: number
  sfw?: boolean
  unapproved?: boolean
}

export interface SeasonListMatch {
  data?: any[]
  id?: string
  pagination?: Record<string, any>
  seasons?: any[]
  year?: number

  // Selects a custom action instead of the plain list:
  //   'now' | 'upcoming'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Top {
}

export interface TopLoadMatch {
  page?: number
  preliminary?: boolean
  spoiler?: boolean
  type?: string

  // Selects a custom action instead of the plain load:
  //   'review'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface User {
  birthday?: string
  data?: any[]
  gender?: string
  id?: string
  images?: Record<string, any>
  joined?: string
  last_online?: string
  location?: string
  mal_id?: number
  pagination?: Record<string, any>
  url?: string
  username?: string
}

export interface UserLoadMatch {
  id: number

  // Selects a custom action instead of the plain load:
  //   'animelist' | 'favorite' | 'full' | 'mangalist' | 'review'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface UserListMatch {
  gender?: string
  limit?: number
  location?: string
  max_age?: number
  min_age?: number
  page?: number
  q?: string
}

export interface UserAbout {
  about?: string
}

export interface UserAboutListMatch {
  username: string
}

export interface UserClub {
  data?: any[]
  pagination?: Record<string, any>
}

export interface UserClubListMatch {
  username: string
  page?: number
}

export interface UserFriend {
  data?: any[]
  pagination?: Record<string, any>
}

export interface UserFriendListMatch {
  username: string
  page?: number
}

export interface UserHistory {
  date?: string
  entry?: Record<string, any>
  increment?: number
}

export interface UserHistoryListMatch {
  username: string
  type?: string
}

export interface UserStatistic {
  anime?: Record<string, any>
  manga?: Record<string, any>
}

export interface UserStatisticLoadMatch {
  username: string
}

export interface UserUpdate {
  anime?: any[]
  manga?: any[]
}

export interface UserUpdateLoadMatch {
  username: string
}

export interface WatchEpisode {
  data?: any[]
  pagination?: Record<string, any>
}

export interface WatchEpisodeListMatch {
  data?: any[]
  pagination?: Record<string, any>
}

export interface WatchPromo {
  data?: any[]
  pagination?: Record<string, any>
}

export interface WatchPromoListMatch {
  page?: number
}

