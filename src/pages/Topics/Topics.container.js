import { connect } from 'react-redux';

import TopicsComp from './Topics.component';

const mapState = state => ({
  topics: state.topics,
});

const mapDispatch = () => ({});

export default connect(mapState, mapDispatch)(TopicsComp);
