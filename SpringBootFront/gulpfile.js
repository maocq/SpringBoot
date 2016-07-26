var gulp        = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('js', function () {
  gulp.src('app/scripts/**/*.js')
  .pipe(concat('js/script.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/'))
  .pipe(browserSync.reload({stream:true, once: true}));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['browser-sync'], function () {
    gulp.watch("app/**/*.js", ['js']);
    gulp.watch("app/**/*.html", ['bs-reload']);
});