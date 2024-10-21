"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER = exports.PORT = exports.SERVER_HOSTNAME = exports.PRODUCTION = exports.TEST = exports.DEVELOPMENT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.DEVELOPMENT = process.env.NODE_ENV === 'development';
exports.TEST = process.env.NODE_ENV === 'test';
exports.PRODUCTION = process.env.NODE_ENV === 'production';
exports.SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
exports.PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
exports.SERVER = {
    SERVER_HOSTNAME: exports.SERVER_HOSTNAME,
    PORT: exports.PORT,
};
