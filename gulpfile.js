var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('scripts', function () {
   return gulp.src(['app/js/app.js'])
       .pipe(browserify())
       .pipe(gulp.dest('build/js/'));
});

gulp.task('default', ['scripts']);