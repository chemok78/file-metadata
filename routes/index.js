'use strict';

module.exports = function(app){
    
    var path = process.cwd();
    
    app.get('/', function(req,res){
        
       res.sendFile(path + '/public/index.html'); 
        
    });
    
    
}