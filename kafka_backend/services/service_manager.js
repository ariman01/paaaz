var carsercices = require('./car_services');
var flightservices = require('./flight_services');
var hotelservices = require('./hotel_services');

function handle_request(topic, data, callback){
    console.log("[Kafka] handle_request topic: "+topic+" ,data: ",data);
    if(topic === "car_search_req"){
      carsercices.searchCars(data, callback);
    }else if(topic === "car_book_req"){
      carsercices.bookCar(data, callback);
    }else if(topic === "flight_search_req"){
    	
    	flightservices.searchFlights(data,callback);
    }


}

exports.handle_request = handle_request;
