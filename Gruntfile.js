/**
 * Created by suparngupta on 6/3/14.
 */

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'js/bundle.js',
                dest: 'js/bundle.min.js'
            }
        },
        concat: {

            js: {
                src: ['js/vendor/jquery.min.js', 'js/vendor/bootstrap.min.js', 'js/vendor/isotope.pkgd.min.js',
                    'js/vendor/jquery.knob.js', 'js/vendor/skrollr.min.js', 'js/vendor/angular.min.js',
                    'js/app/appstore.min.js'],
                dest: 'js/bundle.js'
            },
            css: {
                src: ['css/vendor/bootstrap.css', 'css/vendor/font-awesome.min.css',
                'css/vendor/timeline.css', 'css/app/app.css'],
                dest: 'css/bundle.css'
            },
            fonts: {
                src: ['fonts/*.css'],
                dest: 'fonts/fonts.css'
            }
        },
        compass: {
            dist: {
                options: {
                    config: './config.rb'
                }
            }
        },
        ngmin: {
            controllers: {
                src: ['js/app/appstore.js'],
                dest: 'js/app/appstore.min.js'
            }
        },
        cssmin: {
            minify: {
                expand: true,
                src: ['css/bundle.css', 'fonts/fonts.css'],
                ext: '.min.css'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['compass', 'ngmin', 'concat', 'uglify', 'cssmin']);
};