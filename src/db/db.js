const { MongoClient } = require('mongodb');
const { config } = require('../config');



const dbClient = new MongoClient(config.dbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export async function connectToDB() {

    try {
        await dbClient.connect();
    } catch (e) {
        throw new DatabaseConnectionError("Error connecting with the database.");
    } finally {
        await dbClient.close();
    }

}
