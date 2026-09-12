import { TransportrestTransitApisEntityBase } from '../TransportrestTransitApisEntityBase';
import type { TransportrestTransitApisSDK } from '../TransportrestTransitApisSDK';
import type { Control } from '../types';
import type { Journey, JourneyListMatch } from '../TransportrestTransitApisTypes';
declare class JourneyEntity extends TransportrestTransitApisEntityBase<Journey> {
    constructor(client: TransportrestTransitApisSDK, entopts: any);
    make(this: JourneyEntity): JourneyEntity;
    list(this: any, reqmatch?: JourneyListMatch, ctrl?: Control): Promise<JourneyEntity[]>;
}
export { JourneyEntity };
