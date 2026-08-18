// Typed models for the JikanRest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/jikan-rest-sdk/go/core"
)

// Anime is the typed data model for the anime entity.
type Anime struct {
	Aired *string `json:"aired,omitempty"`
	Airing *bool `json:"airing,omitempty"`
	Approved *bool `json:"approved,omitempty"`
	AuthorUrl *string `json:"author_url,omitempty"`
	AuthorUsername *string `json:"author_username,omitempty"`
	Background *string `json:"background,omitempty"`
	Broadcast *map[string]any `json:"broadcast,omitempty"`
	Character *map[string]any `json:"character,omitempty"`
	Comments *int `json:"comments,omitempty"`
	Completed *int `json:"completed,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Date *string `json:"date,omitempty"`
	Demographics *[]any `json:"demographics,omitempty"`
	Dropped *int `json:"dropped,omitempty"`
	Duration *int `json:"duration,omitempty"`
	Endings *[]any `json:"endings,omitempty"`
	Entry *map[string]any `json:"entry,omitempty"`
	Episodes *int `json:"episodes,omitempty"`
	ExplicitGenres *[]any `json:"explicit_genres,omitempty"`
	External *[]any `json:"external,omitempty"`
	Favorites *int `json:"favorites,omitempty"`
	Filler *bool `json:"filler,omitempty"`
	Genres *[]any `json:"genres,omitempty"`
	Images *map[string]any `json:"images,omitempty"`
	LastComment *map[string]any `json:"last_comment,omitempty"`
	Licensors *[]any `json:"licensors,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Members *int `json:"members,omitempty"`
	Moreinfo *string `json:"moreinfo,omitempty"`
	MusicVideos *[]any `json:"music_videos,omitempty"`
	Name *string `json:"name,omitempty"`
	OnHold *int `json:"on_hold,omitempty"`
	Openings *[]any `json:"openings,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Person *map[string]any `json:"person,omitempty"`
	PlanToWatch *int `json:"plan_to_watch,omitempty"`
	Popularity *int `json:"popularity,omitempty"`
	Positions *[]any `json:"positions,omitempty"`
	Producers *[]any `json:"producers,omitempty"`
	Promo *[]any `json:"promo,omitempty"`
	Rank *int `json:"rank,omitempty"`
	Rating *string `json:"rating,omitempty"`
	Recap *bool `json:"recap,omitempty"`
	Relation *string `json:"relation,omitempty"`
	Relations *[]any `json:"relations,omitempty"`
	Role *string `json:"role,omitempty"`
	Score *float64 `json:"score,omitempty"`
	ScoredBy *int `json:"scored_by,omitempty"`
	Scores *[]any `json:"scores,omitempty"`
	Season *string `json:"season,omitempty"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	Streaming *[]any `json:"streaming,omitempty"`
	Studios *[]any `json:"studios,omitempty"`
	Synopsis *string `json:"synopsis,omitempty"`
	Theme *map[string]any `json:"theme,omitempty"`
	Themes *[]any `json:"themes,omitempty"`
	Title *string `json:"title,omitempty"`
	TitleEnglish *string `json:"title_english,omitempty"`
	TitleJapanese *string `json:"title_japanese,omitempty"`
	TitleRomanji *string `json:"title_romanji,omitempty"`
	TitleSynonyms *[]any `json:"title_synonyms,omitempty"`
	Titles *[]any `json:"titles,omitempty"`
	Total *int `json:"total,omitempty"`
	Trailer *map[string]any `json:"trailer,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
	VoiceActors *[]any `json:"voice_actors,omitempty"`
	Watching *int `json:"watching,omitempty"`
	Year *int `json:"year,omitempty"`
}

// AnimeLoadMatch is the typed request payload for Anime.LoadTyped.
type AnimeLoadMatch struct {
	Episode *int `json:"episode,omitempty"`
	Id int `json:"id"`
}

// AnimeListMatch is the typed request payload for Anime.ListTyped.
type AnimeListMatch struct {
	Aired *string `json:"aired,omitempty"`
	Airing *bool `json:"airing,omitempty"`
	Approved *bool `json:"approved,omitempty"`
	AuthorUrl *string `json:"author_url,omitempty"`
	AuthorUsername *string `json:"author_username,omitempty"`
	Background *string `json:"background,omitempty"`
	Broadcast *map[string]any `json:"broadcast,omitempty"`
	Character *map[string]any `json:"character,omitempty"`
	Comments *int `json:"comments,omitempty"`
	Completed *int `json:"completed,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Date *string `json:"date,omitempty"`
	Demographics *[]any `json:"demographics,omitempty"`
	Dropped *int `json:"dropped,omitempty"`
	Duration *int `json:"duration,omitempty"`
	Endings *[]any `json:"endings,omitempty"`
	Entry *map[string]any `json:"entry,omitempty"`
	Episodes *int `json:"episodes,omitempty"`
	ExplicitGenres *[]any `json:"explicit_genres,omitempty"`
	External *[]any `json:"external,omitempty"`
	Favorites *int `json:"favorites,omitempty"`
	Filler *bool `json:"filler,omitempty"`
	Genres *[]any `json:"genres,omitempty"`
	Images *map[string]any `json:"images,omitempty"`
	LastComment *map[string]any `json:"last_comment,omitempty"`
	Licensors *[]any `json:"licensors,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Members *int `json:"members,omitempty"`
	Moreinfo *string `json:"moreinfo,omitempty"`
	MusicVideos *[]any `json:"music_videos,omitempty"`
	Name *string `json:"name,omitempty"`
	OnHold *int `json:"on_hold,omitempty"`
	Openings *[]any `json:"openings,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Person *map[string]any `json:"person,omitempty"`
	PlanToWatch *int `json:"plan_to_watch,omitempty"`
	Popularity *int `json:"popularity,omitempty"`
	Positions *[]any `json:"positions,omitempty"`
	Producers *[]any `json:"producers,omitempty"`
	Promo *[]any `json:"promo,omitempty"`
	Rank *int `json:"rank,omitempty"`
	Rating *string `json:"rating,omitempty"`
	Recap *bool `json:"recap,omitempty"`
	Relation *string `json:"relation,omitempty"`
	Relations *[]any `json:"relations,omitempty"`
	Role *string `json:"role,omitempty"`
	Score *float64 `json:"score,omitempty"`
	ScoredBy *int `json:"scored_by,omitempty"`
	Scores *[]any `json:"scores,omitempty"`
	Season *string `json:"season,omitempty"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	Streaming *[]any `json:"streaming,omitempty"`
	Studios *[]any `json:"studios,omitempty"`
	Synopsis *string `json:"synopsis,omitempty"`
	Theme *map[string]any `json:"theme,omitempty"`
	Themes *[]any `json:"themes,omitempty"`
	Title *string `json:"title,omitempty"`
	TitleEnglish *string `json:"title_english,omitempty"`
	TitleJapanese *string `json:"title_japanese,omitempty"`
	TitleRomanji *string `json:"title_romanji,omitempty"`
	TitleSynonyms *[]any `json:"title_synonyms,omitempty"`
	Titles *[]any `json:"titles,omitempty"`
	Total *int `json:"total,omitempty"`
	Trailer *map[string]any `json:"trailer,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
	VoiceActors *[]any `json:"voice_actors,omitempty"`
	Watching *int `json:"watching,omitempty"`
	Year *int `json:"year,omitempty"`
}

// Character is the typed data model for the character entity.
type Character struct {
	About *string `json:"about,omitempty"`
	Anime *[]any `json:"anime,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Favorites *int `json:"favorites,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Images *map[string]any `json:"images,omitempty"`
	Language *string `json:"language,omitempty"`
	LargeImageUrl *string `json:"large_image_url,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Manga *[]any `json:"manga,omitempty"`
	Name *string `json:"name,omitempty"`
	NameKanji *string `json:"name_kanji,omitempty"`
	Nicknames *[]any `json:"nicknames,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Person *map[string]any `json:"person,omitempty"`
	Role *string `json:"role,omitempty"`
	Url *string `json:"url,omitempty"`
	Voices *[]any `json:"voices,omitempty"`
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	Id int `json:"id"`
}

// CharacterListMatch is the typed request payload for Character.ListTyped.
type CharacterListMatch struct {
	About *string `json:"about,omitempty"`
	Anime *[]any `json:"anime,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Favorites *int `json:"favorites,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Images *map[string]any `json:"images,omitempty"`
	Language *string `json:"language,omitempty"`
	LargeImageUrl *string `json:"large_image_url,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Manga *[]any `json:"manga,omitempty"`
	Name *string `json:"name,omitempty"`
	NameKanji *string `json:"name_kanji,omitempty"`
	Nicknames *[]any `json:"nicknames,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Person *map[string]any `json:"person,omitempty"`
	Role *string `json:"role,omitempty"`
	Url *string `json:"url,omitempty"`
	Voices *[]any `json:"voices,omitempty"`
}

// Club is the typed data model for the club entity.
type Club struct {
	Access *string `json:"access,omitempty"`
	Anime *[]any `json:"anime,omitempty"`
	Category *string `json:"category,omitempty"`
	Characters *[]any `json:"characters,omitempty"`
	Created *string `json:"created,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Images *map[string]any `json:"images,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Manga *[]any `json:"manga,omitempty"`
	Members *int `json:"members,omitempty"`
	Name *string `json:"name,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Url *string `json:"url,omitempty"`
	Username *string `json:"username,omitempty"`
}

// ClubLoadMatch is the typed request payload for Club.LoadTyped.
type ClubLoadMatch struct {
	Id int `json:"id"`
}

// ClubListMatch is the typed request payload for Club.ListTyped.
type ClubListMatch struct {
	Access *string `json:"access,omitempty"`
	Anime *[]any `json:"anime,omitempty"`
	Category *string `json:"category,omitempty"`
	Characters *[]any `json:"characters,omitempty"`
	Created *string `json:"created,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Images *map[string]any `json:"images,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Manga *[]any `json:"manga,omitempty"`
	Members *int `json:"members,omitempty"`
	Name *string `json:"name,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Url *string `json:"url,omitempty"`
	Username *string `json:"username,omitempty"`
}

// External is the typed data model for the external entity.
type External struct {
	Name *string `json:"name,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ExternalListMatch is the typed request payload for External.ListTyped.
type ExternalListMatch struct {
	Username string `json:"username"`
}

// Genre is the typed data model for the genre entity.
type Genre struct {
	Count *int `json:"count,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Name *string `json:"name,omitempty"`
	Url *string `json:"url,omitempty"`
}

// GenreListMatch is the typed request payload for Genre.ListTyped.
type GenreListMatch struct {
	Count *int `json:"count,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Name *string `json:"name,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Magazine is the typed data model for the magazine entity.
type Magazine struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// MagazineListMatch is the typed request payload for Magazine.ListTyped.
type MagazineListMatch struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// Manga is the typed data model for the manga entity.
type Manga struct {
	Approved *bool `json:"approved,omitempty"`
	AuthorUrl *string `json:"author_url,omitempty"`
	AuthorUsername *string `json:"author_username,omitempty"`
	Authors *[]any `json:"authors,omitempty"`
	Background *string `json:"background,omitempty"`
	Chapters *int `json:"chapters,omitempty"`
	Character *map[string]any `json:"character,omitempty"`
	Comments *int `json:"comments,omitempty"`
	Completed *int `json:"completed,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Date *string `json:"date,omitempty"`
	Demographics *[]any `json:"demographics,omitempty"`
	Dropped *int `json:"dropped,omitempty"`
	Entry *map[string]any `json:"entry,omitempty"`
	ExplicitGenres *[]any `json:"explicit_genres,omitempty"`
	External *[]any `json:"external,omitempty"`
	Favorites *int `json:"favorites,omitempty"`
	Genres *[]any `json:"genres,omitempty"`
	Images *map[string]any `json:"images,omitempty"`
	Jpg *map[string]any `json:"jpg,omitempty"`
	LastComment *map[string]any `json:"last_comment,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Members *int `json:"members,omitempty"`
	Moreinfo *string `json:"moreinfo,omitempty"`
	Name *string `json:"name,omitempty"`
	OnHold *int `json:"on_hold,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	PlanToRead *int `json:"plan_to_read,omitempty"`
	Popularity *int `json:"popularity,omitempty"`
	Published *map[string]any `json:"published,omitempty"`
	Publishing *bool `json:"publishing,omitempty"`
	Rank *int `json:"rank,omitempty"`
	Reading *int `json:"reading,omitempty"`
	Relation *string `json:"relation,omitempty"`
	Relations *[]any `json:"relations,omitempty"`
	Role *string `json:"role,omitempty"`
	Score *float64 `json:"score,omitempty"`
	ScoredBy *int `json:"scored_by,omitempty"`
	Scores *[]any `json:"scores,omitempty"`
	Serializations *[]any `json:"serializations,omitempty"`
	Status *string `json:"status,omitempty"`
	Synopsis *string `json:"synopsis,omitempty"`
	Themes *[]any `json:"themes,omitempty"`
	Title *string `json:"title,omitempty"`
	TitleEnglish *string `json:"title_english,omitempty"`
	TitleJapanese *string `json:"title_japanese,omitempty"`
	TitleSynonyms *[]any `json:"title_synonyms,omitempty"`
	Titles *[]any `json:"titles,omitempty"`
	Total *int `json:"total,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
	Volumes *int `json:"volumes,omitempty"`
	Webp *map[string]any `json:"webp,omitempty"`
}

// MangaLoadMatch is the typed request payload for Manga.LoadTyped.
type MangaLoadMatch struct {
	Id int `json:"id"`
}

// MangaListMatch is the typed request payload for Manga.ListTyped.
type MangaListMatch struct {
	Approved *bool `json:"approved,omitempty"`
	AuthorUrl *string `json:"author_url,omitempty"`
	AuthorUsername *string `json:"author_username,omitempty"`
	Authors *[]any `json:"authors,omitempty"`
	Background *string `json:"background,omitempty"`
	Chapters *int `json:"chapters,omitempty"`
	Character *map[string]any `json:"character,omitempty"`
	Comments *int `json:"comments,omitempty"`
	Completed *int `json:"completed,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Date *string `json:"date,omitempty"`
	Demographics *[]any `json:"demographics,omitempty"`
	Dropped *int `json:"dropped,omitempty"`
	Entry *map[string]any `json:"entry,omitempty"`
	ExplicitGenres *[]any `json:"explicit_genres,omitempty"`
	External *[]any `json:"external,omitempty"`
	Favorites *int `json:"favorites,omitempty"`
	Genres *[]any `json:"genres,omitempty"`
	Images *map[string]any `json:"images,omitempty"`
	Jpg *map[string]any `json:"jpg,omitempty"`
	LastComment *map[string]any `json:"last_comment,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Members *int `json:"members,omitempty"`
	Moreinfo *string `json:"moreinfo,omitempty"`
	Name *string `json:"name,omitempty"`
	OnHold *int `json:"on_hold,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	PlanToRead *int `json:"plan_to_read,omitempty"`
	Popularity *int `json:"popularity,omitempty"`
	Published *map[string]any `json:"published,omitempty"`
	Publishing *bool `json:"publishing,omitempty"`
	Rank *int `json:"rank,omitempty"`
	Reading *int `json:"reading,omitempty"`
	Relation *string `json:"relation,omitempty"`
	Relations *[]any `json:"relations,omitempty"`
	Role *string `json:"role,omitempty"`
	Score *float64 `json:"score,omitempty"`
	ScoredBy *int `json:"scored_by,omitempty"`
	Scores *[]any `json:"scores,omitempty"`
	Serializations *[]any `json:"serializations,omitempty"`
	Status *string `json:"status,omitempty"`
	Synopsis *string `json:"synopsis,omitempty"`
	Themes *[]any `json:"themes,omitempty"`
	Title *string `json:"title,omitempty"`
	TitleEnglish *string `json:"title_english,omitempty"`
	TitleJapanese *string `json:"title_japanese,omitempty"`
	TitleSynonyms *[]any `json:"title_synonyms,omitempty"`
	Titles *[]any `json:"titles,omitempty"`
	Total *int `json:"total,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
	Volumes *int `json:"volumes,omitempty"`
	Webp *map[string]any `json:"webp,omitempty"`
}

// PeopleSearch is the typed data model for the people_search entity.
type PeopleSearch struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// PeopleSearchListMatch is the typed request payload for PeopleSearch.ListTyped.
type PeopleSearchListMatch struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// Person is the typed data model for the person entity.
type Person struct {
	About *string `json:"about,omitempty"`
	AlternateNames *[]any `json:"alternate_names,omitempty"`
	Anime *[]any `json:"anime,omitempty"`
	Birthday *string `json:"birthday,omitempty"`
	Character *map[string]any `json:"character,omitempty"`
	Data *[]any `json:"data,omitempty"`
	FamilyName *string `json:"family_name,omitempty"`
	Favorites *int `json:"favorites,omitempty"`
	GivenName *string `json:"given_name,omitempty"`
	Images *map[string]any `json:"images,omitempty"`
	Jpg *map[string]any `json:"jpg,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Manga *[]any `json:"manga,omitempty"`
	Name *string `json:"name,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Position *string `json:"position,omitempty"`
	Role *string `json:"role,omitempty"`
	Url *string `json:"url,omitempty"`
	Voices *[]any `json:"voices,omitempty"`
	WebsiteUrl *string `json:"website_url,omitempty"`
}

// PersonLoadMatch is the typed request payload for Person.LoadTyped.
type PersonLoadMatch struct {
	Id int `json:"id"`
}

// PersonListMatch is the typed request payload for Person.ListTyped.
type PersonListMatch struct {
	About *string `json:"about,omitempty"`
	AlternateNames *[]any `json:"alternate_names,omitempty"`
	Anime *[]any `json:"anime,omitempty"`
	Birthday *string `json:"birthday,omitempty"`
	Character *map[string]any `json:"character,omitempty"`
	Data *[]any `json:"data,omitempty"`
	FamilyName *string `json:"family_name,omitempty"`
	Favorites *int `json:"favorites,omitempty"`
	GivenName *string `json:"given_name,omitempty"`
	Images *map[string]any `json:"images,omitempty"`
	Jpg *map[string]any `json:"jpg,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Manga *[]any `json:"manga,omitempty"`
	Name *string `json:"name,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Position *string `json:"position,omitempty"`
	Role *string `json:"role,omitempty"`
	Url *string `json:"url,omitempty"`
	Voices *[]any `json:"voices,omitempty"`
	WebsiteUrl *string `json:"website_url,omitempty"`
}

// Producer is the typed data model for the producer entity.
type Producer struct {
	About *string `json:"about,omitempty"`
	Count *int `json:"count,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Established *string `json:"established,omitempty"`
	External *[]any `json:"external,omitempty"`
	Favorites *int `json:"favorites,omitempty"`
	Images *map[string]any `json:"images,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Name *string `json:"name,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Titles *[]any `json:"titles,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ProducerLoadMatch is the typed request payload for Producer.LoadTyped.
type ProducerLoadMatch struct {
	Id int `json:"id"`
}

// ProducerListMatch is the typed request payload for Producer.ListTyped.
type ProducerListMatch struct {
	About *string `json:"about,omitempty"`
	Count *int `json:"count,omitempty"`
	Data *[]any `json:"data,omitempty"`
	Established *string `json:"established,omitempty"`
	External *[]any `json:"external,omitempty"`
	Favorites *int `json:"favorites,omitempty"`
	Images *map[string]any `json:"images,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Name *string `json:"name,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Titles *[]any `json:"titles,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Random is the typed data model for the random entity.
type Random struct {
	About *string `json:"about,omitempty"`
	Aired *map[string]any `json:"aired,omitempty"`
	Airing *bool `json:"airing,omitempty"`
	AlternateNames *[]any `json:"alternate_names,omitempty"`
	Approved *bool `json:"approved,omitempty"`
	Authors *[]any `json:"authors,omitempty"`
	Background *string `json:"background,omitempty"`
	Birthday *string `json:"birthday,omitempty"`
	Broadcast *map[string]any `json:"broadcast,omitempty"`
	Chapters *int `json:"chapters,omitempty"`
	Demographics *[]any `json:"demographics,omitempty"`
	Duration *string `json:"duration,omitempty"`
	Episodes *int `json:"episodes,omitempty"`
	ExplicitGenres *[]any `json:"explicit_genres,omitempty"`
	FamilyName *string `json:"family_name,omitempty"`
	Favorites *int `json:"favorites,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Genres *[]any `json:"genres,omitempty"`
	GivenName *string `json:"given_name,omitempty"`
	Images *map[string]any `json:"images,omitempty"`
	Joined *string `json:"joined,omitempty"`
	LastOnline *string `json:"last_online,omitempty"`
	Licensors *[]any `json:"licensors,omitempty"`
	Location *string `json:"location,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Members *int `json:"members,omitempty"`
	Name *string `json:"name,omitempty"`
	NameKanji *string `json:"name_kanji,omitempty"`
	Nicknames *[]any `json:"nicknames,omitempty"`
	Popularity *int `json:"popularity,omitempty"`
	Producers *[]any `json:"producers,omitempty"`
	Published *map[string]any `json:"published,omitempty"`
	Publishing *bool `json:"publishing,omitempty"`
	Rank *int `json:"rank,omitempty"`
	Rating *string `json:"rating,omitempty"`
	Score *float64 `json:"score,omitempty"`
	ScoredBy *int `json:"scored_by,omitempty"`
	Season *string `json:"season,omitempty"`
	Serializations *[]any `json:"serializations,omitempty"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	Studios *[]any `json:"studios,omitempty"`
	Synopsis *string `json:"synopsis,omitempty"`
	Themes *[]any `json:"themes,omitempty"`
	Title *string `json:"title,omitempty"`
	TitleEnglish *string `json:"title_english,omitempty"`
	TitleJapanese *string `json:"title_japanese,omitempty"`
	TitleSynonyms *[]any `json:"title_synonyms,omitempty"`
	Titles *[]any `json:"titles,omitempty"`
	Trailer *map[string]any `json:"trailer,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
	Username *string `json:"username,omitempty"`
	Volumes *int `json:"volumes,omitempty"`
	WebsiteUrl *string `json:"website_url,omitempty"`
	Year *int `json:"year,omitempty"`
}

// RandomLoadMatch is the typed request payload for Random.LoadTyped.
type RandomLoadMatch struct {
	About *string `json:"about,omitempty"`
	Aired *map[string]any `json:"aired,omitempty"`
	Airing *bool `json:"airing,omitempty"`
	AlternateNames *[]any `json:"alternate_names,omitempty"`
	Approved *bool `json:"approved,omitempty"`
	Authors *[]any `json:"authors,omitempty"`
	Background *string `json:"background,omitempty"`
	Birthday *string `json:"birthday,omitempty"`
	Broadcast *map[string]any `json:"broadcast,omitempty"`
	Chapters *int `json:"chapters,omitempty"`
	Demographics *[]any `json:"demographics,omitempty"`
	Duration *string `json:"duration,omitempty"`
	Episodes *int `json:"episodes,omitempty"`
	ExplicitGenres *[]any `json:"explicit_genres,omitempty"`
	FamilyName *string `json:"family_name,omitempty"`
	Favorites *int `json:"favorites,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Genres *[]any `json:"genres,omitempty"`
	GivenName *string `json:"given_name,omitempty"`
	Images *map[string]any `json:"images,omitempty"`
	Joined *string `json:"joined,omitempty"`
	LastOnline *string `json:"last_online,omitempty"`
	Licensors *[]any `json:"licensors,omitempty"`
	Location *string `json:"location,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Members *int `json:"members,omitempty"`
	Name *string `json:"name,omitempty"`
	NameKanji *string `json:"name_kanji,omitempty"`
	Nicknames *[]any `json:"nicknames,omitempty"`
	Popularity *int `json:"popularity,omitempty"`
	Producers *[]any `json:"producers,omitempty"`
	Published *map[string]any `json:"published,omitempty"`
	Publishing *bool `json:"publishing,omitempty"`
	Rank *int `json:"rank,omitempty"`
	Rating *string `json:"rating,omitempty"`
	Score *float64 `json:"score,omitempty"`
	ScoredBy *int `json:"scored_by,omitempty"`
	Season *string `json:"season,omitempty"`
	Serializations *[]any `json:"serializations,omitempty"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
	Studios *[]any `json:"studios,omitempty"`
	Synopsis *string `json:"synopsis,omitempty"`
	Themes *[]any `json:"themes,omitempty"`
	Title *string `json:"title,omitempty"`
	TitleEnglish *string `json:"title_english,omitempty"`
	TitleJapanese *string `json:"title_japanese,omitempty"`
	TitleSynonyms *[]any `json:"title_synonyms,omitempty"`
	Titles *[]any `json:"titles,omitempty"`
	Trailer *map[string]any `json:"trailer,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
	Username *string `json:"username,omitempty"`
	Volumes *int `json:"volumes,omitempty"`
	WebsiteUrl *string `json:"website_url,omitempty"`
	Year *int `json:"year,omitempty"`
}

// Recommendation is the typed data model for the recommendation entity.
type Recommendation struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// RecommendationListMatch is the typed request payload for Recommendation.ListTyped.
type RecommendationListMatch struct {
	Username string `json:"username"`
}

// Review is the typed data model for the review entity.
type Review struct {
}

// ReviewLoadMatch is the typed request payload for Review.LoadTyped.
type ReviewLoadMatch struct {
}

// Schedule is the typed data model for the schedule entity.
type Schedule struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// ScheduleListMatch is the typed request payload for Schedule.ListTyped.
type ScheduleListMatch struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// Season is the typed data model for the season entity.
type Season struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Seasons *[]any `json:"seasons,omitempty"`
	Year *int `json:"year,omitempty"`
}

// SeasonLoadMatch is the typed request payload for Season.LoadTyped.
type SeasonLoadMatch struct {
	Season string `json:"season"`
	Year int `json:"year"`
}

// SeasonListMatch is the typed request payload for Season.ListTyped.
type SeasonListMatch struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Seasons *[]any `json:"seasons,omitempty"`
	Year *int `json:"year,omitempty"`
}

// Top is the typed data model for the top entity.
type Top struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// TopLoadMatch is the typed request payload for Top.LoadTyped.
type TopLoadMatch struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// User is the typed data model for the user entity.
type User struct {
	Anime *[]any `json:"anime,omitempty"`
	Birthday *string `json:"birthday,omitempty"`
	Characters *[]any `json:"characters,omitempty"`
	Data *[]any `json:"data,omitempty"`
	External *[]any `json:"external,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Images *map[string]any `json:"images,omitempty"`
	Joined *string `json:"joined,omitempty"`
	LastOnline *string `json:"last_online,omitempty"`
	Location *string `json:"location,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Manga *[]any `json:"manga,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	People *[]any `json:"people,omitempty"`
	Statistics *map[string]any `json:"statistics,omitempty"`
	Url *string `json:"url,omitempty"`
	Username *string `json:"username,omitempty"`
}

// UserLoadMatch is the typed request payload for User.LoadTyped.
type UserLoadMatch struct {
	Id int `json:"id"`
}

// UserListMatch is the typed request payload for User.ListTyped.
type UserListMatch struct {
	Anime *[]any `json:"anime,omitempty"`
	Birthday *string `json:"birthday,omitempty"`
	Characters *[]any `json:"characters,omitempty"`
	Data *[]any `json:"data,omitempty"`
	External *[]any `json:"external,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Images *map[string]any `json:"images,omitempty"`
	Joined *string `json:"joined,omitempty"`
	LastOnline *string `json:"last_online,omitempty"`
	Location *string `json:"location,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Manga *[]any `json:"manga,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	People *[]any `json:"people,omitempty"`
	Statistics *map[string]any `json:"statistics,omitempty"`
	Url *string `json:"url,omitempty"`
	Username *string `json:"username,omitempty"`
}

// UserAbout is the typed data model for the user_about entity.
type UserAbout struct {
	About *string `json:"about,omitempty"`
}

// UserAboutListMatch is the typed request payload for UserAbout.ListTyped.
type UserAboutListMatch struct {
	Username string `json:"username"`
}

// UserClub is the typed data model for the user_club entity.
type UserClub struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// UserClubListMatch is the typed request payload for UserClub.ListTyped.
type UserClubListMatch struct {
	Username string `json:"username"`
}

// UserFriend is the typed data model for the user_friend entity.
type UserFriend struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// UserFriendListMatch is the typed request payload for UserFriend.ListTyped.
type UserFriendListMatch struct {
	Username string `json:"username"`
}

// UserHistory is the typed data model for the user_history entity.
type UserHistory struct {
	Date *string `json:"date,omitempty"`
	Entry *map[string]any `json:"entry,omitempty"`
	Increment *int `json:"increment,omitempty"`
}

// UserHistoryListMatch is the typed request payload for UserHistory.ListTyped.
type UserHistoryListMatch struct {
	Username string `json:"username"`
}

// UserStatistic is the typed data model for the user_statistic entity.
type UserStatistic struct {
	Anime *map[string]any `json:"anime,omitempty"`
	Manga *map[string]any `json:"manga,omitempty"`
}

// UserStatisticLoadMatch is the typed request payload for UserStatistic.LoadTyped.
type UserStatisticLoadMatch struct {
	Username string `json:"username"`
}

// UserUpdate is the typed data model for the user_update entity.
type UserUpdate struct {
	Anime *[]any `json:"anime,omitempty"`
	Manga *[]any `json:"manga,omitempty"`
}

// UserUpdateLoadMatch is the typed request payload for UserUpdate.LoadTyped.
type UserUpdateLoadMatch struct {
	Username string `json:"username"`
}

// WatchEpisode is the typed data model for the watch_episode entity.
type WatchEpisode struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// WatchEpisodeListMatch is the typed request payload for WatchEpisode.ListTyped.
type WatchEpisodeListMatch struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// WatchPromo is the typed data model for the watch_promo entity.
type WatchPromo struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// WatchPromoListMatch is the typed request payload for WatchPromo.ListTyped.
type WatchPromoListMatch struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
