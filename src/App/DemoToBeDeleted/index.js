import React from 'react';

import DemoHeader from './components/DemoHeader';
import DemoLinks from './components/DemoLinks';
import DemoSwitchTheme from './components/DemoSwitchTheme';
import DemoSwitchLocale from './components/DemoSwitchLocale';
import DemoModal from './components/DemoModal';
import Styled from './styled';

const DemoToBeDeleted = () => (
  <Styled>
    <DemoHeader />
    <Styled.List>
      <DemoLinks />
      <DemoSwitchTheme />
      <DemoSwitchLocale />
      <DemoModal />
    </Styled.List>
  </Styled>
);

export default DemoToBeDeleted;
