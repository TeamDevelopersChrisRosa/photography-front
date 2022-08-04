export const UPDATE_USER = 'UPDATE_USER';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_ERROR = 'CHANGE_PASSWORD_ERROR';
export const REMOVE_PASSWORD_MESSAGE = 'REMOVE_PASSWORD_MESSAGE';
export const CHANGE_FIRST_CONNECT = 'CHANGE_FIRST_CONNECT';
export const ADD_NEW_CLIENT = 'ADD_NEW_CLIENT';
export const ADD_NEW_USER = 'ADD_NEW_USER';
export const SAVE_RANDOM_PASSWORD = 'SAVE_RANDOM_PASSWORD';
export const FETCH_CLIENTS_OF_PHOTOGRAPHER = 'FETCH_CLIENTS_OF_PHOTOGRAPHER';
export const SAVE_ALL_CLIENTS_OF_PHOTOGRAPHER = 'SAVE_ALL_CLIENTS_OF_PHOTOGRAPHER';

export const updateUser = (userId, oldPassword, newPassword) => ({
    type: 'UPDATE_USER',
    userId,
    oldPassword,
    newPassword
});

export const changePasswordSuccess = () => ({
    type: 'CHANGE_PASSWORD_SUCCESS'
});

export const changePasswordError = () => ({
    type: 'CHANGE_PASSWORD_ERROR'
});

export const removePasswordMessage = (name) => ({
    type: 'REMOVE_PASSWORD_MESSAGE',
    name
});

export const changeFirstConnect = (userId) => ({
  userId,
  type: 'CHANGE_FIRST_CONNECT'
});

export const addNewClient = (userId) => ({
  userId,
  type: 'ADD_NEW_CLIENT'
});

export const addNewUser = () => ({
  type: 'ADD_NEW_USER'
});

export const saveRandomPassword = (randomPassword) =>({
  randomPassword,
  type: 'SAVE_RANDOM_PASSWORD'
});

export const fetchClientsOfPhotographer = (photographerId) =>({
  photographerId,
  type: 'FETCH_CLIENTS_OF_PHOTOGRAPHER'
});

export const saveAllClientsOfPhotographer = (clients) => ({
  clients,
  type: 'SAVE_ALL_CLIENTS_OF_PHOTOGRAPHER'
})
