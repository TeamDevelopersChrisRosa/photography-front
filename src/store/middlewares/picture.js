//import Axios from 'axios';

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

      })
        .then((response) => {
          store.dispatch(refreshShooting(action.pictureId, action.shootingId));
        })
        .catch((error) => {
            console.log(error)
          });
      break;
    }

    case UPLOAD_IMAGE: {
      // envoyer un fichier image au serveur
      // on utilise FormData pour envoyer un fichier
      const formData = new FormData();
      formData.append('image', action.imageSelected);
      formData.append('share', action.share);
      formData.append('shootingId', action.shootingId);
      console.log('formData', formData);

      api({
        method: 'POST',
        url: 'picture',
        data: formData,
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
