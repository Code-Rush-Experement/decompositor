const layout = {};

{
    layout.changeScene = (name) => {
        console.log("change scene" , name);
        document.querySelector(`.scene`).innerHTML = registry.getComponent(name);
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
            default:
                layout.changeScene(`default`);
                break;
        }
    }
;
}




layout.changeScene("default");

