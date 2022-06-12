import { 
  LOGIN, 
  saveUser,
  showErrorLoginMessage,
  FORGOT,
  createForgotErrorAction,
} from './../actions/authentification';

import api from './utils/api';

const authmiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      api({
        method: 'POST',
        url: 'auth/login',
        data: {
          username: state.field.email,
          password: state.field.password,
        },
      })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
          const actionSaveUser = saveUser(response.data);
          store.dispatch(actionSaveUser);
        })
        .catch((error) => {
            console.log(error)
            // show error message
            const message = 'Erreur d\'identifiants';
            store.dispatch(showErrorLoginMessage(message));
          });
      break;
    }

    case FORGOT: {
      const state = store.getState();
      // const { user: { email, password } } = store.getState();

      api({
        method: 'POST',
        url: '/login',
        data: {
          email: state.field.email,
        },
      })
        .then((response) => {
          console.log('REPONSE DE FORGOT MIDDLEWARE', response);
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(createForgotErrorAction());
        });
      break;
    }

    default:
      next(action);
    
    
  }
};

export default authmiddleware;