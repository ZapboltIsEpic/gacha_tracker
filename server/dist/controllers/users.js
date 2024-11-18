"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const controller_1 = require("../decorators/controller");
const route_1 = require("../decorators/route");
const getAll_1 = require("../decorators/mongoose/getAll");
const usersModel_1 = require("../models/usersModel");
const create_1 = require("../decorators/mongoose/create");
const bcrypt_1 = __importDefault(require("bcrypt"));
let UsersController = class UsersController {
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                // 1. Validate input
                if (!email || !password) {
                    return res.status(400).json({ error: 'Email and password are required' });
                }
                // 2. Find user by email
                const user = yield usersModel_1.Users.findOne({ email });
                if (!user) {
                    return res.status(404).json({ error: 'User not found' });
                }
                // 3. Check if the password matches
                const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
                if (!isPasswordValid) {
                    return res.status(401).json({ error: 'Invalid password' });
                }
                // // 4. Generate a JWT token
                // const token = jwt.sign(
                //     { id: user._id, email: user.email },
                //     process.env.JWT_SECRET || 'your_jwt_secret',
                //     { expiresIn: '1h' }
                // );
                // 5. Send the token as a response
                return res.status(200).json({ message: 'User logged in' });
            }
            catch (error) {
                console.error('Login error:', error);
                return res.status(500).json({ error: 'An error occurred during login' });
            }
        });
    }
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
    (0, route_1.Route)('post', '/login')
], UsersController.prototype, "loginUser", null);
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
