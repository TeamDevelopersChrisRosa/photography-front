import {
    SAVE_SHOOTINGS,
    SET_SHOOTING_ID,
   //SET_FAVORITE,
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
    id: null,
    date: null,
    time: null,
    pictures: [],
    favorites: [],
    photographer: null,
    client: null,
    theme: null,

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

      /* case SET_FAVORITE:
        let picture = state.pictures.find(picture => picture.id === Number(action.pictureId));

        if (state.favorites.includes(picture)) {
          state.favorites = state.favorites.filter(favorite => favorite.id !== picture.id);
        } else {
          state.favorites.push(picture);
        }
        return {
          ...state
        }; */

       

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
            id: action.shooting.id,
            date: action.shooting.date,
            time: action.shooting.time,
            pictures: action.shooting.pictures,
            photographer: action.shooting.photographer,
            client: action.shooting.client,
            favorites: [],
            theme: action.shooting.theme,
            nameOfGallery: action.shooting.nameOfGallery,
            rate: action.shooting.rate,
            // il manque des choses ....????
            
            isLoading: false,
          };


      case LOGOUT:
        return initialState;

      default:
        return state;
    }
  };

  export default reducer;
