import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/CourseActions';

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: { title: "" }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    // this.courseRow = this.courseRow.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
    // dispatch is attached here because we didn't pass
    // mapDispatchToProps in connect
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h1>Add Course</h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={this.onTitleChange}
            value={this.state.course.title}
            />
        </div>
        <input
          type="submit"
          className="btn"
          onClick={this.onClickSave}
          value="Add"
          />
      </div>
    );
  }
}

CoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapToStateToProps(state, ownProps) {
  return {
    courses: state.courses //this is from rootReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapToStateToProps, mapDispatchToProps)(CoursePage);
