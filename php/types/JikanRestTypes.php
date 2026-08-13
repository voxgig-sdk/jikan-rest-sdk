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
    public ?string $aired = null;
    public ?bool $airing = null;
    public ?bool $approved = null;
    public ?string $author_url = null;
    public ?string $author_username = null;
    public ?string $background = null;
    public ?array $broadcast = null;
    public ?array $character = null;
    public ?int $comments = null;
    public ?int $completed = null;
    public ?array $data = null;
    public ?string $date = null;
    public ?array $demographics = null;
    public ?int $dropped = null;
    public ?int $duration = null;
    public ?array $endings = null;
    public ?array $entry = null;
    public ?int $episodes = null;
    public ?array $explicit_genres = null;
    public ?array $external = null;
    public ?int $favorites = null;
    public ?bool $filler = null;
    public ?array $genres = null;
    public ?array $images = null;
    public ?array $last_comment = null;
    public ?array $licensors = null;
    public ?int $mal_id = null;
    public ?int $members = null;
    public ?string $moreinfo = null;
    public ?array $music_videos = null;
    public ?string $name = null;
    public ?int $on_hold = null;
    public ?array $openings = null;
    public ?array $pagination = null;
    public ?array $person = null;
    public ?int $plan_to_watch = null;
    public ?int $popularity = null;
    public ?array $positions = null;
    public ?array $producers = null;
    public ?array $promo = null;
    public ?int $rank = null;
    public ?string $rating = null;
    public ?bool $recap = null;
    public ?string $relation = null;
    public ?array $relations = null;
    public ?string $role = null;
    public ?float $score = null;
    public ?int $scored_by = null;
    public ?array $scores = null;
    public ?string $season = null;
    public ?string $source = null;
    public ?string $status = null;
    public ?array $streaming = null;
    public ?array $studios = null;
    public ?string $synopsis = null;
    public ?array $theme = null;
    public ?array $themes = null;
    public ?string $title = null;
    public ?string $title_english = null;
    public ?string $title_japanese = null;
    public ?string $title_romanji = null;
    public ?array $title_synonyms = null;
    public ?array $titles = null;
    public ?int $total = null;
    public ?array $trailer = null;
    public ?string $type = null;
    public ?string $url = null;
    public ?array $voice_actors = null;
    public ?int $watching = null;
    public ?int $year = null;
}

/** Request payload for Anime#load. */
class AnimeLoadMatch
{
    public ?int $episode = null;
    public int $id;
}

/** Request payload for Anime#list. */
class AnimeListMatch
{
    public ?string $aired = null;
    public ?bool $airing = null;
    public ?bool $approved = null;
    public ?string $author_url = null;
    public ?string $author_username = null;
    public ?string $background = null;
    public ?array $broadcast = null;
    public ?array $character = null;
    public ?int $comments = null;
    public ?int $completed = null;
    public ?array $data = null;
    public ?string $date = null;
    public ?array $demographics = null;
    public ?int $dropped = null;
    public ?int $duration = null;
    public ?array $endings = null;
    public ?array $entry = null;
    public ?int $episodes = null;
    public ?array $explicit_genres = null;
    public ?array $external = null;
    public ?int $favorites = null;
    public ?bool $filler = null;
    public ?array $genres = null;
    public ?array $images = null;
    public ?array $last_comment = null;
    public ?array $licensors = null;
    public ?int $mal_id = null;
    public ?int $members = null;
    public ?string $moreinfo = null;
    public ?array $music_videos = null;
    public ?string $name = null;
    public ?int $on_hold = null;
    public ?array $openings = null;
    public ?array $pagination = null;
    public ?array $person = null;
    public ?int $plan_to_watch = null;
    public ?int $popularity = null;
    public ?array $positions = null;
    public ?array $producers = null;
    public ?array $promo = null;
    public ?int $rank = null;
    public ?string $rating = null;
    public ?bool $recap = null;
    public ?string $relation = null;
    public ?array $relations = null;
    public ?string $role = null;
    public ?float $score = null;
    public ?int $scored_by = null;
    public ?array $scores = null;
    public ?string $season = null;
    public ?string $source = null;
    public ?string $status = null;
    public ?array $streaming = null;
    public ?array $studios = null;
    public ?string $synopsis = null;
    public ?array $theme = null;
    public ?array $themes = null;
    public ?string $title = null;
    public ?string $title_english = null;
    public ?string $title_japanese = null;
    public ?string $title_romanji = null;
    public ?array $title_synonyms = null;
    public ?array $titles = null;
    public ?int $total = null;
    public ?array $trailer = null;
    public ?string $type = null;
    public ?string $url = null;
    public ?array $voice_actors = null;
    public ?int $watching = null;
    public ?int $year = null;
}

/** Character entity data model. */
class Character
{
    public ?string $about = null;
    public ?array $anime = null;
    public ?array $data = null;
    public ?int $favorites = null;
    public ?string $image_url = null;
    public ?array $images = null;
    public ?string $language = null;
    public ?string $large_image_url = null;
    public ?int $mal_id = null;
    public ?array $manga = null;
    public ?string $name = null;
    public ?string $name_kanji = null;
    public ?array $nicknames = null;
    public ?array $pagination = null;
    public ?array $person = null;
    public ?string $role = null;
    public ?string $url = null;
    public ?array $voices = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public int $id;
}

/** Request payload for Character#list. */
class CharacterListMatch
{
    public ?string $about = null;
    public ?array $anime = null;
    public ?array $data = null;
    public ?int $favorites = null;
    public ?string $image_url = null;
    public ?array $images = null;
    public ?string $language = null;
    public ?string $large_image_url = null;
    public ?int $mal_id = null;
    public ?array $manga = null;
    public ?string $name = null;
    public ?string $name_kanji = null;
    public ?array $nicknames = null;
    public ?array $pagination = null;
    public ?array $person = null;
    public ?string $role = null;
    public ?string $url = null;
    public ?array $voices = null;
}

/** Club entity data model. */
class Club
{
    public ?string $access = null;
    public ?array $anime = null;
    public ?string $category = null;
    public ?array $characters = null;
    public ?string $created = null;
    public ?array $data = null;
    public ?array $images = null;
    public ?int $mal_id = null;
    public ?array $manga = null;
    public ?int $members = null;
    public ?string $name = null;
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
    public ?string $access = null;
    public ?array $anime = null;
    public ?string $category = null;
    public ?array $characters = null;
    public ?string $created = null;
    public ?array $data = null;
    public ?array $images = null;
    public ?int $mal_id = null;
    public ?array $manga = null;
    public ?int $members = null;
    public ?string $name = null;
    public ?array $pagination = null;
    public ?string $url = null;
    public ?string $username = null;
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

/** Request payload for Genre#list. */
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

/** Request payload for Magazine#list. */
class MagazineListMatch
{
    public ?array $data = null;
    public ?array $pagination = null;
}

/** Manga entity data model. */
class Manga
{
    public ?bool $approved = null;
    public ?string $author_url = null;
    public ?string $author_username = null;
    public ?array $authors = null;
    public ?string $background = null;
    public ?int $chapters = null;
    public ?array $character = null;
    public ?int $comments = null;
    public ?int $completed = null;
    public ?array $data = null;
    public ?string $date = null;
    public ?array $demographics = null;
    public ?int $dropped = null;
    public ?array $entry = null;
    public ?array $explicit_genres = null;
    public ?array $external = null;
    public ?int $favorites = null;
    public ?array $genres = null;
    public ?array $images = null;
    public ?array $jpg = null;
    public ?array $last_comment = null;
    public ?int $mal_id = null;
    public ?int $members = null;
    public ?string $moreinfo = null;
    public ?string $name = null;
    public ?int $on_hold = null;
    public ?array $pagination = null;
    public ?int $plan_to_read = null;
    public ?int $popularity = null;
    public ?array $published = null;
    public ?bool $publishing = null;
    public ?int $rank = null;
    public ?int $reading = null;
    public ?string $relation = null;
    public ?array $relations = null;
    public ?string $role = null;
    public ?float $score = null;
    public ?int $scored_by = null;
    public ?array $scores = null;
    public ?array $serializations = null;
    public ?string $status = null;
    public ?string $synopsis = null;
    public ?array $themes = null;
    public ?string $title = null;
    public ?string $title_english = null;
    public ?string $title_japanese = null;
    public ?array $title_synonyms = null;
    public ?array $titles = null;
    public ?int $total = null;
    public ?string $type = null;
    public ?string $url = null;
    public ?int $volumes = null;
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
    public ?bool $approved = null;
    public ?string $author_url = null;
    public ?string $author_username = null;
    public ?array $authors = null;
    public ?string $background = null;
    public ?int $chapters = null;
    public ?array $character = null;
    public ?int $comments = null;
    public ?int $completed = null;
    public ?array $data = null;
    public ?string $date = null;
    public ?array $demographics = null;
    public ?int $dropped = null;
    public ?array $entry = null;
    public ?array $explicit_genres = null;
    public ?array $external = null;
    public ?int $favorites = null;
    public ?array $genres = null;
    public ?array $images = null;
    public ?array $jpg = null;
    public ?array $last_comment = null;
    public ?int $mal_id = null;
    public ?int $members = null;
    public ?string $moreinfo = null;
    public ?string $name = null;
    public ?int $on_hold = null;
    public ?array $pagination = null;
    public ?int $plan_to_read = null;
    public ?int $popularity = null;
    public ?array $published = null;
    public ?bool $publishing = null;
    public ?int $rank = null;
    public ?int $reading = null;
    public ?string $relation = null;
    public ?array $relations = null;
    public ?string $role = null;
    public ?float $score = null;
    public ?int $scored_by = null;
    public ?array $scores = null;
    public ?array $serializations = null;
    public ?string $status = null;
    public ?string $synopsis = null;
    public ?array $themes = null;
    public ?string $title = null;
    public ?string $title_english = null;
    public ?string $title_japanese = null;
    public ?array $title_synonyms = null;
    public ?array $titles = null;
    public ?int $total = null;
    public ?string $type = null;
    public ?string $url = null;
    public ?int $volumes = null;
    public ?array $webp = null;
}

/** PeopleSearch entity data model. */
class PeopleSearch
{
    public ?array $data = null;
    public ?array $pagination = null;
}

/** Request payload for PeopleSearch#list. */
class PeopleSearchListMatch
{
    public ?array $data = null;
    public ?array $pagination = null;
}

/** Person entity data model. */
class Person
{
    public ?string $about = null;
    public ?array $alternate_names = null;
    public ?array $anime = null;
    public ?string $birthday = null;
    public ?array $character = null;
    public ?array $data = null;
    public ?string $family_name = null;
    public ?int $favorites = null;
    public ?string $given_name = null;
    public ?array $images = null;
    public ?array $jpg = null;
    public ?int $mal_id = null;
    public ?array $manga = null;
    public ?string $name = null;
    public ?array $pagination = null;
    public ?string $position = null;
    public ?string $role = null;
    public ?string $url = null;
    public ?array $voices = null;
    public ?string $website_url = null;
}

/** Request payload for Person#load. */
class PersonLoadMatch
{
    public int $id;
}

/** Request payload for Person#list. */
class PersonListMatch
{
    public ?string $about = null;
    public ?array $alternate_names = null;
    public ?array $anime = null;
    public ?string $birthday = null;
    public ?array $character = null;
    public ?array $data = null;
    public ?string $family_name = null;
    public ?int $favorites = null;
    public ?string $given_name = null;
    public ?array $images = null;
    public ?array $jpg = null;
    public ?int $mal_id = null;
    public ?array $manga = null;
    public ?string $name = null;
    public ?array $pagination = null;
    public ?string $position = null;
    public ?string $role = null;
    public ?string $url = null;
    public ?array $voices = null;
    public ?string $website_url = null;
}

/** Producer entity data model. */
class Producer
{
    public ?string $about = null;
    public ?int $count = null;
    public ?array $data = null;
    public ?string $established = null;
    public ?array $external = null;
    public ?int $favorites = null;
    public ?array $images = null;
    public ?int $mal_id = null;
    public ?string $name = null;
    public ?array $pagination = null;
    public ?array $titles = null;
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
    public ?string $about = null;
    public ?int $count = null;
    public ?array $data = null;
    public ?string $established = null;
    public ?array $external = null;
    public ?int $favorites = null;
    public ?array $images = null;
    public ?int $mal_id = null;
    public ?string $name = null;
    public ?array $pagination = null;
    public ?array $titles = null;
    public ?string $url = null;
}

/** Random entity data model. */
class Random
{
    public ?string $about = null;
    public ?array $aired = null;
    public ?bool $airing = null;
    public ?array $alternate_names = null;
    public ?bool $approved = null;
    public ?array $authors = null;
    public ?string $background = null;
    public ?string $birthday = null;
    public ?array $broadcast = null;
    public ?int $chapters = null;
    public ?array $demographics = null;
    public ?string $duration = null;
    public ?int $episodes = null;
    public ?array $explicit_genres = null;
    public ?string $family_name = null;
    public ?int $favorites = null;
    public ?string $gender = null;
    public ?array $genres = null;
    public ?string $given_name = null;
    public ?array $images = null;
    public ?string $joined = null;
    public ?string $last_online = null;
    public ?array $licensors = null;
    public ?string $location = null;
    public ?int $mal_id = null;
    public ?int $members = null;
    public ?string $name = null;
    public ?string $name_kanji = null;
    public ?array $nicknames = null;
    public ?int $popularity = null;
    public ?array $producers = null;
    public ?array $published = null;
    public ?bool $publishing = null;
    public ?int $rank = null;
    public ?string $rating = null;
    public ?float $score = null;
    public ?int $scored_by = null;
    public ?string $season = null;
    public ?array $serializations = null;
    public ?string $source = null;
    public ?string $status = null;
    public ?array $studios = null;
    public ?string $synopsis = null;
    public ?array $themes = null;
    public ?string $title = null;
    public ?string $title_english = null;
    public ?string $title_japanese = null;
    public ?array $title_synonyms = null;
    public ?array $titles = null;
    public ?array $trailer = null;
    public ?string $type = null;
    public ?string $url = null;
    public ?string $username = null;
    public ?int $volumes = null;
    public ?string $website_url = null;
    public ?int $year = null;
}

/** Request payload for Random#load. */
class RandomLoadMatch
{
    public ?string $about = null;
    public ?array $aired = null;
    public ?bool $airing = null;
    public ?array $alternate_names = null;
    public ?bool $approved = null;
    public ?array $authors = null;
    public ?string $background = null;
    public ?string $birthday = null;
    public ?array $broadcast = null;
    public ?int $chapters = null;
    public ?array $demographics = null;
    public ?string $duration = null;
    public ?int $episodes = null;
    public ?array $explicit_genres = null;
    public ?string $family_name = null;
    public ?int $favorites = null;
    public ?string $gender = null;
    public ?array $genres = null;
    public ?string $given_name = null;
    public ?array $images = null;
    public ?string $joined = null;
    public ?string $last_online = null;
    public ?array $licensors = null;
    public ?string $location = null;
    public ?int $mal_id = null;
    public ?int $members = null;
    public ?string $name = null;
    public ?string $name_kanji = null;
    public ?array $nicknames = null;
    public ?int $popularity = null;
    public ?array $producers = null;
    public ?array $published = null;
    public ?bool $publishing = null;
    public ?int $rank = null;
    public ?string $rating = null;
    public ?float $score = null;
    public ?int $scored_by = null;
    public ?string $season = null;
    public ?array $serializations = null;
    public ?string $source = null;
    public ?string $status = null;
    public ?array $studios = null;
    public ?string $synopsis = null;
    public ?array $themes = null;
    public ?string $title = null;
    public ?string $title_english = null;
    public ?string $title_japanese = null;
    public ?array $title_synonyms = null;
    public ?array $titles = null;
    public ?array $trailer = null;
    public ?string $type = null;
    public ?string $url = null;
    public ?string $username = null;
    public ?int $volumes = null;
    public ?string $website_url = null;
    public ?int $year = null;
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

/** Request payload for Review#load. */
class ReviewLoadMatch
{
}

/** Schedule entity data model. */
class Schedule
{
    public ?array $data = null;
    public ?array $pagination = null;
}

/** Request payload for Schedule#list. */
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
    public ?array $seasons = null;
    public ?int $year = null;
}

/** Request payload for Season#list. */
class SeasonListMatch
{
    public ?string $season = null;
    public ?int $year = null;
}

/** Top entity data model. */
class Top
{
    public ?array $data = null;
    public ?array $pagination = null;
}

/** Request payload for Top#load. */
class TopLoadMatch
{
    public ?array $data = null;
    public ?array $pagination = null;
}

/** User entity data model. */
class User
{
    public ?array $anime = null;
    public ?string $birthday = null;
    public ?array $characters = null;
    public ?array $data = null;
    public ?array $external = null;
    public ?string $gender = null;
    public ?array $images = null;
    public ?string $joined = null;
    public ?string $last_online = null;
    public ?string $location = null;
    public ?int $mal_id = null;
    public ?array $manga = null;
    public ?array $pagination = null;
    public ?array $people = null;
    public ?array $statistics = null;
    public ?string $url = null;
    public ?string $username = null;
}

/** Request payload for User#load. */
class UserLoadMatch
{
    public int $id;
}

/** Request payload for User#list. */
class UserListMatch
{
    public ?array $anime = null;
    public ?string $birthday = null;
    public ?array $characters = null;
    public ?array $data = null;
    public ?array $external = null;
    public ?string $gender = null;
    public ?array $images = null;
    public ?string $joined = null;
    public ?string $last_online = null;
    public ?string $location = null;
    public ?int $mal_id = null;
    public ?array $manga = null;
    public ?array $pagination = null;
    public ?array $people = null;
    public ?array $statistics = null;
    public ?string $url = null;
    public ?string $username = null;
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
    public ?array $anime = null;
    public ?array $manga = null;
}

/** Request payload for UserStatistic#load. */
class UserStatisticLoadMatch
{
    public string $username;
}

/** UserUpdate entity data model. */
class UserUpdate
{
    public ?array $anime = null;
    public ?array $manga = null;
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

/** Request payload for WatchEpisode#list. */
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

/** Request payload for WatchPromo#list. */
class WatchPromoListMatch
{
    public ?array $data = null;
    public ?array $pagination = null;
}

