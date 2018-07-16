import { combineReducers } from 'redux';

/** shared reducers, keep here, not in page */
import themes from './data/themes';
import session from './data/session';

/** individual reducers from each page */
import home from '../pages/Home/data';
import about from '../pages/About/data';
import topics from '../pages/Topics/data';

export default combineReducers({
  themes,
  session,
  home,
  about,
  topics,
});
