const path = require('path');

module.exports = (gulp, plugins, options) => {

    const filename = path.basename(options.sass.out);
    const filepath = path.dirname(options.sass.out);

    return gulp.src(options.sass.entry)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass({
            importer: require('node-sass-import')
        }))
        .on('error', plugins.util.log)
        .pipe(plugins.pleeease())
        .pipe(plugins.rename(filename))
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest(filepath));

};
