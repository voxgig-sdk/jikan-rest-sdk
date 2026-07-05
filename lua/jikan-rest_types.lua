-- Typed models for the JikanRest SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Anime
---@field author_url? string
---@field author_username? string
---@field character? table
---@field comment? number
---@field data? table
---@field date? string
---@field entry? table
---@field image? table
---@field last_comment? table
---@field mal_id? number
---@field name? string
---@field pagination? table
---@field person? table
---@field position? table
---@field relation? string
---@field role? string
---@field title? string
---@field url? string
---@field voice_actor? table

---@class AnimeLoadMatch
---@field episode number
---@field id number

---@class AnimeListMatch
---@field id number

---@class Character
---@field anime? table
---@field data? table
---@field image_url? string
---@field language? string
---@field large_image_url? string
---@field manga? table
---@field pagination? table
---@field person? table
---@field role? string

---@class CharacterLoadMatch
---@field id number

---@class CharacterListMatch
---@field id number

---@class Club
---@field data? table
---@field pagination? table
---@field url? string
---@field username? string

---@class ClubLoadMatch
---@field id number

---@class ClubListMatch
---@field id number

---@class External
---@field name? string
---@field url? string

---@class ExternalListMatch
---@field username string

---@class Genre
---@field count? number
---@field mal_id? number
---@field name? string
---@field url? string

---@class GenreListMatch
---@field count? number
---@field mal_id? number
---@field name? string
---@field url? string

---@class Magazine
---@field data? table
---@field pagination? table

---@class MagazineListMatch
---@field data? table
---@field pagination? table

---@class Manga
---@field author_url? string
---@field author_username? string
---@field character? table
---@field comment? number
---@field data? table
---@field date? string
---@field entry? table
---@field jpg? table
---@field last_comment? table
---@field mal_id? number
---@field name? string
---@field pagination? table
---@field relation? string
---@field role? string
---@field title? string
---@field url? string
---@field webp? table

---@class MangaLoadMatch
---@field id number

---@class MangaListMatch
---@field id number

---@class PeopleSearch
---@field data? table
---@field pagination? table

---@class PeopleSearchListMatch
---@field data? table
---@field pagination? table

---@class Person
---@field anime? table
---@field character? table
---@field data? table
---@field jpg? table
---@field manga? table
---@field pagination? table
---@field position? string
---@field role? string

---@class PersonLoadMatch
---@field id number

---@class PersonListMatch
---@field id number

---@class Producer
---@field data? table
---@field name? string
---@field pagination? table
---@field url? string

---@class ProducerLoadMatch
---@field id number

---@class ProducerListMatch
---@field id number

---@class Random
---@field data? table

---@class RandomLoadMatch
---@field data? table

---@class Recommendation
---@field data? table
---@field pagination? table

---@class RecommendationListMatch
---@field username string

---@class Review

---@class ReviewLoadMatch

---@class Schedule
---@field data? table
---@field pagination? table

---@class ScheduleListMatch
---@field data? table
---@field pagination? table

---@class Season
---@field data? table
---@field pagination? table
---@field season? table
---@field year? number

---@class SeasonListMatch
---@field season string
---@field year number

---@class Top
---@field data? any

---@class TopLoadMatch
---@field data? any

---@class User
---@field data? any
---@field pagination? table

---@class UserLoadMatch
---@field username string
---@field id number

---@class UserListMatch
---@field data? any
---@field pagination? table

---@class UserAbout
---@field about? string

---@class UserAboutListMatch
---@field username string

---@class UserClub
---@field data? table
---@field pagination? table

---@class UserClubListMatch
---@field username string

---@class UserFriend
---@field data? table
---@field pagination? table

---@class UserFriendListMatch
---@field username string

---@class UserHistory
---@field date? string
---@field entry? table
---@field increment? number

---@class UserHistoryListMatch
---@field username string

---@class UserStatistic
---@field data? table

---@class UserStatisticLoadMatch
---@field username string

---@class UserUpdate
---@field data? table

---@class UserUpdateLoadMatch
---@field username string

---@class WatchEpisode
---@field data? table
---@field pagination? table

---@class WatchEpisodeListMatch
---@field data? table
---@field pagination? table

---@class WatchPromo
---@field data? table
---@field pagination? table

---@class WatchPromoListMatch
---@field data? table
---@field pagination? table

local M = {}

return M
