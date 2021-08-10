import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Test <Login />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('Should render 1 input tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('div.App-body input')).toHaveLength(2);
  });

  it('Should render two label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('div.App-body label')).toHaveLength(2);
  });
});