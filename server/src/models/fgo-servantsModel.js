"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FGOServants = void 0;
var mongoose_1 = require("mongoose");
var fgoservantSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    class: {
        type: String,
        required: true,
    },
    rarity: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: Buffer,
    },
    // skills, ascension needed to be added
});
exports.FGOServants = mongoose_1.default.model('fgoservants', fgoservantSchema);
