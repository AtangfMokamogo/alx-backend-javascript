const assert = require('assert');
const { calculateNumber } = require('./1-calcul.js');
describe('calculateNumber', function () {
  it('function should correctly round and add when type is SUM', function () {
    const result = calculateNumber('SUM', 3.6, 7.2);
    assert.strictEqual(result, 11);
  });

  it('function should correctly round and subtract when type is SUBTRACT', function () {
    const result = calculateNumber('SUBTRACT', 7.2, 3.6);
    assert.strictEqual(result, 3);
  });

  it('function should correctly round and divide when type is DIVIDE', function () {
    const result = calculateNumber('DIVIDE', 7.5, 3.6);
    assert.strictEqual(result, 2);
  });

  it('function should handle division by zero and return "Error"', function () {
    const result = calculateNumber('DIVIDE', 3.6, 0.1); // Rounded 0.1 to 0
    assert.strictEqual(result, 'Error');
  });

  it('function should handle division by zero and return "Error"', function () {
    const result = calculateNumber('DIVIDE', 3.6, 0.1); // Rounded 0.1 to 0
    assert.strictEqual(result, 'Error');
  });
});
