const logger = require('../utils/loggers/winston');
logger.info("conectados a mongo");
class ClientMongoDb {
    constructor (collection, connect) {
        this.connection = connect;
        this.collection = collection;
        this.id = 1;
    }    

    async save(dto) {
        try {
            const allItems = await this.collection.find(); 
            element['id'] = allItems.length + 1;
            try {
                const elementToSave = new this.collection(dto)
                await elementToSave.save();
                logger.info(`agregado exitoso ${dto.id}`);
            }
            catch (error) {
                logger.error(`el error al guardar fue: ${error}`);
            }
            return element.id;
        }
        catch (error) {
            logger.error(`error en Save ${error}`);
        }
    } 

    async saveUser(element) {
        try {
            const elementToSave = new this.collection(element[0])
            await elementToSave.save();
            logger.info(`agregado exitoso ${element.username}`);
        }
        catch (error) {
            logger.error(`el error al guardar fue: ${error}`);
        }
        return element.username;
    }
        
    async replaceById(idSearch, data) {
        try {
            await this.collection.findOneAndUpdate({id: idSearch}, {$set: data});
            const result = await this.collection.find({id: idSearch});
            logger.info(`replace id: ${result[0].id}`);
            return result
        }
        catch (error) {
            logger.error(`error al reemplazar datos ${error}`);
        }
    }

    async getById(idSearch) {
        try {
            const objectFinded = await this.collection.find({id: idSearch});
            if (objectFinded.length > 0) {
                logger.info(`objeto encontrado en getById, id: ${objectFinded[0].id}`);
                return objectFinded;
            }
            else return null;
        }
        catch (error) {
            logger.error(`error al buscar por id ${error}`);
        }
    }

    async getUserById(idSearch) {
        try {
            const objectFinded = await this.collection.find({username: idSearch});
            return objectFinded;
        }
        catch (error) {
            logger.error(`error al buscar por id ${error}`);
        }
    }

    async getAll() {
        try {
            const allItems = await this.collection.find();
            return allItems;
        }
        catch (error) {
            logger.error(`error en getAll ${error}`);
            return [];
        }
    }

    async deleteById(idSearch) {
        try {
            return result = await this.collection.deleteOne({id: idSearch});
        }
        catch (error) {
            logger.error(`error en deleteById ${error}`);
        }
    }
};

/* class Carts extends Container { */
/*     constructor(){ */
/*         super(Cart); */
/*     } */
/* }; */
/* const colCart = new Carts(); */
/* class Users extends Container { */
/*     constructor() { */
/*         super(User); */
/*     } */
/* }; */
/* const colUser = new Users(); */

module.exports = { ClientMongoDb/* , mongooseConnection *//* colCart, colUser */ };