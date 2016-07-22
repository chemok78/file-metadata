'use strict';

//require packages
var express = require('express');
var app = express();
require('dotenv').config({silent:true});
var bodyParser = require('body-parser');
var api = require('./api/upload.js');
var routes = require('./routes/index.js');
var multer = require('multer');

//Configuration for bodyParser
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));

var port = process.env.PORT || 8080;

app.use(multer({dest:'./uploads/'}).single('fileName'));

api(app);
//call api module with our app instance as parameter
routes(app);
//call routes module with our app instance as parameter

app.listen(port, function(){
//create server    
    
    console.log('Node.js listening on port ' + port);
    
});