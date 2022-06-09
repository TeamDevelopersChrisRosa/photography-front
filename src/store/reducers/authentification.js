import {
    SAVE_USER
  } from '../actions/authentification';
  
  export const initialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
  
      case SAVE_USER: {
        const { email, firstName, lastName } = action.payload;
        return {
            ...state,
            email,
            firstName,
            lastName,
            password: '',
        };
      }
      
      
      default:
        return state;
    }
  };
  
  export default reducer;