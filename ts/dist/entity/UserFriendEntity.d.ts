import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { UserFriend, UserFriendListMatch } from '../JikanRestTypes';
declare class UserFriendEntity extends JikanRestEntityBase<UserFriend> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: UserFriendEntity): UserFriendEntity;
    list(this: any, reqmatch?: UserFriendListMatch, ctrl?: Control): Promise<UserFriendEntity[]>;
}
export { UserFriendEntity };
