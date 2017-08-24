import layout from './core/layout';
import registry from './core/registry';
import app from './core/app';
import appConfig from './core/app-config';
import router from './core/router';
import { addListener, dispatch } from './core/event-bus';

addListener(registry);
addListener(layout);
addListener(router);

addListener(app);
dispatch({ message: 'init', config: appConfig });

console.log('hi here');
