var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carSchema = new Schema({
  model_no:{
    type:String,
    required : true
  },
  capacity:{
    type:Number,
    required : true
  },
  no_of_bags:{
    type:Number,
    required : true
  },
  name:{
    type:String,
    required:true
  },
  no_of_doors:{
    type:Number,
    required : true
  },
  price:{
    type:Number,
    required : true
  },
  src_city:{
    type:String,
    required : true
  },
  destination_city:{
    type:String,
    required : true
  },
  rental_agency:{
    type:String,
    required : true
  },
  car_type:{
    type:String,
    required : true
  }
});


const Cars = mongoose.model('cars',carSchema);


function addNewCar(cardetail, callback){
    console.log("[Kafka] car model adding new car:",cardetail);
    cardetail.save(callback);
}

function searchCars(src_city, destination_city, callback){
  var query = {};
  if(src_city)
    query.src_city = src_city;
  if(destination_city)
    query.destination_city = destination_city;
  console.log("searchCar:",query);
  Cars.find(query, callback);
}

function deleteCar(model_no, callback){
  Cars.deleteOne({model_no:model_no}, callback);
}

function updateCar(car_model_no,cardetail, callback){
  Cars.update({ model_no: car_model_no}, {$set: cardetail}, callback);
}

function searchCarsAdmin(model_no, name, callback){
  var query = {};
  if(model_no)
    query.model_no = model_no;
  if(name)
    query.name = name;
  console.log("searchCarAdmin:",query);
  Cars.find(query, callback);
}


function updateCarAdmin(carDetail,callback){
  Cars.update({model_no : carDetail.model_no},{$set:{
    capacity : carDetail.capacity,
    no_of_bags :carDetail.no_of_bags,
    name :carDetail.name,
    no_of_doors :carDetail.no_of_doors,
    price :carDetail.price,
    src_city :carDetail.src_city,
    destination_city :carDetail.destination_city,
    rental_agency :carDetail.rental_agency,
    car_type :carDetail.car_type
  }},callback);
}


module.exports.addNewCar = addNewCar;
module.exports.searchCars = searchCars;
module.exports.deleteCar = deleteCar;
module.exports.updateCar = updateCar;
module.exports.searchCarsAdmin = searchCarsAdmin;
module.exports.updateCarAdmin = updateCarAdmin;
module.exports.Cars = Cars;
