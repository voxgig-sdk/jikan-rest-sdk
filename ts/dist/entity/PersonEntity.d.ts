import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { Person, PersonLoadMatch, PersonListMatch } from '../JikanRestTypes';
declare class PersonEntity extends JikanRestEntityBase<Person> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: PersonEntity): PersonEntity;
    load(this: any, reqmatch?: PersonLoadMatch, ctrl?: Control): Promise<PersonEntity>;
    list(this: any, reqmatch?: PersonListMatch, ctrl?: Control): Promise<PersonEntity[]>;
}
export { PersonEntity };
