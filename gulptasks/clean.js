const merge = require('merge-stream');

module.exports = (gulp, plugins, options) => {
    const js = gulp.src(`${options.distDir}/**/*.js`).pipe(plugins.clean());
    const css = gulp.src(`${options.distDir}/**/*.css`).pipe(plugins.clean());
    const map = gulp.src(`${options.distDir}/**/*.map`).pipe(plugins.clean());

    return merge(js, css, map);
};
