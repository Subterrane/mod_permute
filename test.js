var permute = require('./mod_permute.js');

var input = ['pirate', 'koala', 'zombie', 'mime'];

input = input.sort();

do {
    console.log(input.join(' '));
} while (permute(input, input.length));
