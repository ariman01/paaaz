const topics = [

    "hotel_search_admin_req",
    "hotel_search_admin_res",
    "hotel_update_admin_req",
    "car_search_admin_req",
    "car_update_admin_req",
    "flight_search_admin_req",
    "flight_update_admin_req",
 "admin_analysis_hotel_req",
 "admin_analysis_car_req",
 "admin_analysis_flight_req",
 "admin_hotel_bill_req",
    "flight_search_req",
    "flight_search_res",
    "car_search_req",
    "car_search_res",
    "hotel_search_req",
    "hotel_search_res",
    "car_book_req",
    "car_book_res",
    "flight_book_req",
    "flight_book_res",
    "hotel_book_req",
    "hotel_book_res",
 "admin_car_bill_req",
 "admin_flight_bill_req",
 "admin_total_sales_req",
 "admin_signin_req"

]


exports.getTopicList = function (){
  return topics;
}
