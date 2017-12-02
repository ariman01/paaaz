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

function addNewUserAdmin(userdetail, callback) {

    var checkUser = "select * from users where email='" + userdetail.email + "'";
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
        }
        else if (result.length>0) {
            console.log("user already there");
            var response= {code:401,message:'User already exists'};
            callback(null,response);
        }
        else if (result.length==0) {
            var passwordToSave = bcrypt.hashSync(userdetail.password, salt);
            var addUser = "INSERT INTO users(email,password,first_name,last_name,address,city,state,zip,phone) VALUES ('" + userdetail.email + "','" + passwordToSave + "','" +userdetail.first_name+ "','" + userdetail.last_name+ "','" + userdetail.address+ "','" + userdetail.city+ "','" +userdetail.state+"','"+ userdetail.zip+ "','" + userdetail.phone+"')";
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

function searchUser(userdetail,callback){
//  var findUser ="SELECT * FROM users where email='paaaz@gmail.com'"
  var findUser = "select * from users where email='" + userdetail.email + "'";
  mysql.fetchData(function(err,result){
    if(err){
      throw err;
    }
    else if(result.length == 0){
      console.log("user doesn't exist");
      var response= {code:401,message:'User doesnt exists'};
      callback(null,response);
    }
    else if(result.length > 0){
      console.log("[kafka]User found results:"+result[0].password);
      var response= {code:201,result:result[0]};
      callback(null,response);
    }
  },findUser);
}

function updateUser (userdetail,callback){
  var updateUser = "UPDATE users SET first_name = '"+userdetail.first_name+"',"+
                        "last_name = '"+userdetail.last_name+"',"+
                        "address = '"+userdetail.address+"',"+
                        "city = '"+userdetail.city+"',"+
                        "state = '"+userdetail.state+"',"+
                        "zip = '"+userdetail.zip+"',"+
                        "phone = '"+userdetail.phone+"'"+
                        "where email='"+userdetail.email+"'";

  mysql.fetchData(function(err,result){
    if(err){
      throw err;
    }
    else{
      var response= {code:201,result:result};
      callback(null,response);
    }
  },updateUser);

}

function getUserDetails(userdetail, callback) {
    console.log("its userdetails in usermodel" + userdetail.email);
    var getUser = "select * from users where email='" + userdetail.email + "'";
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
        }
        else
        {
            console.log("its result in model user"+result);
            var response = {result,code:201,message:'User details found'};
            callback(null,response);
        }
    }, getUser);
}
function deleteUserAccount(userdetail, callback) {
    console.log("its userdetails in usermodel" + userdetail.email);
    var deleteUser = "DELETE FROM users where email='" + userdetail.email + "'";
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
        }
        else
        {
            console.log("its result in model user"+result);
            var response = {result,code:201,message:'User details found'};
            callback(null,response);
        }
    }, deleteUser);
}
function editUserDetails(userdetail, callback) {
    console.log("its userdetails in model user"+userdetail.first_name+userdetail.phone);
    var editUser= "UPDATE users SET first_name='"+userdetail.first_name+"',last_name='"+userdetail.last_name+"',address='"+userdetail.address+"',city='"+userdetail.city+"',state='"+userdetail.state+"',zip='"+userdetail.zip+"' WHERE email='"+userdetail.email+"'";

    //var editUser = "INSERT INTO users(email,first_name,last_name,address,city,state,zip,phone) VALUES ('" + userdetail.email + "','" + userdetail.first_name + "','" + userdetail.last_name + "','" + userdetail.address + "','" + userdetail.city + "','" + userdetail.state + "','" + userdetail.zip + "','" + userdetail.phone + "')";
    console.log("query is" + editUser);
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
            callback(null,response);
        }
        else {
            var response = {result:result,code:201,message:'User Successfully Edited'};
            callback(null,response);
        }
    }, editUser);
}
function getCardDetails(carddetail, callback) {
    console.log("its carddetails in usermodel" + carddetail.email);
    var getCard = "select * from card_payment where email='" + carddetail.email + "'";
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
        }
        else
        {
            console.log("its result in model user"+result);
            var response = {result,code:201,message:'Card details found'};
            callback(null,response);
        }
    }, getCard);
}
function editCardDetails(carddetail, callback) {
    console.log("its carddetails in model user"+carddetail.email+carddetail.card_number);
    var editCard= "UPDATE card_payment SET name_on_card='"+carddetail.name_on_card+"',card_number='"+carddetail.card_number+"',card_type='"+carddetail.card_type+"',address='"+carddetail.address+"',city='"+carddetail.city+"',state='"+carddetail.state+"',zip='"+carddetail.zip+"' WHERE email='"+carddetail.email+"'";
    console.log("query is" + editCard);
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
            callback(null,response);
        }
        else {
            var response = {result:result,code:201,message:'Card Successfully Edited'};
            callback(null,response);
        }
    }, editCard);
}
function addCardDetails(carddetail, callback) {
    console.log("its carddetails in usermodel" + carddetail.email + carddetail.card_number);
            var addCard = "INSERT INTO card_payment(email,name_on_card,card_number,card_type,address,city,state,zip) VALUES ('" + carddetail.email + "','" + carddetail.name_on_card + "','" + carddetail.card_number + "','" + carddetail.card_type + "','" + carddetail.address + "','" + carddetail.city + "','" + carddetail.state + "','" + carddetail.zip + "')";
            console.log("query is" + addCard);
            mysql.fetchData(function (err, result) {
                if (err) {
                    throw err;
                    callback(null,response);
                }
                else {
                    var response = {result:result,code:201,message:'Card Successfully Added'};
                    callback(null,response);
                }
            }, addCard);
}
function getUserHistory(userdetail, callback) {
    console.log("its userhistory in usermodel" + userdetail.email);
    var getUser = "(select booking_id,user_id,src_city,destination_city,agency_name,car_name,booking_date,booking_amount,start_date,end_date from car_transaction where user_id='" + userdetail.email + "') " +
        "UNION ALL (select booking_id,user_id,flight_id,flight_name,src_city,destination_city,booking_date,booking_amount,start_date,end_date from flight_transaction where user_id='" + userdetail.email + "') " +
        "UNION ALL (select booking_id,user_id,src_city,null as destination_city,hotel_name,hotel_id,booking_date,booking_amount,start_date,end_date  from hotel_transaction where user_id='" + userdetail.email + "') ";
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
        }
        else
        {
            console.log("its result in model user"+result);
            var response = {result,code:201,message:'User details found'};
            callback(null,response);
        }
    }, getUser);
}
function deleteUser (userdetail,callback){
  var deleteUser = "delete from kayak_database.users where email='"+userdetail.email+"'";

  mysql.fetchData(function(err,result){
    if(err){
      throw err;
    }
    else{
      var response= {code:201,result:result};
      callback(null,response);
    }
  },deleteUser);

}


module.exports.addNewUser = addNewUser;
module.exports.searchUser = searchUser;
module.exports.addNewUserAdmin = addNewUserAdmin;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.getUserDetails=getUserDetails;
module.exports.getCardDetails=getCardDetails;
module.exports.getUserHistory=getUserHistory;
module.exports.editUserDetails=editUserDetails;
module.exports.addCardDetails=addCardDetails;
module.exports.editCardDetails=editCardDetails;
module.exports.deleteUserAccount = deleteUserAccount;
