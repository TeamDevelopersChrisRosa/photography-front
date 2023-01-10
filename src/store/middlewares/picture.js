import {
  DELETE_PICTURE,
  UPLOAD_IMAGE,
  SET_FAVORITE,
} from '../actions/picture';

import api from './utils/api';

const picturemiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_PICTURE: {
      api({
        method: 'DELETE',
        url: `picture/${action.pictureId}`,
      })
        .then((response) => {
          // the picture is deleted on server, we have just to refresh the page to see it
          window.location.reload(false);
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
        //url: `picture/upload/${action.share}/${action.shootingId}`,
        url: `picture/upload/${action.shootingId}`,
        data: action.formData,        
      })
        .then((response) => {
          // the picture is added on server, we have just to refresh the page to see it
          window.location.reload(false);
        })
        .catch((error) => {
            console.log(error)
          });
      break;
    }

    case SET_FAVORITE: {
      console.log(store.getState().shooting.pictures);
      api({
        method: 'PATCH',
        url: `picture/${action.pictureId}`,
        data: {
          // set isFavorite in the opposite of the current value
          isFavorite: !store.getState().shooting.pictures.find(picture => picture.id === Number(action.pictureId)).isFavorite,
        },
      })
        .then((response) => {
          window.location.reload(false);
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
