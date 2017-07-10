class App {
    registerComponent(component){
        return dispatchMessage({
            message: 'registry/register',
            component,
        });
    }

    registerRoute(route) {
        return dispatchMessage({
            message: 'router/register',
            route,
        });
    }

    init() {
        Object.keys(appConfig.components)
            .forEach(key => this.registerComponent(appConfig.components[key]));

        Object.keys(appConfig.routes)
            .forEach(key => this.registerRoute(appConfig.routes[key]));
    }
}

new App().init();



