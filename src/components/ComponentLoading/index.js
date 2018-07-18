import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';

import Placeholder from '../Placeholder';
import Styled from './styled';

const ComponentLoading = ({
  error,
  timedOut,
  pastDelay,
}) => {
  if (error) {
    return (
      <Styled>
        <Placeholder
          message={intl.get('comp/fail_load_page').d('Failed to load page! Try refreshing.')}
          status="error"
        />
      </Styled>
    );
  } else if (timedOut) {
    return (
      <Styled>
        <Placeholder
          message={intl.get('comp/still_load_page').d('Still loading the page...')}
        />
      </Styled>
    );
  } else if (pastDelay) {
    return (
      <Styled>
        <Placeholder
          message={intl.get('comp/load_page').d('Loading the page...')}
        />
      </Styled>
    );
  }

  return null;
};

ComponentLoading.displayName = 'ComponentLoading';
ComponentLoading.defaultProps = {
  error: false,
  timedOut: false,
  pastDelay: false,
};
ComponentLoading.propTypes = {
  error: PropTypes.any,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool,
};

export { ComponentLoading as default };
