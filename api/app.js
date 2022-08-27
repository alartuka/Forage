const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.listen(port, () => {
    console.log('this is the start of our food shelter api on port 5000');
});