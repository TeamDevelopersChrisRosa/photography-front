import {
    SAVE_GALLERIES,
    SET_WANTED_GALLERY,
    SET_ID_IN_FAVORITE,
    VALIDATE_FAVORITES_MESSAGE
  } from '../actions/gallery';

  import {
    LOGOUT,
  } from '../actions/authentification';
  
  export const initialState = {
    galleries: [],
    wantedGallery: {},
    
    
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      case SAVE_GALLERIES:
        return {
          ...state,
            galleries: action.galleries,
        };

      case SET_WANTED_GALLERY:
        return {
          ...state,
            wantedGallery: state.galleries.find(gallery => gallery.id === Number(action.galleryId)),
        };

      case SET_ID_IN_FAVORITE:
        if ( 'favoriteIds' + action.galleryId in state ) {
          if (state['favoriteIds' + action.galleryId].includes(Number(action.id))) {
            return {
              ...state,
              ['favoriteIds' + action.galleryId]: state['favoriteIds' + action.galleryId].filter(id => id !== Number(action.id)),
            };
            } else {
            return {
              ...state,
              ['favoriteIds' + action.galleryId]: [...state['favoriteIds' + action.galleryId], Number(action.id)],
            };
          }
        }
        return {
          ...state,
          ['favoriteIds' + action.galleryId]: [Number(action.id)],
        };

      case VALIDATE_FAVORITES_MESSAGE:
        if (action.response === 200 ) {
          return {
            ...state,
            ['validateFavoritesMessage' + action.galleryId]: 'Votre demande a bien été envoyée à votre photographe, vous recevrez très vite un mail vous informant la possibilité de télécharger vos photos.',
            ['sendEmailWithFavorites' + action.galleryId]: true,
          };
        } else {
          return {
            ...state,
            ['validateFavoritesMessage' + action.galleryId]: 'Une erreur est survenue, merci de recommencer.',
            ['sendEmailWithFavorites' + action.galleryId]: false,
          };
        }


        






      case LOGOUT:
        return initialState;
      
      default:
        return state;
    }
  };
  
  export default reducer;