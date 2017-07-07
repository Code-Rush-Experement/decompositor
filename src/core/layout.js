const listen = (dispatch) => {

    const layout = {};


    const vdom = require('virtual-dom')
    const hyperx = require('hyperx')
    const hx = hyperx(vdom.h)

    const main = require('main-loop')

    const onMessage = (msg) => {
        console.log(msg);

        switch (msg.data) {
            case `scene/dashboard`:
                changeScene(`dashboard`);
            break;
            case `scene/login`:
                changeScene(`login`);
            break;
        }
    }
    ;

    function render (state) {
        let sceneHtml;
        switch (state.sceneKey) {
            case 'dashboard': sceneHtml = hx`<div> <iframe class="component" src="./components/header.html"></iframe>	
                    <hr />											
                    <iframe class="component dashboard" src="./components/dashboard.html"></iframe>	
                    </div>`; break;

            case 'login': 
            default:
                sceneHtml = hx`<div> <iframe class="component" src="./components/header.html"></iframe>	
                    <hr />											
                    <iframe class="component" src="./components/login.html"></iframe> </div>`; break; 
        } 
    
        return sceneHtml;
    }


    var loop = main({ sceneKey: "default" }, render, vdom)
    document.querySelector('.scene').appendChild(loop.target);

    const changeScene = (name) => {
        console.log("change scene" , name);
        loop.update({ sceneKey: name });
    };

    changeScene("default");

    return onMessage;
};

export default listen;