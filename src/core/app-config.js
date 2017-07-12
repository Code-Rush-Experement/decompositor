function routeToDashboard(e) {
    console.log("route to dashboard");
}

function routeToHome(e) {
    console.log("route to home");
}

const vdom = require('virtual-dom');
const hyperx = require('hyperx');
const hx = hyperx(vdom.h);

const dashboardScene = hx`<div> <iframe class="component" src="./components/header.html"></iframe>	
                    <hr />											
                    <iframe class="component dashboard" src="./components/dashboard.html"></iframe>	
                    </div>`;
const loginScene = hx`<div> <iframe class="component" src="./components/header.html"></iframe>	
                    <hr />											
                    <iframe class="component" src="./components/login.html"></iframe> </div>`;

const appConfig = {
    components: {
        'default': loginScene,
        'dashboard': dashboardScene,
        'login': loginScene,
    },
    routes: {
        home: {scene:'home', primaryPath:'home', onActivate: routeToHome},
        dashboard: {scene:'dashboard', primaryPath:'dashboard', onActivate: routeToDashboard},
        login: {scene:'login', primaryPath:'login'}
    },
};

export default appConfig;