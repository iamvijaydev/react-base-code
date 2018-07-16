import React from 'react';
import PropTypes from 'prop-types';

const AboutComp = ({ about }) => (
  <div>
    <h2>About</h2>
    <p>{about}</p>
  </div>
);

AboutComp.propTypes = {
  about: PropTypes.string.isRequired,
};
AboutComp.displayName = AboutComp;

export { AboutComp as default };
