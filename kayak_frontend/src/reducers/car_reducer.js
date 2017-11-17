export function cars(state = {}, action) {
    switch (action.type) {

        case 'CAR_SUCCESS':
            return {
                ...state,
                cars: action.cars
            };
        case 'CAR_FAILURE':
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
}