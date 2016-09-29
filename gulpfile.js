var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var jsFiles = ['dev/*.js', 'dev/**/*.js'];

gulp.task('serve', function () {
    var options = {
        script: 'dev/app.js',
        delayTime: 1,
        env: {
            "PORT": 3000
        },
        watch: jsFiles
    };

    return nodemon(options);
});

gulp.task('default', ['serve']);