import PropTypes from 'prop-types';

export default PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string,
  url: PropTypes.string,
  topic: PropTypes.string,
}));
