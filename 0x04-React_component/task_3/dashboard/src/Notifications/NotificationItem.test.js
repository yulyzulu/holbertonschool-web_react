import React from 'react';
import NotificationItem from "./NotificationItem";

import { shallow } from 'enzyme';

describe('<NotificationItem /> test', () => {
  it('Should render without crashing', () => {
      const wrapper = shallow(<NotificationItem />);
      expect(wrapper.exists()).toBeTruthy();
  });

  it('Should render correct html by passing dummy type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').text()).toEqual('test');
    expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
  });

  it('Should render correct html by passing a dummy html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
  });

  it('Check that when simulating a click on the component, the spy is called with the right ID argument', () => {
    const id = 5;
    const wrapper = shallow(<NotificationItem type="default" value="test" id={id} />);
    const instance = wrapper;
    instance.markAsRead = jest.fn();
    wrapper.find("li").first().simulate("click");
    instance.markAsRead(id);
    expect(instance.markAsRead).toHaveBeenCalledWith(5);
    jest.restoreAllMocks();
  });
});
