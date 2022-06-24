import { 
  FETCH_GALLERIES_OF_USER,
  saveGalleries
} from '../actions/gallery';

import api from './utils/api';

const gallerymiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GALLERIES_OF_USER: {
      const id = action.clientId;
      api({
        method: 'GET',
        url: `shooting/client/${id}`,
        
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveGalleries(response.data));
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

export default gallerymiddleware;