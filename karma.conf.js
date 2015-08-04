module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'sinon', 'chai'],
        files: [
            './test/**/*.js',
            { pattern: './src/js/**/*.js', watched: true, included: false, served: false }
        ],
        basePath: '',
        port: 9900,
        //reporters: ['progress'],
        colors: true,
        logLevel: config.LOG_INFO,
        //autoWatch: true,
        browsers: ['PhantomJS'],

        preprocessors: {
            'test/**/*.js': ['webpack']
        },

        webpack: {
            devtool: 'inline-source-map',
            stats: false,
            debug: true,
            profile: false,
            progress: false
        },

        webpackMiddleware: {
            stats: false
        },

        plugins: [
            'karma-webpack',
            'karma-mocha',
            'karma-chai',
            'karma-sinon',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-spec-reporter',
            'karma-teamcity-reporter'
        ],

        customLaunchers: {
            IE9: {
                base: 'IE',
                'x-ua-compatible': 'IE=EmulateIE9'
            }
        }
    });
};