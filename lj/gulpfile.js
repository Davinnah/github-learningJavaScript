//Learning Javascript
const gulp = require('gulp');
const babel = require('gulp-babel');
// Gulp Dependencies go here

gulp.task('default', function() {
  // Node Source
  gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
  // Broswer Source
  gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
});
