import { connect } from 'react-redux';
import BillComponent from './BillComponent';


import {default as actions }from'./duck/actions'

const mapStateToProps = (state) => {
  const { toggleText } = state.bill;
  return {
    toggleText
  }
};

const mapDispatchToProps = (dispatch) => {
  return { 
    fetchN:(text) => dispatch(actions.fetchN(text))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillComponent);