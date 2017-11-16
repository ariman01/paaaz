var mongoose = require('mongoose');

var flightSchema = mongoose.Schema({
  flight_id:{
    type:String,
    required:true
  },
  carrier_name:{
    type:String
    required : true
  },
  src_city :{
    type : String,
    required : true
  },
  destination_city :{
    type : String,
    required : true
  },
  flight_duration : {
    type : Number,
    required : true
  },
  operational_day : {
    type : String,
    required : true
  },
  departure_time : {
    type : String,
    required : true
  },
  // arrival_time can be calculated from departure_time and flight_duration
  /*arrival_time : {
    type : String,
    required : true
  },*/
  price : {
    type  : Number,
    required : true
  }
});

const Flights = mongoose.model('flights',flightSchema);


function addNewFlight(flightDetail, callback){
  flightDetail.save(callback);
}

function searchFlights(parameter, callback){
	Flights.find(parameter, callback);
}

function searchFlight(parameter, callback){
	Flights.findOne(parameter, callback);
}


module.exports.addNewFlight = addNewFlight;
module.exports.searchFlights = searchFlights;
module.exports.searchFlight = searchFlight;
module.exports.Flights = Flights;
