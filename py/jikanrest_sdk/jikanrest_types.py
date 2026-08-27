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
    author_url: str
    author_username: str
    background: str
    broadcast: dict
    character: dict
    comments: int
    completed: int
    data: list
    date: str
    demographics: list
    dropped: int
    duration: int
    endings: list
    entry: dict
    episodes: int
    explicit_genres: list
    external: list
    favorites: int
    filler: bool
    genres: list
    id: str
    images: dict
    last_comment: dict
    licensors: list
    mal_id: int
    members: int
    moreinfo: str
    music_videos: list
    name: str
    on_hold: int
    openings: list
    pagination: dict
    person: dict
    plan_to_watch: int
    popularity: int
    positions: list
    producers: list
    promo: list
    rank: int
    rating: str
    recap: bool
    relation: str
    relations: list
    role: str
    score: float
    scored_by: int
    scores: list
    season: str
    source: str
    status: str
    streaming: list
    studios: list
    synopsis: str
    theme: dict
    themes: list
    title: str
    title_english: str
    title_japanese: str
    title_romanji: str
    title_synonyms: list
    titles: list
    total: int
    trailer: dict
    type: str
    url: str
    voice_actors: list
    watching: int
    year: int


class AnimeLoadMatchRequired(TypedDict):
    id: int


class AnimeLoadMatch(AnimeLoadMatchRequired, total=False):
    episode: int


class AnimeListMatch(TypedDict, total=False):
    aired: str
    airing: bool
    approved: bool
    author_url: str
    author_username: str
    background: str
    broadcast: dict
    character: dict
    comments: int
    completed: int
    data: list
    date: str
    demographics: list
    dropped: int
    duration: int
    endings: list
    entry: dict
    episodes: int
    explicit_genres: list
    external: list
    favorites: int
    filler: bool
    genres: list
    id: str
    images: dict
    last_comment: dict
    licensors: list
    mal_id: int
    members: int
    moreinfo: str
    music_videos: list
    name: str
    on_hold: int
    openings: list
    pagination: dict
    person: dict
    plan_to_watch: int
    popularity: int
    positions: list
    producers: list
    promo: list
    rank: int
    rating: str
    recap: bool
    relation: str
    relations: list
    role: str
    score: float
    scored_by: int
    scores: list
    season: str
    source: str
    status: str
    streaming: list
    studios: list
    synopsis: str
    theme: dict
    themes: list
    title: str
    title_english: str
    title_japanese: str
    title_romanji: str
    title_synonyms: list
    titles: list
    total: int
    trailer: dict
    type: str
    url: str
    voice_actors: list
    watching: int
    year: int


class Character(TypedDict, total=False):
    about: str
    anime: list
    data: list
    favorites: int
    id: str
    image_url: str
    images: dict
    language: str
    large_image_url: str
    mal_id: int
    manga: list
    name: str
    name_kanji: str
    nicknames: list
    pagination: dict
    person: dict
    role: str
    url: str
    voices: list


class CharacterLoadMatch(TypedDict):
    id: int


class CharacterListMatch(TypedDict, total=False):
    about: str
    anime: list
    data: list
    favorites: int
    id: str
    image_url: str
    images: dict
    language: str
    large_image_url: str
    mal_id: int
    manga: list
    name: str
    name_kanji: str
    nicknames: list
    pagination: dict
    person: dict
    role: str
    url: str
    voices: list


class Club(TypedDict, total=False):
    access: str
    anime: list
    category: str
    characters: list
    created: str
    data: list
    id: str
    images: dict
    mal_id: int
    manga: list
    members: int
    name: str
    pagination: dict
    url: str
    username: str


class ClubLoadMatch(TypedDict):
    id: int


class ClubListMatch(TypedDict, total=False):
    access: str
    anime: list
    category: str
    characters: list
    created: str
    data: list
    id: str
    images: dict
    mal_id: int
    manga: list
    members: int
    name: str
    pagination: dict
    url: str
    username: str


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
    count: int
    mal_id: int
    name: str
    url: str


class Magazine(TypedDict, total=False):
    data: list
    pagination: dict


class MagazineListMatch(TypedDict, total=False):
    data: list
    pagination: dict


class Manga(TypedDict, total=False):
    approved: bool
    author_url: str
    author_username: str
    authors: list
    background: str
    chapters: int
    character: dict
    comments: int
    completed: int
    data: list
    date: str
    demographics: list
    dropped: int
    entry: dict
    explicit_genres: list
    external: list
    favorites: int
    genres: list
    id: str
    images: dict
    jpg: dict
    last_comment: dict
    mal_id: int
    members: int
    moreinfo: str
    name: str
    on_hold: int
    pagination: dict
    plan_to_read: int
    popularity: int
    published: dict
    publishing: bool
    rank: int
    reading: int
    relation: str
    relations: list
    role: str
    score: float
    scored_by: int
    scores: list
    serializations: list
    status: str
    synopsis: str
    themes: list
    title: str
    title_english: str
    title_japanese: str
    title_synonyms: list
    titles: list
    total: int
    type: str
    url: str
    volumes: int
    webp: dict


class MangaLoadMatch(TypedDict):
    id: int


class MangaListMatch(TypedDict, total=False):
    approved: bool
    author_url: str
    author_username: str
    authors: list
    background: str
    chapters: int
    character: dict
    comments: int
    completed: int
    data: list
    date: str
    demographics: list
    dropped: int
    entry: dict
    explicit_genres: list
    external: list
    favorites: int
    genres: list
    id: str
    images: dict
    jpg: dict
    last_comment: dict
    mal_id: int
    members: int
    moreinfo: str
    name: str
    on_hold: int
    pagination: dict
    plan_to_read: int
    popularity: int
    published: dict
    publishing: bool
    rank: int
    reading: int
    relation: str
    relations: list
    role: str
    score: float
    scored_by: int
    scores: list
    serializations: list
    status: str
    synopsis: str
    themes: list
    title: str
    title_english: str
    title_japanese: str
    title_synonyms: list
    titles: list
    total: int
    type: str
    url: str
    volumes: int
    webp: dict


class PeopleSearch(TypedDict, total=False):
    data: list
    pagination: dict


class PeopleSearchListMatch(TypedDict, total=False):
    data: list
    pagination: dict


class Person(TypedDict, total=False):
    about: str
    alternate_names: list
    anime: list
    birthday: str
    character: dict
    data: list
    family_name: str
    favorites: int
    given_name: str
    id: str
    images: dict
    jpg: dict
    mal_id: int
    manga: list
    name: str
    pagination: dict
    position: str
    role: str
    url: str
    voices: list
    website_url: str


class PersonLoadMatch(TypedDict):
    id: int


class PersonListMatch(TypedDict, total=False):
    about: str
    alternate_names: list
    anime: list
    birthday: str
    character: dict
    data: list
    family_name: str
    favorites: int
    given_name: str
    id: str
    images: dict
    jpg: dict
    mal_id: int
    manga: list
    name: str
    pagination: dict
    position: str
    role: str
    url: str
    voices: list
    website_url: str


class Producer(TypedDict, total=False):
    about: str
    count: int
    data: list
    established: str
    external: list
    favorites: int
    id: str
    images: dict
    mal_id: int
    name: str
    pagination: dict
    titles: list
    url: str


class ProducerLoadMatch(TypedDict):
    id: int


class ProducerListMatch(TypedDict, total=False):
    about: str
    count: int
    data: list
    established: str
    external: list
    favorites: int
    id: str
    images: dict
    mal_id: int
    name: str
    pagination: dict
    titles: list
    url: str


class Random(TypedDict, total=False):
    about: str
    aired: dict
    airing: bool
    alternate_names: list
    approved: bool
    authors: list
    background: str
    birthday: str
    broadcast: dict
    chapters: int
    demographics: list
    duration: str
    episodes: int
    explicit_genres: list
    family_name: str
    favorites: int
    gender: str
    genres: list
    given_name: str
    images: dict
    joined: str
    last_online: str
    licensors: list
    location: str
    mal_id: int
    members: int
    name: str
    name_kanji: str
    nicknames: list
    popularity: int
    producers: list
    published: dict
    publishing: bool
    rank: int
    rating: str
    score: float
    scored_by: int
    season: str
    serializations: list
    source: str
    status: str
    studios: list
    synopsis: str
    themes: list
    title: str
    title_english: str
    title_japanese: str
    title_synonyms: list
    titles: list
    trailer: dict
    type: str
    url: str
    username: str
    volumes: int
    website_url: str
    year: int


class RandomLoadMatch(TypedDict, total=False):
    about: str
    aired: dict
    airing: bool
    alternate_names: list
    approved: bool
    authors: list
    background: str
    birthday: str
    broadcast: dict
    chapters: int
    demographics: list
    duration: str
    episodes: int
    explicit_genres: list
    family_name: str
    favorites: int
    gender: str
    genres: list
    given_name: str
    images: dict
    joined: str
    last_online: str
    licensors: list
    location: str
    mal_id: int
    members: int
    name: str
    name_kanji: str
    nicknames: list
    popularity: int
    producers: list
    published: dict
    publishing: bool
    rank: int
    rating: str
    score: float
    scored_by: int
    season: str
    serializations: list
    source: str
    status: str
    studios: list
    synopsis: str
    themes: list
    title: str
    title_english: str
    title_japanese: str
    title_synonyms: list
    titles: list
    trailer: dict
    type: str
    url: str
    username: str
    volumes: int
    website_url: str
    year: int


class Recommendation(TypedDict, total=False):
    data: list
    pagination: dict


class RecommendationListMatch(TypedDict):
    username: str


class Review(TypedDict):
    pass


class ReviewLoadMatch(TypedDict):
    pass


class Schedule(TypedDict, total=False):
    data: list
    pagination: dict


class ScheduleListMatch(TypedDict, total=False):
    data: list
    pagination: dict


class Season(TypedDict, total=False):
    data: list
    pagination: dict
    seasons: list
    year: int


class SeasonLoadMatch(TypedDict):
    season: str
    year: int


class SeasonListMatch(TypedDict, total=False):
    data: list
    pagination: dict
    seasons: list
    year: int


class Top(TypedDict, total=False):
    data: list
    pagination: dict


class TopLoadMatch(TypedDict, total=False):
    data: list
    pagination: dict


class User(TypedDict, total=False):
    anime: list
    birthday: str
    characters: list
    data: list
    external: list
    gender: str
    id: str
    images: dict
    joined: str
    last_online: str
    location: str
    mal_id: int
    manga: list
    pagination: dict
    people: list
    statistics: dict
    url: str
    username: str


class UserLoadMatch(TypedDict):
    id: int


class UserListMatch(TypedDict, total=False):
    anime: list
    birthday: str
    characters: list
    data: list
    external: list
    gender: str
    id: str
    images: dict
    joined: str
    last_online: str
    location: str
    mal_id: int
    manga: list
    pagination: dict
    people: list
    statistics: dict
    url: str
    username: str


class UserAbout(TypedDict, total=False):
    about: str


class UserAboutListMatch(TypedDict):
    username: str


class UserClub(TypedDict, total=False):
    data: list
    pagination: dict


class UserClubListMatch(TypedDict):
    username: str


class UserFriend(TypedDict, total=False):
    data: list
    pagination: dict


class UserFriendListMatch(TypedDict):
    username: str


class UserHistory(TypedDict, total=False):
    date: str
    entry: dict
    increment: int


class UserHistoryListMatch(TypedDict):
    username: str


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
    data: list
    pagination: dict
