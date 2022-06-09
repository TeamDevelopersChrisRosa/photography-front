import { LOGIN, saveUser } from './../actions/authentification';

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
          console.log(response.data);
          const actionSaveUser = saveUser(response.data);
          store.dispatch(actionSaveUser);
        })
        .catch((error) => {
            console.log('coucou erreur', error)
          });
      break;
    }

    default:
      next(action);
    
    
  }
};

export default authmiddleware;