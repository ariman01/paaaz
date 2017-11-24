const initialData ={
  hotelBillingInformation:[],
  total_sales:{car_sales:200,flight_sales:300,hotel_sales:10,user_booking:510},
  hotel_analysis_data:[{
      top_ten_hotel_sales:{
          hotels:["Hayat","Grand","Taj","Oberoi","Country Inn","Hilton","May Blair","Bazuka","Bazinga","Test"],
          sales:[10000,10200,20000,10000,80000,20000,60000,10000,50000,40000]
      }},
      {top_ten_hotel_sales_city:{
          city_name:[],
          sales:[]
      }},
      {top_ten_host_sales:{
          hotels:[],
          sales:[]
      }}
   ]
}
export default function admin_reducer(state = initialData, action) {
    switch (action.type) {

        case 'ADMIN_LOGIN_SUCCESS':
            let current_sales={};
            current_sales.car_sales = action.data.car_sales;
            current_sales.flight_sales = action.data.flight_sales;
            current_sales.flight_sales = action.data.flight_sales;
            return Object.assign({},state,{
              total_sales:current_sales
            });
        case 'ADMIN_LOGIN_FAIL':
            return {
                ...state,
                error: action.error
            };
        case 'UPDATE_TOTAL_SALES':
        return Object.assign({},state,{
          total_sales:action.total_Sales
        });

        case 'UPDATE_HOTEL_ANALYSIS':
        return Object.assign({},state,{
          hotel_analysis_data:action.hotel_analysis_data
        });

        case 'UPDATE_HOTEL_BILLING_INFO':
        return Object.assign({},state,{
          hotelBillingInformation:action.hotel_billing_info
        });

        default:
            return state
    }
}
