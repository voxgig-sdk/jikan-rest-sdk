import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { UserClub, UserClubListMatch } from '../JikanRestTypes';
declare class UserClubEntity extends JikanRestEntityBase<UserClub> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: UserClubEntity): UserClubEntity;
    list(this: any, reqmatch?: UserClubListMatch, ctrl?: Control): Promise<UserClubEntity[]>;
}
export { UserClubEntity };
