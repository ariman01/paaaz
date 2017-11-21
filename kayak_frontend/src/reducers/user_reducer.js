import { userConstants } from '../constants/userConstants';
const initialState = {
        currentUser : null,
};

export function users(state = initialState, action) {
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case userConstants.GETALL_SUCCESS:
            return {
                items: action.users
            };
        case userConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case userConstants.USER_DETAILS:
            return{
                ...state,
                userdetails:action.user
            };
        default:
            return state
    }
}
