import { TransportrestTransitApisEntityBase } from '../TransportrestTransitApisEntityBase';
import type { TransportrestTransitApisSDK } from '../TransportrestTransitApisSDK';
import type { Control } from '../types';
import type { Location, LocationListMatch } from '../TransportrestTransitApisTypes';
declare class LocationEntity extends TransportrestTransitApisEntityBase<Location> {
    constructor(client: TransportrestTransitApisSDK, entopts: any);
    make(this: LocationEntity): LocationEntity;
    list(this: any, reqmatch?: LocationListMatch, ctrl?: Control): Promise<LocationEntity[]>;
}
export { LocationEntity };
