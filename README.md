# gaussian-demo

This demo uses the `[Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)` to draw a [bell curve](https://en.wikipedia.org/wiki/Normal_distribution). There is also a button that you can click and drag along the bell curve.

## Getting started
```
open index.html
```

## Variables to adjust
```js
const MEAN = 0;
// changes where the top of the curve is
// negative numbers moves the top of the curve to the left
// position numbers moves the top of the curve to the right

const VARIANCE = 0.5;
// changes how high the top of the curve is
// smaller numbers give a taller curve
// bigger numbers give a shorter curve

const X_AXIS_RANGE = 5;
// changes how much of the chart to show
// when set to 5, it shows from -2.5 to 2.5
// when set to 30, it shows from -15 to 15
```