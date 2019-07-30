import React from 'react';

import DemoHeader from './components/DemoHeader';
import DemoLinks from './components/DemoLinks';
import DemoSwitchTheme from './components/DemoSwitchTheme';
import DemoSwitchLocale from './components/DemoSwitchLocale';
import DemoModal from './components/DemoModal';

const DemoToBeDeleted = () => (
  <aside>
    <DemoHeader />
    <ul>
      <DemoLinks />
      <DemoSwitchTheme />
      <DemoSwitchLocale />
      <DemoModal />
    </ul>
  </aside>
);

export default DemoToBeDeleted;
