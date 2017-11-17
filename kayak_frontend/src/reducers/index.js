import { combineReducers } from 'redux';
import { authentication } from './authentication_reducer';
import { registration } from './registration_reducer';
import { users } from './user_reducer';
import { alert } from './alert_reducer';
import { cars } from './car_reducer';
const index = combineReducers({
  authentication,
  registration,
  users,
  alert,
    cars
});

export default index;