var express = require('express');
var router = express.Router();
var kafka = require('./../kafka/client');

router.get('/searchCars', function(req, res, next) {

  var src_city = (req.body.src_city).toLowerCase() ;
  var destination_city = (req.body.destination_city).toLowerCase();

  kafka.make_request('car_search',{"src_city" : src_city , "destination_city" : destination_city}, function(err,result){
    if(err){
      console.log("error in searching cars");
    }
    else{
      res.status(201).json(result);
    }
  });
});

module.exports = router;
