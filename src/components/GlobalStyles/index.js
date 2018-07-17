import React from 'react';
import PropTypes from 'prop-types';

import dynamicStyles from '../../services/dynamicStyles';

export default class GlobalStyles extends React.Component {
  static getStyles = theme => `
    html {
      font-size: 62.5%;
    }
    
    body {
      font-family: ${theme.primaryFont};
      font-size: 1.6rem;
      margin: 0;
      padding: 0;
      background: ${theme.backgroudColor};
      color: ${theme.textColor};
    }

    a {
      color: ${theme.linkColor};
      text-decoration: underline;
    }

    a:visited {
      color: ${theme.linkVisitedColor};
    }

    a:hover,
    a:active {
      color: ${theme.linkActiveColor};
    }

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      margin: 0;
    }

    ::-webkit-input-placeholder {
      color: ${theme.colors.gray200};
    }
    ::-moz-placeholder {
      color: ${theme.colors.gray200};
    }
    :-ms-input-placeholder {
      color: ${theme.colors.gray200};
    }
    :-moz-placeholder {
      color: ${theme.colors.gray200};
    }

    #modal-root {
      position: relative;
      z-index: ${theme.zindex.modalx};
    }
  `;

  constructor(props) {
    super(props);

    this.styleId = 'GLOBAL_STYLES';
  }

  componentWillMount() {
    dynamicStyles(this.styleId, GlobalStyles.getStyles(this.props.theme));
  }

  componentDidUpdate() {
    dynamicStyles(this.styleId, GlobalStyles.getStyles(this.props.theme));
  }

  render() {
    return null;
  }
}

GlobalStyles.propTypes = {
  theme: PropTypes.object.isRequired,
};
