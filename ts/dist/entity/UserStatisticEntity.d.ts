import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { UserStatistic, UserStatisticLoadMatch } from '../JikanRestTypes';
declare class UserStatisticEntity extends JikanRestEntityBase<UserStatistic> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: UserStatisticEntity): UserStatisticEntity;
    load(this: any, reqmatch?: UserStatisticLoadMatch, ctrl?: Control): Promise<UserStatisticEntity>;
}
export { UserStatisticEntity };
