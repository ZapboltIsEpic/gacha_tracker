"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamesController = void 0;
var controller_1 = require("../decorators/controller");
var route_1 = require("../decorators/route");
var getAll_1 = require("../decorators/mongoose/getAll");
var gamesModel_1 = require("../models/gamesModel");
var create_1 = require("../decorators/mongoose/create");
var multer_1 = require("multer");
var upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
var GamesController = function () {
    var _classDecorators = [(0, controller_1.Controller)('/api/gachatracker/games')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getAllGames_decorators;
    var _createGame_decorators;
    var GamesController = _classThis = /** @class */ (function () {
        function GamesController_1() {
            __runInitializers(this, _instanceExtraInitializers);
        }
        GamesController_1.prototype.getAllGames = function (req, res) {
            console.log('Get all games');
            return res.status(200).json(req.mongoGetAll);
        };
        GamesController_1.prototype.createGame = function (req, res) {
            return res.status(200).json(req.mongoCreate);
        };
        return GamesController_1;
    }());
    __setFunctionName(_classThis, "GamesController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getAllGames_decorators = [(0, route_1.Route)('get', '/get/all'), (0, getAll_1.MongoGetAll)(gamesModel_1.Games)];
        _createGame_decorators = [(0, route_1.Route)('post', '/create', upload.single('image')), (0, create_1.MongoCreate)(gamesModel_1.Games)];
        __esDecorate(_classThis, null, _getAllGames_decorators, { kind: "method", name: "getAllGames", static: false, private: false, access: { has: function (obj) { return "getAllGames" in obj; }, get: function (obj) { return obj.getAllGames; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createGame_decorators, { kind: "method", name: "createGame", static: false, private: false, access: { has: function (obj) { return "createGame" in obj; }, get: function (obj) { return obj.createGame; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GamesController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GamesController = _classThis;
}();
exports.GamesController = GamesController;
