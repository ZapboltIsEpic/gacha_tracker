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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoGetAll = MongoGetAll;
function MongoGetAll(model) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (req, res, next) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const data = yield model.find();
                    const transformedData = data.map((item) => {
                        if (item.image && Buffer.isBuffer(item.image)) {
                            return Object.assign(Object.assign({}, item.toObject()), { image: `data:image/jpeg;base64,${item.image.toString('base64')}` });
                        }
                        return item;
                    });
                    req.mongoGetAll = transformedData;
                    console.log('Fetched data:', data);
                }
                catch (error) {
                    return res.status(500).json({ message: 'Internal server error' });
                }
                return originalMethod.call(this, req, res, next);
            });
        };
        return descriptor;
    };
}
