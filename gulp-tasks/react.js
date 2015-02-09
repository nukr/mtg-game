var gulp = require('gulp');
var cp = require('child_process');

gulp.task('build:react', function () {
  cp.spawn('webpack', [], {stdio: 'inherit'})
});

