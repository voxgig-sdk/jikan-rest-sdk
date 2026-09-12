import { JikanRestEntityBase } from '../JikanRestEntityBase';
import type { JikanRestSDK } from '../JikanRestSDK';
import type { Control } from '../types';
import type { WatchEpisode, WatchEpisodeListMatch } from '../JikanRestTypes';
declare class WatchEpisodeEntity extends JikanRestEntityBase<WatchEpisode> {
    constructor(client: JikanRestSDK, entopts: any);
    make(this: WatchEpisodeEntity): WatchEpisodeEntity;
    list(this: any, reqmatch?: WatchEpisodeListMatch, ctrl?: Control): Promise<WatchEpisodeEntity[]>;
}
export { WatchEpisodeEntity };
