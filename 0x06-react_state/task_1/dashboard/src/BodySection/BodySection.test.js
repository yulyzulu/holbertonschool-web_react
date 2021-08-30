import React from 'react';
import BodySection from './BodySection';

import { shallow } from 'enzyme';

describe('<BodySection /> test', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<BodySection />);
    expect(wrapper.exists()).toBeTruthy();
});

  it('Should render correctly the children and one h2 element', () => {
      const wrapper = shallow(
        <BodySection title="test title">
          <p>test children node</p>
        </BodySection>
      );
      expect(wrapper.find('h2')).toHaveLength(1);
      expect(wrapper.find('h2').text('test title')).toBeTruthy();
      expect(wrapper.find('p')).toHaveLength(1);
      expect(wrapper.find('p').text('test children node')).toBeTruthy();
  });
});