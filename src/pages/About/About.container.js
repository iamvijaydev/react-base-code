import { connect } from 'react-redux';

import AboutComp from './About.component';

const mapState = state => ({
  about: state.about,
});

const mapDispatch = () => ({});

export default connect(mapState, mapDispatch)(AboutComp);
