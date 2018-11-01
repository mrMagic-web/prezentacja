import React from 'react';
import { shallow } from 'enzyme';
import PhotoLeft from './PhotoLeft';

describe('<PhotoLeft />', () => {
  test('renders', () => {
    const wrapper = shallow(<PhotoLeft />);
    expect(wrapper).toMatchSnapshot();
  });
});
