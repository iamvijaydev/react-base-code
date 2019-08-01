import React from 'react';
import intl from 'react-intl-universal';

import Styled from './styled';

const DemoHeader = () => (
  <Styled>
    <Styled.Heading>React Base Code</Styled.Heading>
    <div>
      <Styled.Link target="_blank" href="https://github.com/iamvijaydev/react-base-code">
        Github
      </Styled.Link>
    </div>
  </Styled>
);

export default DemoHeader;
