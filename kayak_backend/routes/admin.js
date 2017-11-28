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
        }else {
            res.status(201).json(result);
        }
    });
});

router.post('/searchhotelsadmin', function(req, res, next) {
    console.log("In search hotels admin");

    var hotel_id = req.body.hotel_id;
    var hotel_name = req.body.hotel_name;

    kafka.make_request('hotel_search_admin',{"hotel_id" : hotel_id , "hotel_name" : hotel_name}, function(err,result){
        if(err){
            console.log("error in searching hotels");
            res.status(403).json({result:result,message:"Admin Failed to search hotel with id :"+hotel_id});
        }
        else{
            console.log("hotel search successful");
            res.status(201).json({result:result,message:"Admin Sucessfully searched hotel with id :"+hotel_id});
        }
    });
});


router.post('/updatehoteladmin', function(req, res, next) {
    console.log("In update hotels");
    var hotelDetail = {
       hotel_id : req.body.hotel_id,
       hotel_name : req.body.hotel_name,
       hotel_address : req.body.hotel_address,
       hotel_city : req.body.hotel_city,
       hotel_state : req.body.hotel_state,
       hotel_zip : req.body.hotel_zip,
       hotel_stars :req.body.hotel_stars,
       hotel_room_type : req.body.hotel_room_type,
       hotel_rating : req.body.hotel_rating,
       hotel_reviews : req.body.hotel_reviews,
       hotel_capacity : req.body.hotel_capacity,
       hotel_price : req.body.hotel_price
    };


    kafka.make_request('hotel_update_admin', hotelDetail , function(err,result){
        if(err){
            console.log("error in updating hotel");
            res.status(403).json({result:result,message:"Failed to add hotel :"+ hotelDetail.hotel_name});
        }
        else{
            res.status(201).json({result:result,message:"Sucessfully updated hotel :"+hotelDetail.hotel_name});
        }
    });
});


module.exports = router;
