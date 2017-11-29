var carservices = require('./car_services');
var flightservices = require('./flight_services');
var hotelservices = require('./hotel_services');
var userservices = require('./user_services');
var adminservices = require('./admin_services');

function handle_request(topic, data, callback){
    console.log("[Kafka] handle_request topic: "+topic+" ,data: ",data);
    if(topic === "car_search_req"){
      carservices.searchCars(data, callback);
    }else if(topic === "add_car_req"){
      carservices.addCar(data, callback);
    }else if(topic === "delete_car_req"){
      carservices.deleteCar(data, callback);
    }else if(topic === "edit_car_req"){
      carservices.editCar(data, callback);
    }else if(topic === "flight_search_req"){
    	flightservices.searchFlights(data,callback);
    }else if(topic === "add_flight_req"){
    	flightservices.addFlight(data,callback);
    }else if(topic === "delete_flight_req"){
    	flightservices.deleteFlight(data,callback);
    }else if(topic === "edit_flight_req"){
    	flightservices.editFlight(data,callback);
    }else if(topic === "hotel_search_req"){
      hotelservices.searchHotels(data, callback);
    }else if(topic === "hotel_add_req"){
      hotelservices.addNewHotel(data, callback);
    }else if(topic === "signup_req"){
      userservices.addUser(data, callback);
    }else if(topic === "admin_analysis_hotel_req"){
        adminservices.adminHotelAnalysis(data, callback);
    }else if(topic === "admin_analysis_car_req"){
        adminservices.adminCarAnalysis(data, callback);
    }else if(topic === "admin_analysis_flight_req"){
        adminservices.adminFlightAnalysis(data, callback);
    }else if(topic === "admin_signin_req"){
      adminservices.adminSignIn(data, callback);
    }else if(topic === "admin_hotel_bill_req"){
      adminservices.adminHotelBilling(data, callback);
    }else if(topic === "hotel_search_admin_req"){
      hotelservices.searchHotelsAdmin(data, callback);
    }else if(topic === "hotel_update_admin_req"){
      hotelservices.updateHotelAdmin(data, callback);
    }else if(topic === "car_search_admin_req"){
      carservices.searchCarsAdmin(data, callback);
    }else if(topic === "car_update_admin_req"){
      carservices.updateCarAdmin(data, callback);
    }else if(topic === "flight_search_admin_req"){
      flightservices.searchFlightsAdmin(data, callback);
    }else if(topic === "flight_update_admin_req"){
      flightservices.updateFlightAdmin(data, callback);
    }else if(topic === "admin_signin_req"){
        adminservices.adminSignIn(data, callback);
    }else if(topic === "admin_hotel_bill_req"){
        adminservices.adminHotelBilling(data, callback);
    }else if(topic === "car_book_req"){
        carservices.bookCar(data, callback);
    }else if(topic === "flight_book_req"){
        flightservices.bookFlight(data, callback);
    }else if(topic === "hotel_book_req") {
        hotelservices.bookHotel(data, callback);
    }else if(topic === "admin_car_bill_req"){
      adminservices.adminCarBilling(data, callback);
    }else if(topic === "admin_flight_bill_req"){
      adminservices.adminflightBilling(data, callback);
    }else if(topic === "admin_total_sales_req"){
      adminservices.adminTotalSalesAnalysis(data, callback);
    }else if(topic === "delete_hotel_req"){
      hotelservices.deleteHotel(data, callback);
    }
}

exports.handle_request = handle_request;
