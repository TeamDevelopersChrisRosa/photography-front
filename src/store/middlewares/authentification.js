import {
  LOGIN,
  saveUser,
  showErrorLoginMessage,
  FORGOT,
  createForgotErrorAction,
  createForgotAction,
} from './../actions/authentification';
import { fetchShootingsOfUser } from './../actions/shooting';

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
          console.log(response.data)
          localStorage.setItem('token', response.data.token);
          api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
          const actionSaveUser = saveUser(response.data);
          store.dispatch(actionSaveUser);
          if(response.data.user.client !== null) {
            const clientId = response.data.user.client.id;
            store.dispatch(fetchShootingsOfUser(clientId));
          }
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

      api({
        method: 'POST',
        url: '/auth/forgot-password',
        data: {
          email: state.field.email,
        },
      })
        .then((response) => {
          if (response.data === true ) {
          store.dispatch(createForgotAction());
          } else {
            store.dispatch(createForgotErrorAction());

          }
        })
        .catch((error) => {
          console.log('REPONSE DE FORGOT MIDDLEWARE', error);
        });
      break;
    }

    default:
      next(action);


  }
};

export default authmiddleware;
