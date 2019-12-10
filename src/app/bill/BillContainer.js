import { connect } from 'react-redux';
import BillComponent from './BillComponent';

import { billOperations } from './duck'

const mapStateToProps = (state) => {
  return {
    listMenuItem: state.bill.listMenuItem,
    user : state.home.userInfo
  }
};

const mapDispatchToProps = (dispatch) => {
  const getListMenuItem = (branchId) => dispatch(billOperations.getListMenuItem(branchId));

  return {
    getListMenuItem
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillComponent);