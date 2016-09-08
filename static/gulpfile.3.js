/*
This file adds sass preprocessing

Required commands:
	npm install gulp-sass --save-dev
 */

'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const zip = require('gulp-zip');
const sass = require('gulp-sass');

//Serves the static directory
gulp.task('webserver', function() {
  connect.server();
});

//Packages ./js and ./css into a single zipped resource
gulp.task('package', function () {
        return gulp.src(['js/*.js', 'css/*.css'], {base: '../'})
                .pipe(zip('ResourceBundle.resource'))
                .pipe(gulp.dest('../src/staticresources'));
});

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass(/*{outputStyle: 'compressed'}*/).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});
 
gulp.task('default', ['sass','watch','webserver']);