const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
var rtlcss = require('gulp-rtlcss');
var concat = require('gulp-concat');



// Sass Task
gulp.task('compile:sass', () => {
    let plugins = [
        autoprefixer({
            browsers: ['last 10 versions'],
            cascade: true
        }),
        cssnano()
    ];
    return gulp
        .src('src/sass/main.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('dist/assets/css'));

});

// rtlcss Task
gulp.task('compile:rtl', function() {
    let plugins = [
        autoprefixer({
            browsers: ['last 10 versions'],
            cascade: true
        }),
        cssnano()
    ];
    return gulp
        .src('dist/assets/css/main.css')
        .pipe(rtlcss())
        .pipe(rename({ suffix: '-rtl' }))
        .pipe(gulp.dest('dist/assets/css-rtl'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('dist/assets/css-rtl'));
});

// js Task
gulp.task('compile:js', () => {
    return gulp
        .src('src/js/app.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/assets/js'));
});

// slider_js Task
// gulp.task('compile:slider_js', () => {
//     return gulp
//         .src('src/js/slider.js')
//         .pipe(concat('slider.js'))
//         .pipe(gulp.dest('dist/assets/js'))
//         .pipe(uglify())
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(gulp.dest('dist/assets/js'));
// });
// Watch Tasks

gulp.task('watch:rtlcss', () => {
    gulp.watch('dist/assets/css/main.css', ['compile:rtl']);
});

gulp.task('watch:sass', () => {
    gulp.watch('src/sass/**/*.scss', ['compile:sass']);
});

gulp.task('watch:js', () => {
    gulp.watch('src/js/app.js', ['compile:js']);
});
// gulp.task('watch:slider_js', () => {
//     gulp.watch('src/js/slider.js', ['compile:slider_js']);
// });

gulp.task('default', [
    'watch:sass',
    'watch:rtlcss',
    'watch:js'
    // 'watch:slider_js'
]);
