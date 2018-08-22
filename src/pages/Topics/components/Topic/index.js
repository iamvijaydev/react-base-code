import React from 'react';
import PropTypes from 'prop-types';

const Topic = ({ topics, match }) => {
  const found = topics.find(({ id }) => id === match.params.topicId);

  return (
    <div>
      <h5>{found.topic || ''}</h5>
    </div>
  );
};


Topic.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    topic: PropTypes.string,
  })).isRequired,
  match: PropTypes.object.isRequired,
};
Topic.displayName = Topic;

export { Topic as default };
