var gulp = require('gulp');
var connect = require('gulp-connect');

module.exports = function () {

  return connect.server({
    root: './public/dist',
    port: 7015,
    host: 'localhost',
    livereload: true
  });
};
