import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
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

const App = ({ themes, changeTheme, locale, changeLocale }) => {
  const loadLocale = useCallback(
    userLocale => {
      const hasLocale = check => locale.data.find(({ id }) => id === check);

      if (!!userLocale && !hasLocale(userLocale)) {
        return;
      }

      let currentLocale;

      if (!!userLocale && hasLocale(userLocale)) {
        currentLocale = userLocale;
      } else {
        currentLocale = intl.determineLocale({
          cookieLocaleKey: 'lang'
        });

        if (!hasLocale(currentLocale)) {
          currentLocale = 'en-US';
        }
      }

      const onChangeLocale = () => {
        changeLocale({ id: currentLocale });
      };

      import(`../../config/locale/${currentLocale}.json`)
        .then(res =>
          intl.init({
            currentLocale,
            locales: {
              [currentLocale]: res
            }
          })
        )
        .then(onChangeLocale)
        .catch(onChangeLocale);
    },
    [changeLocale]
  );

  useEffect(() => {
    loadLocale();
  }, [loadLocale]);

  const getTheme = useCallback(() => {
    let theme = {};

    if (themes.selected.id === 'white_theme') {
      theme = whitetheme;
    } else if (themes.selected.id === 'dark_theme') {
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
  themes: PropTypes.object.isRequired,
  locale: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
  changeLocale: PropTypes.func.isRequired
};

/**
 * Wrap App with redux to access
 * and update the theme
 */

const mapState = ({ themes, locale }) => ({
  themes,
  locale
});

const mapDispatch = ({ themes, locale }) => ({
  changeTheme: themes.changeTheme,
  changeLocale: locale.changeLocale
});

export default connect(
  mapState,
  mapDispatch
)(App);
