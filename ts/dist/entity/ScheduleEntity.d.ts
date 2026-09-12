import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { Schedule, ScheduleListMatch } from '../JikanRestTypes';
declare class ScheduleEntity extends JikanRestEntityBase<Schedule> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: ScheduleEntity): ScheduleEntity;
    list(this: any, reqmatch?: ScheduleListMatch, ctrl?: Control): Promise<ScheduleEntity[]>;
}
export { ScheduleEntity };
