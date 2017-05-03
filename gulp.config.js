module.exports = function() {
    var config = {
        build: {
            dest: './dist'
        },
        lint: {
            src: ['./app/**/*.js', '!./app/vendor/noNpm/**/*']
        },
        browserify: {
            src: './app/app.js', // Entry point
            outputDir: './dist/', // Directory to save bundle to
            mapDir: './maps/', // Subdirectory to save maps to
            outputFile: 'bundle.js', // Name to use for bundle
            watch: [
                './app/**/*.js',
                '!./app/**/*.spec.js',
                './app/**/*.html',
                './app/**/*.md'
            ]
        },
        styles: {
            src: './app/app.less',
            watch: ['./app/**/*.less'],
            dest: './dist/css/'
        },
        assets: {
            images: {
                src: './app/assets/images/**/*',
                watch: ['./app/assets/images', './app/assets/images/**/*'],
                dest: './dist/images/'
            },
            fonts: {
                src: ['./node_modules/font-awesome/fonts/*', './app/fonts/**/*'],
                dest: './dist/fonts/'
            }
        },
        vendorJS: {
            // These files will be bundled into a single vendor.js file that's called at the bottom of index.html
            src: ['./app/vendor/vendor.js']
        },
        //vendorCSS: {
        //    src: [
        //        './libs/bootstrap/dist/css/bootstrap.css', // v3.1.1
        //        './libs/font-awesome/css/font-awesome.css' // v4.1.0
        //    ]
        //},
        copyIndex: {
            src: './app/index.html',
            watch: './app/index.html'
        },
        copyFavicon: {
            src: './app/favicon.png'
        }
    };


    return config;
}