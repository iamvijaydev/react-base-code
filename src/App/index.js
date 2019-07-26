import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import intl from 'react-intl-universal';

import whitetheme from '../../config/theme/whitetheme';
import darktheme from '../../config/theme/darktheme';
import AppGlobalStyles from './AppGlobalStyles';
import AppScrollToTop from './AppScrollToTop';
import AppRoutes from './AppRoutes';
import DemoLinks from './demo/DemoLinks';
import DemoSwitchThemeLocale from './demo/DemoSwitchThemeLocale';
import DemoModal from './demo/DemoModal';
import DemoStaticAssets from './demo/DemoStaticAssets';

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

  const loadTheme = useCallback(
    id => {
      changeTheme({ id });
    },
    [changeTheme]
  );

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
          <div>
            <DemoLinks />
            <AppRoutes />
          </div>
        </Router>
        <hr />

        <DemoSwitchThemeLocale
          heading={intl.get('app/switch_theme').d('Switch theme')}
          data={themes.data}
          selectedId={themes.selected.id}
          onChange={loadTheme}
        />
        <hr />
        <DemoSwitchThemeLocale
          heading={intl.get('app/switch_language').d('Switch language')}
          data={locale.data}
          selectedId={locale.selected.id}
          onChange={loadLocale}
        />
        <hr />
        <DemoModal />
        <hr />
        <DemoStaticAssets />
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
