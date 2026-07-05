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

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
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


  # Canonical facade: client.Anime.list / client.Anime.load({ "id" => ... })
  def Anime(data = nil)
    require_relative 'entity/anime_entity'
    AnimeEntity.new(self, data)
  end


  # Canonical facade: client.Character.list / client.Character.load({ "id" => ... })
  def Character(data = nil)
    require_relative 'entity/character_entity'
    CharacterEntity.new(self, data)
  end


  # Canonical facade: client.Club.list / client.Club.load({ "id" => ... })
  def Club(data = nil)
    require_relative 'entity/club_entity'
    ClubEntity.new(self, data)
  end


  # Canonical facade: client.External.list / client.External.load({ "id" => ... })
  def External(data = nil)
    require_relative 'entity/external_entity'
    ExternalEntity.new(self, data)
  end


  # Canonical facade: client.Genre.list / client.Genre.load({ "id" => ... })
  def Genre(data = nil)
    require_relative 'entity/genre_entity'
    GenreEntity.new(self, data)
  end


  # Canonical facade: client.Magazine.list / client.Magazine.load({ "id" => ... })
  def Magazine(data = nil)
    require_relative 'entity/magazine_entity'
    MagazineEntity.new(self, data)
  end


  # Canonical facade: client.Manga.list / client.Manga.load({ "id" => ... })
  def Manga(data = nil)
    require_relative 'entity/manga_entity'
    MangaEntity.new(self, data)
  end


  # Canonical facade: client.PeopleSearch.list / client.PeopleSearch.load({ "id" => ... })
  def PeopleSearch(data = nil)
    require_relative 'entity/people_search_entity'
    PeopleSearchEntity.new(self, data)
  end


  # Canonical facade: client.Person.list / client.Person.load({ "id" => ... })
  def Person(data = nil)
    require_relative 'entity/person_entity'
    PersonEntity.new(self, data)
  end


  # Canonical facade: client.Producer.list / client.Producer.load({ "id" => ... })
  def Producer(data = nil)
    require_relative 'entity/producer_entity'
    ProducerEntity.new(self, data)
  end


  # Canonical facade: client.Random.list / client.Random.load({ "id" => ... })
  def Random(data = nil)
    require_relative 'entity/random_entity'
    RandomEntity.new(self, data)
  end


  # Canonical facade: client.Recommendation.list / client.Recommendation.load({ "id" => ... })
  def Recommendation(data = nil)
    require_relative 'entity/recommendation_entity'
    RecommendationEntity.new(self, data)
  end


  # Canonical facade: client.Review.list / client.Review.load({ "id" => ... })
  def Review(data = nil)
    require_relative 'entity/review_entity'
    ReviewEntity.new(self, data)
  end


  # Canonical facade: client.Schedule.list / client.Schedule.load({ "id" => ... })
  def Schedule(data = nil)
    require_relative 'entity/schedule_entity'
    ScheduleEntity.new(self, data)
  end


  # Canonical facade: client.Season.list / client.Season.load({ "id" => ... })
  def Season(data = nil)
    require_relative 'entity/season_entity'
    SeasonEntity.new(self, data)
  end


  # Canonical facade: client.Top.list / client.Top.load({ "id" => ... })
  def Top(data = nil)
    require_relative 'entity/top_entity'
    TopEntity.new(self, data)
  end


  # Canonical facade: client.User.list / client.User.load({ "id" => ... })
  def User(data = nil)
    require_relative 'entity/user_entity'
    UserEntity.new(self, data)
  end


  # Canonical facade: client.UserAbout.list / client.UserAbout.load({ "id" => ... })
  def UserAbout(data = nil)
    require_relative 'entity/user_about_entity'
    UserAboutEntity.new(self, data)
  end


  # Canonical facade: client.UserClub.list / client.UserClub.load({ "id" => ... })
  def UserClub(data = nil)
    require_relative 'entity/user_club_entity'
    UserClubEntity.new(self, data)
  end


  # Canonical facade: client.UserFriend.list / client.UserFriend.load({ "id" => ... })
  def UserFriend(data = nil)
    require_relative 'entity/user_friend_entity'
    UserFriendEntity.new(self, data)
  end


  # Canonical facade: client.UserHistory.list / client.UserHistory.load({ "id" => ... })
  def UserHistory(data = nil)
    require_relative 'entity/user_history_entity'
    UserHistoryEntity.new(self, data)
  end


  # Canonical facade: client.UserStatistic.list / client.UserStatistic.load({ "id" => ... })
  def UserStatistic(data = nil)
    require_relative 'entity/user_statistic_entity'
    UserStatisticEntity.new(self, data)
  end


  # Canonical facade: client.UserUpdate.list / client.UserUpdate.load({ "id" => ... })
  def UserUpdate(data = nil)
    require_relative 'entity/user_update_entity'
    UserUpdateEntity.new(self, data)
  end


  # Canonical facade: client.WatchEpisode.list / client.WatchEpisode.load({ "id" => ... })
  def WatchEpisode(data = nil)
    require_relative 'entity/watch_episode_entity'
    WatchEpisodeEntity.new(self, data)
  end


  # Canonical facade: client.WatchPromo.list / client.WatchPromo.load({ "id" => ... })
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
