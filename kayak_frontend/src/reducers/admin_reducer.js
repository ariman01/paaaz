const initialData ={
  total_sales:{car_sales:0,flight_sales:0,hotel_sales:0,user_booking:0}
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
        default:
            return state
    }
}
