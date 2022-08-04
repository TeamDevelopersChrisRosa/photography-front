export const FETCH_SHOOTINGS_OF_USER = 'FETCH_SHOOTINGS_OF_USER';
export const SAVE_SHOOTINGS = 'SAVE_SHOOTINGS';
export const SET_WANTED_SHOOTING = 'SET_WANTED_SHOOTING';
export const SET_ID_IN_FAVORITE = 'SET_ID_IN_FAVORITE';
export const VALIDATE_FAVORITES_MESSAGE = 'VALIDATE_FAVORITES_MESSAGE';
export const ADD_NEW_SHOOTING = 'ADD_NEW_SHOOTING';

export const fetchShootingsOfUser = (clientId) => ({
  type: 'FETCH_SHOOTINGS_OF_USER',
  clientId,
});

export const saveShootings = (shootings) => ({
  type: 'SAVE_SHOOTINGS',
  shootings,
});

export const setWantedShooting = (shootingId) => ({
  type: 'SET_WANTED_SHOOTING',
  shootingId,
});

export const setIdInFavorite = (id, shootingId) => ({
  type: 'SET_ID_IN_FAVORITE',
  id,
  shootingId,
});

export const getValidateFavoritesMessage = (response, shootingId) => ({
  type: 'VALIDATE_FAVORITES_MESSAGE',
  response,
  shootingId,
});

export const addNewShooting = (clientId) => ({
  clientId,
  type: 'ADD_NEW_SHOOTING'
})
