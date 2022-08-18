import {
    FETCH_ALL_THEMES,
    saveThemes
  } from '../actions/theme';
  
  import api from './utils/api';
  
  const thememiddleware = (store) => (next) => (action) => {
    switch (action.type) {
      case FETCH_ALL_THEMES: {
        api({
          method: 'GET',
          url: `theme`,
  
        })
          .then((response) => {
            store.dispatch(saveThemes(response.data));
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
  
  export default thememiddleware;
  