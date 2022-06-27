import api from './utils/api';

import { 
  UPDATE_USER,
  changePasswordSuccess,
  changePasswordError
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
        })
        .catch((error) => {
            console.log(error)
            store.dispatch(changePasswordError());
          });
      break;
    }


 




    default:
      next(action);
    
    
  }
};

export default usermiddleware;