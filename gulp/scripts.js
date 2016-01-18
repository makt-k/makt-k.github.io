var gulp = require('gulp');
var gulpBrowser = require('gulp-browser');

module.exports = function () {

 return gulp.src('./public/src/js/*.js')
        .pipe(gulpBrowser.browserify())
        .pipe(gulp.dest("./public/dist/js"));

}
