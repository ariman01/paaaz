var Admin = require('./../models/admin')

exports.addAdmin = function(data, callback){
    var adminDetail = {
        username:data.admininfo.username,
        password:data.admininfo.password
        };
    Admin.addNewAdmin( adminDetail , function(err , results){
        if(err){
            console.log("[Kafka] Error adding new admin")
        }
        console.log("its result in admin services"+results);
        callback(err,results);
    });
}

exports.adminSignIn = function(data, callback){
 console.log("adminSignIn:data",data);
   var adminDetail = {
       username:data.username,
       password:data.password
       };
   Admin.adminSignIn( adminDetail , function(err , results){
       if(err){
           console.log("[Kafka] Error in siging in admin")
       }
       console.log("its result in admin services signin"+results);
       callback(err,results);
   });
}
