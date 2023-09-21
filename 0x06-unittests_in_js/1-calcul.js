/**
 * rounds up and carries out the passed operation on the numbers.
 * @param {String} type the opration to carry out.
 * @param {Number} a the first number.
 * @param {Number} b the second number.
 * @returns {Number} computed result
 * @author Atang Mokamogo
 */
function calculateNumber (type, a, b) {
  const A = Math.round(a);
  const B = Math.round(b);

  switch (type) {
    case 'SUM':
      return A + B;
    case 'SUBTRACT':
      return A - B;
    case 'DIVIDE':
      if (B === 0) {
        return 'Error';
      }
      return A / B;
    default:
      throw new Error('Unsupported type. Supported types are SUM, SUBTRACT, and DIVIDE');
  }
}

module.exports = { calculateNumber };
