'use strict';

const euclid = function (...args) {
	args = args.map(item => Math.abs(item));
	args.sort((a,b) => a - b);

	let min = 0;

	for (let i = 0; i < args.length; i++) {
		if(args[i] !== 0) {
		min = args[i];
		break;
		}
	}

	if (min === 0) {
		return;
	}

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
