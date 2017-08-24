const listen = (dispatch) => {
  const router = {
    routePaths: {},
  };

  const registerRoute = route => router.routePaths[route.primaryPath] = route;

  const handleLocalNavigation = (path) => {
    window.location.hash = path.primaryPath;
    navigateTo(window.location.href);
  };

  const onMessage = (msg) => {
    console.log('router', msg);
    const { message = msg, route = {} } = msg;

    switch (message) {
      case 'router/logged':
        handleLocalNavigation(router.routePaths.dashboard);
        break;
      case 'router/logged-out':
        handleLocalNavigation(router.routePaths.login);
        break;
      case 'router/register':
        registerRoute(route);
        break;
    }
  };

  window.addEventListener('popstate', (e) => {
    console.log('popstate', e);
    console.log('popstate.state', e.state);
    console.log('window.href', window.location.href);
    const state = e.state;
    if (state !== null) {
    }

    navigateTo(window.location.href);
  });

  function trimLocationToRelative(path) {
    return path.split('#')[1] || '';
  }

  function routeHref(e) {
    const path = e.target.href;
    const isLocalPath = path.includes(window.location.origin);
    if (isLocalPath) {
      e && e.preventDefault();
      navigateTo(path);
    }
  }

  function navigateTo(path) {
    const localPath = trimLocationToRelative(path);
    const notMatchPath = 'notMatch';
    console.log('localPath', localPath);
    const routePath = router.routePaths[localPath] || router.routePaths[notMatchPath];

    if (!routePath) {
      console.warn(`route is not found for path ${path} - ${localPath}`);
      return;
    }

    const historyPath = routePath.primaryPath || (localPath);
    console.log('route to history ', historyPath);
    routePath.onActivate && routePath.onActivate();
    // TODO: (Denis) is it really good for router to know about scene?
    dispatch({ data: `scene/${routePath.scene}` });
  }


  function initiate() {
    navigateTo(window.location.href);
  }

  initiate();

  return onMessage;
};

export default listen;
