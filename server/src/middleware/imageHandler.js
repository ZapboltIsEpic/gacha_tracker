"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageHandler = imageHandler;
function imageHandler(req, res, next) {
    var multer = require('multer');
    var storage = multer.memoryStorage();
    var upload = multer({ storage: storage });
    next();
}
