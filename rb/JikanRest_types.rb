# frozen_string_literal: true

# Typed models for the JikanRest SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Anime entity data model.
#
# @!attribute [rw] author_url
#   @return [String, nil]
#
# @!attribute [rw] author_username
#   @return [String, nil]
#
# @!attribute [rw] character
#   @return [Hash, nil]
#
# @!attribute [rw] comment
#   @return [Integer, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] entry
#   @return [Hash, nil]
#
# @!attribute [rw] image
#   @return [Hash, nil]
#
# @!attribute [rw] last_comment
#   @return [Hash, nil]
#
# @!attribute [rw] mal_id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
#
# @!attribute [rw] person
#   @return [Hash, nil]
#
# @!attribute [rw] position
#   @return [Array, nil]
#
# @!attribute [rw] relation
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] voice_actor
#   @return [Array, nil]
Anime = Struct.new(
  :author_url,
  :author_username,
  :character,
  :comment,
  :data,
  :date,
  :entry,
  :image,
  :last_comment,
  :mal_id,
  :name,
  :pagination,
  :person,
  :position,
  :relation,
  :role,
  :title,
  :url,
  :voice_actor,
  keyword_init: true
)

# Request payload for Anime#load.
#
# @!attribute [rw] episode
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [Integer]
AnimeLoadMatch = Struct.new(
  :episode,
  :id,
  keyword_init: true
)

# Request payload for Anime#list.
#
# @!attribute [rw] id
#   @return [Integer]
AnimeListMatch = Struct.new(
  :id,
  keyword_init: true
)

# Character entity data model.
#
# @!attribute [rw] anime
#   @return [Hash, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] large_image_url
#   @return [String, nil]
#
# @!attribute [rw] manga
#   @return [Hash, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
#
# @!attribute [rw] person
#   @return [Hash, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
Character = Struct.new(
  :anime,
  :data,
  :image_url,
  :language,
  :large_image_url,
  :manga,
  :pagination,
  :person,
  :role,
  keyword_init: true
)

# Request payload for Character#load.
#
# @!attribute [rw] id
#   @return [Integer]
CharacterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Character#list.
#
# @!attribute [rw] id
#   @return [Integer]
CharacterListMatch = Struct.new(
  :id,
  keyword_init: true
)

# Club entity data model.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
Club = Struct.new(
  :data,
  :pagination,
  :url,
  :username,
  keyword_init: true
)

# Request payload for Club#load.
#
# @!attribute [rw] id
#   @return [Integer]
ClubLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Club#list.
#
# @!attribute [rw] id
#   @return [Integer]
ClubListMatch = Struct.new(
  :id,
  keyword_init: true
)

# External entity data model.
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
External = Struct.new(
  :name,
  :url,
  keyword_init: true
)

# Request payload for External#list.
#
# @!attribute [rw] username
#   @return [String]
ExternalListMatch = Struct.new(
  :username,
  keyword_init: true
)

# Genre entity data model.
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] mal_id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Genre = Struct.new(
  :count,
  :mal_id,
  :name,
  :url,
  keyword_init: true
)

# Request payload for Genre#list.
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] mal_id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
GenreListMatch = Struct.new(
  :count,
  :mal_id,
  :name,
  :url,
  keyword_init: true
)

# Magazine entity data model.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
Magazine = Struct.new(
  :data,
  :pagination,
  keyword_init: true
)

# Request payload for Magazine#list.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
MagazineListMatch = Struct.new(
  :data,
  :pagination,
  keyword_init: true
)

# Manga entity data model.
#
# @!attribute [rw] author_url
#   @return [String, nil]
#
# @!attribute [rw] author_username
#   @return [String, nil]
#
# @!attribute [rw] character
#   @return [Hash, nil]
#
# @!attribute [rw] comment
#   @return [Integer, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] entry
#   @return [Hash, nil]
#
# @!attribute [rw] jpg
#   @return [Hash, nil]
#
# @!attribute [rw] last_comment
#   @return [Hash, nil]
#
# @!attribute [rw] mal_id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
#
# @!attribute [rw] relation
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] webp
#   @return [Hash, nil]
Manga = Struct.new(
  :author_url,
  :author_username,
  :character,
  :comment,
  :data,
  :date,
  :entry,
  :jpg,
  :last_comment,
  :mal_id,
  :name,
  :pagination,
  :relation,
  :role,
  :title,
  :url,
  :webp,
  keyword_init: true
)

# Request payload for Manga#load.
#
# @!attribute [rw] id
#   @return [Integer]
MangaLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Manga#list.
#
# @!attribute [rw] id
#   @return [Integer]
MangaListMatch = Struct.new(
  :id,
  keyword_init: true
)

# PeopleSearch entity data model.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
PeopleSearch = Struct.new(
  :data,
  :pagination,
  keyword_init: true
)

# Request payload for PeopleSearch#list.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
PeopleSearchListMatch = Struct.new(
  :data,
  :pagination,
  keyword_init: true
)

# Person entity data model.
#
# @!attribute [rw] anime
#   @return [Hash, nil]
#
# @!attribute [rw] character
#   @return [Hash, nil]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] jpg
#   @return [Hash, nil]
#
# @!attribute [rw] manga
#   @return [Hash, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
#
# @!attribute [rw] position
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
Person = Struct.new(
  :anime,
  :character,
  :data,
  :jpg,
  :manga,
  :pagination,
  :position,
  :role,
  keyword_init: true
)

# Request payload for Person#load.
#
# @!attribute [rw] id
#   @return [Integer]
PersonLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Person#list.
#
# @!attribute [rw] id
#   @return [Integer]
PersonListMatch = Struct.new(
  :id,
  keyword_init: true
)

# Producer entity data model.
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Producer = Struct.new(
  :data,
  :name,
  :pagination,
  :url,
  keyword_init: true
)

# Request payload for Producer#load.
#
# @!attribute [rw] id
#   @return [Integer]
ProducerLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Producer#list.
#
# @!attribute [rw] id
#   @return [Integer]
ProducerListMatch = Struct.new(
  :id,
  keyword_init: true
)

# Random entity data model.
#
# @!attribute [rw] data
#   @return [Hash, nil]
Random = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for Random#load.
#
# @!attribute [rw] data
#   @return [Hash, nil]
RandomLoadMatch = Struct.new(
  :data,
  keyword_init: true
)

# Recommendation entity data model.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
Recommendation = Struct.new(
  :data,
  :pagination,
  keyword_init: true
)

# Request payload for Recommendation#list.
#
# @!attribute [rw] username
#   @return [String]
RecommendationListMatch = Struct.new(
  :username,
  keyword_init: true
)

# Review entity data model.
class Review
end

# Request payload for Review#load.
class ReviewLoadMatch
end

# Schedule entity data model.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
Schedule = Struct.new(
  :data,
  :pagination,
  keyword_init: true
)

# Request payload for Schedule#list.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
ScheduleListMatch = Struct.new(
  :data,
  :pagination,
  keyword_init: true
)

# Season entity data model.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
#
# @!attribute [rw] season
#   @return [Array, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
Season = Struct.new(
  :data,
  :pagination,
  :season,
  :year,
  keyword_init: true
)

# Request payload for Season#list.
#
# @!attribute [rw] season
#   @return [String]
#
# @!attribute [rw] year
#   @return [Integer]
SeasonListMatch = Struct.new(
  :season,
  :year,
  keyword_init: true
)

# Top entity data model.
#
# @!attribute [rw] data
#   @return [Object, nil]
Top = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for Top#load.
#
# @!attribute [rw] data
#   @return [Object, nil]
TopLoadMatch = Struct.new(
  :data,
  keyword_init: true
)

# User entity data model.
#
# @!attribute [rw] data
#   @return [Object, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
User = Struct.new(
  :data,
  :pagination,
  keyword_init: true
)

# Request payload for User#load.
#
# @!attribute [rw] username
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
UserLoadMatch = Struct.new(
  :username,
  :id,
  keyword_init: true
)

# Request payload for User#list.
#
# @!attribute [rw] data
#   @return [Object, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
UserListMatch = Struct.new(
  :data,
  :pagination,
  keyword_init: true
)

# UserAbout entity data model.
#
# @!attribute [rw] about
#   @return [String, nil]
UserAbout = Struct.new(
  :about,
  keyword_init: true
)

# Request payload for UserAbout#list.
#
# @!attribute [rw] username
#   @return [String]
UserAboutListMatch = Struct.new(
  :username,
  keyword_init: true
)

# UserClub entity data model.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
UserClub = Struct.new(
  :data,
  :pagination,
  keyword_init: true
)

# Request payload for UserClub#list.
#
# @!attribute [rw] username
#   @return [String]
UserClubListMatch = Struct.new(
  :username,
  keyword_init: true
)

# UserFriend entity data model.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
UserFriend = Struct.new(
  :data,
  :pagination,
  keyword_init: true
)

# Request payload for UserFriend#list.
#
# @!attribute [rw] username
#   @return [String]
UserFriendListMatch = Struct.new(
  :username,
  keyword_init: true
)

# UserHistory entity data model.
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] entry
#   @return [Hash, nil]
#
# @!attribute [rw] increment
#   @return [Integer, nil]
UserHistory = Struct.new(
  :date,
  :entry,
  :increment,
  keyword_init: true
)

# Request payload for UserHistory#list.
#
# @!attribute [rw] username
#   @return [String]
UserHistoryListMatch = Struct.new(
  :username,
  keyword_init: true
)

# UserStatistic entity data model.
#
# @!attribute [rw] data
#   @return [Hash, nil]
UserStatistic = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for UserStatistic#load.
#
# @!attribute [rw] username
#   @return [String]
UserStatisticLoadMatch = Struct.new(
  :username,
  keyword_init: true
)

# UserUpdate entity data model.
#
# @!attribute [rw] data
#   @return [Hash, nil]
UserUpdate = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for UserUpdate#load.
#
# @!attribute [rw] username
#   @return [String]
UserUpdateLoadMatch = Struct.new(
  :username,
  keyword_init: true
)

# WatchEpisode entity data model.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
WatchEpisode = Struct.new(
  :data,
  :pagination,
  keyword_init: true
)

# Request payload for WatchEpisode#list.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
WatchEpisodeListMatch = Struct.new(
  :data,
  :pagination,
  keyword_init: true
)

# WatchPromo entity data model.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
WatchPromo = Struct.new(
  :data,
  :pagination,
  keyword_init: true
)

# Request payload for WatchPromo#list.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
WatchPromoListMatch = Struct.new(
  :data,
  :pagination,
  keyword_init: true
)

