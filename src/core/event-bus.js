function dispatchToExternal(data) {
    console.log(data);

    document.querySelectorAll('.component').forEach((component) => {
        component.contentWindow.postMessage(data, '*');
    });
}
			
const internalComponents = [];

export const dispatch = (data) => {
    dispatchToExternal(data);
    dispatchToInternal(data);
};

const dispatchToInternal = (data) => {
    internalComponents.forEach( _ => _(data))
}

export const addListener = (binder) => {
    const handler = binder(dispatch);
    internalComponents.push(handler);
    //window.addEventListener("message", ({ data }) => handler(data), false)
}


window.addEventListener("message", ({ data }) => {
    dispatch(data);
});
