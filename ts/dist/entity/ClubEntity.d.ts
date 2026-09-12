import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { Club, ClubLoadMatch, ClubListMatch } from '../JikanRestTypes';
declare class ClubEntity extends JikanRestEntityBase<Club> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: ClubEntity): ClubEntity;
    load(this: any, reqmatch?: ClubLoadMatch, ctrl?: Control): Promise<ClubEntity>;
    list(this: any, reqmatch?: ClubListMatch, ctrl?: Control): Promise<ClubEntity[]>;
}
export { ClubEntity };
