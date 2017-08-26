'use strict';

const euclid = function (...args) {
	args = args.map(item => Math.abs(item));

	let a = args[0];

	for (let i = 1; i < args.length; i++) {
		let b = args[i];

		while (b !== 0) {
			let tmp = a % b;
			a = b;
			b = tmp;
		}
	}

	return a !== 0 ? a : undefined;
}
