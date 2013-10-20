module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		yuidoc: {
			dist: {
				name: 'Avatar Wizard',
				version: '<%= pkg.version %>',
				options: {
					paths: 'js',
					outdir: 'doc'
				}
			}
		},
		clean: ['doc']
	});
	grunt.loadNpmTasks('grunt-contrib-yuidoc');
	grunt.registerTask('default', ['yuidoc']);
};
