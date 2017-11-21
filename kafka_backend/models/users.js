var mysql = require('./mysql');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
function addNewUser(userdetail, callback) {
    console.log("its userdetails in usermodel" + userdetail.username + userdetail.password);
    var checkUser = "select * from users where email='" + userdetail.username + "'";
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
        }
        else if (result.length>0) {
            console.log("user already ther");
            var response= {code:401,message:'User already exists'};
            callback(null,response);
        }
        else if (result.length==0) {
            var passwordToSave = bcrypt.hashSync(userdetail.password, salt);
            var addUser = "INSERT INTO users(email,password) VALUES ('" + userdetail.username + "','" + passwordToSave + "')";
            console.log("query is" + addUser);
            mysql.fetchData(function (err, result) {
                if (err) {
                    throw err;
                    callback(null,response);
                }
                else {
                    var response = {result:result,code:201,message:'User Successfully Created'};
                    callback(null,response);
                }
            }, addUser);
        }
    }, checkUser);
}
module.exports.addNewUser = addNewUser;
