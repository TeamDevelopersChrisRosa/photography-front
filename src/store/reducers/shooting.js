import {
    SAVE_SHOOTINGS,
    SET_WANTED_SHOOTING,
    SET_ID_IN_FAVORITE,
    VALIDATE_FAVORITES_MESSAGE,
    ADD_SHOOTING_IN_STATE,
    REFRESH_THE_STATE_WITHOUT_THIS_SHOOTING,
    REFRESH_WANTED_SHOOTING,
  } from '../actions/shooting';

  import { ADD_PICTURE_IN_SHOOTING_ON_STATE, ADD_NEW_PICTURE, ADD_SUCCES_MESSAGE, SET_ADDED_PICTURE_TO_FALSE } from '../actions/picture';

  import {
    LOGOUT,
  } from '../actions/authentification';

  export const initialState = {
    shootings: [],
    wantedShooting: {},
    addedPictureMessage: '',
    addedPicture: false,
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

      case ADD_SHOOTING_IN_STATE:
        return {
            ...state,
            shootings: [...state.shootings, action.shooting],
        }

      case REFRESH_THE_STATE_WITHOUT_THIS_SHOOTING:
        return {
          ...state,
          shootings: state.shootings.filter(shooting => shooting.id !== Number(action.shootingId)),
        }

      case REFRESH_WANTED_SHOOTING:
        return {
          ...state,
          wantedShooting: {
            ...state.wantedShooting,
            pictures: state.wantedShooting.pictures.filter(picture => picture.id !== Number(action.pictureId)),
          },
          shootings: state.shootings.map(shooting => {
            if (shooting.id === state.wantedShooting.id) {
              return {
                ...shooting,
                pictures: shooting.pictures.filter(picture => picture.id !== Number(action.pictureId)),
              };
            }
            return shooting;
          }
        )};
      
      case ADD_PICTURE_IN_SHOOTING_ON_STATE:
        return {
          ...state,
          wantedShooting: {
            ...state.wantedShooting,
            pictures: [...state.wantedShooting.pictures, action.picture],
          },
          shootings: state.shootings.map(shooting => {
            if (shooting.id === state.wantedShooting.id) {
              return {
                ...shooting,
                pictures: [...shooting.pictures, action.picture],
              };
            }
            return shooting;
          }
        )};

        case ADD_SUCCES_MESSAGE:
          return {
            ...state,
            addedPictureMessage: action.message,
            addedPicture: true,
          };

        case SET_ADDED_PICTURE_TO_FALSE:
          return {
            ...state,
            addedPicture: false,
          };


      case LOGOUT:
        return initialState;

      default:
        return state;
    }
  };

  export default reducer;
