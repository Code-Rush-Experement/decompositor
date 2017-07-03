var router = {};

router.onMessage = (msg) => {
    console.log(msg);

    switch (msg) {
        case 'logged':
            onMessage({ data: 'scene/dashboard'});
        break;
        case 'logged-out':
            onMessage({ data: 'scene/login'});
        break;
    }
}