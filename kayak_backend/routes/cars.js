var express = require('express');
var router = express.Router();
var kafka = require('./../kafka/client');

router.post('/searchcars', function(req, res, next) {

  var src_city = (req.body.src_city).toLowerCase() ;
  var destination_city = (req.body.destination_city).toLowerCase();

  kafka.make_request('car_search',{"src_city" : src_city , "destination_city" : destination_city}, function(err,result){
    if(err){
      console.log("error in searching cars");
    }
    else{
      console.log("its result in car model"+result.src_city);
      res.status(201).json({result:result});
    }
  });
});

router.post('/addcar', function(req, res, next) {
  var cardetail = {
    model_no:req.data.model_no,
    name:req.data.name,
    capacity:req.data.capacity,
    no_of_bags:req.data.no_of_bags,
    no_of_doors:req.data.no_of_doors,
    price:req.data.price,
    src_city:req.data.src_city,
    destination_city:req.data.destination_city,
    rental_agency:req.data.rental_agency,
    car_type:req.data.car_type
  };
  kafka.make_request('add_car',cardetail, function(err,result){
    if(err){
      console.log("[Node Server] Error adding new car, error: ",err);
      res.status(403).json({message:"Failed to add car: "+cardetail.name+" try again!!!"})
    }
    else{
      res.status(201).json({result:result,message:"successfully Added car:"+cardetail.name});
    }
  });
});

router.post('/deletecar', function(req, res, next) {
  var cardetail = {
    model_no:req.data.model_no
  };
  kafka.make_request('delete_car',cardetail, function(err,result){
    if(err){
      console.log("[Node Server] Error deleteing car, error: ",err);
      res.status(403).json({message:"Failed to delete car: "+cardetail.model_no+" try again!!!"})
    }
    else{
      res.status(201).json({result:result,message:"successfully deleted car: "+cardetail.model_no});
    }
  });
});

router.post('/editcar', function(req, res, next) {
  var cardetail = {
    model_no:req.data.model_no,
    name:req.data.name,
    capacity:req.data.capacity,
    no_of_bags:req.data.no_of_bags,
    no_of_doors:req.data.no_of_doors,
    price:req.data.price,
    src_city:req.data.src_city,
    destination_city:req.data.destination_city,
    rental_agency:req.data.rental_agency,
    car_type:req.data.car_type
  };
  kafka.make_request('edit_car',cardetail, function(err,result){
    if(err){
      console.log("[Node Server] Error editing car, error: ",err);
      res.status(403).json({message:"Failed to edit car: "+cardetail.model_no+" try again!!!"})
    }
    else{
      res.status(201).json({result:result,message:"successfully edited car: "+cardetail.model_no});
    }
  });
});

module.exports = router;
