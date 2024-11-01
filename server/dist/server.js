"use strict";
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
exports.Shutdown = exports.Main = exports.httpServer = exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require("reflect-metadata");
const declareHandler_1 = require("./middleware/declareHandler");
const database_1 = require("./utils/database");
const main_1 = __importDefault(require("./controllers/main"));
const routes_1 = require("./modules/routes");
const users_1 = require("./controllers/users");
const games_1 = require("./controllers/games");
const fgo_servants_1 = require("./controllers/fgo-servants");
exports.app = (0, express_1.default)();
const Main = () => __awaiter(void 0, void 0, void 0, function* () {
    exports.app.use((0, cors_1.default)());
    exports.app.use(express_1.default.json());
    yield (0, database_1.connectDB)();
    const port = 3000;
    exports.app.use(declareHandler_1.declareHandler);
    // app.use(imageHandler);
    (0, routes_1.defineRoutes)([main_1.default, users_1.UsersController, games_1.GamesController, fgo_servants_1.FGOServantsController], exports.app);
    exports.app.listen(port, () => console.log(`Server running on port ${port}`));
});
exports.Main = Main;
const Shutdown = (callback) => {
    mongoose_1.default.connection.close(false).then(() => {
        console.log('Mongoose connection closed');
        callback();
    }).catch((err) => {
        console.error('Error closing Mongoose connection:', err);
        callback(err);
    });
};
exports.Shutdown = Shutdown;
(0, exports.Main)().catch(err => console.error('Error starting server:', err));
