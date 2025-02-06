"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineRoutes = defineRoutes;
function defineRoutes(controllers, application) {
    for (var i = 0; i < controllers.length; i++) {
        var controller = new controllers[i]();
        var routeHandlers = Reflect.getMetadata('routeHandlers', controller);
        console.log('routeHandlers: ' + routeHandlers);
        var controllerPath = Reflect.getMetadata('baseRoute', controller.constructor);
        var methods = Array.from(routeHandlers.keys());
        for (var j = 0; j < methods.length; j++) {
            var method = methods[j];
            var routes = routeHandlers.get(method);
            if (routes) {
                var routeNames = Array.from(routes.keys());
                for (var k = 0; k < routeNames.length; k++) {
                    var handlers = routes.get(routeNames[k]);
                    if (handlers) {
                        application[method](controllerPath + routeNames[k], handlers);
                        console.log('Loading route : ' + controllerPath + routeNames[k]);
                    }
                }
            }
        }
    }
}
