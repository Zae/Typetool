'use strict';

let gulp = require('gulp'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    less = require('gulp-less'),
    plumber = require('gulp-plumber'),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    LessPluginGlob = require('less-plugin-glob'),
    cleancss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    assign = require('lodash').assign,
    browserSync = require('browser-sync').create(),
    vueify = require('vueify'),
    babelify = require('babelify'),
    hmr = require('browserify-hmr'),
    historyApiFallback = require('connect-history-api-fallback'),
    eslint = require('gulp-eslint');

let config = {
    assetDir: 'src/assets/',
    distDir: 'src/dist/',
    publicDir: 'src/',
    debug: true
};

function onError(e) {
    gutil.log(e);
    this.emit('end');
}

gulp.task('less', function () {
    return gulp
        .src(config.assetDir + 'less/main.less')
        .pipe(plumber(onError))
        .pipe(gulpif(config.debug, sourcemaps.init()))
        .pipe(less({ plugins: [LessPluginGlob] }))
        .pipe(gulpif(!config.debug, cleancss()))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'IE > 8'],
            cascade: false
        }))
        .pipe(gulpif(config.debug, sourcemaps.write('', {addComment: config.debug, debug:true})))
        .pipe(plumber.stop())
        .pipe(gulp.dest(config.distDir + 'css/'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: config.publicDir,
            middleware: [ historyApiFallback() ]
        }
    });
});

gulp.task('watchify', ['js']);

gulp.task('js', function () {
    let opts = assign({}, watchify.args, {
        debug: config.debug,
        entries: [config.assetDir + 'js/main.js'],
        cache: {}, packageCache: {}
    });
    let watcher = watchify(browserify(opts)
        .transform(vueify)
        .transform(babelify.configure({
            presets: ['es2015', 'stage-0'],
            plugins: ['lodash']
        }))
    );

    if (config.debug) {
        watcher.plugin(hmr, {
            mode: 'websocket'
        });
    }

    function bundle() {
        return watcher.bundle()
            .pipe(source('main.js'))
            .pipe(buffer())
            .pipe(gulpif(config.debug, sourcemaps.init({loadMaps: true})))
            .pipe(gulpif(!config.debug, uglify()))
            .pipe(gulpif(config.debug, sourcemaps.write()))
            .pipe(gulp.dest(config.distDir + 'js/'))
            .on('error', onError);
    }

    bundle();

    watcher.on('update', bundle);
    watcher.on('error', onError);
    watcher.on('log', gutil.log);
});

gulp.task('browserify', function () {
    let opts = assign({}, watchify.args, {
        debug: config.debug,
        entries: [config.assetDir + 'js/main.js']
    });
    let b = browserify(opts)
        .transform(babelify.configure({
            presets: ['es2015', 'stage-0'],
            plugins: ['lodash']
        }))
        .transform(vueify);

    return b.bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulpif(config.debug, sourcemaps.init({loadMaps: true})))
        .pipe(gulpif(!config.debug, uglify()))
        .pipe(gulpif(config.debug, sourcemaps.write()))
        .pipe(gulp.dest(config.distDir + 'js/'))
        .pipe(browserSync.stream());
});

gulp.task('lint', function() {
    return gulp.src([config.assetDir + 'js/*.js', config.assetDir + 'js/*.vue'])
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('watch', ['less', 'watchify', 'lint'], function () {
    gulp.watch(config.assetDir + 'less/**/*.less', { interval: 500 }, ['less']);
    gulp.watch(config.assetDir + 'js/**/*.*', { interval: 500 }, ['lint']);
    gulp.watch(config.publicDir + "*.html", { interval: 500 }).on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);

gulp.task('disable-debug', function () {
   config.debug = false;
});
gulp.task('build', ['disable-debug', 'less', 'browserify']);