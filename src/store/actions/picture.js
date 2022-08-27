export const DELETE_PICTURE = 'DELETE_PICTURE';
export const ADD_NEW_PICTURE = 'ADD_NEW_PICTURE';

export const deletePicture = (pictureId) => ({
  type: 'DELETE_PICTURE',
  pictureId,
});

export const addNewPicture = (file, sizes) => ({
  type: 'ADD_NEW_PICTURE',
  file,
  sizes,
});
