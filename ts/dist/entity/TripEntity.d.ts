import { TransportrestTransitApisEntityBase } from '../TransportrestTransitApisEntityBase';
import type { TransportrestTransitApisSDK } from '../TransportrestTransitApisSDK';
import type { Control } from '../types';
import type { Trip, TripLoadMatch } from '../TransportrestTransitApisTypes';
declare class TripEntity extends TransportrestTransitApisEntityBase<Trip> {
    constructor(client: TransportrestTransitApisSDK, entopts: any);
    make(this: TripEntity): TripEntity;
    load(this: any, reqmatch?: TripLoadMatch, ctrl?: Control): Promise<TripEntity>;
}
export { TripEntity };
