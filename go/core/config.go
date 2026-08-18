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
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
				"user_history": map[string]any{},
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "airing",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "approved",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "author_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "author_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "background",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "broadcast",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "character",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "comments",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "completed",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "demographics",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "dropped",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "duration",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "endings",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "entry",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "episodes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "explicit_genres",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "external",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "favorites",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "filler",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "genres",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "last_comment",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "licensors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "mal_id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "members",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "moreinfo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "music_videos",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "on_hold",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "openings",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "person",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "plan_to_watch",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "popularity",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "positions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "producers",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "promo",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "rank",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "rating",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "recap",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "relation",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "relations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "score",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "scored_by",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "scores",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "season",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "streaming",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "studios",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "synopsis",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "theme",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "themes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title_english",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title_japanese",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title_romanji",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title_synonyms",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "titles",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "total",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "trailer",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "voice_actors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "watching",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "year",
						"type": "`$INTEGER`",
					},
				},
				"name": "anime",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "genre",
											"orig": "genre",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "genres_exclude",
											"orig": "genres_exclude",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "letter",
											"orig": "letter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_score",
											"orig": "max_score",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "min_score",
											"orig": "min_score",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "producer",
											"orig": "producer",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "rating",
											"orig": "rating",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "score",
											"orig": "score",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sfw",
											"orig": "sfw",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "unapproved",
											"orig": "unapproved",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime",
								"parts": []any{
									"anime",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "rating",
											"orig": "rating",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sfw",
											"orig": "sfw",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/top/anime",
								"parts": []any{
									"top",
									"anime",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "preliminary",
											"orig": "preliminary",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "spoiler",
											"orig": "spoiler",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/reviews",
								"parts": []any{
									"anime",
									"{id}",
									"reviews",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/episodes",
								"parts": []any{
									"anime",
									"{id}",
									"episodes",
								},
								"select": map[string]any{
									"$action": "episode",
									"exist": []any{
										"id",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/forum",
								"parts": []any{
									"anime",
									"{id}",
									"forum",
								},
								"select": map[string]any{
									"$action": "forum",
									"exist": []any{
										"filter",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/news",
								"parts": []any{
									"anime",
									"{id}",
									"news",
								},
								"select": map[string]any{
									"$action": "new",
									"exist": []any{
										"id",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/userupdates",
								"parts": []any{
									"anime",
									"{id}",
									"userupdates",
								},
								"select": map[string]any{
									"$action": "userupdate",
									"exist": []any{
										"id",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/videos/episodes",
								"parts": []any{
									"anime",
									"{id}",
									"videos",
									"episodes",
								},
								"select": map[string]any{
									"$action": "video_episode",
									"exist": []any{
										"id",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/characters",
								"parts": []any{
									"anime",
									"{id}",
									"characters",
								},
								"select": map[string]any{
									"$action": "character",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/external",
								"parts": []any{
									"anime",
									"{id}",
									"external",
								},
								"select": map[string]any{
									"$action": "external",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/pictures",
								"parts": []any{
									"anime",
									"{id}",
									"pictures",
								},
								"select": map[string]any{
									"$action": "picture",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/recommendations",
								"parts": []any{
									"anime",
									"{id}",
									"recommendations",
								},
								"select": map[string]any{
									"$action": "recommendation",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/relations",
								"parts": []any{
									"anime",
									"{id}",
									"relations",
								},
								"select": map[string]any{
									"$action": "relation",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/staff",
								"parts": []any{
									"anime",
									"{id}",
									"staff",
								},
								"select": map[string]any{
									"$action": "staff",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/streaming",
								"parts": []any{
									"anime",
									"{id}",
									"streaming",
								},
								"select": map[string]any{
									"$action": "streaming",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "episode",
											"orig": "episode",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/episodes/{episode}",
								"parts": []any{
									"anime",
									"{id}",
									"episodes",
									"{episode}",
								},
								"select": map[string]any{
									"exist": []any{
										"episode",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}",
								"parts": []any{
									"anime",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/full",
								"parts": []any{
									"anime",
									"{id}",
									"full",
								},
								"select": map[string]any{
									"$action": "full",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/moreinfo",
								"parts": []any{
									"anime",
									"{id}",
									"moreinfo",
								},
								"select": map[string]any{
									"$action": "moreinfo",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/statistics",
								"parts": []any{
									"anime",
									"{id}",
									"statistics",
								},
								"select": map[string]any{
									"$action": "statistic",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/themes",
								"parts": []any{
									"anime",
									"{id}",
									"themes",
								},
								"select": map[string]any{
									"$action": "theme",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/anime/{id}/videos",
								"parts": []any{
									"anime",
									"{id}",
									"videos",
								},
								"select": map[string]any{
									"$action": "video",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"episode",
						},
					},
				},
			},
			"character": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "about",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "anime",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "favorites",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "image_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "language",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "large_image_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mal_id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "manga",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name_kanji",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nicknames",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "person",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "voices",
						"type": "`$ARRAY`",
					},
				},
				"name": "character",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "letter",
											"orig": "letter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/characters",
								"parts": []any{
									"characters",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/top/characters",
								"parts": []any{
									"top",
									"characters",
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/characters/{id}/anime",
								"parts": []any{
									"characters",
									"{id}",
									"anime",
								},
								"select": map[string]any{
									"$action": "anime",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/characters/{id}/manga",
								"parts": []any{
									"characters",
									"{id}",
									"manga",
								},
								"select": map[string]any{
									"$action": "manga",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/characters/{id}/pictures",
								"parts": []any{
									"characters",
									"{id}",
									"pictures",
								},
								"select": map[string]any{
									"$action": "picture",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/characters/{id}/voices",
								"parts": []any{
									"characters",
									"{id}",
									"voices",
								},
								"select": map[string]any{
									"$action": "voice",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/characters/{id}",
								"parts": []any{
									"characters",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/characters/{id}/full",
								"parts": []any{
									"characters",
									"{id}",
									"full",
								},
								"select": map[string]any{
									"$action": "full",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "anime",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "characters",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "mal_id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "manga",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "members",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "username",
						"type": "`$STRING`",
					},
				},
				"name": "club",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "letter",
											"orig": "letter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/clubs",
								"parts": []any{
									"clubs",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/clubs/{id}/members",
								"parts": []any{
									"clubs",
									"{id}",
									"members",
								},
								"select": map[string]any{
									"$action": "member",
									"exist": []any{
										"id",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/clubs/{id}/staff",
								"parts": []any{
									"clubs",
									"{id}",
									"staff",
								},
								"select": map[string]any{
									"$action": "staff",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/clubs/{id}",
								"parts": []any{
									"clubs",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/clubs/{id}/relations",
								"parts": []any{
									"clubs",
									"{id}",
									"relations",
								},
								"select": map[string]any{
									"$action": "relation",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
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
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "username",
											"orig": "username",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/external",
								"parts": []any{
									"users",
									"{username}",
									"external",
								},
								"select": map[string]any{
									"exist": []any{
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"user",
						},
					},
				},
			},
			"genre": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "mal_id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"type": "`$STRING`",
					},
				},
				"name": "genre",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/genres/anime",
								"parts": []any{
									"genres",
									"anime",
								},
								"select": map[string]any{
									"$action": "anime",
									"exist": []any{
										"filter",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/genres/manga",
								"parts": []any{
									"genres",
									"manga",
								},
								"select": map[string]any{
									"$action": "manga",
									"exist": []any{
										"filter",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"magazine": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
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
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "letter",
											"orig": "letter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/magazines",
								"parts": []any{
									"magazines",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "author_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "author_username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "authors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "background",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "chapters",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "character",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "comments",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "completed",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "demographics",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "dropped",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "entry",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "explicit_genres",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "external",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "favorites",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "genres",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "jpg",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "last_comment",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "mal_id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "members",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "moreinfo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "on_hold",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "plan_to_read",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "popularity",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "published",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "publishing",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "rank",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "reading",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "relation",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "relations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "score",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "scored_by",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "scores",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "serializations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "synopsis",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "themes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title_english",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title_japanese",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title_synonyms",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "titles",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "total",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "volumes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "webp",
						"type": "`$OBJECT`",
					},
				},
				"name": "manga",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "genre",
											"orig": "genre",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "genres_exclude",
											"orig": "genres_exclude",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "letter",
											"orig": "letter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "magazine",
											"orig": "magazine",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_score",
											"orig": "max_score",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "min_score",
											"orig": "min_score",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "score",
											"orig": "score",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sfw",
											"orig": "sfw",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "unapproved",
											"orig": "unapproved",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/manga",
								"parts": []any{
									"manga",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/top/manga",
								"parts": []any{
									"top",
									"manga",
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"limit",
										"page",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "preliminary",
											"orig": "preliminary",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "spoiler",
											"orig": "spoiler",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/reviews",
								"parts": []any{
									"manga",
									"{id}",
									"reviews",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/forum",
								"parts": []any{
									"manga",
									"{id}",
									"forum",
								},
								"select": map[string]any{
									"$action": "forum",
									"exist": []any{
										"filter",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/news",
								"parts": []any{
									"manga",
									"{id}",
									"news",
								},
								"select": map[string]any{
									"$action": "new",
									"exist": []any{
										"id",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/userupdates",
								"parts": []any{
									"manga",
									"{id}",
									"userupdates",
								},
								"select": map[string]any{
									"$action": "userupdate",
									"exist": []any{
										"id",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/characters",
								"parts": []any{
									"manga",
									"{id}",
									"characters",
								},
								"select": map[string]any{
									"$action": "character",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/external",
								"parts": []any{
									"manga",
									"{id}",
									"external",
								},
								"select": map[string]any{
									"$action": "external",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/pictures",
								"parts": []any{
									"manga",
									"{id}",
									"pictures",
								},
								"select": map[string]any{
									"$action": "picture",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/recommendations",
								"parts": []any{
									"manga",
									"{id}",
									"recommendations",
								},
								"select": map[string]any{
									"$action": "recommendation",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/relations",
								"parts": []any{
									"manga",
									"{id}",
									"relations",
								},
								"select": map[string]any{
									"$action": "relation",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}",
								"parts": []any{
									"manga",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/full",
								"parts": []any{
									"manga",
									"{id}",
									"full",
								},
								"select": map[string]any{
									"$action": "full",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/moreinfo",
								"parts": []any{
									"manga",
									"{id}",
									"moreinfo",
								},
								"select": map[string]any{
									"$action": "moreinfo",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/manga/{id}/statistics",
								"parts": []any{
									"manga",
									"{id}",
									"statistics",
								},
								"select": map[string]any{
									"$action": "statistic",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
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
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
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
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/top/people",
								"parts": []any{
									"top",
									"people",
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "alternate_names",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "anime",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "birthday",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "character",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "family_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "favorites",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "given_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "jpg",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "mal_id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "manga",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "position",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "voices",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "website_url",
						"type": "`$STRING`",
					},
				},
				"name": "person",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "letter",
											"orig": "letter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/people",
								"parts": []any{
									"people",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/people/{id}/anime",
								"parts": []any{
									"people",
									"{id}",
									"anime",
								},
								"select": map[string]any{
									"$action": "anime",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/people/{id}/manga",
								"parts": []any{
									"people",
									"{id}",
									"manga",
								},
								"select": map[string]any{
									"$action": "manga",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/people/{id}/pictures",
								"parts": []any{
									"people",
									"{id}",
									"pictures",
								},
								"select": map[string]any{
									"$action": "picture",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/people/{id}/voices",
								"parts": []any{
									"people",
									"{id}",
									"voices",
								},
								"select": map[string]any{
									"$action": "voice",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/people/{id}",
								"parts": []any{
									"people",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/people/{id}/full",
								"parts": []any{
									"people",
									"{id}",
									"full",
								},
								"select": map[string]any{
									"$action": "full",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "established",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "favorites",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "mal_id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "titles",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "url",
						"type": "`$STRING`",
					},
				},
				"name": "producer",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "letter",
											"orig": "letter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/producers",
								"parts": []any{
									"producers",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/producers/{id}/external",
								"parts": []any{
									"producers",
									"{id}",
									"external",
								},
								"select": map[string]any{
									"$action": "external",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/producers/{id}",
								"parts": []any{
									"producers",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/producers/{id}/full",
								"parts": []any{
									"producers",
									"{id}",
									"full",
								},
								"select": map[string]any{
									"$action": "full",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
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
				"fields": []any{
					map[string]any{
						"name": "about",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "aired",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "airing",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "alternate_names",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "approved",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "authors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "background",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "birthday",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "broadcast",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "chapters",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "demographics",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "duration",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "episodes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "explicit_genres",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "family_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "favorites",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "gender",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "genres",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "given_name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "joined",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_online",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "licensors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "location",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mal_id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "members",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name_kanji",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nicknames",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "popularity",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "producers",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "published",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "publishing",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "rank",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "rating",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "score",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "scored_by",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "season",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "serializations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "source",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "studios",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "synopsis",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "themes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title_english",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title_japanese",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title_synonyms",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "titles",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "trailer",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "volumes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "website_url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "year",
						"type": "`$INTEGER`",
					},
				},
				"name": "random",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/random/anime",
								"parts": []any{
									"random",
									"anime",
								},
								"select": map[string]any{
									"$action": "anime",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/random/characters",
								"parts": []any{
									"random",
									"characters",
								},
								"select": map[string]any{
									"$action": "character",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/random/manga",
								"parts": []any{
									"random",
									"manga",
								},
								"select": map[string]any{
									"$action": "manga",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/random/people",
								"parts": []any{
									"random",
									"people",
								},
								"select": map[string]any{
									"$action": "person",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/random/users",
								"parts": []any{
									"random",
									"users",
								},
								"select": map[string]any{
									"$action": "user",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
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
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 4,
						},
					},
					map[string]any{
						"name": "pagination",
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
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "username",
											"orig": "username",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/recommendations",
								"parts": []any{
									"users",
									"{username}",
									"recommendations",
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/recommendations/anime",
								"parts": []any{
									"recommendations",
									"anime",
								},
								"select": map[string]any{
									"$action": "anime",
									"exist": []any{
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/recommendations/manga",
								"parts": []any{
									"recommendations",
									"manga",
								},
								"select": map[string]any{
									"$action": "manga",
									"exist": []any{
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"user",
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
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "preliminary",
											"orig": "preliminary",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "spoiler",
											"orig": "spoiler",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/reviews/anime",
								"parts": []any{
									"reviews",
									"anime",
								},
								"select": map[string]any{
									"$action": "anime",
									"exist": []any{
										"page",
										"preliminary",
										"spoiler",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "preliminary",
											"orig": "preliminary",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "spoiler",
											"orig": "spoiler",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/reviews/manga",
								"parts": []any{
									"reviews",
									"manga",
								},
								"select": map[string]any{
									"$action": "manga",
									"exist": []any{
										"page",
										"preliminary",
										"spoiler",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
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
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "kid",
											"orig": "kid",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sfw",
											"orig": "sfw",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "unapproved",
											"orig": "unapproved",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/schedules",
								"parts": []any{
									"schedules",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "seasons",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "year",
						"type": "`$INTEGER`",
					},
				},
				"name": "season",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "continuing",
											"orig": "continuing",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sfw",
											"orig": "sfw",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "unapproved",
											"orig": "unapproved",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/seasons/now",
								"parts": []any{
									"seasons",
									"now",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "continuing",
											"orig": "continuing",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sfw",
											"orig": "sfw",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "unapproved",
											"orig": "unapproved",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/seasons/upcoming",
								"parts": []any{
									"seasons",
									"upcoming",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/seasons",
								"parts": []any{
									"seasons",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "season",
											"orig": "season",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "year",
											"orig": "year",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "continuing",
											"orig": "continuing",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sfw",
											"orig": "sfw",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "unapproved",
											"orig": "unapproved",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/seasons/{year}/{season}",
								"parts": []any{
									"seasons",
									"{year}",
									"{season}",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"season",
						},
					},
				},
			},
			"top": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "pagination",
						"type": "`$OBJECT`",
					},
				},
				"name": "top",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "preliminary",
											"orig": "preliminary",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "spoiler",
											"orig": "spoiler",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/top/reviews",
								"parts": []any{
									"top",
									"reviews",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
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
						"name": "anime",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "birthday",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "characters",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "external",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "gender",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "joined",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_online",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "location",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mal_id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "manga",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "people",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "statistics",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "username",
						"type": "`$STRING`",
					},
				},
				"name": "user",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "gender",
											"orig": "gender",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "location",
											"orig": "location",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "max_age",
											"orig": "max_age",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "min_age",
											"orig": "min_age",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users",
								"parts": []any{
									"users",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "username",
											"orig": "username",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/animelist",
								"parts": []any{
									"users",
									"{username}",
									"animelist",
								},
								"select": map[string]any{
									"$action": "animelist",
									"exist": []any{
										"status",
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "username",
											"orig": "username",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/mangalist",
								"parts": []any{
									"users",
									"{username}",
									"mangalist",
								},
								"select": map[string]any{
									"$action": "mangalist",
									"exist": []any{
										"status",
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "username",
											"orig": "username",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/reviews",
								"parts": []any{
									"users",
									"{username}",
									"reviews",
								},
								"select": map[string]any{
									"$action": "review",
									"exist": []any{
										"page",
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/userbyid/{id}",
								"parts": []any{
									"users",
									"userbyid",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "username",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}",
								"parts": []any{
									"users",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"username": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "username",
											"orig": "username",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/favorites",
								"parts": []any{
									"users",
									"{username}",
									"favorites",
								},
								"select": map[string]any{
									"$action": "favorite",
									"exist": []any{
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "username",
											"orig": "username",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/full",
								"parts": []any{
									"users",
									"{username}",
									"full",
								},
								"select": map[string]any{
									"$action": "full",
									"exist": []any{
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"user",
						},
					},
				},
			},
			"user_about": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "about",
						"type": "`$STRING`",
					},
				},
				"name": "user_about",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "username",
											"orig": "username",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/about",
								"parts": []any{
									"users",
									"{username}",
									"about",
								},
								"select": map[string]any{
									"exist": []any{
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"user",
						},
					},
				},
			},
			"user_club": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
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
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "username",
											"orig": "username",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/clubs",
								"parts": []any{
									"users",
									"{username}",
									"clubs",
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"user",
						},
					},
				},
			},
			"user_friend": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
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
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "username",
											"orig": "username",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/friends",
								"parts": []any{
									"users",
									"{username}",
									"friends",
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"user",
						},
					},
				},
			},
			"user_history": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entry",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "increment",
						"type": "`$INTEGER`",
					},
				},
				"name": "user_history",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "username",
											"orig": "username",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/history",
								"parts": []any{
									"users",
									"{username}",
									"history",
								},
								"select": map[string]any{
									"exist": []any{
										"type",
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"user",
						},
					},
				},
			},
			"user_statistic": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "anime",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "manga",
						"type": "`$OBJECT`",
					},
				},
				"name": "user_statistic",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "username",
											"orig": "username",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/statistics",
								"parts": []any{
									"users",
									"{username}",
									"statistics",
								},
								"select": map[string]any{
									"exist": []any{
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"user",
						},
					},
				},
			},
			"user_update": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "anime",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "manga",
						"type": "`$ARRAY`",
					},
				},
				"name": "user_update",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "username",
											"orig": "username",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{username}/userupdates",
								"parts": []any{
									"users",
									"{username}",
									"userupdates",
								},
								"select": map[string]any{
									"exist": []any{
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"user",
						},
					},
				},
			},
			"watch_episode": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
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
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/watch/episodes",
								"parts": []any{
									"watch",
									"episodes",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/watch/episodes/popular",
								"parts": []any{
									"watch",
									"episodes",
									"popular",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
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
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
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
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/watch/promos",
								"parts": []any{
									"watch",
									"promos",
								},
								"select": map[string]any{
									"exist": []any{
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/watch/promos/popular",
								"parts": []any{
									"watch",
									"promos",
									"popular",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
