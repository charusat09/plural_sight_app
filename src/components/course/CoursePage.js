import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import * as courseActions from '../../actions/CourseActions';

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={this.props.courses} />
      </div>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired
};

function mapToStateToProps(state, ownProps) {
  return {
    courses: state.courses //this is from rootReducer
  };
}

export default connect(mapToStateToProps)(CoursePage);
