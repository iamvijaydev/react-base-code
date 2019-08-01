import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { animated, useTransition } from 'react-spring';

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

  const wrapContent = () => {
    const baseStyle = {
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      opacity: 0
    };
    const maskTransition = useTransition(show, null, {
      from: { ...baseStyle },
      enter: { opacity: 1 },
      leave: { opacity: 0 }
    });
    const modalTransition = useTransition(show, null, {
      from: { ...baseStyle, transform: 'scale(0.9) translateY(3rem)' },
      enter: { opacity: 1, transform: 'scale(1) translateY(0)' },
      leave: { opacity: 0, transform: 'scale(0.9) translateY(3rem)' }
    });

    return (
      <div>
        <div>
          {maskTransition.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props}>
                  <Styled.Mask tabIndex="-1" />
                </animated.div>
              )
          )}
        </div>
        <div>
          {modalTransition.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props}>
                  <Styled.ModalWrap>
                    <Styled.Modal tabIndex="-1" role="dialog">
                      {onClose && (
                        <Styled.Modal.Close onClick={onClose}>
                          (X)
                        </Styled.Modal.Close>
                      )}
                      <Styled.Modal.Content>{children}</Styled.Modal.Content>
                    </Styled.Modal>
                  </Styled.ModalWrap>
                </animated.div>
              )
          )}
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(wrapContent(), el);
};

Modal.defaultProps = {
  onClose: false
};
Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
};

export default Modal;
