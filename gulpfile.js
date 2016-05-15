var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');

gulp.task('scripts', function() {
  return gulp.src(['assets/scripts/**/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('views', function() {
  return gulp.src(['assets/views/**/*.html'])
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
  return gulp.src(['assets/styles/**/*.css'])
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('build', ['clean', 'scripts', 'views', 'styles']);
gulp.task('default', function() {
  gulp.watch('assets/scripts/**/*.js', ['scripts']);
  gulp.watch('assets/views/**/*.html', ['views']);
  gulp.watch('assets/styles/**/*.css', ['styles']);
});
