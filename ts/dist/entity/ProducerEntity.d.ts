import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { Producer, ProducerLoadMatch, ProducerListMatch } from '../JikanRestTypes';
declare class ProducerEntity extends JikanRestEntityBase<Producer> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: ProducerEntity): ProducerEntity;
    load(this: any, reqmatch?: ProducerLoadMatch, ctrl?: Control): Promise<ProducerEntity>;
    list(this: any, reqmatch?: ProducerListMatch, ctrl?: Control): Promise<ProducerEntity[]>;
}
export { ProducerEntity };
