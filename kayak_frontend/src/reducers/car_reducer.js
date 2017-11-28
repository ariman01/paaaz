

const initialState = {
 cars:[{
                name:"Audi Q3",
                duration:4,
                no_of_bags:8,
                no_of_doors:4,
                src_city : "San Jose",
                destination_city : "San Diego",
                agency : "Audi Rental Groups",
                price:249,
                capacity : 4
              }],
displaycars:[],
 current_car:[],
    car_days:[]
}
export default function cardetails_reducer(state = initialState, action) {
    switch (action.type) {

        case 'CAR_SUCCESS':
            return {
                ...state,
                cars: action.result
            };
        case 'CAR_FAILURE':
            return {
                ...state,
                error: action.error
            };
        case 'CURRENT_CAR':
            return{
                ...state,
                current_car:action.result
            };
        case 'CAR_DAYS':
            return{
                ...state,
                car_days:action.result
            };
        default:
            return state

    }

}