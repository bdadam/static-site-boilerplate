var webpack = require('webpack');

module.exports = function(grunt) {

    require('time-grunt')(grunt);

    var devmode = grunt.option('dev');

    grunt.initConfig({
        assemble: {
            options: {
                assets: "dist/static",
                layout: "layout.hbs",
                partials: "src/templates/partials/**/*.hbs",
                layoutdir: 'src/templates/layouts',
                helpers: ['src/helpers/**.js']
            },

            site: {
                options: {
                    postprocess: devmode ? false : require('pretty')
                },
                files: [{
                    expand: true,
                    flatten: false,
                    cwd: 'content/',
                    src: ['**/*.{md,hbs,html,xml}'],
                    dest: 'dist'
                }]
            }
        },

        clean: {
            static: ['dist/static/**/*.{css,js}'],
            html: ['dist/**/*.html', '!dist/google*.html']
        },

        less: {
            main: {
                options: {
                    cleancss: true,
                    compress: true
                },
                files: {
                    'dist/static/main.css': 'src/less/main.less'
                }
            }
        },

        sass: {
            options: {
                sourceMap: !!devmode,
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'dist/static/main.css': 'src/scss/main.scss'
                }
            }
        },

        pleeease: {
            dist: {
                options: {
                    autoprefixer: { browsers: ['last 4 versions', 'ios 6'] },
                    filters: { oldIE: true },
                    rem: ['12px'],
                    minifier: true,
                },
                files: {
                    'dist/static/main.css': 'dist/static/main.css'
                }
            }
        },

        requirejs: {
            options: {
                baseUrl: 'src/js',
                wrap: true,
                optimizeAllPluginResources: true,
                optimize: devmode ? 'none' : "uglify2",
                findNestedDependencies: true
            },

            main: {
                options: {
                    name: '../bower_components/requirejs/require',
                    include: ['main'],
                    out: 'dist/static/main.js'
                }
            }
        },

        webpack: {
            dist: {
                entry: './src/js/main.js',
                output: {
                    path: "./dist/static",
                    filename: "main.js",
                },
                stats: true,
                progress: true,
                failOnError: false,
                cache: {},
                plugins: !devmode ? [
                    new webpack.optimize.DedupePlugin(),
                    new webpack.optimize.UglifyJsPlugin()
                ] : []
            }
        },

        karma: {
            options: {
                configFile: 'karma.conf.js',
                browsers: ['PhantomJS', 'Chrome', 'IE9', 'Firefox'],
                singleRun: true,
            },
            dist: {
                reporters: 'progress'
            },
            teamcity: {
                reporters: 'teamcity'
            },
            dev: {
                reporters: 'spec',
                browsers: ['PhantomJS'],
                /*background: true,
                singleRun: false,
                autoWatch: true*/
            }
        },

        eslint: {
            src: ['src/js/**/*.js']
        },

        hashres: {
            options: {
                fileNameFormat: '${name}.${ext}?${hash}',
                renameFiles: false
            },
            dist: {
                src: ['dist/static/main.css', 'dist/static/main.js'],
                dest: 'dist/**/*.html'
            }
        },

        connect: {
            dev: {
                options: {
                    hostname: '0.0.0.0',
                    port: 3000,
                    base: 'dist',
                    livereload: true
                }
            }
        },

        watch: {
            options: {
                livereload: true,
                spawn: false
            },

            css: {
                files: ['src/**/*.less', 'src/**/*.scss'],
                tasks: ['buildCSS', 'hashres']
            },

            js: {
                files: ['src/js/**/*.js'],
                tasks: ['buildJS', 'hashres']
            },

            jstest: {
                files: ['test/**/*.js'],
                tasks: ['karma:dev']
            },

            assemble: {
                files: ['content/**/*', 'src/templates/**/*'],
                tasks: ['assemble', 'hashres']
            }
        }
    });

    // Use either of these two tasks, depending on whether you use less or scss
    grunt.registerTask('buildCSS', ['less', 'pleeease']);
    //grunt.registerTask('buildCSS', ['sass', 'pleeease']);

    // Use either of these two tasks, depending on whether you use RequireJS or WebPack
    grunt.registerTask('buildJS', ['requirejs']);
    //grunt.registerTask('buildJS', ['eslint', 'webpack', 'karma:dev']);

    grunt.registerTask('build', ['clean', 'assemble', 'buildCSS', 'buildJS', 'hashres']);
    grunt.registerTask('default', ['build']);

    grunt.registerTask('dev', ['build', 'connect', 'watch']);

    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks("gruntify-eslint");
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};