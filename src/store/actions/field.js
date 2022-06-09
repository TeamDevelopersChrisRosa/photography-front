export const CHANGE_VALUE = 'CHANGE_VALUE';


export const changeValue = (key, value) => ({
    type: CHANGE_VALUE,
    value,
    key,
  });