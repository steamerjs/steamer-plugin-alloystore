"use strict";

const SteamerPlugin = require('steamer-plugin'),
	  AS = require('@tencent/alloystore-cli');

class AlloystorePlugin extends SteamerPlugin {
	
	constructor(argv) {
		super(argv);
		this.argv = argv;
		this.cli = new AS(argv);
	}

	init() {
		this.cli.init();
	}

	help() {
		this.cli.help();
	}
}

module.exports = AlloystorePlugin;