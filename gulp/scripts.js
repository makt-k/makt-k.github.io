var gulp = require('gulp');
var gulpBrowser = require('gulp-browser');
var browserify = require('browserify');
var babelify = require('babelify');
var fs = require('fs');

module.exports = function () {
   var extensions = ['.js','.json','.es6'];
  return browserify({ debug: true, extensions:extensions })
    .transform(babelify.configure({
      extensions: extensions
    }))
  .require("./public/src/js/main.js", { entry: true })
  .bundle()
  .on("error", function (err) { console.log("Error: " + err.message); })
  .pipe(fs.createWriteStream("./public/dist/js/main.js"));
}
