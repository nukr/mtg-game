var gulp = require('gulp');

gulp.task('rebuild', ['build:html', 'build:react'], function () {
  gulp.start('server:restart')
})
