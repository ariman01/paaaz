var Cars = require('./../models/cars')

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

exports.addCar = function(data, callback){
  var carDetail = new Cars.Cars({
    model_no:data.model_no,
    name:data.name,
    capacity:data.capacity,
    no_of_bags:data.no_of_bags,
    no_of_doors:data.no_of_doors,
    price:data.price,
    src_city:data.src_city,
    destination_city:data.destination_city,
    rental_agency:data.rental_agency,
    car_type:data.car_type}
  );
  Cars.addNewCar( carDetail , function(err , results){
    if(err){
      console.log("[Kafka] Error adding new car")
    }
    callback(err,results);
  });
}

exports.deleteCar = function(data, callback){
  console.log("delete car data",data);
  Cars.deleteCar( data.model_no , function(err , results){
    if(err){
      console.log("[Kafka] Error deleting car ")
    }
    callback(err,results);
  });
}

exports.editCar = function(data, callback){
  console.log("edit car data",data);
  if(!data.model_no){
    callback("Model No missing, failed to edit without model_no",null);
  }else{
    var carEditData = {};
    if(data.name)
      carEditData.name = data.name;
    if(data.capacity)
        carEditData.capacity = data.capacity;
    if(data.no_of_bags)
        carEditData.no_of_bags = data.no_of_bags;
    if(data.no_of_doors)
        carEditData.no_of_doors = data.no_of_doors;
    if(data.price)
          carEditData.price = data.price;
    if(data.src_city)
        carEditData.src_city = data.src_city;
    if(data.destination_city)
        carEditData.destination_city = data.destination_city;
    if(data.rental_agency)
        carEditData.rental_agency = data.rental_agency;
    if(data.car_type)
        carEditData.car_type = data.car_type;
    Cars.updateCar(data.model_no, carEditData, function(err,result){
      if(err){
        console.log("[Kafka] Error while editing car detail");
      }
      callback(err, result);
    });
  }

}
