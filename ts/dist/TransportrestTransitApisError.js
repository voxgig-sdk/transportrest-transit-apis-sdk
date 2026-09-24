"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportrestTransitApisError = void 0;
class TransportrestTransitApisError extends Error {
    isTransportrestTransitApisError = true;
    sdk = 'TransportrestTransitApis';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.TransportrestTransitApisError = TransportrestTransitApisError;
//# sourceMappingURL=TransportrestTransitApisError.js.map