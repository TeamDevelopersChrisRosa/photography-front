import api from './utils/api';

import { 
  FETCH_ALL_SHOOTING_PAGES_OF_PHOTOGRAPHER,
  saveShootingPages 
} from '../actions/visitor';


const visitormiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_SHOOTING_PAGES_OF_PHOTOGRAPHER: {
      const id = 1; //now we have just one photographer, so we can hardcode the id
      api({
        method: 'GET',
        url: `page/shooting/photographer/${id}`,
        
      })
        .then((response) => {
          store.dispatch(saveShootingPages(response.data));
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

export default visitormiddleware;