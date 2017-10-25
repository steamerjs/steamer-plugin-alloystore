"use strict";

const SteamerPlugin = require('steamer-plugin'),
	  AS = require('@tencent/alloystore-cli');

class AlloystorePlugin extends SteamerPlugin {
	constructor(args) {
		super(args);
		this.argv = args;
		this.pluginName = 'steamer-plugin-alloystore';
		this.description = 'manage components for alloystore platform';
		this.cli = new AS(argv);
	}

	init() {
		this.cli.init();
	}
	
	prototype() {
		this.cli.help();
	}
}

module.exports = AlloystorePlugin;