import { userConstants } from '../constants/userConstants';
console.log("in registration reducer");
export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}