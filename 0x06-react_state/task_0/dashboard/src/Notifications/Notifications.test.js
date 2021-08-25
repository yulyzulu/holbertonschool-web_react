import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<Notifications /> test', () => {
  it('Should render without crashing', () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.exists()).toBeTruthy();
  });

  it('Check that the component renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('NotificationItem')).toBeTruthy();
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

describe('<Notifications list/> test', () => {
  const listNotifications = [
    {
      id: 1,
      type: "default",
      value: "New course available",
    },
    {
      id: 2,
      type: "urgent",
      value: "New resume available",
    },
    { id: 3,
      type: "urgent",
      html: { __html: getLatestNotification() },
    },
  ];
  it('Verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem', () => {
      const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
      expect(wrapper.find('NotificationItem')).toHaveLength(3);
  });

  it('Verify that Notifications renders correctly if you pass an empty array', () => {
    const array = [];
    const wrapper = shallow(<Notifications displayDrawer listNotifications={array} />);
    expect(wrapper.find('NotificationItem').html()).toEqual('<li data-notification-type="default" class="blue_1tsdo2i-o_O-blueSmall_1wblo9d">No new notification for now</li>');
  });

  it('Verify that Notifications renders correctly if you don’t pass the listNotifications property', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('NotificationItem').html()).toEqual('<li data-notification-type="default" class="blue_1tsdo2i-o_O-blueSmall_1wblo9d">No new notification for now</li>');
  });

  it('Verify that when listNotifications is empty the message Here is the list of notifications is not displayed', () => {
    const array = [];
    const wrapper = shallow(<Notifications displayDrawer listNotifications={array} />);
    expect(wrapper.find('NotificationItem').html()).not.toEqual('<li data-notification-type="default" class="blue_1tsdo2i-o_O-blueSmall_1wblo9d">Here is the list of notifications</li>');
  });

  it('Check that when calling the function markAsRead on an instance of the component, the spy is being called with the right message', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    console.log = jest.fn();
    const instance = wrapper.instance();
    const id = 3;
    instance.markAsRead(id);
    expect(console.log).toHaveBeenCalledWith('Notification 3 has been marked as read');
    jest.restoreAllMocks();
  });

  it('Verify that clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />);
    wrapper.find('#menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
    jest.restoreAllMocks();
  });

  it('Verify that clicking on the button calls handleHideDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />);
    wrapper.find('#closeButton').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
    jest.restoreAllMocks();
  })
});