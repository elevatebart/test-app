const { defineConfig } = require('vue-styleguidist');
const path = require('path');

module.exports = defineConfig({
	// set your styleguidist configuration here
	title: 'Default Style Guide',
  enhancePreviewApp: path.join(__dirname, 'guide/global.requires.js'),
	// components: 'src/components/**/[A-Z]*.vue',
	// defaultExample: true,
	// sections: [
	//   {
	//     name: 'First Section',
	//     components: 'src/components/**/[A-Z]*.vue'
	//   }
	// ],
	// webpackConfig: {
	//   // custom config goes here
	// },
	exampleMode: 'expand'
})
