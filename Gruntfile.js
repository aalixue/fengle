/* global module: true */
module.exports = function (grunt) {
    grunt.initConfig({
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: {
                src: 'dist/index.html',
                dest: 'dist/index.html'
            }
        },
        cssmin: {
            'dist/register.css': 'register.css'
        },
        uglify: {
            release: {
                files: {
                    'dist/register.js': 'register.js'
                }
            }
        },

        copy: {
            html: {
                src: "./index.html",
                dest: "./dist/index.html"
            },
            css: {
                src: "./register.css",
                dest: "./dist/register.css"
            },
            js:{
                src: "./register.js",
                dest: "./dist/register.js"
            },
            image: {
                expand: true,
                cwd: './',
                src: 'image/*.*',
                dest: 'dist/'
              }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('release', ['copy', 'uglify', 'cssmin', 'htmlmin']);

};