const addNumber = require('../src/addNumber');
const assert = require('assert');

describe('addNumber', () => {
    it('Cong 2 so tu nhien', () => {
        const result = addNumber(1, 2);
        assert.equal(result, 3);
    });
    it('Cong 2 so thuc', () => {
        const result = addNumber(1.1, 2.5);
        assert.equal(result, 3.6);
    });
});