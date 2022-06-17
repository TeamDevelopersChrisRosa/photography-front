import { combineReducers } from 'redux';

import fieldReducer from './field';
import authReducer from './authentification';
import galleryReducer from './gallery';


const rootReducer = combineReducers({
  // all reducers here
  field: fieldReducer,
  auth: authReducer,
  gallery: galleryReducer,


});

export default rootReducer;
