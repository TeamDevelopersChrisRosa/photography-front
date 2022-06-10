export const LOGIN = 'LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const LOGOUT = 'LOGOUT';
export const SHOW_ERROR_LOGIN_MESSAGE = 'SHOW_ERROR_LOGIN_MESSAGE';


export const login = () => ({
    type: LOGIN,
  });

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});

export const showErrorLoginMessage = (message) => ({
  type: 'SHOW_ERROR_LOGIN_MESSAGE',
  message,
});