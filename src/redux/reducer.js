import {
  UPDATE_USER_TYPE,
  UPDATE_HOME,
  SET_ACCESS_TOKEN,
} from "./actions";

const initialState = {
  accessToken: "",
  userType: null,
  updateHome: false,
  // updateCategory: false, 
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.value
      }

    case UPDATE_USER_TYPE:
      return {
        ...state,
        userType: action.value
      };
    case UPDATE_HOME:
      return {
        ...state,
        updateHome: action.value
      };

    // case UPDATE_CATEGORY:
    //   return {
    //     ...state,
    //     updateCategory: action.value
    //   };

    default: return state
  }
  // return state
};
export default reducer