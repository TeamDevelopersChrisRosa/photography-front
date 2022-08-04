import {
  FETCH_SHOOTINGS_OF_USER,
  saveShootings,
  ADD_NEW_SHOOTING
} from '../actions/shooting';

import api from './utils/api';

const shootingmiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SHOOTINGS_OF_USER: {
      const id = action.clientId;
      api({
        method: 'GET',
        url: `shooting/client/${id}`,

      })
        .then((response) => {
          store.dispatch(saveShootings(response.data));
        })
        .catch((error) => {
            console.log(error)
          });
      break;
    }

    case ADD_NEW_SHOOTING: {
      const state = store.getState();
      api({
        method: 'POST',
        url: `shooting`,
        data:{
          clientId: action.clientId,
          nameOfGallery: state.field.nameOfGallery,
          themeId: 2,
          photographerId: 1,
          rateId: 1,
          time: "test",
          date:"2020-01-01 00:00:00+01",
        }

      })
        .then((response) => {
          //store.dispatch(saveShootings(response.data));
          console.log(response.data)
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

export default shootingmiddleware;
