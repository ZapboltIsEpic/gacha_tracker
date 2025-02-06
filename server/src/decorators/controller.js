"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = Controller;
function Controller(baseRoute) {
    if (baseRoute === void 0) { baseRoute = ''; }
    return function (target) {
        Reflect.defineMetadata('baseRoute', baseRoute, target);
    };
}
