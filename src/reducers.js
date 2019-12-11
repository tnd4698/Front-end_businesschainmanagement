import { combineReducers } from 'redux';
import  billReducer  from './app/bill/duck'
import homeReducer from './app/home/duck'
import tuitionReducer from './app/tuition/duck';
import studentReducer from './app/students/duck'

const rootReducer = combineReducers({
  home: homeReducer,
  bill: billReducer,
  tuition: tuitionReducer,
  student: studentReducer
});

export default rootReducer;