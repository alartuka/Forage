const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser'); // middleware
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/loginpage/login.html'); //change routing to login page
  });


const Storedusername = process.env.username
const Storedpassword = process.env.password

app.post('/login', (req, res) => { 
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    if (username == Storedusername  && password == Storedpassword) {
        console.log("you're in"); //change routing to the stock page 

    } else{
        res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align ='center'></div>");
    }

});

//save password in .env variable 


app.listen(port, () => {
    console.log('this is the start of our food shelter api on port 3000');
});