import {
    SAVE_USER
  } from '../actions/authentification';
  
  export const initialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    admin: false,
    client: [],
    isLogged: false,

  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
  
      case SAVE_USER: {
        console.log('isLogged', action.payload.isLogged);
        const { email, firstName, lastName, admin, client } = action.payload.user;
        const { isLogged } = action.payload.isLogged;
        return {
            ...state,
            email,
            firstName,
            lastName,
            password:'',
            admin,
            client,
            isLogged,

        };
      }
      
      
      default:
        return state;
    }
  };
  
  export default reducer;