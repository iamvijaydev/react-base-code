import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import About from 'Pages/About';
import Topics from 'Pages/Topics';
import Page404 from 'Pages/Page404';

const AppRoutes = ({ show }) => {
  // in case if we want to hold off rendering routes
  // untill some API fetch to complete
  if (show) {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route component={Page404} />
      </Switch>
    );
  }

  return null;
};

AppRoutes.displayName = 'AppRoutes';
AppRoutes.defaultProps = {
  show: true
};
AppRoutes.propTypes = {
  show: PropTypes.bool
};

export default AppRoutes;
