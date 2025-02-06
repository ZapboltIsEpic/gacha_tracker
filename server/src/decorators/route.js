"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = Route;
function Route(method, path) {
    if (path === void 0) { path = ''; }
    var middleware = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        middleware[_i - 2] = arguments[_i];
    }
    return function (target, key, descriptor) {
        var _a;
        var routePath = "".concat(path);
        var routeHandlers = Reflect.getMetadata('routeHandlers', target) || new Map();
        if (!routeHandlers.has(method)) {
            routeHandlers.set(method, new Map());
        }
        (_a = routeHandlers.get(method)) === null || _a === void 0 ? void 0 : _a.set(routePath, __spreadArray(__spreadArray([], middleware, true), [descriptor.value], false));
        Reflect.defineMetadata('routeHandlers', routeHandlers, target);
    };
}
