import api from './utils/api';

import { 
  FETCH_ALL_SHOOTING_PAGES_OF_PHOTOGRAPHER,
  saveShootingPages,
  FETCH_ALL_PORTFOLIO_PAGES_OF_PHOTOGRAPHER,
  savePortfolioPages,
  FETCH_SHARED_PICTURES_BY_THEME_ID,
  saveSharedPicturesByTheme,
  FETCH_ITS_ME_PAGE_OF_PHOTOGRAPHER,
  saveItsMePage
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

    case FETCH_SHARED_PICTURES_BY_THEME_ID: {
      const themeId = action.themeId;
      api({
        method: 'GET',
        url: `picture/theme/${themeId}`,
      })
        .then((response) => {
          store.dispatch(saveSharedPicturesByTheme(response.data));
        })
        .catch((error) => {
          console.log(error)
        });
      break;
    }

    case FETCH_ITS_ME_PAGE_OF_PHOTOGRAPHER: {
      const id = 1; //now we have just one photographer, so we can hardcode the id
      api({
        method: 'GET',
        url: `page/its-me/photographer/${id}`,
      })
        .then((response) => {
          store.dispatch(saveItsMePage(response.data));
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