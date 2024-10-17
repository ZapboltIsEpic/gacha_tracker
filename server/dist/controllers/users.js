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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const controller_1 = require("../decorators/controller");
const route_1 = require("../decorators/route");
const getAll_1 = require("../decorators/mongoose/getAll");
const usersModel_1 = require("../models/usersModel");
(0, controller_1.Controller)('/api/gachatracker/gachatrackerusers/');
let UsersController = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _getAllUsers_decorators;
    let _getUserById_decorators;
    let _createUser_decorators;
    let _updateUser_decorators;
    let _deleteUser_decorators;
    return _a = class UsersController {
            getAllUsers(req, res) {
                return res.status(200).json(req.mongoGetAll);
            }
            getUserById(req, res) {
                return res.status(200).json(req.mongoGet);
            }
            createUser(req, res) {
                return res.status(200).json(req.mongoCreate);
            }
            updateUser(req, res) {
                return res.status(200).json(req.mongoUpdate);
            }
            deleteUser(req, res) {
                return res.status(200).json({ message: 'User deleted' });
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _getAllUsers_decorators = [(0, route_1.Route)('get', 'get/all'), (0, getAll_1.MongoGetAll)(usersModel_1.Users)];
            _getUserById_decorators = [(0, route_1.Route)('get', 'get/:id')];
            _createUser_decorators = [(0, route_1.Route)('post', 'create')];
            _updateUser_decorators = [(0, route_1.Route)('put', 'update/:id')];
            _deleteUser_decorators = [(0, route_1.Route)('delete', 'delete/:id')];
            __esDecorate(_a, null, _getAllUsers_decorators, { kind: "method", name: "getAllUsers", static: false, private: false, access: { has: obj => "getAllUsers" in obj, get: obj => obj.getAllUsers }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _getUserById_decorators, { kind: "method", name: "getUserById", static: false, private: false, access: { has: obj => "getUserById" in obj, get: obj => obj.getUserById }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _createUser_decorators, { kind: "method", name: "createUser", static: false, private: false, access: { has: obj => "createUser" in obj, get: obj => obj.createUser }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _updateUser_decorators, { kind: "method", name: "updateUser", static: false, private: false, access: { has: obj => "updateUser" in obj, get: obj => obj.updateUser }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _deleteUser_decorators, { kind: "method", name: "deleteUser", static: false, private: false, access: { has: obj => "deleteUser" in obj, get: obj => obj.deleteUser }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.UsersController = UsersController;
