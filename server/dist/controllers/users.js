"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const controller_1 = require("../decorators/controller");
const route_1 = require("../decorators/route");
const getAll_1 = require("../decorators/mongoose/getAll");
const usersModel_1 = require("../models/usersModel");
const create_1 = require("../decorators/mongoose/create");
let UsersController = class UsersController {
    getAllUsers(req, res) {
        console.log('Get all users');
        return res.status(200).json(req.mongoGetAll);
    }
    // @MongoGet(Users)
    getUserById(req, res) {
        return res.status(200).json(req.mongoGet);
    }
    createUser(req, res) {
        return res.status(200).json(req.mongoCreate);
    }
    // @MongoUpdate(Users)
    updateUser(req, res) {
        return res.status(200).json(req.mongoUpdate);
    }
    // @MongoDelete(Users)
    deleteUser(req, res) {
        return res.status(200).json({ message: 'User deleted' });
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, route_1.Route)('get', '/get/all'),
    (0, getAll_1.MongoGetAll)(usersModel_1.Users)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    (0, route_1.Route)('get', '/get/:id')
    // @MongoGet(Users)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, route_1.Route)('post', '/create'),
    (0, create_1.MongoCreate)(usersModel_1.Users)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, route_1.Route)('put', '/update/:id')
    // @MongoUpdate(Users)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, route_1.Route)('delete', '/delete/:id')
    // @MongoDelete(Users)
], UsersController.prototype, "deleteUser", null);
exports.UsersController = UsersController = __decorate([
    (0, controller_1.Controller)('/api/gachatracker/gachatrackerusers')
], UsersController);
