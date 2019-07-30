import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Styled from './styled';

const modalRoot = document.querySelector('#modal-root');
const el = document.createElement('div');

const Modal = ({ show, onClose, children }) => {

  const onKeyUp = useCallback(e => {
    if (e.keyCode === 27) {
      onClose();
    }
  });

  useEffect(
    () => {
      modalRoot.appendChild(el);
      if (onClose) {
        window.addEventListener('keyup', onKeyUp, false);
      }
    },
    () => {
      modalRoot.removeChild(el);
      if (onClose) {
        window.removeEventListener('keyup', onKeyUp);
      }
    }
  );

  const wrapContent = (
    <Styled tabIndex="-1" role="dialog" showModal={show}>
      <Styled.Modal showModal={show}>
        {onClose && (
          <Styled.Close onClick={onClose}>(X)</Styled.Close>
        )}
        <Styled.Content>{children}</Styled.Content>
      </Styled.Modal>
    </Styled>
  );

  return ReactDOM.createPortal(wrapContent, el);
};

Modal.defaultProps = {
  onClose: false
};
Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
};

export default Modal;
