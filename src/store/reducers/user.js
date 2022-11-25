  import {
    CHANGE_PASSWORD_SUCCESS,
    SAVE_ALL_CLIENTS_OF_PHOTOGRAPHER,
    SET_CLIENT
  } from '../actions/user';

  import {
    LOGOUT,
  } from '../actions/authentification';

  export const initialState = {
    changePasswordSuccess : false,
    changePasswordSuccessMessage : '',
    clients: [],
    client: {},

  };

  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      case CHANGE_PASSWORD_SUCCESS:
        return {
          ...state,
          changePasswordSuccess: true,
          changePasswordSuccessMessage: 'Mot de passe modifié avec succès'
        };
        
        case SAVE_ALL_CLIENTS_OF_PHOTOGRAPHER:
          return {
            ...state,
            clients: action.clients,
          };

        case SET_CLIENT:
          return {
            ...state,
            client: state.clients.find((client) => client.id === Number(action.clientId)),
          };

      case LOGOUT:
        return initialState;


      default:
        return state;
    }
  };

  export default reducer;
