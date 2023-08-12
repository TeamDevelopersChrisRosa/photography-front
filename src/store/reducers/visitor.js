import {
  SAVE_SHOOTING_PAGES,
  SAVE_PORTFOLIO_PAGES,
  SAVE_SHARED_PICTURES_BY_THEME,
  SAVE_ITS_ME_PAGE,
  } from '../actions/visitor';

  import {
    LOGOUT,
  } from '../actions/authentification';

  export const initialState = {
    shootingPages: [],
    portfolioPages: [],
    portfolioPictures: [],
    itsMePage: [],
    submenuShootingPagesIsOpen: false,
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

        case SAVE_SHARED_PICTURES_BY_THEME:
            return {
                ...state,
                portfolioPictures: action.sharedPictures,
            };

        case SAVE_ITS_ME_PAGE:
            return {
                ...state,
                itsMePage: action.itsMePage,
            };

        

        case LOGOUT:
            return initialState;
            

      default:
        return state;
    }
  };
  
  export default reducer;