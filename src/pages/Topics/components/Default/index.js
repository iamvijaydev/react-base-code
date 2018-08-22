import React from 'react';
import intl from 'react-intl-universal';

const Default = () => (
  <div>
    <h5>{intl.get('app/select_topic').d('Please select a topic.')}</h5>
  </div>
);

Default.displayName = Default;

export { Default as default };
