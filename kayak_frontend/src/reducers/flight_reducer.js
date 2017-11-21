var flights=[];
var displayflights=[];
export default function flightdetails_reducer(state = {flights:{'name':'pooja'}}, action) {
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
        default:
            return state
    }
}