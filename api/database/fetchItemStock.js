const { Client } = require('pg');
const connectionString = "postgresql://lauralee:5pvWUdQLcxCoUlXnozy1rA@free-tier11.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dtechnova-api-1787"
;
const client = new Client(connectionString)

async function fetchItemStock(foodItem) {
    await client.connect();
    const statement = "SELECT quantity FROM inventory WHERE foodItem=$1;";
    const res = await client.query(statement, [foodItem]);
    await client.end();
    if(res.rowCount == 1) {
        return res.rows[0].quantity;
    } 
    return 0;
}

module.exports = fetchItemStock;