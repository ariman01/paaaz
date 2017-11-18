export function cars(state = {cars:{'name':'pooja'}}, action) {
    const cars={'no':'123'};
    switch (action.type) {

        case 'CAR_SUCCESS':
            console.log(cars);
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