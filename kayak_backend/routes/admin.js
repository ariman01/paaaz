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


module.exports = router;
