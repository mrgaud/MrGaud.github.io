const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    minifyCss = require('gulp-minify-css'),
    babel = require('gulp-babel')
    // relBabel = require('babel')

const paths = {
    scripts:['./js/*.js'],
    css:['./css/*css']
}
gulp.task('minifyCss', function(){
    return gulp.src(paths.css)
    .pipe(concat('build.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./'))
})

gulp.task('build', function() {
    return gulp.src(paths.scripts)
        .pipe(concat("build.js"))
        // .pipe(babel({
        //     presets: ['es2015']
        // }))
        .pipe(uglify())
        .pipe(gulp.dest('./'))

})
