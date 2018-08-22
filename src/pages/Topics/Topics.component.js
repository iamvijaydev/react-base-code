import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import intl from 'react-intl-universal';

import Topic from './components/Topic';
import Default from './components/Default';

const TopicsComp = ({ topics, match }) => (
  <div>
    <h4>{intl.get('menu/topics').d('Topics')}</h4>
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
