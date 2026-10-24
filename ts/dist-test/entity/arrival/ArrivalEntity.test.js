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
(0, node_test_1.describe)('ArrivalEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRANSPORTREST_TRANSIT_APIS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRANSPORTREST_TRANSIT_APIS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TransportrestTransitApisSDK.test();
        const ent = testsdk.Arrival();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.TransportrestTransitApisSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Arrival().list({ "stop_id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'arrival.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "delay": { "a": true, "h": "Delay", "n": "delay", "r": false, "sh": "Delay in seconds", "t": "`$INTEGER`", "key$": "delay", "index$": 0 }, "direction": { "a": true, "h": "Direction", "n": "direction", "r": false, "sh": "Direction of the trip", "t": "`$STRING`", "key$": "direction", "index$": 1 }, "line": { "a": true, "h": "Line", "n": "line", "r": false, "t": "`$OBJECT`", "key$": "line", "index$": 2 }, "plannedPlatform": { "a": true, "h": "Planned Platform", "n": "plannedPlatform", "r": false, "sh": "Originally planned platform", "t": "`$STRING`", "key$": "plannedPlatform", "index$": 3 }, "plannedWhen": { "a": true, "fo": "date-time", "h": "Planned When", "n": "plannedWhen", "r": false, "sh": "Originally planned arrival time", "t": "`$STRING`", "key$": "plannedWhen", "index$": 4 }, "platform": { "a": true, "h": "Platform", "n": "platform", "r": false, "sh": "Arrival platform", "t": "`$STRING`", "key$": "platform", "index$": 5 }, "stop": { "a": true, "h": "Stop", "n": "stop", "r": false, "t": "`$OBJECT`", "key$": "stop", "index$": 6 }, "tripId": { "a": true, "h": "Trip Id", "n": "tripId", "r": false, "sh": "Trip identifier", "t": "`$STRING`", "key$": "tripId", "index$": 7 }, "when": { "a": true, "fo": "date-time", "h": "When", "n": "when", "r": false, "sh": "Scheduled arrival time", "t": "`$STRING`", "key$": "when", "index$": 8 } }, "name": "arrival", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /stops/{id}/arrivals", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "stop_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 120, "k": "query", "n": "duration", "or": "duration", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 10, "k": "query", "n": "result", "or": "results", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "when", "or": "when", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/stops/{id}/arrivals", "q": { "exist": ["stop_id"] }, "r": { "param": { "id": "stop_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "stops" }, { "var": "stop_id" }, { "lit": "arrivals" }], "t": { "req": "`reqdata`", "res": "`body.arrivals`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.stop"]] }, "key$": "arrival", "name__orig": "arrival", "Name": "Arrival", "name_": "arrival", "name-": "arrival", "NAME": "ARRIVAL", "index$": 0 }, { "active": true, "entity": "arrival", "key$": "BasicArrivalFlow", "kind": "basic", "name": "BasicArrivalFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "stop_id": "stop01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "arrival_ref01" } }], "index$": 0 }] }, 'Arrival', { "GET /stops/{id}/arrivals": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "Stop/station ID", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "when", "in": "query", "description": "Date and time for which to get arrivals (ISO 8601 format)", "required": false, "schema": { "type": "string", "format": "date-time" }, "index$": 1 }, { "name": "duration", "in": "query", "description": "Duration in minutes for which to get arrivals", "required": false, "schema": { "type": "integer", "default": 120, "minimum": 1 }, "index$": 2 }, { "name": "results", "in": "query", "description": "Maximum number of arrivals to return", "required": false, "schema": { "type": "integer", "default": 10, "minimum": 1 }, "index$": 3 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let arrival_ref01_data = Object.values(setup.data.existing.arrival)[0];
        // LIST
        const arrival_ref01_ent = client.Arrival();
        const arrival_ref01_match = {};
        arrival_ref01_match['stop_id'] = setup.idmap['stop01'];
        const arrival_ref01_list = (await arrival_ref01_ent.list(arrival_ref01_match)).map((e) => e.data());
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/arrival/ArrivalTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TransportrestTransitApisSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['arrival01', 'arrival02', 'arrival03', 'stop01', 'stop02', 'stop03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRANSPORTREST_TRANSIT_APIS_TEST_ARRIVAL_ENTID': idmap,
        'TRANSPORTREST_TRANSIT_APIS_TEST_LIVE': 'FALSE',
        'TRANSPORTREST_TRANSIT_APIS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['TRANSPORTREST_TRANSIT_APIS_TEST_ARRIVAL_ENTID'];
    const live = 'TRUE' === env.TRANSPORTREST_TRANSIT_APIS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRANSPORTREST_TRANSIT_APIS_TEST_ARRIVAL_ENTID'];
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
//# sourceMappingURL=ArrivalEntity.test.js.map