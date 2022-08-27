const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('hello world!');
});

let port = process.env.port;
if(port == null || port == "") {
    port = 5000;
}


app.listen(port, () => {
    console.log('this is the start of our food shelter api on port 5000');
});