import {
    SAVE_USER,
    LOGOUT,
    SHOW_ERROR_LOGIN_MESSAGE,
    SHOW_FORGOT_PASSWORD_FORM,
    FORGOT_ERROR,
    FORGOT_SUCCESS,
  } from '../actions/authentification';

  export const initialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    client: [],
    photographer: [],
    isLogged: false,
    showErrorMessage: false,
    errorMessage: '',
    showForgotPasswordForm: false,
    messageForgot: false,
    successMessage: false,
    id: null,
    isPhotographer: false,
    isClient: false,
  };

  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      case SAVE_USER: {
        const { email, firstName, lastName, client, photographer, id } = action.payload.user;
        return {
            ...state,
            email,
            firstName,
            lastName,
            password:'',
            client,
            photographer,
            id,
            isLogged: true,
            showErrorMessage: false,
            test: true,
            isPhotographer: photographer !== undefined && photographer !== null ? true : false,
            isClient: client !== undefined && client !== null ? true : false,
        };
      }

      case LOGOUT: {
        return {
          ...initialState
        }
      }

      case SHOW_ERROR_LOGIN_MESSAGE: {
        return {
          ...state,
          showErrorMessage: true,
          errorMessage: action.message,
        }
      }

      case SHOW_FORGOT_PASSWORD_FORM: {
        return {
          ...state,
          showForgotPasswordForm: !state.showForgotPasswordForm,
          messageForgot: true,
          errorMessage: false,
          successMessage: false,
        }
      }

      case FORGOT_ERROR: {
        return {
          ...state,
          messageForgot: false,
          errorMessage: true,
          successMessage: false,
          email: '',
        };
      }

      case FORGOT_SUCCESS: {
        return {
          ...state,
          messageForgot: false,
          errorMessage: false,
          successMessage: true,
          email: '',
        };
      }

      default:
        return state;
    }
  };

  export default reducer;
