/*
This file adds javascript preprocessing

Required commands:
	npm install gulp-babel babel-preset-es2015 --save-dev
 */

'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const zip = require('gulp-zip');
const sass = require('gulp-sass');
const babel = require('gulp-babel');


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
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('babel', function() {
  return gulp.src('./es6/*.js')                      
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(gulp.dest('./js'));
});


gulp.task('watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('./es6/*.js', ['babel']);
});
 
gulp.task('default', ['babel', 'sass','watch','webserver']);