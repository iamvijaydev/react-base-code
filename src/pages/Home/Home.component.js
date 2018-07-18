import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';

const HomeComp = ({ home }) => (
  <div>
    <h2>{intl.get('menu/home').d('Home')}</h2>
    <p>{home}</p>
  </div>
);

HomeComp.propTypes = {
  home: PropTypes.string.isRequired,
};
HomeComp.displayName = HomeComp;

export { HomeComp as default };
