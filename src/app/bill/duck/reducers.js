import types from './types';

const INITIAL_STATE = {
  toggleText: 'default'
}
const billReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case types.TOGGLE: {
      const { value } = action;
      console.log('reducer');
      return {toggleText: value};
    }
    
    default: return state;
  }
}

export default billReducer;