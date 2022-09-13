const { ClientMongoDb, mongooseConnection } = require('../../dataBase/clientMongoDb');
const { productSchema } = require('../../dataBase/productSchema');
const { Product } = require('./product');

let connection = null;

class ProductDaoMongoDb {
    constructor() {
        this.clientMongoDb = new ClientMongoDb(productSchema);
    }

    /* static getConnection() { */
    /*     if (!connection) connection = new ProductDaoMongoDb(); */
    /*     return connection; */
    /* } */

    async saveProduct(product) {
        const dto = await product.toDto();
        this.clientMongoDb.save(dto);
    }

    async updateById(id, product) {
        const dto = await product.toDto();
        this.clientMongoDb.replaceById(id, dto);
    }

    async getProductById(id) {
        const dto = await this.clientMongoDb.getById(id);
        return Product.fromDTO(dto[0]);
    }

    async getProducts() {
        const products = await this.clientMongoDb.getAll();
        return products.map(prodDto => Product.fromDTO(prodDto));
    }

    async deleteProductById(id) {
        return result = await this.clientMongoDb.deleteById(id);
    }
}

module.exports = { ProductDaoMongoDb };