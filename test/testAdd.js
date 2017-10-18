const assert = require('assert');
const addNumberRequest = require('../src/addNumberRequest');

describe('addNumberPromise', () => {
    it('Cong 2 so tu nhien', (done) => {
        addNumberRequest(1, 2)
        .then(kq => {
            assert.equal(kq, 3);
            done();
        });
    });
    it('Khi nhap vao khong phai la so', (done) => {
        addNumberRequest(1, 'a')
        .then(kq => {
            assert.equal(kq , null);
            done();
        })
        .catch(err => {
            assert.equal(err.message, 'Type Error');
            done();
        });
    });
});