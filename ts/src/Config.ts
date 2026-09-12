
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'JikanRest',
        slug: "jikan-rest",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://api.jikan.moe/v4",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      anime: {
      },

      character: {
      },

      club: {
      },

      external: {
      },

      genre: {
      },

      magazine: {
      },

      manga: {
      },

      people_search: {
      },

      person: {
      },

      producer: {
      },

      random: {
      },

      recommendation: {
      },

      review: {
      },

      schedule: {
      },

      season: {
      },

      top: {
      },

      user: {
      },

      user_about: {
      },

      user_club: {
      },

      user_friend: {
      },

      user_history: {
      },

      user_statistic: {
      },

      user_update: {
      },

      watch_episode: {
      },

      watch_promo: {
      },

    }
  }


  entity = {
    "anime": {
      "fields": [
        {
          "name": "aired",
          "short": "Aired Date ISO8601",
          "type": "`$STRING`"
        },
        {
          "name": "airing",
          "short": "Airing boolean",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "approved",
          "short": "Whether the entry is pending approval on MAL or not",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "author_url",
          "short": "Author Profile URL",
          "type": "`$STRING`"
        },
        {
          "name": "author_username",
          "short": "Author MyAnimeList Username",
          "type": "`$STRING`"
        },
        {
          "name": "background",
          "short": "Background",
          "type": "`$STRING`"
        },
        {
          "name": "broadcast",
          "short": "Broadcast Details",
          "type": "`$OBJECT`"
        },
        {
          "name": "character",
          "short": "Character details",
          "type": "`$OBJECT`"
        },
        {
          "name": "comments",
          "short": "Comment count",
          "type": "`$INTEGER`"
        },
        {
          "name": "completed",
          "short": "Number of users who have completed the resource",
          "type": "`$INTEGER`"
        },
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "date",
          "short": "Post Date ISO8601",
          "type": "`$STRING`"
        },
        {
          "name": "demographics",
          "type": "`$ARRAY`"
        },
        {
          "name": "dropped",
          "short": "Number of users who have dropped the resource",
          "type": "`$INTEGER`"
        },
        {
          "name": "duration",
          "short": "Episode duration in seconds",
          "type": "`$INTEGER`"
        },
        {
          "name": "endings",
          "type": "`$ARRAY`"
        },
        {
          "name": "entry",
          "short": "Related entries",
          "type": "`$OBJECT`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 0
          }
        },
        {
          "name": "episodes",
          "short": "Episode count",
          "type": "`$INTEGER`"
        },
        {
          "name": "explicit_genres",
          "type": "`$ARRAY`"
        },
        {
          "name": "external",
          "type": "`$ARRAY`"
        },
        {
          "name": "favorites",
          "short": "Number of users who have favorited this entry",
          "type": "`$INTEGER`"
        },
        {
          "name": "filler",
          "short": "Filler episode",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "genres",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "type": "`$OBJECT`"
        },
        {
          "name": "last_comment",
          "short": "Last comment details",
          "type": "`$OBJECT`"
        },
        {
          "name": "licensors",
          "type": "`$ARRAY`"
        },
        {
          "name": "mal_id",
          "short": "MyAnimeList ID",
          "type": "`$INTEGER`"
        },
        {
          "name": "members",
          "short": "Number of users who have added this entry to their list",
          "type": "`$INTEGER`"
        },
        {
          "name": "moreinfo",
          "short": "Additional information on the entry",
          "type": "`$STRING`"
        },
        {
          "name": "music_videos",
          "type": "`$ARRAY`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "on_hold",
          "short": "Number of users who have put the resource on hold",
          "type": "`$INTEGER`"
        },
        {
          "name": "openings",
          "type": "`$ARRAY`"
        },
        {
          "name": "pagination",
          "type": "`$OBJECT`"
        },
        {
          "name": "person",
          "short": "Person details",
          "type": "`$OBJECT`"
        },
        {
          "name": "plan_to_watch",
          "short": "Number of users who have planned to watch the resource",
          "type": "`$INTEGER`"
        },
        {
          "name": "popularity",
          "short": "Popularity",
          "type": "`$INTEGER`"
        },
        {
          "name": "positions",
          "short": "Staff Positions",
          "type": "`$ARRAY`"
        },
        {
          "name": "producers",
          "type": "`$ARRAY`"
        },
        {
          "name": "promo",
          "type": "`$ARRAY`"
        },
        {
          "name": "rank",
          "short": "Ranking",
          "type": "`$INTEGER`"
        },
        {
          "name": "rating",
          "short": "Anime audience rating",
          "type": "`$STRING`"
        },
        {
          "name": "recap",
          "short": "Recap episode",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "relation",
          "short": "Relation type",
          "type": "`$STRING`"
        },
        {
          "name": "relations",
          "type": "`$ARRAY`"
        },
        {
          "name": "role",
          "short": "Character's Role",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "score",
          "short": "Score",
          "type": "`$NUMBER`"
        },
        {
          "name": "scored_by",
          "short": "Number of users",
          "type": "`$INTEGER`"
        },
        {
          "name": "scores",
          "type": "`$ARRAY`"
        },
        {
          "name": "season",
          "short": "Season",
          "type": "`$STRING`"
        },
        {
          "name": "source",
          "short": "Original Material/Source adapted from",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "short": "Airing status",
          "type": "`$STRING`"
        },
        {
          "name": "streaming",
          "type": "`$ARRAY`"
        },
        {
          "name": "studios",
          "type": "`$ARRAY`"
        },
        {
          "name": "synopsis",
          "short": "Episode Synopsis",
          "type": "`$STRING`"
        },
        {
          "name": "theme",
          "type": "`$OBJECT`"
        },
        {
          "name": "themes",
          "type": "`$ARRAY`"
        },
        {
          "deprecated": true,
          "name": "title",
          "short": "Title",
          "type": "`$STRING`"
        },
        {
          "deprecated": true,
          "name": "title_english",
          "short": "English Title",
          "type": "`$STRING`"
        },
        {
          "deprecated": true,
          "name": "title_japanese",
          "short": "Title Japanese",
          "type": "`$STRING`"
        },
        {
          "name": "title_romanji",
          "short": "title_romanji",
          "type": "`$STRING`"
        },
        {
          "deprecated": true,
          "name": "title_synonyms",
          "short": "Other Titles",
          "type": "`$ARRAY`"
        },
        {
          "name": "titles",
          "short": "All titles",
          "type": "`$ARRAY`"
        },
        {
          "name": "total",
          "short": "Total number of users who have the resource added to their lists",
          "type": "`$INTEGER`"
        },
        {
          "name": "trailer",
          "short": "Youtube Details",
          "type": "`$OBJECT`"
        },
        {
          "name": "type",
          "short": "Anime Type",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "MyAnimeList URL",
          "type": "`$STRING`"
        },
        {
          "name": "voice_actors",
          "type": "`$ARRAY`"
        },
        {
          "name": "watching",
          "short": "Number of users watching the resource",
          "type": "`$INTEGER`"
        },
        {
          "name": "year",
          "short": "Year",
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "anime",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "end_date",
                    "orig": "end_date",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "genre",
                    "orig": "genre",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "genres_exclude",
                    "orig": "genres_exclude",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "letter",
                    "orig": "letter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "max_score",
                    "orig": "max_score",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "min_score",
                    "orig": "min_score",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "producer",
                    "orig": "producer",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "rating",
                    "orig": "rating",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "score",
                    "orig": "score",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "sfw",
                    "orig": "sfw",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "start_date",
                    "orig": "start_date",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "unapproved",
                    "orig": "unapproved",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime",
              "segments": [
                {
                  "lit": "anime"
                }
              ],
              "select": {
                "exist": [
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
                  "unapproved"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "anime"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "rating",
                    "orig": "rating",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "sfw",
                    "orig": "sfw",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/top/anime",
              "segments": [
                {
                  "lit": "top"
                },
                {
                  "lit": "anime"
                }
              ],
              "select": {
                "exist": [
                  "filter",
                  "limit",
                  "page",
                  "rating",
                  "sfw",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "top",
                "anime"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "preliminary",
                    "orig": "preliminary",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "spoiler",
                    "orig": "spoiler",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/reviews",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "reviews"
                }
              ],
              "select": {
                "$action": "review",
                "exist": [
                  "id",
                  "page",
                  "preliminary",
                  "spoiler"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "anime",
                "{id}",
                "reviews"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/episodes",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "episodes"
                }
              ],
              "select": {
                "$action": "episode",
                "exist": [
                  "id",
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "anime",
                "{id}",
                "episodes"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/forum",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "forum"
                }
              ],
              "select": {
                "$action": "forum",
                "exist": [
                  "filter",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "anime",
                "{id}",
                "forum"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/news",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "news"
                }
              ],
              "select": {
                "$action": "new",
                "exist": [
                  "id",
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "anime",
                "{id}",
                "news"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/userupdates",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "userupdates"
                }
              ],
              "select": {
                "$action": "userupdate",
                "exist": [
                  "id",
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "anime",
                "{id}",
                "userupdates"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/videos/episodes",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "videos"
                },
                {
                  "lit": "episodes"
                }
              ],
              "select": {
                "$action": "video_episode",
                "exist": [
                  "id",
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "anime",
                "{id}",
                "videos",
                "episodes"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/characters",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "characters"
                }
              ],
              "select": {
                "$action": "character",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "anime",
                "{id}",
                "characters"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/external",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "external"
                }
              ],
              "select": {
                "$action": "external",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "anime",
                "{id}",
                "external"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/pictures",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "pictures"
                }
              ],
              "select": {
                "$action": "picture",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "anime",
                "{id}",
                "pictures"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/recommendations",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "recommendations"
                }
              ],
              "select": {
                "$action": "recommendation",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "anime",
                "{id}",
                "recommendations"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/relations",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "relations"
                }
              ],
              "select": {
                "$action": "relation",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "anime",
                "{id}",
                "relations"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/staff",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "staff"
                }
              ],
              "select": {
                "$action": "staff",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "anime",
                "{id}",
                "staff"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/streaming",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "streaming"
                }
              ],
              "select": {
                "$action": "streaming",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "anime",
                "{id}",
                "streaming"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "episode",
                    "orig": "episode",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/episodes/{episode}",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "episodes"
                },
                {
                  "var": "episode"
                }
              ],
              "select": {
                "exist": [
                  "episode",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "anime",
                "{id}",
                "episodes",
                "{episode}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "anime",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/full",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "full"
                }
              ],
              "select": {
                "$action": "full",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "anime",
                "{id}",
                "full"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/moreinfo",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "moreinfo"
                }
              ],
              "select": {
                "$action": "moreinfo",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "anime",
                "{id}",
                "moreinfo"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/statistics",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "statistics"
                }
              ],
              "select": {
                "$action": "statistic",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "anime",
                "{id}",
                "statistics"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/themes",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "themes"
                }
              ],
              "select": {
                "$action": "theme",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "anime",
                "{id}",
                "themes"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/anime/{id}/videos",
              "segments": [
                {
                  "lit": "anime"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "videos"
                }
              ],
              "select": {
                "$action": "video",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "anime",
                "{id}",
                "videos"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "episode"
          ]
        ]
      }
    },
    "character": {
      "fields": [
        {
          "name": "about",
          "short": "Biography",
          "type": "`$STRING`"
        },
        {
          "name": "anime",
          "type": "`$ARRAY`"
        },
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "favorites",
          "short": "Number of users who have favorited this entry",
          "type": "`$INTEGER`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "image_url",
          "short": "Default JPG Image Size URL",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "type": "`$OBJECT`"
        },
        {
          "name": "language",
          "short": "Character's Role",
          "type": "`$STRING`"
        },
        {
          "name": "large_image_url",
          "short": "Large JPG Image Size URL",
          "type": "`$STRING`"
        },
        {
          "name": "mal_id",
          "short": "MyAnimeList ID",
          "type": "`$INTEGER`"
        },
        {
          "name": "manga",
          "type": "`$ARRAY`"
        },
        {
          "name": "name",
          "short": "Name",
          "type": "`$STRING`"
        },
        {
          "name": "name_kanji",
          "short": "Name",
          "type": "`$STRING`"
        },
        {
          "name": "nicknames",
          "short": "Other Names",
          "type": "`$ARRAY`"
        },
        {
          "name": "pagination",
          "type": "`$OBJECT`"
        },
        {
          "name": "person",
          "type": "`$OBJECT`"
        },
        {
          "name": "role",
          "short": "Character's Role",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "MyAnimeList URL",
          "type": "`$STRING`"
        },
        {
          "name": "voices",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "character",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "letter",
                    "orig": "letter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/characters",
              "segments": [
                {
                  "lit": "characters"
                }
              ],
              "select": {
                "exist": [
                  "letter",
                  "limit",
                  "order_by",
                  "page",
                  "q",
                  "sort"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "characters"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/top/characters",
              "segments": [
                {
                  "lit": "top"
                },
                {
                  "lit": "characters"
                }
              ],
              "select": {
                "exist": [
                  "limit",
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "top",
                "characters"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/characters/{id}/anime",
              "segments": [
                {
                  "lit": "characters"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "anime"
                }
              ],
              "select": {
                "$action": "anime",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "characters",
                "{id}",
                "anime"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/characters/{id}/manga",
              "segments": [
                {
                  "lit": "characters"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "manga"
                }
              ],
              "select": {
                "$action": "manga",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "characters",
                "{id}",
                "manga"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/characters/{id}/pictures",
              "segments": [
                {
                  "lit": "characters"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "pictures"
                }
              ],
              "select": {
                "$action": "picture",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "characters",
                "{id}",
                "pictures"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/characters/{id}/voices",
              "segments": [
                {
                  "lit": "characters"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "voices"
                }
              ],
              "select": {
                "$action": "voice",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "characters",
                "{id}",
                "voices"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/characters/{id}",
              "segments": [
                {
                  "lit": "characters"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "characters",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/characters/{id}/full",
              "segments": [
                {
                  "lit": "characters"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "full"
                }
              ],
              "select": {
                "$action": "full",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "characters",
                "{id}",
                "full"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "club": {
      "fields": [
        {
          "name": "access",
          "short": "Club access",
          "type": "`$STRING`"
        },
        {
          "name": "anime",
          "type": "`$ARRAY`"
        },
        {
          "name": "category",
          "short": "Club Category",
          "type": "`$STRING`"
        },
        {
          "name": "characters",
          "type": "`$ARRAY`"
        },
        {
          "name": "created",
          "short": "Date Created ISO8601",
          "type": "`$STRING`"
        },
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "type": "`$OBJECT`"
        },
        {
          "name": "mal_id",
          "short": "MyAnimeList ID",
          "type": "`$INTEGER`"
        },
        {
          "name": "manga",
          "type": "`$ARRAY`"
        },
        {
          "name": "members",
          "short": "Number of club members",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "short": "Club name",
          "type": "`$STRING`"
        },
        {
          "name": "pagination",
          "type": "`$OBJECT`"
        },
        {
          "name": "url",
          "short": "Club URL",
          "type": "`$STRING`"
        },
        {
          "name": "username",
          "short": "User's username",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "club",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "category",
                    "orig": "category",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "letter",
                    "orig": "letter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/clubs",
              "segments": [
                {
                  "lit": "clubs"
                }
              ],
              "select": {
                "exist": [
                  "category",
                  "letter",
                  "limit",
                  "order_by",
                  "page",
                  "q",
                  "sort",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "clubs"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/clubs/{id}/members",
              "segments": [
                {
                  "lit": "clubs"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "members"
                }
              ],
              "select": {
                "$action": "member",
                "exist": [
                  "id",
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "clubs",
                "{id}",
                "members"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/clubs/{id}/staff",
              "segments": [
                {
                  "lit": "clubs"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "staff"
                }
              ],
              "select": {
                "$action": "staff",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "clubs",
                "{id}",
                "staff"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/clubs/{id}",
              "segments": [
                {
                  "lit": "clubs"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "clubs",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/clubs/{id}/relations",
              "segments": [
                {
                  "lit": "clubs"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "relations"
                }
              ],
              "select": {
                "$action": "relation",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "clubs",
                "{id}",
                "relations"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "external": {
      "fields": [
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "type": "`$STRING`"
        }
      ],
      "name": "external",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "username",
                    "orig": "username",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{username}/external",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "username"
                },
                {
                  "lit": "external"
                }
              ],
              "select": {
                "exist": [
                  "username"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "users",
                "{username}",
                "external"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "user"
          ]
        ]
      }
    },
    "genre": {
      "fields": [
        {
          "name": "count",
          "short": "Genre's entry count",
          "type": "`$INTEGER`"
        },
        {
          "name": "mal_id",
          "short": "MyAnimeList ID",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "short": "Genre Name",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "MyAnimeList URL",
          "type": "`$STRING`"
        }
      ],
      "name": "genre",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/genres/anime",
              "segments": [
                {
                  "lit": "genres"
                },
                {
                  "lit": "anime"
                }
              ],
              "select": {
                "$action": "anime",
                "exist": [
                  "filter"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "genres",
                "anime"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/genres/manga",
              "segments": [
                {
                  "lit": "genres"
                },
                {
                  "lit": "manga"
                }
              ],
              "select": {
                "$action": "manga",
                "exist": [
                  "filter"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "genres",
                "manga"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "magazine": {
      "fields": [
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "pagination",
          "type": "`$OBJECT`"
        }
      ],
      "name": "magazine",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "letter",
                    "orig": "letter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/magazines",
              "segments": [
                {
                  "lit": "magazines"
                }
              ],
              "select": {
                "exist": [
                  "letter",
                  "limit",
                  "order_by",
                  "page",
                  "q",
                  "sort"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "magazines"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "manga": {
      "fields": [
        {
          "name": "approved",
          "short": "Whether the entry is pending approval on MAL or not",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "author_url",
          "short": "Author Profile URL",
          "type": "`$STRING`"
        },
        {
          "name": "author_username",
          "short": "Author MyAnimeList Username",
          "type": "`$STRING`"
        },
        {
          "name": "authors",
          "type": "`$ARRAY`"
        },
        {
          "name": "background",
          "short": "Background",
          "type": "`$STRING`"
        },
        {
          "name": "chapters",
          "short": "Chapter count",
          "type": "`$INTEGER`"
        },
        {
          "name": "character",
          "type": "`$OBJECT`"
        },
        {
          "name": "comments",
          "short": "Comment count",
          "type": "`$INTEGER`"
        },
        {
          "name": "completed",
          "short": "Number of users who have completed the resource",
          "type": "`$INTEGER`"
        },
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "date",
          "short": "Post Date ISO8601",
          "type": "`$STRING`"
        },
        {
          "name": "demographics",
          "type": "`$ARRAY`"
        },
        {
          "name": "dropped",
          "short": "Number of users who have dropped the resource",
          "type": "`$INTEGER`"
        },
        {
          "name": "entry",
          "short": "Related entries",
          "type": "`$OBJECT`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 0
          }
        },
        {
          "name": "explicit_genres",
          "type": "`$ARRAY`"
        },
        {
          "name": "external",
          "type": "`$ARRAY`"
        },
        {
          "name": "favorites",
          "short": "Number of users who have favorited this entry",
          "type": "`$INTEGER`"
        },
        {
          "name": "genres",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "type": "`$OBJECT`"
        },
        {
          "name": "jpg",
          "short": "Available images in JPG",
          "type": "`$OBJECT`"
        },
        {
          "name": "last_comment",
          "short": "Last comment details",
          "type": "`$OBJECT`"
        },
        {
          "name": "mal_id",
          "short": "MyAnimeList ID",
          "type": "`$INTEGER`"
        },
        {
          "name": "members",
          "short": "Number of users who have added this entry to their list",
          "type": "`$INTEGER`"
        },
        {
          "name": "moreinfo",
          "short": "Additional information on the entry",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "on_hold",
          "short": "Number of users who have put the resource on hold",
          "type": "`$INTEGER`"
        },
        {
          "name": "pagination",
          "type": "`$OBJECT`"
        },
        {
          "name": "plan_to_read",
          "short": "Number of users who have planned to read the resource",
          "type": "`$INTEGER`"
        },
        {
          "name": "popularity",
          "short": "Popularity",
          "type": "`$INTEGER`"
        },
        {
          "name": "published",
          "short": "Date range",
          "type": "`$OBJECT`"
        },
        {
          "name": "publishing",
          "short": "Publishing boolean",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "rank",
          "short": "Ranking",
          "type": "`$INTEGER`"
        },
        {
          "name": "reading",
          "short": "Number of users reading the resource",
          "type": "`$INTEGER`"
        },
        {
          "name": "relation",
          "short": "Relation type",
          "type": "`$STRING`"
        },
        {
          "name": "relations",
          "type": "`$ARRAY`"
        },
        {
          "name": "role",
          "short": "Character's Role",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "score",
          "short": "Score",
          "type": "`$NUMBER`"
        },
        {
          "name": "scored_by",
          "short": "Number of users",
          "type": "`$INTEGER`"
        },
        {
          "name": "scores",
          "type": "`$ARRAY`"
        },
        {
          "name": "serializations",
          "type": "`$ARRAY`"
        },
        {
          "name": "status",
          "short": "Publishing status",
          "type": "`$STRING`"
        },
        {
          "name": "synopsis",
          "short": "Synopsis",
          "type": "`$STRING`"
        },
        {
          "name": "themes",
          "type": "`$ARRAY`"
        },
        {
          "deprecated": true,
          "name": "title",
          "short": "Title",
          "type": "`$STRING`"
        },
        {
          "deprecated": true,
          "name": "title_english",
          "short": "English Title",
          "type": "`$STRING`"
        },
        {
          "deprecated": true,
          "name": "title_japanese",
          "short": "Japanese Title",
          "type": "`$STRING`"
        },
        {
          "deprecated": true,
          "name": "title_synonyms",
          "short": "Other Titles",
          "type": "`$ARRAY`"
        },
        {
          "name": "titles",
          "short": "All Titles",
          "type": "`$ARRAY`"
        },
        {
          "name": "total",
          "short": "Total number of users who have the resource added to their lists",
          "type": "`$INTEGER`"
        },
        {
          "name": "type",
          "short": "Manga Type",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "MyAnimeList URL",
          "type": "`$STRING`"
        },
        {
          "name": "volumes",
          "short": "Volume count",
          "type": "`$INTEGER`"
        },
        {
          "name": "webp",
          "short": "Available images in WEBP",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "manga",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "end_date",
                    "orig": "end_date",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "genre",
                    "orig": "genre",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "genres_exclude",
                    "orig": "genres_exclude",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "letter",
                    "orig": "letter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "magazine",
                    "orig": "magazine",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "max_score",
                    "orig": "max_score",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "min_score",
                    "orig": "min_score",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "score",
                    "orig": "score",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "sfw",
                    "orig": "sfw",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "start_date",
                    "orig": "start_date",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "unapproved",
                    "orig": "unapproved",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/manga",
              "segments": [
                {
                  "lit": "manga"
                }
              ],
              "select": {
                "exist": [
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
                  "unapproved"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "manga"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/top/manga",
              "segments": [
                {
                  "lit": "top"
                },
                {
                  "lit": "manga"
                }
              ],
              "select": {
                "exist": [
                  "filter",
                  "limit",
                  "page",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "top",
                "manga"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "preliminary",
                    "orig": "preliminary",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "spoiler",
                    "orig": "spoiler",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/manga/{id}/reviews",
              "segments": [
                {
                  "lit": "manga"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "reviews"
                }
              ],
              "select": {
                "$action": "review",
                "exist": [
                  "id",
                  "page",
                  "preliminary",
                  "spoiler"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "manga",
                "{id}",
                "reviews"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/manga/{id}/forum",
              "segments": [
                {
                  "lit": "manga"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "forum"
                }
              ],
              "select": {
                "$action": "forum",
                "exist": [
                  "filter",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "manga",
                "{id}",
                "forum"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/manga/{id}/news",
              "segments": [
                {
                  "lit": "manga"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "news"
                }
              ],
              "select": {
                "$action": "new",
                "exist": [
                  "id",
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "manga",
                "{id}",
                "news"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/manga/{id}/userupdates",
              "segments": [
                {
                  "lit": "manga"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "userupdates"
                }
              ],
              "select": {
                "$action": "userupdate",
                "exist": [
                  "id",
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "manga",
                "{id}",
                "userupdates"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/manga/{id}/characters",
              "segments": [
                {
                  "lit": "manga"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "characters"
                }
              ],
              "select": {
                "$action": "character",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "manga",
                "{id}",
                "characters"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/manga/{id}/external",
              "segments": [
                {
                  "lit": "manga"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "external"
                }
              ],
              "select": {
                "$action": "external",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "manga",
                "{id}",
                "external"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/manga/{id}/pictures",
              "segments": [
                {
                  "lit": "manga"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "pictures"
                }
              ],
              "select": {
                "$action": "picture",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "manga",
                "{id}",
                "pictures"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/manga/{id}/recommendations",
              "segments": [
                {
                  "lit": "manga"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "recommendations"
                }
              ],
              "select": {
                "$action": "recommendation",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "manga",
                "{id}",
                "recommendations"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/manga/{id}/relations",
              "segments": [
                {
                  "lit": "manga"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "relations"
                }
              ],
              "select": {
                "$action": "relation",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "manga",
                "{id}",
                "relations"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/manga/{id}",
              "segments": [
                {
                  "lit": "manga"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "manga",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/manga/{id}/full",
              "segments": [
                {
                  "lit": "manga"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "full"
                }
              ],
              "select": {
                "$action": "full",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "manga",
                "{id}",
                "full"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/manga/{id}/moreinfo",
              "segments": [
                {
                  "lit": "manga"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "moreinfo"
                }
              ],
              "select": {
                "$action": "moreinfo",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "manga",
                "{id}",
                "moreinfo"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/manga/{id}/statistics",
              "segments": [
                {
                  "lit": "manga"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "statistics"
                }
              ],
              "select": {
                "$action": "statistic",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "manga",
                "{id}",
                "statistics"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "people_search": {
      "fields": [
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "pagination",
          "type": "`$OBJECT`"
        }
      ],
      "name": "people_search",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/top/people",
              "segments": [
                {
                  "lit": "top"
                },
                {
                  "lit": "people"
                }
              ],
              "select": {
                "exist": [
                  "limit",
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "top",
                "people"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "person": {
      "fields": [
        {
          "name": "about",
          "short": "Biography",
          "type": "`$STRING`"
        },
        {
          "name": "alternate_names",
          "short": "Other Names",
          "type": "`$ARRAY`"
        },
        {
          "name": "anime",
          "type": "`$ARRAY`"
        },
        {
          "name": "birthday",
          "short": "Birthday Date ISO8601",
          "type": "`$STRING`"
        },
        {
          "name": "character",
          "type": "`$OBJECT`"
        },
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "family_name",
          "short": "Family Name",
          "type": "`$STRING`"
        },
        {
          "name": "favorites",
          "short": "Number of users who have favorited this entry",
          "type": "`$INTEGER`"
        },
        {
          "name": "given_name",
          "short": "Given Name",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "type": "`$OBJECT`"
        },
        {
          "name": "jpg",
          "short": "Available images in JPG",
          "type": "`$OBJECT`"
        },
        {
          "name": "mal_id",
          "short": "MyAnimeList ID",
          "type": "`$INTEGER`"
        },
        {
          "name": "manga",
          "type": "`$ARRAY`"
        },
        {
          "name": "name",
          "short": "Name",
          "type": "`$STRING`"
        },
        {
          "name": "pagination",
          "type": "`$OBJECT`"
        },
        {
          "name": "position",
          "short": "Person's position",
          "type": "`$STRING`"
        },
        {
          "name": "role",
          "short": "Person's Character's role in the anime",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "MyAnimeList URL",
          "type": "`$STRING`"
        },
        {
          "name": "voices",
          "type": "`$ARRAY`"
        },
        {
          "name": "website_url",
          "short": "Person's website URL",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "person",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "letter",
                    "orig": "letter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/people",
              "segments": [
                {
                  "lit": "people"
                }
              ],
              "select": {
                "exist": [
                  "letter",
                  "limit",
                  "order_by",
                  "page",
                  "q",
                  "sort"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "people"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/people/{id}/anime",
              "segments": [
                {
                  "lit": "people"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "anime"
                }
              ],
              "select": {
                "$action": "anime",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "people",
                "{id}",
                "anime"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/people/{id}/manga",
              "segments": [
                {
                  "lit": "people"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "manga"
                }
              ],
              "select": {
                "$action": "manga",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "people",
                "{id}",
                "manga"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/people/{id}/pictures",
              "segments": [
                {
                  "lit": "people"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "pictures"
                }
              ],
              "select": {
                "$action": "picture",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "people",
                "{id}",
                "pictures"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/people/{id}/voices",
              "segments": [
                {
                  "lit": "people"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "voices"
                }
              ],
              "select": {
                "$action": "voice",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "people",
                "{id}",
                "voices"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/people/{id}",
              "segments": [
                {
                  "lit": "people"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "people",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/people/{id}/full",
              "segments": [
                {
                  "lit": "people"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "full"
                }
              ],
              "select": {
                "$action": "full",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "people",
                "{id}",
                "full"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "producer": {
      "fields": [
        {
          "name": "about",
          "short": "About the Producer",
          "type": "`$STRING`"
        },
        {
          "name": "count",
          "short": "Producers's anime count",
          "type": "`$INTEGER`"
        },
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "established",
          "short": "Established Date ISO8601",
          "type": "`$STRING`"
        },
        {
          "name": "external",
          "type": "`$ARRAY`"
        },
        {
          "name": "favorites",
          "short": "Producers's member favorites count",
          "type": "`$INTEGER`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "type": "`$OBJECT`"
        },
        {
          "name": "mal_id",
          "short": "MyAnimeList ID",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "pagination",
          "type": "`$OBJECT`"
        },
        {
          "name": "titles",
          "short": "All titles",
          "type": "`$ARRAY`"
        },
        {
          "name": "url",
          "short": "MyAnimeList URL",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "producer",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "letter",
                    "orig": "letter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/producers",
              "segments": [
                {
                  "lit": "producers"
                }
              ],
              "select": {
                "exist": [
                  "letter",
                  "limit",
                  "order_by",
                  "page",
                  "q",
                  "sort"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "producers"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/producers/{id}/external",
              "segments": [
                {
                  "lit": "producers"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "external"
                }
              ],
              "select": {
                "$action": "external",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "producers",
                "{id}",
                "external"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/producers/{id}",
              "segments": [
                {
                  "lit": "producers"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "producers",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/producers/{id}/full",
              "segments": [
                {
                  "lit": "producers"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "full"
                }
              ],
              "select": {
                "$action": "full",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "producers",
                "{id}",
                "full"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "random": {
      "fields": [
        {
          "name": "about",
          "short": "Biography",
          "type": "`$STRING`"
        },
        {
          "name": "aired",
          "short": "Date range",
          "type": "`$OBJECT`"
        },
        {
          "name": "airing",
          "short": "Airing boolean",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "alternate_names",
          "short": "Other Names",
          "type": "`$ARRAY`"
        },
        {
          "name": "approved",
          "short": "Whether the entry is pending approval on MAL or not",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "authors",
          "type": "`$ARRAY`"
        },
        {
          "name": "background",
          "short": "Background",
          "type": "`$STRING`"
        },
        {
          "name": "birthday",
          "short": "Birthday Date ISO8601",
          "type": "`$STRING`"
        },
        {
          "name": "broadcast",
          "short": "Broadcast Details",
          "type": "`$OBJECT`"
        },
        {
          "name": "chapters",
          "short": "Chapter count",
          "type": "`$INTEGER`"
        },
        {
          "name": "demographics",
          "type": "`$ARRAY`"
        },
        {
          "name": "duration",
          "short": "Parsed raw duration",
          "type": "`$STRING`"
        },
        {
          "name": "episodes",
          "short": "Episode count",
          "type": "`$INTEGER`"
        },
        {
          "name": "explicit_genres",
          "type": "`$ARRAY`"
        },
        {
          "name": "family_name",
          "short": "Family Name",
          "type": "`$STRING`"
        },
        {
          "name": "favorites",
          "short": "Number of users who have favorited this entry",
          "type": "`$INTEGER`"
        },
        {
          "name": "gender",
          "short": "User Gender",
          "type": "`$STRING`"
        },
        {
          "name": "genres",
          "type": "`$ARRAY`"
        },
        {
          "name": "given_name",
          "short": "Given Name",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "type": "`$OBJECT`"
        },
        {
          "name": "joined",
          "short": "Joined Date ISO8601",
          "type": "`$STRING`"
        },
        {
          "name": "last_online",
          "short": "Last Online Date ISO8601",
          "type": "`$STRING`"
        },
        {
          "name": "licensors",
          "type": "`$ARRAY`"
        },
        {
          "name": "location",
          "short": "Location",
          "type": "`$STRING`"
        },
        {
          "name": "mal_id",
          "short": "MyAnimeList ID",
          "type": "`$INTEGER`"
        },
        {
          "name": "members",
          "short": "Number of users who have added this entry to their list",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "short": "Name",
          "type": "`$STRING`"
        },
        {
          "name": "name_kanji",
          "short": "Name",
          "type": "`$STRING`"
        },
        {
          "name": "nicknames",
          "short": "Other Names",
          "type": "`$ARRAY`"
        },
        {
          "name": "popularity",
          "short": "Popularity",
          "type": "`$INTEGER`"
        },
        {
          "name": "producers",
          "type": "`$ARRAY`"
        },
        {
          "name": "published",
          "short": "Date range",
          "type": "`$OBJECT`"
        },
        {
          "name": "publishing",
          "short": "Publishing boolean",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "rank",
          "short": "Ranking",
          "type": "`$INTEGER`"
        },
        {
          "name": "rating",
          "short": "Anime audience rating",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "score",
          "short": "Score",
          "type": "`$NUMBER`"
        },
        {
          "name": "scored_by",
          "short": "Number of users",
          "type": "`$INTEGER`"
        },
        {
          "name": "season",
          "short": "Season",
          "type": "`$STRING`"
        },
        {
          "name": "serializations",
          "type": "`$ARRAY`"
        },
        {
          "name": "source",
          "short": "Original Material/Source adapted from",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "short": "Airing status",
          "type": "`$STRING`"
        },
        {
          "name": "studios",
          "type": "`$ARRAY`"
        },
        {
          "name": "synopsis",
          "short": "Synopsis",
          "type": "`$STRING`"
        },
        {
          "name": "themes",
          "type": "`$ARRAY`"
        },
        {
          "deprecated": true,
          "name": "title",
          "short": "Title",
          "type": "`$STRING`"
        },
        {
          "deprecated": true,
          "name": "title_english",
          "short": "English Title",
          "type": "`$STRING`"
        },
        {
          "deprecated": true,
          "name": "title_japanese",
          "short": "Japanese Title",
          "type": "`$STRING`"
        },
        {
          "deprecated": true,
          "name": "title_synonyms",
          "short": "Other Titles",
          "type": "`$ARRAY`"
        },
        {
          "name": "titles",
          "short": "All titles",
          "type": "`$ARRAY`"
        },
        {
          "name": "trailer",
          "short": "Youtube Details",
          "type": "`$OBJECT`"
        },
        {
          "name": "type",
          "short": "Anime Type",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "MyAnimeList URL",
          "type": "`$STRING`"
        },
        {
          "name": "username",
          "short": "MyAnimeList Username",
          "type": "`$STRING`"
        },
        {
          "name": "volumes",
          "short": "Volume count",
          "type": "`$INTEGER`"
        },
        {
          "name": "website_url",
          "short": "Person's website URL",
          "type": "`$STRING`"
        },
        {
          "name": "year",
          "short": "Year",
          "type": "`$INTEGER`"
        }
      ],
      "name": "random",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/random/anime",
              "segments": [
                {
                  "lit": "random"
                },
                {
                  "lit": "anime"
                }
              ],
              "select": {
                "$action": "anime"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "random",
                "anime"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/random/characters",
              "segments": [
                {
                  "lit": "random"
                },
                {
                  "lit": "characters"
                }
              ],
              "select": {
                "$action": "character"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "random",
                "characters"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/random/manga",
              "segments": [
                {
                  "lit": "random"
                },
                {
                  "lit": "manga"
                }
              ],
              "select": {
                "$action": "manga"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "random",
                "manga"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/random/people",
              "segments": [
                {
                  "lit": "random"
                },
                {
                  "lit": "people"
                }
              ],
              "select": {
                "$action": "person"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "random",
                "people"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/random/users",
              "segments": [
                {
                  "lit": "random"
                },
                {
                  "lit": "users"
                }
              ],
              "select": {
                "$action": "user"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "random",
                "users"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "recommendation": {
      "fields": [
        {
          "name": "data",
          "type": "`$ARRAY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 4
          }
        },
        {
          "name": "pagination",
          "type": "`$OBJECT`"
        }
      ],
      "name": "recommendation",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "username",
                    "orig": "username",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{username}/recommendations",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "username"
                },
                {
                  "lit": "recommendations"
                }
              ],
              "select": {
                "exist": [
                  "page",
                  "username"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "users",
                "{username}",
                "recommendations"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/recommendations/anime",
              "segments": [
                {
                  "lit": "recommendations"
                },
                {
                  "lit": "anime"
                }
              ],
              "select": {
                "$action": "anime",
                "exist": [
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "recommendations",
                "anime"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/recommendations/manga",
              "segments": [
                {
                  "lit": "recommendations"
                },
                {
                  "lit": "manga"
                }
              ],
              "select": {
                "$action": "manga",
                "exist": [
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "recommendations",
                "manga"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "user"
          ]
        ]
      }
    },
    "review": {
      "fields": [],
      "name": "review",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "preliminary",
                    "orig": "preliminary",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "spoiler",
                    "orig": "spoiler",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/reviews/anime",
              "segments": [
                {
                  "lit": "reviews"
                },
                {
                  "lit": "anime"
                }
              ],
              "select": {
                "$action": "anime",
                "exist": [
                  "page",
                  "preliminary",
                  "spoiler"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "reviews",
                "anime"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "preliminary",
                    "orig": "preliminary",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "spoiler",
                    "orig": "spoiler",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/reviews/manga",
              "segments": [
                {
                  "lit": "reviews"
                },
                {
                  "lit": "manga"
                }
              ],
              "select": {
                "$action": "manga",
                "exist": [
                  "page",
                  "preliminary",
                  "spoiler"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "reviews",
                "manga"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "schedule": {
      "fields": [
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "pagination",
          "type": "`$OBJECT`"
        }
      ],
      "name": "schedule",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "kid",
                    "orig": "kid",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "sfw",
                    "orig": "sfw",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "unapproved",
                    "orig": "unapproved",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/schedules",
              "segments": [
                {
                  "lit": "schedules"
                }
              ],
              "select": {
                "exist": [
                  "filter",
                  "kid",
                  "limit",
                  "page",
                  "sfw",
                  "unapproved"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "schedules"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "season": {
      "fields": [
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "pagination",
          "type": "`$OBJECT`"
        },
        {
          "name": "seasons",
          "short": "List of available seasons",
          "type": "`$ARRAY`"
        },
        {
          "name": "year",
          "short": "Year",
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "from": {
          "year": "year"
        },
        "name": "id",
        "parts": [
          "year",
          "season"
        ],
        "sep": "/"
      },
      "name": "season",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "continuing",
                    "orig": "continuing",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "sfw",
                    "orig": "sfw",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "unapproved",
                    "orig": "unapproved",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/seasons/now",
              "segments": [
                {
                  "lit": "seasons"
                },
                {
                  "lit": "now"
                }
              ],
              "select": {
                "$action": "now",
                "exist": [
                  "continuing",
                  "filter",
                  "limit",
                  "page",
                  "sfw",
                  "unapproved"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "seasons",
                "now"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "continuing",
                    "orig": "continuing",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "sfw",
                    "orig": "sfw",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "unapproved",
                    "orig": "unapproved",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/seasons/upcoming",
              "segments": [
                {
                  "lit": "seasons"
                },
                {
                  "lit": "upcoming"
                }
              ],
              "select": {
                "$action": "upcoming",
                "exist": [
                  "continuing",
                  "filter",
                  "limit",
                  "page",
                  "sfw",
                  "unapproved"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "seasons",
                "upcoming"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/seasons",
              "segments": [
                {
                  "lit": "seasons"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "seasons"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "season",
                    "orig": "season",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "year",
                    "orig": "year",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "continuing",
                    "orig": "continuing",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "sfw",
                    "orig": "sfw",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "unapproved",
                    "orig": "unapproved",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/seasons/{year}/{season}",
              "segments": [
                {
                  "lit": "seasons"
                },
                {
                  "var": "year"
                },
                {
                  "var": "season"
                }
              ],
              "select": {
                "exist": [
                  "continuing",
                  "filter",
                  "limit",
                  "page",
                  "season",
                  "sfw",
                  "unapproved",
                  "year"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "seasons",
                "{year}",
                "{season}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "season"
          ]
        ]
      }
    },
    "top": {
      "fields": [
        {
          "name": "data",
          "type": "`$ARRAY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 1
          }
        },
        {
          "name": "pagination",
          "type": "`$OBJECT`"
        }
      ],
      "name": "top",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "preliminary",
                    "orig": "preliminary",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "spoiler",
                    "orig": "spoiler",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/top/reviews",
              "segments": [
                {
                  "lit": "top"
                },
                {
                  "lit": "reviews"
                }
              ],
              "select": {
                "$action": "review",
                "exist": [
                  "page",
                  "preliminary",
                  "spoiler",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "top",
                "reviews"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "user": {
      "fields": [
        {
          "name": "anime",
          "short": "Favorite Anime",
          "type": "`$ARRAY`"
        },
        {
          "name": "birthday",
          "short": "Birthday Date ISO8601",
          "type": "`$STRING`"
        },
        {
          "name": "characters",
          "short": "Favorite Characters",
          "type": "`$ARRAY`"
        },
        {
          "name": "data",
          "type": "`$ARRAY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 1
          }
        },
        {
          "name": "external",
          "type": "`$ARRAY`"
        },
        {
          "name": "gender",
          "short": "User Gender",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "type": "`$OBJECT`"
        },
        {
          "name": "joined",
          "short": "Joined Date ISO8601",
          "type": "`$STRING`"
        },
        {
          "name": "last_online",
          "short": "Last Online Date ISO8601",
          "type": "`$STRING`"
        },
        {
          "name": "location",
          "short": "Location",
          "type": "`$STRING`"
        },
        {
          "name": "mal_id",
          "short": "MyAnimeList ID",
          "type": "`$INTEGER`"
        },
        {
          "name": "manga",
          "short": "Favorite Manga",
          "type": "`$ARRAY`"
        },
        {
          "name": "pagination",
          "type": "`$OBJECT`"
        },
        {
          "name": "people",
          "short": "Favorite People",
          "type": "`$ARRAY`"
        },
        {
          "name": "statistics",
          "type": "`$OBJECT`"
        },
        {
          "name": "url",
          "short": "MyAnimeList URL",
          "type": "`$STRING`"
        },
        {
          "name": "username",
          "short": "MyAnimeList Username",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "user",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "gender",
                    "orig": "gender",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "location",
                    "orig": "location",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "max_age",
                    "orig": "max_age",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "min_age",
                    "orig": "min_age",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users",
              "segments": [
                {
                  "lit": "users"
                }
              ],
              "select": {
                "exist": [
                  "gender",
                  "limit",
                  "location",
                  "max_age",
                  "min_age",
                  "page",
                  "q"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "users"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "username",
                    "orig": "username",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{username}/animelist",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "username"
                },
                {
                  "lit": "animelist"
                }
              ],
              "select": {
                "$action": "animelist",
                "exist": [
                  "status",
                  "username"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "users",
                "{username}",
                "animelist"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "username",
                    "orig": "username",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{username}/mangalist",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "username"
                },
                {
                  "lit": "mangalist"
                }
              ],
              "select": {
                "$action": "mangalist",
                "exist": [
                  "status",
                  "username"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "users",
                "{username}",
                "mangalist"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "username",
                    "orig": "username",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{username}/reviews",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "username"
                },
                {
                  "lit": "reviews"
                }
              ],
              "select": {
                "$action": "review",
                "exist": [
                  "page",
                  "username"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "users",
                "{username}",
                "reviews"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/userbyid/{id}",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "lit": "userbyid"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "users",
                "userbyid",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "username",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{username}",
              "rename": {
                "param": {
                  "username": "id"
                }
              },
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "users",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "username",
                    "orig": "username",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{username}/favorites",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "username"
                },
                {
                  "lit": "favorites"
                }
              ],
              "select": {
                "$action": "favorite",
                "exist": [
                  "username"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "users",
                "{username}",
                "favorites"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "username",
                    "orig": "username",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{username}/full",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "username"
                },
                {
                  "lit": "full"
                }
              ],
              "select": {
                "$action": "full",
                "exist": [
                  "username"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "users",
                "{username}",
                "full"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "user"
          ]
        ]
      }
    },
    "user_about": {
      "fields": [
        {
          "name": "about",
          "short": "User About.",
          "type": "`$STRING`"
        }
      ],
      "name": "user_about",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "username",
                    "orig": "username",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{username}/about",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "username"
                },
                {
                  "lit": "about"
                }
              ],
              "select": {
                "exist": [
                  "username"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "users",
                "{username}",
                "about"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "user"
          ]
        ]
      }
    },
    "user_club": {
      "fields": [
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "pagination",
          "type": "`$OBJECT`"
        }
      ],
      "name": "user_club",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "username",
                    "orig": "username",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{username}/clubs",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "username"
                },
                {
                  "lit": "clubs"
                }
              ],
              "select": {
                "exist": [
                  "page",
                  "username"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "users",
                "{username}",
                "clubs"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "user"
          ]
        ]
      }
    },
    "user_friend": {
      "fields": [
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "pagination",
          "type": "`$OBJECT`"
        }
      ],
      "name": "user_friend",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "username",
                    "orig": "username",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{username}/friends",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "username"
                },
                {
                  "lit": "friends"
                }
              ],
              "select": {
                "exist": [
                  "page",
                  "username"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "users",
                "{username}",
                "friends"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "user"
          ]
        ]
      }
    },
    "user_history": {
      "fields": [
        {
          "name": "date",
          "short": "Date ISO8601",
          "type": "`$STRING`"
        },
        {
          "name": "entry",
          "short": "Parsed URL Data",
          "type": "`$OBJECT`"
        },
        {
          "name": "increment",
          "short": "Number of episodes/chapters watched/read",
          "type": "`$INTEGER`"
        }
      ],
      "name": "user_history",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "username",
                    "orig": "username",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{username}/history",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "username"
                },
                {
                  "lit": "history"
                }
              ],
              "select": {
                "exist": [
                  "type",
                  "username"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "users",
                "{username}",
                "history"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "user"
          ]
        ]
      }
    },
    "user_statistic": {
      "fields": [
        {
          "name": "anime",
          "short": "Anime Statistics",
          "type": "`$OBJECT`"
        },
        {
          "name": "manga",
          "short": "Manga Statistics",
          "type": "`$OBJECT`"
        }
      ],
      "name": "user_statistic",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "username",
                    "orig": "username",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{username}/statistics",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "username"
                },
                {
                  "lit": "statistics"
                }
              ],
              "select": {
                "exist": [
                  "username"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "users",
                "{username}",
                "statistics"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "user"
          ]
        ]
      }
    },
    "user_update": {
      "fields": [
        {
          "name": "anime",
          "short": "Last updated Anime",
          "type": "`$ARRAY`"
        },
        {
          "name": "manga",
          "short": "Last updated Manga",
          "type": "`$ARRAY`"
        }
      ],
      "name": "user_update",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "username",
                    "orig": "username",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/users/{username}/userupdates",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "username"
                },
                {
                  "lit": "userupdates"
                }
              ],
              "select": {
                "exist": [
                  "username"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "users",
                "{username}",
                "userupdates"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "user"
          ]
        ]
      }
    },
    "watch_episode": {
      "fields": [
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "pagination",
          "type": "`$OBJECT`"
        }
      ],
      "name": "watch_episode",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/watch/episodes",
              "segments": [
                {
                  "lit": "watch"
                },
                {
                  "lit": "episodes"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "watch",
                "episodes"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/watch/episodes/popular",
              "segments": [
                {
                  "lit": "watch"
                },
                {
                  "lit": "episodes"
                },
                {
                  "lit": "popular"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "watch",
                "episodes",
                "popular"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "watch_promo": {
      "fields": [
        {
          "name": "data",
          "type": "`$ARRAY`"
        },
        {
          "name": "pagination",
          "type": "`$OBJECT`"
        }
      ],
      "name": "watch_promo",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/watch/promos",
              "segments": [
                {
                  "lit": "watch"
                },
                {
                  "lit": "promos"
                }
              ],
              "select": {
                "exist": [
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "watch",
                "promos"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/watch/promos/popular",
              "segments": [
                {
                  "lit": "watch"
                },
                {
                  "lit": "promos"
                },
                {
                  "lit": "popular"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "watch",
                "promos",
                "popular"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

