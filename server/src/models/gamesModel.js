"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Games = void 0;
var mongoose_1 = require("mongoose");
var gameSchema = new mongoose_1.default.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    image: {
        type: Buffer,
    },
});
exports.Games = mongoose_1.default.model('games', gameSchema);
