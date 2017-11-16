var mongoose = require('mongoose');

var carSchema = mongoose.Schema({
  carId:{
    type:String,
    required:true
  },
  name:{
    type:String
  }
});

const Cars = mongoose.model('cars',carSchema);


function addNewCar(carDetail, callback){
  carDetail.save(callback);
}

function getCarsByLocation(src, des, callback){
  var query = {}
  if(src)
    query.srcDes = src;
  if(des)
      query.desSrc = des;
  Cars.find(query, callback);
}

function searchCar(parameter, callback){

	Cars.findOne(parameter, callback);
}


module.exports.addNewCar = addNewCar;
module.exports.getCarsByLocation = getCarsByLocation;
module.exports.searchCar = searchCar;
module.exports.Cars = Users;
