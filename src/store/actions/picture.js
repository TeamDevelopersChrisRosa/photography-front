export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const DELETE_PICTURE = 'DELETE_PICTURE';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_FAVORITE = 'SET_FAVORITE';
export const SHARE_PICTURE = 'SHARE_PICTURE';


export const uploadImage = (formData, shootingId) => ({
  type: 'UPLOAD_IMAGE',
  formData,
  shootingId,
});

export const deletePicture = (pictureId, shootingId) => ({
  type: 'DELETE_PICTURE',
  pictureId,
  shootingId
});

export const setIsLoading = () => ({
  type: 'SET_IS_LOADING',
});

export const setFavorite = (pictureId) => ({
  type: 'SET_FAVORITE',
  pictureId,
});

export const sharePicture = (pictureId, shootingId) => ({
  type: 'SHARE_PICTURE',
  pictureId,
  shootingId,
});

