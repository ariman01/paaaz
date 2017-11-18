var Cars = require('./../models/cars')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/kayak');

var db = mongoose.connection;
db.on('error' , console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log("connected to mongodb");
});



exports.searchCars = function(data, callback){
  Cars.searchCars( data.src_city, data.destination_city , function(err , results){
    if(err){
      callback(null,err);
    }
    else{
      callback(null,results);
    }
  });
}


exports.bookCar = function(data, callback){
  console.log("bookCar");
  callback(null,{result:"bookCar success"});
}
