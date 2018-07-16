import React from 'react';
import PropTypes from 'prop-types';

import Placeholder from '../Placeholder';
import Styled from './styled';

const ComponentLoading = ({
  error,
  timedOut,
  pastDelay,
}) => {
  return <Styled>Loading</Styled>;
  if (error) {
    return (
      <Styled>
        <Placeholder message="Failed to load page! Try refreshing." status="error" />
      </Styled>
    );
  } else if (timedOut) {
    return (
      <Styled>
        <Placeholder message="Still loading the page..." />
      </Styled>
    );
  } else if (pastDelay) {
    return (
      <Styled>
        <Placeholder message="Loading the page..." />
      </Styled>
    );
  }

  return null;
};

ComponentLoading.displayName = 'ComponentLoading';
ComponentLoading.defaultProps = {
  error: false,
  timedOut: false,
  pastDelay: true,
};
ComponentLoading.propTypes = {
  error: PropTypes.any,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool,
};

export { ComponentLoading as default };
