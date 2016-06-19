# per-testing
Basic setup Grunt with Webpack

```
nmp install --save-dev grunt

nmp install --save-dev webpack

npm install webpack-dev-server --save-dev

npm install --save-dev babel-cli babel-loader babel-core babel-preset-es2015
```

Create a file in the folder called .babelrc (with the initial dot!)
In that file, write:
```
{ 'presets': ['es2015'] }
```

```
npm install grunt-webpack --save-dev
```

Make this Gruntfile.js for demo purpose:
```
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
```

Create a file called index.js


Create a file called index.html and include the following in it:
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>A title</title>
  </head>
<body>
    <div id="example"></div>
    <script src="dist/bundle.js"></script>
</body>
</html>
```
