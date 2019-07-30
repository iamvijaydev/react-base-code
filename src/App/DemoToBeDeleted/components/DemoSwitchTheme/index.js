import { connect } from 'react-redux';

import DemoSwitchTheme from './component';

const mapState = ({ themes }) => ({
  themes: themes.data,
  selected: themes.selected,
});

const mapDispatch = ({ themes }) => ({
  changeTheme: themes.changeTheme,
});

export default connect(mapState, mapDispatch)(DemoSwitchTheme);
