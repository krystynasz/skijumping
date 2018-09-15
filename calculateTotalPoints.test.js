const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');


describe('calculateTotalPoints', () => {
    describe('windFactor', () => {
        it('should work if it is a big value', () => {
            const actualBeforeRounding = calculateTotalPoints(111, 109, 98, [19, 19.5, 19, 19, 19], -14.4, 3.2);
            const actual = Math.round(actualBeforeRounding * 10) / 10;

            const expected = '131.8';

            assert.equal(actual, expected);
        });
        it('should work if it is a small value', () => {
            const actualBeforeRounding = calculateTotalPoints(88, 109, 98, [16.5, 16, 16.5, 16.5, 16], -3.4, 6.4);
            const actual = Math.round(actualBeforeRounding * 10) / 10;

            const expected = '92';

            assert.equal(actual, expected);
        });
    });
    describe('gateFactor', () => {
        it('should work if it is a big value', () => {
            const actualBeforeRounding = calculateTotalPoints(227.5, 225, 200, [18, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7);
            const actual = Math.round(actualBeforeRounding * 10) / 10;

            const expected = '208.3';

            assert.equal(actual, expected);
        });
        it('should work if it is zero', () => {
            const actualBeforeRounding = calculateTotalPoints(206, 225, 200, [15.5, 16.5, 15.5, 15.5, 16], -2.7, 0);
            const actual = Math.round(actualBeforeRounding * 10) / 10;
            
            const expected = '171.5';

            assert.equal(actual, expected);
        });
    });
});