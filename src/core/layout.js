import { registry } from './registry';

const listen = (dispatch) => {

    const layout = {};

    const vdom = require('virtual-dom');
    const main = require('main-loop');
    const hyperx = require('hyperx');
    const hx = hyperx(vdom.h);

    const onMessage = (msg) => {
        console.log(msg);

        switch (msg.data) {
            case `scene/dashboard`:
                changeScene(`dashboard`);
            break;
            case `scene/login`:
                changeScene(`login`);
            break;
            default:
                changeScene(`default`);
            break;
        }
    }
    ;

    function render (state) {
        const cmp = registry.getComponent(state.sceneKey);
        console.log('render', state);
        console.log('component', cmp);
        return cmp || hx`<span>default</span>`;
    }


    const loop = main({ sceneKey: "default" }, render, vdom);
    document.querySelector('.scene').appendChild(loop.target);

    const changeScene = (name) => {
        console.log("change scene" , name);
        loop.update({ sceneKey: name });
    };

    return onMessage;
};

export default listen;