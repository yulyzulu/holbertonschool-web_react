import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Test <App />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('Should contain the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('Should contain the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('Should contain the Login component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('Should contain the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('Check that CourseList is not displayed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList').exists()).not.toBeTruthy();
  });
});

describe('Test when isLoggedIn is true', () => {
  it('Should verify that the Login component is not included', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('Login').exists()).not.toBeTruthy();
  });

  it('Should verify that the CourseList component is included', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('CourseList')).toBeTruthy();
  });

  it('Verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out', () => {
    const map = [];
    if (typeof window === 'object') {
      document.addEventListener = jest.find((event, cb) => {
        map[event] = cb;
        windows.alert = jest.find();
        shallow(<App />);
        map.keydown({ keyCode: 72, ctrlKey: true });
      });
      expect(window.alert).toHaveBeenCalledWith('Logging you out');
    }
  });
});