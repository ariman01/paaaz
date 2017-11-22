var hotels=[];
var displayhotels=[];
export default function hoteldetails_reducer(state = {hotels:{'name':'pooja'}}, action) {
    switch (action.type) {

        case 'HOTEL_SUCCESS':
            return {
                ...state,
                hotels: action.result
            };
        case 'HOTEL_FAILURE':
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
}