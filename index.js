//import HelloWorld from './lib/hello-world';


window.setTimeout(() => {
    console.log('Three seconds have passed and now we are doing a require.ensure() which loads separately!')

    require.ensure([], function() {
        var HelloWorld = require('./lib/hello-world');
        const hw = new HelloWorld();
        hw.speak();
    });


}, 3000);
