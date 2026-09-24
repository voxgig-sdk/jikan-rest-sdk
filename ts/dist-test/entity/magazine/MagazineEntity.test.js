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
(0, node_test_1.describe)('MagazineEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when JIKAN_REST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('JIKAN_REST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.JikanRestSDK.test();
        const ent = testsdk.Magazine();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.JIKAN_REST_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'magazine.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "data": { "a": true, "h": "Data", "n": "data", "r": false, "t": "`$ARRAY`", "key$": "data", "index$": 0 }, "pagination": { "a": true, "h": "Pagination", "n": "pagination", "r": false, "t": "`$OBJECT`", "key$": "pagination", "index$": 1 } }, "name": "magazine", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /magazines", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "letter", "or": "letter", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "k": "query", "n": "q", "or": "q", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$STRING`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/magazines", "q": { "exist": ["letter", "limit", "order_by", "page", "q", "sort"] }, "r": {}, "s": [{ "lit": "magazines" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "magazine", "name__orig": "magazine", "Name": "Magazine", "name_": "magazine", "name-": "magazine", "NAME": "MAGAZINE", "index$": 6 }, { "active": true, "entity": "magazine", "key$": "BasicMagazineFlow", "kind": "basic", "name": "BasicMagazineFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "magazine_ref01" } }], "index$": 0 }] }, 'Magazine', { "GET /magazines": { "protocol": "http", "operationId": "getMagazines", "responses": { "200": { "description": "Returns magazines collection", "content": { "application/json": { "schema": { "description": "Magazine Collection Resource", "allOf": [{ "properties": { "data": { "items": { "description": "Magazine Resource", "properties": { "count": { "description": "Magazine's manga count", "type": "integer" }, "mal_id": { "description": "MyAnimeList ID", "type": "integer" }, "name": { "description": "Magazine Name", "type": "string" }, "url": { "description": "MyAnimeList URL", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/magazine" }, "key$": "data", "type": "array" } }, "type": "object", "index$": 0 }, { "properties": { "pagination": { "key$": "pagination", "properties": { "has_next_page": { "type": "boolean" }, "last_visible_page": { "type": "integer" } }, "type": "object" } }, "type": "object", "x-ref": "#/components/schemas/pagination", "index$": 1 }], "x-ref": "#/components/schemas/magazines" } } } }, "400": { "description": "Error: Bad request. When required parameters were not supplied." } }, "parameters": [{ "name": "page", "in": "query", "schema": { "type": "integer" }, "x-ref": "#/components/parameters/page", "index$": 0 }, { "name": "limit", "in": "query", "schema": { "type": "integer" }, "x-ref": "#/components/parameters/limit", "index$": 1 }, { "name": "q", "in": "query", "schema": { "type": "string" }, "index$": 2 }, { "name": "order_by", "in": "query", "schema": { "description": "Order by magazine data", "type": "string", "enum": ["mal_id", "name", "count"], "x-ref": "#/components/schemas/magazines_query_orderby" }, "index$": 3 }, { "name": "sort", "in": "query", "schema": { "description": "Search query sort direction", "type": "string", "enum": ["desc", "asc"], "x-ref": "#/components/schemas/search_query_sort" }, "index$": 4 }, { "name": "letter", "in": "query", "description": "Return entries starting with the given letter", "schema": { "type": "string" }, "index$": 5 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let magazine_ref01_data = Object.values(setup.data.existing.magazine)[0];
        // LIST
        const magazine_ref01_ent = client.Magazine();
        const magazine_ref01_match = {};
        const magazine_ref01_list = (await magazine_ref01_ent.list(magazine_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/magazine/MagazineTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.JikanRestSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['magazine01', 'magazine02', 'magazine03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'JIKAN_REST_TEST_MAGAZINE_ENTID': idmap,
        'JIKAN_REST_TEST_LIVE': 'FALSE',
        'JIKAN_REST_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['JIKAN_REST_TEST_MAGAZINE_ENTID'];
    const live = 'TRUE' === env.JIKAN_REST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['JIKAN_REST_TEST_MAGAZINE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.JikanRestSDK(merge([
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
        explain: 'TRUE' === env.JIKAN_REST_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=MagazineEntity.test.js.map