import React from 'react';
import { shallow } from 'enzyme';
import AnimatedWrapper from './AnimatedWrapper';

describe('<AnimatedWrapper />', () => {
  test('renders', () => {
    const wrapper = shallow(<AnimatedWrapper />);
    expect(wrapper).toMatchSnapshot();
  });
});
