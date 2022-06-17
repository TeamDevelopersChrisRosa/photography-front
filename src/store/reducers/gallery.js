import {
    SAVE_GALLERIES,
    SET_WANTED_GALLERY
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

      case LOGOUT:
        return initialState;
        
      
  
      
      default:
        return state;
    }
  };
  
  export default reducer;