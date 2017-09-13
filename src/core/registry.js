export const registry = {
  components: {},
};

const listen = (dispatch) => {
  const registerComponent = wrappedCmp => registry.components[wrappedCmp.id] = wrappedCmp.component;

  const defaultComponent = undefined;
  registry.getComponent = id => registry.components[id] || defaultComponent;


  return ({ message, component = {} }) => {
    switch (message) {
      case 'registry/register':
        registerComponent(component);
        break;
    }
  };
};

export default listen;
