import {
    SAVE_SHOOTINGS,
    SET_SHOOTING_ID,
    VALIDATE_FAVORITES_MESSAGE,
    ADD_SHOOTING_IN_STATE,
    REFRESH_THE_STATE_WITHOUT_THIS_SHOOTING,
    REFRESH_SHOOTING,
    SAVE_SHOOTING,
  } from '../actions/shooting';

  import { SET_IS_LOADING } from '../actions/picture';

  import {
    LOGOUT,
  } from '../actions/authentification';

  export const initialState = {
    shootings: [],
    isLoading: true,
    shooting: {},
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
          isLoading: false,
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

        case SET_IS_LOADING:
          return {
            ...state,
            isLoading: true,
          };

        case SAVE_SHOOTING:
          return {
            ...state,
            isLoading: false,
            shooting: action.shooting,
          };


      case LOGOUT:
        return initialState;

      default:
        return state;
    }
  };

  export default reducer;
