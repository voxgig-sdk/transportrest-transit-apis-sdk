import { TransportrestTransitApisEntityBase } from '../TransportrestTransitApisEntityBase';
import type { TransportrestTransitApisSDK } from '../TransportrestTransitApisSDK';
import type { Control } from '../types';
import type { Stop, StopLoadMatch } from '../TransportrestTransitApisTypes';
declare class StopEntity extends TransportrestTransitApisEntityBase<Stop> {
    constructor(client: TransportrestTransitApisSDK, entopts: any);
    make(this: StopEntity): StopEntity;
    load(this: any, reqmatch?: StopLoadMatch, ctrl?: Control): Promise<StopEntity>;
}
export { StopEntity };
