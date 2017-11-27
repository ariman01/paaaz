const initialState = {
 flights:[{
                carrier:"Lufthanza",
                operation_day:3,
                departure_time:" 12:00 PM",
                duration:240,
                src_city : "San Jose",
                destination_city : "San Diego",
                price:249
              }],
 displayflights:[],
 current_flight:[],
    flight_days:[]
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
        default:
            return state
    }
}