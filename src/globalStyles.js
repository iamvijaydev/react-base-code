import PropTypes from 'prop-types';
import { injectGlobal } from 'styled-components';

const GlobalStyles = ({ theme }) => {
  console.log('re-render');

  /* eslint-disable no-unused-expressions */
  injectGlobal`
    html {
      font-size: 62.5%;
    }
    
    body{
      font-family: ${theme.primaryFont};
      font-size: 1.6rem;
      margin: 0;
      padding: 0;
      background: ${theme.backgroudColor}
      color: ${theme.textColor}
    }

    a {
      &:hover {
        text-decoration: underline;
      }
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

    #content-wrapper {
      min-height: calc(100vh - 73px);
      background: ${theme.backgroudColor};
    }

    #modal-root {
      position: relative;
      z-index: ${theme.zindex.modalx};
    }

    .DayPickerInput {
      width: 100%;

      input {
        border: 1px solid ${theme.colors.gray200};
        border-radius: 4px;
        color: ${theme.textColor};
        font-size: 1.8rem;
        padding-bottom: 15px;
        padding-top: 15px;
        padding-left: '15px';
        padding-right: '15px';
        width: calc(100% - 32px);

        &:hover,
        &:focus {
          outline-offset: -4px;
        }

        &:hover {
          outline: 1px dashed rgba(0, 0, 0, 0.0.7);
        }

        &:focus {
          outline: 1px dashed rgba(0, 0, 0, 0.3);
        }
      }
    }
  `;

  return null;
};

GlobalStyles.propTypes = {
  theme: PropTypes.object.isRequired,
};
GlobalStyles.displayName = GlobalStyles;

export { GlobalStyles as default };
