# node-sjsp loader for webpack

This package allows injecting some codes for profiling your JavaScript files using [node-sjsp](https://github.com/45deg/node-sjsp)
and [webpack](https://github.com/webpack/webpack).

## Install

```sh
npm install sjsp-loader --save-dev
```

## Usage

[using loaders](http://webpack.github.io/docs/using-loaders.html)

Within your webpack configuration object, you'll need to add the sjsp-loader to the list of modules, like so:

```javascript
var path = require('path');
module.exports = {
	entry: {
		'app': './app.js'
	},
	output: {
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /(\.js)$/,
				loader: 'sjsp?interval=10',
				exclude: [
					path.resolve(__dirname, 'node_modules')
				]
			}
		]
	}
};
```

- You can `exclude` vendor modules by adding the directory paths of them  as profiling targets.

### Options

See the node-sjsp [usage](https://github.com/45deg/node-sjsp#usage).

#### interval

Interval time of logging the result in seconds (default 10)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
