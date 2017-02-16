module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: ['dist'],
		copy: {
			main: {
				expand: true,
				cwd: 'src',
				src: ['css/**', 'favicon/**', 'js/**'],
				dest: 'dist/',
			}
		},
		imagemin: {
			target: {                         
		      	files: [{
			        expand: true,                  
			        cwd: 'src/',                   
			        src: ['img/*.{png, ico, jpg}'],  
			        dest: 'dist/'                
		        }]
		    }
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
					minifyJS: true
				},
				files: [{
					expand: true,
					cwd: 'src',
					src: '*.html',
					dest: 'dist/'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('default', ['clean', 'imagemin', 'htmlmin', 'copy'])
}