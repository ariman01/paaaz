const topics = [

    "add_user_req",
    "search_user_req",
    "update_user_req",
    "delete_user_req",
    "hotel_search_admin_req",
    "hotel_search_admin_req",
    "hotel_search_admin_res",
    "hotel_update_admin_req",
    "car_search_admin_req",
    "car_update_admin_req",
    "flight_search_admin_req",
    "flight_update_admin_req",
    "add_car_req",
    "add_flight_req",
    "hotel_add_req",
    "delete_car_req",
    "delete_flight_req",
    "delete_hotel_req",
    "admin_signin_req",
    "admin_total_sales_req",
    "admin_analysis_car_req",
    "admin_analysis_flight_req",
    "admin_analysis_hotel_req"

]


exports.getTopicList = function (){
  return topics;
}
