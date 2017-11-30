const topics = [

    "hotel_search_admin_req",
    "hotel_search_admin_res",
    "hotel_update_admin_req",
    "car_search_admin_req",
    "car_update_admin_req",
    "flight_search_admin_req",
    "flight_update_admin_req",
    "add_car_req",
    "add_user_req"

]


exports.getTopicList = function (){
  return topics;
}
