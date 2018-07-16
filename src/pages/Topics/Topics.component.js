import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

import Topic from './components/Topic';
import Default from './components/Default';

const TopicsComp = ({ topics, match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      {
        topics.map(({
          id,
          topic,
        }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{topic}</Link>
          </li>
        ))
      }
    </ul>

    <Route
      path={`${match.url}/:topicId`}
      render={props => <Topic {...props} topics={topics} />}
    />
    <Route
      exact
      path={match.url}
      component={Default}
    />
  </div>
);

TopicsComp.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    topic: PropTypes.string,
  })).isRequired,
  match: PropTypes.object.isRequired,
};
TopicsComp.displayName = TopicsComp;

export { TopicsComp as default };
