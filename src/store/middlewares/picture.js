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
    // first we delete the picture on cloudinary and then we delete it on the database
      api({
        method: 'POST',
        url: 'picture/destroy',
        data: {
          publicId: action.publicId,
        },
      })
        .then((response) => {
          if (response.data.result === 'ok') {
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
            }
          })
        .catch((error) => {
            console.log(error)
          });
      break;
    }

    case UPLOAD_IMAGE: {
      // first we upload the image to cloudinary and then we save the picture in the database
      api({
        method: 'POST',
        url: 'picture/upload',
        data: action.formData, 
      })
        .then((response) => {
          api({
            method: 'POST',
            url: 'picture',
            data: {
              shootingId: action.shootingId,
              share: action.share,
              path: response.data.public_id,
              name: action.formData.get('file').name,
              secureUrl: response.data.secure_url,
              width: response.data.width,
              height: response.data.height,
            },
          })
            .then((response) => {
              store.dispatch(addPictureInShootingOnState(response.data, action.shootingId));
            })
            .catch((error) => {
                console.log(error)
              });
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
