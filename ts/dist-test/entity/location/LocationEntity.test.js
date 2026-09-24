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
(0, node_test_1.describe)('LocationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRANSPORTREST_TRANSIT_APIS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRANSPORTREST_TRANSIT_APIS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TransportrestTransitApisSDK.test();
        const ent = testsdk.Location();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'location.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the location", "t": "`$STRING`", "key$": "id", "index$": 0 }, "location": { "a": true, "h": "Location", "n": "location", "r": false, "t": "`$OBJECT`", "key$": "location", "index$": 1 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Name of the location", "t": "`$STRING`", "key$": "name", "index$": 2 }, "products": { "a": true, "h": "Products", "n": "products", "r": false, "sh": "Available products at this location", "t": "`$OBJECT`", "key$": "products", "index$": 3 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "Type of location", "t": "`$STRING`", "key$": "type", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "location", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /locations", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": true, "k": "query", "n": "address", "or": "address", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "ex": true, "k": "query", "n": "poi", "or": "poi", "r": false, "t": "`$BOOLEAN`", "index$": 1 }, { "a": true, "ex": "Berlin", "k": "query", "n": "query", "or": "query", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": 10, "k": "query", "n": "result", "or": "result", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "ex": true, "k": "query", "n": "stop", "or": "stop", "r": false, "t": "`$BOOLEAN`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/locations", "q": { "exist": ["address", "poi", "query", "result", "stop"] }, "r": {}, "s": [{ "lit": "locations" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "location", "name__orig": "location", "Name": "Location", "name_": "location", "name-": "location", "NAME": "LOCATION", "index$": 3 }, { "active": true, "entity": "location", "key$": "BasicLocationFlow", "kind": "basic", "name": "BasicLocationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "location_ref01" } }], "index$": 0 }] }, 'Location', { "GET /locations": { "protocol": "http", "operationId": "searchLocations", "responses": { "200": { "description": "Successful response with locations", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "properties": { "type": { "type": "string", "enum": ["stop", "station", "location", "address", "poi"], "description": "Type of location", "key$": "type" }, "id": { "type": "string", "description": "Unique identifier for the location", "key$": "id" }, "name": { "type": "string", "description": "Name of the location", "key$": "name" }, "location": { "type": "object", "properties": { "type": { "enum": ["location"], "type": "string" }, "latitude": { "description": "Latitude coordinate", "format": "double", "type": "number" }, "longitude": { "description": "Longitude coordinate", "format": "double", "type": "number" } }, "x-ref": "#/components/schemas/Coordinates", "key$": "location" }, "products": { "type": "object", "description": "Available products at this location", "key$": "products" } }, "x-ref": "#/components/schemas/Location", "index$": 0 } } } } }, "400": { "description": "Bad request - invalid parameters" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "query", "in": "query", "description": "Search query for locations", "required": true, "schema": { "type": "string" }, "example": "Berlin", "index$": 0 }, { "name": "results", "in": "query", "description": "Number of results to return", "required": false, "schema": { "type": "integer", "default": 10, "minimum": 1, "maximum": 100 }, "index$": 1 }, { "name": "stops", "in": "query", "description": "Include stops/stations in results", "required": false, "schema": { "type": "boolean", "default": true }, "index$": 2 }, { "name": "addresses", "in": "query", "description": "Include addresses in results", "required": false, "schema": { "type": "boolean", "default": true }, "index$": 3 }, { "name": "poi", "in": "query", "description": "Include points of interest in results", "required": false, "schema": { "type": "boolean", "default": true }, "index$": 4 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let location_ref01_data = Object.values(setup.data.existing.location)[0];
        // LIST
        const location_ref01_ent = client.Location();
        const location_ref01_match = {};
        const location_ref01_list = (await location_ref01_ent.list(location_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/location/LocationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TransportrestTransitApisSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['location01', 'location02', 'location03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRANSPORTREST_TRANSIT_APIS_TEST_LOCATION_ENTID': idmap,
        'TRANSPORTREST_TRANSIT_APIS_TEST_LIVE': 'FALSE',
        'TRANSPORTREST_TRANSIT_APIS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['TRANSPORTREST_TRANSIT_APIS_TEST_LOCATION_ENTID'];
    const live = 'TRUE' === env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRANSPORTREST_TRANSIT_APIS_TEST_LOCATION_ENTID'];
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
//# sourceMappingURL=LocationEntity.test.js.map