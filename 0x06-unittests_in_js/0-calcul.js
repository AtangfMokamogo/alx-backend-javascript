/**
 * This function calculates the sum of two rounded of numbers
 * @function
 * @param {Number} a - The first number.
 * @param {Number} b - The second number.
 * @author Fino Atang Mokamogo
 */
function calculateNumber (a, b) {
  const A = Math.round(a);
  const B = Math.round(b);

  const sum = A + B;

  return sum;
}
module.exports = { calculateNumber };
