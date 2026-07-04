<?php
declare(strict_types=1);

// Typed models for the JikanRest SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Anime entity data model. */
class Anime
{
    public ?string $author_url = null;
    public ?string $author_username = null;
    public ?array $character = null;
    public ?int $comment = null;
    public ?array $data = null;
    public ?string $date = null;
    public ?array $entry = null;
    public ?array $image = null;
    public ?array $last_comment = null;
    public ?int $mal_id = null;
    public ?string $name = null;
    public ?array $pagination = null;
    public ?array $person = null;
    public ?array $position = null;
    public ?string $relation = null;
    public ?string $role = null;
    public ?string $title = null;
    public ?string $url = null;
    public ?array $voice_actor = null;
}

/** Request payload for Anime#load. */
class AnimeLoadMatch
{
    public int $episode;
    public int $id;
}

/** Request payload for Anime#list. */
class AnimeListMatch
{
    public int $id;
}

/** Character entity data model. */
class Character
{
    public ?array $anime = null;
    public ?array $data = null;
    public ?string $image_url = null;
    public ?string $language = null;
    public ?string $large_image_url = null;
    public ?array $manga = null;
    public ?array $pagination = null;
    public ?array $person = null;
    public ?string $role = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public int $id;
}

/** Request payload for Character#list. */
class CharacterListMatch
{
    public int $id;
}

/** Club entity data model. */
class Club
{
    public ?array $data = null;
    public ?array $pagination = null;
    public ?string $url = null;
    public ?string $username = null;
}

/** Request payload for Club#load. */
class ClubLoadMatch
{
    public int $id;
}

/** Request payload for Club#list. */
class ClubListMatch
{
    public int $id;
}

/** External entity data model. */
class External
{
    public ?string $name = null;
    public ?string $url = null;
}

/** Request payload for External#list. */
class ExternalListMatch
{
    public string $username;
}

/** Genre entity data model. */
class Genre
{
    public ?int $count = null;
    public ?int $mal_id = null;
    public ?string $name = null;
    public ?string $url = null;
}

/** Match filter for Genre#list (any subset of Genre fields). */
class GenreListMatch
{
    public ?int $count = null;
    public ?int $mal_id = null;
    public ?string $name = null;
    public ?string $url = null;
}

/** Magazine entity data model. */
class Magazine
{
    public ?array $data = null;
    public ?array $pagination = null;
}

/** Match filter for Magazine#list (any subset of Magazine fields). */
class MagazineListMatch
{
    public ?array $data = null;
    public ?array $pagination = null;
}

/** Manga entity data model. */
class Manga
{
    public ?string $author_url = null;
    public ?string $author_username = null;
    public ?array $character = null;
    public ?int $comment = null;
    public ?array $data = null;
    public ?string $date = null;
    public ?array $entry = null;
    public ?array $jpg = null;
    public ?array $last_comment = null;
    public ?int $mal_id = null;
    public ?string $name = null;
    public ?array $pagination = null;
    public ?string $relation = null;
    public ?string $role = null;
    public ?string $title = null;
    public ?string $url = null;
    public ?array $webp = null;
}

/** Request payload for Manga#load. */
class MangaLoadMatch
{
    public int $id;
}

/** Request payload for Manga#list. */
class MangaListMatch
{
    public int $id;
}

/** PeopleSearch entity data model. */
class PeopleSearch
{
    public ?array $data = null;
    public ?array $pagination = null;
}

/** Match filter for PeopleSearch#list (any subset of PeopleSearch fields). */
class PeopleSearchListMatch
{
    public ?array $data = null;
    public ?array $pagination = null;
}

/** Person entity data model. */
class Person
{
    public ?array $anime = null;
    public ?array $character = null;
    public ?array $data = null;
    public ?array $jpg = null;
    public ?array $manga = null;
    public ?array $pagination = null;
    public ?string $position = null;
    public ?string $role = null;
}

/** Request payload for Person#load. */
class PersonLoadMatch
{
    public int $id;
}

/** Request payload for Person#list. */
class PersonListMatch
{
    public int $id;
}

/** Producer entity data model. */
class Producer
{
    public ?array $data = null;
    public ?string $name = null;
    public ?array $pagination = null;
    public ?string $url = null;
}

/** Request payload for Producer#load. */
class ProducerLoadMatch
{
    public int $id;
}

/** Request payload for Producer#list. */
class ProducerListMatch
{
    public int $id;
}

/** Random entity data model. */
class Random
{
    public ?array $data = null;
}

/** Match filter for Random#load (any subset of Random fields). */
class RandomLoadMatch
{
    public ?array $data = null;
}

/** Recommendation entity data model. */
class Recommendation
{
    public ?array $data = null;
    public ?array $pagination = null;
}

/** Request payload for Recommendation#list. */
class RecommendationListMatch
{
    public string $username;
}

/** Review entity data model. */
class Review
{
}

/** Match filter for Review#load (any subset of Review fields). */
class ReviewLoadMatch
{
}

/** Schedule entity data model. */
class Schedule
{
    public ?array $data = null;
    public ?array $pagination = null;
}

/** Match filter for Schedule#list (any subset of Schedule fields). */
class ScheduleListMatch
{
    public ?array $data = null;
    public ?array $pagination = null;
}

/** Season entity data model. */
class Season
{
    public ?array $data = null;
    public ?array $pagination = null;
    public ?array $season = null;
    public ?int $year = null;
}

/** Request payload for Season#list. */
class SeasonListMatch
{
    public string $season;
    public int $year;
}

/** Top entity data model. */
class Top
{
    public mixed $data = null;
}

/** Match filter for Top#load (any subset of Top fields). */
class TopLoadMatch
{
    public mixed $data = null;
}

/** User entity data model. */
class User
{
    public mixed $data = null;
    public ?array $pagination = null;
}

/** Request payload for User#load. */
class UserLoadMatch
{
    public string $username;
    public int $id;
}

/** Match filter for User#list (any subset of User fields). */
class UserListMatch
{
    public mixed $data = null;
    public ?array $pagination = null;
}

/** UserAbout entity data model. */
class UserAbout
{
    public ?string $about = null;
}

/** Request payload for UserAbout#list. */
class UserAboutListMatch
{
    public string $username;
}

/** UserClub entity data model. */
class UserClub
{
    public ?array $data = null;
    public ?array $pagination = null;
}

/** Request payload for UserClub#list. */
class UserClubListMatch
{
    public string $username;
}

/** UserFriend entity data model. */
class UserFriend
{
    public ?array $data = null;
    public ?array $pagination = null;
}

/** Request payload for UserFriend#list. */
class UserFriendListMatch
{
    public string $username;
}

/** UserHistory entity data model. */
class UserHistory
{
    public ?string $date = null;
    public ?array $entry = null;
    public ?int $increment = null;
}

/** Request payload for UserHistory#list. */
class UserHistoryListMatch
{
    public string $username;
}

/** UserStatistic entity data model. */
class UserStatistic
{
    public ?array $data = null;
}

/** Request payload for UserStatistic#load. */
class UserStatisticLoadMatch
{
    public string $username;
}

/** UserUpdate entity data model. */
class UserUpdate
{
    public ?array $data = null;
}

/** Request payload for UserUpdate#load. */
class UserUpdateLoadMatch
{
    public string $username;
}

/** WatchEpisode entity data model. */
class WatchEpisode
{
    public ?array $data = null;
    public ?array $pagination = null;
}

/** Match filter for WatchEpisode#list (any subset of WatchEpisode fields). */
class WatchEpisodeListMatch
{
    public ?array $data = null;
    public ?array $pagination = null;
}

/** WatchPromo entity data model. */
class WatchPromo
{
    public ?array $data = null;
    public ?array $pagination = null;
}

/** Match filter for WatchPromo#list (any subset of WatchPromo fields). */
class WatchPromoListMatch
{
    public ?array $data = null;
    public ?array $pagination = null;
}

