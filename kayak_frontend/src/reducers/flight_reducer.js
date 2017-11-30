import * as left_nav_util from './../utils/laft_nav_helper';
const initialState = {
 flights:[{
                carrier:"Lufthanza",
                operation_day:3,
                departure_time:" 12:00 PM",
                flight_duration:5,
                src_city : "San Jose",
                destination_city : "San Diego",
                price:300
              },{
              carrier:"indigo",
              operation_day:3,
              departure_time:" 12:00 PM",
              flight_duration:3,
              src_city : "San Jose",
              destination_city : "San Diego",
              price:249
            },{
            carrier:"airindia",
            operation_day:2,
            departure_time:" 12:00 PM",
            flight_duration:2,
            src_city : "San Jose",
            destination_city : "San Diego",
            price:249}],
 displayflights:[{
                carrier:"Lufthanza",
                operation_day:3,
                departure_time:" 12:00 PM",
                flight_duration:5,
                src_city : "San Jose",
                destination_city : "San Diego",
                price:300
              },{
              carrier:"indigo",
              operation_day:3,
              departure_time:" 12:00 PM",
              flight_duration:3,
              src_city : "San Jose",
              destination_city : "San Diego",
              price:249
            },{
            carrier:"airindia",
            operation_day:2,
            departure_time:" 12:00 PM",
            flight_duration:2,
            src_city : "San Jose",
            destination_city : "San Diego",
            price:249}],
 current_flight:[],
 flight_days:[],
 flight_finalamount:[],
 latest_admin_search_parameter:null,
 leftFlightNavConfig:{duration:20,price:1000,carriers:{ Lufthanza: true, indigo: true, airindia: true }}
}
export default function flightdetails_reducer(state = initialState, action) {
    switch (action.type) {

        case 'FLIGHT_SUCCESS':
            return {
                ...state,
                flights: action.result
            };
        case 'FLIGHT_FAILURE':
            return {
                ...state,
                error: action.error
            };
        case 'CURRENT_FLIGHT':
            return{
                ...state,
                current_flight:action.result
            };
        case 'FLIGHT_DAYS':
            return{
                ...state,
                flight_days:action.result
            };
        case 'FLIGHT_FINALAMOUNT':
            return{
                ...state,
                flight_finalamount:action.result
            }
        case 'UPDATE_LAST_FLIGHT_ADMIN_SEARCH':
            return Object.assign({},state,{
                latest_admin_search_parameter:action.last_search
                });
        case 'SET_FLIGHT_CONFIG':
            let updatedflightlist = left_nav_util.filterFlightbasedOnLeftNavBar(state.flights.slice(),action.config);
            return Object.assign({},state,{
                leftFlightNavConfig:action.config,
                displayflights:updatedflightlist
            })
        default:
            return state
    }
}
