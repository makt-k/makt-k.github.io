var gulp = require('gulp');
var styles = require('./gulp/styles');
var connect = require('./gulp/connect');
var html = require('./gulp/html');
var watch = require('./gulp/watch');
var scripts = require('./gulp/scripts');

gulp.task('styles', styles);
gulp.task('html', html);
gulp.task('connect', connect);
gulp.task('watch', watch);
gulp.task('scripts', scripts)

gulp.task('default', ['connect', 'styles', 'scripts', 'html', 'watch']);
