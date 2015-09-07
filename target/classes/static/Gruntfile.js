module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'style/style.css' : 'sass/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
		browserSync: {
		    bsFiles: {
		        src :[ '**/*.css','**/*.html','**/*.js']
		    },
		    options: {
		    	watchTask: true,
		        server: {
		            baseDir: "./"
		        },
		        port:3100
		        
		    }
		},
        requirejs: {
            options: {
                paths: {
                    'appFiles': 'modules/**/*.js'
                },
                removeCombined: false,
                out: 'modules/app/app-combined.js',
                optimize: 'none',
                name: 'config'
            },
            dev:{
                options:{
                    optimize:'none'
                }
            },
            release:{
                options:{
                    optimize:'uglify'
                }
              }
        }
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.registerTask('default',['browserSync', 'watch']);
}