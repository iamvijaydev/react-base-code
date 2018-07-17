import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Styled from './styled';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.modalRoot = document.querySelector('#modal-root');
    this.el = document.createElement('div');

    this.state = {
      showModal: false,
    };
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);

    setTimeout(() => {
      this.setState({
        showModal: true,
      });
    }, 100);

    if (this.props.onClose) {
      window.addEventListener('keyup', this.onKeyUp, false);
    }
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
    if (this.props.onClose) {
      window.removeEventListener('keyup', this.onKeyUp);
    }
  }

  onKeyUp = (e) => {
    if (e.keyCode === 27) {
      this.props.onClose();
    }
  }

  wrapContent() {
    return (
      <Styled
        tabIndex="-1"
        role="dialog"
        showModal={this.state.showModal}
      >
        <Styled.Modal showModal={this.state.showModal}>
          {
            this.props.onClose &&
            <Styled.Close onClick={this.props.onClose}>(X)</Styled.Close>
          }
          <Styled.Content>
            {this.props.children}
          </Styled.Content>
        </Styled.Modal>
      </Styled>
    );
  }

  render() {
    return ReactDOM.createPortal(
      this.wrapContent(),
      this.el,
    );
  }
}

Modal.defaultProps = {
  onClose: false,
};
Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool,
  ]),
};
