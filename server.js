'use strict';

//require packages
var express = require('express');
var app = express();
require('dotenv').config({
  silent: true
});
var bodyParser = require('body-parser');
var api = require('./api/upload.js');
var multer = require('multer');

//Configuration for bodyParser
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));

var port = process.env.PORT || 8080;

//use multer in the app instance
//specify destination folder = uploads folder
//req.file object will be named fileName. Name of input field in HTML should be fileName as well
app.use(multer({
  dest: './uploads/'
}).single('fileName'));

api(app);
//call api module with our app instance as parameter

app.listen(port, function() {
  //create server    

  console.log('Node.js listening on port ' + port);

});
