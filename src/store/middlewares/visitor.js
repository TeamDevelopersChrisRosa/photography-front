import api from './utils/api';

import { 
  FETCH_ALL_SHOOTING_PAGES_OF_PHOTOGRAPHER,
  saveShootingPages,
  FETCH_ALL_PORTFOLIO_PAGES_OF_PHOTOGRAPHER,
  savePortfolioPages,
  FETCH_SHARED_PICTURES_OF_PHOTOGRAPHER,
  saveSharedPictures
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

    case FETCH_ALL_PORTFOLIO_PAGES_OF_PHOTOGRAPHER: {
      const id = 1; //now we have just one photographer, so we can hardcode the id
      api({
        method: 'GET',
        url: `page/portfolio/photographer/${id}`,
      })
        .then((response) => {
          store.dispatch(savePortfolioPages(response.data));
        })
        .catch((error) => {
          console.log(error)
        });
      break;
    }

    case FETCH_SHARED_PICTURES_OF_PHOTOGRAPHER: {
      const id = 1; //now we have just one photographer, so we can hardcode the id

      api({
        method: 'GET',
        url: `picture/photographer/${id}`,
      })
        .then((response) => {
          store.dispatch(saveSharedPictures(response.data));
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