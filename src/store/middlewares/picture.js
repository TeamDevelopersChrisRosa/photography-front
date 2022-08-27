import {
  DELETE_PICTURE,
  ADD_NEW_PICTURE,
} from '../actions/picture';

import { refreshWantedShooting } from './../actions/shooting';

import api from './utils/api';

const picturemiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_PICTURE: {
      api({
        method: 'DELETE',
        url: `picture/${action.pictureId}`,

      })
        .then((response) => {
          console.log(response);
          store.dispatch(refreshWantedShooting(action.pictureId));
        })
        .catch((error) => {
            console.log(error)
          });
      break;
    }

    case ADD_NEW_PICTURE: {
      const state = store.getState();
      console.log(action.file);
      console.log(action.sizes);
      console.log(action.sizes.height);

      api({
        method: 'POST',
        url: 'picture',
        data: {
          name: action.file.name,
          path: action.file.name,
          share: false,
          width: action.sizes.width,
          height: action.sizes.height,
          shootingId: state.shooting.wantedShooting.id,

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





    default:
      next(action);


  }
};

export default picturemiddleware;
