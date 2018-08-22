import React from 'react';
import intl from 'react-intl-universal';

const DemoStaticAssets = () => (
  <div>
    <h3>{intl.get('app/images_ref').d('Images referenced from:')} <code>~./assets/[image]</code></h3>
    <img src="/assets/social-sprite.png" alt="social icon sprites" />
  </div>
);

DemoStaticAssets.displayName = 'DemoStaticAssets';

export default DemoStaticAssets;
