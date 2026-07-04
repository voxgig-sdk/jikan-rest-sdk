# JikanRest SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'JikanRest_types'


class JikanRestSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = JikanRestUtility.new
    @_utility = utility

    config = JikanRestConfig.make_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features from config.
    feature_opts = JikanRestHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      items = VoxgigStruct.items(feature_opts)
      if items
        items.each do |item|
          fname = item[0]
          fopts = JikanRestHelpers.to_map(item[1])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, JikanRestFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    JikanRestUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = JikanRestHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = JikanRestHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = JikanRestHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = JikanRestSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    utility.make_fetch_def.call(ctx)
  end

  def direct(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue JikanRestError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = JikanRestHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = JikanRestHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end


  # Idiomatic facade: client.anime.list / client.anime.load({ "id" => ... })
  def anime
    require_relative 'entity/anime_entity'
    @anime ||= AnimeEntity.new(self, nil)
  end

  # Deprecated: use client.anime instead.
  def Anime(data = nil)
    require_relative 'entity/anime_entity'
    AnimeEntity.new(self, data)
  end


  # Idiomatic facade: client.character.list / client.character.load({ "id" => ... })
  def character
    require_relative 'entity/character_entity'
    @character ||= CharacterEntity.new(self, nil)
  end

  # Deprecated: use client.character instead.
  def Character(data = nil)
    require_relative 'entity/character_entity'
    CharacterEntity.new(self, data)
  end


  # Idiomatic facade: client.club.list / client.club.load({ "id" => ... })
  def club
    require_relative 'entity/club_entity'
    @club ||= ClubEntity.new(self, nil)
  end

  # Deprecated: use client.club instead.
  def Club(data = nil)
    require_relative 'entity/club_entity'
    ClubEntity.new(self, data)
  end


  # Idiomatic facade: client.external.list / client.external.load({ "id" => ... })
  def external
    require_relative 'entity/external_entity'
    @external ||= ExternalEntity.new(self, nil)
  end

  # Deprecated: use client.external instead.
  def External(data = nil)
    require_relative 'entity/external_entity'
    ExternalEntity.new(self, data)
  end


  # Idiomatic facade: client.genre.list / client.genre.load({ "id" => ... })
  def genre
    require_relative 'entity/genre_entity'
    @genre ||= GenreEntity.new(self, nil)
  end

  # Deprecated: use client.genre instead.
  def Genre(data = nil)
    require_relative 'entity/genre_entity'
    GenreEntity.new(self, data)
  end


  # Idiomatic facade: client.magazine.list / client.magazine.load({ "id" => ... })
  def magazine
    require_relative 'entity/magazine_entity'
    @magazine ||= MagazineEntity.new(self, nil)
  end

  # Deprecated: use client.magazine instead.
  def Magazine(data = nil)
    require_relative 'entity/magazine_entity'
    MagazineEntity.new(self, data)
  end


  # Idiomatic facade: client.manga.list / client.manga.load({ "id" => ... })
  def manga
    require_relative 'entity/manga_entity'
    @manga ||= MangaEntity.new(self, nil)
  end

  # Deprecated: use client.manga instead.
  def Manga(data = nil)
    require_relative 'entity/manga_entity'
    MangaEntity.new(self, data)
  end


  # Idiomatic facade: client.people_search.list / client.people_search.load({ "id" => ... })
  def people_search
    require_relative 'entity/people_search_entity'
    @people_search ||= PeopleSearchEntity.new(self, nil)
  end

  # Deprecated: use client.people_search instead.
  def PeopleSearch(data = nil)
    require_relative 'entity/people_search_entity'
    PeopleSearchEntity.new(self, data)
  end


  # Idiomatic facade: client.person.list / client.person.load({ "id" => ... })
  def person
    require_relative 'entity/person_entity'
    @person ||= PersonEntity.new(self, nil)
  end

  # Deprecated: use client.person instead.
  def Person(data = nil)
    require_relative 'entity/person_entity'
    PersonEntity.new(self, data)
  end


  # Idiomatic facade: client.producer.list / client.producer.load({ "id" => ... })
  def producer
    require_relative 'entity/producer_entity'
    @producer ||= ProducerEntity.new(self, nil)
  end

  # Deprecated: use client.producer instead.
  def Producer(data = nil)
    require_relative 'entity/producer_entity'
    ProducerEntity.new(self, data)
  end


  # Idiomatic facade: client.random.list / client.random.load({ "id" => ... })
  def random
    require_relative 'entity/random_entity'
    @random ||= RandomEntity.new(self, nil)
  end

  # Deprecated: use client.random instead.
  def Random(data = nil)
    require_relative 'entity/random_entity'
    RandomEntity.new(self, data)
  end


  # Idiomatic facade: client.recommendation.list / client.recommendation.load({ "id" => ... })
  def recommendation
    require_relative 'entity/recommendation_entity'
    @recommendation ||= RecommendationEntity.new(self, nil)
  end

  # Deprecated: use client.recommendation instead.
  def Recommendation(data = nil)
    require_relative 'entity/recommendation_entity'
    RecommendationEntity.new(self, data)
  end


  # Idiomatic facade: client.review.list / client.review.load({ "id" => ... })
  def review
    require_relative 'entity/review_entity'
    @review ||= ReviewEntity.new(self, nil)
  end

  # Deprecated: use client.review instead.
  def Review(data = nil)
    require_relative 'entity/review_entity'
    ReviewEntity.new(self, data)
  end


  # Idiomatic facade: client.schedule.list / client.schedule.load({ "id" => ... })
  def schedule
    require_relative 'entity/schedule_entity'
    @schedule ||= ScheduleEntity.new(self, nil)
  end

  # Deprecated: use client.schedule instead.
  def Schedule(data = nil)
    require_relative 'entity/schedule_entity'
    ScheduleEntity.new(self, data)
  end


  # Idiomatic facade: client.season.list / client.season.load({ "id" => ... })
  def season
    require_relative 'entity/season_entity'
    @season ||= SeasonEntity.new(self, nil)
  end

  # Deprecated: use client.season instead.
  def Season(data = nil)
    require_relative 'entity/season_entity'
    SeasonEntity.new(self, data)
  end


  # Idiomatic facade: client.top.list / client.top.load({ "id" => ... })
  def top
    require_relative 'entity/top_entity'
    @top ||= TopEntity.new(self, nil)
  end

  # Deprecated: use client.top instead.
  def Top(data = nil)
    require_relative 'entity/top_entity'
    TopEntity.new(self, data)
  end


  # Idiomatic facade: client.user.list / client.user.load({ "id" => ... })
  def user
    require_relative 'entity/user_entity'
    @user ||= UserEntity.new(self, nil)
  end

  # Deprecated: use client.user instead.
  def User(data = nil)
    require_relative 'entity/user_entity'
    UserEntity.new(self, data)
  end


  # Idiomatic facade: client.user_about.list / client.user_about.load({ "id" => ... })
  def user_about
    require_relative 'entity/user_about_entity'
    @user_about ||= UserAboutEntity.new(self, nil)
  end

  # Deprecated: use client.user_about instead.
  def UserAbout(data = nil)
    require_relative 'entity/user_about_entity'
    UserAboutEntity.new(self, data)
  end


  # Idiomatic facade: client.user_club.list / client.user_club.load({ "id" => ... })
  def user_club
    require_relative 'entity/user_club_entity'
    @user_club ||= UserClubEntity.new(self, nil)
  end

  # Deprecated: use client.user_club instead.
  def UserClub(data = nil)
    require_relative 'entity/user_club_entity'
    UserClubEntity.new(self, data)
  end


  # Idiomatic facade: client.user_friend.list / client.user_friend.load({ "id" => ... })
  def user_friend
    require_relative 'entity/user_friend_entity'
    @user_friend ||= UserFriendEntity.new(self, nil)
  end

  # Deprecated: use client.user_friend instead.
  def UserFriend(data = nil)
    require_relative 'entity/user_friend_entity'
    UserFriendEntity.new(self, data)
  end


  # Idiomatic facade: client.user_history.list / client.user_history.load({ "id" => ... })
  def user_history
    require_relative 'entity/user_history_entity'
    @user_history ||= UserHistoryEntity.new(self, nil)
  end

  # Deprecated: use client.user_history instead.
  def UserHistory(data = nil)
    require_relative 'entity/user_history_entity'
    UserHistoryEntity.new(self, data)
  end


  # Idiomatic facade: client.user_statistic.list / client.user_statistic.load({ "id" => ... })
  def user_statistic
    require_relative 'entity/user_statistic_entity'
    @user_statistic ||= UserStatisticEntity.new(self, nil)
  end

  # Deprecated: use client.user_statistic instead.
  def UserStatistic(data = nil)
    require_relative 'entity/user_statistic_entity'
    UserStatisticEntity.new(self, data)
  end


  # Idiomatic facade: client.user_update.list / client.user_update.load({ "id" => ... })
  def user_update
    require_relative 'entity/user_update_entity'
    @user_update ||= UserUpdateEntity.new(self, nil)
  end

  # Deprecated: use client.user_update instead.
  def UserUpdate(data = nil)
    require_relative 'entity/user_update_entity'
    UserUpdateEntity.new(self, data)
  end


  # Idiomatic facade: client.watch_episode.list / client.watch_episode.load({ "id" => ... })
  def watch_episode
    require_relative 'entity/watch_episode_entity'
    @watch_episode ||= WatchEpisodeEntity.new(self, nil)
  end

  # Deprecated: use client.watch_episode instead.
  def WatchEpisode(data = nil)
    require_relative 'entity/watch_episode_entity'
    WatchEpisodeEntity.new(self, data)
  end


  # Idiomatic facade: client.watch_promo.list / client.watch_promo.load({ "id" => ... })
  def watch_promo
    require_relative 'entity/watch_promo_entity'
    @watch_promo ||= WatchPromoEntity.new(self, nil)
  end

  # Deprecated: use client.watch_promo instead.
  def WatchPromo(data = nil)
    require_relative 'entity/watch_promo_entity'
    WatchPromoEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = JikanRestSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
