var router = {};

router.onMessage = (msg) => {
    console.log(msg);

    switch (msg) {
        case 'logged':
            handleLocalNavigation(dashboardPath);
        break;
        case 'logged-out':
            handleLocalNavigation(loginPath);
        break;
    }
}

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

const homePath = {scene:'home', primaryPath:'home', onActivate: routeToHome};
const dashboardPath = {scene:'dashboard', primaryPath:'dashboard', onActivate: routeToDashboard};
const loginPath = {scene:'login', primaryPath:'login'};

const routePaths = {
    '': homePath,
    [homePath.primaryPath]: homePath,
    [loginPath.primaryPath]: loginPath,
    [dashboardPath.primaryPath]: dashboardPath,
    'notMatch': homePath
};

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
    const routePath = routePaths[localPath] || routePaths['notMatch'];
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

function routeToDashboard(e) {
    console.log("route to dashboard");
}

function routeToHome(e) {
    console.log("route to home");
}


function initiate() {
    route(window.location.href);
}

initiate();