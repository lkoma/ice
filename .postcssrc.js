module.exports = {
	map: false,
	sourceMap: false,
	plugins: [
		require('postcss-flexbugs-fixes'),
		require('postcss-utilities'),
		require('rucksack-css'),
		require('postcss-short'),
		require('postcss-cssnext')({
			browsers: [
				'Android >= 4',
				'iOS > 7',
				'> 5%'
			],
			features: {
				rem: false
			}
		})
	]
}
