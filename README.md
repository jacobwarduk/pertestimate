# pertestimate
## Give more accurate estimates using the PERT technique

[![npm](https://img.shields.io/npm/dt/true-noop.svg)](https://www.npmjs.com/package/true-noop) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)  [![Build Status](https://travis-ci.org/jacobwarduk/pertestimate.svg?branch=master)](https://travis-ci.org/jacobwarduk/pertestimate) [![codecov](https://codecov.io/gh/jacobwarduk/pertestimate/branch/master/graph/badge.svg)](https://codecov.io/gh/jacobwarduk/pertestimate)

The PERT technique of task estimation is a trivariate estimate taking into account the best and worst possible scenarios to give a weighted average. It is also possible to calculate the standard deviation, which represents the level of confidence in the estimate.

## Install
`npm install --save pertestimate`

## Usage
`pertestimate(guesstimates [, callback(results)]);`

The first argument is an object with your best 'guesstimates'.
```
{
    best: 3,   // [Number]: The best possible outcome you can imagine, given nothing goes wrong.
    guess: 10,  // [Number]: Your initial estimate, given based on your experience.
    worst: 20   // [Number]: The worst possible outcome, given everything goes wrong.
}
```

The second argument is an optional callback function which receives an object containing the calculated estimate and standard deviation.

## Examples
```
const pertestimate = require('pertestimate');

const guesstimates = {
    best: 3,
    guess: 10,
    worst: 20
}

pertestimate(guesstimates);
// --> {estimate: 10.5, deviation: -2.8333333333333335}

pertestimate(guesstimates, res => `Around ${res.estimate}, with a standard deviation of ${res.deviation}. So, most likely somewhere between ${Math.ceil(res.estimate + res.deviation)} and ${Math.ceil(res.estimate - res.deviation)}.`);
// --> "Around 10.5, with a standard deviation of -2.8333333333333335. So, most likely somewhere between 8 and 14."
```
