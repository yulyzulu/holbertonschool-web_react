import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Test <App />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });
});