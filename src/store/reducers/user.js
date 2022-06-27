  import {
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_ERROR
  } from '../actions/user';
  
  export const initialState = {
    changePasswordSuccess : false,
    changePasswordSuccessMessage : '',
    changePasswordError : false,
    changePasswordErrorMessage : '',

  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      case CHANGE_PASSWORD_SUCCESS:
        return {
          ...state,
          changePasswordSuccess: true,
          changePasswordSuccessMessage: 'Mot de passe modifié avec succès'
        };
      
      case CHANGE_PASSWORD_ERROR:
        return {
          ...state,
          changePasswordError: true,
          changePasswordErrorMessage: 'Erreur lors de la modification du mot de passe'
        };
      
  
      
    
      default:
        return state;
    }
  };
  
  export default reducer;