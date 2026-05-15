package voxgigjikanrestsdk

import (
	"github.com/voxgig-sdk/jikan-rest-sdk/core"
	"github.com/voxgig-sdk/jikan-rest-sdk/entity"
	"github.com/voxgig-sdk/jikan-rest-sdk/feature"
	_ "github.com/voxgig-sdk/jikan-rest-sdk/utility"
)

// Type aliases preserve external API.
type JikanRestSDK = core.JikanRestSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type JikanRestEntity = core.JikanRestEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type JikanRestError = core.JikanRestError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAnimeEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewAnimeEntity(client, entopts)
	}
	core.NewCharacterEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewCharacterEntity(client, entopts)
	}
	core.NewClubEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewClubEntity(client, entopts)
	}
	core.NewExternalEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewExternalEntity(client, entopts)
	}
	core.NewGenreEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewGenreEntity(client, entopts)
	}
	core.NewMagazineEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewMagazineEntity(client, entopts)
	}
	core.NewMangaEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewMangaEntity(client, entopts)
	}
	core.NewPeopleSearchEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewPeopleSearchEntity(client, entopts)
	}
	core.NewPersonEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewPersonEntity(client, entopts)
	}
	core.NewProducerEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewProducerEntity(client, entopts)
	}
	core.NewRandomEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewRandomEntity(client, entopts)
	}
	core.NewRecommendationEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewRecommendationEntity(client, entopts)
	}
	core.NewReviewEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewReviewEntity(client, entopts)
	}
	core.NewScheduleEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewScheduleEntity(client, entopts)
	}
	core.NewSeasonEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewSeasonEntity(client, entopts)
	}
	core.NewTopEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewTopEntity(client, entopts)
	}
	core.NewUserEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewUserEntity(client, entopts)
	}
	core.NewUserAboutEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewUserAboutEntity(client, entopts)
	}
	core.NewUserClubEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewUserClubEntity(client, entopts)
	}
	core.NewUserFriendEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewUserFriendEntity(client, entopts)
	}
	core.NewUserHistoryEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewUserHistoryEntity(client, entopts)
	}
	core.NewUserStatisticEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewUserStatisticEntity(client, entopts)
	}
	core.NewUserUpdateEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewUserUpdateEntity(client, entopts)
	}
	core.NewWatchEpisodeEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewWatchEpisodeEntity(client, entopts)
	}
	core.NewWatchPromoEntityFunc = func(client *core.JikanRestSDK, entopts map[string]any) core.JikanRestEntity {
		return entity.NewWatchPromoEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewJikanRestSDK = core.NewJikanRestSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
