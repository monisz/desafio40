const { ClientMongoDb } = require('../../dataBase/clientMongoDb');
const { productSchema } = require('../../dataBase/productSchema');
const { Product } = require('./product');
const { Database } = require('../../dataBase/connectionDatabase');

const connect = Database.getConnection(); 
class ProductDaoMongoDb {
    constructor() {
        this.clientMongoDb = new ClientMongoDb(productSchema, connect);
    }

    async saveProduct(product) {
        const dto = await product.toDto();
        return this.clientMongoDb.save(dto);
    }

    async updateById(id, product) {
        const dto = await product.toDto();
        return this.clientMongoDb.replaceById(id, dto);
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