import {
  DELETE_PICTURE,
  ADD_NEW_PICTURE,
  addPictureInShootingOnState,
  addSuccesMessage,
} from '../actions/picture';

import { refreshShooting } from './../actions/shooting';

import api from './utils/api';

const picturemiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_PICTURE: {
      api({
        method: 'DELETE',
        url: `picture/${action.pictureId}`,

      })
        .then((response) => {
          store.dispatch(refreshShooting(action.pictureId, action.shootingId));
        })
        .catch((error) => {
            console.log(error)
          });
      break;
    }

    case ADD_NEW_PICTURE: {
      api({
        method: 'POST',
        url: 'picture',
        data: {
          name: action.picture.original_filename,
          path: action.picture.public_id,
          share: action.share,
          width: action.picture.width,
          height: action.picture.height,
          shootingId: action.shootingId,
        } 

      })
        .then((response) => {
          store.dispatch(addPictureInShootingOnState(response.data, action.shootingId));
          store.dispatch(addSuccesMessage('Photo ajoutée avec succès'));
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
