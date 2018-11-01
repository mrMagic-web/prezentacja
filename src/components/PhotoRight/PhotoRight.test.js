import React from 'react';
import { shallow } from 'enzyme';
import PhotoRight from './PhotoRight';

describe('<PhotoRight />', () => {
  test('renders', () => {
    const wrapper = shallow(<PhotoRight />);
    expect(wrapper).toMatchSnapshot();
  });
});
