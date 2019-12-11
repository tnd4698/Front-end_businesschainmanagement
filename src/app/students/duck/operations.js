import { default as actions } from './actions'
import { getStudents } from '../../../api/StudentManagement/studentManagement'

const getListStudent = (branch = 'null', tuition = 'null', status = '1') => {
    return dispatch => {
        getStudents(branch, tuition, status)
            .then(res => {
                dispatch(actions.getListStudent(res.data));
            })
    }
}

export default {
    getListStudent
}