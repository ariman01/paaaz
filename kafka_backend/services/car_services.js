exports.searchCars = function(data, callback){
  console.log("searchCars");
  callback(null,{result:"searchCars success"});

}

exports.bookCar = function(data, callback){
  console.log("bookCar");
  callback(null,{result:"bookCar success"});
}
