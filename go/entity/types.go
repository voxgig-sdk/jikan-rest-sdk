// Typed models for the JikanRest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/jikan-rest-sdk/go/core"
)

// Anime is the typed data model for the anime entity.
type Anime struct {
}

// AnimeLoadMatch is the typed request payload for Anime.LoadTyped.
type AnimeLoadMatch struct {
	Episode *int `json:"episode,omitempty"`
	Id int `json:"id"`
}

// AnimeListMatch is the typed request payload for Anime.ListTyped.
type AnimeListMatch struct {
	EndDate *string `json:"end_date,omitempty"`
	Genre *string `json:"genre,omitempty"`
	GenresExclude *string `json:"genres_exclude,omitempty"`
	Letter *string `json:"letter,omitempty"`
	Limit *int `json:"limit,omitempty"`
	MaxScore *float64 `json:"max_score,omitempty"`
	MinScore *float64 `json:"min_score,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Page *int `json:"page,omitempty"`
	Producer *string `json:"producer,omitempty"`
	Q *string `json:"q,omitempty"`
	Rating *string `json:"rating,omitempty"`
	Score *float64 `json:"score,omitempty"`
	Sfw *bool `json:"sfw,omitempty"`
	Sort *string `json:"sort,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	Status *string `json:"status,omitempty"`
	Type *string `json:"type,omitempty"`
	Unapproved *bool `json:"unapproved,omitempty"`
}

// Character is the typed data model for the character entity.
type Character struct {
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	Id int `json:"id"`
}

// CharacterListMatch is the typed request payload for Character.ListTyped.
type CharacterListMatch struct {
	Letter *string `json:"letter,omitempty"`
	Limit *int `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Page *int `json:"page,omitempty"`
	Q *string `json:"q,omitempty"`
	Sort *string `json:"sort,omitempty"`
}

// Club is the typed data model for the club entity.
type Club struct {
}

// ClubLoadMatch is the typed request payload for Club.LoadTyped.
type ClubLoadMatch struct {
	Id int `json:"id"`
}

// ClubListMatch is the typed request payload for Club.ListTyped.
type ClubListMatch struct {
	Category *string `json:"category,omitempty"`
	Letter *string `json:"letter,omitempty"`
	Limit *int `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Page *int `json:"page,omitempty"`
	Q *string `json:"q,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Type *string `json:"type,omitempty"`
}

// External is the typed data model for the external entity.
type External struct {
}

// ExternalListMatch is the typed request payload for External.ListTyped.
type ExternalListMatch struct {
	Username string `json:"username"`
}

// Genre is the typed data model for the genre entity.
type Genre struct {
}

// GenreListMatch is the typed request payload for Genre.ListTyped.
type GenreListMatch struct {
	Filter *string `json:"filter,omitempty"`
}

// History is the typed data model for the history entity.
type History struct {
}

// HistoryListMatch is the typed request payload for History.ListTyped.
type HistoryListMatch struct {
	Username string `json:"username"`
	Type *string `json:"type,omitempty"`
}

// Magazine is the typed data model for the magazine entity.
type Magazine struct {
}

// MagazineListMatch is the typed request payload for Magazine.ListTyped.
type MagazineListMatch struct {
	Letter *string `json:"letter,omitempty"`
	Limit *int `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Page *int `json:"page,omitempty"`
	Q *string `json:"q,omitempty"`
	Sort *string `json:"sort,omitempty"`
}

// Manga is the typed data model for the manga entity.
type Manga struct {
}

// MangaLoadMatch is the typed request payload for Manga.LoadTyped.
type MangaLoadMatch struct {
	Id int `json:"id"`
}

// MangaListMatch is the typed request payload for Manga.ListTyped.
type MangaListMatch struct {
	EndDate *string `json:"end_date,omitempty"`
	Genre *string `json:"genre,omitempty"`
	GenresExclude *string `json:"genres_exclude,omitempty"`
	Letter *string `json:"letter,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Magazine *string `json:"magazine,omitempty"`
	MaxScore *float64 `json:"max_score,omitempty"`
	MinScore *float64 `json:"min_score,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Page *int `json:"page,omitempty"`
	Q *string `json:"q,omitempty"`
	Score *float64 `json:"score,omitempty"`
	Sfw *bool `json:"sfw,omitempty"`
	Sort *string `json:"sort,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	Status *string `json:"status,omitempty"`
	Type *string `json:"type,omitempty"`
	Unapproved *bool `json:"unapproved,omitempty"`
}

// PeopleSearch is the typed data model for the people_search entity.
type PeopleSearch struct {
}

// PeopleSearchListMatch is the typed request payload for PeopleSearch.ListTyped.
type PeopleSearchListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
}

// Person is the typed data model for the person entity.
type Person struct {
}

// PersonLoadMatch is the typed request payload for Person.LoadTyped.
type PersonLoadMatch struct {
	Id int `json:"id"`
}

// PersonListMatch is the typed request payload for Person.ListTyped.
type PersonListMatch struct {
	Letter *string `json:"letter,omitempty"`
	Limit *int `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Page *int `json:"page,omitempty"`
	Q *string `json:"q,omitempty"`
	Sort *string `json:"sort,omitempty"`
}

// Producer is the typed data model for the producer entity.
type Producer struct {
}

// ProducerLoadMatch is the typed request payload for Producer.LoadTyped.
type ProducerLoadMatch struct {
	Id int `json:"id"`
}

// ProducerListMatch is the typed request payload for Producer.ListTyped.
type ProducerListMatch struct {
	Letter *string `json:"letter,omitempty"`
	Limit *int `json:"limit,omitempty"`
	OrderBy *string `json:"order_by,omitempty"`
	Page *int `json:"page,omitempty"`
	Q *string `json:"q,omitempty"`
	Sort *string `json:"sort,omitempty"`
}

// Random is the typed data model for the random entity.
type Random struct {
}

// RandomLoadMatch is the typed request payload for Random.LoadTyped.
type RandomLoadMatch struct {
}

// Recommendation is the typed data model for the recommendation entity.
type Recommendation struct {
}

// RecommendationListMatch is the typed request payload for Recommendation.ListTyped.
type RecommendationListMatch struct {
	Username string `json:"username"`
	Page *int `json:"page,omitempty"`
}

// Review is the typed data model for the review entity.
type Review struct {
}

// ReviewLoadMatch is the typed request payload for Review.LoadTyped.
type ReviewLoadMatch struct {
	Page *int `json:"page,omitempty"`
	Preliminary *bool `json:"preliminary,omitempty"`
	Spoiler *bool `json:"spoiler,omitempty"`
}

// Schedule is the typed data model for the schedule entity.
type Schedule struct {
}

// ScheduleListMatch is the typed request payload for Schedule.ListTyped.
type ScheduleListMatch struct {
	Filter *string `json:"filter,omitempty"`
	Kid *string `json:"kid,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
	Sfw *string `json:"sfw,omitempty"`
	Unapproved *bool `json:"unapproved,omitempty"`
}

// Season is the typed data model for the season entity.
type Season struct {
}

// SeasonLoadMatch is the typed request payload for Season.LoadTyped.
type SeasonLoadMatch struct {
	Season string `json:"season"`
	Year int `json:"year"`
	Continuing *bool `json:"continuing,omitempty"`
	Filter *string `json:"filter,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
	Sfw *bool `json:"sfw,omitempty"`
	Unapproved *bool `json:"unapproved,omitempty"`
}

// SeasonListMatch is the typed request payload for Season.ListTyped.
type SeasonListMatch struct {
	Data *[]any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Seasons *[]any `json:"seasons,omitempty"`
	Year *int `json:"year,omitempty"`
}

// Top is the typed data model for the top entity.
type Top struct {
}

// TopLoadMatch is the typed request payload for Top.LoadTyped.
type TopLoadMatch struct {
	Page *int `json:"page,omitempty"`
	Preliminary *bool `json:"preliminary,omitempty"`
	Spoiler *bool `json:"spoiler,omitempty"`
	Type *string `json:"type,omitempty"`
}

// User is the typed data model for the user entity.
type User struct {
}

// UserLoadMatch is the typed request payload for User.LoadTyped.
type UserLoadMatch struct {
	Id int `json:"id"`
}

// UserListMatch is the typed request payload for User.ListTyped.
type UserListMatch struct {
	Gender *string `json:"gender,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Location *string `json:"location,omitempty"`
	MaxAge *int `json:"max_age,omitempty"`
	MinAge *int `json:"min_age,omitempty"`
	Page *int `json:"page,omitempty"`
	Q *string `json:"q,omitempty"`
}

// UserAbout is the typed data model for the user_about entity.
type UserAbout struct {
}

// UserAboutListMatch is the typed request payload for UserAbout.ListTyped.
type UserAboutListMatch struct {
	Username string `json:"username"`
}

// UserClub is the typed data model for the user_club entity.
type UserClub struct {
}

// UserClubListMatch is the typed request payload for UserClub.ListTyped.
type UserClubListMatch struct {
	Username string `json:"username"`
	Page *int `json:"page,omitempty"`
}

// UserFriend is the typed data model for the user_friend entity.
type UserFriend struct {
}

// UserFriendListMatch is the typed request payload for UserFriend.ListTyped.
type UserFriendListMatch struct {
	Username string `json:"username"`
	Page *int `json:"page,omitempty"`
}

// UserStatistic is the typed data model for the user_statistic entity.
type UserStatistic struct {
}

// UserStatisticLoadMatch is the typed request payload for UserStatistic.LoadTyped.
type UserStatisticLoadMatch struct {
	Username string `json:"username"`
}

// UserUpdate is the typed data model for the user_update entity.
type UserUpdate struct {
}

// UserUpdateLoadMatch is the typed request payload for UserUpdate.LoadTyped.
type UserUpdateLoadMatch struct {
	Username string `json:"username"`
}

// WatchEpisode is the typed data model for the watch_episode entity.
type WatchEpisode struct {
}

// WatchEpisodeListMatch is the typed request payload for WatchEpisode.ListTyped.
type WatchEpisodeListMatch struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// WatchPromo is the typed data model for the watch_promo entity.
type WatchPromo struct {
}

// WatchPromoListMatch is the typed request payload for WatchPromo.ListTyped.
type WatchPromoListMatch struct {
	Page *int `json:"page,omitempty"`
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
