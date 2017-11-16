var mongoose = require('mongoose');

var flightSchema = mongoose.Schema({
  flightId:{
    type:String,
    required:true
  },
  carrierName:{
    type:String
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
