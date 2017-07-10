const registry = {
    components: []
};

const defaultComponent = `registry default scene <button onclick={dispatchMessage("scene/login")}>login</button>`;

const registerComponent = component => registry.components.push(component);

registry.onMessage = ({ message, component = {} }) => {
    switch (message) {
        case 'registry/register':
            registerComponent(component);
            break;

    }
};

registry.getComponent = id => registry.components.find(c => c.id === id) || defaultComponent;