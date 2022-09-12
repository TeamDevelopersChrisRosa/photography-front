import Axios from 'axios';

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
      const formData = new FormData();
      formData.append("file", action.imageSelected);
      formData.append("upload_preset", process.env.REACT_APP_CLN_UPLOAD_PRESET);

      Axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLN_CLOUD_NAME}/image/upload/`,
        formData,
      ).then((response) => {
        console.log(response.data);
        api({
          method: 'POST',
          url: 'picture',
          data: {
            name: response.data.original_filename,
            path: response.data.public_id,
            share: action.share,
            width: response.data.width,
            height: response.data.height,
            shootingId: action.shootingId,
          } 
        })
          .then((response) => {
            store.dispatch(addPictureInShootingOnState(response.data, action.shootingId));
          })
          .catch((error) => {
              console.log(error)
              //TODO: handle error
            });
      }).catch((error) => {
        console.log(error);
        // TODO: dispatch error
      })
      break;
    }


    default:
      next(action);


  }
};

export default picturemiddleware;
