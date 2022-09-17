const { ProductDaoFactory } = require("./productDaoFactory");
const argsparse = require('../../utils/argsparse')
 
const daoFactory = new ProductDaoFactory();

const persistenceType = argsparse.persistenceType;

class ProductsRepository {
    constructor() {
        this.dao = daoFactory.create(persistenceType);
    }

    //Para agregar un producto
    addProductToList (newProduct) {
        newProduct.timestamp = Date.now();
        const newId = this.dao.saveProduct(newProduct);
        return newId;
    }

    //Recibe y actualiza un producto por id
    replaceProduct (id, newData) {
        const updatedProduct = this.dao.updateById(id, newData);
        return updatedProduct;
    }

    //Para obtener un producto según su id
    async getProduct (id) {
        const productFinded = await this.dao.getProductById(id);
        return productFinded;
    }

    async getListProducts () {
        const allProducts = await this.dao.getProducts();
        return allProducts; 
    }

    //Para borrar un producto según el id
    deleteProduct (id) {
        const result = this.dao.deleteProductById(id);
        return result;
    }
}

module.exports = { ProductsRepository };