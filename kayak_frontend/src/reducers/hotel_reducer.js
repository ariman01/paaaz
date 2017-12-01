import * as left_nav_util from './../utils/laft_nav_helper';
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
              },{
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
                   stars:2,
                   rating:8.5,
                   reviews:"Excellent",
                   city : "San Jose",
                   state : "California",
                   zip : 95126,
                   capacity : 10,
                   address:"Beverly Grove",
                   price:250
                 },{
                   name:"Sofitel Los Angeles at Bernandinho",
                   stars:4,
                   rating:8.5,
                   reviews:"Excellent",
                   city : "San Jose",
                   state : "California",
                   zip : 95126,
                   capacity : 10,
                   address:"Beverly Grove",
                   price:600
                 },
                 {
                   name:"Sofitel Los Angeles at Bernandinho",
                   stars:3,
                   rating:8.5,
                   reviews:"Excellent",
                   city : "San Jose",
                   state : "California",
                   zip : 95126,
                   capacity : 10,
                   address:"Beverly Grove",
                   price:300
                 }],
 displayedhotels:[{
                name:"Sofitel Los Angeles at Bernandinho",
                stars:2,
                rating:8.5,
                reviews:"Excellent",
                city : "San Jose",
                state : "California",
                zip : 95126,
                capacity : 10,
                address:"Beverly Grove",
                price:250
              },{
                name:"Sofitel Los Angeles at Bernandinho",
                stars:4,
                rating:8.5,
                reviews:"Excellent",
                city : "San Jose",
                state : "California",
                zip : 95126,
                capacity : 10,
                address:"Beverly Grove",
                price:600
              },
              {
                name:"Sofitel Los Angeles at Bernandinho",
                stars:3,
                rating:8.5,
                reviews:"Excellent",
                city : "San Jose",
                state : "California",
                zip : 95126,
                capacity : 10,
                address:"Beverly Grove",
                price:300
              }],
 current_hotel:[],
 hotel_days:[],
 hotel_finalamount:[],
 latest_admin_search_parameter:null,
 leftHotelNavConfig:{price:1000,stars:{2:true,3:true,4:true}}
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
        case 'UPDATE_LAST_HOTEL_ADMIN_SEARCH':
            return Object.assign({},state,{
                latest_admin_search_parameter:action.last_search
            });
        case 'SET_HOTEL_CONFIG':
            let updatedhotellist = left_nav_util.filterHotelbasedOnLeftNavBar(state.hotels.slice(),action.config);
            return Object.assign({},state,{
                leftHotelNavConfig:action.config,
                displayedhotels:updatedhotellist
            })
        default:
            return state
    }
}
