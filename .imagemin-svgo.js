const imagemin = require('imagemin');
const imageminSvgo = require('imagemin-svgo');
const {extendDefaultPlugins} = require('svgo');

(async () => {
	await imagemin(['src/svg/*.svg'], {
		destination: 'src/svg/temp-optimized',
		plugins: [
			imageminSvgo({
				plugins: extendDefaultPlugins([
					{name: 'removeViewBox', active: false}
				])
			})
		]
	});

	console.log('SVG are optimized');
})();
