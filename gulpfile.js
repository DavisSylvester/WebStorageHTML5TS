var gulp = require('gulp');
var del = require('del');

gulp.task('build', () => {

    del("js/");
    
});

gulp.task("default", ["build"]);

