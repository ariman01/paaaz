import { combineReducers } from 'redux';
import { authentication } from './authentication_reducer';
import { registration } from './registration_reducer';
import { users } from './users.reducer';
import { alert } from './alert_reducer';
import {listoffiles} from './listfiles.reducer';
const rootReducer = combineReducers({
  authentication,
  listoffiles,
  registration,
  users,
  alert
});

export default rootReducer;