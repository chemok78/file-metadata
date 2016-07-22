'use strict';

module.exports = function(app){
    
    var path = process.cwd();
    

    app.get('/api', function(req,res){
        
        
       res.sendFile(path + '/public/form.html');
       
        
    });
    
    app.post('/api/upload', function(req,res){
        
       console.log("received an upload!");
       console.log(req.file);
       
       var fileSize = {
           
           size: req.file.size
           
       }
       
       console.log(fileSize);
       
       res.send(fileSize);
        
    });
    

    
    
}; // module.exports