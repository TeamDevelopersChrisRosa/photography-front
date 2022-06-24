import {
    SAVE_PAGES,
  } from '../actions/visitor';



  
  
  export const initialState = {
    pages: [],
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case SAVE_PAGES:
            return {
                ...state,
                pages: action.pages,
            };

      

      default:
        return state;
    }
  };
  
  export default reducer;