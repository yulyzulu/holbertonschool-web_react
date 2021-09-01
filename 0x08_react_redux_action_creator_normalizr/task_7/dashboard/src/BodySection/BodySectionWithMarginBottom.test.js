import React from 'react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<BodySectionWithMarginBottom /> test', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom />);
    expect(wrapper.exists()).toBeTruthy();
});

  it('Should render correctly a BodySection component and that the props are passed correctly to the child component', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title" >
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    expect(wrapper.find("BodySection")).toHaveLength(1);
    expect(wrapper.find("BodySection").props().title).toEqual('test title');
  })
});