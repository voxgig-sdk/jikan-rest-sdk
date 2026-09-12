import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { Genre, GenreListMatch } from '../JikanRestTypes';
declare class GenreEntity extends JikanRestEntityBase<Genre> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: GenreEntity): GenreEntity;
    list(this: any, reqmatch?: GenreListMatch, ctrl?: Control): Promise<GenreEntity[]>;
}
export { GenreEntity };
