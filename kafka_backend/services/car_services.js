var Cars = require('./../models/cars');

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
