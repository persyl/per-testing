'use strict';
module.exports = function(grunt) {
    // Project configuration. Also possible to call grunt.initConfig(cfg)
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            src: ['lib/**']
        },
        webpack: {
            somedemo: {
                context: __dirname + "/",
                entry: "./index.js",
                output: {
                    path: __dirname + "/dist",
                    publicPath: "./dist/",
                    filename: "bundle.js"
                },
                module: {
                    loaders: [{
                        exclude: /node_modules/,
                        loaders: ['babel-loader']
                    }]
                }
            }
        }
    });

    //Load
    grunt.loadNpmTasks('grunt-webpack');

    //Register some custom tasks
    grunt.registerTask('hello-world', 'Perra Foo', function() {
        console.log('This is a custom Grunt demo task saying Hello World!');
    });

    // Default task(s).
    grunt.registerTask('default', ['hello-world', 'webpack']);
};
