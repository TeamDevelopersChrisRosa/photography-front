import {
  DELETE_PICTURE,
  addPictureInShootingOnState,
  UPLOAD_IMAGE
} from '../actions/picture';

import { refreshShooting } from './../actions/shooting';

import api from './utils/api';

const picturemiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_PICTURE: {
      api({
        method: 'DELETE',
        url: `picture/${action.pictureId}`,
        data: {
          publicId: action.publicId,
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(refreshShooting(action.pictureId, action.shootingId));
        })
        .catch((error) => {
            console.log(error)
          });
      break;
    }

    case UPLOAD_IMAGE: {
      // we send the picture to the server in body, and with the shootingId and the share boolean in parameters
      api({
        method: 'POST',
        url: `picture/upload/${action.share}/${action.shootingId}`,
        data: action.formData,        
      })
        .then((response) => {
          store.dispatch(addPictureInShootingOnState(response.data, action.shootingId));
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
