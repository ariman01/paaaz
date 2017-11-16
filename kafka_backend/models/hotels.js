var mongoose = require('mongoose');

var hotelSchema = mongoose.Schema({
  hotel_id:{
    type:String,
    required:true
  },
  hotel_name:{
    type:String,
    required:true
  },
  hotel_address : {
    type : String,
    required : true
  },
  hotel_city : {
    type : String,
    required : true
  },
  hotel_state : {
    type : String,
    required : true
  },
  hotel_zip : {
    type : Number,
    required : true
  },
  hotel_stars : {
    type : Number,
    required : true
  },
  hotel_room_type : {
    type : [String],
    required : true
  },
  hotel_rating : {
    type : Number,
    required : true
  }
  hotel_reviews : {
    type : [String],
    required : true
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
