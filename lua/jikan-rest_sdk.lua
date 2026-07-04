-- JikanRest SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local JikanRestSDK = {}
JikanRestSDK.__index = JikanRestSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

JikanRestSDK._make_feature = _make_feature


function JikanRestSDK.new(options)
  local self = setmetatable({}, JikanRestSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features from config.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local feature_items = vs.items(feature_opts)
    if feature_items ~= nil then
      for _, item in ipairs(feature_items) do
        local fname = item[1]
        local fopts = helpers.to_map(item[2])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

  -- #BuildFeatures

  return self
end


function JikanRestSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function JikanRestSDK:get_utility()
  return Utility.copy(self._utility)
end


function JikanRestSDK:get_root_ctx()
  return self._rootctx
end


function JikanRestSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


function JikanRestSDK:direct(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end



-- Idiomatic facade: client:anime():list() / client:anime():load({ id = ... })
function JikanRestSDK:anime(data)
  local EntityMod = require("entity.anime_entity")
  if data == nil then
    if self._anime == nil then
      self._anime = EntityMod.new(self, nil)
    end
    return self._anime
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:anime() instead.
function JikanRestSDK:Anime(data)
  local EntityMod = require("entity.anime_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:character():list() / client:character():load({ id = ... })
function JikanRestSDK:character(data)
  local EntityMod = require("entity.character_entity")
  if data == nil then
    if self._character == nil then
      self._character = EntityMod.new(self, nil)
    end
    return self._character
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:character() instead.
function JikanRestSDK:Character(data)
  local EntityMod = require("entity.character_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:club():list() / client:club():load({ id = ... })
function JikanRestSDK:club(data)
  local EntityMod = require("entity.club_entity")
  if data == nil then
    if self._club == nil then
      self._club = EntityMod.new(self, nil)
    end
    return self._club
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:club() instead.
function JikanRestSDK:Club(data)
  local EntityMod = require("entity.club_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:external():list() / client:external():load({ id = ... })
function JikanRestSDK:external(data)
  local EntityMod = require("entity.external_entity")
  if data == nil then
    if self._external == nil then
      self._external = EntityMod.new(self, nil)
    end
    return self._external
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:external() instead.
function JikanRestSDK:External(data)
  local EntityMod = require("entity.external_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:genre():list() / client:genre():load({ id = ... })
function JikanRestSDK:genre(data)
  local EntityMod = require("entity.genre_entity")
  if data == nil then
    if self._genre == nil then
      self._genre = EntityMod.new(self, nil)
    end
    return self._genre
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:genre() instead.
function JikanRestSDK:Genre(data)
  local EntityMod = require("entity.genre_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:magazine():list() / client:magazine():load({ id = ... })
function JikanRestSDK:magazine(data)
  local EntityMod = require("entity.magazine_entity")
  if data == nil then
    if self._magazine == nil then
      self._magazine = EntityMod.new(self, nil)
    end
    return self._magazine
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:magazine() instead.
function JikanRestSDK:Magazine(data)
  local EntityMod = require("entity.magazine_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:manga():list() / client:manga():load({ id = ... })
function JikanRestSDK:manga(data)
  local EntityMod = require("entity.manga_entity")
  if data == nil then
    if self._manga == nil then
      self._manga = EntityMod.new(self, nil)
    end
    return self._manga
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:manga() instead.
function JikanRestSDK:Manga(data)
  local EntityMod = require("entity.manga_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:people_search():list() / client:people_search():load({ id = ... })
function JikanRestSDK:people_search(data)
  local EntityMod = require("entity.people_search_entity")
  if data == nil then
    if self._people_search == nil then
      self._people_search = EntityMod.new(self, nil)
    end
    return self._people_search
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:people_search() instead.
function JikanRestSDK:PeopleSearch(data)
  local EntityMod = require("entity.people_search_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:person():list() / client:person():load({ id = ... })
function JikanRestSDK:person(data)
  local EntityMod = require("entity.person_entity")
  if data == nil then
    if self._person == nil then
      self._person = EntityMod.new(self, nil)
    end
    return self._person
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:person() instead.
function JikanRestSDK:Person(data)
  local EntityMod = require("entity.person_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:producer():list() / client:producer():load({ id = ... })
function JikanRestSDK:producer(data)
  local EntityMod = require("entity.producer_entity")
  if data == nil then
    if self._producer == nil then
      self._producer = EntityMod.new(self, nil)
    end
    return self._producer
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:producer() instead.
function JikanRestSDK:Producer(data)
  local EntityMod = require("entity.producer_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:random():list() / client:random():load({ id = ... })
function JikanRestSDK:random(data)
  local EntityMod = require("entity.random_entity")
  if data == nil then
    if self._random == nil then
      self._random = EntityMod.new(self, nil)
    end
    return self._random
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:random() instead.
function JikanRestSDK:Random(data)
  local EntityMod = require("entity.random_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:recommendation():list() / client:recommendation():load({ id = ... })
function JikanRestSDK:recommendation(data)
  local EntityMod = require("entity.recommendation_entity")
  if data == nil then
    if self._recommendation == nil then
      self._recommendation = EntityMod.new(self, nil)
    end
    return self._recommendation
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:recommendation() instead.
function JikanRestSDK:Recommendation(data)
  local EntityMod = require("entity.recommendation_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:review():list() / client:review():load({ id = ... })
function JikanRestSDK:review(data)
  local EntityMod = require("entity.review_entity")
  if data == nil then
    if self._review == nil then
      self._review = EntityMod.new(self, nil)
    end
    return self._review
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:review() instead.
function JikanRestSDK:Review(data)
  local EntityMod = require("entity.review_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:schedule():list() / client:schedule():load({ id = ... })
function JikanRestSDK:schedule(data)
  local EntityMod = require("entity.schedule_entity")
  if data == nil then
    if self._schedule == nil then
      self._schedule = EntityMod.new(self, nil)
    end
    return self._schedule
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:schedule() instead.
function JikanRestSDK:Schedule(data)
  local EntityMod = require("entity.schedule_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:season():list() / client:season():load({ id = ... })
function JikanRestSDK:season(data)
  local EntityMod = require("entity.season_entity")
  if data == nil then
    if self._season == nil then
      self._season = EntityMod.new(self, nil)
    end
    return self._season
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:season() instead.
function JikanRestSDK:Season(data)
  local EntityMod = require("entity.season_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:top():list() / client:top():load({ id = ... })
function JikanRestSDK:top(data)
  local EntityMod = require("entity.top_entity")
  if data == nil then
    if self._top == nil then
      self._top = EntityMod.new(self, nil)
    end
    return self._top
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:top() instead.
function JikanRestSDK:Top(data)
  local EntityMod = require("entity.top_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:user():list() / client:user():load({ id = ... })
function JikanRestSDK:user(data)
  local EntityMod = require("entity.user_entity")
  if data == nil then
    if self._user == nil then
      self._user = EntityMod.new(self, nil)
    end
    return self._user
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:user() instead.
function JikanRestSDK:User(data)
  local EntityMod = require("entity.user_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:user_about():list() / client:user_about():load({ id = ... })
function JikanRestSDK:user_about(data)
  local EntityMod = require("entity.user_about_entity")
  if data == nil then
    if self._user_about == nil then
      self._user_about = EntityMod.new(self, nil)
    end
    return self._user_about
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:user_about() instead.
function JikanRestSDK:UserAbout(data)
  local EntityMod = require("entity.user_about_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:user_club():list() / client:user_club():load({ id = ... })
function JikanRestSDK:user_club(data)
  local EntityMod = require("entity.user_club_entity")
  if data == nil then
    if self._user_club == nil then
      self._user_club = EntityMod.new(self, nil)
    end
    return self._user_club
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:user_club() instead.
function JikanRestSDK:UserClub(data)
  local EntityMod = require("entity.user_club_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:user_friend():list() / client:user_friend():load({ id = ... })
function JikanRestSDK:user_friend(data)
  local EntityMod = require("entity.user_friend_entity")
  if data == nil then
    if self._user_friend == nil then
      self._user_friend = EntityMod.new(self, nil)
    end
    return self._user_friend
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:user_friend() instead.
function JikanRestSDK:UserFriend(data)
  local EntityMod = require("entity.user_friend_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:user_history():list() / client:user_history():load({ id = ... })
function JikanRestSDK:user_history(data)
  local EntityMod = require("entity.user_history_entity")
  if data == nil then
    if self._user_history == nil then
      self._user_history = EntityMod.new(self, nil)
    end
    return self._user_history
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:user_history() instead.
function JikanRestSDK:UserHistory(data)
  local EntityMod = require("entity.user_history_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:user_statistic():list() / client:user_statistic():load({ id = ... })
function JikanRestSDK:user_statistic(data)
  local EntityMod = require("entity.user_statistic_entity")
  if data == nil then
    if self._user_statistic == nil then
      self._user_statistic = EntityMod.new(self, nil)
    end
    return self._user_statistic
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:user_statistic() instead.
function JikanRestSDK:UserStatistic(data)
  local EntityMod = require("entity.user_statistic_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:user_update():list() / client:user_update():load({ id = ... })
function JikanRestSDK:user_update(data)
  local EntityMod = require("entity.user_update_entity")
  if data == nil then
    if self._user_update == nil then
      self._user_update = EntityMod.new(self, nil)
    end
    return self._user_update
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:user_update() instead.
function JikanRestSDK:UserUpdate(data)
  local EntityMod = require("entity.user_update_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:watch_episode():list() / client:watch_episode():load({ id = ... })
function JikanRestSDK:watch_episode(data)
  local EntityMod = require("entity.watch_episode_entity")
  if data == nil then
    if self._watch_episode == nil then
      self._watch_episode = EntityMod.new(self, nil)
    end
    return self._watch_episode
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:watch_episode() instead.
function JikanRestSDK:WatchEpisode(data)
  local EntityMod = require("entity.watch_episode_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:watch_promo():list() / client:watch_promo():load({ id = ... })
function JikanRestSDK:watch_promo(data)
  local EntityMod = require("entity.watch_promo_entity")
  if data == nil then
    if self._watch_promo == nil then
      self._watch_promo = EntityMod.new(self, nil)
    end
    return self._watch_promo
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:watch_promo() instead.
function JikanRestSDK:WatchPromo(data)
  local EntityMod = require("entity.watch_promo_entity")
  return EntityMod.new(self, data)
end




function JikanRestSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = JikanRestSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return JikanRestSDK
