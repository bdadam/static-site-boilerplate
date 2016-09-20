module.exports = function(grunt) {

    grunt.initConfig({
        assemble: {
            options: {
                assets: "dist/static",
                layout: "layout.hbs",
                partials: "src/assemble/partials/**/*.hbs",
                layoutdir: 'src/assemble/layouts',
                helpers: ['src/assemble/helpers/**.js']
            },

            site: {
                files: [{
                    expand: true,
                    flatten: false,
                    cwd: 'content/',
                    src: ['**/*.{md,hbs,html,xml}'],
                    dest: 'dist'
                }]
            }
        },

        hashres: {
            options: {
                fileNameFormat: '${name}.${ext}?${hash}',
                renameFiles: false
            },
            dist: {
                src: ['dist/**/*.{js,css}'],
                dest: 'dist/**/*.html'
            }
        },

        // karma: {
        //     options: {
        //         configFile: 'karma.conf.js',
        //         browsers: ['PhantomJS', 'Chrome', 'IE9', 'Firefox'],
        //         singleRun: true,
        //     },
        //     dist: {
        //         reporters: 'progress'
        //     },
        //     teamcity: {
        //         reporters: 'teamcity'
        //     },
        //     dev: {
        //         reporters: 'spec',
        //         browsers: ['PhantomJS']
        //     }
        // },

        // connect: {
        //     dev: {
        //         options: {
        //             hostname: '0.0.0.0',
        //             port: 3000,
        //             base: 'dist',
        //             livereload: true
        //         }
        //     }
        // },

        // watch: {
        //     options: {
        //         livereload: true,
        //         spawn: false
        //     },

        //     css: {
        //         files: ['src/**/*.less', 'src/**/*.scss'],
        //         tasks: ['buildCSS', 'hashres']
        //     },

        //     js: {
        //         files: ['src/js/**/*.js'],
        //         tasks: ['buildJS', 'hashres']
        //     },

        //     jstest: {
        //         files: ['test/**/*.js'],
        //         tasks: ['karma:dev']
        //     },

        //     assemble: {
        //         files: ['content/**/*', 'src/templates/**/*'],
        //         tasks: ['assemble', 'hashres']
        //     }
        // }
    });

    grunt.registerTask('assemble-site', ['assemble', 'hashres']);

    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-hashres');
};
