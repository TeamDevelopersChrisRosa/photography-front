import {
  LOGIN,
  saveUser,
  showErrorLoginMessage,
  FORGOT,
  createForgotErrorAction,
  createForgotAction,
} from './../actions/authentification';
import { fetchShootingsOfUser, fetchShootingsOfPhotographer } from './../actions/shooting';
import { fetchClientsOfPhotographer } from './../actions/user';
import { fetchAllThemes } from './../actions/theme';



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
          if(response.data.user.client) {
            const clientId = response.data.user.client.id;
            store.dispatch(fetchShootingsOfUser(clientId));
          }
          if(response.data.user.photographer) {
            const photographerId = response.data.user.photographer.id;
            store.dispatch(fetchClientsOfPhotographer(photographerId));
            store.dispatch(fetchShootingsOfPhotographer(photographerId));
            store.dispatch(fetchAllThemes());
          }
        })
        .catch((error) => {
            console.log(error)
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
