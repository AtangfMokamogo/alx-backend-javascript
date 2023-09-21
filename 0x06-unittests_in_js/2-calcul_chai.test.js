const { expect } = require('chai');
const { calculateNumber } = require('./2-calcul_chai.js');
describe('calculateNumber', () => {
  describe('correctly sums when type is SUM', function () {
    it('should add two rounded positive intergers', function () {
      const result = calculateNumber('SUM', 5.3, 2.7);
      expect(result).to.equal(8);
    });

    it('should add two rounded numbers one negative and other positive', function () {
      const result = calculateNumber('SUM', -10.8, 3.2);
      expect(result).to.equal(-8);
    });

    it('should sum two rounded negative intergers', function () {
      const result = calculateNumber('SUM', -15.1, -3.96);
      expect(result).to.equal(-19);
    });
  });

  describe('correctly subtracts when type is SUBTRACT', function () {
    it('should subtract two rounded positive intergers', function () {
      const result = calculateNumber('SUBTRACT', 5.3, 2.7);
      expect(result).to.equal(2);
    });

    it('should subtract two rounded numbers one negative and other positive', function () {
      const result = calculateNumber('SUBTRACT', -10.8, 3.2);
      expect(result).to.equal(-14);
    });

    it('should subtract two rounded negative intergers', function () {
      const result = calculateNumber('SUBTRACT', -15.1, -3.96);
      expect(result).to.equal(-11);
    });
  });

  describe('correctly divides when type is DIVIDE', function () {
    it('should divide two rounded positive intergers', function () {
      const result = calculateNumber('DIVIDE', 5.3, 2.7);
      expect(result).to.equal(1.6666666666666667);
    });

    it('should add two rounded numbers one negative and other positive', function () {
      const result = calculateNumber('DIVIDE', -11.8, 3.2);
      expect(result).to.equal(-4);
    });

    it('should divide two rounded negative intergers', function () {
      const result = calculateNumber('DIVIDE', -15.1, -4.96);
      expect(result).to.equal(3);
    });

    it('should handle division by zero', function () {
      const result = calculateNumber('DIVIDE', 7, 0);
      expect(result).to.equal('Error');
    });
  });

  it('should return NaN when one of the inputs is NaN', () => {
    const result = calculateNumber('SUM', NaN, 5);
    expect(result).to.be.NaN;
  });

  it('should throw an error for unsupported types', function () {
    expect(() => calculateNumber('MULTIPLY', 2, 3)).to.throw(
      'Unsupported type. Supported types are SUM, SUBTRACT, and DIVIDE'
    );
  });
});
