const { ProductDaoMongoDb } = require('./productDaoMongoDb');

class ProductDaoFactory {
    create(persistenceType) {
        switch(persistenceType){
            case "mongoDb": return ProductDaoMongoDb.getConnection();
            case "memoria": return new ProductDaoMemory;
            case "file": return new ProductDaoFile;
            case "firebase": return new ProductDaoFirebase;
            //other
        }
    }
}

module.exports = { ProductDaoFactory };