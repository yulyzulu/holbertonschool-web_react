/**
 * @jest-environment jsdom
*/
import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer.js';
import { StyleSheetTestUtils } from 'aphrodite';
import { user, logOut } from '../App/AppContext';
import AppContext from '../App/AppContext';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Test <Footer />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('Verify that the link is not displayed when the user is logged out within the context', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).not.toBeTruthy();
  });

  it('Verify that the link is displayed when the user is logged in within the context', () => {
    const user1 = {
      email: 'vivi@gmail.com',
      password: '12345',
      isLoggedIn: true
    };
    const wrapper = mount(
      <AppContext.Provider value={{ user: user1, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBeTruthy();
  });
});