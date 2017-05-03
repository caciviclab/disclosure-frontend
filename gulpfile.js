'use strict';

var argv = require('yargs').argv;
var browserify = require('browserify');
var browserifyCss = require('browserify-css');
var markedify = require('markedify');
var buffer = require('vinyl-buffer');

// =======================================================================
// Gulp Plugins
// =======================================================================
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    gutil = require('gulp-util'),
    livereload = require('gulp-livereload'),
    merge = require('merge'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    jscs = require('gulp-jscs'),
    concat = require('gulp-concat'),
    streamify = require('gulp-streamify'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    cssnano = require('gulp-cssnano'),
    prefix = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    webserver = require('gulp-webserver'),
    watchify = require('watchify'),
    del = require('del'),
    source = require('vinyl-source-stream'),
    sourceMaps = require('gulp-sourcemaps'),
    runSequence = require('run-sequence'),
    Karma = require('karma').Server,
    gulpif = require('gulp-if'),
    envify = require('envify');


// =======================================================================
// File Paths
// =======================================================================
var filePath = require('./gulp.config')();

// =======================================================================
// Error Handling
// =======================================================================
function handleError(err) {
    console.log(err.toString());
    gutil.debug(err);
    // this.emit('end');
}

// =======================================================================
// Server Task
// =======================================================================
var express = require('express'),
    server = express();
// Server settings
server.use(express.static(filePath.build.dest));
// Redirects everything back to our index.html
server.all('/*', function(req, res) {
    res.sendfile('/', {
        root: filePath.build.dest
    });
});
// uncomment the "middleware" section when you are ready to connect to an API
gulp.task('server', function() {
    connect.server({
        root: filePath.build.dest,
        fallback: filePath.build.dest + '/index.html',
        port: 5000,
        livereload: true
        // ,
        // middleware: function(connect, o) {
        //     return [ (function() {
        //         var url = require('url');
        //         var proxy = require('proxy-middleware');
        //         var options = url.parse('http://localhost:3000/'); // path to your dev API
        //         options.route = '/api';
        //         return proxy(options);
        //     })() ];
        // }
    });
});


// =======================================================================
// Clean out dist folder contents on build
// =======================================================================
gulp.task('clean-dev', function() {
    del(['./dist/*.js',
        './dist/css/*.css',
        '!./dist/fonts/**',
        '!./dist/vendor.js',
        '!./dist/vendor.css',
        './dist/*.html',
        './dist/*.png',
        './dist/*.ico',
        './reports/**/*',
        './reports']);
});

gulp.task('clean-full', function() {
    del(['./dist/*',
        './reports/**/*',
        './reports']);
});


// =======================================================================
// JSHint
// =======================================================================
gulp.task('lint', function() {
    return gulp.src(filePath.lint.src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});


// =======================================================================
// Javascript Checkstyles (JSCS)
// =======================================================================
gulp.task('checkstyle', function() {
    return gulp.src(filePath.lint.src)
    .pipe(jscs())
    .on('error', handleError);
});


// =======================================================================
// Browserify Bundle
// =======================================================================

function bundle(bundler) {
    // Add options to add to "base" bundler passed as parameter
    return bundler
      .transform(browserifyCss, {global: true})
      .transform(markedify)
      .bundle()                                                        // Start bundle
      .pipe(source(filePath.browserify.src))                        // Entry point
      .pipe(buffer())                                               // Convert to gulp pipeline
      .pipe(rename(filePath.browserify.outputFile))          // Rename output from 'app.js'
                                                                              //   to 'bundle.js'
      .pipe(sourceMaps.init({ loadMaps : true }))  // Strip inline source maps
      .pipe(sourceMaps.write(filePath.browserify.mapDir))    // Save source maps to their
                                                                       //   own directory
      .pipe(gulp.dest(filePath.browserify.outputDir))        // Save 'bundle' to build/
      .pipe(connect.reload());                              // Reload browser if relevant

      //TODO: add this code in for bundling dev vs prod
      //
}

gulp.task('bundle', function() {
    var bundler = browserify({
      entries: filePath.browserify.src, // Pass browserify the entry point
      debug: true
    });
    bundle(bundler).pipe(gulpif(!bundle.prod, sourceMaps.init({
                  loadMaps: true
              })))
              .pipe(gulpif(!bundle.prod, sourceMaps.write('./')))
              .pipe(gulpif(bundle.prod, streamify(uglify({
                  mangle: false
              }))))
// ;  // Chain other options -- sourceMaps, rename, etc.
});



// =======================================================================
// Styles Task
// =======================================================================
gulp.task('styles-dev', function() {
    return gulp.src(filePath.styles.src)
    .pipe(sourceMaps.init())
    .pipe(less())
    .on('error', handleError)
    .pipe(sourceMaps.write())
    .pipe(gulp.dest(filePath.build.dest + '/css'))
    .on('error', handleError)
    .pipe(notify({
        message: 'Styles task complete'
    }))
    .pipe(connect.reload());
});

gulp.task('styles-prod', function() {
    return gulp.src(filePath.styles.src)
    .pipe(less())
    .on('error', handleError)
    .pipe(prefix('last 1 version', '> 1%', {
        map: true
    }))
    .pipe(cssnano())
    .pipe(gulp.dest(filePath.build.dest + '/css'))
    .on('error', handleError)
    .pipe(notify({
        message: 'Styles task complete'
    }));
});


// =======================================================================
// Images Task
// =======================================================================
gulp.task('images', function() {
    return gulp.src(filePath.assets.images.src)
    .on('error', handleError)
    .pipe(gulp.dest(filePath.assets.images.dest))
    .pipe(notify({
        message: 'Images copied'
    }))
    .pipe(connect.reload());
});


// =======================================================================
// Fonts Task
// =======================================================================
gulp.task('fonts', function () {
    return gulp.src(filePath.assets.fonts.src)
        .on('error', handleError)
        .pipe(gulp.dest(filePath.assets.fonts.dest))
        .pipe(connect.reload());
});

// =======================================================================
// Vendor CSS Task
// =======================================================================
//gulp.task('vendorCSS', function() {
//    return gulp.src(filePath.vendorCSS.src)
//    .pipe(concat('vendor.css'))
//    .on('error', handleError)
//    .pipe(cssnano())
//    .pipe(gulp.dest(filePath.build.dest))
//    .pipe(notify({
//        message: 'VendorCSS task complete'
//    }))
//    .pipe(connect.reload());
//});


// =======================================================================
// Copy index.html
// =======================================================================
gulp.task('copyIndex', function() {
    return gulp.src(filePath.copyIndex.src)
    .pipe(gulp.dest(filePath.build.dest))
    .pipe(notify({
        message: 'index.html successfully copied'
    }))
    .pipe(connect.reload());
});


// =======================================================================
// Copy Favicon
// =======================================================================
gulp.task('copyFavicon', function() {
    return gulp.src(filePath.copyFavicon.src)
    .pipe(gulp.dest(filePath.build.dest))
    .pipe(notify({
        message: 'favicon successfully copied'
    }));
});


// =======================================================================
// Watch for changes
// =======================================================================
gulp.task('watch', function() {
    gulp.watch(filePath.styles.watch, ['styles-dev']);
    gulp.watch(filePath.assets.images.watch, ['images']);
    gulp.watch(filePath.browserify.watch, ['bundle']);
    // gulp.watch(filePath.vendorJS.src, ['vendorJS']);
    gulp.watch(filePath.copyIndex.watch, ['copyIndex']);
    gulp.watch(filePath.lint.src, ['checkstyle']);
    console.log('Watching...');
});

// =======================================================================
// Start a webserver to serve the assets to developers directly
// =======================================================================
gulp.task('webserver', function() {
  gulp.src('app')
  .pipe(webserver({
    livereload: true,
    directoryListing: true,
    open: true
  }));
});

// =======================================================================
// Karma Configuration
// =======================================================================
gulp.task('karma', function(done) {
  var karma = new Karma({
    configFile: __dirname + '/karma.conf.js',
    singleRun: !argv.watch
  }, done);
  karma.start();
});


// =======================================================================
// Sequential Build Rendering
// =======================================================================

// run "gulp" in terminal to build the DEV app
gulp.task('build-dev', function(callback) {
    runSequence(
        ['clean-dev', 'lint', 'checkstyle'],
        // images and vendor tasks are removed to speed up build time. Use "gulp build" to do a full re-build of the dev app.
        [
          // 'bundle-dev',
          'bundle',
          'styles-dev', 'copyIndex', 'copyFavicon'], ['server', 'watch'],
        callback
    );
});

// run "gulp test" in terminal to build the DEV app
gulp.task('build-test', function(callback) {
    runSequence(
        ['clean-full', 'lint', 'checkstyle'],
        ['karma'],
        callback
    );
});

// run "gulp prod" in terminal to build the PROD-ready app
gulp.task('build-prod', function(callback) {
    runSequence(
        ['clean-full', 'lint', 'checkstyle'],
        [
          // 'bundle-prod',
          'bundle',
          'styles-prod', 'images', 'fonts','copyIndex', 'copyFavicon'],
        callback
    );
});

// run "gulp build" in terminal for a full re-build in DEV
gulp.task('build', function(callback) {
    runSequence(
      ['clean-full'
        // 'lint',
        // 'checkstyle'
      ],
        [
          // 'bundle-dev',
          'bundle',
          'styles-dev', 'images', 'fonts','copyIndex', 'copyFavicon'],
        ['server', 'watch'],
        callback
    );
});

gulp.task('default', ['build-dev']);
gulp.task('test', ['build-test']);
gulp.task('prod', ['build-prod']);
