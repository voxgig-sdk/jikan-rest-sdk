# JikanRest SDK configuration

module JikanRestConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "JikanRest",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.jikan.moe/v4",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "anime" => {},
          "character" => {},
          "club" => {},
          "external" => {},
          "genre" => {},
          "magazine" => {},
          "manga" => {},
          "people_search" => {},
          "person" => {},
          "producer" => {},
          "random" => {},
          "recommendation" => {},
          "review" => {},
          "schedule" => {},
          "season" => {},
          "top" => {},
          "user" => {},
          "user_about" => {},
          "user_club" => {},
          "user_friend" => {},
          "user_history" => {},
          "user_statistic" => {},
          "user_update" => {},
          "watch_episode" => {},
          "watch_promo" => {},
        },
      },
      "entity" => {
        "anime" => {
          "fields" => [
            {
              "name" => "aired",
              "type" => "`$STRING`",
            },
            {
              "name" => "airing",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "approved",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "author_url",
              "type" => "`$STRING`",
            },
            {
              "name" => "author_username",
              "type" => "`$STRING`",
            },
            {
              "name" => "background",
              "type" => "`$STRING`",
            },
            {
              "name" => "broadcast",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "character",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "comments",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "completed",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "data",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "date",
              "type" => "`$STRING`",
            },
            {
              "name" => "demographics",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "dropped",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "duration",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "endings",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "entry",
              "type" => "`$OBJECT`",
              "union" => {
                "branches" => 2,
                "count" => 1,
                "depth" => 0,
              },
            },
            {
              "name" => "episodes",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "explicit_genres",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "external",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "favorites",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "filler",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "genres",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "images",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "last_comment",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "licensors",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "mal_id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "members",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "moreinfo",
              "type" => "`$STRING`",
            },
            {
              "name" => "music_videos",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "on_hold",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "openings",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "pagination",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "person",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "plan_to_watch",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "popularity",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "positions",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "producers",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "promo",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "rank",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "rating",
              "type" => "`$STRING`",
            },
            {
              "name" => "recap",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "relation",
              "type" => "`$STRING`",
            },
            {
              "name" => "relations",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "role",
              "type" => "`$STRING`",
            },
            {
              "name" => "score",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "scored_by",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "scores",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "season",
              "type" => "`$STRING`",
            },
            {
              "name" => "source",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "type" => "`$STRING`",
            },
            {
              "name" => "streaming",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "studios",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "synopsis",
              "type" => "`$STRING`",
            },
            {
              "name" => "theme",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "themes",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "title",
              "type" => "`$STRING`",
            },
            {
              "name" => "title_english",
              "type" => "`$STRING`",
            },
            {
              "name" => "title_japanese",
              "type" => "`$STRING`",
            },
            {
              "name" => "title_romanji",
              "type" => "`$STRING`",
            },
            {
              "name" => "title_synonyms",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "titles",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "total",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "trailer",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "type",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "type" => "`$STRING`",
            },
            {
              "name" => "voice_actors",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "watching",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "year",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "anime",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "end_date",
                        "orig" => "end_date",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "genre",
                        "orig" => "genre",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "genres_exclude",
                        "orig" => "genres_exclude",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "letter",
                        "orig" => "letter",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "max_score",
                        "orig" => "max_score",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "min_score",
                        "orig" => "min_score",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "order_by",
                        "orig" => "order_by",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "producer",
                        "orig" => "producer",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "rating",
                        "orig" => "rating",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "score",
                        "orig" => "score",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sfw",
                        "orig" => "sfw",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "start_date",
                        "orig" => "start_date",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "status",
                        "orig" => "status",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "unapproved",
                        "orig" => "unapproved",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime",
                  "parts" => [
                    "anime",
                  ],
                  "select" => {
                    "exist" => [
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
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "filter",
                        "orig" => "filter",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "rating",
                        "orig" => "rating",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sfw",
                        "orig" => "sfw",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/top/anime",
                  "parts" => [
                    "top",
                    "anime",
                  ],
                  "select" => {
                    "exist" => [
                      "filter",
                      "limit",
                      "page",
                      "rating",
                      "sfw",
                      "type",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "preliminary",
                        "orig" => "preliminary",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "spoiler",
                        "orig" => "spoiler",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/reviews",
                  "parts" => [
                    "anime",
                    "{id}",
                    "reviews",
                  ],
                  "select" => {
                    "$action" => "review",
                    "exist" => [
                      "id",
                      "page",
                      "preliminary",
                      "spoiler",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/episodes",
                  "parts" => [
                    "anime",
                    "{id}",
                    "episodes",
                  ],
                  "select" => {
                    "$action" => "episode",
                    "exist" => [
                      "id",
                      "page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "filter",
                        "orig" => "filter",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/forum",
                  "parts" => [
                    "anime",
                    "{id}",
                    "forum",
                  ],
                  "select" => {
                    "$action" => "forum",
                    "exist" => [
                      "filter",
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/news",
                  "parts" => [
                    "anime",
                    "{id}",
                    "news",
                  ],
                  "select" => {
                    "$action" => "new",
                    "exist" => [
                      "id",
                      "page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/userupdates",
                  "parts" => [
                    "anime",
                    "{id}",
                    "userupdates",
                  ],
                  "select" => {
                    "$action" => "userupdate",
                    "exist" => [
                      "id",
                      "page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/videos/episodes",
                  "parts" => [
                    "anime",
                    "{id}",
                    "videos",
                    "episodes",
                  ],
                  "select" => {
                    "$action" => "video_episode",
                    "exist" => [
                      "id",
                      "page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/characters",
                  "parts" => [
                    "anime",
                    "{id}",
                    "characters",
                  ],
                  "select" => {
                    "$action" => "character",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/external",
                  "parts" => [
                    "anime",
                    "{id}",
                    "external",
                  ],
                  "select" => {
                    "$action" => "external",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/pictures",
                  "parts" => [
                    "anime",
                    "{id}",
                    "pictures",
                  ],
                  "select" => {
                    "$action" => "picture",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/recommendations",
                  "parts" => [
                    "anime",
                    "{id}",
                    "recommendations",
                  ],
                  "select" => {
                    "$action" => "recommendation",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/relations",
                  "parts" => [
                    "anime",
                    "{id}",
                    "relations",
                  ],
                  "select" => {
                    "$action" => "relation",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/staff",
                  "parts" => [
                    "anime",
                    "{id}",
                    "staff",
                  ],
                  "select" => {
                    "$action" => "staff",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/streaming",
                  "parts" => [
                    "anime",
                    "{id}",
                    "streaming",
                  ],
                  "select" => {
                    "$action" => "streaming",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "episode",
                        "orig" => "episode",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/episodes/{episode}",
                  "parts" => [
                    "anime",
                    "{id}",
                    "episodes",
                    "{episode}",
                  ],
                  "select" => {
                    "exist" => [
                      "episode",
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}",
                  "parts" => [
                    "anime",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/full",
                  "parts" => [
                    "anime",
                    "{id}",
                    "full",
                  ],
                  "select" => {
                    "$action" => "full",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/moreinfo",
                  "parts" => [
                    "anime",
                    "{id}",
                    "moreinfo",
                  ],
                  "select" => {
                    "$action" => "moreinfo",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/statistics",
                  "parts" => [
                    "anime",
                    "{id}",
                    "statistics",
                  ],
                  "select" => {
                    "$action" => "statistic",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/themes",
                  "parts" => [
                    "anime",
                    "{id}",
                    "themes",
                  ],
                  "select" => {
                    "$action" => "theme",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/anime/{id}/videos",
                  "parts" => [
                    "anime",
                    "{id}",
                    "videos",
                  ],
                  "select" => {
                    "$action" => "video",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "episode",
              ],
            ],
          },
        },
        "character" => {
          "fields" => [
            {
              "name" => "about",
              "type" => "`$STRING`",
            },
            {
              "name" => "anime",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "data",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "favorites",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "image_url",
              "type" => "`$STRING`",
            },
            {
              "name" => "images",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "language",
              "type" => "`$STRING`",
            },
            {
              "name" => "large_image_url",
              "type" => "`$STRING`",
            },
            {
              "name" => "mal_id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "manga",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "name_kanji",
              "type" => "`$STRING`",
            },
            {
              "name" => "nicknames",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "pagination",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "person",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "role",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "type" => "`$STRING`",
            },
            {
              "name" => "voices",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "character",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "letter",
                        "orig" => "letter",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "order_by",
                        "orig" => "order_by",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/characters",
                  "parts" => [
                    "characters",
                  ],
                  "select" => {
                    "exist" => [
                      "letter",
                      "limit",
                      "order_by",
                      "page",
                      "q",
                      "sort",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/top/characters",
                  "parts" => [
                    "top",
                    "characters",
                  ],
                  "select" => {
                    "exist" => [
                      "limit",
                      "page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/characters/{id}/anime",
                  "parts" => [
                    "characters",
                    "{id}",
                    "anime",
                  ],
                  "select" => {
                    "$action" => "anime",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/characters/{id}/manga",
                  "parts" => [
                    "characters",
                    "{id}",
                    "manga",
                  ],
                  "select" => {
                    "$action" => "manga",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/characters/{id}/pictures",
                  "parts" => [
                    "characters",
                    "{id}",
                    "pictures",
                  ],
                  "select" => {
                    "$action" => "picture",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/characters/{id}/voices",
                  "parts" => [
                    "characters",
                    "{id}",
                    "voices",
                  ],
                  "select" => {
                    "$action" => "voice",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/characters/{id}",
                  "parts" => [
                    "characters",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/characters/{id}/full",
                  "parts" => [
                    "characters",
                    "{id}",
                    "full",
                  ],
                  "select" => {
                    "$action" => "full",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "club" => {
          "fields" => [
            {
              "name" => "access",
              "type" => "`$STRING`",
            },
            {
              "name" => "anime",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "category",
              "type" => "`$STRING`",
            },
            {
              "name" => "characters",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "created",
              "type" => "`$STRING`",
            },
            {
              "name" => "data",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "images",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "mal_id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "manga",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "members",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "pagination",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "url",
              "type" => "`$STRING`",
            },
            {
              "name" => "username",
              "type" => "`$STRING`",
            },
          ],
          "name" => "club",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "category",
                        "orig" => "category",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "letter",
                        "orig" => "letter",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "order_by",
                        "orig" => "order_by",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/clubs",
                  "parts" => [
                    "clubs",
                  ],
                  "select" => {
                    "exist" => [
                      "category",
                      "letter",
                      "limit",
                      "order_by",
                      "page",
                      "q",
                      "sort",
                      "type",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/clubs/{id}/members",
                  "parts" => [
                    "clubs",
                    "{id}",
                    "members",
                  ],
                  "select" => {
                    "$action" => "member",
                    "exist" => [
                      "id",
                      "page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/clubs/{id}/staff",
                  "parts" => [
                    "clubs",
                    "{id}",
                    "staff",
                  ],
                  "select" => {
                    "$action" => "staff",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/clubs/{id}",
                  "parts" => [
                    "clubs",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/clubs/{id}/relations",
                  "parts" => [
                    "clubs",
                    "{id}",
                    "relations",
                  ],
                  "select" => {
                    "$action" => "relation",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "external" => {
          "fields" => [
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "type" => "`$STRING`",
            },
          ],
          "name" => "external",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "username",
                        "orig" => "username",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/users/{username}/external",
                  "parts" => [
                    "users",
                    "{username}",
                    "external",
                  ],
                  "select" => {
                    "exist" => [
                      "username",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "user",
              ],
            ],
          },
        },
        "genre" => {
          "fields" => [
            {
              "name" => "count",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "mal_id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "type" => "`$STRING`",
            },
          ],
          "name" => "genre",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "filter",
                        "orig" => "filter",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/genres/anime",
                  "parts" => [
                    "genres",
                    "anime",
                  ],
                  "select" => {
                    "$action" => "anime",
                    "exist" => [
                      "filter",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "filter",
                        "orig" => "filter",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/genres/manga",
                  "parts" => [
                    "genres",
                    "manga",
                  ],
                  "select" => {
                    "$action" => "manga",
                    "exist" => [
                      "filter",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "magazine" => {
          "fields" => [
            {
              "name" => "data",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "pagination",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "magazine",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "letter",
                        "orig" => "letter",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "order_by",
                        "orig" => "order_by",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/magazines",
                  "parts" => [
                    "magazines",
                  ],
                  "select" => {
                    "exist" => [
                      "letter",
                      "limit",
                      "order_by",
                      "page",
                      "q",
                      "sort",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "manga" => {
          "fields" => [
            {
              "name" => "approved",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "author_url",
              "type" => "`$STRING`",
            },
            {
              "name" => "author_username",
              "type" => "`$STRING`",
            },
            {
              "name" => "authors",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "background",
              "type" => "`$STRING`",
            },
            {
              "name" => "chapters",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "character",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "comments",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "completed",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "data",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "date",
              "type" => "`$STRING`",
            },
            {
              "name" => "demographics",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "dropped",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "entry",
              "type" => "`$OBJECT`",
              "union" => {
                "branches" => 2,
                "count" => 1,
                "depth" => 0,
              },
            },
            {
              "name" => "explicit_genres",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "external",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "favorites",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "genres",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "images",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "jpg",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "last_comment",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "mal_id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "members",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "moreinfo",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "on_hold",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "pagination",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "plan_to_read",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "popularity",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "published",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "publishing",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "rank",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "reading",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "relation",
              "type" => "`$STRING`",
            },
            {
              "name" => "relations",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "role",
              "type" => "`$STRING`",
            },
            {
              "name" => "score",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "scored_by",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "scores",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "serializations",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "status",
              "type" => "`$STRING`",
            },
            {
              "name" => "synopsis",
              "type" => "`$STRING`",
            },
            {
              "name" => "themes",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "title",
              "type" => "`$STRING`",
            },
            {
              "name" => "title_english",
              "type" => "`$STRING`",
            },
            {
              "name" => "title_japanese",
              "type" => "`$STRING`",
            },
            {
              "name" => "title_synonyms",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "titles",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "total",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "type",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "type" => "`$STRING`",
            },
            {
              "name" => "volumes",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "webp",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "manga",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "end_date",
                        "orig" => "end_date",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "genre",
                        "orig" => "genre",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "genres_exclude",
                        "orig" => "genres_exclude",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "letter",
                        "orig" => "letter",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "magazine",
                        "orig" => "magazine",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "max_score",
                        "orig" => "max_score",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "min_score",
                        "orig" => "min_score",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "order_by",
                        "orig" => "order_by",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "score",
                        "orig" => "score",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sfw",
                        "orig" => "sfw",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "start_date",
                        "orig" => "start_date",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "status",
                        "orig" => "status",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "unapproved",
                        "orig" => "unapproved",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/manga",
                  "parts" => [
                    "manga",
                  ],
                  "select" => {
                    "exist" => [
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
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "filter",
                        "orig" => "filter",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/top/manga",
                  "parts" => [
                    "top",
                    "manga",
                  ],
                  "select" => {
                    "exist" => [
                      "filter",
                      "limit",
                      "page",
                      "type",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "preliminary",
                        "orig" => "preliminary",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "spoiler",
                        "orig" => "spoiler",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/manga/{id}/reviews",
                  "parts" => [
                    "manga",
                    "{id}",
                    "reviews",
                  ],
                  "select" => {
                    "$action" => "review",
                    "exist" => [
                      "id",
                      "page",
                      "preliminary",
                      "spoiler",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "filter",
                        "orig" => "filter",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/manga/{id}/forum",
                  "parts" => [
                    "manga",
                    "{id}",
                    "forum",
                  ],
                  "select" => {
                    "$action" => "forum",
                    "exist" => [
                      "filter",
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/manga/{id}/news",
                  "parts" => [
                    "manga",
                    "{id}",
                    "news",
                  ],
                  "select" => {
                    "$action" => "new",
                    "exist" => [
                      "id",
                      "page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/manga/{id}/userupdates",
                  "parts" => [
                    "manga",
                    "{id}",
                    "userupdates",
                  ],
                  "select" => {
                    "$action" => "userupdate",
                    "exist" => [
                      "id",
                      "page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/manga/{id}/characters",
                  "parts" => [
                    "manga",
                    "{id}",
                    "characters",
                  ],
                  "select" => {
                    "$action" => "character",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/manga/{id}/external",
                  "parts" => [
                    "manga",
                    "{id}",
                    "external",
                  ],
                  "select" => {
                    "$action" => "external",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/manga/{id}/pictures",
                  "parts" => [
                    "manga",
                    "{id}",
                    "pictures",
                  ],
                  "select" => {
                    "$action" => "picture",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/manga/{id}/recommendations",
                  "parts" => [
                    "manga",
                    "{id}",
                    "recommendations",
                  ],
                  "select" => {
                    "$action" => "recommendation",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/manga/{id}/relations",
                  "parts" => [
                    "manga",
                    "{id}",
                    "relations",
                  ],
                  "select" => {
                    "$action" => "relation",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/manga/{id}",
                  "parts" => [
                    "manga",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/manga/{id}/full",
                  "parts" => [
                    "manga",
                    "{id}",
                    "full",
                  ],
                  "select" => {
                    "$action" => "full",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/manga/{id}/moreinfo",
                  "parts" => [
                    "manga",
                    "{id}",
                    "moreinfo",
                  ],
                  "select" => {
                    "$action" => "moreinfo",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/manga/{id}/statistics",
                  "parts" => [
                    "manga",
                    "{id}",
                    "statistics",
                  ],
                  "select" => {
                    "$action" => "statistic",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "people_search" => {
          "fields" => [
            {
              "name" => "data",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "pagination",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "people_search",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/top/people",
                  "parts" => [
                    "top",
                    "people",
                  ],
                  "select" => {
                    "exist" => [
                      "limit",
                      "page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "person" => {
          "fields" => [
            {
              "name" => "about",
              "type" => "`$STRING`",
            },
            {
              "name" => "alternate_names",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "anime",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "birthday",
              "type" => "`$STRING`",
            },
            {
              "name" => "character",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "data",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "family_name",
              "type" => "`$STRING`",
            },
            {
              "name" => "favorites",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "given_name",
              "type" => "`$STRING`",
            },
            {
              "name" => "images",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "jpg",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "mal_id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "manga",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "pagination",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "position",
              "type" => "`$STRING`",
            },
            {
              "name" => "role",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "type" => "`$STRING`",
            },
            {
              "name" => "voices",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "website_url",
              "type" => "`$STRING`",
            },
          ],
          "name" => "person",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "letter",
                        "orig" => "letter",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "order_by",
                        "orig" => "order_by",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/people",
                  "parts" => [
                    "people",
                  ],
                  "select" => {
                    "exist" => [
                      "letter",
                      "limit",
                      "order_by",
                      "page",
                      "q",
                      "sort",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/people/{id}/anime",
                  "parts" => [
                    "people",
                    "{id}",
                    "anime",
                  ],
                  "select" => {
                    "$action" => "anime",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/people/{id}/manga",
                  "parts" => [
                    "people",
                    "{id}",
                    "manga",
                  ],
                  "select" => {
                    "$action" => "manga",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/people/{id}/pictures",
                  "parts" => [
                    "people",
                    "{id}",
                    "pictures",
                  ],
                  "select" => {
                    "$action" => "picture",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/people/{id}/voices",
                  "parts" => [
                    "people",
                    "{id}",
                    "voices",
                  ],
                  "select" => {
                    "$action" => "voice",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/people/{id}",
                  "parts" => [
                    "people",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/people/{id}/full",
                  "parts" => [
                    "people",
                    "{id}",
                    "full",
                  ],
                  "select" => {
                    "$action" => "full",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "producer" => {
          "fields" => [
            {
              "name" => "about",
              "type" => "`$STRING`",
            },
            {
              "name" => "count",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "data",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "established",
              "type" => "`$STRING`",
            },
            {
              "name" => "external",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "favorites",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "images",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "mal_id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "pagination",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "titles",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "url",
              "type" => "`$STRING`",
            },
          ],
          "name" => "producer",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "letter",
                        "orig" => "letter",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "order_by",
                        "orig" => "order_by",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/producers",
                  "parts" => [
                    "producers",
                  ],
                  "select" => {
                    "exist" => [
                      "letter",
                      "limit",
                      "order_by",
                      "page",
                      "q",
                      "sort",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/producers/{id}/external",
                  "parts" => [
                    "producers",
                    "{id}",
                    "external",
                  ],
                  "select" => {
                    "$action" => "external",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/producers/{id}",
                  "parts" => [
                    "producers",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/producers/{id}/full",
                  "parts" => [
                    "producers",
                    "{id}",
                    "full",
                  ],
                  "select" => {
                    "$action" => "full",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "random" => {
          "fields" => [
            {
              "name" => "about",
              "type" => "`$STRING`",
            },
            {
              "name" => "aired",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "airing",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "alternate_names",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "approved",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "authors",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "background",
              "type" => "`$STRING`",
            },
            {
              "name" => "birthday",
              "type" => "`$STRING`",
            },
            {
              "name" => "broadcast",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "chapters",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "demographics",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "duration",
              "type" => "`$STRING`",
            },
            {
              "name" => "episodes",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "explicit_genres",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "family_name",
              "type" => "`$STRING`",
            },
            {
              "name" => "favorites",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "gender",
              "type" => "`$STRING`",
            },
            {
              "name" => "genres",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "given_name",
              "type" => "`$STRING`",
            },
            {
              "name" => "images",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "joined",
              "type" => "`$STRING`",
            },
            {
              "name" => "last_online",
              "type" => "`$STRING`",
            },
            {
              "name" => "licensors",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "location",
              "type" => "`$STRING`",
            },
            {
              "name" => "mal_id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "members",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "name_kanji",
              "type" => "`$STRING`",
            },
            {
              "name" => "nicknames",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "popularity",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "producers",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "published",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "publishing",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "rank",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "rating",
              "type" => "`$STRING`",
            },
            {
              "name" => "score",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "scored_by",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "season",
              "type" => "`$STRING`",
            },
            {
              "name" => "serializations",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "source",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "type" => "`$STRING`",
            },
            {
              "name" => "studios",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "synopsis",
              "type" => "`$STRING`",
            },
            {
              "name" => "themes",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "title",
              "type" => "`$STRING`",
            },
            {
              "name" => "title_english",
              "type" => "`$STRING`",
            },
            {
              "name" => "title_japanese",
              "type" => "`$STRING`",
            },
            {
              "name" => "title_synonyms",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "titles",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "trailer",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "type",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "type" => "`$STRING`",
            },
            {
              "name" => "username",
              "type" => "`$STRING`",
            },
            {
              "name" => "volumes",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "website_url",
              "type" => "`$STRING`",
            },
            {
              "name" => "year",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "random",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/random/anime",
                  "parts" => [
                    "random",
                    "anime",
                  ],
                  "select" => {
                    "$action" => "anime",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/random/characters",
                  "parts" => [
                    "random",
                    "characters",
                  ],
                  "select" => {
                    "$action" => "character",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/random/manga",
                  "parts" => [
                    "random",
                    "manga",
                  ],
                  "select" => {
                    "$action" => "manga",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/random/people",
                  "parts" => [
                    "random",
                    "people",
                  ],
                  "select" => {
                    "$action" => "person",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/random/users",
                  "parts" => [
                    "random",
                    "users",
                  ],
                  "select" => {
                    "$action" => "user",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "recommendation" => {
          "fields" => [
            {
              "name" => "data",
              "type" => "`$ARRAY`",
              "union" => {
                "branches" => 2,
                "count" => 1,
                "depth" => 4,
              },
            },
            {
              "name" => "pagination",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "recommendation",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "username",
                        "orig" => "username",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/users/{username}/recommendations",
                  "parts" => [
                    "users",
                    "{username}",
                    "recommendations",
                  ],
                  "select" => {
                    "exist" => [
                      "page",
                      "username",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/recommendations/anime",
                  "parts" => [
                    "recommendations",
                    "anime",
                  ],
                  "select" => {
                    "$action" => "anime",
                    "exist" => [
                      "page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/recommendations/manga",
                  "parts" => [
                    "recommendations",
                    "manga",
                  ],
                  "select" => {
                    "$action" => "manga",
                    "exist" => [
                      "page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "user",
              ],
            ],
          },
        },
        "review" => {
          "fields" => [],
          "name" => "review",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "preliminary",
                        "orig" => "preliminary",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "spoiler",
                        "orig" => "spoiler",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/reviews/anime",
                  "parts" => [
                    "reviews",
                    "anime",
                  ],
                  "select" => {
                    "$action" => "anime",
                    "exist" => [
                      "page",
                      "preliminary",
                      "spoiler",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "preliminary",
                        "orig" => "preliminary",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "spoiler",
                        "orig" => "spoiler",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/reviews/manga",
                  "parts" => [
                    "reviews",
                    "manga",
                  ],
                  "select" => {
                    "$action" => "manga",
                    "exist" => [
                      "page",
                      "preliminary",
                      "spoiler",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "schedule" => {
          "fields" => [
            {
              "name" => "data",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "pagination",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "schedule",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "filter",
                        "orig" => "filter",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "kid",
                        "orig" => "kid",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sfw",
                        "orig" => "sfw",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "unapproved",
                        "orig" => "unapproved",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/schedules",
                  "parts" => [
                    "schedules",
                  ],
                  "select" => {
                    "exist" => [
                      "filter",
                      "kid",
                      "limit",
                      "page",
                      "sfw",
                      "unapproved",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "season" => {
          "fields" => [
            {
              "name" => "data",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "pagination",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "seasons",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "year",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "season",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "continuing",
                        "orig" => "continuing",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "filter",
                        "orig" => "filter",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sfw",
                        "orig" => "sfw",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "unapproved",
                        "orig" => "unapproved",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/seasons/now",
                  "parts" => [
                    "seasons",
                    "now",
                  ],
                  "select" => {
                    "$action" => "now",
                    "exist" => [
                      "continuing",
                      "filter",
                      "limit",
                      "page",
                      "sfw",
                      "unapproved",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "continuing",
                        "orig" => "continuing",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "filter",
                        "orig" => "filter",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sfw",
                        "orig" => "sfw",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "unapproved",
                        "orig" => "unapproved",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/seasons/upcoming",
                  "parts" => [
                    "seasons",
                    "upcoming",
                  ],
                  "select" => {
                    "$action" => "upcoming",
                    "exist" => [
                      "continuing",
                      "filter",
                      "limit",
                      "page",
                      "sfw",
                      "unapproved",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/seasons",
                  "parts" => [
                    "seasons",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "season",
                        "orig" => "season",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "param",
                        "name" => "year",
                        "orig" => "year",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "continuing",
                        "orig" => "continuing",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "filter",
                        "orig" => "filter",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "sfw",
                        "orig" => "sfw",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "unapproved",
                        "orig" => "unapproved",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/seasons/{year}/{season}",
                  "parts" => [
                    "seasons",
                    "{year}",
                    "{season}",
                  ],
                  "select" => {
                    "exist" => [
                      "continuing",
                      "filter",
                      "limit",
                      "page",
                      "season",
                      "sfw",
                      "unapproved",
                      "year",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "season",
              ],
            ],
          },
        },
        "top" => {
          "fields" => [
            {
              "name" => "data",
              "type" => "`$ARRAY`",
              "union" => {
                "branches" => 2,
                "count" => 1,
                "depth" => 1,
              },
            },
            {
              "name" => "pagination",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "top",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "preliminary",
                        "orig" => "preliminary",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "spoiler",
                        "orig" => "spoiler",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/top/reviews",
                  "parts" => [
                    "top",
                    "reviews",
                  ],
                  "select" => {
                    "$action" => "review",
                    "exist" => [
                      "page",
                      "preliminary",
                      "spoiler",
                      "type",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "user" => {
          "fields" => [
            {
              "name" => "anime",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "birthday",
              "type" => "`$STRING`",
            },
            {
              "name" => "characters",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "data",
              "type" => "`$ARRAY`",
              "union" => {
                "branches" => 2,
                "count" => 1,
                "depth" => 1,
              },
            },
            {
              "name" => "external",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "gender",
              "type" => "`$STRING`",
            },
            {
              "name" => "images",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "joined",
              "type" => "`$STRING`",
            },
            {
              "name" => "last_online",
              "type" => "`$STRING`",
            },
            {
              "name" => "location",
              "type" => "`$STRING`",
            },
            {
              "name" => "mal_id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "manga",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "pagination",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "people",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "statistics",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "url",
              "type" => "`$STRING`",
            },
            {
              "name" => "username",
              "type" => "`$STRING`",
            },
          ],
          "name" => "user",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "gender",
                        "orig" => "gender",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "location",
                        "orig" => "location",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "max_age",
                        "orig" => "max_age",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "min_age",
                        "orig" => "min_age",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/users",
                  "parts" => [
                    "users",
                  ],
                  "select" => {
                    "exist" => [
                      "gender",
                      "limit",
                      "location",
                      "max_age",
                      "min_age",
                      "page",
                      "q",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "username",
                        "orig" => "username",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "status",
                        "orig" => "status",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/users/{username}/animelist",
                  "parts" => [
                    "users",
                    "{username}",
                    "animelist",
                  ],
                  "select" => {
                    "$action" => "animelist",
                    "exist" => [
                      "status",
                      "username",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "username",
                        "orig" => "username",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "status",
                        "orig" => "status",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/users/{username}/mangalist",
                  "parts" => [
                    "users",
                    "{username}",
                    "mangalist",
                  ],
                  "select" => {
                    "$action" => "mangalist",
                    "exist" => [
                      "status",
                      "username",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "username",
                        "orig" => "username",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/users/{username}/reviews",
                  "parts" => [
                    "users",
                    "{username}",
                    "reviews",
                  ],
                  "select" => {
                    "$action" => "review",
                    "exist" => [
                      "page",
                      "username",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/users/userbyid/{id}",
                  "parts" => [
                    "users",
                    "userbyid",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "username",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/users/{username}",
                  "parts" => [
                    "users",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "username" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "username",
                        "orig" => "username",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/users/{username}/favorites",
                  "parts" => [
                    "users",
                    "{username}",
                    "favorites",
                  ],
                  "select" => {
                    "$action" => "favorite",
                    "exist" => [
                      "username",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "username",
                        "orig" => "username",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/users/{username}/full",
                  "parts" => [
                    "users",
                    "{username}",
                    "full",
                  ],
                  "select" => {
                    "$action" => "full",
                    "exist" => [
                      "username",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "user",
              ],
            ],
          },
        },
        "user_about" => {
          "fields" => [
            {
              "name" => "about",
              "type" => "`$STRING`",
            },
          ],
          "name" => "user_about",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "username",
                        "orig" => "username",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/users/{username}/about",
                  "parts" => [
                    "users",
                    "{username}",
                    "about",
                  ],
                  "select" => {
                    "exist" => [
                      "username",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "user",
              ],
            ],
          },
        },
        "user_club" => {
          "fields" => [
            {
              "name" => "data",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "pagination",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "user_club",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "username",
                        "orig" => "username",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/users/{username}/clubs",
                  "parts" => [
                    "users",
                    "{username}",
                    "clubs",
                  ],
                  "select" => {
                    "exist" => [
                      "page",
                      "username",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "user",
              ],
            ],
          },
        },
        "user_friend" => {
          "fields" => [
            {
              "name" => "data",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "pagination",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "user_friend",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "username",
                        "orig" => "username",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/users/{username}/friends",
                  "parts" => [
                    "users",
                    "{username}",
                    "friends",
                  ],
                  "select" => {
                    "exist" => [
                      "page",
                      "username",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "user",
              ],
            ],
          },
        },
        "user_history" => {
          "fields" => [
            {
              "name" => "date",
              "type" => "`$STRING`",
            },
            {
              "name" => "entry",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "increment",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "user_history",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "username",
                        "orig" => "username",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "type",
                        "orig" => "type",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/users/{username}/history",
                  "parts" => [
                    "users",
                    "{username}",
                    "history",
                  ],
                  "select" => {
                    "exist" => [
                      "type",
                      "username",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "user",
              ],
            ],
          },
        },
        "user_statistic" => {
          "fields" => [
            {
              "name" => "anime",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "manga",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "user_statistic",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "username",
                        "orig" => "username",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/users/{username}/statistics",
                  "parts" => [
                    "users",
                    "{username}",
                    "statistics",
                  ],
                  "select" => {
                    "exist" => [
                      "username",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "user",
              ],
            ],
          },
        },
        "user_update" => {
          "fields" => [
            {
              "name" => "anime",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "manga",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "user_update",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "username",
                        "orig" => "username",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/users/{username}/userupdates",
                  "parts" => [
                    "users",
                    "{username}",
                    "userupdates",
                  ],
                  "select" => {
                    "exist" => [
                      "username",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "user",
              ],
            ],
          },
        },
        "watch_episode" => {
          "fields" => [
            {
              "name" => "data",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "pagination",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "watch_episode",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/watch/episodes",
                  "parts" => [
                    "watch",
                    "episodes",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/watch/episodes/popular",
                  "parts" => [
                    "watch",
                    "episodes",
                    "popular",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "watch_promo" => {
          "fields" => [
            {
              "name" => "data",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "pagination",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "watch_promo",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/watch/promos",
                  "parts" => [
                    "watch",
                    "promos",
                  ],
                  "select" => {
                    "exist" => [
                      "page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/watch/promos/popular",
                  "parts" => [
                    "watch",
                    "promos",
                    "popular",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    JikanRestFeatures.make_feature(name)
  end
end
