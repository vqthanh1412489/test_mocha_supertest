const assert = require('assert');
const addNumberRequest = require('../src/addNumberRequest');

describe('addNumberPromise Aysnc', () => {
    it('Cong 2 so tu nhien', async () => {
        const sum = await addNumberRequest(1, 2);
        assert.equal(sum, 3);
    });
    it('Khi nhap vao khong phai la so', async () => {
        try{
            const sum = await addNumberRequest(1, 'a');
        }catch(err) {
            assert.equal(err.message, 'Type Error');
        }
    });
});