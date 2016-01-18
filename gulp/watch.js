var gulp = require('gulp');
var refresh = require('gulp-livereload');
var _ = require('underscore');

// Watch
module.exports = function () {

  var watch = {};

  watch.html = gulp.watch('public/src/*.html', ['html']);
  watch.styles = gulp.watch('public/src/scss/*.scss', ['styles']);
  watch.scripts = gulp.watch('public/src/js/*.js', ['scripts']);

  _(watch).each(function( v, k ){

    watch[ k ].on('change', function(){
      refresh(global.lrserver);
    });

  });

};
