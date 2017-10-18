const Products = require('../../src/db');
const assert = require('assert');


describe.only('Update Product', () => {
    //Phải thêm 1 sản phẩm vô để tiến hành update. Vì đã có lệnh xóa all data trong test_helper.js
    let prID;
    beforeEach('Add 1 pr into Collection Products', async () => {
        const pr = new Products({name: 'thanh'});
        prID = pr._id;
        await pr.save();
    });

    it('Update 1 product by ID', async () => {
        await Products.findByIdAndUpdate(prID, {name: 'Yennhi'});
        const pr = await Products.findById(prID);
        assert.equal(pr.name, 'Yennhi');
    });
});