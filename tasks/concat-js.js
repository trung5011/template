module.exports = function(gulp, $, browserSync) {
    gulp.task('concat-js', function() {
        return gulp.src([
                'bower_components/template/js/3ufzi.js',
                'bower_components/template/js/3nj1.js'

            ])
            .pipe($.concat('thuvien.js'))
            .pipe(gulp.dest('./dist/js'));
    });
};