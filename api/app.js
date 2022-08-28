const express = require('express');
const app = express();
const MessagingResponse = require('twilio');
const cron = require('cron').CronJob;
const port = 3000;
const bodyParser = require('body-parser'); // middleware
const insert = require('./database/utils');
const query = require('./object_detection/classify');
const multer = require('multer');
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true }));
const http = require("http");
const path = require("path");
const fs = require("fs");
const fetchItemStock = require('./database/fetchItemStock.js');


const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};

const upload = multer({
  dest: "public/uploads"
});

/////////////for twillio//////////////////////////////////////////////////////////////////////////////
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new MessagingResponse(accountSid, authToken);


    app.get('/register', (req, res) => {
        res.sendFile(__dirname + '/templates/register.html'); //change routing to login page
    });

    const textJob=new cron('35 8 * * *', function(){  client.messages.create ({
        to: '+12265815734',
        from:'+12893018626',
        body: 'Hello from shelter X! Today we have {apple - 11 , coffee - 10 , cheese - 20 , banana - 1}' //food list
        }) .then(message => console.log(message.body));
        }, null, true);
    
    app.post('/register', (req, res) => { 
        // Insert Login Code Here
        let username = req.body.name;
        let number = req.body.number;



    
    });


/////////////for twillio//////////////////////////////////////////////////////////////////////////////


////////////for uploading pictures////////////////////////////////////////////////////////////////////
app.get('/upload', (req, res) => {
    res.sendFile(__dirname + '/templates/upload.html'); //change routing to login page
});

////////////for uploading pictures////////////////////////////////////////////////////////////////////



app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/templates/login.html'); //change routing to login page
});

app.get('/table1', (req, res) => {
    res.sendFile(__dirname + '/templates/table1.html'); //change routing to login page
});
app.get('/table2', (req, res) => {
    res.sendFile(__dirname + '/templates/table2.html'); //change routing to login page
});

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

app.get('/updateStock', (req, res) => {
    res.sendFile(__dirname + '/templates/classify.html'); //change routing to login page
});

const Storedusername = process.env.username
const Storedpassword = process.env.password


app.get('/inventory/:name', async (req, res) => {
    const { name } = req.params;
    const num = await fetchItemStock(name);
    res.send(num);
});

app.get('/insert/:name/:quantity', async (req, res) => {
    const { name, quantity } = req.params;
    await insert(name, quantity);
    res.send(`Updated table with ${name}: ${quantity}`);
});



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

app.post('/updateStock',async(req,res)=>{
    const item_name = req.body.item_name
    const stock = req.body.stock
        st = fetchItemStock(item_name)
        st = st + stock
        insert(item_name,st)
})


app.get('/nnn', (req,res)=>{
    query('public/uploads/image.png').then(l =>{console.log(l)})


    ,res.send('<h1>4 apples and 1 banana detected</h1><a href="/table2" target="_blank">go to table</a>')});



app.post(
    "/upload",
    upload.single("file" /* name attribute of <file> element in your form */),
    (req, res) => {
      const tempPath = req.file.path;
      const targetPath = path.join(__dirname, "public/uploads/image.png"); //make dynamic names so we can test it 
  
      if (path.extname(req.file.originalname).toLowerCase() === ".png") {
        fs.rename(tempPath, targetPath, err => {
          if (err) return handleError(err, res);
          res
            .status(200)
            .contentType("text/plain")
            .send("/nnn");
        });
      } else {
        fs.unlink(tempPath, err => {
          if (err) return handleError(err, res);
          res
            .status(403)
            .contentType("text/plain")
            .end("Only .png files are allowed!");
        });
      }
    }
 
  );

  var server_host = process.env.YOUR_HOST || '0.0.0.0';
  app.listen(3000, server_host, function() {
      console.log('Listening on port %d', 3000);
  });
