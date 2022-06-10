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

        };
      }
      
      
      default:
        return state;
    }
  };
  
  export default reducer;