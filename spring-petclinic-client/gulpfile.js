var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var less = require('gulp-less');

var paths = {
    "css": "src/css/*",
    "fonts": "src/fonts/*",
    "images": "src/images/*",
    "html": "src/scripts/**/*.html",
    "js": "src/scripts/**/*.js",
    "less": "src/less/*",
    "dist": "target/dist/"
};

function minifyCss() {
    return gulp.src(paths.css)
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.dist + 'css/'));
}

function minifyJs() {
    return gulp.src(paths.js)
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist + 'scripts/'));
}

function compileLess() {
    return gulp.src(paths.less)
        .pipe(less())
        .pipe(gulp.dest(paths.dist + 'css/'));
}

function copyFonts() {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest(paths.dist + 'fonts/'));
}

function copyHtml() {
    return gulp.src(paths.html)
        .pipe(gulp.dest(paths.dist + 'scripts/'));
}

function copyImages() {
    return gulp.src(paths.images)
        .pipe(gulp.dest(paths.dist + 'images/'));
}

gulp.task('minify-css', minifyCss);
gulp.task('minify-js', minifyJs);
gulp.task('less', compileLess);
gulp.task('copy-fonts', copyFonts);
gulp.task('copy-html', copyHtml);
gulp.task('copy-images', copyImages);

gulp.task('default', gulp.parallel('minify-css', 'minify-js', 'less', 'copy-fonts', 'copy-html', 'copy-images'));
