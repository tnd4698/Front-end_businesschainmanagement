import { connect } from 'react-redux';
import BranchesComponent from './BranchesComponent';

import { branchOperations } from './duck'

const mapStateToProps = (state) => {
    return {
        listBranch: state.branch.listBranch
    }
};

const mapDispatchToProps = (dispatch) => {
    const getListBranch = (status = 1) =>
        dispatch(branchOperations.getListBranch(status));
        
    return {
        getListBranch
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BranchesComponent);