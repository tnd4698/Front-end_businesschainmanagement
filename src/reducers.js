import { combineReducers } from 'redux';
import  billReducer  from './app/bill/duck'

const rootReducer = combineReducers({
  bill: billReducer
});

export default rootReducer;