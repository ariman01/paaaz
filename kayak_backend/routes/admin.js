var express = require('express');
var router = express.Router();
var kafka = require('./../kafka/client');

router.post('/adminsignup', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  let admininfo ={};
  admininfo.username = username;
  admininfo.password = password;
  kafka.make_request('admin_signup', admininfo, function(err , results){
    if(err){
      console.log("error in signing up admin");
    }
    else{
      if(result.status == 201){
        res.send(201).json({result : result});
      }
      else if(result.status == 401){
        res.send(401).json({message : "Admin already exists"});
      }
    }
  });

});

router.post('/adminsignin', function(req, res, next) {
 var username = req.body.username;
 var password = req.body.password;
 let admininfo ={};
 admininfo.username = username;
 admininfo.password = password;
 kafka.make_request('admin_signin', admininfo, function(err , results){
   if(err){
     console.log("error in signing in as admin");
   }
   else{
     console.log("result: ",results);
     if(results.status == 201){
       res.status(201).json({result : results.result, message:"Admin Signed in successfully"});
     }else{
       res.status(401).json({result : results.result, message:"Failed to login in "});
     }
   }
 });
});


router.post('/adminhotelbilling', function(req, res, next) {

      var date = new Date(req.body.date);
      var year = date.getFullYear();
      console.log("Year entered is:"+year);
      kafka.make_request('admin_hotel_bill', {"year" : 2017}, function(err,result){

        if(err){
            console.log(err);
            res.status(403).json({result:[],message:err});
        }else {
            res.status(201).json({result:result,message:"Successfully retrieved hotel billing information"});
        }
    });
});

router.post('/admincarbilling', function(req, res, next) {
  //Date format YYYY-MM-DD
      var where_clause =  '';
      if( req.body.date){
        where_clause += "where Date(booking_date) = "+"'"+req.body.date+"'";
      }else if(req.body.month){
          var date = new Date();
          var year = date.getFullYear();
          var start_d = year+"-"+req.body.month+"-"+01;
          var end_d = year+"-"+(Number(req.body.month)+1)+"-"+31;
          where_clause += "where Date(booking_date) between '"+start_d+"' and '"+end_d+"'";
      }else{
        res.status(403).json({result:[],message:"Please select either month or date to get billing information"});
      }
      if(where_clause){
        var carbilling="select * from car_transaction "+where_clause;
        kafka.make_request('admin_car_bill', {query : carbilling}, function(err,result){

          if(err){
              console.log(err);
              res.status(403).json({result:[],message:err});
          }else {
              res.status(201).json({result:result,message:"Successfully retrieved car billing information"});
          }
      });
      }

});

router.post('/adminflightbilling', function(req, res, next) {
      //Date format YYYY-MM-DD
      var where_clause =  '';
      if( req.body.date){
        where_clause += "where Date(booking_date) = "+"'"+req.body.date+"'";
      }else if(req.body.month){
          var date = new Date();
          var year = date.getFullYear();
          var start_d = year+"-"+req.body.month+"-"+01;
          var end_d = year+"-"+req.body.month+"-"+31;
          where_clause += "where Date(booking_date) between '"+start_d+"' and '"+end_d+"'";
      }else{
        res.status(403).json({result:[],message:"Please select either month or date to get billing information"});
      }
      if(where_clause){
        var flightbilling="select * from flight_transaction "+where_clause;
        kafka.make_request('admin_flight_bill', {query : flightbilling}, function(err,result){

          if(err){
              console.log(err);
              res.status(403).json({result:[],message:err});
          }else {
              res.status(201).json({result:result,message:"Successfully retrieved flight billing information"});
          }
        });
      }
});


module.exports = router;
