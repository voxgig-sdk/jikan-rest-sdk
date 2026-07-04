# JikanRest SDK

from utility.voxgig_struct import voxgig_struct as vs
from core.utility_type import JikanRestUtility
from core.spec import JikanRestSpec
from core import helpers

# Load utility registration (populates Utility._registrar)
from utility import register

# Load features
from feature.base_feature import JikanRestBaseFeature
from features import _make_feature


class JikanRestSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = JikanRestUtility()
        self._utility = utility

        from config import make_config
        config = make_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features from config.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        if feature_opts is not None:
            feature_items = vs.items(feature_opts)
            if feature_items is not None:
                for item in feature_items:
                    fname = item[0]
                    fopts = helpers.to_map(item[1])
                    if fopts is not None and fopts.get("active") is True:
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        extend = vs.getprop(self.options, "extend")
        if isinstance(extend, list):
            for f in extend:
                if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                    utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return JikanRestUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = JikanRestSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    def direct(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }


    @property
    def anime(self):
        """Idiomatic facade: client.anime.list() / client.anime.load({"id": ...})."""
        from entity.anime_entity import AnimeEntity
        cached = getattr(self, "_anime", None)
        if cached is None:
            cached = AnimeEntity(self, None)
            self._anime = cached
        return cached

    def Anime(self, data=None):
        # Deprecated: use client.anime instead.
        from entity.anime_entity import AnimeEntity
        return AnimeEntity(self, data)


    @property
    def character(self):
        """Idiomatic facade: client.character.list() / client.character.load({"id": ...})."""
        from entity.character_entity import CharacterEntity
        cached = getattr(self, "_character", None)
        if cached is None:
            cached = CharacterEntity(self, None)
            self._character = cached
        return cached

    def Character(self, data=None):
        # Deprecated: use client.character instead.
        from entity.character_entity import CharacterEntity
        return CharacterEntity(self, data)


    @property
    def club(self):
        """Idiomatic facade: client.club.list() / client.club.load({"id": ...})."""
        from entity.club_entity import ClubEntity
        cached = getattr(self, "_club", None)
        if cached is None:
            cached = ClubEntity(self, None)
            self._club = cached
        return cached

    def Club(self, data=None):
        # Deprecated: use client.club instead.
        from entity.club_entity import ClubEntity
        return ClubEntity(self, data)


    @property
    def external(self):
        """Idiomatic facade: client.external.list() / client.external.load({"id": ...})."""
        from entity.external_entity import ExternalEntity
        cached = getattr(self, "_external", None)
        if cached is None:
            cached = ExternalEntity(self, None)
            self._external = cached
        return cached

    def External(self, data=None):
        # Deprecated: use client.external instead.
        from entity.external_entity import ExternalEntity
        return ExternalEntity(self, data)


    @property
    def genre(self):
        """Idiomatic facade: client.genre.list() / client.genre.load({"id": ...})."""
        from entity.genre_entity import GenreEntity
        cached = getattr(self, "_genre", None)
        if cached is None:
            cached = GenreEntity(self, None)
            self._genre = cached
        return cached

    def Genre(self, data=None):
        # Deprecated: use client.genre instead.
        from entity.genre_entity import GenreEntity
        return GenreEntity(self, data)


    @property
    def magazine(self):
        """Idiomatic facade: client.magazine.list() / client.magazine.load({"id": ...})."""
        from entity.magazine_entity import MagazineEntity
        cached = getattr(self, "_magazine", None)
        if cached is None:
            cached = MagazineEntity(self, None)
            self._magazine = cached
        return cached

    def Magazine(self, data=None):
        # Deprecated: use client.magazine instead.
        from entity.magazine_entity import MagazineEntity
        return MagazineEntity(self, data)


    @property
    def manga(self):
        """Idiomatic facade: client.manga.list() / client.manga.load({"id": ...})."""
        from entity.manga_entity import MangaEntity
        cached = getattr(self, "_manga", None)
        if cached is None:
            cached = MangaEntity(self, None)
            self._manga = cached
        return cached

    def Manga(self, data=None):
        # Deprecated: use client.manga instead.
        from entity.manga_entity import MangaEntity
        return MangaEntity(self, data)


    @property
    def people_search(self):
        """Idiomatic facade: client.people_search.list() / client.people_search.load({"id": ...})."""
        from entity.people_search_entity import PeopleSearchEntity
        cached = getattr(self, "_people_search", None)
        if cached is None:
            cached = PeopleSearchEntity(self, None)
            self._people_search = cached
        return cached

    def PeopleSearch(self, data=None):
        # Deprecated: use client.people_search instead.
        from entity.people_search_entity import PeopleSearchEntity
        return PeopleSearchEntity(self, data)


    @property
    def person(self):
        """Idiomatic facade: client.person.list() / client.person.load({"id": ...})."""
        from entity.person_entity import PersonEntity
        cached = getattr(self, "_person", None)
        if cached is None:
            cached = PersonEntity(self, None)
            self._person = cached
        return cached

    def Person(self, data=None):
        # Deprecated: use client.person instead.
        from entity.person_entity import PersonEntity
        return PersonEntity(self, data)


    @property
    def producer(self):
        """Idiomatic facade: client.producer.list() / client.producer.load({"id": ...})."""
        from entity.producer_entity import ProducerEntity
        cached = getattr(self, "_producer", None)
        if cached is None:
            cached = ProducerEntity(self, None)
            self._producer = cached
        return cached

    def Producer(self, data=None):
        # Deprecated: use client.producer instead.
        from entity.producer_entity import ProducerEntity
        return ProducerEntity(self, data)


    @property
    def random(self):
        """Idiomatic facade: client.random.list() / client.random.load({"id": ...})."""
        from entity.random_entity import RandomEntity
        cached = getattr(self, "_random", None)
        if cached is None:
            cached = RandomEntity(self, None)
            self._random = cached
        return cached

    def Random(self, data=None):
        # Deprecated: use client.random instead.
        from entity.random_entity import RandomEntity
        return RandomEntity(self, data)


    @property
    def recommendation(self):
        """Idiomatic facade: client.recommendation.list() / client.recommendation.load({"id": ...})."""
        from entity.recommendation_entity import RecommendationEntity
        cached = getattr(self, "_recommendation", None)
        if cached is None:
            cached = RecommendationEntity(self, None)
            self._recommendation = cached
        return cached

    def Recommendation(self, data=None):
        # Deprecated: use client.recommendation instead.
        from entity.recommendation_entity import RecommendationEntity
        return RecommendationEntity(self, data)


    @property
    def review(self):
        """Idiomatic facade: client.review.list() / client.review.load({"id": ...})."""
        from entity.review_entity import ReviewEntity
        cached = getattr(self, "_review", None)
        if cached is None:
            cached = ReviewEntity(self, None)
            self._review = cached
        return cached

    def Review(self, data=None):
        # Deprecated: use client.review instead.
        from entity.review_entity import ReviewEntity
        return ReviewEntity(self, data)


    @property
    def schedule(self):
        """Idiomatic facade: client.schedule.list() / client.schedule.load({"id": ...})."""
        from entity.schedule_entity import ScheduleEntity
        cached = getattr(self, "_schedule", None)
        if cached is None:
            cached = ScheduleEntity(self, None)
            self._schedule = cached
        return cached

    def Schedule(self, data=None):
        # Deprecated: use client.schedule instead.
        from entity.schedule_entity import ScheduleEntity
        return ScheduleEntity(self, data)


    @property
    def season(self):
        """Idiomatic facade: client.season.list() / client.season.load({"id": ...})."""
        from entity.season_entity import SeasonEntity
        cached = getattr(self, "_season", None)
        if cached is None:
            cached = SeasonEntity(self, None)
            self._season = cached
        return cached

    def Season(self, data=None):
        # Deprecated: use client.season instead.
        from entity.season_entity import SeasonEntity
        return SeasonEntity(self, data)


    @property
    def top(self):
        """Idiomatic facade: client.top.list() / client.top.load({"id": ...})."""
        from entity.top_entity import TopEntity
        cached = getattr(self, "_top", None)
        if cached is None:
            cached = TopEntity(self, None)
            self._top = cached
        return cached

    def Top(self, data=None):
        # Deprecated: use client.top instead.
        from entity.top_entity import TopEntity
        return TopEntity(self, data)


    @property
    def user(self):
        """Idiomatic facade: client.user.list() / client.user.load({"id": ...})."""
        from entity.user_entity import UserEntity
        cached = getattr(self, "_user", None)
        if cached is None:
            cached = UserEntity(self, None)
            self._user = cached
        return cached

    def User(self, data=None):
        # Deprecated: use client.user instead.
        from entity.user_entity import UserEntity
        return UserEntity(self, data)


    @property
    def user_about(self):
        """Idiomatic facade: client.user_about.list() / client.user_about.load({"id": ...})."""
        from entity.user_about_entity import UserAboutEntity
        cached = getattr(self, "_user_about", None)
        if cached is None:
            cached = UserAboutEntity(self, None)
            self._user_about = cached
        return cached

    def UserAbout(self, data=None):
        # Deprecated: use client.user_about instead.
        from entity.user_about_entity import UserAboutEntity
        return UserAboutEntity(self, data)


    @property
    def user_club(self):
        """Idiomatic facade: client.user_club.list() / client.user_club.load({"id": ...})."""
        from entity.user_club_entity import UserClubEntity
        cached = getattr(self, "_user_club", None)
        if cached is None:
            cached = UserClubEntity(self, None)
            self._user_club = cached
        return cached

    def UserClub(self, data=None):
        # Deprecated: use client.user_club instead.
        from entity.user_club_entity import UserClubEntity
        return UserClubEntity(self, data)


    @property
    def user_friend(self):
        """Idiomatic facade: client.user_friend.list() / client.user_friend.load({"id": ...})."""
        from entity.user_friend_entity import UserFriendEntity
        cached = getattr(self, "_user_friend", None)
        if cached is None:
            cached = UserFriendEntity(self, None)
            self._user_friend = cached
        return cached

    def UserFriend(self, data=None):
        # Deprecated: use client.user_friend instead.
        from entity.user_friend_entity import UserFriendEntity
        return UserFriendEntity(self, data)


    @property
    def user_history(self):
        """Idiomatic facade: client.user_history.list() / client.user_history.load({"id": ...})."""
        from entity.user_history_entity import UserHistoryEntity
        cached = getattr(self, "_user_history", None)
        if cached is None:
            cached = UserHistoryEntity(self, None)
            self._user_history = cached
        return cached

    def UserHistory(self, data=None):
        # Deprecated: use client.user_history instead.
        from entity.user_history_entity import UserHistoryEntity
        return UserHistoryEntity(self, data)


    @property
    def user_statistic(self):
        """Idiomatic facade: client.user_statistic.list() / client.user_statistic.load({"id": ...})."""
        from entity.user_statistic_entity import UserStatisticEntity
        cached = getattr(self, "_user_statistic", None)
        if cached is None:
            cached = UserStatisticEntity(self, None)
            self._user_statistic = cached
        return cached

    def UserStatistic(self, data=None):
        # Deprecated: use client.user_statistic instead.
        from entity.user_statistic_entity import UserStatisticEntity
        return UserStatisticEntity(self, data)


    @property
    def user_update(self):
        """Idiomatic facade: client.user_update.list() / client.user_update.load({"id": ...})."""
        from entity.user_update_entity import UserUpdateEntity
        cached = getattr(self, "_user_update", None)
        if cached is None:
            cached = UserUpdateEntity(self, None)
            self._user_update = cached
        return cached

    def UserUpdate(self, data=None):
        # Deprecated: use client.user_update instead.
        from entity.user_update_entity import UserUpdateEntity
        return UserUpdateEntity(self, data)


    @property
    def watch_episode(self):
        """Idiomatic facade: client.watch_episode.list() / client.watch_episode.load({"id": ...})."""
        from entity.watch_episode_entity import WatchEpisodeEntity
        cached = getattr(self, "_watch_episode", None)
        if cached is None:
            cached = WatchEpisodeEntity(self, None)
            self._watch_episode = cached
        return cached

    def WatchEpisode(self, data=None):
        # Deprecated: use client.watch_episode instead.
        from entity.watch_episode_entity import WatchEpisodeEntity
        return WatchEpisodeEntity(self, data)


    @property
    def watch_promo(self):
        """Idiomatic facade: client.watch_promo.list() / client.watch_promo.load({"id": ...})."""
        from entity.watch_promo_entity import WatchPromoEntity
        cached = getattr(self, "_watch_promo", None)
        if cached is None:
            cached = WatchPromoEntity(self, None)
            self._watch_promo = cached
        return cached

    def WatchPromo(self, data=None):
        # Deprecated: use client.watch_promo instead.
        from entity.watch_promo_entity import WatchPromoEntity
        return WatchPromoEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None):
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk
