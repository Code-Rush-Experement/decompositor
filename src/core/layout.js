const vdom = require('virtual-dom');
const main = require('main-loop');
const hyperx = require('hyperx');


const listen = (dispatch) => {
  const layout = {};
  const hx = hyperx(vdom.h);

  const onMessage = (msg) => {
    console.log(msg);
    const { data, component, componentId } = msg;

    switch (data) {
      case 'scene/dashboard':
        changeScene('dashboard');
        break;
      case 'scene/login':
        changeScene('login');
        break;
      case 'scene/cacheComponent':
        cacheComponent(componentId, component);
        break;
      default:
        changeScene('default');
        break;
    }
  };

  function cacheComponent(componentId, component) {
    layout[componentId] = component;
  }

  function render(state) {
    const cmp = layout[state.sceneKey];
    console.log('render', state);
    console.log('component', cmp);
    return cmp || hx`<span>default</span>`;
  }


  const loop = main({ sceneKey: 'default' }, render, vdom);
  document.querySelector('.scene').appendChild(loop.target);

  function changeScene(name) {
    console.log('change scene', name);
    loop.update({ sceneKey: name });
  }

  return onMessage;
};

export default listen;
