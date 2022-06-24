import { combineReducers } from 'redux';

import fieldReducer from './field';
import authReducer from './authentification';
import shootingReducer from './shooting';
import visitorReducer from './visitor';


const rootReducer = combineReducers({
  // all reducers here
  field: fieldReducer,
  auth: authReducer,
  shooting: shootingReducer,
  visitor: visitorReducer,


});

export default rootReducer;
