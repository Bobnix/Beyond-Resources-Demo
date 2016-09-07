/*
This file adds the ability to serve files localy and package the same files
to be served by salesforce

Required commands:
	npm install gulp-zip gulp-connect --save-dev
 */

'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const zip = require('gulp-zip');

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
 
gulp.task('default', ['webserver']);