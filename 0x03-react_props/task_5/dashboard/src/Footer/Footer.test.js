import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer.js';

describe('Test <Footer />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('Should render the text Copyright', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('div.App-footer')).toHaveLength(1);
    expect(wrapper.find('div.App-footer').text()).toContain('Copyright');
  });
});