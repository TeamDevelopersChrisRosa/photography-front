export const FETCH_SHOOTINGS_OF_USER = 'FETCH_SHOOTINGS_OF_USER';
export const FETCH_SHOOTINGS_OF_PHOTOGRAPHER = 'FETCH_SHOOTINGS_OF_PHOTOGRAPHER';
export const SAVE_SHOOTINGS = 'SAVE_SHOOTINGS';
export const SET_WANTED_SHOOTING = 'SET_WANTED_SHOOTING';
export const SET_ID_IN_FAVORITE = 'SET_ID_IN_FAVORITE';
export const VALIDATE_FAVORITES_MESSAGE = 'VALIDATE_FAVORITES_MESSAGE';
export const ADD_NEW_SHOOTING = 'ADD_NEW_SHOOTING';
export const ADD_SHOOTING_IN_STATE = 'ADD_SHOOTING_IN_STATE';
export const DELETE_SHOOTING = 'DELETE_SHOOTING';
export const REFRESH_THE_STATE_WITHOUT_THIS_SHOOTING = 'REFRESH_THE_STATE_WITHOUT_THIS_SHOOTING';

export const fetchShootingsOfUser = (clientId) => ({
  type: 'FETCH_SHOOTINGS_OF_USER',
  clientId,
});

export const fetchShootingsOfPhotographer = (photographerId) => ({
  type: 'FETCH_SHOOTINGS_OF_PHOTOGRAPHER',
  photographerId,
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

export const addNewShooting = (clientId, themeId, rateId, startDate) => ({
  clientId,
  themeId,
  rateId,
  startDate,
  type: 'ADD_NEW_SHOOTING'
})

export const addShootingInState = (shooting) =>({
  shooting,
  type: 'ADD_SHOOTING_IN_STATE'
})

export const deleteShooting = (shootingId) => ({
  shootingId,
  type: 'DELETE_SHOOTING'
})

export const refreshTheStateWithoutThisShooting = (shootingId) => ({
  shootingId,
  type: 'REFRESH_THE_STATE_WITHOUT_THIS_SHOOTING'
})
