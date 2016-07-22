'use strict';

module.exports = function(app) {

  var path = process.cwd();
  
  app.get('/', function(req, res) {
  //root route shows info page  

    res.sendFile(path + '/public/index.html');

  });


  app.get('/api', function(req, res) {
  //route for showing upload form
  
    res.sendFile(path + '/public/form.html');

  });

  app.post('/api/upload', function(req, res) {
  //route for POST request when upload

    var fileSize = {
    //multer module gives req.file object with size property
    //setup a JSON object with this size property only
      
      original_name: req.file.originalname,
      size: req.file.size

    }

    res.send(fileSize);
    //send JSON object with file size

  });


}; 