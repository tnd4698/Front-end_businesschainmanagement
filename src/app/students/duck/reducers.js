import types from './types';


const INITIAL_STATE = {
  listStudent : []
}


const studentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GETLISTSTUDENT:{
      return {
        ...state,
        listStudent: action.value
      }
    }
    

    default: return state;
  }
}

export default studentReducer;