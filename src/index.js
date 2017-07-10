import layout from './core/layout.js';
import router from './core/router.js';
import { addListener } from './core/event-bus.js';

addListener(layout);
addListener(router);

console.log('hi here');