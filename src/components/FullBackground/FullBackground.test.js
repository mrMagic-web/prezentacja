import React from 'react';
import { shallow } from 'enzyme';
import FullBackground from './FullBackground';

describe('<FullBackground />', () => {
  test('renders', () => {
    const wrapper = shallow(<FullBackground />);
    expect(wrapper).toMatchSnapshot();
  });
});
