export const UPDATE_USER = 'UPDATE_USER';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_ERROR = 'CHANGE_PASSWORD_ERROR';   
export const REMOVE_PASSWORD_MESSAGE = 'REMOVE_PASSWORD_MESSAGE';

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