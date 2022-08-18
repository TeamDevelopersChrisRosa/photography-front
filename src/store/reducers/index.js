import { combineReducers } from 'redux';

import fieldReducer from './field';
import authReducer from './authentification';
import shootingReducer from './shooting';
import visitorReducer from './visitor';
import userReducer from './user';
import themeReducer from './theme';


const rootReducer = combineReducers({
  // all reducers here
  field: fieldReducer,
  auth: authReducer,
  shooting: shootingReducer,
  visitor: visitorReducer,
  user: userReducer,
  theme: themeReducer,


});

export default rootReducer;
