const topics = [
  "car_search_req",
  "edit_car_req",
  "add_car_req",
  "delete_car_req",
  "add_flight_req",
  "delete_flight_req",
  "edit_flight_req",
  "flight_search_req"
]


exports.getTopicList = function (){
  return topics;
}
