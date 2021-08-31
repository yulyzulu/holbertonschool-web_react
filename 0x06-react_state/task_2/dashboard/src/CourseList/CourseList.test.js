import React from 'react';
import CourseList from './CourseList';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});;

describe('<CourseList /> test', () => {
  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ];

  it('Should render without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('Verify that when you pass a list of courses, the component renders it correctly', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find('CourseListRow')).toHaveLength(5);
  });

  it('Verify that CourseList renders correctly if you pass an empty array', () => {
    const array = [];
    const wrapper = shallow(<CourseList listCourses={array} />);
    expect(wrapper.find('CourseListRow')).toHaveLength(3);
  });

  it('Verify that CourseList renders correctly if you don’t pass the listCourses property', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(3);
  });
});
