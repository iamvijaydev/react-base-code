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
import intl from 'react-intl-universal';

import whitetheme from '../config/theme/whitetheme';
import darktheme from '../config/theme/darktheme';
import GlobalStyles from './components/GlobalStyles';
import Modal from './components/Modal';

import Home from './pages/Home';
import About from './pages/About';
import Topics from './pages/Topics';
import Page404 from './pages/Page404';

class App extends React.Component {
  static loadTheme = (themes) => {
    let theme = {};

    if (themes.selected.id === 'white_theme') {
      theme = whitetheme;
    } else if (themes.selected.id === 'dark_theme') {
      theme = darktheme;
    }

    return theme;
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  onModalClose = () => this.setState({ showModal: false });

  renderModal = () => (
    this.state.showModal ? (
      <Modal onClose={this.onModalClose}>
        <div>
          <header><h2>{intl.get('app/modal_header').d('Modal header')}</h2></header>
          <hr />
          <article>
            <p>{intl.get('app/modal_text_line_1').d('This is an example of a modal!')}</p>
            <p>{intl.getHTML('app/modal_text_line_2').d('<code>Esc</code> works too, if onClose is passed ;)')}</p>
          </article>
          <hr />
          <footer>
            <button onClick={this.onModalClose}>{intl.get('common/close').d('Close')}</button>
          </footer>
        </div>
      </Modal>
    ) : null
  );

  render() {
    const {
      themes,
      changeTheme,
    } = this.props;
    const theme = App.loadTheme(themes);

    return (
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyles theme={theme} />
          <Router>
            {/* Please update the code below for your project requirements */}
            <div>
              <ul>
                <li>
                  <Link to="/">{intl.get('menu/home').d('Home')}</Link>
                </li>
                <li>
                  <Link to="/about">{intl.get('menu/about').d('About')}</Link>
                </li>
                <li>
                  <Link to="/topics">{intl.get('menu/topics').d('Topics')}</Link>
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

              <h3>{intl.get('app/modal_heading').d('Modal example (via React Portal)')}</h3>
              {this.renderModal()}
              <button
                disabled={this.state.showModal}
                onClick={() => this.setState({ showModal: true })}
              >
                {intl.get('menu/open_modal').d('Open modal')}
              </button>

              <hr />

              <h3>{intl.get('menu/switch_theme').d('Switch Theme')}</h3>
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

              <h3>{intl.get('menu/switch_language').d('Switch Language')}</h3>
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

              <h3>{intl.get('menu/images_ref').d('Images referenced from:')} <code>~./assets/[image]</code></h3>
              <img src="/assets/social-sprite.png" alt="social icon sprites" />
            </div>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  themes: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

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
