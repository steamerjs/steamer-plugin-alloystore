"use strict";

const pluginutils = require('steamer-pluginutils'),
	  AS = require('@tencent/alloystore-cli');

function AlloystorePlugin(argv) {
	this.argv = argv;
	this.utils = new pluginutils("steamer-plugin-alloystore");
	this.cli = new AS(argv);
}

AlloystorePlugin.prototype.init = function() {
	this.cli.init();
};

AlloystorePlugin.prototype.help = function() {
	
};

module.exports = AlloystorePlugin;