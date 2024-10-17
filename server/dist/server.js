"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const declareHandler_1 = require("./middleware/declareHandler");
const database_1 = require("./utils/database");
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
(0, database_1.connectDB)();
const port = 3000;
const DATABASENAME = "gachatrackerdb";
let database;
mongoose_1.default.connection.once('open', () => {
    database = mongoose_1.default.connection;
    console.log('Connected to MongoDB');
});
exports.app.use(declareHandler_1.declareHandler);
exports.app.listen(port, () => console.log(`Server running on port ${port}`));
