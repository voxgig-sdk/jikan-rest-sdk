import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { WatchPromo, WatchPromoListMatch } from '../JikanRestTypes';
declare class WatchPromoEntity extends JikanRestEntityBase<WatchPromo> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: WatchPromoEntity): WatchPromoEntity;
    list(this: any, reqmatch?: WatchPromoListMatch, ctrl?: Control): Promise<WatchPromoEntity[]>;
}
export { WatchPromoEntity };
