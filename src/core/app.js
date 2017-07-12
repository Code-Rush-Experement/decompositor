export default function App(dispatchMessage) {
    const registerComponent = (component) => {
        return dispatchMessage({
            message: 'registry/register',
            component,
        });
    };

    const registerRoute = (route) => {
        return dispatchMessage({
            message: 'router/register',
            route,
        });
    };


    const init = (appConfig) => {
        Object.keys(appConfig.components)
            .forEach(key => registerComponent({ id: key, component: appConfig.components[key] }));

        Object.keys(appConfig.routes)
            .forEach(key => registerRoute(appConfig.routes[key]));
    };

    return ({message, config}) => {
        switch (message) {
            case 'init':
                init(config);
            break;
        }
    }
}

