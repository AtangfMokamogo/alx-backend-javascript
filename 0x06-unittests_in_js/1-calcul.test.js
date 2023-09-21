const assert = require('assert');
const { calculateNumber } = require('./1-calcul.js');
describe('calculateNumber', function () {
  describe('correctly sums when type is SUM', function () {
    it('should add two rounded positive intergers', function () {
      const result = calculateNumber('SUM', 5.3, 2.7);
      assert.strictEqual(result, 8);
    });

    it('should add two rounded numbers one negative and other positive', function () {
      const result = calculateNumber('SUM', -10.8, 3.2);
      assert.strictEqual(result, -8);
    });

    it('should sum two rounded negative intergers', function () {
      const result = calculateNumber('SUM', -15.1, -3.96);
      assert.strictEqual(result, -19);
    });
  });

  describe('correctly subtracts when type is SUBTRACT', function () {
    it('should subtract two rounded positive intergers', function () {
      const result = calculateNumber('SUBTRACT', 5.3, 2.7);
      assert.strictEqual(result, 2);
    });

    it('should subtract two rounded numbers one negative and other positive', function () {
      const result = calculateNumber('SUBTRACT', -10.8, 3.2);
      assert.strictEqual(result, result, -14);
    });

    it('should subtract two rounded negative intergers', function () {
      const result = calculateNumber('SUBTRACT', -15.1, -3.96);
      assert.strictEqual(result, -11);
    });
  });

  describe('correctly divides when type is DIVIDE', function () {
    it('should divide two rounded positive intergers', function () {
      const result = calculateNumber('DIVIDE', 5.3, 2.7);
      assert.strictEqual(result, 1.6666666666666667);
    });

    it('should add two rounded numbers one negative and other positive', function () {
      const result = calculateNumber('DIVIDE', -11.8, 3.2);
      assert.strictEqual(result, -4);
    });

    it('should divide two rounded negative intergers', function () {
      const result = calculateNumber('DIVIDE', -15.1, -4.96);
      assert.strictEqual(result, 3);
    });

    it('should handle division by zero', function () {
      const result = calculateNumber('DIVIDE', 7, 0);
      assert.strictEqual(result, 'Error');
    });
  });

  it('should return NaN when one of the inputs is NaN', () => {
    const result = calculateNumber('SUM', NaN, 5);
    assert.strictEqual(result, NaN);
  });

  it('should throw an error for unsupported types', function () {
    assert.throws(() => calculateNumber('SQUARE', 2, 3), {
      name: 'Error',
      message: 'Unsupported type. Supported types are SUM, SUBTRACT, and DIVIDE'
    });
  });
});
