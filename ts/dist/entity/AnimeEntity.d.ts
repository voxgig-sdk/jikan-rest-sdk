import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { Anime, AnimeLoadMatch, AnimeListMatch } from '../JikanRestTypes';
declare class AnimeEntity extends JikanRestEntityBase<Anime> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: AnimeEntity): AnimeEntity;
    load(this: any, reqmatch?: AnimeLoadMatch, ctrl?: Control): Promise<AnimeEntity>;
    list(this: any, reqmatch?: AnimeListMatch, ctrl?: Control): Promise<AnimeEntity[]>;
}
export { AnimeEntity };
