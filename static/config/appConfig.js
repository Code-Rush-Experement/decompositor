function routeToDashboard(e) {
    console.log("route to dashboard");
}

function routeToHome(e) {
    console.log("route to home");
}

const appConfig = {
  components: {
      'default': `
            default	scene <button onclick={dispatchMessage("scene/login")}>login</button>
       `,
      'dashboard':`
            <iframe class="component" src="./components/header.html"></iframe>	
            <hr />											
            <iframe class="component dashboard" src="./components/dashboard.html"></iframe>	
       `,
      'login':`
            <iframe class="component" src="./components/header.html"></iframe>	
            <hr />											
            <iframe class="component" src="./components/login.html"></iframe>	
       `,
  },
  routes: {
    home: {scene:'home', primaryPath:'home', onActivate: routeToHome},
    dashboard: {scene:'dashboard', primaryPath:'dashboard', onActivate: routeToDashboard},
    login: {scene:'login', primaryPath:'login'}
  },
};