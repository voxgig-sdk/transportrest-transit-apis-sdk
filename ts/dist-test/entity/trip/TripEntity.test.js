"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('TripEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRANSPORTREST_TRANSIT_APIS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRANSPORTREST_TRANSIT_APIS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TransportrestTransitApisSDK.test();
        const ent = testsdk.Trip();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'trip.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "destination": { "a": true, "h": "Destination", "n": "destination", "r": false, "t": "`$OBJECT`", "key$": "destination", "index$": 0 }, "direction": { "a": true, "h": "Direction", "n": "direction", "r": false, "sh": "Direction of the trip", "t": "`$STRING`", "key$": "direction", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Trip identifier", "t": "`$STRING`", "key$": "id", "index$": 2 }, "line": { "a": true, "h": "Line", "n": "line", "r": false, "t": "`$OBJECT`", "key$": "line", "index$": 3 }, "origin": { "a": true, "h": "Origin", "n": "origin", "r": false, "t": "`$OBJECT`", "key$": "origin", "index$": 4 }, "stopovers": { "a": true, "h": "Stopovers", "n": "stopovers", "r": false, "t": "`$ARRAY`", "key$": "stopovers", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "trip", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /trips/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "line_name", "or": "line_name", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": true, "k": "query", "n": "stopover", "or": "stopover", "r": false, "t": "`$BOOLEAN`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/trips/{id}", "q": { "exist": ["id", "line_name", "stopover"] }, "r": {}, "s": [{ "lit": "trips" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "trip", "name__orig": "trip", "Name": "Trip", "name_": "trip", "name-": "trip", "NAME": "TRIP", "index$": 6 }, { "active": true, "entity": "trip", "key$": "BasicTripFlow", "kind": "basic", "name": "BasicTripFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "trip_ref01", "srcdatavar": "trip_ref01_data", "suffix": "_dt0" }, "m": { "id": "trip01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-trip_ref01" } }], "index$": 0 }] }, 'Trip', { "GET /trips/{id}": { "protocol": "http", "operationId": "getTrip", "responses": { "200": { "description": "Successful response with trip details", "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "type": "string", "description": "Trip identifier", "key$": "id" }, "line": { "type": "object", "properties": { "type": { "enum": ["line"], "type": "string" }, "id": { "description": "Line identifier", "type": "string" }, "name": { "description": "Line name", "type": "string" }, "mode": { "description": "Mode of transport", "type": "string" }, "product": { "description": "Product type", "type": "string" }, "operator": { "description": "Operating company", "type": "object" } }, "x-ref": "#/components/schemas/Line", "key$": "line" }, "direction": { "type": "string", "description": "Direction of the trip", "key$": "direction" }, "origin": { "type": "object", "properties": { "type": { "enum": ["stop", "station"], "type": "string", "key$": "type" }, "id": { "description": "Unique identifier for the stop", "type": "string", "key$": "id" }, "name": { "description": "Name of the stop", "type": "string", "key$": "name" }, "location": { "properties": { "latitude": { "description": "Latitude coordinate", "format": "double", "type": "number" }, "longitude": { "description": "Longitude coordinate", "format": "double", "type": "number" }, "type": { "enum": ["location"], "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Coordinates", "key$": "location" }, "products": { "description": "Available products at this stop", "type": "object", "key$": "products" }, "station": { "description": "Parent station if applicable", "type": "object", "key$": "station" } }, "x-ref": "#/components/schemas/Stop", "key$": "origin" }, "destination": { "type": "object", "properties": { "type": { "enum": ["stop", "station"], "type": "string", "key$": "type" }, "id": { "description": "Unique identifier for the stop", "type": "string", "key$": "id" }, "name": { "description": "Name of the stop", "type": "string", "key$": "name" }, "location": { "properties": { "latitude": { "description": "Latitude coordinate", "format": "double", "type": "number" }, "longitude": { "description": "Longitude coordinate", "format": "double", "type": "number" }, "type": { "enum": ["location"], "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Coordinates", "key$": "location" }, "products": { "description": "Available products at this stop", "type": "object", "key$": "products" }, "station": { "description": "Parent station if applicable", "type": "object", "key$": "station" } }, "x-ref": "#/components/schemas/Stop", "key$": "destination" }, "stopovers": { "type": "array", "items": { "type": "object", "properties": { "stop": { "properties": { "id": { "description": "Unique identifier for the stop", "type": "string" }, "location": { "properties": { "latitude": { "description": "Latitude coordinate", "format": "double", "type": "number" }, "longitude": { "description": "Longitude coordinate", "format": "double", "type": "number" }, "type": { "enum": ["location"], "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Coordinates" }, "name": { "description": "Name of the stop", "type": "string" }, "products": { "description": "Available products at this stop", "type": "object" }, "station": { "description": "Parent station if applicable", "type": "object" }, "type": { "enum": ["stop", "station"], "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Stop" }, "arrival": { "format": "date-time", "type": "string" }, "plannedArrival": { "format": "date-time", "type": "string" }, "departure": { "format": "date-time", "type": "string" }, "plannedDeparture": { "format": "date-time", "type": "string" } }, "x-ref": "#/components/schemas/Stopover" }, "key$": "stopovers" } }, "x-ref": "#/components/schemas/Trip", "index$": 0 } } } }, "404": { "description": "Trip not found" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "id", "in": "path", "description": "Trip ID", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "lineName", "in": "query", "description": "Line name of the trip", "required": false, "schema": { "type": "string" }, "index$": 1 }, { "name": "stopovers", "in": "query", "description": "Include stopovers in trip details", "required": false, "schema": { "type": "boolean", "default": true }, "index$": 2 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let trip_ref01_data = Object.values(setup.data.existing.trip)[0];
        // LOAD
        const trip_ref01_ent = client.Trip();
        const trip_ref01_match_dt0 = {};
        trip_ref01_match_dt0.id = trip_ref01_data.id;
        const trip_ref01_data_dt0 = (await trip_ref01_ent.load(trip_ref01_match_dt0)).data();
        (0, node_assert_1.default)(trip_ref01_data_dt0.id === trip_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/trip/TripTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TransportrestTransitApisSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['trip01', 'trip02', 'trip03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRANSPORTREST_TRANSIT_APIS_TEST_TRIP_ENTID': idmap,
        'TRANSPORTREST_TRANSIT_APIS_TEST_LIVE': 'FALSE',
        'TRANSPORTREST_TRANSIT_APIS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['TRANSPORTREST_TRANSIT_APIS_TEST_TRIP_ENTID'];
    const live = 'TRUE' === env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRANSPORTREST_TRANSIT_APIS_TEST_TRIP_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.TransportrestTransitApisSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.TRANSPORTREST_TRANSIT_APIS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=TripEntity.test.js.map