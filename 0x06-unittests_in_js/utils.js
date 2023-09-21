/**
 * Rounds up and carries out the passed operation on the numbers.
 * @param {String} type The operation to carry out.
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Number} Computed result
 * @throws {Error} If an unsupported type is provided or division by zero occurs.
 * @author Atang Fino Mokamogo
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
        throw new Error('Error: Division by zero');
      }
      return A / B;
    default:
      throw new Error('Unsupported type. Supported types are SUM, SUBTRACT, and DIVIDE');
  }
}
module.exports = { calculateNumber };
