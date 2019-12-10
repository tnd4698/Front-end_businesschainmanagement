import { default as actions } from './actions'
import { getMenuItems } from '../../../api/BranchManagement/branchMamagenent'

const getListMenuItem = (branchId) => {
    return dispatch => {
        getMenuItems(branchId)
            .then(res => {
                dispatch(actions.getMenuItem(res.data));
            })
    }
}

export default {
    getListMenuItem
}