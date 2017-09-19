# pertestimate
## Give more accurate estimates using the PERT technique

The PERT technique of task estimation was developed in...

## Install
`npm install --save pertestimate`

## Usage
`pertestimate(guesstimates [, callback(results)]);`

The first argument is an object with your 'guesstimates'.
```
{
    best: 3,   // [Number]: The best possible outcome you can imagine, given nothing goes wrong.
    guess: 10,  // [Number]: Your initial estimate, given based on your experience.
    worst: 20   // [Number]: The worst possible outcome, given everything goes wrong.
}
```

The second argument is an optional callback function which receives an object containing the estimate and standard deviation.
```
{
    estimate: 10.5, // [Number]: Realistic estimate of time needed to complete the task.
    deviation: -2.8333333333333335  // [Number]: Standard deviation, or confidence in the estimate.
}
```

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
