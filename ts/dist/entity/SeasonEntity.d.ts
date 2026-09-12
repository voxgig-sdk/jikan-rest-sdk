import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { Season, SeasonLoadMatch, SeasonListMatch } from '../JikanRestTypes';
declare class SeasonEntity extends JikanRestEntityBase<Season> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: SeasonEntity): SeasonEntity;
    load(this: any, reqmatch?: SeasonLoadMatch, ctrl?: Control): Promise<SeasonEntity>;
    list(this: any, reqmatch?: SeasonListMatch, ctrl?: Control): Promise<SeasonEntity[]>;
}
export { SeasonEntity };
