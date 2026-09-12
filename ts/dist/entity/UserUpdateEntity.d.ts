import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { UserUpdate, UserUpdateLoadMatch } from '../JikanRestTypes';
declare class UserUpdateEntity extends JikanRestEntityBase<UserUpdate> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: UserUpdateEntity): UserUpdateEntity;
    load(this: any, reqmatch?: UserUpdateLoadMatch, ctrl?: Control): Promise<UserUpdateEntity>;
}
export { UserUpdateEntity };
