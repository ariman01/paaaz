var express = require('express');
var router = express.Router();
var kafka = require('./../kafka/client');

router.post('/searchHotels', function(req, res, next) {
    console.log("In search hotels");

    var hotel_city = (req.body.hotel_city).toLowerCase() ;
    var hotel_capacity = (req.body.hotel_capacity).toLowerCase() ;

    kafka.make_request('hotel_search',{"hotel_city" : hotel_city , "hotel_capacity" : hotel_capacity}, function(err,result){
        if(err){
            console.log("error in searching hotels");
            res.status(403).json({result:result,message:"Failed to search hotel in city :"+hotel_city});
        }
        else{
            console.log("hotel search successful");
            res.status(201).json({result:result,message:"Sucessfully searched hotel in city :"+hotel_city});
        }
    });
});

router.post('/addHotels', function(req, res, next) {
    console.log("In add hotels");

    var hotel_id = (req.body.hotel_id).toLowerCase() ;
    var hotel_name = (req.body.hotel_name).toLowerCase() ;
    var hotel_address = (req.body.hotel_address).toLowerCase() ;
    var hotel_city = (req.body.hotel_city).toLowerCase() ;
    var hotel_state = (req.body.hotel_state).toLowerCase() ;
    var hotel_zip = (req.body.hotel_zip).toLowerCase() ;
    var hotel_stars = (req.body.hotel_stars).toLowerCase() ;
    var hotel_room_type = (req.body.hotel_room_type).toLowerCase() ;
    var hotel_rating = (req.body.hotel_rating).toLowerCase() ;
    var hotel_reviews = (req.body.hotel_reviews).toLowerCase() ;
    var hotel_capacity = (req.body.hotel_capacity).toLowerCase() ;
    var hotel_price = (req.body.hotel_price).toLowerCase();

    kafka.make_request('hotel_add',{"hotel_id" : hotel_id , "hotel_name" : hotel_name , "hotel_address" : hotel_address , "hotel_city" : hotel_city , "hotel_state" : hotel_state , "hotel_zip" : hotel_zip , "hotel_stars" : hotel_stars , "hotel_room_type" : hotel_room_type , "hotel_rating" : hotel_rating, "hotel_reviews" : hotel_reviews , "hotel_capacity" : hotel_capacity ,  "hotel_price" : hotel_price}, function(err,result){
        if(err){
            console.log("error in adding hotel");
            res.status(403).json({result:result,message:"Failed to add hotel :"+hotel_name});
        }
        else{
            res.status(201).json({result:result,message:"Sucessfully added hotel :"+hotel_name});
            console.log("Request for hotel addition sent to kafka make request function");
        }
    });
});

module.exports = router;
