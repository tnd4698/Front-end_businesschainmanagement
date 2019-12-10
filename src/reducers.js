import { combineReducers } from 'redux';
import  billReducer  from './app/bill/duck'
import homeReducer from './app/home/duck'

const rootReducer = combineReducers({
  home: homeReducer,
  bill: billReducer,

});

export default rootReducer;