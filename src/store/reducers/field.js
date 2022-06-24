import {
    CHANGE_VALUE,
  } from '../actions/field';

  import {
    SAVE_USER,
    LOGOUT,
  } from '../actions/authentification';
  
  export const initialState = {
    email: '',
    password: '',
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