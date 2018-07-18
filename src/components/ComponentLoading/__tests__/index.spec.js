import React from 'react';
import { shallow } from 'enzyme';

import ComponentLoading from '../index';
import Placeholder from '../../Placeholder';

describe('<ComponentLoading /> component', () => {
  let defaultWrapper;
  let errorWrapper;
  let timedOutWrapper;
  let pastDelayWrapper;

  beforeAll(() => {
    defaultWrapper = shallow(<ComponentLoading />);
    errorWrapper = shallow(<ComponentLoading error />);
    timedOutWrapper = shallow(<ComponentLoading timedOut />);
    pastDelayWrapper = shallow(<ComponentLoading pastDelay />);
  });

  afterAll(() => {
    if (defaultWrapper) defaultWrapper.unmount();
    if (errorWrapper) errorWrapper.unmount();
    if (timedOutWrapper) timedOutWrapper.unmount();
    if (pastDelayWrapper) pastDelayWrapper.unmount();
  });

  it('should be defined', () => {
    expect(ComponentLoading).toBeDefined();
  });

  // this will create a snapshot folder here
  // that folder should be commited
  it('snapshot ok', () => {
    expect(defaultWrapper).toMatchSnapshot();
  });

  it('render message correctly', () => {
    expect(errorWrapper.get(0)).not.toBe(null);
    expect(timedOutWrapper.get(0)).not.toBe(null);
    expect(pastDelayWrapper.get(0)).not.toBe(null);
  });

  it('render empty correctly', () => {
    expect(defaultWrapper.get(0)).toBe(null);
  });
});
