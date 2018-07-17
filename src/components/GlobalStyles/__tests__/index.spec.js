import React from 'react';
import { shallow } from 'enzyme';

import GlobalStyles from '../index';
import whitetheme from '../../../../config/theme/whitetheme';

describe('<GlobalStyles /> component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<GlobalStyles theme={whitetheme} />);
  });

  afterAll(() => {
    if (wrapper) wrapper.unmount();
  });

  it('should be defined', () => {
    expect(GlobalStyles).toBeDefined();
  });

  it('snapshot ok', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render nothing', () => {
    expect(wrapper.get(0)).toBe(null);
  });

  it('should inject styles', () => {
    expect(document.getElementById('GLOBAL_STYLES').innerHTML).not.toHaveLength(0);
  });
});
