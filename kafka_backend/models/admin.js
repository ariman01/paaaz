var mysql = require('./mysql');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);


function addNewAdmin(admindetail, callback) {
    console.log("admin detail" + admindetail.username + admindetail.password);
    var checkAdmin = "select * from admin where username='" + admindetail.username + "'";
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
        }
        else if (result.length>0) {
            console.log("admin already exists");
            var response= {code:401,message:'Admin already exists'};
            callback(null,response);
        }
        else if (result.length==0) {
            var passwordToSave = bcrypt.hashSync(admindetail.password, salt);
            var addAdmin = "insert into admin (username,password) values ('" + admindetail.username + "','" + passwordToSave + "')";
            console.log("query is" + addAdmin);
            mysql.fetchData(function (err, result) {
                if (err) {
                    throw err;
                    callback(null,{code:404,message:'Failed to add new admin try again later'});
                }
                else {
                  console.log("executed Successfully");
                    var response = {result:result,code:201,message:'Admin Successfully Created'};
                    callback(null,response);
                }
            }, addAdmin);
        }
    }, checkAdmin);
}

module.exports.addNewAdmin = addNewAdmin;
