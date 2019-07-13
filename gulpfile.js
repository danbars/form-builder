const { src, dest, parallel, series } = require('gulp');
const htmlreplace = require('gulp-html-replace');
//const scss = require('gulp-scss');
//const babel = require('gulp-babel');

const DIST = 'dist/';
const ACE_BASE = 'src/ace/src/';
const ACE_FILES = [ACE_BASE+'ace.js', ACE_BASE+'ext-language_tools.js', ACE_BASE+'snippets/text.js', ACE_BASE+'theme-monokai.js',ACE_BASE+'mode-formbuilder.js', ACE_BASE+'snippets/formbuilder.js'];
const PARSER = 'src/parser/grammar.js';
const THEMES = ['src/themes/default.css', 'src/themes/default.css.map', 'src/themes/default.imports.css'];
const EDITOR = ['src/*.js', 'src/*.html', 'src/*.css'];

function build(cb) {
    series(copyToDist)();
    cb();
}

function copyToDist(cb) {
    series(copyAce, copyParser, copyThemes, copyEditor)();
    cb();
}

function copyAce() {
    return src(ACE_FILES).pipe(dest(DIST+'ace/'));
}

function copyParser() {
    return src(PARSER).pipe(dest(DIST+'parser/'))
}

function copyThemes() {
    return src(THEMES).pipe(dest(DIST+'themes/'))
}

function copyEditor() {
    return src(EDITOR)
        .pipe(htmlreplace({
            'ace': ['ace/ace.js', 'ace/ext-language_tools.js']
        }))
        .pipe(dest(DIST));
}





exports.build = build;
exports.default = build;