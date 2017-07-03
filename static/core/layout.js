var layout = {};

{
    const layout_template = {
        'default': `
                default	scene <button onclick="layout.changeScene('login')">login</button>
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
    };

    layout.changeScene = (name) => {
        console.log("change scene" , name);
        document.querySelector(`.scene`).innerHTML = layout_template[name];
    };

    layout.onMessage = (msg) => {
        console.log(msg);

        switch (msg) {
            case `scene/dashboard`:
                layout.changeScene(`dashboard`);
            break;
            case `scene/login`:
                layout.changeScene(`login`);
            break;
        }
    }
;
}




layout.changeScene("default");

