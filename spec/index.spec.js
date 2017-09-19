'use strict';

const pertestimate = require('../index');

describe('pertestimate', () => {
	describe('when invoked', () => {
		describe('with no arguments', () => {
			it('should return an object with zero values', () => {
				expect(pertestimate()).toEqual(jasmine.objectContaining(
					{
						estimate: 0,
						deviation: 0
					}
				));
			});
		});

		describe('with an in guesstimates argument', () => {
			it('should return an object with NaN values', () => {
				expect(pertestimate('string')).toEqual(jasmine.objectContaining(
					{
						estimate: NaN,
						deviation: NaN
					}
				));
			});
		});

		describe('with a valid guesstimates argument', () => {
			it('should return a results object with correctly calculated values', () => {
				expect(pertestimate({best: 3, guess: 10, worst: 20})).toEqual(jasmine.objectContaining(
					{
						estimate: 10.5,
						deviation: -2.8333333333333335
					}
				));
			});
		});

		describe('with a valid callback function', () => {
			it('should execute the callback function on the results object', () => {
				expect(pertestimate({best: 3, guess: 10, worst: 20}, res => `Around ${res.estimate}, with a standard deviation of ${res.deviation}. So, most likely somewhere between ${Math.ceil(res.estimate + res.deviation)} and ${Math.ceil(res.estimate - res.deviation)}.`)).toEqual('Around 10.5, with a standard deviation of -2.8333333333333335. So, most likely somewhere between 8 and 14.');
			});
		});
	});
});
