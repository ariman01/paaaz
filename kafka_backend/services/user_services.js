var Users = require('./../models/users')

exports.addUser = function(data, callback){
    var userDetail = {
        username:data.userinfo.username,
        password:data.userinfo.password
        };
    Users.addNewUser( userDetail , function(err , results){
        if(err){
            console.log("[Kafka] Error adding new user")
        }
        console.log("its result in user_services"+results);
        callback(err,results);
    });
}
