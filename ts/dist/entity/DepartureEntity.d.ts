import { TransportrestTransitApisEntityBase } from '../TransportrestTransitApisEntityBase';
import type { TransportrestTransitApisSDK } from '../TransportrestTransitApisSDK';
import type { Control } from '../types';
import type { Departure, DepartureListMatch } from '../TransportrestTransitApisTypes';
declare class DepartureEntity extends TransportrestTransitApisEntityBase<Departure> {
    constructor(client: TransportrestTransitApisSDK, entopts: any);
    make(this: DepartureEntity): DepartureEntity;
    list(this: any, reqmatch?: DepartureListMatch, ctrl?: Control): Promise<DepartureEntity[]>;
}
export { DepartureEntity };
