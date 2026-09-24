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
(0, node_test_1.describe)('RecommendationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when JIKAN_REST_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('JIKAN_REST_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.JikanRestSDK.test();
        const ent = testsdk.Recommendation();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.JIKAN_REST_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'recommendation.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "data": { "a": true, "h": "Data", "n": "data", "r": false, "t": "`$ARRAY`", "union": { "branches": 2, "count": 1, "depth": 4 }, "key$": "data", "index$": 0 }, "pagination": { "a": true, "h": "Pagination", "n": "pagination", "r": false, "t": "`$OBJECT`", "key$": "pagination", "index$": 1 } }, "name": "recommendation", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /users/{username}/recommendations", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "username", "or": "username", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/users/{username}/recommendations", "q": { "exist": ["page", "username"] }, "r": {}, "s": [{ "lit": "users" }, { "var": "username" }, { "lit": "recommendations" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /recommendations/anime", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/recommendations/anime", "q": { "$action": "anime", "exist": ["page"] }, "r": {}, "s": [{ "lit": "recommendations" }, { "lit": "anime" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /recommendations/manga", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/recommendations/manga", "q": { "$action": "manga", "exist": ["page"] }, "r": {}, "s": [{ "lit": "recommendations" }, { "lit": "manga" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.user"]] }, "key$": "recommendation", "name__orig": "recommendation", "Name": "Recommendation", "name_": "recommendation", "name-": "recommendation", "NAME": "RECOMMENDATION", "index$": 12 }, { "active": true, "entity": "recommendation", "key$": "BasicRecommendationFlow", "kind": "basic", "name": "BasicRecommendationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "recommendation_ref01" } }], "index$": 0 }] }, 'Recommendation', { "GET /users/{username}/recommendations": { "protocol": "http", "operationId": "getUserRecommendations", "responses": { "200": { "description": "Returns Recent Anime Recommendations", "content": { "application/json": { "schema": { "description": "Recommendations", "allOf": [{ "properties": { "data": { "items": { "properties": { "content": { "description": "Recommendation context provided by the user", "type": "string" }, "entry": { "description": "Array of 2 entries that are being recommended to each other", "items": { "anyOf": [{ "properties": { "images": { "properties": { "jpg": { "description": "Available images in JPG", "properties": { "image_url": { "description": "Image URL JPG", "nullable": true, "type": "string" }, "large_image_url": { "description": "Image URL JPG", "nullable": true, "type": "string" }, "small_image_url": { "description": "Small Image URL JPG", "nullable": true, "type": "string" } }, "type": "object" }, "webp": { "description": "Available images in WEBP", "properties": { "image_url": { "description": "Image URL WEBP", "nullable": true, "type": "string" }, "large_image_url": { "description": "Image URL WEBP", "nullable": true, "type": "string" }, "small_image_url": { "description": "Small Image URL WEBP", "nullable": true, "type": "string" } }, "type": "object" } }, "type": "object", "x-ref": "#/components/schemas/anime_images" }, "mal_id": { "description": "MyAnimeList ID", "type": "integer" }, "title": { "description": "Entry title", "type": "string" }, "url": { "description": "MyAnimeList URL", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/anime_meta" }, { "properties": { "images": { "properties": { "jpg": { "description": "Available images in JPG", "properties": { "image_url": { "description": "Image URL JPG", "nullable": true, "type": "string" }, "large_image_url": { "description": "Image URL JPG", "nullable": true, "type": "string" }, "small_image_url": { "description": "Small Image URL JPG", "nullable": true, "type": "string" } }, "type": "object" }, "webp": { "description": "Available images in WEBP", "properties": { "image_url": { "description": "Image URL WEBP", "nullable": true, "type": "string" }, "large_image_url": { "description": "Image URL WEBP", "nullable": true, "type": "string" }, "small_image_url": { "description": "Small Image URL WEBP", "nullable": true, "type": "string" } }, "type": "object" } }, "type": "object", "x-ref": "#/components/schemas/manga_images" }, "mal_id": { "description": "MyAnimeList ID", "type": "integer" }, "title": { "description": "Entry title", "type": "string" }, "url": { "description": "MyAnimeList URL", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/manga_meta" }], "type": "object" }, "type": "array" }, "mal_id": { "description": "MAL IDs of recommendations is both of the MAL ID's with a `-` delimiter", "type": "string" }, "user": { "description": "User Meta By ID", "properties": { "url": { "description": "MyAnimeList URL", "type": "string" }, "username": { "description": "MyAnimeList Username", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/user_by_id" } }, "type": "object" }, "key$": "data", "type": "array" } }, "type": "object", "index$": 0 }, { "properties": { "pagination": { "key$": "pagination", "properties": { "has_next_page": { "type": "boolean" }, "last_visible_page": { "type": "integer" } }, "type": "object" } }, "type": "object", "x-ref": "#/components/schemas/pagination", "index$": 1 }], "x-ref": "#/components/schemas/recommendations" } } } }, "400": { "description": "Error: Bad request. When required parameters were not supplied." } }, "parameters": [{ "name": "username", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "page", "in": "query", "schema": { "type": "integer" }, "x-ref": "#/components/parameters/page", "index$": 1 }], "securitySource": "unspecified" }, "GET /recommendations/anime": { "protocol": "http", "operationId": "getRecentAnimeRecommendations", "responses": { "200": { "description": "Returns recent anime recommendations", "content": { "application/json": { "schema": { "description": "Recommendations", "allOf": [{ "properties": { "data": { "items": { "properties": { "content": { "description": "Recommendation context provided by the user", "type": "string" }, "entry": { "description": "Array of 2 entries that are being recommended to each other", "items": { "anyOf": [{ "properties": { "images": { "properties": { "jpg": { "description": "Available images in JPG", "properties": { "image_url": { "description": "Image URL JPG", "nullable": true, "type": "string" }, "large_image_url": { "description": "Image URL JPG", "nullable": true, "type": "string" }, "small_image_url": { "description": "Small Image URL JPG", "nullable": true, "type": "string" } }, "type": "object" }, "webp": { "description": "Available images in WEBP", "properties": { "image_url": { "description": "Image URL WEBP", "nullable": true, "type": "string" }, "large_image_url": { "description": "Image URL WEBP", "nullable": true, "type": "string" }, "small_image_url": { "description": "Small Image URL WEBP", "nullable": true, "type": "string" } }, "type": "object" } }, "type": "object", "x-ref": "#/components/schemas/anime_images" }, "mal_id": { "description": "MyAnimeList ID", "type": "integer" }, "title": { "description": "Entry title", "type": "string" }, "url": { "description": "MyAnimeList URL", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/anime_meta" }, { "properties": { "images": { "properties": { "jpg": { "description": "Available images in JPG", "properties": { "image_url": { "description": "Image URL JPG", "nullable": true, "type": "string" }, "large_image_url": { "description": "Image URL JPG", "nullable": true, "type": "string" }, "small_image_url": { "description": "Small Image URL JPG", "nullable": true, "type": "string" } }, "type": "object" }, "webp": { "description": "Available images in WEBP", "properties": { "image_url": { "description": "Image URL WEBP", "nullable": true, "type": "string" }, "large_image_url": { "description": "Image URL WEBP", "nullable": true, "type": "string" }, "small_image_url": { "description": "Small Image URL WEBP", "nullable": true, "type": "string" } }, "type": "object" } }, "type": "object", "x-ref": "#/components/schemas/manga_images" }, "mal_id": { "description": "MyAnimeList ID", "type": "integer" }, "title": { "description": "Entry title", "type": "string" }, "url": { "description": "MyAnimeList URL", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/manga_meta" }], "type": "object" }, "type": "array" }, "mal_id": { "description": "MAL IDs of recommendations is both of the MAL ID's with a `-` delimiter", "type": "string" }, "user": { "description": "User Meta By ID", "properties": { "url": { "description": "MyAnimeList URL", "type": "string" }, "username": { "description": "MyAnimeList Username", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/user_by_id" } }, "type": "object" }, "key$": "data", "type": "array" } }, "type": "object", "index$": 0 }, { "properties": { "pagination": { "key$": "pagination", "properties": { "has_next_page": { "type": "boolean" }, "last_visible_page": { "type": "integer" } }, "type": "object" } }, "type": "object", "x-ref": "#/components/schemas/pagination", "index$": 1 }], "x-ref": "#/components/schemas/recommendations" } } } }, "400": { "description": "Error: Bad request. When required parameters were not supplied." } }, "parameters": [{ "name": "page", "in": "query", "schema": { "type": "integer" }, "x-ref": "#/components/parameters/page", "index$": 0 }], "securitySource": "unspecified" }, "GET /recommendations/manga": { "protocol": "http", "operationId": "getRecentMangaRecommendations", "responses": { "200": { "description": "Returns recent manga recommendations", "content": { "application/json": { "schema": { "description": "Recommendations", "allOf": [{ "properties": { "data": { "items": { "properties": { "content": { "description": "Recommendation context provided by the user", "type": "string" }, "entry": { "description": "Array of 2 entries that are being recommended to each other", "items": { "anyOf": [{ "properties": { "images": { "properties": { "jpg": { "description": "Available images in JPG", "properties": { "image_url": { "description": "Image URL JPG", "nullable": true, "type": "string" }, "large_image_url": { "description": "Image URL JPG", "nullable": true, "type": "string" }, "small_image_url": { "description": "Small Image URL JPG", "nullable": true, "type": "string" } }, "type": "object" }, "webp": { "description": "Available images in WEBP", "properties": { "image_url": { "description": "Image URL WEBP", "nullable": true, "type": "string" }, "large_image_url": { "description": "Image URL WEBP", "nullable": true, "type": "string" }, "small_image_url": { "description": "Small Image URL WEBP", "nullable": true, "type": "string" } }, "type": "object" } }, "type": "object", "x-ref": "#/components/schemas/anime_images" }, "mal_id": { "description": "MyAnimeList ID", "type": "integer" }, "title": { "description": "Entry title", "type": "string" }, "url": { "description": "MyAnimeList URL", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/anime_meta" }, { "properties": { "images": { "properties": { "jpg": { "description": "Available images in JPG", "properties": { "image_url": { "description": "Image URL JPG", "nullable": true, "type": "string" }, "large_image_url": { "description": "Image URL JPG", "nullable": true, "type": "string" }, "small_image_url": { "description": "Small Image URL JPG", "nullable": true, "type": "string" } }, "type": "object" }, "webp": { "description": "Available images in WEBP", "properties": { "image_url": { "description": "Image URL WEBP", "nullable": true, "type": "string" }, "large_image_url": { "description": "Image URL WEBP", "nullable": true, "type": "string" }, "small_image_url": { "description": "Small Image URL WEBP", "nullable": true, "type": "string" } }, "type": "object" } }, "type": "object", "x-ref": "#/components/schemas/manga_images" }, "mal_id": { "description": "MyAnimeList ID", "type": "integer" }, "title": { "description": "Entry title", "type": "string" }, "url": { "description": "MyAnimeList URL", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/manga_meta" }], "type": "object" }, "type": "array" }, "mal_id": { "description": "MAL IDs of recommendations is both of the MAL ID's with a `-` delimiter", "type": "string" }, "user": { "description": "User Meta By ID", "properties": { "url": { "description": "MyAnimeList URL", "type": "string" }, "username": { "description": "MyAnimeList Username", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/user_by_id" } }, "type": "object" }, "key$": "data", "type": "array" } }, "type": "object", "index$": 0 }, { "properties": { "pagination": { "key$": "pagination", "properties": { "has_next_page": { "type": "boolean" }, "last_visible_page": { "type": "integer" } }, "type": "object" } }, "type": "object", "x-ref": "#/components/schemas/pagination", "index$": 1 }], "x-ref": "#/components/schemas/recommendations" } } } }, "400": { "description": "Error: Bad request. When required parameters were not supplied." } }, "parameters": [{ "name": "page", "in": "query", "schema": { "type": "integer" }, "x-ref": "#/components/parameters/page", "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let recommendation_ref01_data = Object.values(setup.data.existing.recommendation)[0];
        // LIST
        const recommendation_ref01_ent = client.Recommendation();
        const recommendation_ref01_match = {};
        const recommendation_ref01_list = (await recommendation_ref01_ent.list(recommendation_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/recommendation/RecommendationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.JikanRestSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['recommendation01', 'recommendation02', 'recommendation03', 'user01', 'user02', 'user03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'JIKAN_REST_TEST_RECOMMENDATION_ENTID': idmap,
        'JIKAN_REST_TEST_LIVE': 'FALSE',
        'JIKAN_REST_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['JIKAN_REST_TEST_RECOMMENDATION_ENTID'];
    const live = 'TRUE' === env.JIKAN_REST_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['JIKAN_REST_TEST_RECOMMENDATION_ENTID'];
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
//# sourceMappingURL=RecommendationEntity.test.js.map