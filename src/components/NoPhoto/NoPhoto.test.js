import React from 'react';
import { shallow } from 'enzyme';
import NoPhoto from './NoPhoto';

describe('<NoPhoto />', () => {
  test('renders', () => {
    const wrapper = shallow(<NoPhoto />);
    expect(wrapper).toMatchSnapshot();
  });
});
