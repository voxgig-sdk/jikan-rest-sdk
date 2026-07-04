# Typed models for the JikanRest SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Anime:
    author_url: Optional[str] = None
    author_username: Optional[str] = None
    character: Optional[dict] = None
    comment: Optional[int] = None
    data: Optional[dict] = None
    date: Optional[str] = None
    entry: Optional[dict] = None
    image: Optional[dict] = None
    last_comment: Optional[dict] = None
    mal_id: Optional[int] = None
    name: Optional[str] = None
    pagination: Optional[dict] = None
    person: Optional[dict] = None
    position: Optional[list] = None
    relation: Optional[str] = None
    role: Optional[str] = None
    title: Optional[str] = None
    url: Optional[str] = None
    voice_actor: Optional[list] = None


@dataclass
class AnimeLoadMatch:
    episode: int
    id: int


@dataclass
class AnimeListMatch:
    id: int


@dataclass
class Character:
    anime: Optional[dict] = None
    data: Optional[dict] = None
    image_url: Optional[str] = None
    language: Optional[str] = None
    large_image_url: Optional[str] = None
    manga: Optional[dict] = None
    pagination: Optional[dict] = None
    person: Optional[dict] = None
    role: Optional[str] = None


@dataclass
class CharacterLoadMatch:
    id: int


@dataclass
class CharacterListMatch:
    id: int


@dataclass
class Club:
    data: Optional[dict] = None
    pagination: Optional[dict] = None
    url: Optional[str] = None
    username: Optional[str] = None


@dataclass
class ClubLoadMatch:
    id: int


@dataclass
class ClubListMatch:
    id: int


@dataclass
class External:
    name: Optional[str] = None
    url: Optional[str] = None


@dataclass
class ExternalListMatch:
    username: str


@dataclass
class Genre:
    count: Optional[int] = None
    mal_id: Optional[int] = None
    name: Optional[str] = None
    url: Optional[str] = None


@dataclass
class GenreListMatch:
    count: Optional[int] = None
    mal_id: Optional[int] = None
    name: Optional[str] = None
    url: Optional[str] = None


@dataclass
class Magazine:
    data: Optional[list] = None
    pagination: Optional[dict] = None


@dataclass
class MagazineListMatch:
    data: Optional[list] = None
    pagination: Optional[dict] = None


@dataclass
class Manga:
    author_url: Optional[str] = None
    author_username: Optional[str] = None
    character: Optional[dict] = None
    comment: Optional[int] = None
    data: Optional[dict] = None
    date: Optional[str] = None
    entry: Optional[dict] = None
    jpg: Optional[dict] = None
    last_comment: Optional[dict] = None
    mal_id: Optional[int] = None
    name: Optional[str] = None
    pagination: Optional[dict] = None
    relation: Optional[str] = None
    role: Optional[str] = None
    title: Optional[str] = None
    url: Optional[str] = None
    webp: Optional[dict] = None


@dataclass
class MangaLoadMatch:
    id: int


@dataclass
class MangaListMatch:
    id: int


@dataclass
class PeopleSearch:
    data: Optional[list] = None
    pagination: Optional[dict] = None


@dataclass
class PeopleSearchListMatch:
    data: Optional[list] = None
    pagination: Optional[dict] = None


@dataclass
class Person:
    anime: Optional[dict] = None
    character: Optional[dict] = None
    data: Optional[dict] = None
    jpg: Optional[dict] = None
    manga: Optional[dict] = None
    pagination: Optional[dict] = None
    position: Optional[str] = None
    role: Optional[str] = None


@dataclass
class PersonLoadMatch:
    id: int


@dataclass
class PersonListMatch:
    id: int


@dataclass
class Producer:
    data: Optional[dict] = None
    name: Optional[str] = None
    pagination: Optional[dict] = None
    url: Optional[str] = None


@dataclass
class ProducerLoadMatch:
    id: int


@dataclass
class ProducerListMatch:
    id: int


@dataclass
class Random:
    data: Optional[dict] = None


@dataclass
class RandomLoadMatch:
    data: Optional[dict] = None


@dataclass
class Recommendation:
    data: Optional[list] = None
    pagination: Optional[dict] = None


@dataclass
class RecommendationListMatch:
    username: str


@dataclass
class Review:
    pass


@dataclass
class ReviewLoadMatch:
    pass


@dataclass
class Schedule:
    data: Optional[list] = None
    pagination: Optional[dict] = None


@dataclass
class ScheduleListMatch:
    data: Optional[list] = None
    pagination: Optional[dict] = None


@dataclass
class Season:
    data: Optional[list] = None
    pagination: Optional[dict] = None
    season: Optional[list] = None
    year: Optional[int] = None


@dataclass
class SeasonListMatch:
    season: str
    year: int


@dataclass
class Top:
    data: Optional[Any] = None


@dataclass
class TopLoadMatch:
    data: Optional[Any] = None


@dataclass
class User:
    data: Optional[Any] = None
    pagination: Optional[dict] = None


@dataclass
class UserLoadMatch:
    username: str
    id: int


@dataclass
class UserListMatch:
    data: Optional[Any] = None
    pagination: Optional[dict] = None


@dataclass
class UserAbout:
    about: Optional[str] = None


@dataclass
class UserAboutListMatch:
    username: str


@dataclass
class UserClub:
    data: Optional[list] = None
    pagination: Optional[dict] = None


@dataclass
class UserClubListMatch:
    username: str


@dataclass
class UserFriend:
    data: Optional[list] = None
    pagination: Optional[dict] = None


@dataclass
class UserFriendListMatch:
    username: str


@dataclass
class UserHistory:
    date: Optional[str] = None
    entry: Optional[dict] = None
    increment: Optional[int] = None


@dataclass
class UserHistoryListMatch:
    username: str


@dataclass
class UserStatistic:
    data: Optional[dict] = None


@dataclass
class UserStatisticLoadMatch:
    username: str


@dataclass
class UserUpdate:
    data: Optional[dict] = None


@dataclass
class UserUpdateLoadMatch:
    username: str


@dataclass
class WatchEpisode:
    data: Optional[list] = None
    pagination: Optional[dict] = None


@dataclass
class WatchEpisodeListMatch:
    data: Optional[list] = None
    pagination: Optional[dict] = None


@dataclass
class WatchPromo:
    data: Optional[list] = None
    pagination: Optional[dict] = None


@dataclass
class WatchPromoListMatch:
    data: Optional[list] = None
    pagination: Optional[dict] = None

