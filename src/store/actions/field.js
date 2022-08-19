export const CHANGE_VALUE = 'CHANGE_VALUE';
export const INITIALIZE_FIELDS = 'INITIALIZE_FIELDS';

export const changeValue = (key, value) => ({
    type: CHANGE_VALUE,
    value,
    key,
  });

export const initializeFields = () => ({
    type: INITIALIZE_FIELDS,
  });
