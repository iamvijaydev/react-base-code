import React, { useState } from 'react';
import intl from 'react-intl-universal';

import Modal from '../../../../components/Modal'
import { ListItem, ListSubItem } from '../../styled';

const DemoModal = () => {
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);

  const hideModal = () => setShow(false);

  return (
    <>
      <ListItem>
        {intl.get('app/modal_heading').d('Modal example (via React Portal)')}
      </ListItem>
      <ListSubItem>
        <button type="button" disabled={show} onClick={showModal}>
          {intl.get('app/open_modal').d('Open modal')}
        </button>
      </ListSubItem>
      <Modal show={show} onClose={hideModal}>
        <div>
          <header>
            <h2>{intl.get('app/modal_header').d('Modal header')}</h2>
          </header>
          <hr />
          <article>
            <p>
              {intl
                .get('app/modal_text_line_1')
                .d('This is an example of a modal!')}
            </p>
            <p>
              {intl
                .getHTML('app/modal_text_line_2')
                .d('<code>Esc</code> works too, if onClose is passed ;)')}
            </p>
          </article>
          <hr />
          <footer>
            <button type="button" onClick={hideModal}>
              {intl.get('common/close').d('Close')}
            </button>
          </footer>
        </div>
      </Modal>
    </>
  );
};

export default DemoModal;
