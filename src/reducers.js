import { combineReducers } from 'redux'
import  billReducer  from './app/bill/duck'
import homeReducer from './app/home/duck'
import tuitionReducer from './app/tuition/duck'
import studentReducer from './app/students/duck'
import branchReducer from './app/branches/duck'
import employeeReducer from './app/employees/duck'

const rootReducer = combineReducers({
  home: homeReducer,
  bill: billReducer,
  tuition: tuitionReducer,
  student: studentReducer,
  branch: branchReducer,
  employee: employeeReducer
});

export default rootReducer;