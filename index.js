/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author @3100
*/
'use strict';

var path = require('path');
var loaderUtils = require('loader-utils');
var injector = require('@azu/node-sjsp');

module.exports = function(source) {
    var query = loaderUtils.parseQuery(this.query);
    var interval = parseInt(query.interval) || 10;
    var filename = path.basename(this.resourcePath);
    return injector.inject(filename, source, interval);
};
