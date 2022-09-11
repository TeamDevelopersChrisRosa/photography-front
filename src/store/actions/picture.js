export const DELETE_PICTURE = 'DELETE_PICTURE';
export const ADD_NEW_PICTURE = 'ADD_NEW_PICTURE';
export const ADD_PICTURE_IN_SHOOTING_ON_STATE = 'ADD_PICTURE_IN_SHOOTING_ON_STATE';
export const SET_ADDED_PICTURE_TO_FALSE = 'SET_ADDED_PICTURE_TO_FALSE';
export const SET_IS_LOADING = 'SET_IS_LOADING';

export const deletePicture = (pictureId, shootingId) => ({
  type: 'DELETE_PICTURE',
  pictureId,
  shootingId,
});

export const addNewPicture = (picture, share, shootingId) => ({
  type: 'ADD_NEW_PICTURE',
  picture,
  share,
  shootingId,
});

export const addPictureInShootingOnState = (picture, shootingId) => ({
  type: 'ADD_PICTURE_IN_SHOOTING_ON_STATE',
  picture,
  shootingId,
});

export const setAddedPictureToFalse = () => ({
  type: 'SET_ADDED_PICTURE_TO_FALSE',
});

export const setIsLoading = () => ({
  type: 'SET_IS_LOADING',
});