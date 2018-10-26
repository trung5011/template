module.exports = function(gulp, $, browserSync) {
    gulp.task('concat-css', function() {
        return gulp.src([
                'bower_components/template/css/3ufzi.css',
            ])
            .pipe($.concat('thuvien.css'))
            .pipe(gulp.dest('./dist/css'));
    });
};