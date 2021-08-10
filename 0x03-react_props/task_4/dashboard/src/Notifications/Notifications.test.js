import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('<Notifications /> test', () => {
  it('Should render without crashing', () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.exists()).toBeTruthy();
  });

  it('Check that the component renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('NotificationItem')).toBeTruthy();
  });

  it('Verify that the first NotificationItem element renders the right html', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('NotificationItem').first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });

  it('Check that the menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem')).toBeTruthy();
  });

  it('Check that the div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications').exists()).not.toBeTruthy();
  });

  it('Check that the menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('.menuItem')).toBeTruthy();
  });

  it('Check that the div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('div.Notifications')).toBeTruthy();
  });
});