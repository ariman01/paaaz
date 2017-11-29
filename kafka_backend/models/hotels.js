var mongoose = require('mongoose');
var mysql = require('./mysql');

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
    type : String,
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
function bookNewHotel(hotelbookdetail, callback){
  console.log("its hotel details in models(hotels)"+hotelbookdetail.user_id);
    var bookHotel = "INSERT INTO hotel_transaction(user_id,src_city,hotel_name,hotel_id,booking_date,booking_amount,start_date,end_date) VALUES ('" + hotelbookdetail.user_id + "','" + hotelbookdetail.src_city + "','" + hotelbookdetail.hotel_name + "','" + hotelbookdetail.hotel_id + "','" + hotelbookdetail.booking_date + "','" + hotelbookdetail.booking_amount + "','" + hotelbookdetail.start_date + "','" + hotelbookdetail.end_date + "')";
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
        }
        else(result)
        {
            console.log("its result after mysql query"+result);
            callback(null,result);
        }
    }, bookHotel);
    console.log("[Kafka] car model booking new hotel:",hotelbookdetail);
}

function searchHotel(parameter, callback){
  Hotels.findOne(parameter, callback);
}


module.exports.addNewHotel = addNewHotel;
module.exports.searchHotels = searchHotels;
module.exports.searchHotel = searchHotel;
module.exports.bookNewHotel=bookNewHotel;
module.exports.Hotels = Hotels;
