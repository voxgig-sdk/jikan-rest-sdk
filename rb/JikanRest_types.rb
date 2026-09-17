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
# @!attribute [rw] aired
#   @return [String, nil]
#
# @!attribute [rw] airing
#   @return [Boolean, nil]
#
# @!attribute [rw] approved
#   @return [Boolean, nil]
#
# @!attribute [rw] background
#   @return [String, nil]
#
# @!attribute [rw] broadcast
#   @return [Hash, nil]
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] demographics
#   @return [Array, nil]
#
# @!attribute [rw] duration
#   @return [Integer, nil]
#
# @!attribute [rw] episodes
#   @return [Integer, nil]
#
# @!attribute [rw] explicit_genres
#   @return [Array, nil]
#
# @!attribute [rw] favorites
#   @return [Integer, nil]
#
# @!attribute [rw] filler
#   @return [Boolean, nil]
#
# @!attribute [rw] genres
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] images
#   @return [Hash, nil]
#
# @!attribute [rw] licensors
#   @return [Array, nil]
#
# @!attribute [rw] mal_id
#   @return [Integer, nil]
#
# @!attribute [rw] members
#   @return [Integer, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
#
# @!attribute [rw] popularity
#   @return [Integer, nil]
#
# @!attribute [rw] producers
#   @return [Array, nil]
#
# @!attribute [rw] rank
#   @return [Integer, nil]
#
# @!attribute [rw] rating
#   @return [String, nil]
#
# @!attribute [rw] recap
#   @return [Boolean, nil]
#
# @!attribute [rw] score
#   @return [Float, nil]
#
# @!attribute [rw] scored_by
#   @return [Integer, nil]
#
# @!attribute [rw] season
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] studios
#   @return [Array, nil]
#
# @!attribute [rw] synopsis
#   @return [String, nil]
#
# @!attribute [rw] themes
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] title_english
#   @return [String, nil]
#
# @!attribute [rw] title_japanese
#   @return [String, nil]
#
# @!attribute [rw] title_romanji
#   @return [String, nil]
#
# @!attribute [rw] title_synonyms
#   @return [Array, nil]
#
# @!attribute [rw] titles
#   @return [Array, nil]
#
# @!attribute [rw] trailer
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
Anime = Struct.new(
  :aired,
  :airing,
  :approved,
  :background,
  :broadcast,
  :data,
  :demographics,
  :duration,
  :episodes,
  :explicit_genres,
  :favorites,
  :filler,
  :genres,
  :id,
  :images,
  :licensors,
  :mal_id,
  :members,
  :pagination,
  :popularity,
  :producers,
  :rank,
  :rating,
  :recap,
  :score,
  :scored_by,
  :season,
  :source,
  :status,
  :studios,
  :synopsis,
  :themes,
  :title,
  :title_english,
  :title_japanese,
  :title_romanji,
  :title_synonyms,
  :titles,
  :trailer,
  :type,
  :url,
  :year,
  keyword_init: true
)

# Request payload for Anime#load.
#
# @!attribute [rw] episode
#   @return [Integer, nil]
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
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] genre
#   @return [String, nil]
#
# @!attribute [rw] genres_exclude
#   @return [String, nil]
#
# @!attribute [rw] letter
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] max_score
#   @return [Float, nil]
#
# @!attribute [rw] min_score
#   @return [Float, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] producer
#   @return [String, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] rating
#   @return [String, nil]
#
# @!attribute [rw] score
#   @return [Float, nil]
#
# @!attribute [rw] sfw
#   @return [Boolean, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] unapproved
#   @return [Boolean, nil]
AnimeListMatch = Struct.new(
  :end_date,
  :genre,
  :genres_exclude,
  :letter,
  :limit,
  :max_score,
  :min_score,
  :order_by,
  :page,
  :producer,
  :q,
  :rating,
  :score,
  :sfw,
  :sort,
  :start_date,
  :status,
  :type,
  :unapproved,
  keyword_init: true
)

# Character entity data model.
#
# @!attribute [rw] about
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] favorites
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] images
#   @return [Hash, nil]
#
# @!attribute [rw] mal_id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] name_kanji
#   @return [String, nil]
#
# @!attribute [rw] nicknames
#   @return [Array, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Character = Struct.new(
  :about,
  :data,
  :favorites,
  :id,
  :images,
  :mal_id,
  :name,
  :name_kanji,
  :nicknames,
  :pagination,
  :url,
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
# @!attribute [rw] letter
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
CharacterListMatch = Struct.new(
  :letter,
  :limit,
  :order_by,
  :page,
  :q,
  :sort,
  keyword_init: true
)

# Club entity data model.
#
# @!attribute [rw] access
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] images
#   @return [Hash, nil]
#
# @!attribute [rw] mal_id
#   @return [Integer, nil]
#
# @!attribute [rw] members
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Club = Struct.new(
  :access,
  :category,
  :created,
  :data,
  :id,
  :images,
  :mal_id,
  :members,
  :name,
  :pagination,
  :url,
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
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] letter
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
ClubListMatch = Struct.new(
  :category,
  :letter,
  :limit,
  :order_by,
  :page,
  :q,
  :sort,
  :type,
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
# @!attribute [rw] filter
#   @return [String, nil]
GenreListMatch = Struct.new(
  :filter,
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
# @!attribute [rw] letter
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
MagazineListMatch = Struct.new(
  :letter,
  :limit,
  :order_by,
  :page,
  :q,
  :sort,
  keyword_init: true
)

# Manga entity data model.
#
# @!attribute [rw] approved
#   @return [Boolean, nil]
#
# @!attribute [rw] authors
#   @return [Array, nil]
#
# @!attribute [rw] background
#   @return [String, nil]
#
# @!attribute [rw] chapters
#   @return [Integer, nil]
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] demographics
#   @return [Array, nil]
#
# @!attribute [rw] explicit_genres
#   @return [Array, nil]
#
# @!attribute [rw] favorites
#   @return [Integer, nil]
#
# @!attribute [rw] genres
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] images
#   @return [Hash, nil]
#
# @!attribute [rw] mal_id
#   @return [Integer, nil]
#
# @!attribute [rw] members
#   @return [Integer, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
#
# @!attribute [rw] popularity
#   @return [Integer, nil]
#
# @!attribute [rw] published
#   @return [Hash, nil]
#
# @!attribute [rw] publishing
#   @return [Boolean, nil]
#
# @!attribute [rw] rank
#   @return [Integer, nil]
#
# @!attribute [rw] score
#   @return [Float, nil]
#
# @!attribute [rw] scored_by
#   @return [Integer, nil]
#
# @!attribute [rw] serializations
#   @return [Array, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] synopsis
#   @return [String, nil]
#
# @!attribute [rw] themes
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] title_english
#   @return [String, nil]
#
# @!attribute [rw] title_japanese
#   @return [String, nil]
#
# @!attribute [rw] titles
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] volumes
#   @return [Integer, nil]
Manga = Struct.new(
  :approved,
  :authors,
  :background,
  :chapters,
  :data,
  :demographics,
  :explicit_genres,
  :favorites,
  :genres,
  :id,
  :images,
  :mal_id,
  :members,
  :pagination,
  :popularity,
  :published,
  :publishing,
  :rank,
  :score,
  :scored_by,
  :serializations,
  :status,
  :synopsis,
  :themes,
  :title,
  :title_english,
  :title_japanese,
  :titles,
  :type,
  :url,
  :volumes,
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
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] genre
#   @return [String, nil]
#
# @!attribute [rw] genres_exclude
#   @return [String, nil]
#
# @!attribute [rw] letter
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] magazine
#   @return [String, nil]
#
# @!attribute [rw] max_score
#   @return [Float, nil]
#
# @!attribute [rw] min_score
#   @return [Float, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] score
#   @return [Float, nil]
#
# @!attribute [rw] sfw
#   @return [Boolean, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] unapproved
#   @return [Boolean, nil]
MangaListMatch = Struct.new(
  :end_date,
  :genre,
  :genres_exclude,
  :letter,
  :limit,
  :magazine,
  :max_score,
  :min_score,
  :order_by,
  :page,
  :q,
  :score,
  :sfw,
  :sort,
  :start_date,
  :status,
  :type,
  :unapproved,
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
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
PeopleSearchListMatch = Struct.new(
  :limit,
  :page,
  keyword_init: true
)

# Person entity data model.
#
# @!attribute [rw] about
#   @return [String, nil]
#
# @!attribute [rw] alternate_names
#   @return [Array, nil]
#
# @!attribute [rw] birthday
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] family_name
#   @return [String, nil]
#
# @!attribute [rw] favorites
#   @return [Integer, nil]
#
# @!attribute [rw] given_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] images
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
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] website_url
#   @return [String, nil]
Person = Struct.new(
  :about,
  :alternate_names,
  :birthday,
  :data,
  :family_name,
  :favorites,
  :given_name,
  :id,
  :images,
  :mal_id,
  :name,
  :pagination,
  :url,
  :website_url,
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
# @!attribute [rw] letter
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
PersonListMatch = Struct.new(
  :letter,
  :limit,
  :order_by,
  :page,
  :q,
  :sort,
  keyword_init: true
)

# Producer entity data model.
#
# @!attribute [rw] about
#   @return [String, nil]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] established
#   @return [String, nil]
#
# @!attribute [rw] favorites
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] images
#   @return [Hash, nil]
#
# @!attribute [rw] mal_id
#   @return [Integer, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
#
# @!attribute [rw] titles
#   @return [Array, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Producer = Struct.new(
  :about,
  :count,
  :data,
  :established,
  :favorites,
  :id,
  :images,
  :mal_id,
  :pagination,
  :titles,
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
# @!attribute [rw] letter
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] order_by
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
ProducerListMatch = Struct.new(
  :letter,
  :limit,
  :order_by,
  :page,
  :q,
  :sort,
  keyword_init: true
)

# Random entity data model.
class RandomType
end

# Request payload for Random#load.
class RandomLoadMatch
end

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
#
# @!attribute [rw] page
#   @return [Integer, nil]
RecommendationListMatch = Struct.new(
  :username,
  :page,
  keyword_init: true
)

# Review entity data model.
class Review
end

# Request payload for Review#load.
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] preliminary
#   @return [Boolean, nil]
#
# @!attribute [rw] spoiler
#   @return [Boolean, nil]
ReviewLoadMatch = Struct.new(
  :page,
  :preliminary,
  :spoiler,
  keyword_init: true
)

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
# @!attribute [rw] filter
#   @return [String, nil]
#
# @!attribute [rw] kid
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] sfw
#   @return [String, nil]
#
# @!attribute [rw] unapproved
#   @return [Boolean, nil]
ScheduleListMatch = Struct.new(
  :filter,
  :kid,
  :limit,
  :page,
  :sfw,
  :unapproved,
  keyword_init: true
)

# Season entity data model.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
#
# @!attribute [rw] seasons
#   @return [Array, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
Season = Struct.new(
  :data,
  :id,
  :pagination,
  :seasons,
  :year,
  keyword_init: true
)

# Request payload for Season#load.
#
# @!attribute [rw] season
#   @return [String]
#
# @!attribute [rw] year
#   @return [Integer]
#
# @!attribute [rw] continuing
#   @return [Boolean, nil]
#
# @!attribute [rw] filter
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] sfw
#   @return [Boolean, nil]
#
# @!attribute [rw] unapproved
#   @return [Boolean, nil]
SeasonLoadMatch = Struct.new(
  :season,
  :year,
  :continuing,
  :filter,
  :limit,
  :page,
  :sfw,
  :unapproved,
  keyword_init: true
)

# Request payload for Season#list.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
#
# @!attribute [rw] seasons
#   @return [Array, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
SeasonListMatch = Struct.new(
  :data,
  :id,
  :pagination,
  :seasons,
  :year,
  keyword_init: true
)

# Top entity data model.
class Top
end

# Request payload for Top#load.
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] preliminary
#   @return [Boolean, nil]
#
# @!attribute [rw] spoiler
#   @return [Boolean, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
TopLoadMatch = Struct.new(
  :page,
  :preliminary,
  :spoiler,
  :type,
  keyword_init: true
)

# User entity data model.
#
# @!attribute [rw] birthday
#   @return [String, nil]
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] gender
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] images
#   @return [Hash, nil]
#
# @!attribute [rw] joined
#   @return [String, nil]
#
# @!attribute [rw] last_online
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] mal_id
#   @return [Integer, nil]
#
# @!attribute [rw] pagination
#   @return [Hash, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
User = Struct.new(
  :birthday,
  :data,
  :gender,
  :id,
  :images,
  :joined,
  :last_online,
  :location,
  :mal_id,
  :pagination,
  :url,
  :username,
  keyword_init: true
)

# Request payload for User#load.
#
# @!attribute [rw] id
#   @return [Integer]
UserLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for User#list.
#
# @!attribute [rw] gender
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] max_age
#   @return [Integer, nil]
#
# @!attribute [rw] min_age
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
UserListMatch = Struct.new(
  :gender,
  :limit,
  :location,
  :max_age,
  :min_age,
  :page,
  :q,
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
#
# @!attribute [rw] page
#   @return [Integer, nil]
UserClubListMatch = Struct.new(
  :username,
  :page,
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
#
# @!attribute [rw] page
#   @return [Integer, nil]
UserFriendListMatch = Struct.new(
  :username,
  :page,
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
#
# @!attribute [rw] type
#   @return [String, nil]
UserHistoryListMatch = Struct.new(
  :username,
  :type,
  keyword_init: true
)

# UserStatistic entity data model.
#
# @!attribute [rw] anime
#   @return [Hash, nil]
#
# @!attribute [rw] manga
#   @return [Hash, nil]
UserStatistic = Struct.new(
  :anime,
  :manga,
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
# @!attribute [rw] anime
#   @return [Array, nil]
#
# @!attribute [rw] manga
#   @return [Array, nil]
UserUpdate = Struct.new(
  :anime,
  :manga,
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
# @!attribute [rw] page
#   @return [Integer, nil]
WatchPromoListMatch = Struct.new(
  :page,
  keyword_init: true
)

