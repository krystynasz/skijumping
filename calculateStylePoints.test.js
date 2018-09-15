const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
        it('should return 3 values if all values are the same', () => {
            const actual = calculateStylePoints([18,18,18,18,18]);
    
            const expected = '54';
    
            assert.equal(actual, expected);
        });
        it('should return 3 values if each value is different', () => {
            const actual = calculateStylePoints([0, 15, 17, 18, 19]);
    
            const expected = '50';
    
            assert.equal(actual, expected);
        });
        it('should return 3 values if there are 2 types of values', () => {
            const actual = calculateStylePoints([18, 18, 19, 19, 19]);
    
            const expected = '56';
    
            assert.equal(actual, expected);
        });
        it('should work if there are decimal points', () => {
            const actual = calculateStylePoints([18.5, 18, 19.5, 19, 20]);
    
            const expected = '57';
    
            assert.equal(actual, expected);
        });
});