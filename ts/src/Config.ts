
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
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
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
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
  
        history: {
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
          "title": "Aired",
          "type": "`$STRING`",
          "short": "Aired Date ISO8601"
        },
        {
          "name": "airing",
          "title": "Airing",
          "type": "`$BOOLEAN`",
          "short": "Airing boolean"
        },
        {
          "name": "approved",
          "title": "Approved",
          "type": "`$BOOLEAN`",
          "short": "Whether the entry is pending approval on MAL or not"
        },
        {
          "name": "background",
          "title": "Background",
          "type": "`$STRING`",
          "short": "Background"
        },
        {
          "name": "broadcast",
          "title": "Broadcast",
          "type": "`$OBJECT`",
          "short": "Broadcast Details"
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$ARRAY`"
        },
        {
          "name": "demographics",
          "title": "Demographics",
          "type": "`$ARRAY`"
        },
        {
          "name": "duration",
          "title": "Duration",
          "type": "`$INTEGER`",
          "short": "Episode duration in seconds"
        },
        {
          "name": "episodes",
          "title": "Episodes",
          "type": "`$INTEGER`",
          "short": "Episode count"
        },
        {
          "name": "explicit_genres",
          "title": "Explicit Genres",
          "type": "`$ARRAY`"
        },
        {
          "name": "favorites",
          "title": "Favorites",
          "type": "`$INTEGER`",
          "short": "Number of users who have favorited this entry"
        },
        {
          "name": "filler",
          "title": "Filler",
          "type": "`$BOOLEAN`",
          "short": "Filler episode"
        },
        {
          "name": "genres",
          "title": "Genres",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "title": "Images",
          "type": "`$OBJECT`"
        },
        {
          "name": "licensors",
          "title": "Licensors",
          "type": "`$ARRAY`"
        },
        {
          "name": "mal_id",
          "title": "Mal Id",
          "type": "`$INTEGER`",
          "short": "MyAnimeList ID"
        },
        {
          "name": "members",
          "title": "Members",
          "type": "`$INTEGER`",
          "short": "Number of users who have added this entry to their list"
        },
        {
          "name": "pagination",
          "title": "Pagination",
          "type": "`$OBJECT`"
        },
        {
          "name": "popularity",
          "title": "Popularity",
          "type": "`$INTEGER`",
          "short": "Popularity"
        },
        {
          "name": "producers",
          "title": "Producers",
          "type": "`$ARRAY`"
        },
        {
          "name": "rank",
          "title": "Rank",
          "type": "`$INTEGER`",
          "short": "Ranking"
        },
        {
          "name": "rating",
          "title": "Rating",
          "type": "`$STRING`",
          "short": "Anime audience rating"
        },
        {
          "name": "recap",
          "title": "Recap",
          "type": "`$BOOLEAN`",
          "short": "Recap episode"
        },
        {
          "name": "score",
          "title": "Score",
          "type": "`$NUMBER`",
          "short": "Score",
          "format": "float"
        },
        {
          "name": "scored_by",
          "title": "Scored By",
          "type": "`$INTEGER`",
          "short": "Number of users"
        },
        {
          "name": "season",
          "title": "Season",
          "type": "`$STRING`",
          "short": "Season"
        },
        {
          "name": "source",
          "title": "Source",
          "type": "`$STRING`",
          "short": "Original Material/Source adapted from"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "Airing status"
        },
        {
          "name": "studios",
          "title": "Studios",
          "type": "`$ARRAY`"
        },
        {
          "name": "synopsis",
          "title": "Synopsis",
          "type": "`$STRING`",
          "short": "Episode Synopsis"
        },
        {
          "name": "themes",
          "title": "Themes",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "title": "Title",
          "type": "`$STRING`",
          "short": "Title",
          "deprecated": true
        },
        {
          "name": "title_english",
          "title": "Title English",
          "type": "`$STRING`",
          "short": "English Title",
          "deprecated": true
        },
        {
          "name": "title_japanese",
          "title": "Title Japanese",
          "type": "`$STRING`",
          "short": "Title Japanese",
          "deprecated": true
        },
        {
          "name": "title_romanji",
          "title": "Title Romanji",
          "type": "`$STRING`",
          "short": "title_romanji"
        },
        {
          "name": "title_synonyms",
          "title": "Title Synonyms",
          "type": "`$ARRAY`",
          "short": "Other Titles",
          "deprecated": true
        },
        {
          "name": "titles",
          "title": "Titles",
          "type": "`$ARRAY`",
          "short": "All titles"
        },
        {
          "name": "trailer",
          "title": "Trailer",
          "type": "`$OBJECT`",
          "short": "Youtube Details"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "short": "Anime Type"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "MyAnimeList URL"
        },
        {
          "name": "year",
          "title": "Year",
          "type": "`$INTEGER`",
          "short": "Year"
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
              "kind": "http",
              "method": "GET",
              "orig": "/anime",
              "segments": [
                {
                  "lit": "anime"
                }
              ],
              "parts": [
                "anime"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "end_date",
                    "orig": "end_date",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "genre",
                    "orig": "genre",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "genres_exclude",
                    "orig": "genres_exclude",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "letter",
                    "orig": "letter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "max_score",
                    "orig": "max_score",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "min_score",
                    "orig": "min_score",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "producer",
                    "orig": "producer",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "rating",
                    "orig": "rating",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "score",
                    "orig": "score",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "sfw",
                    "orig": "sfw",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "start_date",
                    "orig": "start_date",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "unapproved",
                    "orig": "unapproved",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
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
              }
            },
            {
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
              "parts": [
                "top",
                "anime"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "rating",
                    "orig": "rating",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sfw",
                    "orig": "sfw",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "filter",
                  "limit",
                  "page",
                  "rating",
                  "sfw",
                  "type"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}",
                "reviews"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "preliminary",
                    "orig": "preliminary",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "spoiler",
                    "orig": "spoiler",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "review",
                "exist": [
                  "id",
                  "page",
                  "preliminary",
                  "spoiler"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}",
                "episodes"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "episode",
                "exist": [
                  "id",
                  "page"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}",
                "forum"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "forum",
                "exist": [
                  "filter",
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}",
                "news"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "new",
                "exist": [
                  "id",
                  "page"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}",
                "userupdates"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "userupdate",
                "exist": [
                  "id",
                  "page"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}",
                "videos",
                "episodes"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "video_episode",
                "exist": [
                  "id",
                  "page"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}",
                "characters"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "character",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}",
                "external"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "external",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}",
                "pictures"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "picture",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}",
                "recommendations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "recommendation",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}",
                "relations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "relation",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}",
                "staff"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "staff",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}",
                "streaming"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "streaming",
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
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
              "parts": [
                "anime",
                "{id}",
                "episodes",
                "{episode}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "episode",
                    "orig": "episode",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "episode",
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}",
                "full"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "full",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}",
                "moreinfo"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "moreinfo",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}",
                "statistics"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "statistic",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}",
                "themes"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "theme",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "anime",
                "{id}",
                "videos"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "video",
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "character": {
      "fields": [
        {
          "name": "about",
          "title": "About",
          "type": "`$STRING`",
          "short": "Biography"
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$ARRAY`"
        },
        {
          "name": "favorites",
          "title": "Favorites",
          "type": "`$INTEGER`",
          "short": "Number of users who have favorited this entry"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "title": "Images",
          "type": "`$OBJECT`"
        },
        {
          "name": "mal_id",
          "title": "Mal Id",
          "type": "`$INTEGER`",
          "short": "MyAnimeList ID"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name"
        },
        {
          "name": "name_kanji",
          "title": "Name Kanji",
          "type": "`$STRING`",
          "short": "Name"
        },
        {
          "name": "nicknames",
          "title": "Nicknames",
          "type": "`$ARRAY`",
          "short": "Other Names"
        },
        {
          "name": "pagination",
          "title": "Pagination",
          "type": "`$OBJECT`"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "MyAnimeList URL"
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
              "kind": "http",
              "method": "GET",
              "orig": "/characters",
              "segments": [
                {
                  "lit": "characters"
                }
              ],
              "parts": [
                "characters"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "letter",
                    "orig": "letter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "letter",
                  "limit",
                  "order_by",
                  "page",
                  "q",
                  "sort"
                ]
              }
            },
            {
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
              "parts": [
                "top",
                "characters"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "limit",
                  "page"
                ]
              }
            },
            {
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
              "parts": [
                "characters",
                "{id}",
                "anime"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "anime",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "characters",
                "{id}",
                "manga"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "manga",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "characters",
                "{id}",
                "pictures"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "picture",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "characters",
                "{id}",
                "voices"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "voice",
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
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
              "parts": [
                "characters",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "characters",
                "{id}",
                "full"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "full",
                "exist": [
                  "id"
                ]
              }
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
          "title": "Access",
          "type": "`$STRING`",
          "short": "Club access"
        },
        {
          "name": "category",
          "title": "Category",
          "type": "`$STRING`",
          "short": "Club Category"
        },
        {
          "name": "created",
          "title": "Created",
          "type": "`$STRING`",
          "short": "Date Created ISO8601"
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "title": "Images",
          "type": "`$OBJECT`"
        },
        {
          "name": "mal_id",
          "title": "Mal Id",
          "type": "`$INTEGER`",
          "short": "MyAnimeList ID"
        },
        {
          "name": "members",
          "title": "Members",
          "type": "`$INTEGER`",
          "short": "Number of club members"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Club name"
        },
        {
          "name": "pagination",
          "title": "Pagination",
          "type": "`$OBJECT`"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "Club URL"
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
              "kind": "http",
              "method": "GET",
              "orig": "/clubs",
              "segments": [
                {
                  "lit": "clubs"
                }
              ],
              "parts": [
                "clubs"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "category",
                    "orig": "category",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "letter",
                    "orig": "letter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
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
              }
            },
            {
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
              "parts": [
                "clubs",
                "{id}",
                "members"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "member",
                "exist": [
                  "id",
                  "page"
                ]
              }
            },
            {
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
              "parts": [
                "clubs",
                "{id}",
                "staff"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "staff",
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
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
              "parts": [
                "clubs",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "clubs",
                "{id}",
                "relations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "relation",
                "exist": [
                  "id"
                ]
              }
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
          "title": "Name",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "title": "Url",
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
              "parts": [
                "users",
                "{username}",
                "external"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "username",
                    "orig": "username",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "username"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.user"
          ]
        ]
      }
    },
    "genre": {
      "fields": [
        {
          "name": "count",
          "title": "Count",
          "type": "`$INTEGER`",
          "short": "Genre's entry count"
        },
        {
          "name": "mal_id",
          "title": "Mal Id",
          "type": "`$INTEGER`",
          "short": "MyAnimeList ID"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Genre Name"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "MyAnimeList URL"
        }
      ],
      "name": "genre",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
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
              "parts": [
                "genres",
                "anime"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "anime",
                "exist": [
                  "filter"
                ]
              }
            },
            {
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
              "parts": [
                "genres",
                "manga"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "manga",
                "exist": [
                  "filter"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "history": {
      "fields": [
        {
          "name": "date",
          "title": "Date",
          "type": "`$STRING`",
          "short": "Date ISO8601"
        },
        {
          "name": "entry",
          "title": "Entry",
          "type": "`$OBJECT`",
          "short": "Parsed URL Data"
        },
        {
          "name": "increment",
          "title": "Increment",
          "type": "`$INTEGER`",
          "short": "Number of episodes/chapters watched/read"
        }
      ],
      "name": "history",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
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
              "parts": [
                "users",
                "{username}",
                "history"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "username",
                    "orig": "username",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "type",
                  "username"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.user"
          ]
        ]
      }
    },
    "magazine": {
      "fields": [
        {
          "name": "data",
          "title": "Data",
          "type": "`$ARRAY`"
        },
        {
          "name": "pagination",
          "title": "Pagination",
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
              "kind": "http",
              "method": "GET",
              "orig": "/magazines",
              "segments": [
                {
                  "lit": "magazines"
                }
              ],
              "parts": [
                "magazines"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "letter",
                    "orig": "letter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "letter",
                  "limit",
                  "order_by",
                  "page",
                  "q",
                  "sort"
                ]
              }
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
          "title": "Approved",
          "type": "`$BOOLEAN`",
          "short": "Whether the entry is pending approval on MAL or not"
        },
        {
          "name": "authors",
          "title": "Authors",
          "type": "`$ARRAY`"
        },
        {
          "name": "background",
          "title": "Background",
          "type": "`$STRING`",
          "short": "Background"
        },
        {
          "name": "chapters",
          "title": "Chapters",
          "type": "`$INTEGER`",
          "short": "Chapter count"
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$ARRAY`"
        },
        {
          "name": "demographics",
          "title": "Demographics",
          "type": "`$ARRAY`"
        },
        {
          "name": "explicit_genres",
          "title": "Explicit Genres",
          "type": "`$ARRAY`"
        },
        {
          "name": "favorites",
          "title": "Favorites",
          "type": "`$INTEGER`",
          "short": "Number of users who have favorited this entry"
        },
        {
          "name": "genres",
          "title": "Genres",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "title": "Images",
          "type": "`$OBJECT`"
        },
        {
          "name": "mal_id",
          "title": "Mal Id",
          "type": "`$INTEGER`",
          "short": "MyAnimeList ID"
        },
        {
          "name": "members",
          "title": "Members",
          "type": "`$INTEGER`",
          "short": "Number of users who have added this entry to their list"
        },
        {
          "name": "pagination",
          "title": "Pagination",
          "type": "`$OBJECT`"
        },
        {
          "name": "popularity",
          "title": "Popularity",
          "type": "`$INTEGER`",
          "short": "Popularity"
        },
        {
          "name": "published",
          "title": "Published",
          "type": "`$OBJECT`",
          "short": "Date range"
        },
        {
          "name": "publishing",
          "title": "Publishing",
          "type": "`$BOOLEAN`",
          "short": "Publishing boolean"
        },
        {
          "name": "rank",
          "title": "Rank",
          "type": "`$INTEGER`",
          "short": "Ranking"
        },
        {
          "name": "score",
          "title": "Score",
          "type": "`$NUMBER`",
          "short": "Score",
          "format": "float"
        },
        {
          "name": "scored_by",
          "title": "Scored By",
          "type": "`$INTEGER`",
          "short": "Number of users"
        },
        {
          "name": "serializations",
          "title": "Serializations",
          "type": "`$ARRAY`"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "Publishing status"
        },
        {
          "name": "synopsis",
          "title": "Synopsis",
          "type": "`$STRING`",
          "short": "Synopsis"
        },
        {
          "name": "themes",
          "title": "Themes",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "title": "Title",
          "type": "`$STRING`",
          "short": "Title",
          "deprecated": true
        },
        {
          "name": "title_english",
          "title": "Title English",
          "type": "`$STRING`",
          "short": "English Title",
          "deprecated": true
        },
        {
          "name": "title_japanese",
          "title": "Title Japanese",
          "type": "`$STRING`",
          "short": "Japanese Title",
          "deprecated": true
        },
        {
          "name": "titles",
          "title": "Titles",
          "type": "`$ARRAY`",
          "short": "All Titles"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "short": "Manga Type"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "MyAnimeList URL"
        },
        {
          "name": "volumes",
          "title": "Volumes",
          "type": "`$INTEGER`",
          "short": "Volume count"
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
              "kind": "http",
              "method": "GET",
              "orig": "/manga",
              "segments": [
                {
                  "lit": "manga"
                }
              ],
              "parts": [
                "manga"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "end_date",
                    "orig": "end_date",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "genre",
                    "orig": "genre",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "genres_exclude",
                    "orig": "genres_exclude",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "letter",
                    "orig": "letter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "magazine",
                    "orig": "magazine",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "max_score",
                    "orig": "max_score",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "min_score",
                    "orig": "min_score",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "score",
                    "orig": "score",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "sfw",
                    "orig": "sfw",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "start_date",
                    "orig": "start_date",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "unapproved",
                    "orig": "unapproved",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
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
              }
            },
            {
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
              "parts": [
                "top",
                "manga"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "filter",
                  "limit",
                  "page",
                  "type"
                ]
              }
            },
            {
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
              "parts": [
                "manga",
                "{id}",
                "reviews"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "preliminary",
                    "orig": "preliminary",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "spoiler",
                    "orig": "spoiler",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "review",
                "exist": [
                  "id",
                  "page",
                  "preliminary",
                  "spoiler"
                ]
              }
            },
            {
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
              "parts": [
                "manga",
                "{id}",
                "forum"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "forum",
                "exist": [
                  "filter",
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "manga",
                "{id}",
                "news"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "new",
                "exist": [
                  "id",
                  "page"
                ]
              }
            },
            {
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
              "parts": [
                "manga",
                "{id}",
                "userupdates"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "userupdate",
                "exist": [
                  "id",
                  "page"
                ]
              }
            },
            {
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
              "parts": [
                "manga",
                "{id}",
                "characters"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "character",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "manga",
                "{id}",
                "external"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "external",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "manga",
                "{id}",
                "pictures"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "picture",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "manga",
                "{id}",
                "recommendations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "recommendation",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "manga",
                "{id}",
                "relations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "relation",
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
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
              "parts": [
                "manga",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "manga",
                "{id}",
                "full"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "full",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "manga",
                "{id}",
                "moreinfo"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "moreinfo",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "manga",
                "{id}",
                "statistics"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "statistic",
                "exist": [
                  "id"
                ]
              }
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
          "title": "Data",
          "type": "`$ARRAY`"
        },
        {
          "name": "pagination",
          "title": "Pagination",
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
              "parts": [
                "top",
                "people"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "limit",
                  "page"
                ]
              }
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
          "title": "About",
          "type": "`$STRING`",
          "short": "Biography"
        },
        {
          "name": "alternate_names",
          "title": "Alternate Names",
          "type": "`$ARRAY`",
          "short": "Other Names"
        },
        {
          "name": "birthday",
          "title": "Birthday",
          "type": "`$STRING`",
          "short": "Birthday Date ISO8601"
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$ARRAY`"
        },
        {
          "name": "family_name",
          "title": "Family Name",
          "type": "`$STRING`",
          "short": "Family Name"
        },
        {
          "name": "favorites",
          "title": "Favorites",
          "type": "`$INTEGER`",
          "short": "Number of users who have favorited this entry"
        },
        {
          "name": "given_name",
          "title": "Given Name",
          "type": "`$STRING`",
          "short": "Given Name"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "title": "Images",
          "type": "`$OBJECT`"
        },
        {
          "name": "mal_id",
          "title": "Mal Id",
          "type": "`$INTEGER`",
          "short": "MyAnimeList ID"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name"
        },
        {
          "name": "pagination",
          "title": "Pagination",
          "type": "`$OBJECT`"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "MyAnimeList URL"
        },
        {
          "name": "website_url",
          "title": "Website Url",
          "type": "`$STRING`",
          "short": "Person's website URL"
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
              "kind": "http",
              "method": "GET",
              "orig": "/people",
              "segments": [
                {
                  "lit": "people"
                }
              ],
              "parts": [
                "people"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "letter",
                    "orig": "letter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "letter",
                  "limit",
                  "order_by",
                  "page",
                  "q",
                  "sort"
                ]
              }
            },
            {
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
              "parts": [
                "people",
                "{id}",
                "anime"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "anime",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "people",
                "{id}",
                "manga"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "manga",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "people",
                "{id}",
                "pictures"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "picture",
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "people",
                "{id}",
                "voices"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "voice",
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
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
              "parts": [
                "people",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "people",
                "{id}",
                "full"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "full",
                "exist": [
                  "id"
                ]
              }
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
          "title": "About",
          "type": "`$STRING`",
          "short": "About the Producer"
        },
        {
          "name": "count",
          "title": "Count",
          "type": "`$INTEGER`",
          "short": "Producers's anime count"
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$ARRAY`"
        },
        {
          "name": "established",
          "title": "Established",
          "type": "`$STRING`",
          "short": "Established Date ISO8601"
        },
        {
          "name": "favorites",
          "title": "Favorites",
          "type": "`$INTEGER`",
          "short": "Producers's member favorites count"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "title": "Images",
          "type": "`$OBJECT`"
        },
        {
          "name": "mal_id",
          "title": "Mal Id",
          "type": "`$INTEGER`",
          "short": "MyAnimeList ID"
        },
        {
          "name": "pagination",
          "title": "Pagination",
          "type": "`$OBJECT`"
        },
        {
          "name": "titles",
          "title": "Titles",
          "type": "`$ARRAY`",
          "short": "All titles"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "MyAnimeList URL"
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
              "kind": "http",
              "method": "GET",
              "orig": "/producers",
              "segments": [
                {
                  "lit": "producers"
                }
              ],
              "parts": [
                "producers"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "letter",
                    "orig": "letter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "letter",
                  "limit",
                  "order_by",
                  "page",
                  "q",
                  "sort"
                ]
              }
            },
            {
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
              "parts": [
                "producers",
                "{id}",
                "external"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "external",
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
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
              "parts": [
                "producers",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "producers",
                "{id}",
                "full"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "full",
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "random": {
      "fields": [],
      "name": "random",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
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
              "parts": [
                "random",
                "anime"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {},
              "select": {
                "$action": "anime"
              }
            },
            {
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
              "parts": [
                "random",
                "characters"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {},
              "select": {
                "$action": "character"
              }
            },
            {
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
              "parts": [
                "random",
                "manga"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {},
              "select": {
                "$action": "manga"
              }
            },
            {
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
              "parts": [
                "random",
                "people"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {},
              "select": {
                "$action": "person"
              }
            },
            {
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
              "parts": [
                "random",
                "users"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {},
              "select": {
                "$action": "user"
              }
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
          "title": "Data",
          "type": "`$ARRAY`"
        },
        {
          "name": "pagination",
          "title": "Pagination",
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
              "parts": [
                "users",
                "{username}",
                "recommendations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "username",
                    "orig": "username",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "page",
                  "username"
                ]
              }
            },
            {
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
              "parts": [
                "recommendations",
                "anime"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "anime",
                "exist": [
                  "page"
                ]
              }
            },
            {
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
              "parts": [
                "recommendations",
                "manga"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "manga",
                "exist": [
                  "page"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.user"
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
              "parts": [
                "reviews",
                "anime"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "preliminary",
                    "orig": "preliminary",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "spoiler",
                    "orig": "spoiler",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "anime",
                "exist": [
                  "page",
                  "preliminary",
                  "spoiler"
                ]
              }
            },
            {
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
              "parts": [
                "reviews",
                "manga"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "preliminary",
                    "orig": "preliminary",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "spoiler",
                    "orig": "spoiler",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "manga",
                "exist": [
                  "page",
                  "preliminary",
                  "spoiler"
                ]
              }
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
          "title": "Data",
          "type": "`$ARRAY`"
        },
        {
          "name": "pagination",
          "title": "Pagination",
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
              "kind": "http",
              "method": "GET",
              "orig": "/schedules",
              "segments": [
                {
                  "lit": "schedules"
                }
              ],
              "parts": [
                "schedules"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "kid",
                    "orig": "kid",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "sfw",
                    "orig": "sfw",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "unapproved",
                    "orig": "unapproved",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "filter",
                  "kid",
                  "limit",
                  "page",
                  "sfw",
                  "unapproved"
                ]
              }
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
          "title": "Data",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "pagination",
          "title": "Pagination",
          "type": "`$OBJECT`"
        },
        {
          "name": "seasons",
          "title": "Seasons",
          "type": "`$ARRAY`",
          "short": "List of available seasons"
        },
        {
          "name": "year",
          "title": "Year",
          "type": "`$INTEGER`",
          "short": "Year"
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
              "parts": [
                "seasons",
                "now"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "continuing",
                    "orig": "continuing",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "sfw",
                    "orig": "sfw",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "unapproved",
                    "orig": "unapproved",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
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
              }
            },
            {
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
              "parts": [
                "seasons",
                "upcoming"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "continuing",
                    "orig": "continuing",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "sfw",
                    "orig": "sfw",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "unapproved",
                    "orig": "unapproved",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
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
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/seasons",
              "segments": [
                {
                  "lit": "seasons"
                }
              ],
              "parts": [
                "seasons"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
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
              "parts": [
                "seasons",
                "{year}",
                "{season}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "season",
                    "orig": "season",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "year",
                    "orig": "year",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "continuing",
                    "orig": "continuing",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "filter",
                    "orig": "filter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "sfw",
                    "orig": "sfw",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "unapproved",
                    "orig": "unapproved",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
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
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "top": {
      "fields": [],
      "name": "top",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
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
              "parts": [
                "top",
                "reviews"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "preliminary",
                    "orig": "preliminary",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "spoiler",
                    "orig": "spoiler",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "review",
                "exist": [
                  "page",
                  "preliminary",
                  "spoiler",
                  "type"
                ]
              }
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
          "name": "birthday",
          "title": "Birthday",
          "type": "`$STRING`",
          "short": "Birthday Date ISO8601"
        },
        {
          "name": "data",
          "title": "Data",
          "type": "`$ARRAY`"
        },
        {
          "name": "gender",
          "title": "Gender",
          "type": "`$STRING`",
          "short": "User Gender"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "images",
          "title": "Images",
          "type": "`$OBJECT`"
        },
        {
          "name": "joined",
          "title": "Joined",
          "type": "`$STRING`",
          "short": "Joined Date ISO8601"
        },
        {
          "name": "last_online",
          "title": "Last Online",
          "type": "`$STRING`",
          "short": "Last Online Date ISO8601"
        },
        {
          "name": "location",
          "title": "Location",
          "type": "`$STRING`",
          "short": "Location"
        },
        {
          "name": "mal_id",
          "title": "Mal Id",
          "type": "`$INTEGER`",
          "short": "MyAnimeList ID"
        },
        {
          "name": "pagination",
          "title": "Pagination",
          "type": "`$OBJECT`"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "MyAnimeList URL"
        },
        {
          "name": "username",
          "title": "Username",
          "type": "`$STRING`",
          "short": "MyAnimeList Username"
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
              "kind": "http",
              "method": "GET",
              "orig": "/users",
              "segments": [
                {
                  "lit": "users"
                }
              ],
              "parts": [
                "users"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "gender",
                    "orig": "gender",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "location",
                    "orig": "location",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "max_age",
                    "orig": "max_age",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "min_age",
                    "orig": "min_age",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
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
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
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
              "parts": [
                "users",
                "{username}",
                "animelist"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "username",
                    "orig": "username",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "animelist",
                "exist": [
                  "status",
                  "username"
                ]
              }
            },
            {
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
              "parts": [
                "users",
                "{username}",
                "mangalist"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "username",
                    "orig": "username",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "mangalist",
                "exist": [
                  "status",
                  "username"
                ]
              }
            },
            {
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
              "parts": [
                "users",
                "{username}",
                "reviews"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "username",
                    "orig": "username",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "review",
                "exist": [
                  "page",
                  "username"
                ]
              }
            },
            {
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
              "parts": [
                "users",
                "userbyid",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/users/{username}",
              "segments": [
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "users",
                "{id}"
              ],
              "rename": {
                "param": {
                  "username": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "username",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            },
            {
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
              "parts": [
                "users",
                "{username}",
                "favorites"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "username",
                    "orig": "username",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "favorite",
                "exist": [
                  "username"
                ]
              }
            },
            {
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
              "parts": [
                "users",
                "{username}",
                "full"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "username",
                    "orig": "username",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "full",
                "exist": [
                  "username"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "user_about": {
      "fields": [
        {
          "name": "about",
          "title": "About",
          "type": "`$STRING`",
          "short": "User About."
        }
      ],
      "name": "user_about",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
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
              "parts": [
                "users",
                "{username}",
                "about"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "username",
                    "orig": "username",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "username"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.user"
          ]
        ]
      }
    },
    "user_club": {
      "fields": [
        {
          "name": "data",
          "title": "Data",
          "type": "`$ARRAY`"
        },
        {
          "name": "pagination",
          "title": "Pagination",
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
              "parts": [
                "users",
                "{username}",
                "clubs"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "username",
                    "orig": "username",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "page",
                  "username"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.user"
          ]
        ]
      }
    },
    "user_friend": {
      "fields": [
        {
          "name": "data",
          "title": "Data",
          "type": "`$ARRAY`"
        },
        {
          "name": "pagination",
          "title": "Pagination",
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
              "parts": [
                "users",
                "{username}",
                "friends"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "username",
                    "orig": "username",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "page",
                  "username"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.user"
          ]
        ]
      }
    },
    "user_statistic": {
      "fields": [
        {
          "name": "anime",
          "title": "Anime",
          "type": "`$OBJECT`",
          "short": "Anime Statistics"
        },
        {
          "name": "manga",
          "title": "Manga",
          "type": "`$OBJECT`",
          "short": "Manga Statistics"
        }
      ],
      "name": "user_statistic",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
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
              "parts": [
                "users",
                "{username}",
                "statistics"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "username",
                    "orig": "username",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "username"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.user"
          ]
        ]
      }
    },
    "user_update": {
      "fields": [
        {
          "name": "anime",
          "title": "Anime",
          "type": "`$ARRAY`",
          "short": "Last updated Anime"
        },
        {
          "name": "manga",
          "title": "Manga",
          "type": "`$ARRAY`",
          "short": "Last updated Manga"
        }
      ],
      "name": "user_update",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
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
              "parts": [
                "users",
                "{username}",
                "userupdates"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "username",
                    "orig": "username",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "username"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.user"
          ]
        ]
      }
    },
    "watch_episode": {
      "fields": [
        {
          "name": "data",
          "title": "Data",
          "type": "`$ARRAY`"
        },
        {
          "name": "pagination",
          "title": "Pagination",
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
              "parts": [
                "watch",
                "episodes"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
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
              "parts": [
                "watch",
                "episodes",
                "popular"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
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
          "title": "Data",
          "type": "`$ARRAY`"
        },
        {
          "name": "pagination",
          "title": "Pagination",
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
              "parts": [
                "watch",
                "promos"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "page"
                ]
              }
            },
            {
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
              "parts": [
                "watch",
                "promos",
                "popular"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
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

