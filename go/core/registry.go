package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAnimeEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewCharacterEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewClubEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewExternalEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewGenreEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewMagazineEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewMangaEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewPeopleSearchEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewPersonEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewProducerEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewRandomEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewRecommendationEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewReviewEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewScheduleEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewSeasonEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewTopEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewUserEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewUserAboutEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewUserClubEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewUserFriendEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewUserHistoryEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewUserStatisticEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewUserUpdateEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewWatchEpisodeEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

var NewWatchPromoEntityFunc func(client *JikanRestSDK, entopts map[string]any) JikanRestEntity

