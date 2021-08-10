import React from 'react';
import CourseList from './CourseList';
import { shallow } from 'enzyme';

describe('<CourseList /> test', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('Should render the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(5);
  });
});
