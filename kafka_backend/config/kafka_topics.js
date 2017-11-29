const topics = [
 "admin_analysis_hotel_req",
 "admin_analysis_car_req",
 "admin_analysis_flight_req",
 "admin_hotel_bill_req",
 "flight_search_req",
 "car_search_req",
 "admin_car_bill_req",
 "admin_flight_bill_req",
 "admin_total_sales_req",
 "admin_signin_req"
]


exports.getTopicList = function (){
  return topics;
}
