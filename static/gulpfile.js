/*
This file adds 3rd party code

Required commands:
  npm instal --global bower
  bower init
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

gulp.task('copyVendorJs', function () {
	let sources = [
		'./bower_components/jquery/dist/jquery.min.js',
		'./bower_components/lodash/dist/lodash.min.js'
	];
  return gulp.src(sources)
    .pipe(gulp.dest('./js'));
});

gulp.task('copyVendorCss', function () {
	let sources = [
		'./bower_components/reset-css/reset.css'
	];
  return gulp.src(sources)
    .pipe(gulp.dest('./css'));
});

gulp.task('copyVendorFiles', ['copyVendorJs', 'copyVendorCss']); 
gulp.task('default', ['copyVendorFiles','babel', 'sass','watch','webserver']);
