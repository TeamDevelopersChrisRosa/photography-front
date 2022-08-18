import {
    SAVE_THEMES,
  } from '../actions/theme';



  export const initialState = {
    themes: [],
  };

  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      case SAVE_THEMES:
        return {
          ...state,
            themes: action.themes,
        };

      default:
        return state;
    }
  };

  export default reducer;
