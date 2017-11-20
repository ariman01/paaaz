const topics = [
  "car_search_req",
  "car_book_req",
  "flight_search_req",
   "hotel_search_req",
  "hotel_add_req",
   "hotel_search_res",
   "hotel_add_res"
]


exports.getTopicList = function (){
  return topics;
}
