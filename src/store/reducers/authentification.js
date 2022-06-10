import {
    SAVE_USER,
    LOGOUT,
    SHOW_ERROR_LOGIN_MESSAGE
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
      
      default:
        return state;
    }
  };
  
  export default reducer;