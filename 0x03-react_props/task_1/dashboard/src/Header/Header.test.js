import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';

describe('Test <Header />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('Should render a img', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('div.App-header img')).toHaveLength(1);
  });

  it('Should render a h1', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('div.App-header h1')).toHaveLength(1);
  });
});