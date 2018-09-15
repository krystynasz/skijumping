const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');


describe('calculateDistancePoints', () => {
    describe('hill size', () => {
        it('should work for the ski flying hill size', () => {
            const actual = calculateDistancePoints(225, 225, 200);

            const expected = '150';

            assert.equal(actual, expected);
        });
        it('should work for the large hill size', () => {
            const actual = calculateDistancePoints(134, 134, 120);

            const expected = '85.2';

            assert.equal(actual, expected);
        });
        it('should work for the normal hill size', () => {
            const actual = calculateDistancePoints(111, 109, 98);

            const expected = '86';

            assert.equal(actual, expected);
        });
    });
    describe('kPoint', () => {
        it('should work if the distance is bigger than the k-point', () => {
            const actual = calculateDistancePoints(132, 134, 120);

            const expected = '81.6';

            assert.equal(actual, expected);
        });
        it('should work if the distance is smaller than the k-point', () => {
            const actual = calculateDistancePoints(134, 134, 120);

            const expected = '85.2';

            assert.equal(actual, expected);
        });
        it('should work if the distance is the same as the k-point', () => {
            const actual = calculateDistancePoints(107.5, 134, 120);

            const expected = '37.5';

            assert.equal(actual, expected);
        });
        it('should work if the k-point is small', () => {
            const actual = calculateDistancePoints(80, 109, 98);

            const expected = '24';

            assert.equal(actual, expected);
        });
        it('should work if the k-point is big', () => {
            const actual = calculateDistancePoints(157.5, 225, 200);

            const expected = '69';

            assert.equal(actual, expected);
        });
    });
    describe('distance', () => {
        it('should work if the distance is small', () => {
            const actual = calculateDistancePoints(225, 225, 200);

            const expected = '150';

            assert.equal(actual, expected);
        });
        it('should work if the distance is big', () => {
            const actual = calculateDistancePoints(84, 109, 98);

            const expected = '32';

            assert.equal(actual, expected);
        });
    });
});