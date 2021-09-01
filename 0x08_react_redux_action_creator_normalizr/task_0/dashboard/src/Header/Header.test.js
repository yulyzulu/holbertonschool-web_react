/**
 * @jest-environment jsdom
*/
import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header.js';
import { StyleSheetTestUtils } from 'aphrodite';
import { user, logOut} from '../App/AppContext';
import AppContext from '../App/AppContext.js';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Test <Header />', () => {
  it('Should render without crashing', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toBeTruthy();
  });

  it('Verify that the logoutSection is not created with a default context value', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).not.toBeTruthy();
  });

  it('Verify that the logoutSection is not created with a user defined', () => {
    const user1 = {
      email: 'vivi@gmail.com',
      password: '12345',
      isLoggedIn: true
    };
    const wrapper = mount(
      <AppContext.Provider value={{ user: user1, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBeTruthy();
  });

  it('Verify that the logoutSection is not created with a user defined and the logOut is linked to a spy', () => {
    const spy = jest.fn();
    const user1 = {
      email: 'vivi@gmail.com',
      password: '12345',
      isLoggedIn: true
    };
    const wrapper = mount(
      <AppContext.Provider value={{ user: user1, logOut: spy }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBeTruthy();
    wrapper.find('#logoutSection span i').simulate('click');
    expect(spy).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});