"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineRoutes = defineRoutes;
function defineRoutes(controllers, application) {
    for (let i = 0; i < controllers.length; i++) {
        const controller = new controllers[i]();
        const routeHandlers = Reflect.getMetadata('routeHandlers', controller);
        console.log('routeHandlers: ' + routeHandlers);
        const controllerPath = Reflect.getMetadata('baseRoute', controller.constructor);
        const methods = Array.from(routeHandlers.keys());
        for (let j = 0; j < methods.length; j++) {
            const method = methods[j];
            const routes = routeHandlers.get(method);
            if (routes) {
                const routeNames = Array.from(routes.keys());
                for (let k = 0; k < routeNames.length; k++) {
                    const handlers = routes.get(routeNames[k]);
                    if (handlers) {
                        application[method](controllerPath + routeNames[k], handlers);
                        console.log('Loading route : ' + controllerPath + routeNames[k]);
                    }
                }
            }
        }
    }
}
