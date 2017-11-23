var mongoose = require('mongoose');

var hotelSchema = mongoose.Schema({
  hotel_id:{
    type: String,
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
  },
  hotel_reviews : {
    type : [String]
  },
  //hotel_capacity = number of people that can be accomadated in the hotel
  hotel_capacity : {
    type : Number,
    required : true
  },
    hotel_start_date : {
    type : Date,
  },
    hotel_end_date : {
    type : Date,
  },
   hotel_price : {
    type : Number,
    required : true
  }

});

const Hotels = mongoose.model('hotels',hotelSchema);


function addNewHotel(hotelDetail, callback){
  console.log("addNewHotel:",hotelDetail);
  hotelDetail.save(callback);

}

function searchHotels(hotel_city, hotel_capacity, callback){
  var query = {};
  if(hotel_city)
    query.hotel_city = hotel_city;
  if(hotel_capacity)
    query.hotel_capacity = hotel_capacity;
  console.log("searchHotel:",query);
  Hotels.find(query, callback);

}

function searchHotel(parameter, callback){
  Hotels.findOne(parameter, callback);
}


module.exports.addNewHotel = addNewHotel;
module.exports.searchHotels = searchHotels;
module.exports.searchHotel = searchHotel;
module.exports.Hotels = Hotels;
