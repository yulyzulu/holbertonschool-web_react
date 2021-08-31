/**
 * @jest-environment jsdom
*/
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { user, logOut} from '../App/AppContext';
import AppContext from './AppContext';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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
    const wrapper = shallow(<App  />);
    expect(wrapper.find('Login').exists()).toBeTruthy();
  });

  it('Should verify that the CourseList component is included', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList')).toBeTruthy();
  });

  it('Verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out', () => {
    const map = {};
    const spy = jest.fn();

    if (typeof window === 'object') {
      document.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });
      window.alert = jest.fn();
      const wrapper = mount(
        <AppContext.Provider value={{ user, logOut }}>
          <App />
        </AppContext.Provider>
      );
      wrapper.setState({ logOut: spy });
      map.keydown({ keyCode: 72, ctrlKey: true });
      expect(window.alert).toHaveBeenCalledWith('Logging you out');
      expect(spy).toHaveBeenCalled();
      jest.restoreAllMocks();
    }
  });

  it('Verify that the default state for displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it('Verify that after calling handleDisplayDrawer, the state should now be true', () =>{
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it('Verify that after calling handleHideDrawer, the state is updated to be false', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it('Check if logOut is being called by verify if the state is updated correctly instead', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut}}>
        <App />
      </AppContext.Provider>
    );
    wrapper.instance().logOut();
    expect(wrapper.state().user).toEqual(user);
  });

  it('Verify that the logIn function updates the state correctly', () => {
    const user1 = {
      email: 'vivi@gmail.com',
      password: '12345',
      isLoggedIn: true
    };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut}}>
        <App />
      </AppContext.Provider>
    );
    wrapper.instance().logIn('vivi@gmail.com', '12345');
    expect(wrapper.state().user).toEqual(user1);
  });

  it('Verify that the logIn function updates the state correctly', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut}}>
        <App />
      </AppContext.Provider>
    );
    wrapper.instance().logIn('vivi@gmail.com', '12345');
    wrapper.instance().logOut();
    expect(wrapper.state().user).toEqual(user);
  });
});