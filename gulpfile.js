'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function (){
    return gulp.src(['./node_modules/@fortawesome/fontawesome-free/css/all.css', './scss/main.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('all.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/'));
})

gulp.task('scripts', function() {
    return gulp.src(['./node_modules/@fortawesome/fontawesome-free/js/all.js', './override-devinci.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./build/'));
});

//exports.watch = function () {
//      gulp.watch('./scss/**/*.scss', ['scss']);
//      gulp.watch('./overide-devinci.js', ['script']);
//};

gulp.task("watch", function(){
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
    gulp.watch('override-devinci.js', gulp.series('scripts'));
})

