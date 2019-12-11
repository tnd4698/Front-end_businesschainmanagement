import { connect } from 'react-redux';
import StudentsComponent from './StudentsComponent';
import {studentOperations} from './duck'

const mapStateToProps = state => {
  return {
    listStudent: state.student.listStudent
  }
};

const mapDispatchToProps = dispatch => {
    const getListStudent = (branch='null',tuition='null',status='1') => {
        dispatch(studentOperations.getListStudent(branch,tuition,status));
    }

    return {
        getListStudent
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentsComponent);