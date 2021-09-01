import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Test <Login />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('Test to verify that the submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').at(2).props().disabled).toEqual(true);
  });

  it('Test to verify that after changing the value of the two inputs, the button is enabled', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input').at(0).simulate('change', { target: { name: 'email', value: 'yulyzulu@hotmail.com'} });
    wrapper.find('input').at(1).simulate('change', { target: { name: 'password', value: '1234'} });
    expect(wrapper.find('input').at(2).props().disabled).toEqual(false);
  });
});