/**
 * Created by krisPro on 16/3/4.
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    gulpFilter = require('gulp-filter'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('js:build', function() {
    return gulp.src(['src/**/*.js','app.js'])
      //  .pipe(gulpFilter('src/**/*.js'))
        //.pipe(uglify())
        .pipe(concat('../build/app.js'))
        .pipe(gulp.dest('src'));

});
