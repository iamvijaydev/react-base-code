import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import whitetheme from '../config/theme/whitetheme';
import darktheme from '../config/theme/darktheme';
import GlobalStyles from './components/GlobalStyles';

import Home from './pages/Home';
import About from './pages/About';
import Topics from './pages/Topics';
import Page404 from './pages/Page404';

const App = ({
  themes,
  changeTheme,
}) => {
  let theme = {};

  if (themes.selected.id === 'white_theme') {
    theme = whitetheme;
  } else if (themes.selected.id === 'dark_theme') {
    theme = darktheme;
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles theme={theme} />
        <Router>
          {/* Please update the code below for your project requirements */}
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
              <li>
                <Link to="/link-does-not-exist">404</Link>
              </li>
            </ul>

            <hr />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/topics" component={Topics} />
              <Route component={Page404} />
            </Switch>

            <hr />

            <h3>Theme</h3>
            <ul>
              {
                themes.data.map(({ id, name }) => (
                  <li key={id}>
                    <button
                      disabled={id === themes.selected.id}
                      onClick={() => changeTheme(id)}
                    >
                      {name}
                    </button>
                  </li>
                ))
              }
            </ul>

            <hr />

            <h3>Images from simply from: <code>~./assets/[image]</code></h3>
            <img src="/assets/social-sprite.png" alt="social icon sprites" />
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
};

App.propTypes = {
  themes: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};
App.displayName = App;

/**
 * Wrap App with redux to access
 * and update the theme
 */

const mapState = state => ({
  themes: state.themes,
});

const mapDispatch = dispatch => ({
  changeTheme: id => dispatch({
    type: 'CHANGE_THEME',
    id,
  }),
});

export default connect(mapState, mapDispatch)(App);
