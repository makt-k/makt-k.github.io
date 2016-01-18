var gulp = require('gulp');

// Watch
module.exports = function () {
  return gulp.src('public/src/*.html')
    .pipe(gulp.dest('public/dist'));
};
