import { default as actions } from './actions'
import { getRoles } from '../../../api/AdminManagement/adminManagement'
import { getEmployees } from '../../../api/EmployeeManagement/employeeManagement'

const getListRole = () => {
    return dispatch => {
        getRoles()
            .then(res => {
                dispatch(actions.getListRole(res.data));
            })
    }
}

const getListEmployee = (branch = 'null', role = 'null', status = '1') => {
    return dispatch => {console.log('--------------')
        getEmployees(branch, role, status)
            .then(res => {
                dispatch(actions.getListEmployee(res.data));
            })
    }
}

export default {
    getListRole,
    getListEmployee
}