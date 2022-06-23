export const FETCH_GALLERIES_OF_USER = 'FETCH_GALLERIES_OF_USER';
export const SAVE_GALLERIES = 'SAVE_GALLERIES';
export const SET_WANTED_GALLERY = 'SET_WANTED_GALLERY';
export const SET_ID_IN_FAVORITE = 'SET_ID_IN_FAVORITE';
export const VALIDATE_FAVORITES_MESSAGE = 'VALIDATE_FAVORITES_MESSAGE';

export const fetchGalleriesOfUser = (clientId) => ({
  type: 'FETCH_GALLERIES_OF_USER',
  clientId,
});

export const saveGalleries = (galleries) => ({
  type: 'SAVE_GALLERIES',
  galleries,
});

export const setWantedGallery = (galleryId) => ({
  type: 'SET_WANTED_GALLERY',
  galleryId,
});

export const setIdInFavorite = (id, galleryId) => ({
  type: 'SET_ID_IN_FAVORITE',
  id,
  galleryId,
});

export const getValidateFavoritesMessage = (response, galleryId) => ({
  type: 'VALIDATE_FAVORITES_MESSAGE',
  response,
  galleryId,
});
