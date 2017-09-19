'use strict';

function pertestimate(options = {best: 0, guess: 0, worst: 0}, cb = results => results) {
	const {best, guess, worst} = options;

	const results = {
		estimate: ((best + (4 * guess) + worst) / 6),
		deviation: ((best - worst) / 6)
	};

	return cb(results);
}

module.exports = pertestimate;
