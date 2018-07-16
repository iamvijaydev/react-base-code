import React from 'react';
import PropTypes from 'prop-types';

const HomeComp = ({ home }) => (
  <div>
    <h2>Home</h2>
    <p>{home}</p>
  </div>
);

HomeComp.propTypes = {
  home: PropTypes.string.isRequired,
};
HomeComp.displayName = HomeComp;

export { HomeComp as default };
