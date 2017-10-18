const Products = require('../src/db');
beforeEach('Remove All Collection Products', async () => {
    await Products.remove({});
});