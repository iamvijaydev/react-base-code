import React from 'react';
import intl from 'react-intl-universal';

import Modal from '../../components/Modal';

export default class DemoModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  onShowModal = () => {
    this.setState({ showModal: true });
  }

  onHideModal = () => {
    this.setState({ showModal: true });
  }

  renderModal = () => (
    this.state.showModal ? (
      <Modal onClose={this.onHideModal}>
        <div>
          <header><h2>{intl.get('app/modal_header').d('Modal header')}</h2></header>
          <hr />
          <article>
            <p>{intl.get('app/modal_text_line_1').d('This is an example of a modal!')}</p>
            <p>{intl.getHTML('app/modal_text_line_2').d('<code>Esc</code> works too, if onClose is passed ;)')}</p>
          </article>
          <hr />
          <footer>
            <button onClick={this.onHideModal}>{intl.get('common/close').d('Close')}</button>
          </footer>
        </div>
      </Modal>
    ) : null
  );

  render() {
    return (
      <div>
        <h3>{intl.get('app/modal_heading').d('Modal example (via React Portal)')}</h3>
        {this.renderModal()}
        <button
          disabled={this.state.showModal}
          onClick={this.onShowModal}
        >
          {intl.get('app/open_modal').d('Open modal')}
        </button>
      </div>
    );
  }
}
