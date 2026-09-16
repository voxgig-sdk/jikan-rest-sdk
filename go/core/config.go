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
						"short": "Aired Date ISO8601",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "airing",
						"short": "Airing boolean",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "approved",
						"short": "Whether the entry is pending approval on MAL or not",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "author_url",
						"short": "Author Profile URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "author_username",
						"short": "Author MyAnimeList Username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "background",
						"short": "Background",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "broadcast",
						"short": "Broadcast Details",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "character",
						"short": "Character details",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "comments",
						"short": "Comment count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "completed",
						"short": "Number of users who have completed the resource",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "date",
						"short": "Post Date ISO8601",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "demographics",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "dropped",
						"short": "Number of users who have dropped the resource",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "duration",
						"short": "Episode duration in seconds",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "endings",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "entry",
						"short": "Related entries",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "episodes",
						"short": "Episode count",
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
						"short": "Number of users who have favorited this entry",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "filler",
						"short": "Filler episode",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "genres",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "last_comment",
						"short": "Last comment details",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "licensors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "mal_id",
						"short": "MyAnimeList ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "members",
						"short": "Number of users who have added this entry to their list",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "moreinfo",
						"short": "Additional information on the entry",
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
						"short": "Number of users who have put the resource on hold",
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
						"short": "Person details",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "plan_to_watch",
						"short": "Number of users who have planned to watch the resource",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "popularity",
						"short": "Popularity",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "positions",
						"short": "Staff Positions",
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
						"short": "Ranking",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "rating",
						"short": "Anime audience rating",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "recap",
						"short": "Recap episode",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "relation",
						"short": "Relation type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "relations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "role",
						"short": "Character's Role",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "float",
						"name": "score",
						"short": "Score",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "scored_by",
						"short": "Number of users",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "scores",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "season",
						"short": "Season",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source",
						"short": "Original Material/Source adapted from",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "Airing status",
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
						"short": "Episode Synopsis",
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
						"deprecated": true,
						"name": "title",
						"short": "Title",
						"type": "`$STRING`",
					},
					map[string]any{
						"deprecated": true,
						"name": "title_english",
						"short": "English Title",
						"type": "`$STRING`",
					},
					map[string]any{
						"deprecated": true,
						"name": "title_japanese",
						"short": "Title Japanese",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title_romanji",
						"short": "title_romanji",
						"type": "`$STRING`",
					},
					map[string]any{
						"deprecated": true,
						"name": "title_synonyms",
						"short": "Other Titles",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "titles",
						"short": "All titles",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "total",
						"short": "Total number of users who have the resource added to their lists",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "trailer",
						"short": "Youtube Details",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"short": "Anime Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "MyAnimeList URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "voice_actors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "watching",
						"short": "Number of users watching the resource",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "year",
						"short": "Year",
						"type": "`$INTEGER`",
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
								"segments": []any{
									map[string]any{
										"lit": "anime",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"anime",
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
								"segments": []any{
									map[string]any{
										"lit": "top",
									},
									map[string]any{
										"lit": "anime",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"top",
									"anime",
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
								"parts": []any{
									"anime",
									"{id}",
									"reviews",
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
								"parts": []any{
									"anime",
									"{id}",
									"episodes",
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
								"parts": []any{
									"anime",
									"{id}",
									"forum",
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
								"parts": []any{
									"anime",
									"{id}",
									"news",
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
								"parts": []any{
									"anime",
									"{id}",
									"userupdates",
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
								"parts": []any{
									"anime",
									"{id}",
									"videos",
									"episodes",
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
								"parts": []any{
									"anime",
									"{id}",
									"characters",
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
								"parts": []any{
									"anime",
									"{id}",
									"external",
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
								"parts": []any{
									"anime",
									"{id}",
									"pictures",
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
								"parts": []any{
									"anime",
									"{id}",
									"recommendations",
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
								"parts": []any{
									"anime",
									"{id}",
									"relations",
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
								"parts": []any{
									"anime",
									"{id}",
									"staff",
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
								"parts": []any{
									"anime",
									"{id}",
									"streaming",
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
								"parts": []any{
									"anime",
									"{id}",
									"episodes",
									"{episode}",
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
								"segments": []any{
									map[string]any{
										"lit": "anime",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"anime",
									"{id}",
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
								"parts": []any{
									"anime",
									"{id}",
									"full",
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
								"parts": []any{
									"anime",
									"{id}",
									"moreinfo",
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
								"parts": []any{
									"anime",
									"{id}",
									"statistics",
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
								"parts": []any{
									"anime",
									"{id}",
									"themes",
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
								"parts": []any{
									"anime",
									"{id}",
									"videos",
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
						"short": "Biography",
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
						"short": "Number of users who have favorited this entry",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "image_url",
						"short": "Default JPG Image Size URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "language",
						"short": "Character's Role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "large_image_url",
						"short": "Large JPG Image Size URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mal_id",
						"short": "MyAnimeList ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "manga",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"short": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name_kanji",
						"short": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nicknames",
						"short": "Other Names",
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
						"short": "Character's Role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "MyAnimeList URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "voices",
						"type": "`$ARRAY`",
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
								"segments": []any{
									map[string]any{
										"lit": "characters",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"characters",
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
								"segments": []any{
									map[string]any{
										"lit": "top",
									},
									map[string]any{
										"lit": "characters",
									},
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
								"parts": []any{
									"top",
									"characters",
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
								"parts": []any{
									"characters",
									"{id}",
									"anime",
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
								"parts": []any{
									"characters",
									"{id}",
									"manga",
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
								"parts": []any{
									"characters",
									"{id}",
									"pictures",
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
								"parts": []any{
									"characters",
									"{id}",
									"voices",
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
								"segments": []any{
									map[string]any{
										"lit": "characters",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"characters",
									"{id}",
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
								"parts": []any{
									"characters",
									"{id}",
									"full",
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
						"short": "Club access",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "anime",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "category",
						"short": "Club Category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "characters",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "created",
						"short": "Date Created ISO8601",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "mal_id",
						"short": "MyAnimeList ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "manga",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "members",
						"short": "Number of club members",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "Club name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "url",
						"short": "Club URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "username",
						"short": "User's username",
						"type": "`$STRING`",
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
								"segments": []any{
									map[string]any{
										"lit": "clubs",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"clubs",
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
								"parts": []any{
									"clubs",
									"{id}",
									"members",
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
								"parts": []any{
									"clubs",
									"{id}",
									"staff",
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
								"segments": []any{
									map[string]any{
										"lit": "clubs",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"clubs",
									"{id}",
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
								"parts": []any{
									"clubs",
									"{id}",
									"relations",
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
								"select": map[string]any{
									"exist": []any{
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"users",
									"{username}",
									"external",
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
						"short": "Genre's entry count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "mal_id",
						"short": "MyAnimeList ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "Genre Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "MyAnimeList URL",
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
								"segments": []any{
									map[string]any{
										"lit": "genres",
									},
									map[string]any{
										"lit": "anime",
									},
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
								"parts": []any{
									"genres",
									"anime",
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
								"segments": []any{
									map[string]any{
										"lit": "genres",
									},
									map[string]any{
										"lit": "manga",
									},
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
								"parts": []any{
									"genres",
									"manga",
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
								"segments": []any{
									map[string]any{
										"lit": "magazines",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"magazines",
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
						"short": "Whether the entry is pending approval on MAL or not",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "author_url",
						"short": "Author Profile URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "author_username",
						"short": "Author MyAnimeList Username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "authors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "background",
						"short": "Background",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "chapters",
						"short": "Chapter count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "character",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "comments",
						"short": "Comment count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "completed",
						"short": "Number of users who have completed the resource",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "date",
						"short": "Post Date ISO8601",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "demographics",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "dropped",
						"short": "Number of users who have dropped the resource",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "entry",
						"short": "Related entries",
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
						"short": "Number of users who have favorited this entry",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "genres",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "jpg",
						"short": "Available images in JPG",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "last_comment",
						"short": "Last comment details",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "mal_id",
						"short": "MyAnimeList ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "members",
						"short": "Number of users who have added this entry to their list",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "moreinfo",
						"short": "Additional information on the entry",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "on_hold",
						"short": "Number of users who have put the resource on hold",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "plan_to_read",
						"short": "Number of users who have planned to read the resource",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "popularity",
						"short": "Popularity",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "published",
						"short": "Date range",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "publishing",
						"short": "Publishing boolean",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "rank",
						"short": "Ranking",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "reading",
						"short": "Number of users reading the resource",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "relation",
						"short": "Relation type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "relations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "role",
						"short": "Character's Role",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "float",
						"name": "score",
						"short": "Score",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "scored_by",
						"short": "Number of users",
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
						"short": "Publishing status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "synopsis",
						"short": "Synopsis",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "themes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"deprecated": true,
						"name": "title",
						"short": "Title",
						"type": "`$STRING`",
					},
					map[string]any{
						"deprecated": true,
						"name": "title_english",
						"short": "English Title",
						"type": "`$STRING`",
					},
					map[string]any{
						"deprecated": true,
						"name": "title_japanese",
						"short": "Japanese Title",
						"type": "`$STRING`",
					},
					map[string]any{
						"deprecated": true,
						"name": "title_synonyms",
						"short": "Other Titles",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "titles",
						"short": "All Titles",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "total",
						"short": "Total number of users who have the resource added to their lists",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"short": "Manga Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "MyAnimeList URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "volumes",
						"short": "Volume count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "webp",
						"short": "Available images in WEBP",
						"type": "`$OBJECT`",
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
								"segments": []any{
									map[string]any{
										"lit": "manga",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"manga",
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
								"segments": []any{
									map[string]any{
										"lit": "top",
									},
									map[string]any{
										"lit": "manga",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"top",
									"manga",
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
								"parts": []any{
									"manga",
									"{id}",
									"reviews",
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
								"parts": []any{
									"manga",
									"{id}",
									"forum",
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
								"parts": []any{
									"manga",
									"{id}",
									"news",
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
								"parts": []any{
									"manga",
									"{id}",
									"userupdates",
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
								"parts": []any{
									"manga",
									"{id}",
									"characters",
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
								"parts": []any{
									"manga",
									"{id}",
									"external",
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
								"parts": []any{
									"manga",
									"{id}",
									"pictures",
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
								"parts": []any{
									"manga",
									"{id}",
									"recommendations",
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
								"parts": []any{
									"manga",
									"{id}",
									"relations",
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
								"segments": []any{
									map[string]any{
										"lit": "manga",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"manga",
									"{id}",
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
								"parts": []any{
									"manga",
									"{id}",
									"full",
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
								"parts": []any{
									"manga",
									"{id}",
									"moreinfo",
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
								"parts": []any{
									"manga",
									"{id}",
									"statistics",
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
								"segments": []any{
									map[string]any{
										"lit": "top",
									},
									map[string]any{
										"lit": "people",
									},
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
								"parts": []any{
									"top",
									"people",
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
						"short": "Biography",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "alternate_names",
						"short": "Other Names",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "anime",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "birthday",
						"short": "Birthday Date ISO8601",
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
						"short": "Family Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "favorites",
						"short": "Number of users who have favorited this entry",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "given_name",
						"short": "Given Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "jpg",
						"short": "Available images in JPG",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "mal_id",
						"short": "MyAnimeList ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "manga",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"short": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "position",
						"short": "Person's position",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"short": "Person's Character's role in the anime",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "MyAnimeList URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "voices",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "website_url",
						"short": "Person's website URL",
						"type": "`$STRING`",
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
								"segments": []any{
									map[string]any{
										"lit": "people",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"people",
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
								"parts": []any{
									"people",
									"{id}",
									"anime",
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
								"parts": []any{
									"people",
									"{id}",
									"manga",
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
								"parts": []any{
									"people",
									"{id}",
									"pictures",
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
								"parts": []any{
									"people",
									"{id}",
									"voices",
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
								"segments": []any{
									map[string]any{
										"lit": "people",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"people",
									"{id}",
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
								"parts": []any{
									"people",
									"{id}",
									"full",
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
						"short": "About the Producer",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "count",
						"short": "Producers's anime count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "established",
						"short": "Established Date ISO8601",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "favorites",
						"short": "Producers's member favorites count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "mal_id",
						"short": "MyAnimeList ID",
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
						"short": "All titles",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "url",
						"short": "MyAnimeList URL",
						"type": "`$STRING`",
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
								"segments": []any{
									map[string]any{
										"lit": "producers",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"producers",
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
								"parts": []any{
									"producers",
									"{id}",
									"external",
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
								"segments": []any{
									map[string]any{
										"lit": "producers",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"producers",
									"{id}",
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
								"parts": []any{
									"producers",
									"{id}",
									"full",
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
						"short": "Biography",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "aired",
						"short": "Date range",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "airing",
						"short": "Airing boolean",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "alternate_names",
						"short": "Other Names",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "approved",
						"short": "Whether the entry is pending approval on MAL or not",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "authors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "background",
						"short": "Background",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "birthday",
						"short": "Birthday Date ISO8601",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "broadcast",
						"short": "Broadcast Details",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "chapters",
						"short": "Chapter count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "demographics",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "duration",
						"short": "Parsed raw duration",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "episodes",
						"short": "Episode count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "explicit_genres",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "family_name",
						"short": "Family Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "favorites",
						"short": "Number of users who have favorited this entry",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "gender",
						"short": "User Gender",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "genres",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "given_name",
						"short": "Given Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "joined",
						"short": "Joined Date ISO8601",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_online",
						"short": "Last Online Date ISO8601",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "licensors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "location",
						"short": "Location",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mal_id",
						"short": "MyAnimeList ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "members",
						"short": "Number of users who have added this entry to their list",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name_kanji",
						"short": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nicknames",
						"short": "Other Names",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "popularity",
						"short": "Popularity",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "producers",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "published",
						"short": "Date range",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "publishing",
						"short": "Publishing boolean",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "rank",
						"short": "Ranking",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "rating",
						"short": "Anime audience rating",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "float",
						"name": "score",
						"short": "Score",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "scored_by",
						"short": "Number of users",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "season",
						"short": "Season",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "serializations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "source",
						"short": "Original Material/Source adapted from",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "Airing status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "studios",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "synopsis",
						"short": "Synopsis",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "themes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"deprecated": true,
						"name": "title",
						"short": "Title",
						"type": "`$STRING`",
					},
					map[string]any{
						"deprecated": true,
						"name": "title_english",
						"short": "English Title",
						"type": "`$STRING`",
					},
					map[string]any{
						"deprecated": true,
						"name": "title_japanese",
						"short": "Japanese Title",
						"type": "`$STRING`",
					},
					map[string]any{
						"deprecated": true,
						"name": "title_synonyms",
						"short": "Other Titles",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "titles",
						"short": "All titles",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "trailer",
						"short": "Youtube Details",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"short": "Anime Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "MyAnimeList URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "username",
						"short": "MyAnimeList Username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "volumes",
						"short": "Volume count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "website_url",
						"short": "Person's website URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "year",
						"short": "Year",
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
								"segments": []any{
									map[string]any{
										"lit": "random",
									},
									map[string]any{
										"lit": "anime",
									},
								},
								"select": map[string]any{
									"$action": "anime",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"random",
									"anime",
								},
							},
							map[string]any{
								"args": map[string]any{},
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
								"select": map[string]any{
									"$action": "character",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"random",
									"characters",
								},
							},
							map[string]any{
								"args": map[string]any{},
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
								"select": map[string]any{
									"$action": "manga",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"random",
									"manga",
								},
							},
							map[string]any{
								"args": map[string]any{},
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
								"select": map[string]any{
									"$action": "person",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"random",
									"people",
								},
							},
							map[string]any{
								"args": map[string]any{},
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
								"select": map[string]any{
									"$action": "user",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"random",
									"users",
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
								"parts": []any{
									"users",
									"{username}",
									"recommendations",
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
								"segments": []any{
									map[string]any{
										"lit": "recommendations",
									},
									map[string]any{
										"lit": "anime",
									},
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
								"parts": []any{
									"recommendations",
									"anime",
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
								"segments": []any{
									map[string]any{
										"lit": "recommendations",
									},
									map[string]any{
										"lit": "manga",
									},
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
								"parts": []any{
									"recommendations",
									"manga",
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
								"segments": []any{
									map[string]any{
										"lit": "reviews",
									},
									map[string]any{
										"lit": "anime",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"reviews",
									"anime",
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
								"segments": []any{
									map[string]any{
										"lit": "reviews",
									},
									map[string]any{
										"lit": "manga",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"reviews",
									"manga",
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
								"segments": []any{
									map[string]any{
										"lit": "schedules",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"schedules",
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
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "seasons",
						"short": "List of available seasons",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "year",
						"short": "Year",
						"type": "`$INTEGER`",
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
								"segments": []any{
									map[string]any{
										"lit": "seasons",
									},
									map[string]any{
										"lit": "now",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"seasons",
									"now",
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
								"segments": []any{
									map[string]any{
										"lit": "seasons",
									},
									map[string]any{
										"lit": "upcoming",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"seasons",
									"upcoming",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/seasons",
								"segments": []any{
									map[string]any{
										"lit": "seasons",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"seasons",
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
								"parts": []any{
									"seasons",
									"{year}",
									"{season}",
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
								"segments": []any{
									map[string]any{
										"lit": "top",
									},
									map[string]any{
										"lit": "reviews",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"top",
									"reviews",
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
						"short": "Favorite Anime",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "birthday",
						"short": "Birthday Date ISO8601",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "characters",
						"short": "Favorite Characters",
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
						"short": "User Gender",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "joined",
						"short": "Joined Date ISO8601",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_online",
						"short": "Last Online Date ISO8601",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "location",
						"short": "Location",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mal_id",
						"short": "MyAnimeList ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "manga",
						"short": "Favorite Manga",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pagination",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "people",
						"short": "Favorite People",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "statistics",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "url",
						"short": "MyAnimeList URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "username",
						"short": "MyAnimeList Username",
						"type": "`$STRING`",
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
								"segments": []any{
									map[string]any{
										"lit": "users",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"users",
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
								"parts": []any{
									"users",
									"{username}",
									"animelist",
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
								"parts": []any{
									"users",
									"{username}",
									"mangalist",
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
								"parts": []any{
									"users",
									"{username}",
									"reviews",
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
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"users",
									"userbyid",
									"{id}",
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
								"rename": map[string]any{
									"param": map[string]any{
										"username": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "users",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"users",
									"{id}",
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
								"parts": []any{
									"users",
									"{username}",
									"favorites",
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
								"parts": []any{
									"users",
									"{username}",
									"full",
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
						"short": "User About.",
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
								"select": map[string]any{
									"exist": []any{
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"users",
									"{username}",
									"about",
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
								"parts": []any{
									"users",
									"{username}",
									"clubs",
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
								"parts": []any{
									"users",
									"{username}",
									"friends",
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
						"short": "Date ISO8601",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entry",
						"short": "Parsed URL Data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "increment",
						"short": "Number of episodes/chapters watched/read",
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
								"parts": []any{
									"users",
									"{username}",
									"history",
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
						"short": "Anime Statistics",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "manga",
						"short": "Manga Statistics",
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
								"select": map[string]any{
									"exist": []any{
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"users",
									"{username}",
									"statistics",
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
						"short": "Last updated Anime",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "manga",
						"short": "Last updated Manga",
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
								"select": map[string]any{
									"exist": []any{
										"username",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
								"parts": []any{
									"users",
									"{username}",
									"userupdates",
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
								"segments": []any{
									map[string]any{
										"lit": "watch",
									},
									map[string]any{
										"lit": "episodes",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"watch",
									"episodes",
								},
							},
							map[string]any{
								"args": map[string]any{},
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
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"watch",
									"episodes",
									"popular",
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
								"segments": []any{
									map[string]any{
										"lit": "watch",
									},
									map[string]any{
										"lit": "promos",
									},
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
								"parts": []any{
									"watch",
									"promos",
								},
							},
							map[string]any{
								"args": map[string]any{},
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
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"watch",
									"promos",
									"popular",
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
