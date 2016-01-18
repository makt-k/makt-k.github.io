var gulp = require('gulp');
var sass = require('gulp-sass');

module.exports = function(){

  return gulp.src('./public/src/scss/*.scss')
    .pipe(sass({includePaths: ['./node_modules/bootstrap-sass/assets/stylesheets']}).on('error', sass.logError))
    .pipe(gulp.dest('./public/dist/css'));

};
