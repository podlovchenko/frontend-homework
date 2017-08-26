'use strict';

const euclid = function (...args) {
	const min = Math.min.apply(Math, args);

	for (let i = min; i > 1; i--) {
		let state = true;

		args.forEach(item => {
			if (item % i !== 0) {
				state = false;
		 		return;
			}
		});

		if (state) {
			return i;
		}
	}

	return 1;
}