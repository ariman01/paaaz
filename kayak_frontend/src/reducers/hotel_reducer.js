const initialState = {
 hotels:[{
                name:"Sofitel Los Angeles at Beverly Hills",
                stars:4,
                rating:8.5,
                reviews:"Good",
                city : "San Jose",
                state : "California",
                zip : 95126,
                capacity : 10,
                address:"Beverly Grove",
                price:249
              }],
 displayhotels:[],
 current_hotel:[]
}
export default function hoteldetails_reducer(state = initialState, action) {
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