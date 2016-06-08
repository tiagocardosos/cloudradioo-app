var gulp = require('gulp');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');

gulp.task('scripts', function () {
   return gulp.src(['app/js/app.js'])
       .pipe(browserify())
       .pipe(gulp.dest('build/js/'));
});

gulp.task('styles', function () {
   return gulp.src(['app/sass/app.scss'])
       .pipe(sass())
       .pipe(gulp.dest('build/css/'));
});

gulp.task('default', ['scripts','styles']);