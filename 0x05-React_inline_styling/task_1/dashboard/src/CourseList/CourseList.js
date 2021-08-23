import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

function CourseList({ listCourses }) {
  return (
    <table id="CourseList" className={css(styles.courseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {
          listCourses.length === 0 &&
          (<CourseListRow textFirstCell="No course available yet" isHeader={false} />)
        }
        {
          listCourses && listCourses.map((course) => (
            <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
          ))
        }
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  courseList: {
    width: '90%',
    margin: '15px',
    marginLeft: '50px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray',
    borderCollapse: 'collapse'
  }
});

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;