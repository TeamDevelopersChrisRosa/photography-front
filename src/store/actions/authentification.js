export const LOGIN = 'LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const LOGOUT = 'LOGOUT';
export const SHOW_ERROR_LOGIN_MESSAGE = 'SHOW_ERROR_LOGIN_MESSAGE';
export const SHOW_FORGOT_PASSWORD_FORM = 'SHOW_FORGOT_PASSWORD_FORM';
export const FORGOT = 'FORGOT';
export const FORGOT_ERROR = 'FORGOT_ERROR';
export const FORGOT_SUCCESS = 'FORGOT_SUCCESS';


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

export const showForgotPasswordForm = () => ({
  type: 'SHOW_FORGOT_PASSWORD_FORM',
});

export const forgot = () => ({ 
  type: FORGOT 
});

export const createForgotErrorAction = () => ({ 
  type: FORGOT_ERROR 
});

export const createForgotAction = () => ({
  type: FORGOT_SUCCESS,
});



