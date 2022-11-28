import {
    SAVE_SHOOTINGS,
    SET_SHOOTING_ID,
    SET_FAVORITE,
    VALIDATE_FAVORITES_MESSAGE,
    ADD_SHOOTING_IN_STATE,
    REFRESH_THE_STATE_WITHOUT_THIS_SHOOTING,
    REFRESH_SHOOTING,
  } from '../actions/shooting';

  import { ADD_PICTURE_IN_SHOOTING_ON_STATE, SET_IS_LOADING } from '../actions/picture';

  import {
    LOGOUT,
  } from '../actions/authentification';

  export const initialState = {
    shootings: [],
    isLoading: false,
  };

  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      case SAVE_SHOOTINGS:
        return {
          ...state,
            shootings: action.shootings,
        };

      case SET_SHOOTING_ID:
        return {
          ...state,
            shootingId: state.shootings.find(shooting => shooting.id === Number(action.shootingId).id),
        };

      case SET_FAVORITE:
        let shooting = state.shootings.find(shooting => shooting.id === action.shootingId);
        let picture = shooting.pictures.find(picture => picture.id === Number(action.pictureId));
        
        if (!shooting.favorites) {
          shooting.favorites = [];
        }

        if (shooting.favorites.includes(picture)) {
          shooting.favorites = shooting.favorites.filter(favorite => favorite.id !== picture.id);
        } else {
          shooting.favorites.push(picture);
        }
        return {
          ...state,
          shootings: state.shootings.map(shootings => shootings.id === shooting.id ? shooting : shootings),
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

      case REFRESH_SHOOTING:
        return {
          ...state,
          shootings: state.shootings.map(shooting => {
            if (shooting.id === action.shootingId) {
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
          isLoading: false,
          shootings: state.shootings.map(shooting => {
            if (Number(shooting.id) === Number(action.shootingId)) {
              return {
                ...shooting,
                pictures: [...shooting.pictures, action.picture],
              };
            }
            return shooting;
          }
        )};

        case SET_IS_LOADING:
          return {
            ...state,
            isLoading: true,
          };


      case LOGOUT:
        return initialState;

      default:
        return state;
    }
  };

  export default reducer;
