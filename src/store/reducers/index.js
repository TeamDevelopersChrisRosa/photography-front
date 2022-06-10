import { combineReducers } from 'redux';

import fieldReducer from './field';
import authReducer from './authentification';


const rootReducer = combineReducers({
  // all reducers here
  field: fieldReducer,
  auth: authReducer,


});

export default rootReducer;
