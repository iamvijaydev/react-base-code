import { connect } from 'react-redux';

import DemoSwitchLocale from './component';

const mapState = ({ locale }) => ({
  locale: locale.data,
  selected: locale.selected,
});

const mapDispatch = ({ locale }) => ({
  changeLocale: locale.changeLocale,
});

export default connect(mapState, mapDispatch)(DemoSwitchLocale);
