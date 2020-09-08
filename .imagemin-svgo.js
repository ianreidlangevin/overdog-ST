const imagemin = require('imagemin');
const imageminSvgo = require('imagemin-svgo');

(async () => {
	await imagemin(['src/svg/*.svg'], {
		destination: 'src/svg/temp-optimized',
		plugins: [
			imageminSvgo({
				plugins: [
					{ removeViewBox: false },
				]
			})
		]
	});

	console.log('SVG are optimized. Now, I create a sprite in the web/img folder.');
})();
