module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-mixins'),
		require('postcss-nested'),
		require('postcss-preset-env')({
			browsers: 'last 3 versions',
			autoprefixer: {
				add: true,
				grid: false
			}
		})
	]
}