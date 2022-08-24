import {
    SAVE_THEMES,
    SHOW_RATES,
    SET_THEME,
  } from '../actions/theme';

  import {
    LOGOUT,
  } from '../actions/authentification';

  export const initialState = {
    themes: [],
    rates: [],
    theme: {},
  };

  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      case SAVE_THEMES:
        return {
          ...state,
            themes: action.themes,
        };

      case SHOW_RATES:
        return {
          ...state,
            rates: state.themes.find((theme) => theme.id === Number(action.themeId)).rates,
        };

      case SET_THEME:
        return {
          ...state,
            theme: state.themes.find((theme) => theme.id === Number(action.themeId)),
        };
        
      case LOGOUT:
        return initialState;
        

      default:
        return state;
    }
  };

  export default reducer;
