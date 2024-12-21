const { src, dest } = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
uglify = require('gulp-uglify')


const jsBundle = () =>
    src([
        'src/superxmlparser74.js',
        'src/dombuilder.js',
        'src/template.js',
        'src/render.js'
    ])
        .pipe(uglify())
        .pipe(concat('rrender.js'))
        .pipe(dest('dist'));

jsBundle();