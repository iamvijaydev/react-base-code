import React from 'react';
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

class App extends React.Component {
  componentDidMount() {
    this.loadLocale();
  }

  loadLocale = (locale) => {
    const hasLocale = check => this.props.locale.data.find(({ id }) => id === check);

    let currentLocale;

    if (!!locale && !hasLocale(locale)) {
      return;
    } else if (!!locale && hasLocale(locale)) {
      currentLocale = locale;
    } else {
      currentLocale = intl.determineLocale({
        cookieLocaleKey: 'lang',
      });

      if (!hasLocale(currentLocale)) {
        currentLocale = 'en-US';
      }
    }

    import(`../../config/locale/${currentLocale}.json`)
      .then(res => intl.init({
        currentLocale,
        locales: {
          [currentLocale]: res,
        },
      }))
      .then(() => {
        this.props.changeLocale(currentLocale);
      })
      .catch(() => {
        this.props.changeLocale(currentLocale);
      });
  }

  loadTheme = (themes) => {
    let theme = {};

    if (themes.selected.id === 'white_theme') {
      theme = whitetheme;
    } else if (themes.selected.id === 'dark_theme') {
      theme = darktheme;
    }

    return theme;
  }

  render() {
    const {
      themes,
      locale,
      changeTheme,
    } = this.props;
    const theme = this.loadTheme(themes);

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
            onChange={changeTheme}
          />
          <hr />
          <DemoSwitchThemeLocale
            heading={intl.get('app/switch_language').d('Switch language')}
            data={locale.data}
            selectedId={locale.selected.id}
            onChange={this.loadLocale}
          />
          <hr />
          <DemoModal />
          <hr />
          <DemoStaticAssets />
        </div>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  themes: PropTypes.object.isRequired,
  locale: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
  changeLocale: PropTypes.func.isRequired,
};

/**
 * Wrap App with redux to access
 * and update the theme
 */

const mapState = state => ({
  themes: state.themes,
  locale: state.locale,
});

const mapDispatch = dispatch => ({
  changeTheme: id => dispatch({
    type: 'CHANGE_THEME',
    id,
  }),
  changeLocale: id => dispatch({
    type: 'CHANGE_LOCALE',
    id,
  }),
});

export default connect(mapState, mapDispatch)(App);
