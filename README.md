mod_permute
===========

A permuation module based on Jeffrey A. Johnson's SEPA: A Simple, Efficient Permutation Algorithm

Example Usage
-------------

	/*jslint node: true */
	
	var permute = require('./mod_permute.js');
	var input = ['pirate', 'koala', 'zombie', 'mime'];
	
	input = input.sort();
	
	do {
	    console.log(input.join(" "));
	} while (permute(input, input.length));


