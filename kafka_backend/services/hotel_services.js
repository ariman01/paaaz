var Hotels = require('./../models/hotels');

exports.searchHotels = function(data, callback){
  Hotels.searchHotels( data.hotel_city, function(err , results){
    if(err){
      callback(null,err);
    }
    else{
      callback(null,results);
    }
  });
}
