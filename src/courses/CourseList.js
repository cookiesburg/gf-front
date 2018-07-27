import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCourses } from './actions';
import AddCourseBtn from './AddCourseBtn';
import CourseTile from './CourseTile';

class CourseList extends Component {
  componentDidMount() {
    this.props.getCourses();
  }
  render() {
    const { courses, isLoaded } = this.props;
    if (!isLoaded) return <h1>loading courses...</h1>;
    return (
      <Fragment>
        <CourseWrapper>
          <LeftMargin />
          <AddCourseBtn />
          {courses.map(course => <CourseTile key={course.id}course={course}/>)}
          <RightMargin>
            <nav className='userLink'>
              <Link to='/'> USER LIST </Link>
            </nav>
          </RightMargin>
        </CourseWrapper>
    </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.courses.courses,
  isLoaded: state.courses.coursesLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCourses,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(CourseList);

const CourseWrapper = styled.div`
  display: grid;
  grid-template-columns: 32% 34% 32%;
  margin-top: 50px;
  width: 100%;
  margin-bottom: 30px;
`;
const LeftMargin = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 50;
`;
const RightMargin = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 50;
`;
