var express = require('express');
var router = express.Router();
var kafka = require('./../kafka/client');

router.post('/searchhotels' , function(req , res , next){
  var hotel_city = (req.body.hotel_city).toLowerCase();

  kafka.make_request('hotel_search',{"hotel_city" : hotel_city}, function(err,result){
    if(err){
      console.log("error in searching cars");
    }
    else{
      if(result.length === 0){
        res.status(400);
      }
      else{
        res.status(201).json(result);
      }
    }
  });

});

module.exports = router;
