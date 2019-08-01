import React, { useEffect, useCallback } from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import intl from 'react-intl-universal';
import { BrowserRouter as Router } from 'react-router-dom';

import whitetheme from '../../config/theme/whitetheme';
import darktheme from '../../config/theme/darktheme';
import AppGlobalStyles from './AppGlobalStyles';
import AppScrollToTop from './AppScrollToTop';
import AppRoutes from './AppRoutes';
import DemoToBeDeleted from './DemoToBeDeleted';

const App = ({ selectedTheme, selectedLocale, locale, changeLocale }) => {

  // try and detect locale
  // just once when the app loads
  useEffect(() => {
    const currentLocale = intl.determineLocale({
      cookieLocaleKey: 'lang'
    });
    const hasLocale = locale.find(({ id }) => id === currentLocale)

    if (currentLocale !== selectedLocale && hasLocale) {
      changeLocale(currentLocale);
    }
  }, [changeLocale]);

  const getTheme = useCallback(() => {
    let theme = {};

    if (selectedTheme === 'white_theme') {
      theme = whitetheme;
    } else if (selectedTheme === 'dark_theme') {
      theme = darktheme;
    }

    return theme;
  });

  const theme = getTheme();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppGlobalStyles theme={theme} />
        <AppScrollToTop />
        <Router>
          <AppRoutes />
          <DemoToBeDeleted />
        </Router>
      </div>
    </ThemeProvider>
  );
};

App.propTypes = {
  locale: arrayOf(shape({ id: string, name: string })).isRequired,
  selectedLocale: string.isRequired,
  selectedTheme: string.isRequired,
  changeLocale: func.isRequired
};

/**
 * Wrap App with redux to access
 * and update the theme
 */

const mapState = ({ themes, locale }) => ({
  locale: locale.data,
  selectedLocale: locale.selected.id,
  selectedTheme: themes.selected.id
});

const mapDispatch = ({ locale }) => ({
  changeLocale: locale.changeLocale
});

export default connect(
  mapState,
  mapDispatch
)(App);
