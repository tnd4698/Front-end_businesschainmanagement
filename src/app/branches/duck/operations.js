import { default as actions } from './actions'
import { getBranches } from '../../../api/BranchManagement/branchMamagenent'

const getListBranch = (status='1') => {
    return dispatch => {
        getBranches(status)
        .then(res=>{console.log('res',res.data)
            dispatch(actions.getListBranch(res.data));
        })
    }
}

export default {
    getListBranch
}