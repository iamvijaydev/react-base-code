import { useEffect } from 'react';
import { shape } from 'prop-types';

import dynamicStyles from 'Services/dynamicStyles';

const GlobalStyles = ({ theme }) => {
  useEffect(() => {
    const styles = `
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

      html,
      body,
      #root {
        width: 100%;
        height: 100%;
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

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: ${theme.secondaryFont}
      }

      p {
        margin: 0 0 1rem;
      }

      ::-webkit-input-placeholder {
        color: ${theme.colors.grey400};
      }
      ::-moz-placeholder {
        color: ${theme.colors.grey400};
      }
      :-ms-input-placeholder {
        color: ${theme.colors.grey400};
      }
      :-moz-placeholder {
        color: ${theme.colors.grey400};
      }

      #modal-root {
        position: relative;
        z-index: ${theme.zindex.modalx};
      }

      .app-container > div {
        margin: 0 0 0 30rem;
        padding: 2rem;
      }
    `;

    dynamicStyles('GLOBAL_STYLES', styles);
  }, [theme]);

  return null;
};

GlobalStyles.propTypes = {
  theme: shape({}).isRequired
};

export default GlobalStyles;
