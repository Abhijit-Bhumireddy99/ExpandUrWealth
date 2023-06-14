/**
 * @jest-environment jsdom
 */

var functions = require('./Domestic_Holdings');

test('Returns in %', () => {
    expect(functions.getReturnsPercent(2614.00, 1710.00)).toBeCloseTo(52.87);
    });

test('Original Investment Value', () => {
    expect(functions.initialInvestmentValue(20.00, 85.50)).toBeCloseTo(1710.00);
    });

test('Returns in Rupee (₹)', () => {
    expect(functions.getReturnsRupee(2614.00, 1710.00)).toBeCloseTo(904.00);
    });
    