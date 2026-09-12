import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { Review, ReviewLoadMatch } from '../JikanRestTypes';
declare class ReviewEntity extends JikanRestEntityBase<Review> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: ReviewEntity): ReviewEntity;
    load(this: any, reqmatch?: ReviewLoadMatch, ctrl?: Control): Promise<ReviewEntity>;
}
export { ReviewEntity };
