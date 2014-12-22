module.exports = function(grunt){
	grunt.config.set('bower',{
		dev: {
			dest: './tmp/public',
			js_dest: './tmp/public/js',
			css_dist: '.tmp/public/css'
		}
	});

	grunt.loadNpmTasks('grunt-bower');
}