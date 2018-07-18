import React from 'react';
import intl from 'react-intl-universal';

const Default = () => (
  <div>
    <h3>{intl.get('app/select_topic').d('Please select a topic.')}</h3>
  </div>
);

Default.displayName = Default;

export { Default as default };
