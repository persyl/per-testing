//import HelloWorld from './lib/hello-world';

function init() {
    const output = document.getElementById('example');
    if (!output) {
        return;
    }

    output.innerHTML = 'Please wait...';

    window.setTimeout(() => {
        console.log('Three seconds have passed and now we are doing a require.ensure() which loads separately!')

        require.ensure([], function() {
            var HelloWorld = require('./lib/hello-world');
            const hw = new HelloWorld();
            output.innerHTML = hw.speak();
        });

    }, 3000);
}

require.ensure([], function() {
    (function() {
        init();
    })();
});
