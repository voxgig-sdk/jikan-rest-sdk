import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { Top, TopLoadMatch } from '../JikanRestTypes';
declare class TopEntity extends JikanRestEntityBase<Top> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: TopEntity): TopEntity;
    load(this: any, reqmatch?: TopLoadMatch, ctrl?: Control): Promise<TopEntity>;
}
export { TopEntity };
