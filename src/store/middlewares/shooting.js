import {
  FETCH_SHOOTINGS_OF_USER,
  FETCH_SHOOTINGS_OF_PHOTOGRAPHER,
  saveShootings,
  ADD_NEW_SHOOTING,
  addShootingInState,
  DELETE_SHOOTING,
  refreshTheStateWithoutThisShooting,
} from '../actions/shooting';

import { initializeFields } from '../actions/field';

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
          rateId: action.rateId,
          time: state.field.timeOfShooting,
          date: action.startDate,
        }

      })
        .then((response) => {
          //const photographerId = state.auth.photographer.id;
          store.dispatch(addShootingInState(response.data));
          store.dispatch(initializeFields())
        })
        .catch((error) => {
            console.log(error)
          });
      break;
    }

    case DELETE_SHOOTING: {
      //const state = store.getState();
      api({
        method: 'DELETE',
        url: `shooting/${action.shootingId}`,

      })
        .then((response) => {
          store.dispatch(refreshTheStateWithoutThisShooting(action.shootingId));
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
