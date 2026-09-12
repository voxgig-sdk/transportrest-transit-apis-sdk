import { TransportrestTransitApisEntityBase } from '../TransportrestTransitApisEntityBase';
import type { TransportrestTransitApisSDK } from '../TransportrestTransitApisSDK';
import type { Control } from '../types';
import type { Radar, RadarListMatch } from '../TransportrestTransitApisTypes';
declare class RadarEntity extends TransportrestTransitApisEntityBase<Radar> {
    constructor(client: TransportrestTransitApisSDK, entopts: any);
    make(this: RadarEntity): RadarEntity;
    list(this: any, reqmatch?: RadarListMatch, ctrl?: Control): Promise<RadarEntity[]>;
}
export { RadarEntity };
