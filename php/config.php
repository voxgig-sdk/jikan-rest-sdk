<?php
declare(strict_types=1);

// JikanRest SDK configuration

class JikanRestConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "JikanRest",
                "slug" => "jikan-rest",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://api.jikan.moe/v4",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "anime" => [],
                    "character" => [],
                    "club" => [],
                    "external" => [],
                    "genre" => [],
                    "magazine" => [],
                    "manga" => [],
                    "people_search" => [],
                    "person" => [],
                    "producer" => [],
                    "random" => [],
                    "recommendation" => [],
                    "review" => [],
                    "schedule" => [],
                    "season" => [],
                    "top" => [],
                    "user" => [],
                    "user_about" => [],
                    "user_club" => [],
                    "user_friend" => [],
                    "user_history" => [],
                    "user_statistic" => [],
                    "user_update" => [],
                    "watch_episode" => [],
                    "watch_promo" => [],
                ],
            ],
            "entity" => [
        'anime' => [
          'fields' => [
            [
              'name' => 'aired',
              'short' => 'Aired Date ISO8601',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'airing',
              'short' => 'Airing boolean',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'approved',
              'short' => 'Whether the entry is pending approval on MAL or not',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'author_url',
              'short' => 'Author Profile URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'author_username',
              'short' => 'Author MyAnimeList Username',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'background',
              'short' => 'Background',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'broadcast',
              'short' => 'Broadcast Details',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'character',
              'short' => 'Character details',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'comments',
              'short' => 'Comment count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'completed',
              'short' => 'Number of users who have completed the resource',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'data',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'date',
              'short' => 'Post Date ISO8601',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'demographics',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'dropped',
              'short' => 'Number of users who have dropped the resource',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'duration',
              'short' => 'Episode duration in seconds',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'endings',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'entry',
              'short' => 'Related entries',
              'type' => '`$OBJECT`',
              'union' => [
                'branches' => 2,
                'count' => 1,
                'depth' => 0,
              ],
            ],
            [
              'name' => 'episodes',
              'short' => 'Episode count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'explicit_genres',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'external',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'favorites',
              'short' => 'Number of users who have favorited this entry',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'filler',
              'short' => 'Filler episode',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'genres',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'images',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'last_comment',
              'short' => 'Last comment details',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'licensors',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'mal_id',
              'short' => 'MyAnimeList ID',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'members',
              'short' => 'Number of users who have added this entry to their list',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'moreinfo',
              'short' => 'Additional information on the entry',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'music_videos',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'on_hold',
              'short' => 'Number of users who have put the resource on hold',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'openings',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'pagination',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'person',
              'short' => 'Person details',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'plan_to_watch',
              'short' => 'Number of users who have planned to watch the resource',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'popularity',
              'short' => 'Popularity',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'positions',
              'short' => 'Staff Positions',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'producers',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'promo',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'rank',
              'short' => 'Ranking',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'rating',
              'short' => 'Anime audience rating',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'recap',
              'short' => 'Recap episode',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'relation',
              'short' => 'Relation type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'relations',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'role',
              'short' => 'Character\'s Role',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'score',
              'short' => 'Score',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'scored_by',
              'short' => 'Number of users',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'scores',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'season',
              'short' => 'Season',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'source',
              'short' => 'Original Material/Source adapted from',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'short' => 'Airing status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'streaming',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'studios',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'synopsis',
              'short' => 'Episode Synopsis',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'theme',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'themes',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'title',
              'short' => 'Title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title_english',
              'short' => 'English Title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title_japanese',
              'short' => 'Title Japanese',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title_romanji',
              'short' => 'title_romanji',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title_synonyms',
              'short' => 'Other Titles',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'titles',
              'short' => 'All titles',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'total',
              'short' => 'Total number of users who have the resource added to their lists',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'trailer',
              'short' => 'Youtube Details',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'type',
              'short' => 'Anime Type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'MyAnimeList URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'voice_actors',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'watching',
              'short' => 'Number of users watching the resource',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'year',
              'short' => 'Year',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'anime',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'end_date',
                        'orig' => 'end_date',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'genre',
                        'orig' => 'genre',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'genres_exclude',
                        'orig' => 'genres_exclude',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'letter',
                        'orig' => 'letter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'max_score',
                        'orig' => 'max_score',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'min_score',
                        'orig' => 'min_score',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'order_by',
                        'orig' => 'order_by',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'producer',
                        'orig' => 'producer',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'rating',
                        'orig' => 'rating',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'score',
                        'orig' => 'score',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sfw',
                        'orig' => 'sfw',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'start_date',
                        'orig' => 'start_date',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'unapproved',
                        'orig' => 'unapproved',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime',
                  'parts' => [
                    'anime',
                  ],
                  'select' => [
                    'exist' => [
                      'end_date',
                      'genre',
                      'genres_exclude',
                      'letter',
                      'limit',
                      'max_score',
                      'min_score',
                      'order_by',
                      'page',
                      'producer',
                      'q',
                      'rating',
                      'score',
                      'sfw',
                      'sort',
                      'start_date',
                      'status',
                      'type',
                      'unapproved',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'rating',
                        'orig' => 'rating',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sfw',
                        'orig' => 'sfw',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/top/anime',
                  'parts' => [
                    'top',
                    'anime',
                  ],
                  'select' => [
                    'exist' => [
                      'filter',
                      'limit',
                      'page',
                      'rating',
                      'sfw',
                      'type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'preliminary',
                        'orig' => 'preliminary',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'spoiler',
                        'orig' => 'spoiler',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/reviews',
                  'parts' => [
                    'anime',
                    '{id}',
                    'reviews',
                  ],
                  'select' => [
                    '$action' => 'review',
                    'exist' => [
                      'id',
                      'page',
                      'preliminary',
                      'spoiler',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/episodes',
                  'parts' => [
                    'anime',
                    '{id}',
                    'episodes',
                  ],
                  'select' => [
                    '$action' => 'episode',
                    'exist' => [
                      'id',
                      'page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/forum',
                  'parts' => [
                    'anime',
                    '{id}',
                    'forum',
                  ],
                  'select' => [
                    '$action' => 'forum',
                    'exist' => [
                      'filter',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/news',
                  'parts' => [
                    'anime',
                    '{id}',
                    'news',
                  ],
                  'select' => [
                    '$action' => 'new',
                    'exist' => [
                      'id',
                      'page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/userupdates',
                  'parts' => [
                    'anime',
                    '{id}',
                    'userupdates',
                  ],
                  'select' => [
                    '$action' => 'userupdate',
                    'exist' => [
                      'id',
                      'page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/videos/episodes',
                  'parts' => [
                    'anime',
                    '{id}',
                    'videos',
                    'episodes',
                  ],
                  'select' => [
                    '$action' => 'video_episode',
                    'exist' => [
                      'id',
                      'page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/characters',
                  'parts' => [
                    'anime',
                    '{id}',
                    'characters',
                  ],
                  'select' => [
                    '$action' => 'character',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/external',
                  'parts' => [
                    'anime',
                    '{id}',
                    'external',
                  ],
                  'select' => [
                    '$action' => 'external',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/pictures',
                  'parts' => [
                    'anime',
                    '{id}',
                    'pictures',
                  ],
                  'select' => [
                    '$action' => 'picture',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/recommendations',
                  'parts' => [
                    'anime',
                    '{id}',
                    'recommendations',
                  ],
                  'select' => [
                    '$action' => 'recommendation',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/relations',
                  'parts' => [
                    'anime',
                    '{id}',
                    'relations',
                  ],
                  'select' => [
                    '$action' => 'relation',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/staff',
                  'parts' => [
                    'anime',
                    '{id}',
                    'staff',
                  ],
                  'select' => [
                    '$action' => 'staff',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/streaming',
                  'parts' => [
                    'anime',
                    '{id}',
                    'streaming',
                  ],
                  'select' => [
                    '$action' => 'streaming',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'episode',
                        'orig' => 'episode',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/episodes/{episode}',
                  'parts' => [
                    'anime',
                    '{id}',
                    'episodes',
                    '{episode}',
                  ],
                  'select' => [
                    'exist' => [
                      'episode',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}',
                  'parts' => [
                    'anime',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/full',
                  'parts' => [
                    'anime',
                    '{id}',
                    'full',
                  ],
                  'select' => [
                    '$action' => 'full',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/moreinfo',
                  'parts' => [
                    'anime',
                    '{id}',
                    'moreinfo',
                  ],
                  'select' => [
                    '$action' => 'moreinfo',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/statistics',
                  'parts' => [
                    'anime',
                    '{id}',
                    'statistics',
                  ],
                  'select' => [
                    '$action' => 'statistic',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/themes',
                  'parts' => [
                    'anime',
                    '{id}',
                    'themes',
                  ],
                  'select' => [
                    '$action' => 'theme',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/anime/{id}/videos',
                  'parts' => [
                    'anime',
                    '{id}',
                    'videos',
                  ],
                  'select' => [
                    '$action' => 'video',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'episode',
              ],
            ],
          ],
        ],
        'character' => [
          'fields' => [
            [
              'name' => 'about',
              'short' => 'Biography',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'anime',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'data',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'favorites',
              'short' => 'Number of users who have favorited this entry',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'image_url',
              'short' => 'Default JPG Image Size URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'images',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'language',
              'short' => 'Character\'s Role',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'large_image_url',
              'short' => 'Large JPG Image Size URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'mal_id',
              'short' => 'MyAnimeList ID',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'manga',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'name',
              'short' => 'Name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name_kanji',
              'short' => 'Name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'nicknames',
              'short' => 'Other Names',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'pagination',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'person',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'role',
              'short' => 'Character\'s Role',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'MyAnimeList URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'voices',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'character',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'letter',
                        'orig' => 'letter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'order_by',
                        'orig' => 'order_by',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characters',
                  'parts' => [
                    'characters',
                  ],
                  'select' => [
                    'exist' => [
                      'letter',
                      'limit',
                      'order_by',
                      'page',
                      'q',
                      'sort',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/top/characters',
                  'parts' => [
                    'top',
                    'characters',
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characters/{id}/anime',
                  'parts' => [
                    'characters',
                    '{id}',
                    'anime',
                  ],
                  'select' => [
                    '$action' => 'anime',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characters/{id}/manga',
                  'parts' => [
                    'characters',
                    '{id}',
                    'manga',
                  ],
                  'select' => [
                    '$action' => 'manga',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characters/{id}/pictures',
                  'parts' => [
                    'characters',
                    '{id}',
                    'pictures',
                  ],
                  'select' => [
                    '$action' => 'picture',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characters/{id}/voices',
                  'parts' => [
                    'characters',
                    '{id}',
                    'voices',
                  ],
                  'select' => [
                    '$action' => 'voice',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characters/{id}',
                  'parts' => [
                    'characters',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characters/{id}/full',
                  'parts' => [
                    'characters',
                    '{id}',
                    'full',
                  ],
                  'select' => [
                    '$action' => 'full',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'club' => [
          'fields' => [
            [
              'name' => 'access',
              'short' => 'Club access',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'anime',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'category',
              'short' => 'Club Category',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'characters',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'created',
              'short' => 'Date Created ISO8601',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'data',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'images',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'mal_id',
              'short' => 'MyAnimeList ID',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'manga',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'members',
              'short' => 'Number of club members',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'name',
              'short' => 'Club name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'pagination',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'url',
              'short' => 'Club URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'username',
              'short' => 'User\'s username',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'club',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'category',
                        'orig' => 'category',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'letter',
                        'orig' => 'letter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'order_by',
                        'orig' => 'order_by',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/clubs',
                  'parts' => [
                    'clubs',
                  ],
                  'select' => [
                    'exist' => [
                      'category',
                      'letter',
                      'limit',
                      'order_by',
                      'page',
                      'q',
                      'sort',
                      'type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/clubs/{id}/members',
                  'parts' => [
                    'clubs',
                    '{id}',
                    'members',
                  ],
                  'select' => [
                    '$action' => 'member',
                    'exist' => [
                      'id',
                      'page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/clubs/{id}/staff',
                  'parts' => [
                    'clubs',
                    '{id}',
                    'staff',
                  ],
                  'select' => [
                    '$action' => 'staff',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/clubs/{id}',
                  'parts' => [
                    'clubs',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/clubs/{id}/relations',
                  'parts' => [
                    'clubs',
                    '{id}',
                    'relations',
                  ],
                  'select' => [
                    '$action' => 'relation',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'external' => [
          'fields' => [
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'external',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'username',
                        'orig' => 'username',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/users/{username}/external',
                  'parts' => [
                    'users',
                    '{username}',
                    'external',
                  ],
                  'select' => [
                    'exist' => [
                      'username',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'user',
              ],
            ],
          ],
        ],
        'genre' => [
          'fields' => [
            [
              'name' => 'count',
              'short' => 'Genre\'s entry count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'mal_id',
              'short' => 'MyAnimeList ID',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'name',
              'short' => 'Genre Name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'MyAnimeList URL',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'genre',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/genres/anime',
                  'parts' => [
                    'genres',
                    'anime',
                  ],
                  'select' => [
                    '$action' => 'anime',
                    'exist' => [
                      'filter',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/genres/manga',
                  'parts' => [
                    'genres',
                    'manga',
                  ],
                  'select' => [
                    '$action' => 'manga',
                    'exist' => [
                      'filter',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'magazine' => [
          'fields' => [
            [
              'name' => 'data',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'pagination',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'magazine',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'letter',
                        'orig' => 'letter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'order_by',
                        'orig' => 'order_by',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/magazines',
                  'parts' => [
                    'magazines',
                  ],
                  'select' => [
                    'exist' => [
                      'letter',
                      'limit',
                      'order_by',
                      'page',
                      'q',
                      'sort',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'manga' => [
          'fields' => [
            [
              'name' => 'approved',
              'short' => 'Whether the entry is pending approval on MAL or not',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'author_url',
              'short' => 'Author Profile URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'author_username',
              'short' => 'Author MyAnimeList Username',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'authors',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'background',
              'short' => 'Background',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'chapters',
              'short' => 'Chapter count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'character',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'comments',
              'short' => 'Comment count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'completed',
              'short' => 'Number of users who have completed the resource',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'data',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'date',
              'short' => 'Post Date ISO8601',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'demographics',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'dropped',
              'short' => 'Number of users who have dropped the resource',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'entry',
              'short' => 'Related entries',
              'type' => '`$OBJECT`',
              'union' => [
                'branches' => 2,
                'count' => 1,
                'depth' => 0,
              ],
            ],
            [
              'name' => 'explicit_genres',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'external',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'favorites',
              'short' => 'Number of users who have favorited this entry',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'genres',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'images',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'jpg',
              'short' => 'Available images in JPG',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'last_comment',
              'short' => 'Last comment details',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'mal_id',
              'short' => 'MyAnimeList ID',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'members',
              'short' => 'Number of users who have added this entry to their list',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'moreinfo',
              'short' => 'Additional information on the entry',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'on_hold',
              'short' => 'Number of users who have put the resource on hold',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'pagination',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'plan_to_read',
              'short' => 'Number of users who have planned to read the resource',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'popularity',
              'short' => 'Popularity',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'published',
              'short' => 'Date range',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'publishing',
              'short' => 'Publishing boolean',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'rank',
              'short' => 'Ranking',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'reading',
              'short' => 'Number of users reading the resource',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'relation',
              'short' => 'Relation type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'relations',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'role',
              'short' => 'Character\'s Role',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'score',
              'short' => 'Score',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'scored_by',
              'short' => 'Number of users',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'scores',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'serializations',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'status',
              'short' => 'Publishing status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'synopsis',
              'short' => 'Synopsis',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'themes',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'title',
              'short' => 'Title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title_english',
              'short' => 'English Title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title_japanese',
              'short' => 'Japanese Title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title_synonyms',
              'short' => 'Other Titles',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'titles',
              'short' => 'All Titles',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'total',
              'short' => 'Total number of users who have the resource added to their lists',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'type',
              'short' => 'Manga Type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'MyAnimeList URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'volumes',
              'short' => 'Volume count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'webp',
              'short' => 'Available images in WEBP',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'manga',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'end_date',
                        'orig' => 'end_date',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'genre',
                        'orig' => 'genre',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'genres_exclude',
                        'orig' => 'genres_exclude',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'letter',
                        'orig' => 'letter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'magazine',
                        'orig' => 'magazine',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'max_score',
                        'orig' => 'max_score',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'min_score',
                        'orig' => 'min_score',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'order_by',
                        'orig' => 'order_by',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'score',
                        'orig' => 'score',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sfw',
                        'orig' => 'sfw',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'start_date',
                        'orig' => 'start_date',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'unapproved',
                        'orig' => 'unapproved',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/manga',
                  'parts' => [
                    'manga',
                  ],
                  'select' => [
                    'exist' => [
                      'end_date',
                      'genre',
                      'genres_exclude',
                      'letter',
                      'limit',
                      'magazine',
                      'max_score',
                      'min_score',
                      'order_by',
                      'page',
                      'q',
                      'score',
                      'sfw',
                      'sort',
                      'start_date',
                      'status',
                      'type',
                      'unapproved',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/top/manga',
                  'parts' => [
                    'top',
                    'manga',
                  ],
                  'select' => [
                    'exist' => [
                      'filter',
                      'limit',
                      'page',
                      'type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'preliminary',
                        'orig' => 'preliminary',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'spoiler',
                        'orig' => 'spoiler',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/manga/{id}/reviews',
                  'parts' => [
                    'manga',
                    '{id}',
                    'reviews',
                  ],
                  'select' => [
                    '$action' => 'review',
                    'exist' => [
                      'id',
                      'page',
                      'preliminary',
                      'spoiler',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/manga/{id}/forum',
                  'parts' => [
                    'manga',
                    '{id}',
                    'forum',
                  ],
                  'select' => [
                    '$action' => 'forum',
                    'exist' => [
                      'filter',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/manga/{id}/news',
                  'parts' => [
                    'manga',
                    '{id}',
                    'news',
                  ],
                  'select' => [
                    '$action' => 'new',
                    'exist' => [
                      'id',
                      'page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/manga/{id}/userupdates',
                  'parts' => [
                    'manga',
                    '{id}',
                    'userupdates',
                  ],
                  'select' => [
                    '$action' => 'userupdate',
                    'exist' => [
                      'id',
                      'page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/manga/{id}/characters',
                  'parts' => [
                    'manga',
                    '{id}',
                    'characters',
                  ],
                  'select' => [
                    '$action' => 'character',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/manga/{id}/external',
                  'parts' => [
                    'manga',
                    '{id}',
                    'external',
                  ],
                  'select' => [
                    '$action' => 'external',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/manga/{id}/pictures',
                  'parts' => [
                    'manga',
                    '{id}',
                    'pictures',
                  ],
                  'select' => [
                    '$action' => 'picture',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/manga/{id}/recommendations',
                  'parts' => [
                    'manga',
                    '{id}',
                    'recommendations',
                  ],
                  'select' => [
                    '$action' => 'recommendation',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/manga/{id}/relations',
                  'parts' => [
                    'manga',
                    '{id}',
                    'relations',
                  ],
                  'select' => [
                    '$action' => 'relation',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/manga/{id}',
                  'parts' => [
                    'manga',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/manga/{id}/full',
                  'parts' => [
                    'manga',
                    '{id}',
                    'full',
                  ],
                  'select' => [
                    '$action' => 'full',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/manga/{id}/moreinfo',
                  'parts' => [
                    'manga',
                    '{id}',
                    'moreinfo',
                  ],
                  'select' => [
                    '$action' => 'moreinfo',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/manga/{id}/statistics',
                  'parts' => [
                    'manga',
                    '{id}',
                    'statistics',
                  ],
                  'select' => [
                    '$action' => 'statistic',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'people_search' => [
          'fields' => [
            [
              'name' => 'data',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'pagination',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'people_search',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/top/people',
                  'parts' => [
                    'top',
                    'people',
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'person' => [
          'fields' => [
            [
              'name' => 'about',
              'short' => 'Biography',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'alternate_names',
              'short' => 'Other Names',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'anime',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'birthday',
              'short' => 'Birthday Date ISO8601',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'character',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'data',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'family_name',
              'short' => 'Family Name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'favorites',
              'short' => 'Number of users who have favorited this entry',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'given_name',
              'short' => 'Given Name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'images',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'jpg',
              'short' => 'Available images in JPG',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'mal_id',
              'short' => 'MyAnimeList ID',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'manga',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'name',
              'short' => 'Name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'pagination',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'position',
              'short' => 'Person\'s position',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'role',
              'short' => 'Person\'s Character\'s role in the anime',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'MyAnimeList URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'voices',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'website_url',
              'short' => 'Person\'s website URL',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'person',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'letter',
                        'orig' => 'letter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'order_by',
                        'orig' => 'order_by',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/people',
                  'parts' => [
                    'people',
                  ],
                  'select' => [
                    'exist' => [
                      'letter',
                      'limit',
                      'order_by',
                      'page',
                      'q',
                      'sort',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/people/{id}/anime',
                  'parts' => [
                    'people',
                    '{id}',
                    'anime',
                  ],
                  'select' => [
                    '$action' => 'anime',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/people/{id}/manga',
                  'parts' => [
                    'people',
                    '{id}',
                    'manga',
                  ],
                  'select' => [
                    '$action' => 'manga',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/people/{id}/pictures',
                  'parts' => [
                    'people',
                    '{id}',
                    'pictures',
                  ],
                  'select' => [
                    '$action' => 'picture',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/people/{id}/voices',
                  'parts' => [
                    'people',
                    '{id}',
                    'voices',
                  ],
                  'select' => [
                    '$action' => 'voice',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/people/{id}',
                  'parts' => [
                    'people',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/people/{id}/full',
                  'parts' => [
                    'people',
                    '{id}',
                    'full',
                  ],
                  'select' => [
                    '$action' => 'full',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'producer' => [
          'fields' => [
            [
              'name' => 'about',
              'short' => 'About the Producer',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'count',
              'short' => 'Producers\'s anime count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'data',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'established',
              'short' => 'Established Date ISO8601',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'external',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'favorites',
              'short' => 'Producers\'s member favorites count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'images',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'mal_id',
              'short' => 'MyAnimeList ID',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'pagination',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'titles',
              'short' => 'All titles',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'url',
              'short' => 'MyAnimeList URL',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'producer',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'letter',
                        'orig' => 'letter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'order_by',
                        'orig' => 'order_by',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/producers',
                  'parts' => [
                    'producers',
                  ],
                  'select' => [
                    'exist' => [
                      'letter',
                      'limit',
                      'order_by',
                      'page',
                      'q',
                      'sort',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/producers/{id}/external',
                  'parts' => [
                    'producers',
                    '{id}',
                    'external',
                  ],
                  'select' => [
                    '$action' => 'external',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/producers/{id}',
                  'parts' => [
                    'producers',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/producers/{id}/full',
                  'parts' => [
                    'producers',
                    '{id}',
                    'full',
                  ],
                  'select' => [
                    '$action' => 'full',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'random' => [
          'fields' => [
            [
              'name' => 'about',
              'short' => 'Biography',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'aired',
              'short' => 'Date range',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'airing',
              'short' => 'Airing boolean',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'alternate_names',
              'short' => 'Other Names',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'approved',
              'short' => 'Whether the entry is pending approval on MAL or not',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'authors',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'background',
              'short' => 'Background',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'birthday',
              'short' => 'Birthday Date ISO8601',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'broadcast',
              'short' => 'Broadcast Details',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'chapters',
              'short' => 'Chapter count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'demographics',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'duration',
              'short' => 'Parsed raw duration',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'episodes',
              'short' => 'Episode count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'explicit_genres',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'family_name',
              'short' => 'Family Name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'favorites',
              'short' => 'Number of users who have favorited this entry',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'gender',
              'short' => 'User Gender',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'genres',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'given_name',
              'short' => 'Given Name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'images',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'joined',
              'short' => 'Joined Date ISO8601',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'last_online',
              'short' => 'Last Online Date ISO8601',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'licensors',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'location',
              'short' => 'Location',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'mal_id',
              'short' => 'MyAnimeList ID',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'members',
              'short' => 'Number of users who have added this entry to their list',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'name',
              'short' => 'Name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name_kanji',
              'short' => 'Name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'nicknames',
              'short' => 'Other Names',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'popularity',
              'short' => 'Popularity',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'producers',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'published',
              'short' => 'Date range',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'publishing',
              'short' => 'Publishing boolean',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'rank',
              'short' => 'Ranking',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'rating',
              'short' => 'Anime audience rating',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'score',
              'short' => 'Score',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'scored_by',
              'short' => 'Number of users',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'season',
              'short' => 'Season',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'serializations',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'source',
              'short' => 'Original Material/Source adapted from',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'short' => 'Airing status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'studios',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'synopsis',
              'short' => 'Synopsis',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'themes',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'title',
              'short' => 'Title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title_english',
              'short' => 'English Title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title_japanese',
              'short' => 'Japanese Title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title_synonyms',
              'short' => 'Other Titles',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'titles',
              'short' => 'All titles',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'trailer',
              'short' => 'Youtube Details',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'type',
              'short' => 'Anime Type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'MyAnimeList URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'username',
              'short' => 'MyAnimeList Username',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'volumes',
              'short' => 'Volume count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'website_url',
              'short' => 'Person\'s website URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'year',
              'short' => 'Year',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'random',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/random/anime',
                  'parts' => [
                    'random',
                    'anime',
                  ],
                  'select' => [
                    '$action' => 'anime',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/random/characters',
                  'parts' => [
                    'random',
                    'characters',
                  ],
                  'select' => [
                    '$action' => 'character',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/random/manga',
                  'parts' => [
                    'random',
                    'manga',
                  ],
                  'select' => [
                    '$action' => 'manga',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/random/people',
                  'parts' => [
                    'random',
                    'people',
                  ],
                  'select' => [
                    '$action' => 'person',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/random/users',
                  'parts' => [
                    'random',
                    'users',
                  ],
                  'select' => [
                    '$action' => 'user',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'recommendation' => [
          'fields' => [
            [
              'name' => 'data',
              'type' => '`$ARRAY`',
              'union' => [
                'branches' => 2,
                'count' => 1,
                'depth' => 4,
              ],
            ],
            [
              'name' => 'pagination',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'recommendation',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'username',
                        'orig' => 'username',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/users/{username}/recommendations',
                  'parts' => [
                    'users',
                    '{username}',
                    'recommendations',
                  ],
                  'select' => [
                    'exist' => [
                      'page',
                      'username',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/recommendations/anime',
                  'parts' => [
                    'recommendations',
                    'anime',
                  ],
                  'select' => [
                    '$action' => 'anime',
                    'exist' => [
                      'page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/recommendations/manga',
                  'parts' => [
                    'recommendations',
                    'manga',
                  ],
                  'select' => [
                    '$action' => 'manga',
                    'exist' => [
                      'page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'user',
              ],
            ],
          ],
        ],
        'review' => [
          'fields' => [],
          'name' => 'review',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'preliminary',
                        'orig' => 'preliminary',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'spoiler',
                        'orig' => 'spoiler',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/reviews/anime',
                  'parts' => [
                    'reviews',
                    'anime',
                  ],
                  'select' => [
                    '$action' => 'anime',
                    'exist' => [
                      'page',
                      'preliminary',
                      'spoiler',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'preliminary',
                        'orig' => 'preliminary',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'spoiler',
                        'orig' => 'spoiler',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/reviews/manga',
                  'parts' => [
                    'reviews',
                    'manga',
                  ],
                  'select' => [
                    '$action' => 'manga',
                    'exist' => [
                      'page',
                      'preliminary',
                      'spoiler',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'schedule' => [
          'fields' => [
            [
              'name' => 'data',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'pagination',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'schedule',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'kid',
                        'orig' => 'kid',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sfw',
                        'orig' => 'sfw',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'unapproved',
                        'orig' => 'unapproved',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/schedules',
                  'parts' => [
                    'schedules',
                  ],
                  'select' => [
                    'exist' => [
                      'filter',
                      'kid',
                      'limit',
                      'page',
                      'sfw',
                      'unapproved',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'season' => [
          'fields' => [
            [
              'name' => 'data',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'pagination',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'seasons',
              'short' => 'List of available seasons',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'year',
              'short' => 'Year',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'season',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'continuing',
                        'orig' => 'continuing',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sfw',
                        'orig' => 'sfw',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'unapproved',
                        'orig' => 'unapproved',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/seasons/now',
                  'parts' => [
                    'seasons',
                    'now',
                  ],
                  'select' => [
                    '$action' => 'now',
                    'exist' => [
                      'continuing',
                      'filter',
                      'limit',
                      'page',
                      'sfw',
                      'unapproved',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'continuing',
                        'orig' => 'continuing',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sfw',
                        'orig' => 'sfw',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'unapproved',
                        'orig' => 'unapproved',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/seasons/upcoming',
                  'parts' => [
                    'seasons',
                    'upcoming',
                  ],
                  'select' => [
                    '$action' => 'upcoming',
                    'exist' => [
                      'continuing',
                      'filter',
                      'limit',
                      'page',
                      'sfw',
                      'unapproved',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/seasons',
                  'parts' => [
                    'seasons',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'season',
                        'orig' => 'season',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'year',
                        'orig' => 'year',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'continuing',
                        'orig' => 'continuing',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sfw',
                        'orig' => 'sfw',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'unapproved',
                        'orig' => 'unapproved',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/seasons/{year}/{season}',
                  'parts' => [
                    'seasons',
                    '{year}',
                    '{season}',
                  ],
                  'select' => [
                    'exist' => [
                      'continuing',
                      'filter',
                      'limit',
                      'page',
                      'season',
                      'sfw',
                      'unapproved',
                      'year',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'season',
              ],
            ],
          ],
        ],
        'top' => [
          'fields' => [
            [
              'name' => 'data',
              'type' => '`$ARRAY`',
              'union' => [
                'branches' => 2,
                'count' => 1,
                'depth' => 1,
              ],
            ],
            [
              'name' => 'pagination',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'top',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'preliminary',
                        'orig' => 'preliminary',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'spoiler',
                        'orig' => 'spoiler',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/top/reviews',
                  'parts' => [
                    'top',
                    'reviews',
                  ],
                  'select' => [
                    '$action' => 'review',
                    'exist' => [
                      'page',
                      'preliminary',
                      'spoiler',
                      'type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'user' => [
          'fields' => [
            [
              'name' => 'anime',
              'short' => 'Favorite Anime',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'birthday',
              'short' => 'Birthday Date ISO8601',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'characters',
              'short' => 'Favorite Characters',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'data',
              'type' => '`$ARRAY`',
              'union' => [
                'branches' => 2,
                'count' => 1,
                'depth' => 1,
              ],
            ],
            [
              'name' => 'external',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'gender',
              'short' => 'User Gender',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'images',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'joined',
              'short' => 'Joined Date ISO8601',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'last_online',
              'short' => 'Last Online Date ISO8601',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'location',
              'short' => 'Location',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'mal_id',
              'short' => 'MyAnimeList ID',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'manga',
              'short' => 'Favorite Manga',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'pagination',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'people',
              'short' => 'Favorite People',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'statistics',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'url',
              'short' => 'MyAnimeList URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'username',
              'short' => 'MyAnimeList Username',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'user',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'gender',
                        'orig' => 'gender',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'location',
                        'orig' => 'location',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'max_age',
                        'orig' => 'max_age',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'min_age',
                        'orig' => 'min_age',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/users',
                  'parts' => [
                    'users',
                  ],
                  'select' => [
                    'exist' => [
                      'gender',
                      'limit',
                      'location',
                      'max_age',
                      'min_age',
                      'page',
                      'q',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'username',
                        'orig' => 'username',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/users/{username}/animelist',
                  'parts' => [
                    'users',
                    '{username}',
                    'animelist',
                  ],
                  'select' => [
                    '$action' => 'animelist',
                    'exist' => [
                      'status',
                      'username',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'username',
                        'orig' => 'username',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/users/{username}/mangalist',
                  'parts' => [
                    'users',
                    '{username}',
                    'mangalist',
                  ],
                  'select' => [
                    '$action' => 'mangalist',
                    'exist' => [
                      'status',
                      'username',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'username',
                        'orig' => 'username',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/users/{username}/reviews',
                  'parts' => [
                    'users',
                    '{username}',
                    'reviews',
                  ],
                  'select' => [
                    '$action' => 'review',
                    'exist' => [
                      'page',
                      'username',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/users/userbyid/{id}',
                  'parts' => [
                    'users',
                    'userbyid',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'username',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/users/{username}',
                  'parts' => [
                    'users',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'username' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'username',
                        'orig' => 'username',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/users/{username}/favorites',
                  'parts' => [
                    'users',
                    '{username}',
                    'favorites',
                  ],
                  'select' => [
                    '$action' => 'favorite',
                    'exist' => [
                      'username',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'username',
                        'orig' => 'username',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/users/{username}/full',
                  'parts' => [
                    'users',
                    '{username}',
                    'full',
                  ],
                  'select' => [
                    '$action' => 'full',
                    'exist' => [
                      'username',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'user',
              ],
            ],
          ],
        ],
        'user_about' => [
          'fields' => [
            [
              'name' => 'about',
              'short' => 'User About.',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'user_about',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'username',
                        'orig' => 'username',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/users/{username}/about',
                  'parts' => [
                    'users',
                    '{username}',
                    'about',
                  ],
                  'select' => [
                    'exist' => [
                      'username',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'user',
              ],
            ],
          ],
        ],
        'user_club' => [
          'fields' => [
            [
              'name' => 'data',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'pagination',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'user_club',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'username',
                        'orig' => 'username',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/users/{username}/clubs',
                  'parts' => [
                    'users',
                    '{username}',
                    'clubs',
                  ],
                  'select' => [
                    'exist' => [
                      'page',
                      'username',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'user',
              ],
            ],
          ],
        ],
        'user_friend' => [
          'fields' => [
            [
              'name' => 'data',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'pagination',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'user_friend',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'username',
                        'orig' => 'username',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/users/{username}/friends',
                  'parts' => [
                    'users',
                    '{username}',
                    'friends',
                  ],
                  'select' => [
                    'exist' => [
                      'page',
                      'username',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'user',
              ],
            ],
          ],
        ],
        'user_history' => [
          'fields' => [
            [
              'name' => 'date',
              'short' => 'Date ISO8601',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'entry',
              'short' => 'Parsed URL Data',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'increment',
              'short' => 'Number of episodes/chapters watched/read',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'user_history',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'username',
                        'orig' => 'username',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/users/{username}/history',
                  'parts' => [
                    'users',
                    '{username}',
                    'history',
                  ],
                  'select' => [
                    'exist' => [
                      'type',
                      'username',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'user',
              ],
            ],
          ],
        ],
        'user_statistic' => [
          'fields' => [
            [
              'name' => 'anime',
              'short' => 'Anime Statistics',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'manga',
              'short' => 'Manga Statistics',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'user_statistic',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'username',
                        'orig' => 'username',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/users/{username}/statistics',
                  'parts' => [
                    'users',
                    '{username}',
                    'statistics',
                  ],
                  'select' => [
                    'exist' => [
                      'username',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'user',
              ],
            ],
          ],
        ],
        'user_update' => [
          'fields' => [
            [
              'name' => 'anime',
              'short' => 'Last updated Anime',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'manga',
              'short' => 'Last updated Manga',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'user_update',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'username',
                        'orig' => 'username',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/users/{username}/userupdates',
                  'parts' => [
                    'users',
                    '{username}',
                    'userupdates',
                  ],
                  'select' => [
                    'exist' => [
                      'username',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'user',
              ],
            ],
          ],
        ],
        'watch_episode' => [
          'fields' => [
            [
              'name' => 'data',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'pagination',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'watch_episode',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/watch/episodes',
                  'parts' => [
                    'watch',
                    'episodes',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/watch/episodes/popular',
                  'parts' => [
                    'watch',
                    'episodes',
                    'popular',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'watch_promo' => [
          'fields' => [
            [
              'name' => 'data',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'pagination',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'watch_promo',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/watch/promos',
                  'parts' => [
                    'watch',
                    'promos',
                  ],
                  'select' => [
                    'exist' => [
                      'page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/watch/promos/popular',
                  'parts' => [
                    'watch',
                    'promos',
                    'popular',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return JikanRestFeatures::make_feature($name);
    }
}
