import { Context } from './Context';
declare class TransportrestTransitApisError extends Error {
    isTransportrestTransitApisError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { TransportrestTransitApisError };
