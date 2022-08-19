import {
    CHANGE_VALUE,
    INITIALIZE_FIELDS,
  } from '../actions/field';

  import {
    SAVE_USER,
    LOGOUT,
  } from '../actions/authentification';

  import {
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_ERROR,
    SAVE_RANDOM_PASSWORD
  } from '../actions/user';

  export const initialState = {
    email: '',
    password: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    newClientPassword: '',
  };

  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      case CHANGE_VALUE:
        return {
          ...state,
          [action.key]: action.value,
        };


      case SAVE_USER: {
        return {
            ...state,
            password:'',
        };
      }

      case CHANGE_PASSWORD_ERROR:
      case CHANGE_PASSWORD_SUCCESS: {
        return {
          ...state,
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        }
      }

      case SAVE_RANDOM_PASSWORD:{
        return {
        ...state,
        newClientPassword: action.randomPassword,
        }
      }

      case INITIALIZE_FIELDS:
        return {
          ...state,
          nameOfGallery: '',
          timeOfShooting: '',
        };


      case LOGOUT: {
        return {
          ...initialState
        }
      }

      default:
        return state;
    }
  };

  export default reducer;
