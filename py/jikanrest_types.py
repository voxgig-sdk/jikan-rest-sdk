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
    author_url: str
    author_username: str
    character: dict
    comment: int
    data: dict
    date: str
    entry: dict
    image: dict
    last_comment: dict
    mal_id: int
    name: str
    pagination: dict
    person: dict
    position: list
    relation: str
    role: str
    title: str
    url: str
    voice_actor: list


class AnimeLoadMatchRequired(TypedDict):
    id: int


class AnimeLoadMatch(AnimeLoadMatchRequired, total=False):
    episode: int


class AnimeListMatch(TypedDict, total=False):
    author_url: str
    author_username: str
    character: dict
    comment: int
    data: dict
    date: str
    entry: dict
    image: dict
    last_comment: dict
    mal_id: int
    name: str
    pagination: dict
    person: dict
    position: list
    relation: str
    role: str
    title: str
    url: str
    voice_actor: list


class Character(TypedDict, total=False):
    anime: dict
    data: dict
    image_url: str
    language: str
    large_image_url: str
    manga: dict
    pagination: dict
    person: dict
    role: str


class CharacterLoadMatch(TypedDict):
    id: int


class CharacterListMatch(TypedDict, total=False):
    anime: dict
    data: dict
    image_url: str
    language: str
    large_image_url: str
    manga: dict
    pagination: dict
    person: dict
    role: str


class Club(TypedDict, total=False):
    data: dict
    pagination: dict
    url: str
    username: str


class ClubLoadMatch(TypedDict):
    id: int


class ClubListMatch(TypedDict, total=False):
    data: dict
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
    author_url: str
    author_username: str
    character: dict
    comment: int
    data: dict
    date: str
    entry: dict
    jpg: dict
    last_comment: dict
    mal_id: int
    name: str
    pagination: dict
    relation: str
    role: str
    title: str
    url: str
    webp: dict


class MangaLoadMatch(TypedDict):
    id: int


class MangaListMatch(TypedDict, total=False):
    author_url: str
    author_username: str
    character: dict
    comment: int
    data: dict
    date: str
    entry: dict
    jpg: dict
    last_comment: dict
    mal_id: int
    name: str
    pagination: dict
    relation: str
    role: str
    title: str
    url: str
    webp: dict


class PeopleSearch(TypedDict, total=False):
    data: list
    pagination: dict


class PeopleSearchListMatch(TypedDict, total=False):
    data: list
    pagination: dict


class Person(TypedDict, total=False):
    anime: dict
    character: dict
    data: dict
    jpg: dict
    manga: dict
    pagination: dict
    position: str
    role: str


class PersonLoadMatch(TypedDict):
    id: int


class PersonListMatch(TypedDict, total=False):
    anime: dict
    character: dict
    data: dict
    jpg: dict
    manga: dict
    pagination: dict
    position: str
    role: str


class Producer(TypedDict, total=False):
    data: dict
    name: str
    pagination: dict
    url: str


class ProducerLoadMatch(TypedDict):
    id: int


class ProducerListMatch(TypedDict, total=False):
    data: dict
    name: str
    pagination: dict
    url: str


class Random(TypedDict, total=False):
    data: dict


class RandomLoadMatch(TypedDict, total=False):
    data: dict


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
    season: list
    year: int


class SeasonListMatch(TypedDict, total=False):
    season: str
    year: int


class Top(TypedDict, total=False):
    data: Any


class TopLoadMatch(TypedDict, total=False):
    data: Any


class User(TypedDict, total=False):
    data: Any
    pagination: dict


class UserLoadMatch(TypedDict):
    id: int


class UserListMatch(TypedDict, total=False):
    data: Any
    pagination: dict


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
    data: dict


class UserStatisticLoadMatch(TypedDict):
    username: str


class UserUpdate(TypedDict, total=False):
    data: dict


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
