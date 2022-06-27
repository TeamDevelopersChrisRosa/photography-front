import { 
  FETCH_SHOOTINGS_OF_USER,
  saveShootings
} from '../actions/shooting';

import api from './utils/api';

const shootingmiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SHOOTINGS_OF_USER: {
      const id = action.clientId;
      api({
        method: 'GET',
        url: `shooting/client/${id}`,
        
      })
        .then((response) => {
          store.dispatch(saveShootings(response.data));
        })
        .catch((error) => {
            console.log(error)
          });
      break;
    }


    default:
      next(action);
    
    
  }
};

export default shootingmiddleware;