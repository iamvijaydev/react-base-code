import React from 'react';
import { shallow, mount } from 'enzyme';

import Placeholder from '../index';
import Styled from '../styled';

describe('<Placeholder /> component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Placeholder message="Hello world!" />);
  });

  afterAll(() => {
    if (wrapper) wrapper.unmount();
  });

  it('should be defined', () => {
    expect(Placeholder).toBeDefined();
  });

  it('snapshot ok', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly renders mesage', () => {
    expect(wrapper.find(Styled.Message).get(0)).not.toBe(null);
  });

  it('renders no actions by default', () => {
    expect(wrapper.find(Styled.ActionBlock).get(0)).toBe(undefined);
  });
});
