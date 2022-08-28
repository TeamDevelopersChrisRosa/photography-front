export const DELETE_PICTURE = 'DELETE_PICTURE';
export const ADD_NEW_PICTURE = 'ADD_NEW_PICTURE';
export const ADD_PICTURE_IN_SHOOTING_ON_STATE = 'ADD_PICTURE_IN_SHOOTING_ON_STATE';
export const ADD_SUCCES_MESSAGE = 'ADD_SUCCES_MESSAGE';
export const SET_ADDED_PICTURE_TO_FALSE = 'SET_ADDED_PICTURE_TO_FALSE';

export const deletePicture = (pictureId) => ({
  type: 'DELETE_PICTURE',
  pictureId,
});

export const addNewPicture = (file, sizes, share) => ({
  type: 'ADD_NEW_PICTURE',
  file,
  sizes,
  share,
});

export const addPictureInShootingOnState = (picture) => ({
  type: 'ADD_PICTURE_IN_SHOOTING_ON_STATE',
  picture,
});

export const addSuccesMessage = (message) => ({
  type: 'ADD_SUCCES_MESSAGE',
  message,
});

export const setAddedPictureToFalse = () => ({
  type: 'SET_ADDED_PICTURE_TO_FALSE',
});