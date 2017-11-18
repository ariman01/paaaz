var  Flights = require('./../models/flights');

var mongoose = require('mongoose');



var db = mongoose.connection;
db.on('error' , console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log("connected to mongodb");
});

exports.searchFlights = function(data, callback){
	// search in the db for cars
    console.log("searchFlights");
   console.log("I am inside flight_services");
  
  Flights.searchFlights(data, function(err, result){
       
       console.log("Result is:"+result);

       if(err){
      callback(null,err);
    }
    else{
      callback(null,result);
    }

  });

//  callback(null,{result:"Flight Search success"});

}