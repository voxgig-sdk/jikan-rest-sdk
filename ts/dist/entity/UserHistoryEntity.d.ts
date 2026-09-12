import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { UserHistory, UserHistoryListMatch } from '../JikanRestTypes';
declare class UserHistoryEntity extends JikanRestEntityBase<UserHistory> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: UserHistoryEntity): UserHistoryEntity;
    list(this: any, reqmatch?: UserHistoryListMatch, ctrl?: Control): Promise<UserHistoryEntity[]>;
}
export { UserHistoryEntity };
