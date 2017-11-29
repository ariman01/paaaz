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
    hotels:[{
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
 current_hotel:[],
    hotel_days:[],
    hotel_finalamount:[]
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
        case 'CURRENT_HOTEL':
            return{
                ...state,
                current_hotel:action.result
            };
        case 'HOTEL_DAYS':
            return{
                ...state,
                hotel_days:action.result
            };
        case 'HOTEL_FINALAMOUNT':
            return{
                ...state,
                hotel_finalamount:action.result
            }
        default:
            return state
    }
}