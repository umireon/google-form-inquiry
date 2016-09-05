const gulp = require('gulp');
const htmlreplace = require('gulp-html-replace')
const inline = require('gulp-inline');
const htmlmin = require('gulp-htmlmin');

var js = [
  'https://npmcdn.com/jquery@3.1.0/dist/jquery.min.js',
  'https://npmcdn.com/react@15.3.0/dist/react.js',
  'https://npmcdn.com/react-dom@15.3.0/dist/react-dom.js',
  'https://npmcdn.com/react-router@2.7.0/umd/ReactRouter.min.js',
  'https://npmcdn.com/react-bootstrap@0.30.2/dist/react-bootstrap.min.js',
  'https://npmcdn.com/redux@3.5.2/dist/redux.min.js',
  'https://npmcdn.com/react-redux@4.4.5/dist/react-redux.min.js',
  'https://npmcdn.com/redux-actions@0.11.0/dist/redux-actions.min.js',
  'https://npmcdn.com/redux-thunk/dist/redux-thunk.min.js',
  'https://npmcdn.com/immutable@3.8.1/dist/immutable.min.js',
  'https://npmcdn.com/mustache@2.2.1/mustache.min.js',
  'https://npmcdn.com/lodash@4.15.0/lodash.min.js',
  'https://apis.google.com/js/api.js?onload=onApiLoad',
]

var css = [
  'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css',
  'https://npmcdn.com/bootstrap@3.3.7/dist/css/bootstrap.min.css',
  'https://npmcdn.com/react-bootstrap-switch@3.4.5/dist/css/bootstrap3/react-bootstrap-switch.min.css',
]

gulp.task('dist:debug:server', function() {
  gulp.src('./build/index.html')
    .pipe(htmlreplace({
      js: js,
      css: css,
    }))
    .pipe(inline())
    .pipe(gulp.dest('./dist/debug/src'))
});

gulp.task('dist:release:server', function() {
  gulp.src('./build/index.html')
    .pipe(htmlreplace({
      js: js,
      css: css,
    }))
    .pipe(inline())
    .pipe(htmlmin({
      minifyCSS: true,
      minifyJS: true,
    }))
    .pipe(gulp.dest('./dist/release/src'))
});
