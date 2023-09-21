const sinon = require('sinon');
const { expect } = require('chai');
const { sendPaymentRequestToApi } = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('function should call calculateNumber with the correct arguments', function () {
    const theNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(theNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;
    theNumberSpy.restore();
  });
});
