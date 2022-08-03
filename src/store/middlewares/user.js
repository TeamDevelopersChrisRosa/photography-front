import api from './utils/api';

import {
  UPDATE_USER,
  changePasswordSuccess,
  changePasswordError,
  changeFirstConnect,
  CHANGE_FIRST_CONNECT,
  ADD_NEW_USER,
  addNewClient,
  ADD_NEW_CLIENT,

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

  case ADD_NEW_CLIENT: {
    const state = store.getState();
    api({
      method: 'POST',
      url: `client`,
      data: {
        address: state.field.newClientAddress,
        postalCode: state.field.newClientPostalCode,
        city: state.field.newClientCity,
        country: state.field.newClientCountry,
        phoneNumber: state.field.newClientPhoneNumber,
        firstConnect: true,
        userId: action.userId,
      }
    })
      .then((response) => {
          console.log(response);
      })
      .catch((error) => {
          console.log(error)
        });
    break;
  }

  case ADD_NEW_USER: {
    const state = store.getState();
    api({
      method: 'POST',
      url: `auth/signup`,
      data: {
        firstName: state.field.newClientFirstName,
        lastName: state.field.newClientLastName,
        email: state.field.newClientEmail,
        password: state.field.newClientPassword,
      }
    })
      .then((response) => {
          console.log(response);
          store.dispatch(addNewClient(response.data.user.id))
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
