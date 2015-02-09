var gulp = require('gulp');
var cp = require('child_process');
require('require-dir')('./gulp-tasks');

gulp.task('default', ['build']);

gulp.task('open:browser', function () {
  cp.exec('open http://localhost:3000/client/build')
})

gulp.task('dev', ['build:html', 'server:spawn', 'open:browser'])

