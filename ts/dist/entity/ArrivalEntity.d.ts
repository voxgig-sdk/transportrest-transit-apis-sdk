import { TransportrestTransitApisEntityBase } from '../TransportrestTransitApisEntityBase';
import type { TransportrestTransitApisSDK } from '../TransportrestTransitApisSDK';
import type { Control } from '../types';
import type { Arrival, ArrivalListMatch } from '../TransportrestTransitApisTypes';
declare class ArrivalEntity extends TransportrestTransitApisEntityBase<Arrival> {
    constructor(client: TransportrestTransitApisSDK, entopts: any);
    make(this: ArrivalEntity): ArrivalEntity;
    list(this: any, reqmatch?: ArrivalListMatch, ctrl?: Control): Promise<ArrivalEntity[]>;
}
export { ArrivalEntity };
