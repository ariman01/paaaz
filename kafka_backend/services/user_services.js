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


exports.addUserAdmin = function(data, callback){
    var userDetail = {
        email:data.email,
        password:data.password,
        first_name: data.first_name,
        last_name : data.last_name,
        address : data.address,
        city : data.city,
        state : data.city,
        zip : data.zip,
        phone : data.phone
        };
    Users.addNewUserAdmin( userDetail , function(err , results){
        if(err){
            console.log("[Kafka] Error adding new user")
        }
        console.log("its result in user_services"+results);
        callback(err,results);
    });
}
