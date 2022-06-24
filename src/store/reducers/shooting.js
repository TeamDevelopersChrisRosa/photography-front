import {
    SAVE_SHOOTINGS,
    SET_WANTED_SHOOTING,
    SET_ID_IN_FAVORITE,
    VALIDATE_FAVORITES_MESSAGE
  } from '../actions/shooting';

  import {
    LOGOUT,
  } from '../actions/authentification';
  
  export const initialState = {
    shootings: [],
    wantedShooting: {},
    
    
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      case SAVE_SHOOTINGS:
        return {
          ...state,
            shootings: action.shootings,
        };

      case SET_WANTED_SHOOTING:
        return {
          ...state,
            wantedShooting: state.shootings.find(shooting => shooting.id === Number(action.shootingId)),
        };

      case SET_ID_IN_FAVORITE:
        if ( 'favoriteIds' + action.shootingId in state ) {
          if (state['favoriteIds' + action.shootingId].includes(Number(action.id))) {
            return {
              ...state,
              ['favoriteIds' + action.shootingId]: state['favoriteIds' + action.shootingId].filter(id => id !== Number(action.id)),
            };
            } else {
            return {
              ...state,
              ['favoriteIds' + action.shootingId]: [...state['favoriteIds' + action.shootingId], Number(action.id)],
            };
          }
        }
        return {
          ...state,
          ['favoriteIds' + action.shootingId]: [Number(action.id)],
        };

      case VALIDATE_FAVORITES_MESSAGE:
        if (action.response === 200 ) {
          return {
            ...state,
            ['validateFavoritesMessage' + action.shootingId]: 'Votre demande a bien été envoyée à votre photographe, vous recevrez très vite un mail vous informant la possibilité de télécharger vos photos.',
            ['sendEmailWithFavorites' + action.shootingId]: true,
          };
        } else {
          return {
            ...state,
            ['validateFavoritesMessage' + action.shootingId]: 'Une erreur est survenue, merci de recommencer.',
            ['sendEmailWithFavorites' + action.shootingId]: false,
          };
        }


        






      case LOGOUT:
        return initialState;
      
      default:
        return state;
    }
  };
  
  export default reducer;