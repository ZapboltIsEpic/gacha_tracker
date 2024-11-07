"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FGOPersonalisedServants = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const fgoPersonalisedServantSchema = new mongoose_1.default.Schema({
    userEmail: {
        type: String,
        required: true,
    },
    servant: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'fgoservants',
        required: true,
    },
    fous: {
        type: (Map),
        required: true,
    },
    level: {
        type: Number,
        required: true,
    },
    bondLevel: {
        type: Number,
        required: true,
    }
});
exports.FGOPersonalisedServants = mongoose_1.default.model('fgopersonalisedservants', fgoPersonalisedServantSchema);
