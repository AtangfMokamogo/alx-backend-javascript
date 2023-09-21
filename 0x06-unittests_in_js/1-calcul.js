function calculateNumber (type, a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
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
