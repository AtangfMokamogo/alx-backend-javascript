/**
 * This function calculates the sum of two rounded of numbers
 * @function
 * @param {Number} a - The first number.
 * @param {Number} b - The second number.
 * @author Fino Atang Mokamogo
 */
function calculateNumber (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Please Provide ONLY NUMBER TYPES as arguments');
  }

  const A = Math.round(a);
  const B = Math.round(b);

  const sum = A + B;

  return sum;
}
module.exports = {
  calculateNumber
};
