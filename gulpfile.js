var gulp = require("gulp");
var print = require('gulp-print');
var babel = require("gulp-babel");
var watch = require("gulp-watch");
var jasmine = require('gulp-jasmine');
var webserver = require('gulp-webserver');
var livereload = require('gulp-livereload');
var Server = require('karma').Server;

gulp.task('libs', function(){
    return gulp.src([
        '../../../node_modules/systemjs/dist/system.js',
        '../../../node_modules/babel-polyfill/dist/polyfill.js'])
        .pipe(print())
        .pipe(gulp.dest('build/libs'));
});

gulp.task('js', function() {
  return gulp.src('app/**/*.js')              
        .pipe(print())                          
      .pipe(babel({ presets: ['es2015'] }))    
      .pipe(gulp.dest('build'));               
});

gulp.task('build', ['js', 'libs'], function(){
    return gulp.src(['app/**/*.html', 'app/**/*.css'])
            .pipe(print())
            .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['js']);
});

gulp.task('web', ['build', 'watch'], function() {
    gulp.src('build')
        .pipe(webserver({open: true}));
});

gulp.task('tdd', function (done) {
  livereload.listen(35729);
  gulp.watch('app/js/spec/*.js', ['js']).on('change', livereload.changed);
  
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('specs', ['build', 'tdd'], function() {
    
});