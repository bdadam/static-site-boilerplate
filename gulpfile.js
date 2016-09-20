const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const distDir = 'dist';
const staticDir = `${distDir}`;

const options = {
    distDir: 'dist',
    js: {
        entry: 'src/js/main.js',
        out: `${staticDir}/main.min.js`
    },
    sass: {
        entry: 'src/scss/main.scss',
        out: `${staticDir}/main.min.css`
    },
    env: {
        production: true
    }
};

const loadTask = name => {
    const task = require(`./gulptasks/${name}`);
    return () => task(gulp, plugins, options);
};

gulp.task('set-dev', () => options.env.production = false);

gulp.task('clean', loadTask('clean'));
gulp.task('rollup', loadTask('rollup'));
gulp.task('sass', loadTask('sass'));