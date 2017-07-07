import layout from './core/layout.js';
import router from './core/router.js';

const internalComponents = [];

const dispatch = (data) => {
    document.querySelectorAll('.component').forEach((component) => {
        component.contentWindow.postMessage(data, '*');
    });
    internalComponents.forEach( _ => _(data))
};

const addListener = (binder) => {
    const handler = binder(dispatch);
    internalComponents.push(handler);
    window.addEventListener("message", ({ data }) => handler(data), false)
}


addListener(layout);
addListener(router);

console.log('hi here');