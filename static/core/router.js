const router = {
    routePaths: {},
};

router.onMessage = (msg) => {
    console.log(msg);
    const { message = msg, route = {} } = msg;

    switch (message) {
        case 'router/logged':
            handleLocalNavigation(router.routePaths.login);
            break;
        case 'router/logged-out':
            handleLocalNavigation(router.routePaths.login);
            break;
        case 'router/register':
            registerRoute(route);
            break;
    }
}

const registerRoute = route => router.routePaths[route.primaryPath] = route;

const handleLocalNavigation = (path) => {
    window.location.hash = path.primaryPath;
    route(window.location.href);
}


window.addEventListener('popstate', function (e) {
    console.log('popstate', e);
    console.log('popstate.state', e.state);
    console.log('window.href', window.location.href);
    let state = e.state;
    if (state !== null) {
    }

    route(window.location.href);
});

function trimLocationToRelative(path) {
    return path.split('#')[1] || '';
}

function routeHref(e) {
    let path = e.target.href;
    let isLocalPath = path.includes(window.location.origin);
    if (isLocalPath) {
        e && e.preventDefault();
        route(path);
    }
}

function route(path) {
    let localPath = trimLocationToRelative(path);
    console.log(`localPath`, localPath);
    const routePath = router.routePaths[localPath] || router.routePaths['notMatch'];
    if (!routePath) {
        console.warn(`route is not found for path ${path} - ${localPath}`);
        return;
    }

    let historyPath = routePath.primaryPath || (localPath);
    console.log('route to history ' , historyPath);
    //history.pushState({}, null, window.origin + window.location.pathname + historyPath);
    routePath.onActivate && routePath.onActivate();
    onMessage({ data: `scene/${routePath.scene}`});
}

function initiate() {
    route(window.location.href);
}

initiate();