package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "JikanRest",
			"slug": "jikan-rest",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.jikan.moe/v4",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"anime": map[string]any{},
				"character": map[string]any{},
				"club": map[string]any{},
				"external": map[string]any{},
				"genre": map[string]any{},
				"history": map[string]any{},
				"magazine": map[string]any{},
				"manga": map[string]any{},
				"people_search": map[string]any{},
				"person": map[string]any{},
				"producer": map[string]any{},
				"random": map[string]any{},
				"recommendation": map[string]any{},
				"review": map[string]any{},
				"schedule": map[string]any{},
				"season": map[string]any{},
				"top": map[string]any{},
				"user": map[string]any{},
				"user_about": map[string]any{},
				"user_club": map[string]any{},
				"user_friend": map[string]any{},
				"user_statistic": map[string]any{},
				"user_update": map[string]any{},
				"watch_episode": map[string]any{},
				"watch_promo": map[string]any{},
			},
		},
		"entity": map[string]any{
			"anime": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "aired",
						"title": "Aired",
						"type": "`$STRING`",
						"short": "Aired Date ISO8601",
					},
					map[string]any{
						"name": "airing",
						"title": "Airing",
						"type": "`$BOOLEAN`",
						"short": "Airing boolean",
					},
					map[string]any{
						"name": "approved",
						"title": "Approved",
						"type": "`$BOOLEAN`",
						"short": "Whether the entry is pending approval on MAL or not",
					},
					map[string]any{
						"name": "background",
						"title": "Background",
						"type": "`$STRING`",
						"short": "Background",
					},
					map[string]any{
						"name": "broadcast",
						"title": "Broadcast",
						"type": "`$OBJECT`",
						"short": "Broadcast Details",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "demographics",
						"title": "Demographics",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "duration",
						"title": "Duration",
						"type": "`$INTEGER`",
						"short": "Episode duration in seconds",
					},
					map[string]any{
						"name": "episodes",
						"title": "Episodes",
						"type": "`$INTEGER`",
						"short": "Episode count",
					},
					map[string]any{
						"name": "explicit_genres",
						"title": "Explicit Genres",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "favorites",
						"title": "Favorites",
						"type": "`$INTEGER`",
						"short": "Number of users who have favorited this entry",
					},
					map[string]any{
						"name": "filler",
						"title": "Filler",
						"type": "`$BOOLEAN`",
						"short": "Filler episode",
					},
					map[string]any{
						"name": "genres",
						"title": "Genres",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"title": "Images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "licensors",
						"title": "Licensors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "mal_id",
						"title": "Mal Id",
						"type": "`$INTEGER`",
						"short": "MyAnimeList ID",
					},
					map[string]any{
						"name": "members",
						"title": "Members",
						"type": "`$INTEGER`",
						"short": "Number of users who have added this entry to their list",
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "popularity",
						"title": "Popularity",
						"type": "`$INTEGER`",
						"short": "Popularity",
					},
					map[string]any{
						"name": "producers",
						"title": "Producers",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "rank",
						"title": "Rank",
						"type": "`$INTEGER`",
						"short": "Ranking",
					},
					map[string]any{
						"name": "rating",
						"title": "Rating",
						"type": "`$STRING`",
						"short": "Anime audience rating",
					},
					map[string]any{
						"name": "recap",
						"title": "Recap",
						"type": "`$BOOLEAN`",
						"short": "Recap episode",
					},
					map[string]any{
						"name": "score",
						"title": "Score",
						"type": "`$NUMBER`",
						"short": "Score",
						"format": "float",
					},
					map[string]any{
						"name": "scored_by",
						"title": "Scored By",
						"type": "`$INTEGER`",
						"short": "Number of users",
					},
					map[string]any{
						"name": "season",
						"title": "Season",
						"type": "`$STRING`",
						"short": "Season",
					},
					map[string]any{
						"name": "source",
						"title": "Source",
						"type": "`$STRING`",
						"short": "Original Material/Source adapted from",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "Airing status",
					},
					map[string]any{
						"name": "studios",
						"title": "Studios",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "synopsis",
						"title": "Synopsis",
						"type": "`$STRING`",
						"short": "Episode Synopsis",
					},
					map[string]any{
						"name": "themes",
						"title": "Themes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"short": "Title",
						"deprecated": true,
					},
					map[string]any{
						"name": "title_english",
						"title": "Title English",
						"type": "`$STRING`",
						"short": "English Title",
						"deprecated": true,
					},
					map[string]any{
						"name": "title_japanese",
						"title": "Title Japanese",
						"type": "`$STRING`",
						"short": "Title Japanese",
						"deprecated": true,
					},
					map[string]any{
						"name": "title_romanji",
						"title": "Title Romanji",
						"type": "`$STRING`",
						"short": "title_romanji",
					},
					map[string]any{
						"name": "title_synonyms",
						"title": "Title Synonyms",
						"type": "`$ARRAY`",
						"short": "Other Titles",
						"deprecated": true,
					},
					map[string]any{
						"name": "titles",
						"title": "Titles",
						"type": "`$ARRAY`",
						"short": "All titles",
					},
					map[string]any{
						"name": "trailer",
						"title": "Trailer",
						"type": "`$OBJECT`",
						"short": "Youtube Details",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "Anime Type",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "MyAnimeList URL",
					},
					map[string]any{
						"name": "year",
						"title": "Year",
						"type": "`$INTEGER`",
						"short": "Year",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "anime",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
								},
								"parts": []any{
									"anime",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "genre",
											"orig": "genre",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "genres_exclude",
											"orig": "genres_exclude",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "letter",
											"orig": "letter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_score",
											"orig": "max_score",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_score",
											"orig": "min_score",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "producer",
											"orig": "producer",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "rating",
											"orig": "rating",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "score",
											"orig": "score",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sfw",
											"orig": "sfw",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "unapproved",
											"orig": "unapproved",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"end_date",
										"genre",
										"genres_exclude",
										"letter",
										"limit",
										"max_score",
										"min_score",
										"order_by",
										"page",
										"producer",
										"q",
										"rating",
										"score",
										"sfw",
										"sort",
										"start_date",
										"status",
										"type",
										"unapproved",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/top/anime",
								"segments": []any{
									map[string]any{
										"lit": "top",
									},
									map[string]any{
										"lit": "anime",
									},
								},
								"parts": []any{
									"top",
									"anime",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "rating",
											"orig": "rating",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sfw",
											"orig": "sfw",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"limit",
										"page",
										"rating",
										"sfw",
										"type",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/reviews",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "reviews",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"reviews",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "preliminary",
											"orig": "preliminary",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "spoiler",
											"orig": "spoiler",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "review",
									"exist": []any{
										"id",
										"page",
										"preliminary",
										"spoiler",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/episodes",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "episodes",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"episodes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "episode",
									"exist": []any{
										"id",
										"page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/forum",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "forum",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"forum",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "forum",
									"exist": []any{
										"filter",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/news",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "news",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"news",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "new",
									"exist": []any{
										"id",
										"page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/userupdates",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "userupdates",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"userupdates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "userupdate",
									"exist": []any{
										"id",
										"page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/videos/episodes",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "videos",
									},
									map[string]any{
										"lit": "episodes",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"videos",
									"episodes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "video_episode",
									"exist": []any{
										"id",
										"page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/characters",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "characters",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"characters",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "character",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/external",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "external",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"external",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "external",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/pictures",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "pictures",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"pictures",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "picture",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/recommendations",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "recommendations",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"recommendations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "recommendation",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/relations",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "relations",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"relations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "relation",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/staff",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "staff",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"staff",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "staff",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/streaming",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "streaming",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"streaming",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "streaming",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/episodes/{episode}",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "episodes",
									},
									map[string]any{
										"var": "episode",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"episodes",
									"{episode}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "episode",
											"orig": "episode",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"episode",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/full",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "full",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"full",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "full",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/moreinfo",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "moreinfo",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"moreinfo",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "moreinfo",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/statistics",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "statistics",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"statistics",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "statistic",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/themes",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "themes",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"themes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "theme",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/videos",
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "videos",
									},
								},
								"parts": []any{
									"anime",
									"{id}",
									"videos",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "video",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"character": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "about",
						"title": "About",
						"type": "`$STRING`",
						"short": "Biography",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "favorites",
						"title": "Favorites",
						"type": "`$INTEGER`",
						"short": "Number of users who have favorited this entry",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"title": "Images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "mal_id",
						"title": "Mal Id",
						"type": "`$INTEGER`",
						"short": "MyAnimeList ID",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name",
					},
					map[string]any{
						"name": "name_kanji",
						"title": "Name Kanji",
						"type": "`$STRING`",
						"short": "Name",
					},
					map[string]any{
						"name": "nicknames",
						"title": "Nicknames",
						"type": "`$ARRAY`",
						"short": "Other Names",
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "MyAnimeList URL",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "character",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/characters",
								"segments": []any{
									map[string]any{
										"lit": "characters",
									},
								},
								"parts": []any{
									"characters",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "letter",
											"orig": "letter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"letter",
										"limit",
										"order_by",
										"page",
										"q",
										"sort",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/top/characters",
								"segments": []any{
									map[string]any{
										"lit": "top",
									},
									map[string]any{
										"lit": "characters",
									},
								},
								"parts": []any{
									"top",
									"characters",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/characters/{id}/anime",
								"segments": []any{
									map[string]any{
										"lit": "characters",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "anime",
									},
								},
								"parts": []any{
									"characters",
									"{id}",
									"anime",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "anime",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/characters/{id}/manga",
								"segments": []any{
									map[string]any{
										"lit": "characters",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "manga",
									},
								},
								"parts": []any{
									"characters",
									"{id}",
									"manga",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "manga",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/characters/{id}/pictures",
								"segments": []any{
									map[string]any{
										"lit": "characters",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "pictures",
									},
								},
								"parts": []any{
									"characters",
									"{id}",
									"pictures",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "picture",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/characters/{id}/voices",
								"segments": []any{
									map[string]any{
										"lit": "characters",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "voices",
									},
								},
								"parts": []any{
									"characters",
									"{id}",
									"voices",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "voice",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/characters/{id}",
								"segments": []any{
									map[string]any{
										"lit": "characters",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"characters",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/characters/{id}/full",
								"segments": []any{
									map[string]any{
										"lit": "characters",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "full",
									},
								},
								"parts": []any{
									"characters",
									"{id}",
									"full",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "full",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"club": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "access",
						"title": "Access",
						"type": "`$STRING`",
						"short": "Club access",
					},
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
						"short": "Club Category",
					},
					map[string]any{
						"name": "created",
						"title": "Created",
						"type": "`$STRING`",
						"short": "Date Created ISO8601",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"title": "Images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "mal_id",
						"title": "Mal Id",
						"type": "`$INTEGER`",
						"short": "MyAnimeList ID",
					},
					map[string]any{
						"name": "members",
						"title": "Members",
						"type": "`$INTEGER`",
						"short": "Number of club members",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Club name",
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "Club URL",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "club",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/clubs",
								"segments": []any{
									map[string]any{
										"lit": "clubs",
									},
								},
								"parts": []any{
									"clubs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "letter",
											"orig": "letter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"category",
										"letter",
										"limit",
										"order_by",
										"page",
										"q",
										"sort",
										"type",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/clubs/{id}/members",
								"segments": []any{
									map[string]any{
										"lit": "clubs",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"parts": []any{
									"clubs",
									"{id}",
									"members",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "member",
									"exist": []any{
										"id",
										"page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/clubs/{id}/staff",
								"segments": []any{
									map[string]any{
										"lit": "clubs",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "staff",
									},
								},
								"parts": []any{
									"clubs",
									"{id}",
									"staff",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "staff",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/clubs/{id}",
								"segments": []any{
									map[string]any{
										"lit": "clubs",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"clubs",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/clubs/{id}/relations",
								"segments": []any{
									map[string]any{
										"lit": "clubs",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "relations",
									},
								},
								"parts": []any{
									"clubs",
									"{id}",
									"relations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "relation",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"external": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
					},
				},
				"name": "external",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/external",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "username",
									},
									map[string]any{
										"lit": "external",
									},
								},
								"parts": []any{
									"users",
									"{username}",
									"external",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"username",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.user",
						},
					},
				},
			},
			"genre": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "count",
						"title": "Count",
						"type": "`$INTEGER`",
						"short": "Genre's entry count",
					},
					map[string]any{
						"name": "mal_id",
						"title": "Mal Id",
						"type": "`$INTEGER`",
						"short": "MyAnimeList ID",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Genre Name",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "MyAnimeList URL",
					},
				},
				"name": "genre",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/genres/anime",
								"segments": []any{
									map[string]any{
										"lit": "genres",
									},
									map[string]any{
										"lit": "anime",
									},
								},
								"parts": []any{
									"genres",
									"anime",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "anime",
									"exist": []any{
										"filter",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/genres/manga",
								"segments": []any{
									map[string]any{
										"lit": "genres",
									},
									map[string]any{
										"lit": "manga",
									},
								},
								"parts": []any{
									"genres",
									"manga",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "manga",
									"exist": []any{
										"filter",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"history": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"short": "Date ISO8601",
					},
					map[string]any{
						"name": "entry",
						"title": "Entry",
						"type": "`$OBJECT`",
						"short": "Parsed URL Data",
					},
					map[string]any{
						"name": "increment",
						"title": "Increment",
						"type": "`$INTEGER`",
						"short": "Number of episodes/chapters watched/read",
					},
				},
				"name": "history",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/history",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "username",
									},
									map[string]any{
										"lit": "history",
									},
								},
								"parts": []any{
									"users",
									"{username}",
									"history",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"type",
										"username",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.user",
						},
					},
				},
			},
			"magazine": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
					},
				},
				"name": "magazine",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/magazines",
								"segments": []any{
									map[string]any{
										"lit": "magazines",
									},
								},
								"parts": []any{
									"magazines",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "letter",
											"orig": "letter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"letter",
										"limit",
										"order_by",
										"page",
										"q",
										"sort",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"manga": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "approved",
						"title": "Approved",
						"type": "`$BOOLEAN`",
						"short": "Whether the entry is pending approval on MAL or not",
					},
					map[string]any{
						"name": "authors",
						"title": "Authors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "background",
						"title": "Background",
						"type": "`$STRING`",
						"short": "Background",
					},
					map[string]any{
						"name": "chapters",
						"title": "Chapters",
						"type": "`$INTEGER`",
						"short": "Chapter count",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "demographics",
						"title": "Demographics",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "explicit_genres",
						"title": "Explicit Genres",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "favorites",
						"title": "Favorites",
						"type": "`$INTEGER`",
						"short": "Number of users who have favorited this entry",
					},
					map[string]any{
						"name": "genres",
						"title": "Genres",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"title": "Images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "mal_id",
						"title": "Mal Id",
						"type": "`$INTEGER`",
						"short": "MyAnimeList ID",
					},
					map[string]any{
						"name": "members",
						"title": "Members",
						"type": "`$INTEGER`",
						"short": "Number of users who have added this entry to their list",
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "popularity",
						"title": "Popularity",
						"type": "`$INTEGER`",
						"short": "Popularity",
					},
					map[string]any{
						"name": "published",
						"title": "Published",
						"type": "`$OBJECT`",
						"short": "Date range",
					},
					map[string]any{
						"name": "publishing",
						"title": "Publishing",
						"type": "`$BOOLEAN`",
						"short": "Publishing boolean",
					},
					map[string]any{
						"name": "rank",
						"title": "Rank",
						"type": "`$INTEGER`",
						"short": "Ranking",
					},
					map[string]any{
						"name": "score",
						"title": "Score",
						"type": "`$NUMBER`",
						"short": "Score",
						"format": "float",
					},
					map[string]any{
						"name": "scored_by",
						"title": "Scored By",
						"type": "`$INTEGER`",
						"short": "Number of users",
					},
					map[string]any{
						"name": "serializations",
						"title": "Serializations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "Publishing status",
					},
					map[string]any{
						"name": "synopsis",
						"title": "Synopsis",
						"type": "`$STRING`",
						"short": "Synopsis",
					},
					map[string]any{
						"name": "themes",
						"title": "Themes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"short": "Title",
						"deprecated": true,
					},
					map[string]any{
						"name": "title_english",
						"title": "Title English",
						"type": "`$STRING`",
						"short": "English Title",
						"deprecated": true,
					},
					map[string]any{
						"name": "title_japanese",
						"title": "Title Japanese",
						"type": "`$STRING`",
						"short": "Japanese Title",
						"deprecated": true,
					},
					map[string]any{
						"name": "titles",
						"title": "Titles",
						"type": "`$ARRAY`",
						"short": "All Titles",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "Manga Type",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "MyAnimeList URL",
					},
					map[string]any{
						"name": "volumes",
						"title": "Volumes",
						"type": "`$INTEGER`",
						"short": "Volume count",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "manga",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/manga",
								"segments": []any{
									map[string]any{
										"lit": "manga",
									},
								},
								"parts": []any{
									"manga",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "genre",
											"orig": "genre",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "genres_exclude",
											"orig": "genres_exclude",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "letter",
											"orig": "letter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "magazine",
											"orig": "magazine",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_score",
											"orig": "max_score",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_score",
											"orig": "min_score",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "score",
											"orig": "score",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sfw",
											"orig": "sfw",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "unapproved",
											"orig": "unapproved",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"end_date",
										"genre",
										"genres_exclude",
										"letter",
										"limit",
										"magazine",
										"max_score",
										"min_score",
										"order_by",
										"page",
										"q",
										"score",
										"sfw",
										"sort",
										"start_date",
										"status",
										"type",
										"unapproved",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/top/manga",
								"segments": []any{
									map[string]any{
										"lit": "top",
									},
									map[string]any{
										"lit": "manga",
									},
								},
								"parts": []any{
									"top",
									"manga",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"limit",
										"page",
										"type",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/reviews",
								"segments": []any{
									map[string]any{
										"lit": "manga",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "reviews",
									},
								},
								"parts": []any{
									"manga",
									"{id}",
									"reviews",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "preliminary",
											"orig": "preliminary",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "spoiler",
											"orig": "spoiler",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "review",
									"exist": []any{
										"id",
										"page",
										"preliminary",
										"spoiler",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/forum",
								"segments": []any{
									map[string]any{
										"lit": "manga",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "forum",
									},
								},
								"parts": []any{
									"manga",
									"{id}",
									"forum",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "forum",
									"exist": []any{
										"filter",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/news",
								"segments": []any{
									map[string]any{
										"lit": "manga",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "news",
									},
								},
								"parts": []any{
									"manga",
									"{id}",
									"news",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "new",
									"exist": []any{
										"id",
										"page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/userupdates",
								"segments": []any{
									map[string]any{
										"lit": "manga",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "userupdates",
									},
								},
								"parts": []any{
									"manga",
									"{id}",
									"userupdates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "userupdate",
									"exist": []any{
										"id",
										"page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/characters",
								"segments": []any{
									map[string]any{
										"lit": "manga",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "characters",
									},
								},
								"parts": []any{
									"manga",
									"{id}",
									"characters",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "character",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/external",
								"segments": []any{
									map[string]any{
										"lit": "manga",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "external",
									},
								},
								"parts": []any{
									"manga",
									"{id}",
									"external",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "external",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/pictures",
								"segments": []any{
									map[string]any{
										"lit": "manga",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "pictures",
									},
								},
								"parts": []any{
									"manga",
									"{id}",
									"pictures",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "picture",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/recommendations",
								"segments": []any{
									map[string]any{
										"lit": "manga",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "recommendations",
									},
								},
								"parts": []any{
									"manga",
									"{id}",
									"recommendations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "recommendation",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/relations",
								"segments": []any{
									map[string]any{
										"lit": "manga",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "relations",
									},
								},
								"parts": []any{
									"manga",
									"{id}",
									"relations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "relation",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}",
								"segments": []any{
									map[string]any{
										"lit": "manga",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"manga",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/full",
								"segments": []any{
									map[string]any{
										"lit": "manga",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "full",
									},
								},
								"parts": []any{
									"manga",
									"{id}",
									"full",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "full",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/moreinfo",
								"segments": []any{
									map[string]any{
										"lit": "manga",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "moreinfo",
									},
								},
								"parts": []any{
									"manga",
									"{id}",
									"moreinfo",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "moreinfo",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/statistics",
								"segments": []any{
									map[string]any{
										"lit": "manga",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "statistics",
									},
								},
								"parts": []any{
									"manga",
									"{id}",
									"statistics",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "statistic",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"people_search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
					},
				},
				"name": "people_search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/top/people",
								"segments": []any{
									map[string]any{
										"lit": "top",
									},
									map[string]any{
										"lit": "people",
									},
								},
								"parts": []any{
									"top",
									"people",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"page",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"person": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "about",
						"title": "About",
						"type": "`$STRING`",
						"short": "Biography",
					},
					map[string]any{
						"name": "alternate_names",
						"title": "Alternate Names",
						"type": "`$ARRAY`",
						"short": "Other Names",
					},
					map[string]any{
						"name": "birthday",
						"title": "Birthday",
						"type": "`$STRING`",
						"short": "Birthday Date ISO8601",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "family_name",
						"title": "Family Name",
						"type": "`$STRING`",
						"short": "Family Name",
					},
					map[string]any{
						"name": "favorites",
						"title": "Favorites",
						"type": "`$INTEGER`",
						"short": "Number of users who have favorited this entry",
					},
					map[string]any{
						"name": "given_name",
						"title": "Given Name",
						"type": "`$STRING`",
						"short": "Given Name",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"title": "Images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "mal_id",
						"title": "Mal Id",
						"type": "`$INTEGER`",
						"short": "MyAnimeList ID",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name",
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "MyAnimeList URL",
					},
					map[string]any{
						"name": "website_url",
						"title": "Website Url",
						"type": "`$STRING`",
						"short": "Person's website URL",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "person",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/people",
								"segments": []any{
									map[string]any{
										"lit": "people",
									},
								},
								"parts": []any{
									"people",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "letter",
											"orig": "letter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"letter",
										"limit",
										"order_by",
										"page",
										"q",
										"sort",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/people/{id}/anime",
								"segments": []any{
									map[string]any{
										"lit": "people",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "anime",
									},
								},
								"parts": []any{
									"people",
									"{id}",
									"anime",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "anime",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/people/{id}/manga",
								"segments": []any{
									map[string]any{
										"lit": "people",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "manga",
									},
								},
								"parts": []any{
									"people",
									"{id}",
									"manga",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "manga",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/people/{id}/pictures",
								"segments": []any{
									map[string]any{
										"lit": "people",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "pictures",
									},
								},
								"parts": []any{
									"people",
									"{id}",
									"pictures",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "picture",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/people/{id}/voices",
								"segments": []any{
									map[string]any{
										"lit": "people",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "voices",
									},
								},
								"parts": []any{
									"people",
									"{id}",
									"voices",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "voice",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/people/{id}",
								"segments": []any{
									map[string]any{
										"lit": "people",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"people",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/people/{id}/full",
								"segments": []any{
									map[string]any{
										"lit": "people",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "full",
									},
								},
								"parts": []any{
									"people",
									"{id}",
									"full",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "full",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"producer": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "about",
						"title": "About",
						"type": "`$STRING`",
						"short": "About the Producer",
					},
					map[string]any{
						"name": "count",
						"title": "Count",
						"type": "`$INTEGER`",
						"short": "Producers's anime count",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "established",
						"title": "Established",
						"type": "`$STRING`",
						"short": "Established Date ISO8601",
					},
					map[string]any{
						"name": "favorites",
						"title": "Favorites",
						"type": "`$INTEGER`",
						"short": "Producers's member favorites count",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"title": "Images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "mal_id",
						"title": "Mal Id",
						"type": "`$INTEGER`",
						"short": "MyAnimeList ID",
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "titles",
						"title": "Titles",
						"type": "`$ARRAY`",
						"short": "All titles",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "MyAnimeList URL",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "producer",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/producers",
								"segments": []any{
									map[string]any{
										"lit": "producers",
									},
								},
								"parts": []any{
									"producers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "letter",
											"orig": "letter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"letter",
										"limit",
										"order_by",
										"page",
										"q",
										"sort",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/producers/{id}/external",
								"segments": []any{
									map[string]any{
										"lit": "producers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "external",
									},
								},
								"parts": []any{
									"producers",
									"{id}",
									"external",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "external",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/producers/{id}",
								"segments": []any{
									map[string]any{
										"lit": "producers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"producers",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/producers/{id}/full",
								"segments": []any{
									map[string]any{
										"lit": "producers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "full",
									},
								},
								"parts": []any{
									"producers",
									"{id}",
									"full",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "full",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"random": map[string]any{
				"fields": []any{},
				"name": "random",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/random/anime",
								"segments": []any{
									map[string]any{
										"lit": "random",
									},
									map[string]any{
										"lit": "anime",
									},
								},
								"parts": []any{
									"random",
									"anime",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "anime",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/random/characters",
								"segments": []any{
									map[string]any{
										"lit": "random",
									},
									map[string]any{
										"lit": "characters",
									},
								},
								"parts": []any{
									"random",
									"characters",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "character",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/random/manga",
								"segments": []any{
									map[string]any{
										"lit": "random",
									},
									map[string]any{
										"lit": "manga",
									},
								},
								"parts": []any{
									"random",
									"manga",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "manga",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/random/people",
								"segments": []any{
									map[string]any{
										"lit": "random",
									},
									map[string]any{
										"lit": "people",
									},
								},
								"parts": []any{
									"random",
									"people",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "person",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/random/users",
								"segments": []any{
									map[string]any{
										"lit": "random",
									},
									map[string]any{
										"lit": "users",
									},
								},
								"parts": []any{
									"random",
									"users",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "user",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"recommendation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
					},
				},
				"name": "recommendation",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/recommendations",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "username",
									},
									map[string]any{
										"lit": "recommendations",
									},
								},
								"parts": []any{
									"users",
									"{username}",
									"recommendations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"username",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/recommendations/anime",
								"segments": []any{
									map[string]any{
										"lit": "recommendations",
									},
									map[string]any{
										"lit": "anime",
									},
								},
								"parts": []any{
									"recommendations",
									"anime",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "anime",
									"exist": []any{
										"page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/recommendations/manga",
								"segments": []any{
									map[string]any{
										"lit": "recommendations",
									},
									map[string]any{
										"lit": "manga",
									},
								},
								"parts": []any{
									"recommendations",
									"manga",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "manga",
									"exist": []any{
										"page",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.user",
						},
					},
				},
			},
			"review": map[string]any{
				"fields": []any{},
				"name": "review",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/reviews/anime",
								"segments": []any{
									map[string]any{
										"lit": "reviews",
									},
									map[string]any{
										"lit": "anime",
									},
								},
								"parts": []any{
									"reviews",
									"anime",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "preliminary",
											"orig": "preliminary",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "spoiler",
											"orig": "spoiler",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "anime",
									"exist": []any{
										"page",
										"preliminary",
										"spoiler",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/reviews/manga",
								"segments": []any{
									map[string]any{
										"lit": "reviews",
									},
									map[string]any{
										"lit": "manga",
									},
								},
								"parts": []any{
									"reviews",
									"manga",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "preliminary",
											"orig": "preliminary",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "spoiler",
											"orig": "spoiler",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "manga",
									"exist": []any{
										"page",
										"preliminary",
										"spoiler",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"schedule": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
					},
				},
				"name": "schedule",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/schedules",
								"segments": []any{
									map[string]any{
										"lit": "schedules",
									},
								},
								"parts": []any{
									"schedules",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "kid",
											"orig": "kid",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sfw",
											"orig": "sfw",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "unapproved",
											"orig": "unapproved",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"kid",
										"limit",
										"page",
										"sfw",
										"unapproved",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"season": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "seasons",
						"title": "Seasons",
						"type": "`$ARRAY`",
						"short": "List of available seasons",
					},
					map[string]any{
						"name": "year",
						"title": "Year",
						"type": "`$INTEGER`",
						"short": "Year",
					},
				},
				"id": map[string]any{
					"field": "id",
					"from": map[string]any{
						"year": "year",
					},
					"name": "id",
					"parts": []any{
						"year",
						"season",
					},
					"sep": "/",
				},
				"name": "season",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/seasons/now",
								"segments": []any{
									map[string]any{
										"lit": "seasons",
									},
									map[string]any{
										"lit": "now",
									},
								},
								"parts": []any{
									"seasons",
									"now",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "continuing",
											"orig": "continuing",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sfw",
											"orig": "sfw",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "unapproved",
											"orig": "unapproved",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "now",
									"exist": []any{
										"continuing",
										"filter",
										"limit",
										"page",
										"sfw",
										"unapproved",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/seasons/upcoming",
								"segments": []any{
									map[string]any{
										"lit": "seasons",
									},
									map[string]any{
										"lit": "upcoming",
									},
								},
								"parts": []any{
									"seasons",
									"upcoming",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "continuing",
											"orig": "continuing",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sfw",
											"orig": "sfw",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "unapproved",
											"orig": "unapproved",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "upcoming",
									"exist": []any{
										"continuing",
										"filter",
										"limit",
										"page",
										"sfw",
										"unapproved",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/seasons",
								"segments": []any{
									map[string]any{
										"lit": "seasons",
									},
								},
								"parts": []any{
									"seasons",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/seasons/{year}/{season}",
								"segments": []any{
									map[string]any{
										"lit": "seasons",
									},
									map[string]any{
										"var": "year",
									},
									map[string]any{
										"var": "season",
									},
								},
								"parts": []any{
									"seasons",
									"{year}",
									"{season}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "season",
											"orig": "season",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "year",
											"orig": "year",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "continuing",
											"orig": "continuing",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "sfw",
											"orig": "sfw",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "unapproved",
											"orig": "unapproved",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"continuing",
										"filter",
										"limit",
										"page",
										"season",
										"sfw",
										"unapproved",
										"year",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"top": map[string]any{
				"fields": []any{},
				"name": "top",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/top/reviews",
								"segments": []any{
									map[string]any{
										"lit": "top",
									},
									map[string]any{
										"lit": "reviews",
									},
								},
								"parts": []any{
									"top",
									"reviews",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "preliminary",
											"orig": "preliminary",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "spoiler",
											"orig": "spoiler",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "review",
									"exist": []any{
										"page",
										"preliminary",
										"spoiler",
										"type",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "birthday",
						"title": "Birthday",
						"type": "`$STRING`",
						"short": "Birthday Date ISO8601",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "gender",
						"title": "Gender",
						"type": "`$STRING`",
						"short": "User Gender",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"title": "Images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "joined",
						"title": "Joined",
						"type": "`$STRING`",
						"short": "Joined Date ISO8601",
					},
					map[string]any{
						"name": "last_online",
						"title": "Last Online",
						"type": "`$STRING`",
						"short": "Last Online Date ISO8601",
					},
					map[string]any{
						"name": "location",
						"title": "Location",
						"type": "`$STRING`",
						"short": "Location",
					},
					map[string]any{
						"name": "mal_id",
						"title": "Mal Id",
						"type": "`$INTEGER`",
						"short": "MyAnimeList ID",
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "MyAnimeList URL",
					},
					map[string]any{
						"name": "username",
						"title": "Username",
						"type": "`$STRING`",
						"short": "MyAnimeList Username",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "user",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/users",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
								},
								"parts": []any{
									"users",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "gender",
											"orig": "gender",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "location",
											"orig": "location",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "max_age",
											"orig": "max_age",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "min_age",
											"orig": "min_age",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"gender",
										"limit",
										"location",
										"max_age",
										"min_age",
										"page",
										"q",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/animelist",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "username",
									},
									map[string]any{
										"lit": "animelist",
									},
								},
								"parts": []any{
									"users",
									"{username}",
									"animelist",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "animelist",
									"exist": []any{
										"status",
										"username",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/mangalist",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "username",
									},
									map[string]any{
										"lit": "mangalist",
									},
								},
								"parts": []any{
									"users",
									"{username}",
									"mangalist",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "mangalist",
									"exist": []any{
										"status",
										"username",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/reviews",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "username",
									},
									map[string]any{
										"lit": "reviews",
									},
								},
								"parts": []any{
									"users",
									"{username}",
									"reviews",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "review",
									"exist": []any{
										"page",
										"username",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/users/userbyid/{id}",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"lit": "userbyid",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"users",
									"userbyid",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"users",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"username": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "username",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/favorites",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "username",
									},
									map[string]any{
										"lit": "favorites",
									},
								},
								"parts": []any{
									"users",
									"{username}",
									"favorites",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "favorite",
									"exist": []any{
										"username",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/full",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "username",
									},
									map[string]any{
										"lit": "full",
									},
								},
								"parts": []any{
									"users",
									"{username}",
									"full",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "full",
									"exist": []any{
										"username",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user_about": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "about",
						"title": "About",
						"type": "`$STRING`",
						"short": "User About.",
					},
				},
				"name": "user_about",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/about",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "username",
									},
									map[string]any{
										"lit": "about",
									},
								},
								"parts": []any{
									"users",
									"{username}",
									"about",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"username",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.user",
						},
					},
				},
			},
			"user_club": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
					},
				},
				"name": "user_club",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/clubs",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "username",
									},
									map[string]any{
										"lit": "clubs",
									},
								},
								"parts": []any{
									"users",
									"{username}",
									"clubs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"username",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.user",
						},
					},
				},
			},
			"user_friend": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
					},
				},
				"name": "user_friend",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/friends",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "username",
									},
									map[string]any{
										"lit": "friends",
									},
								},
								"parts": []any{
									"users",
									"{username}",
									"friends",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"username",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.user",
						},
					},
				},
			},
			"user_statistic": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "anime",
						"title": "Anime",
						"type": "`$OBJECT`",
						"short": "Anime Statistics",
					},
					map[string]any{
						"name": "manga",
						"title": "Manga",
						"type": "`$OBJECT`",
						"short": "Manga Statistics",
					},
				},
				"name": "user_statistic",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/statistics",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "username",
									},
									map[string]any{
										"lit": "statistics",
									},
								},
								"parts": []any{
									"users",
									"{username}",
									"statistics",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"username",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.user",
						},
					},
				},
			},
			"user_update": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "anime",
						"title": "Anime",
						"type": "`$ARRAY`",
						"short": "Last updated Anime",
					},
					map[string]any{
						"name": "manga",
						"title": "Manga",
						"type": "`$ARRAY`",
						"short": "Last updated Manga",
					},
				},
				"name": "user_update",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/userupdates",
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "username",
									},
									map[string]any{
										"lit": "userupdates",
									},
								},
								"parts": []any{
									"users",
									"{username}",
									"userupdates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"username",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.user",
						},
					},
				},
			},
			"watch_episode": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
					},
				},
				"name": "watch_episode",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/watch/episodes",
								"segments": []any{
									map[string]any{
										"lit": "watch",
									},
									map[string]any{
										"lit": "episodes",
									},
								},
								"parts": []any{
									"watch",
									"episodes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/watch/episodes/popular",
								"segments": []any{
									map[string]any{
										"lit": "watch",
									},
									map[string]any{
										"lit": "episodes",
									},
									map[string]any{
										"lit": "popular",
									},
								},
								"parts": []any{
									"watch",
									"episodes",
									"popular",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"watch_promo": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
						"title": "Pagination",
						"type": "`$OBJECT`",
					},
				},
				"name": "watch_promo",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/watch/promos",
								"segments": []any{
									map[string]any{
										"lit": "watch",
									},
									map[string]any{
										"lit": "promos",
									},
								},
								"parts": []any{
									"watch",
									"promos",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/watch/promos/popular",
								"segments": []any{
									map[string]any{
										"lit": "watch",
									},
									map[string]any{
										"lit": "promos",
									},
									map[string]any{
										"lit": "popular",
									},
								},
								"parts": []any{
									"watch",
									"promos",
									"popular",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
