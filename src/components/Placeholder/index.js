import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styled';

export const Placeholder = ({
  inline,
  status,
  message,
  actions,
}) => (
  <Styled inline={inline}>
    <Styled.Message
      inline={inline}
      status={status}
    >
      {message}
    </Styled.Message>
    {
      actions.map((action, index) => (
        <Styled.ActionBlock key={`index-${index * 2}`}>
          <Styled.Action>{action}</Styled.Action>
        </Styled.ActionBlock>
      ))
    }
  </Styled>
);

Placeholder.displayName = 'Placeholder';
Placeholder.defaultProps = {
  inline: false,
  status: 'default',
  actions: [],
};
Placeholder.propTypes = {
  inline: PropTypes.bool,
  status: PropTypes.oneOf([
    'success',
    'error',
    'default',
  ]),
  message: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.element),
};
