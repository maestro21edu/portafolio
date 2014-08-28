module.exports = function (grunt) {
	grunt.initConfig({
		//Preprocesador css
        stylus: {
            compile: {
                options: {
                    compress: true,
                    linenos: false
                },
                files: [{
                    'css/estilos.css': ['stylus/*.styl']
                }]
            }
        },
        //Observar cambios
		watch: {
			options: {
				nospawn: true,
				livereload: true
			},
			//observar de stylus
			stylesheets: {
				files: ['stylus/estilos.styl', 'css/estilos.css'],
				tasks: ['stylus']
			},
			//observar de js
			scripts: {
                files: ['javascript/*.js'],
                tasks: ['uglify']
            }
		},
		// Compresor de .js
	    uglify: {
			options: {
				mangle: false,
				compress: {
					drop_console: true
				}
			},
			js: {
				files: {
					'js/main.min.js': 'javascript/*.js',
				}
			}
	    }
	});

	//Cargo las tareas
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// Run Default task(s).
	grunt.registerTask('default', ['stylus','uglify','watch']);
};