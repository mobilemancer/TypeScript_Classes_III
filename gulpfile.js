var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    merge = require('merge'),
    fs = require("fs");

var webroot = "wwwroot";

var paths = {
    npm: './node_modules/',
    lib: "./" + webroot + "/lib/",
    tsSource: './TypeScript/**/*.ts',
    tsOutput: "./" + webroot + '/scripts/',
    tsDef: "./typings/internal/"
};

var tsCompilerConfig = ts.createProject({
    declarationFiles: true,
    noExternalResolve: false,
    removeComments: true,
    target: 'es5'
});

gulp.task('ts-compile', function () {
    var tsResult = gulp.src(paths.tsSource)
        .pipe(ts(tsCompilerConfig));

    return merge([
        tsResult.dts.pipe(gulp.dest(paths.tsDef)),
        tsResult.js.pipe(gulp.dest(paths.tsOutput))
    ]);
});

gulp.task('watch', ['ts-compile'], function () {
    gulp.watch(paths.tsSource, ['ts-compile']);
});