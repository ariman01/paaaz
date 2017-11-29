const topics = [
 "admin_analysis_hotel_req",
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

]


exports.getTopicList = function (){
  return topics;
}
