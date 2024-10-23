"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageHandler = imageHandler;
function imageHandler(req, res, next) {
    const multer = require('multer');
    const storage = multer.memoryStorage();
    const upload = multer({ storage });
    next();
}
