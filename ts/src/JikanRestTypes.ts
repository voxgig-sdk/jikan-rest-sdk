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
  author_url?: string
  author_username?: string
  background?: string
  broadcast?: Record<string, any>
  character?: Record<string, any>
  comments?: number
  completed?: number
  data?: any[]
  date?: string
  demographics?: any[]
  dropped?: number
  duration?: number
  endings?: any[]
  entry?: Record<string, any>
  episodes?: number
  explicit_genres?: any[]
  external?: any[]
  favorites?: number
  filler?: boolean
  genres?: any[]
  images?: Record<string, any>
  last_comment?: Record<string, any>
  licensors?: any[]
  mal_id?: number
  members?: number
  moreinfo?: string
  music_videos?: any[]
  name?: string
  on_hold?: number
  openings?: any[]
  pagination?: Record<string, any>
  person?: Record<string, any>
  plan_to_watch?: number
  popularity?: number
  positions?: any[]
  producers?: any[]
  promo?: any[]
  rank?: number
  rating?: string
  recap?: boolean
  relation?: string
  relations?: any[]
  role?: string
  score?: number
  scored_by?: number
  scores?: any[]
  season?: string
  source?: string
  status?: string
  streaming?: any[]
  studios?: any[]
  synopsis?: string
  theme?: Record<string, any>
  themes?: any[]
  title?: string
  title_english?: string
  title_japanese?: string
  title_romanji?: string
  title_synonyms?: any[]
  titles?: any[]
  total?: number
  trailer?: Record<string, any>
  type?: string
  url?: string
  voice_actors?: any[]
  watching?: number
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
  aired?: string
  airing?: boolean
  approved?: boolean
  author_url?: string
  author_username?: string
  background?: string
  broadcast?: Record<string, any>
  character?: Record<string, any>
  comments?: number
  completed?: number
  data?: any[]
  date?: string
  demographics?: any[]
  dropped?: number
  duration?: number
  endings?: any[]
  entry?: Record<string, any>
  episodes?: number
  explicit_genres?: any[]
  external?: any[]
  favorites?: number
  filler?: boolean
  genres?: any[]
  images?: Record<string, any>
  last_comment?: Record<string, any>
  licensors?: any[]
  mal_id?: number
  members?: number
  moreinfo?: string
  music_videos?: any[]
  name?: string
  on_hold?: number
  openings?: any[]
  pagination?: Record<string, any>
  person?: Record<string, any>
  plan_to_watch?: number
  popularity?: number
  positions?: any[]
  producers?: any[]
  promo?: any[]
  rank?: number
  rating?: string
  recap?: boolean
  relation?: string
  relations?: any[]
  role?: string
  score?: number
  scored_by?: number
  scores?: any[]
  season?: string
  source?: string
  status?: string
  streaming?: any[]
  studios?: any[]
  synopsis?: string
  theme?: Record<string, any>
  themes?: any[]
  title?: string
  title_english?: string
  title_japanese?: string
  title_romanji?: string
  title_synonyms?: any[]
  titles?: any[]
  total?: number
  trailer?: Record<string, any>
  type?: string
  url?: string
  voice_actors?: any[]
  watching?: number
  year?: number

  // Selects a custom action instead of the plain list:
  //   'character' | 'episode' | 'external' | 'forum' | 'new' | 'picture' | 'recommendation' | 'relation' | 'review' | 'staff' | 'streaming' | 'userupdate' | 'video_episode'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Character {
  about?: string
  anime?: any[]
  data?: any[]
  favorites?: number
  image_url?: string
  images?: Record<string, any>
  language?: string
  large_image_url?: string
  mal_id?: number
  manga?: any[]
  name?: string
  name_kanji?: string
  nicknames?: any[]
  pagination?: Record<string, any>
  person?: Record<string, any>
  role?: string
  url?: string
  voices?: any[]
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
  about?: string
  anime?: any[]
  data?: any[]
  favorites?: number
  image_url?: string
  images?: Record<string, any>
  language?: string
  large_image_url?: string
  mal_id?: number
  manga?: any[]
  name?: string
  name_kanji?: string
  nicknames?: any[]
  pagination?: Record<string, any>
  person?: Record<string, any>
  role?: string
  url?: string
  voices?: any[]

  // Selects a custom action instead of the plain list:
  //   'anime' | 'manga' | 'picture' | 'voice'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Club {
  access?: string
  anime?: any[]
  category?: string
  characters?: any[]
  created?: string
  data?: any[]
  images?: Record<string, any>
  mal_id?: number
  manga?: any[]
  members?: number
  name?: string
  pagination?: Record<string, any>
  url?: string
  username?: string
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
  access?: string
  anime?: any[]
  category?: string
  characters?: any[]
  created?: string
  data?: any[]
  images?: Record<string, any>
  mal_id?: number
  manga?: any[]
  members?: number
  name?: string
  pagination?: Record<string, any>
  url?: string
  username?: string

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
  count?: number
  mal_id?: number
  name?: string
  url?: string

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
  data?: any[]
  pagination?: Record<string, any>
}

export interface Manga {
  approved?: boolean
  author_url?: string
  author_username?: string
  authors?: any[]
  background?: string
  chapters?: number
  character?: Record<string, any>
  comments?: number
  completed?: number
  data?: any[]
  date?: string
  demographics?: any[]
  dropped?: number
  entry?: Record<string, any>
  explicit_genres?: any[]
  external?: any[]
  favorites?: number
  genres?: any[]
  images?: Record<string, any>
  jpg?: Record<string, any>
  last_comment?: Record<string, any>
  mal_id?: number
  members?: number
  moreinfo?: string
  name?: string
  on_hold?: number
  pagination?: Record<string, any>
  plan_to_read?: number
  popularity?: number
  published?: Record<string, any>
  publishing?: boolean
  rank?: number
  reading?: number
  relation?: string
  relations?: any[]
  role?: string
  score?: number
  scored_by?: number
  scores?: any[]
  serializations?: any[]
  status?: string
  synopsis?: string
  themes?: any[]
  title?: string
  title_english?: string
  title_japanese?: string
  title_synonyms?: any[]
  titles?: any[]
  total?: number
  type?: string
  url?: string
  volumes?: number
  webp?: Record<string, any>
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
  approved?: boolean
  author_url?: string
  author_username?: string
  authors?: any[]
  background?: string
  chapters?: number
  character?: Record<string, any>
  comments?: number
  completed?: number
  data?: any[]
  date?: string
  demographics?: any[]
  dropped?: number
  entry?: Record<string, any>
  explicit_genres?: any[]
  external?: any[]
  favorites?: number
  genres?: any[]
  images?: Record<string, any>
  jpg?: Record<string, any>
  last_comment?: Record<string, any>
  mal_id?: number
  members?: number
  moreinfo?: string
  name?: string
  on_hold?: number
  pagination?: Record<string, any>
  plan_to_read?: number
  popularity?: number
  published?: Record<string, any>
  publishing?: boolean
  rank?: number
  reading?: number
  relation?: string
  relations?: any[]
  role?: string
  score?: number
  scored_by?: number
  scores?: any[]
  serializations?: any[]
  status?: string
  synopsis?: string
  themes?: any[]
  title?: string
  title_english?: string
  title_japanese?: string
  title_synonyms?: any[]
  titles?: any[]
  total?: number
  type?: string
  url?: string
  volumes?: number
  webp?: Record<string, any>

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
  data?: any[]
  pagination?: Record<string, any>
}

export interface Person {
  about?: string
  alternate_names?: any[]
  anime?: any[]
  birthday?: string
  character?: Record<string, any>
  data?: any[]
  family_name?: string
  favorites?: number
  given_name?: string
  images?: Record<string, any>
  jpg?: Record<string, any>
  mal_id?: number
  manga?: any[]
  name?: string
  pagination?: Record<string, any>
  position?: string
  role?: string
  url?: string
  voices?: any[]
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
  about?: string
  alternate_names?: any[]
  anime?: any[]
  birthday?: string
  character?: Record<string, any>
  data?: any[]
  family_name?: string
  favorites?: number
  given_name?: string
  images?: Record<string, any>
  jpg?: Record<string, any>
  mal_id?: number
  manga?: any[]
  name?: string
  pagination?: Record<string, any>
  position?: string
  role?: string
  url?: string
  voices?: any[]
  website_url?: string

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
  external?: any[]
  favorites?: number
  images?: Record<string, any>
  mal_id?: number
  name?: string
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
  about?: string
  count?: number
  data?: any[]
  established?: string
  external?: any[]
  favorites?: number
  images?: Record<string, any>
  mal_id?: number
  name?: string
  pagination?: Record<string, any>
  titles?: any[]
  url?: string

  // Selects a custom action instead of the plain list:
  //   'external'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Random {
  about?: string
  aired?: Record<string, any>
  airing?: boolean
  alternate_names?: any[]
  approved?: boolean
  authors?: any[]
  background?: string
  birthday?: string
  broadcast?: Record<string, any>
  chapters?: number
  demographics?: any[]
  duration?: string
  episodes?: number
  explicit_genres?: any[]
  family_name?: string
  favorites?: number
  gender?: string
  genres?: any[]
  given_name?: string
  images?: Record<string, any>
  joined?: string
  last_online?: string
  licensors?: any[]
  location?: string
  mal_id?: number
  members?: number
  name?: string
  name_kanji?: string
  nicknames?: any[]
  popularity?: number
  producers?: any[]
  published?: Record<string, any>
  publishing?: boolean
  rank?: number
  rating?: string
  score?: number
  scored_by?: number
  season?: string
  serializations?: any[]
  source?: string
  status?: string
  studios?: any[]
  synopsis?: string
  themes?: any[]
  title?: string
  title_english?: string
  title_japanese?: string
  title_synonyms?: any[]
  titles?: any[]
  trailer?: Record<string, any>
  type?: string
  url?: string
  username?: string
  volumes?: number
  website_url?: string
  year?: number
}

export interface RandomLoadMatch {
  about?: string
  aired?: Record<string, any>
  airing?: boolean
  alternate_names?: any[]
  approved?: boolean
  authors?: any[]
  background?: string
  birthday?: string
  broadcast?: Record<string, any>
  chapters?: number
  demographics?: any[]
  duration?: string
  episodes?: number
  explicit_genres?: any[]
  family_name?: string
  favorites?: number
  gender?: string
  genres?: any[]
  given_name?: string
  images?: Record<string, any>
  joined?: string
  last_online?: string
  licensors?: any[]
  location?: string
  mal_id?: number
  members?: number
  name?: string
  name_kanji?: string
  nicknames?: any[]
  popularity?: number
  producers?: any[]
  published?: Record<string, any>
  publishing?: boolean
  rank?: number
  rating?: string
  score?: number
  scored_by?: number
  season?: string
  serializations?: any[]
  source?: string
  status?: string
  studios?: any[]
  synopsis?: string
  themes?: any[]
  title?: string
  title_english?: string
  title_japanese?: string
  title_synonyms?: any[]
  titles?: any[]
  trailer?: Record<string, any>
  type?: string
  url?: string
  username?: string
  volumes?: number
  website_url?: string
  year?: number

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

  // Selects a custom action instead of the plain list:
  //   'anime' | 'manga'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Review {
}

export interface ReviewLoadMatch {

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
  data?: any[]
  pagination?: Record<string, any>
}

export interface Season {
  data?: any[]
  pagination?: Record<string, any>
  seasons?: any[]
  year?: number
}

export interface SeasonListMatch {
  season?: string
  year?: number

  // Selects a custom action instead of the plain list:
  //   'now' | 'upcoming'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Top {
  data?: any[]
  pagination?: Record<string, any>
}

export interface TopLoadMatch {
  data?: any[]
  pagination?: Record<string, any>

  // Selects a custom action instead of the plain load:
  //   'review'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface User {
  anime?: any[]
  birthday?: string
  characters?: any[]
  data?: any[]
  external?: any[]
  gender?: string
  images?: Record<string, any>
  joined?: string
  last_online?: string
  location?: string
  mal_id?: number
  manga?: any[]
  pagination?: Record<string, any>
  people?: any[]
  statistics?: Record<string, any>
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
  anime?: any[]
  birthday?: string
  characters?: any[]
  data?: any[]
  external?: any[]
  gender?: string
  images?: Record<string, any>
  joined?: string
  last_online?: string
  location?: string
  mal_id?: number
  manga?: any[]
  pagination?: Record<string, any>
  people?: any[]
  statistics?: Record<string, any>
  url?: string
  username?: string
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
}

export interface UserFriend {
  data?: any[]
  pagination?: Record<string, any>
}

export interface UserFriendListMatch {
  username: string
}

export interface UserHistory {
  date?: string
  entry?: Record<string, any>
  increment?: number
}

export interface UserHistoryListMatch {
  username: string
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
  data?: any[]
  pagination?: Record<string, any>
}

