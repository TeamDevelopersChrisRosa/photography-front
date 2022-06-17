export const FETCH_GALLERIES_OF_USER = 'FETCH_GALLERIES_OF_USER';
export const SAVE_GALLERIES = 'SAVE_GALLERIES';
export const SET_WANTED_GALLERY = 'SET_WANTED_GALLERY';

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

