import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { Recommendation, RecommendationListMatch } from '../JikanRestTypes';
declare class RecommendationEntity extends JikanRestEntityBase<Recommendation> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: RecommendationEntity): RecommendationEntity;
    list(this: any, reqmatch?: RecommendationListMatch, ctrl?: Control): Promise<RecommendationEntity[]>;
}
export { RecommendationEntity };
