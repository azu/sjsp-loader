# node-sjsp loader for webpack

cf. [node-sjsp](https://github.com/45deg/node-sjsp)

## Install

```sh
npm install sjsp-loader --save-dev
```

## Usage

Example:

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

### loader

#### interval

Interval time of loggin the result in seconds (default 10)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
