import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('<Notifications /> test', () => {
  it('Should render without crashing', () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.exists()).toBeTruthy();
  });

  it('Check that the component renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem')).toBeTruthy();
  });

  it('Verify that the first NotificationItem element renders the right html', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem').first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });
});