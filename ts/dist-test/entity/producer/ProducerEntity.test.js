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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ProducerEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when JIKAN_REST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('JIKAN_REST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.JikanRestSDK.test();
        const ent = testsdk.Producer();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.JIKAN_REST_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'producer.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "about", "req": false, "short": "About the Producer", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "count", "req": false, "short": "Producers's anime count", "type": "`$INTEGER`", "index$": 1 }, { "active": true, "name": "data", "req": false, "type": "`$ARRAY`", "index$": 2 }, { "active": true, "name": "established", "req": false, "short": "Established Date ISO8601", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "favorites", "req": false, "short": "Producers's member favorites count", "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "images", "req": false, "type": "`$OBJECT`", "index$": 6 }, { "active": true, "name": "mal_id", "req": false, "short": "MyAnimeList ID", "type": "`$INTEGER`", "index$": 7 }, { "active": true, "name": "pagination", "req": false, "type": "`$OBJECT`", "index$": 8 }, { "active": true, "name": "titles", "req": false, "short": "All titles", "type": "`$ARRAY`", "index$": 9 }, { "active": true, "name": "url", "req": false, "short": "MyAnimeList URL", "type": "`$STRING`", "index$": 10 }], "id": { "field": "id", "name": "id" }, "name": "producer", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "letter", "orig": "letter", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "kind": "query", "name": "order_by", "orig": "order_by", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "kind": "query", "name": "q", "orig": "q", "reqd": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "kind": "query", "name": "sort", "orig": "sort", "reqd": false, "type": "`$STRING`", "index$": 5 }] }, "contract": { "id": "GET /producers", "json": "{\"operationId\":\"getProducers\",\"parameters\":[{\"in\":\"query\",\"name\":\"page\",\"schema\":{\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"type\":\"integer\"}},{\"in\":\"query\",\"name\":\"q\",\"schema\":{\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"order_by\",\"schema\":{\"description\":\"Producers Search Query Order By\",\"enum\":[\"mal_id\",\"count\",\"favorites\",\"established\"],\"type\":\"string\"}},{\"in\":\"query\",\"name\":\"sort\",\"schema\":{\"description\":\"Search query sort direction\",\"enum\":[\"desc\",\"asc\"],\"type\":\"string\"}},{\"description\":\"Return entries starting with the given letter\",\"in\":\"query\",\"name\":\"letter\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"allOf\":[{\"properties\":{\"data\":{\"items\":{\"description\":\"Producers Resource\",\"properties\":{\"about\":{\"description\":\"About the Producer\",\"nullable\":true,\"type\":\"string\"},\"count\":{\"description\":\"Producers's anime count\",\"type\":\"integer\"},\"established\":{\"description\":\"Established Date ISO8601\",\"nullable\":true,\"type\":\"string\"},\"favorites\":{\"description\":\"Producers's member favorites count\",\"type\":\"integer\"},\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"titles\":{\"description\":\"All titles\",\"items\":{\"properties\":{\"title\":{\"description\":\"Title value\",\"type\":\"string\"},\"type\":{\"description\":\"Title type\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},{\"properties\":{\"pagination\":{\"properties\":{\"has_next_page\":{\"type\":\"boolean\"},\"last_visible_page\":{\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}],\"description\":\"Producers Collection Resource\"}}},\"description\":\"Returns producers collection\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/producers", "segments": [{ "lit": "producers" }], "select": { "exist": ["letter", "limit", "order_by", "page", "q", "sort"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`" }] }, "contract": { "id": "GET /producers/{id}/external", "json": "{\"operationId\":\"getProducerExternal\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"External links\",\"properties\":{\"data\":{\"items\":{\"properties\":{\"name\":{\"type\":\"string\"},\"url\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Returns producer's external links\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/producers/{id}/external", "segments": [{ "lit": "producers" }, { "var": "id" }, { "lit": "external" }], "select": { "$action": "external", "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /producers/{id}", "json": "{\"operationId\":\"getProducerById\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"description\":\"Producers Resource\",\"properties\":{\"about\":{\"description\":\"About the Producer\",\"nullable\":true,\"type\":\"string\"},\"count\":{\"description\":\"Producers's anime count\",\"type\":\"integer\"},\"established\":{\"description\":\"Established Date ISO8601\",\"nullable\":true,\"type\":\"string\"},\"favorites\":{\"description\":\"Producers's member favorites count\",\"type\":\"integer\"},\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"titles\":{\"description\":\"All titles\",\"items\":{\"properties\":{\"title\":{\"description\":\"Title value\",\"type\":\"string\"},\"type\":{\"description\":\"Title type\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Returns producer resource\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/producers/{id}", "segments": [{ "lit": "producers" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`" }] }, "contract": { "id": "GET /producers/{id}/full", "json": "{\"operationId\":\"getProducerFullById\",\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"description\":\"Producers Resource\",\"properties\":{\"about\":{\"description\":\"About the Producer\",\"nullable\":true,\"type\":\"string\"},\"count\":{\"description\":\"Producers's anime count\",\"type\":\"integer\"},\"established\":{\"description\":\"Established Date ISO8601\",\"nullable\":true,\"type\":\"string\"},\"external\":{\"items\":{\"properties\":{\"name\":{\"type\":\"string\"},\"url\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"favorites\":{\"description\":\"Producers's member favorites count\",\"type\":\"integer\"},\"images\":{\"properties\":{\"jpg\":{\"description\":\"Available images in JPG\",\"properties\":{\"image_url\":{\"description\":\"Image URL JPG\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"mal_id\":{\"description\":\"MyAnimeList ID\",\"type\":\"integer\"},\"titles\":{\"description\":\"All titles\",\"items\":{\"properties\":{\"title\":{\"description\":\"Title value\",\"type\":\"string\"},\"type\":{\"description\":\"Title type\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"url\":{\"description\":\"MyAnimeList URL\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Returns producer resource\"},\"400\":{\"description\":\"Error: Bad request. When required parameters were not supplied.\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/producers/{id}/full", "segments": [{ "lit": "producers" }, { "var": "id" }, { "lit": "full" }], "select": { "$action": "full", "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "producer", "name__orig": "producer", "Name": "Producer", "name_": "producer", "name-": "producer", "NAME": "PRODUCER", "index$": 9 }, { "active": true, "entity": "producer", "key$": "BasicProducerFlow", "kind": "basic", "name": "BasicProducerFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "producer_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "producer_ref01", "srcdatavar": "producer_ref01_data", "suffix": "_dt0" }, "match": { "id": "producer01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-producer_ref01" } }], "index$": 1 }] }, 'Producer');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let producer_ref01_data = Object.values(setup.data.existing.producer)[0];
        // LIST
        const producer_ref01_ent = client.Producer();
        const producer_ref01_match = {};
        const producer_ref01_list = (await producer_ref01_ent.list(producer_ref01_match)).map((e) => e.data());
        // LOAD
        const producer_ref01_match_dt0 = {};
        producer_ref01_match_dt0.id = producer_ref01_data.id;
        const producer_ref01_data_dt0 = (await producer_ref01_ent.load(producer_ref01_match_dt0)).data();
        (0, node_assert_1.default)(producer_ref01_data_dt0.id === producer_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/producer/ProducerTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.JikanRestSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['producer01', 'producer02', 'producer03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'JIKAN_REST_TEST_PRODUCER_ENTID': idmap,
        'JIKAN_REST_TEST_LIVE': 'FALSE',
        'JIKAN_REST_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['JIKAN_REST_TEST_PRODUCER_ENTID'];
    const live = 'TRUE' === env.JIKAN_REST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['JIKAN_REST_TEST_PRODUCER_ENTID'];
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
//# sourceMappingURL=ProducerEntity.test.js.map