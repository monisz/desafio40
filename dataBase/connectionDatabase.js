const mongoose = require('mongoose');

let connection = null;

class Database {
    constructor() {
        this.connection = mongoose.connect(process.env.MONGO_DB);
    }
    
    static getConnection() {
        if (!connection) connection = new Database();
        return connection;
    }
};

/* const database = Database.getConnection(); */

module.exports = { Database };