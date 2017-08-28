'use strict';

const euclid = function (...args) {
	let nod = Math.abs(args[0]);

	args.map(item => Math.abs(item)).forEach(item => {
		while (item !== 0) {
			[nod, item] = [item, nod % item];
		}
	});

	return nod !== 0 ? nod : undefined;
}
