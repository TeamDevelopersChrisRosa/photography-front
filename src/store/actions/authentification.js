export const LOGIN = 'LOGIN';
export const SAVE_USER = 'SAVE_USER';


export const login = () => ({
    type: LOGIN,
  });

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});