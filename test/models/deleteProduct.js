const Products = require('../../src/db');
const assert = require('assert');

describe('Delete Product', () => {
    let prID;
    beforeEach('Add 1 pr into Collection Products', async () => {
        const pr = new Products({name: 'thanh'});
        prID = pr._id;
        await pr.save();
    });

    it('Delte 1 product by ID', async () => {
        await Products.findByIdAndRemove(prID);
        const pCount = await Products.count();
        assert.equal(pCount, 0);
    });
});