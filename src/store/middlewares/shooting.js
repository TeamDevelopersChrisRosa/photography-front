import {
  FETCH_SHOOTINGS_OF_USER,
  FETCH_SHOOTINGS_OF_PHOTOGRAPHER,
  saveShootings,
  ADD_NEW_SHOOTING,
  fetchShootingsOfPhotographer
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

    case FETCH_SHOOTINGS_OF_PHOTOGRAPHER: {
      // const id = action.photographerId;
      // We don't use the photographerId because we have just 1 photographer
      api({
        method: 'GET',
        url: `shooting`,

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
          themeId: action.themeId,
          photographerId: state.auth.photographer.id,
          rateId: 1,
          time: "test",
          date:"2020-01-01 00:00:00+01",
        }

      })
        .then((response) => {
          const photographerId = 1; // TO DO: get the photographerId from the state
          store.dispatch(fetchShootingsOfPhotographer(photographerId));
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
