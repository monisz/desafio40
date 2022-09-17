const { ProductsRepository } = require("./productRepository");

class ProductService {
    constructor() {
        this.dao = new ProductsRepository;
    }

    //Para agregar un producto
    addProductToList (newProduct) {
        newProduct.timestamp = Date.now();
        const newId = this.dao.addProductToList(newProduct);
        return newId;
    }

    //Recibe y actualiza un producto por id
    replaceProduct (id, newData) {
        const updatedProduct = this.dao.replaceProduct(id, newData);
        return updatedProduct;
    }

    //Para obtener un producto según su id
    async getProduct (id) {
        const productFinded = await this.dao.getProduct(id);
        return productFinded;
    }

    async getListProducts () {
        const allProducts = await this.dao.getListProducts();
        return allProducts; 
    }

    //Para borrar un producto según el id
    deleteProduct (id) {
        const result = this.dao.deleteProduct(id);
        return result;
    }
}

module.exports = { ProductService };