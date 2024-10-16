"use strict";
// const cors = require('cors');
// const express = require('express');
// const Users = require('models/usersModels');
// const connectDB = require('./utils/database');
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
// const app = express();
// app.use(cors());
// connectDB();
// const port = 3000;
// var DATABASENAME = "gachatrackerdb";
// var database;
// app.get('/api/gachatracker/gachatrackerusers', (req, res) => {
//   database.collection('gachatrackerusers').find().toArray((err, result) => {
//     if (err) throw err
//     res.send(result);
//   });
// });
// app.listen(port, () => console.log(`Server running on port ${port}`));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const usersModel_1 = require("./models/usersModel");
const database_1 = require("./utils/database");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
(0, database_1.connectDB)();
const port = 3000;
const DATABASENAME = "gachatrackerdb";
let database;
mongoose_1.default.connection.once('open', () => {
    database = mongoose_1.default.connection;
    console.log('Connected to MongoDB');
});
app.get('/api/gachatracker/gachatrackerusers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield usersModel_1.Users.find().exec();
        res.send(users);
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
app.listen(port, () => console.log(`Server running on port ${port}`));
