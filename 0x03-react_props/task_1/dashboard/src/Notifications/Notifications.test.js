import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('<Notifications /> test', () => {
  it('Should render without crashing', () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.exists()).toBeTruthy();
  });
  it('Should render three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li')).toHaveLength(3);
  });
  it('Should render the text => Here is the list of notifications', () => {
      const wrapper = shallow(<Notifications />);
      const msg = 'Here is the list of notifications'
    expect(wrapper.find('.Notifications p').text()).toEqual(msg);
  })
});