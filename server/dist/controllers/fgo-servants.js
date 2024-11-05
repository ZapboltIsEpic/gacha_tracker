"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FGOServantsController = void 0;
const controller_1 = require("../decorators/controller");
const route_1 = require("../decorators/route");
const getAll_1 = require("../decorators/mongoose/getAll");
const create_1 = require("../decorators/mongoose/create");
const multer_1 = __importDefault(require("multer"));
const fgo_servantsModel_1 = require("../models/fgo-servantsModel"); // Adjust the path as necessary
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
let FGOServantsController = class FGOServantsController {
    getAllServants(req, res) {
        console.log('Get all servants');
        return res.status(200).json(req.mongoGetAll);
    }
    createServant(req, res) {
        return res.status(200).json(req.mongoCreate);
    }
};
exports.FGOServantsController = FGOServantsController;
__decorate([
    (0, route_1.Route)('get', '/get/all'),
    (0, getAll_1.MongoGetAll)(fgo_servantsModel_1.FGOServants)
], FGOServantsController.prototype, "getAllServants", null);
__decorate([
    (0, route_1.Route)('post', '/create', upload.single('image')),
    (0, create_1.MongoCreate)(fgo_servantsModel_1.FGOServants)
], FGOServantsController.prototype, "createServant", null);
exports.FGOServantsController = FGOServantsController = __decorate([
    (0, controller_1.Controller)('/api/gachatracker/fgo/servants')
], FGOServantsController);