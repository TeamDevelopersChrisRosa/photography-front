import {
    SAVE_GALLERIES,
    SET_WANTED_GALLERY,
    SET_ID_IN_FAVORITE
  } from '../actions/gallery';

  import {
    LOGOUT,
  } from '../actions/authentification';
  
  export const initialState = {
    galleries: [],
    wantedGallery: {},
    favoriteIds: [],
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
        if (state.favoriteIds.includes(action.id)) {
          return {
            ...state,
            favoriteIds: state.favoriteIds.filter(id => id !== action.id),
          };
        } else {
          return {
            ...state,
            favoriteIds: [...state.favoriteIds, action.id],
          };
        }
        






      case LOGOUT:
        return initialState;
      
      default:
        return state;
    }
  };
  
  export default reducer;