import types from "./types";

const INITIAL_STATE = {
  listBranch: []
}
const branchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GETLISTBRANCH: {
      return {
        ...state,
        listBranch: action.value
      }
    }

    default: return state;
  }
}

export default branchReducer;