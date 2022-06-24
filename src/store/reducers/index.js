import { combineReducers } from 'redux';

import fieldReducer from './field';
import authReducer from './authentification';
import shootingReducer from './shooting';


const rootReducer = combineReducers({
  // all reducers here
  field: fieldReducer,
  auth: authReducer,
  shooting: shootingReducer,


});

export default rootReducer;
