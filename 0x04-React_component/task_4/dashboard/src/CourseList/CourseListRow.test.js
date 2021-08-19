import React from 'react';
import CourseListRow from './CourseListRow';

import { shallow } from 'enzyme';

describe('<CourseListRow /> component test', () => {
  it('Test the component renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Available courses" isHeader={true} />);
    expect(wrapper.find('th').prop('colSpan')).toEqual('2');
    expect(wrapper.find('th').text()).toEqual('Available courses');
  });

  it('Test the component renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />);
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('Test the component renders correctly two td elements within a tr element', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} />);
    const trElement = wrapper.find('tr');
    expect(trElement.children('td')).toHaveLength(2);
  })

});