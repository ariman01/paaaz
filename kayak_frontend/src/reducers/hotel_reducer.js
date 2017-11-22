const initialState = {
 listofsearchedhotels:[{
                name:"Sofitel Los Angeles at Bernandinho",
                stars:4,
                rating:8.5,
                reviews:"Excellent",
                city : "San Jose",
                state : "California",
                zip : 95126,
                capacity : 10,
                address:"Beverly Grove",
                price:259
              }],
 listofdisplayedhotels:[{
                name:"Sofitel Los Angeles at Bernandinho",
                stars:4,
                rating:8.5,
                reviews:"Excellent",
                city : "San Jose",
                state : "California",
                zip : 95126,
                capacity : 10,
                address:"Beverly Grove",
                price:259
              }],
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