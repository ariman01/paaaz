var mongoose = require('mongoose');

var hotelSchema = mongoose.Schema({
  hotelId:{
    type:String,
    required:true
  },
  name:{
    type:String
  }
});

const Hotels = mongoose.model('hotels',hotelSchema);


function addNewHotel(hotelDetail, callback){
  hotelDetail.save(callback);
}

function searchHotels(location, callback){
  Hotels.find(query, callback);
}

function searchHotel(parameter, callback){
	Hotels.findOne(parameter, callback);
}


module.exports.addNewHotel = addNewHotel;
module.exports.searchHotels = searchHotels;
module.exports.searchHotel = searchHotel;
module.exports.Hotels = Hotels;
