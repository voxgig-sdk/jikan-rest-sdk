import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { Manga, MangaLoadMatch, MangaListMatch } from '../JikanRestTypes';
declare class MangaEntity extends JikanRestEntityBase<Manga> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: MangaEntity): MangaEntity;
    load(this: any, reqmatch?: MangaLoadMatch, ctrl?: Control): Promise<MangaEntity>;
    list(this: any, reqmatch?: MangaListMatch, ctrl?: Control): Promise<MangaEntity[]>;
}
export { MangaEntity };
