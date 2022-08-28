const { v4: uuid4 } = require("uuid");
const { Client } = require('pg');
const connectionString = "postgresql://lauralee:5pvWUdQLcxCoUlXnozy1rA@free-tier11.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dtechnova-api-1787"
;
const client = new Client(connectionString)

async function insert(foodItem, quantity) {
    await client.connect();
    const id = await uuid4();
    const statement = "INSERT INTO inventory (id, foodItem, quantity) VALUES ($1, $2, $3);";
    await client.query(statement, [id, foodItem, quantity]);
    client.end();
};




/* const fetchItemStock = async (name) => {
    console.log('LAURALEE')
    const res = await client.query("SELECT quantity FROM inventory where foodItem=$1;", [name]);
    console.log(res);
    return res.rows;
};

async function hasItem(foodItem) {
    const res = await client.query("SELECT * FROM inventory WHERE foodItem=$1;", [foodItem]);
    if (res.rowCount == 0) {
        return false;
    }
    return true;
}

async function update(foodItem, quantity) {
    console.log('laura 1');
    let statement;
    let args = [];
    if (quantity == 0) {
        statement = "DELETE FROM inventory WHERE foodItem='$1';";
        args.push(foodItem);
    } else {
        const hasItem = await hasItem(foodItem);
        if (hasItem) {
            statement = "UPDATE inventory SET quantity=$1 WHERE foodItem='$2';"
            args.push(quantity);
            args.push(foodItem)
        } else {
            insert(foodItem, quantity);
            return;
        }
    }
    await client.query(statement, args);
    const hasItem = hasItem(foodItem);
    console.log(hasItem)
    return hasItem;
}; */

//select the number available 
module.exports = insert;


