import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { External, ExternalListMatch } from '../JikanRestTypes';
declare class ExternalEntity extends JikanRestEntityBase<External> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: ExternalEntity): ExternalEntity;
    list(this: any, reqmatch?: ExternalListMatch, ctrl?: Control): Promise<ExternalEntity[]>;
}
export { ExternalEntity };
