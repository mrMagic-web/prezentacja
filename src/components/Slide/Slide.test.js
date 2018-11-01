import React from 'react';
import { shallow } from 'enzyme';
import Slide from './Slide';

describe('<Slide />', () => {
  test('renders', () => {
    const wrapper = shallow(<Slide />);
    expect(wrapper).toMatchSnapshot();
  });
});
