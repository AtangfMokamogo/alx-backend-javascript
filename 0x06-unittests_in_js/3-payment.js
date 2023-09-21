const Utils = require('./utils');

/**
 * computes payment to send to the api
 * @param {number} totalAmount The total amount.
 * @param {number} totalShipping The total shipping cost.
 */
function sendPaymentRequestToApi (totalAmount, totalShipping) {
  const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  console.log(`The total is: ${sum}`);
}

module.exports = { sendPaymentRequestToApi };
