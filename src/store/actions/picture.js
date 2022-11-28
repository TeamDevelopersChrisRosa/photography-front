export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const DELETE_PICTURE = 'DELETE_PICTURE';
export const ADD_PICTURE_IN_SHOOTING_ON_STATE = 'ADD_PICTURE_IN_SHOOTING_ON_STATE';
export const SET_IS_LOADING = 'SET_IS_LOADING';

export const uploadImage = (formData, shootingId, share) => ({
  type: 'UPLOAD_IMAGE',
  formData,
  shootingId,
  share,
});

export const deletePicture = (pictureId, shootingId, publicId) => ({
  type: 'DELETE_PICTURE',
  pictureId,
  shootingId,
  publicId,
});

export const addPictureInShootingOnState = (picture, shootingId) => ({
  type: 'ADD_PICTURE_IN_SHOOTING_ON_STATE',
  picture,
  shootingId,
});

export const setIsLoading = () => ({
  type: 'SET_IS_LOADING',
});

