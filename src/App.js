import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './pages/Home';
import About from './pages/About';
import Topics from './pages/Topics';
import Page404 from './pages/Page404';

const App = ({
  themes,
  changeTheme,
}) => (
  <Router>
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
          <Link to="/404">404</Link>
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

      <ul>
        {
          themes.data.map(({ id, name }) => <button onClick={() => changeTheme(id)}>{ name }</button>)
        }
      </ul>
    </div>
  </Router>
);

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
