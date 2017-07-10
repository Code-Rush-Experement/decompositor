const layout = {};

{
    layout.changeScene = (name) => {
        const component = registry.getComponent(name);
        document.querySelector(`.scene`).innerHTML = component;
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

