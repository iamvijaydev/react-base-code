import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';

const AboutComp = ({ about }) => (
  <div>
    <h2>{intl.get('menu/about').d('About')}</h2>
    <p>{about}</p>
  </div>
);

AboutComp.propTypes = {
  about: PropTypes.string.isRequired,
};
AboutComp.displayName = AboutComp;

export { AboutComp as default };
