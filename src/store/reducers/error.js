import {
    RESPONSE_ERROR,
    CLEAR_ERROR,
  } from '../actions/error';

  import {
    LOGOUT,
  } from '../actions/authentification';

export const initialState = {
    error: null,
    errorMessages: {
        400: 'Requête incorrecte',
        401: 'Vous n\'êtes pas autorisé à accéder à cette ressource',
        403: 'Vous n\'êtes pas autorisé à accéder à cette ressource',
        404: 'La ressource demandée n\'existe pas',
        500: 'Erreur interne du serveur',
        502: 'Erreur interne du serveur',
        503: 'Erreur interne du serveur',
        504: 'Erreur interne du serveur',
    },
};
  
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case RESPONSE_ERROR:
            return {
                ...state,
                error: action.error,
            }; 
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default reducer;