const Products = require('../../src/db');
const assert = require('assert');

describe('Add Product', () => {
    it('Add 1 product', async () => {
        const pr = new Products({name: 'Thanh', desc: 'abcd'});
        await pr.save();
        const pr2 = await Products.findOne({name: 'Thanh', desc: 'abcd'});
        assert.equal(pr2.name, 'Thanh');
    });
});