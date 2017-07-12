import layout from './core/layout.js';
import registry from './core/registry.js';
import app from './core/app.js';
import appConfig from './core/app-config.js';
import router from './core/router.js';
import { addListener, dispatch } from './core/event-bus.js';

addListener(registry);
addListener(layout);
addListener(router);

addListener(app);
dispatch({message: 'init', config: appConfig });

console.log('hi here');