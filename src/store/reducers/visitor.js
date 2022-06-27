import {
  SAVE_SHOOTING_PAGES,
  SAVE_PORTFOLIO_PAGES,
  SAVE_SHARED_PICTURES,
  } from '../actions/visitor';

  
  export const initialState = {
    shootingPages: [],
    portfolioPages: [],
    sharedPictures: [],
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case SAVE_SHOOTING_PAGES:
            return {
                ...state,
                shootingPages: action.shootingPages,
            };

        case SAVE_PORTFOLIO_PAGES:
            return {
                ...state,
                portfolioPages: action.portfolioPages,
            };

        case SAVE_SHARED_PICTURES:
            return {
                ...state,
                sharedPictures: action.sharedPictures,
            };


      

      default:
        return state;
    }
  };
  
  export default reducer;