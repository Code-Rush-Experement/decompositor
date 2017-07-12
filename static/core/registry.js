const registry = {
    components: {}
};

const defaultComponent = `registry default scene <button onclick={dispatchMessage("scene/login")}>login</button>`;

const registerComponent = wrappedCmp => registry.components[wrappedCmp.id] = wrappedCmp.component;

registry.onMessage = ({ message, component = {} }) => {
    switch (message) {
        case 'registry/register':
            registerComponent(component);
            break;

    }
};

registry.getComponent = id => registry.components[id] || defaultComponent;