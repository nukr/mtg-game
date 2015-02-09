var gulp = require('gulp');
var config = require('./config')

gulp.task('watch', function () {
  gulp.watch('./client/src/**/**', ['rebuild']);
});

