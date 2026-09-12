import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { PeopleSearch, PeopleSearchListMatch } from '../JikanRestTypes';
declare class PeopleSearchEntity extends JikanRestEntityBase<PeopleSearch> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: PeopleSearchEntity): PeopleSearchEntity;
    list(this: any, reqmatch?: PeopleSearchListMatch, ctrl?: Control): Promise<PeopleSearchEntity[]>;
}
export { PeopleSearchEntity };
