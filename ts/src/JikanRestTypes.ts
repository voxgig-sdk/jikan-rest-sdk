// Typed models for the JikanRest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Anime {
  author_url?: string
  author_username?: string
  character?: Record<string, any>
  comment?: number
  data?: Record<string, any>
  date?: string
  entry?: Record<string, any>
  image?: Record<string, any>
  last_comment?: Record<string, any>
  mal_id?: number
  name?: string
  pagination?: Record<string, any>
  person?: Record<string, any>
  position?: any[]
  relation?: string
  role?: string
  title?: string
  url?: string
  voice_actor?: any[]
}

export interface AnimeLoadMatch {
  episode: number
  id: number
}

export interface AnimeListMatch {
  id: number
}

export interface Character {
  anime?: Record<string, any>
  data?: Record<string, any>
  image_url?: string
  language?: string
  large_image_url?: string
  manga?: Record<string, any>
  pagination?: Record<string, any>
  person?: Record<string, any>
  role?: string
}

export interface CharacterLoadMatch {
  id: number
}

export interface CharacterListMatch {
  id: number
}

export interface Club {
  data?: Record<string, any>
  pagination?: Record<string, any>
  url?: string
  username?: string
}

export interface ClubLoadMatch {
  id: number
}

export interface ClubListMatch {
  id: number
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

export type GenreListMatch = Partial<Genre>

export interface Magazine {
  data?: any[]
  pagination?: Record<string, any>
}

export type MagazineListMatch = Partial<Magazine>

export interface Manga {
  author_url?: string
  author_username?: string
  character?: Record<string, any>
  comment?: number
  data?: Record<string, any>
  date?: string
  entry?: Record<string, any>
  jpg?: Record<string, any>
  last_comment?: Record<string, any>
  mal_id?: number
  name?: string
  pagination?: Record<string, any>
  relation?: string
  role?: string
  title?: string
  url?: string
  webp?: Record<string, any>
}

export interface MangaLoadMatch {
  id: number
}

export interface MangaListMatch {
  id: number
}

export interface PeopleSearch {
  data?: any[]
  pagination?: Record<string, any>
}

export type PeopleSearchListMatch = Partial<PeopleSearch>

export interface Person {
  anime?: Record<string, any>
  character?: Record<string, any>
  data?: Record<string, any>
  jpg?: Record<string, any>
  manga?: Record<string, any>
  pagination?: Record<string, any>
  position?: string
  role?: string
}

export interface PersonLoadMatch {
  id: number
}

export interface PersonListMatch {
  id: number
}

export interface Producer {
  data?: Record<string, any>
  name?: string
  pagination?: Record<string, any>
  url?: string
}

export interface ProducerLoadMatch {
  id: number
}

export interface ProducerListMatch {
  id: number
}

export interface Random {
  data?: Record<string, any>
}

export type RandomLoadMatch = Partial<Random>

export interface Recommendation {
  data?: any[]
  pagination?: Record<string, any>
}

export interface RecommendationListMatch {
  username: string
}

export interface Review {
}

export type ReviewLoadMatch = Partial<Review>

export interface Schedule {
  data?: any[]
  pagination?: Record<string, any>
}

export type ScheduleListMatch = Partial<Schedule>

export interface Season {
  data?: any[]
  pagination?: Record<string, any>
  season?: any[]
  year?: number
}

export interface SeasonListMatch {
  season: string
  year: number
}

export interface Top {
  data?: any
}

export type TopLoadMatch = Partial<Top>

export interface User {
  data?: any
  pagination?: Record<string, any>
}

export interface UserLoadMatch {
  username: string
  id: number
}

export type UserListMatch = Partial<User>

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
  data?: Record<string, any>
}

export interface UserStatisticLoadMatch {
  username: string
}

export interface UserUpdate {
  data?: Record<string, any>
}

export interface UserUpdateLoadMatch {
  username: string
}

export interface WatchEpisode {
  data?: any[]
  pagination?: Record<string, any>
}

export type WatchEpisodeListMatch = Partial<WatchEpisode>

export interface WatchPromo {
  data?: any[]
  pagination?: Record<string, any>
}

export type WatchPromoListMatch = Partial<WatchPromo>

