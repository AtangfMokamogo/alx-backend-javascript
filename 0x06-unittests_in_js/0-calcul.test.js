const assert = require('assert');
const { calculateNumber } = require('./0-calcul');

describe('testing the calculateNumber function', function () {
  it('the function should correctly round positive args and sum them', function () {
    const roundedSum = calculateNumber(11.7, 9.3);
    assert.strictEqual(roundedSum, 21);
  });

  it('the function should correctly round negative args and sum them', function () {
    const roundedSum = calculateNumber(-3.6, -7.1);
    assert.strictEqual(roundedSum, -11);
  });

  it('the function should correctly round a positive and a negative arg', function () {
    const result = calculateNumber(3.6, -7.2);
    assert.strictEqual(result, -3);
  });

  it('the function should correctly round one whole number and one floating', function () {
    const result = calculateNumber(3.0, -7.2678);
    assert.strictEqual(result, -4);
  });

  it('the function should correctly round a number with long fractional parts', () => {
    const roundedSum = calculateNumber(8.794964, 3.199999);
    assert.strictEqual(roundedSum, 12);
  });
});
