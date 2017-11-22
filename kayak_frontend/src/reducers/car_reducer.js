var cars=[];
var displaycars=[];
var current_car=[];
export default function cardetails_reducer(state = {}, action) {
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
        default:
            return state
    }
}