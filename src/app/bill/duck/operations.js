import { default as actions } from './actions'
import { getMenuItems } from '../../../api/BranchManagement/branchMamagenent'
import { addBill } from '../../../api/BillManagement/billManagement'
const  {addMenuItemToBill, removeMenuItemFromBill, resetBill} = actions;

const getListMenuItem = (branchId) => {
    return dispatch => {
        getMenuItems(branchId)
            .then(res => {
                dispatch(actions.getMenuItem(res.data));
            })
    }
}

const saveBill = bill => {
    return dispatch => {
        addBill(bill)
            .then(res => {
                console.log('print bill')
            })
    }
}

export default {
    getListMenuItem,
    addMenuItemToBill,
    removeMenuItemFromBill,
    resetBill,
    saveBill
}