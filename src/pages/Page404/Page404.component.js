import React from 'react';
import PropTypes from 'prop-types';

const Page404Comp = ({ location }) => (
  <div>
    <h2>404</h2>
    <p>No match for <code>{location.pathname}</code></p>
  </div>
);

Page404Comp.propTypes = {
  location: PropTypes.object.isRequired,
};
Page404Comp.displayName = Page404Comp;

export { Page404Comp as default };
