import api from './utils/api';

import {
  UPDATE_USER,
  changePasswordSuccess,
  changePasswordError,
  changeFirstConnect,
  CHANGE_FIRST_CONNECT
} from '../actions/user';


const usermiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case UPDATE_USER: {
        const { userId, oldPassword, newPassword } = action;
      api({
        method: 'PATCH',
        url: `user/${userId}/password`,
        data: {
            oldPassword,
            newPassword
        }
      })
        .then((response) => {
            console.log(response);
            store.dispatch(changePasswordSuccess());
            store.dispatch(changeFirstConnect(userId));
        })
        .catch((error) => {
            console.log(error)
            store.dispatch(changePasswordError());
          });
      break;
    }

    case CHANGE_FIRST_CONNECT: {
      const clientId = store.getState().auth.client.id
    api({
      method: 'PATCH',
      url: `client/${clientId}`,
      data: {
        firstConnect : false
    }
    })
      .then((response) => {
      })
      .catch((error) => {
          console.log(error)
        });
    break;
  }







    default:
      next(action);


  }
};

export default usermiddleware;
