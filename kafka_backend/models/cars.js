var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mysql = require('./mysql');

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
  car_name:{
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
function bookNewCar(carbookdetail, callback){
    console.log("its in book new car"+carbookdetail.user_id);
    var bookCar = "INSERT INTO car_transaction(user_id,src_city,destination_city,agency_name,car_name,booking_date,booking_amount,start_date,end_date) VALUES ('" + carbookdetail.user_id + "','" + carbookdetail.src_city + "','" + carbookdetail.destination_city + "','" + carbookdetail.rental_agency + "','" + carbookdetail.car_name + "','" + carbookdetail.booking_date + "','" + carbookdetail.booking_amount + "','" + carbookdetail.start_date + "','" + carbookdetail.end_date + "')";
    mysql.fetchData(function (err, result) {
        if (err) {
            throw err;
        }
        else(result)
        {
            console.log("its result after mysql query"+result);
            callback(null,result);
        }
    }, bookCar);
    console.log("[Kafka] car model booking new car:",carbookdetail);
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

module.exports.addNewCar = addNewCar;
module.exports.searchCars = searchCars;
module.exports.deleteCar = deleteCar;
module.exports.updateCar = updateCar;
module.exports.bookNewCar = bookNewCar;
module.exports.Cars = Cars;