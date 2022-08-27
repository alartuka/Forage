const { v4: uuid4 } = require("uuid");
const { Client } = require('pg');
const connectionString = process.env.DATABASE_URL;
const client = new Client(connectionString)
client.connect()

async function insert(foodItem, quantity) {
    const id = await uuid4();
    const statement = "INSERT INTO inventory (id, foodItem, quantity) VALUES ($1, $2, $3);";
    await client.query(statement, [id, foodItem, quantity]);
};

module.exports = insert;