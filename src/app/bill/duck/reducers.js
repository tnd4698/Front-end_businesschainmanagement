import types from "./types";

const INITIAL_STATE = {
  listMenuItem: [],

}
const billReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GETMENUITEM: {
      return {
        ...state,
        listMenuItem: action.value
      }
    }

    default: return state;
  }
}

export default billReducer;