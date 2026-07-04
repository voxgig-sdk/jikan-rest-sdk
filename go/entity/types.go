// Typed models for the JikanRest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Anime is the typed data model for the anime entity.
type Anime struct {
	AuthorUrl *string `json:"author_url,omitempty"`
	AuthorUsername *string `json:"author_username,omitempty"`
	Character *map[string]any `json:"character,omitempty"`
	Comment *int `json:"comment,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Date *string `json:"date,omitempty"`
	Entry *map[string]any `json:"entry,omitempty"`
	Image *map[string]any `json:"image,omitempty"`
	LastComment *map[string]any `json:"last_comment,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Name *string `json:"name,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Person *map[string]any `json:"person,omitempty"`
	Position *[]any `json:"position,omitempty"`
	Relation *string `json:"relation,omitempty"`
	Role *string `json:"role,omitempty"`
	Title *string `json:"title,omitempty"`
	Url *string `json:"url,omitempty"`
	VoiceActor *[]any `json:"voice_actor,omitempty"`
}

// AnimeLoadMatch is the typed request payload for Anime.LoadTyped.
type AnimeLoadMatch struct {
	Episode int `json:"episode"`
	Id int `json:"id"`
}

// AnimeListMatch is the typed request payload for Anime.ListTyped.
type AnimeListMatch struct {
	Id int `json:"id"`
}

// Character is the typed data model for the character entity.
type Character struct {
	Anime *map[string]any `json:"anime,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Language *string `json:"language,omitempty"`
	LargeImageUrl *string `json:"large_image_url,omitempty"`
	Manga *map[string]any `json:"manga,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Person *map[string]any `json:"person,omitempty"`
	Role *string `json:"role,omitempty"`
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	Id int `json:"id"`
}

// CharacterListMatch is the typed request payload for Character.ListTyped.
type CharacterListMatch struct {
	Id int `json:"id"`
}

// Club is the typed data model for the club entity.
type Club struct {
	Data *map[string]any `json:"data,omitempty"`
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
	Id int `json:"id"`
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

// GenreListMatch mirrors the genre fields as an all-optional match
// filter (Go analog of Partial<Genre>).
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

// MagazineListMatch mirrors the magazine fields as an all-optional match
// filter (Go analog of Partial<Magazine>).
type MagazineListMatch struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// Manga is the typed data model for the manga entity.
type Manga struct {
	AuthorUrl *string `json:"author_url,omitempty"`
	AuthorUsername *string `json:"author_username,omitempty"`
	Character *map[string]any `json:"character,omitempty"`
	Comment *int `json:"comment,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Date *string `json:"date,omitempty"`
	Entry *map[string]any `json:"entry,omitempty"`
	Jpg *map[string]any `json:"jpg,omitempty"`
	LastComment *map[string]any `json:"last_comment,omitempty"`
	MalId *int `json:"mal_id,omitempty"`
	Name *string `json:"name,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Relation *string `json:"relation,omitempty"`
	Role *string `json:"role,omitempty"`
	Title *string `json:"title,omitempty"`
	Url *string `json:"url,omitempty"`
	Webp *map[string]any `json:"webp,omitempty"`
}

// MangaLoadMatch is the typed request payload for Manga.LoadTyped.
type MangaLoadMatch struct {
	Id int `json:"id"`
}

// MangaListMatch is the typed request payload for Manga.ListTyped.
type MangaListMatch struct {
	Id int `json:"id"`
}

// PeopleSearch is the typed data model for the people_search entity.
type PeopleSearch struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// PeopleSearchListMatch mirrors the people_search fields as an all-optional match
// filter (Go analog of Partial<PeopleSearch>).
type PeopleSearchListMatch struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// Person is the typed data model for the person entity.
type Person struct {
	Anime *map[string]any `json:"anime,omitempty"`
	Character *map[string]any `json:"character,omitempty"`
	Data *map[string]any `json:"data,omitempty"`
	Jpg *map[string]any `json:"jpg,omitempty"`
	Manga *map[string]any `json:"manga,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Position *string `json:"position,omitempty"`
	Role *string `json:"role,omitempty"`
}

// PersonLoadMatch is the typed request payload for Person.LoadTyped.
type PersonLoadMatch struct {
	Id int `json:"id"`
}

// PersonListMatch is the typed request payload for Person.ListTyped.
type PersonListMatch struct {
	Id int `json:"id"`
}

// Producer is the typed data model for the producer entity.
type Producer struct {
	Data *map[string]any `json:"data,omitempty"`
	Name *string `json:"name,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ProducerLoadMatch is the typed request payload for Producer.LoadTyped.
type ProducerLoadMatch struct {
	Id int `json:"id"`
}

// ProducerListMatch is the typed request payload for Producer.ListTyped.
type ProducerListMatch struct {
	Id int `json:"id"`
}

// Random is the typed data model for the random entity.
type Random struct {
	Data *map[string]any `json:"data,omitempty"`
}

// RandomLoadMatch mirrors the random fields as an all-optional match
// filter (Go analog of Partial<Random>).
type RandomLoadMatch struct {
	Data *map[string]any `json:"data,omitempty"`
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

// ReviewLoadMatch mirrors the review fields as an all-optional match
// filter (Go analog of Partial<Review>).
type ReviewLoadMatch struct {
}

// Schedule is the typed data model for the schedule entity.
type Schedule struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// ScheduleListMatch mirrors the schedule fields as an all-optional match
// filter (Go analog of Partial<Schedule>).
type ScheduleListMatch struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// Season is the typed data model for the season entity.
type Season struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
	Season *[]any `json:"season,omitempty"`
	Year *int `json:"year,omitempty"`
}

// SeasonListMatch is the typed request payload for Season.ListTyped.
type SeasonListMatch struct {
	Season string `json:"season"`
	Year int `json:"year"`
}

// Top is the typed data model for the top entity.
type Top struct {
	Data *any `json:"data,omitempty"`
}

// TopLoadMatch mirrors the top fields as an all-optional match
// filter (Go analog of Partial<Top>).
type TopLoadMatch struct {
	Data *any `json:"data,omitempty"`
}

// User is the typed data model for the user entity.
type User struct {
	Data *any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// UserLoadMatch is the typed request payload for User.LoadTyped.
type UserLoadMatch struct {
	Username string `json:"username"`
	Id int `json:"id"`
}

// UserListMatch mirrors the user fields as an all-optional match
// filter (Go analog of Partial<User>).
type UserListMatch struct {
	Data *any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
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
	Data *map[string]any `json:"data,omitempty"`
}

// UserStatisticLoadMatch is the typed request payload for UserStatistic.LoadTyped.
type UserStatisticLoadMatch struct {
	Username string `json:"username"`
}

// UserUpdate is the typed data model for the user_update entity.
type UserUpdate struct {
	Data *map[string]any `json:"data,omitempty"`
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

// WatchEpisodeListMatch mirrors the watch_episode fields as an all-optional match
// filter (Go analog of Partial<WatchEpisode>).
type WatchEpisodeListMatch struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// WatchPromo is the typed data model for the watch_promo entity.
type WatchPromo struct {
	Data *[]any `json:"data,omitempty"`
	Pagination *map[string]any `json:"pagination,omitempty"`
}

// WatchPromoListMatch mirrors the watch_promo fields as an all-optional match
// filter (Go analog of Partial<WatchPromo>).
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

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
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

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
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
