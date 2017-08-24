const listen = (dispatch) => {

  const components = {};
  const defaultComponent = undefined;

  const registerComponent = wrappedCmp => components[wrappedCmp.id] = wrappedCmp.component;

  const getComponent = id => components[id] || defaultComponent;

  return ({ message, component = {}, componentId }) => {
    switch (message) {
      case 'registry/register':
        registerComponent(component);
        break;
      case 'registry/get':
        //FIXME(anlesk): I don't really like the solution. Registry component should not know anything about scene. Maybe we should provide a message or callback?
        dispatch({ message: 'scene/cacheComponent', component: getComponent(componentId), componentId });
    }
  };
};

export default listen;