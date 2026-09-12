import { ArrivalEntity } from './entity/ArrivalEntity';
import { DepartureEntity } from './entity/DepartureEntity';
import { JourneyEntity } from './entity/JourneyEntity';
import { LocationEntity } from './entity/LocationEntity';
import { RadarEntity } from './entity/RadarEntity';
import { StopEntity } from './entity/StopEntity';
import { TripEntity } from './entity/TripEntity';
export type * from './TransportrestTransitApisTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { TransportrestTransitApisEntityBase } from './TransportrestTransitApisEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class TransportrestTransitApisSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Arrival(entopts?: Record<string, any>): ArrivalEntity;
    Departure(entopts?: Record<string, any>): DepartureEntity;
    Journey(entopts?: Record<string, any>): JourneyEntity;
    Location(entopts?: Record<string, any>): LocationEntity;
    Radar(entopts?: Record<string, any>): RadarEntity;
    Stop(entopts?: Record<string, any>): StopEntity;
    Trip(entopts?: Record<string, any>): TripEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): TransportrestTransitApisSDK;
    tester(testopts?: any, sdkopts?: any): TransportrestTransitApisSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof TransportrestTransitApisSDK;
export { stdutil, config, BaseFeature, TransportrestTransitApisEntityBase, TransportrestTransitApisSDK, SDK, };
