
===========



Example Usage
-------------
	



# mod_permute

A permuation module based on Jeffrey A. Johnson's SEPA: A Simple, Efficient Permutation Algorithm

## Installation

npm install mod_permute

## Usage

	var permute = require('mod_permute');
	
	var input = ['pirate', 'koala', 'zombie', 'mime'];
	
	input = input.sort(); // <- Sort first!!!
	
	do {
	    console.log(input.join(" "));  // permute fiddles with the array itself each time it is called
	} while (permute(input, input.length));  

## Credits

[Jeffrey A. Johnson's SEPA: A Simple, Efficient Permutation Algorithm](http://www.quickperm.org/soda_submit.php)

## License

The MIT License (MIT)

Copyright (c) 2015 Will Munslow

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
