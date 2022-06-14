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
    admin: false,
    client: [],
    isLogged: false,
    showErrorMessage: false,
    errorMessage: '',
    showForgotPasswordForm: false,
    messageForgot: false,
    successMessage: false,
    errorMessage: '',
    

  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
  
      case SAVE_USER: {
        const { email, firstName, lastName, admin, client } = action.payload.user;
        return {
            ...state,
            email,
            firstName,
            lastName,
            password:'',
            admin,
            client,
            isLogged: true,
            showErrorMessage: false,


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