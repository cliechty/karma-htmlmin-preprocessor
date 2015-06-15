var gulp = require('gulp'),
    mocha = require('gulp-mocha');

gulp.task('test', function() {
    gulp.src('test/**.spec.js')
        .pipe(mocha({
            ui: 'bdd'
        }));
});

gulp.task('default', ['test']);
