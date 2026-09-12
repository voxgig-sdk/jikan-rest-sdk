import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { Magazine, MagazineListMatch } from '../JikanRestTypes';
declare class MagazineEntity extends JikanRestEntityBase<Magazine> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: MagazineEntity): MagazineEntity;
    list(this: any, reqmatch?: MagazineListMatch, ctrl?: Control): Promise<MagazineEntity[]>;
}
export { MagazineEntity };
