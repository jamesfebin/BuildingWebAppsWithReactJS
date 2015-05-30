var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

function swallowError (error) {

  console.log(error.toString());
  this.emit('end');

}

gulp.task('browserify',function() {

  gulp.src('dev/js/app.js')
   .pipe(browserify({transform: 'reactify'}))
   .on('error',swallowError)
   .pipe(concat('app.js'))
   .pipe(gulp.dest('build/js'));

});


gulp.task('copy',function() {
 gulp.src('dev/index.html')
  .pipe(gulp.dest('build'))
});


gulp.task('default',['browserify','copy']);

gulp.task('watch',function() {
   gulp.watch('dev/**/*.*',['default']);
});
