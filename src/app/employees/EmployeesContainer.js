import { connect } from 'react-redux';
import EmployeesComponent from './EmployeesComponent';

import {branchOperations} from '../branches/duck'
import {employeeOperations} from './duck'

const mapStateToProps = state => {
    return {
        curUser : state.home.userInfo,
        curRole: state.home.role,
        listBranch: state.branch.listBranch,
        listRole: state.employee.listRole,
        listEmployee: state.employee.listEmployee
    }
};

const mapDispatchToProps = dispatch => {
    const getListBranch = () => dispatch(branchOperations.getListBranch())
    const getListRole = () => dispatch(employeeOperations.getListRole())
    const getListEmployee = (branch='null',role='null',status='1') => dispatch(employeeOperations.getListEmployee(branch,role,status))
    return {
        getListBranch,
        getListRole,
        getListEmployee
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeesComponent);