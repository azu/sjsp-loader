/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author @3100
*/
'use strict';

var path = require('path');
var loaderUtils = require('loader-utils');
var inject = require('@azu/node-sjsp').inject;
const currentDir = __dirname;
module.exports = function(source) {
    var query = loaderUtils.parseQuery(this.query);
    var interval = parseInt(query.interval) || 10;
    var filepath = path.relative(currentDir, this.resourcePath);
    return inject(filepath, source, interval);
};
