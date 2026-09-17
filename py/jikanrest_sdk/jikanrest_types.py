# Typed models for the JikanRest SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Anime(TypedDict, total=False):
    aired: str
    airing: bool
    approved: bool
    background: str
    broadcast: dict
    data: list
    demographics: list
    duration: int
    episodes: int
    explicit_genres: list
    favorites: int
    filler: bool
    genres: list
    id: str
    images: dict
    licensors: list
    mal_id: int
    members: int
    pagination: dict
    popularity: int
    producers: list
    rank: int
    rating: str
    recap: bool
    score: float
    scored_by: int
    season: str
    source: str
    status: str
    studios: list
    synopsis: str
    themes: list
    title: str
    title_english: str
    title_japanese: str
    title_romanji: str
    title_synonyms: list
    titles: list
    trailer: dict
    type: str
    url: str
    year: int


class AnimeLoadMatchRequired(TypedDict):
    id: int


class AnimeLoadMatch(AnimeLoadMatchRequired, total=False):
    episode: int


class AnimeListMatch(TypedDict, total=False):
    end_date: str
    genre: str
    genres_exclude: str
    letter: str
    limit: int
    max_score: float
    min_score: float
    order_by: str
    page: int
    producer: str
    q: str
    rating: str
    score: float
    sfw: bool
    sort: str
    start_date: str
    status: str
    type: str
    unapproved: bool


class Character(TypedDict, total=False):
    about: str
    data: list
    favorites: int
    id: str
    images: dict
    mal_id: int
    name: str
    name_kanji: str
    nicknames: list
    pagination: dict
    url: str


class CharacterLoadMatch(TypedDict):
    id: int


class CharacterListMatch(TypedDict, total=False):
    letter: str
    limit: int
    order_by: str
    page: int
    q: str
    sort: str


class Club(TypedDict, total=False):
    access: str
    category: str
    created: str
    data: list
    id: str
    images: dict
    mal_id: int
    members: int
    name: str
    pagination: dict
    url: str


class ClubLoadMatch(TypedDict):
    id: int


class ClubListMatch(TypedDict, total=False):
    category: str
    letter: str
    limit: int
    order_by: str
    page: int
    q: str
    sort: str
    type: str


class External(TypedDict, total=False):
    name: str
    url: str


class ExternalListMatch(TypedDict):
    username: str


class Genre(TypedDict, total=False):
    count: int
    mal_id: int
    name: str
    url: str


class GenreListMatch(TypedDict, total=False):
    filter: str


class Magazine(TypedDict, total=False):
    data: list
    pagination: dict


class MagazineListMatch(TypedDict, total=False):
    letter: str
    limit: int
    order_by: str
    page: int
    q: str
    sort: str


class Manga(TypedDict, total=False):
    approved: bool
    authors: list
    background: str
    chapters: int
    data: list
    demographics: list
    explicit_genres: list
    favorites: int
    genres: list
    id: str
    images: dict
    mal_id: int
    members: int
    pagination: dict
    popularity: int
    published: dict
    publishing: bool
    rank: int
    score: float
    scored_by: int
    serializations: list
    status: str
    synopsis: str
    themes: list
    title: str
    title_english: str
    title_japanese: str
    titles: list
    type: str
    url: str
    volumes: int


class MangaLoadMatch(TypedDict):
    id: int


class MangaListMatch(TypedDict, total=False):
    end_date: str
    genre: str
    genres_exclude: str
    letter: str
    limit: int
    magazine: str
    max_score: float
    min_score: float
    order_by: str
    page: int
    q: str
    score: float
    sfw: bool
    sort: str
    start_date: str
    status: str
    type: str
    unapproved: bool


class PeopleSearch(TypedDict, total=False):
    data: list
    pagination: dict


class PeopleSearchListMatch(TypedDict, total=False):
    limit: int
    page: int


class Person(TypedDict, total=False):
    about: str
    alternate_names: list
    birthday: str
    data: list
    family_name: str
    favorites: int
    given_name: str
    id: str
    images: dict
    mal_id: int
    name: str
    pagination: dict
    url: str
    website_url: str


class PersonLoadMatch(TypedDict):
    id: int


class PersonListMatch(TypedDict, total=False):
    letter: str
    limit: int
    order_by: str
    page: int
    q: str
    sort: str


class Producer(TypedDict, total=False):
    about: str
    count: int
    data: list
    established: str
    favorites: int
    id: str
    images: dict
    mal_id: int
    pagination: dict
    titles: list
    url: str


class ProducerLoadMatch(TypedDict):
    id: int


class ProducerListMatch(TypedDict, total=False):
    letter: str
    limit: int
    order_by: str
    page: int
    q: str
    sort: str


class Random(TypedDict):
    pass


class RandomLoadMatch(TypedDict):
    pass


class Recommendation(TypedDict, total=False):
    data: list
    pagination: dict


class RecommendationListMatchRequired(TypedDict):
    username: str


class RecommendationListMatch(RecommendationListMatchRequired, total=False):
    page: int


class Review(TypedDict):
    pass


class ReviewLoadMatch(TypedDict, total=False):
    page: int
    preliminary: bool
    spoiler: bool


class Schedule(TypedDict, total=False):
    data: list
    pagination: dict


class ScheduleListMatch(TypedDict, total=False):
    filter: str
    kid: str
    limit: int
    page: int
    sfw: str
    unapproved: bool


class Season(TypedDict, total=False):
    data: list
    id: str
    pagination: dict
    seasons: list
    year: int


class SeasonLoadMatchRequired(TypedDict):
    season: str
    year: int


class SeasonLoadMatch(SeasonLoadMatchRequired, total=False):
    continuing: bool
    filter: str
    limit: int
    page: int
    sfw: bool
    unapproved: bool


class SeasonListMatch(TypedDict, total=False):
    data: list
    id: str
    pagination: dict
    seasons: list
    year: int


class Top(TypedDict):
    pass


class TopLoadMatch(TypedDict, total=False):
    page: int
    preliminary: bool
    spoiler: bool
    type: str


class User(TypedDict, total=False):
    birthday: str
    data: list
    gender: str
    id: str
    images: dict
    joined: str
    last_online: str
    location: str
    mal_id: int
    pagination: dict
    url: str
    username: str


class UserLoadMatch(TypedDict):
    id: int


class UserListMatch(TypedDict, total=False):
    gender: str
    limit: int
    location: str
    max_age: int
    min_age: int
    page: int
    q: str


class UserAbout(TypedDict, total=False):
    about: str


class UserAboutListMatch(TypedDict):
    username: str


class UserClub(TypedDict, total=False):
    data: list
    pagination: dict


class UserClubListMatchRequired(TypedDict):
    username: str


class UserClubListMatch(UserClubListMatchRequired, total=False):
    page: int


class UserFriend(TypedDict, total=False):
    data: list
    pagination: dict


class UserFriendListMatchRequired(TypedDict):
    username: str


class UserFriendListMatch(UserFriendListMatchRequired, total=False):
    page: int


class UserHistory(TypedDict, total=False):
    date: str
    entry: dict
    increment: int


class UserHistoryListMatchRequired(TypedDict):
    username: str


class UserHistoryListMatch(UserHistoryListMatchRequired, total=False):
    type: str


class UserStatistic(TypedDict, total=False):
    anime: dict
    manga: dict


class UserStatisticLoadMatch(TypedDict):
    username: str


class UserUpdate(TypedDict, total=False):
    anime: list
    manga: list


class UserUpdateLoadMatch(TypedDict):
    username: str


class WatchEpisode(TypedDict, total=False):
    data: list
    pagination: dict


class WatchEpisodeListMatch(TypedDict, total=False):
    data: list
    pagination: dict


class WatchPromo(TypedDict, total=False):
    data: list
    pagination: dict


class WatchPromoListMatch(TypedDict, total=False):
    page: int
