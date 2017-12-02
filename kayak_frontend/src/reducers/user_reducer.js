import { userConstants } from '../constants/userConstants';
const initialState = {
    currentUser : null,
    userdetails:{},
    carddetails:[]
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
        case 'GETALL_FAILURE':
            return {
                error: action.error
            };
        case 'GETUSER_DETAILS':
            return{
                ...state,
                userdetails:action.result
            };
        case 'SET_USER':
            return{
                ...state,
                user_id:action.result
            }
        case 'GETCARD_DETAILS':
            return{
                ...state,
                carddetails:action.result
            }
        case 'GETUSER_HISTORY':
            return{
                ...state,
                userhistory:action.result
            }
        default:
            return state
    }
}
