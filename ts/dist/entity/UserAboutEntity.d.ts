import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { UserAbout, UserAboutListMatch } from '../JikanRestTypes';
declare class UserAboutEntity extends JikanRestEntityBase<UserAbout> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: UserAboutEntity): UserAboutEntity;
    list(this: any, reqmatch?: UserAboutListMatch, ctrl?: Control): Promise<UserAboutEntity[]>;
}
export { UserAboutEntity };
