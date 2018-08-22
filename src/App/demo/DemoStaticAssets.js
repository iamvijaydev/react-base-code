import React from 'react';
import intl from 'react-intl-universal';

const DemoStaticAssets = () => (
  <div>
    <h3>{intl.get('app/images_ref').d('Images referenced from:')} <code>/assets/[image]</code></h3>
    <p>All the source code is compiled to <code>dist/</code> folder. As this is where the server will/should start, webpack will also moved all static file added in <code>config/assets/</code> to <code>dist/assets/</code>. Thus allowing you can absolute reference any assets files in your source code. File loaders bye bye. 👋</p>
    <p>The code for the image below is: <code>&lt;img src=&quot;/assets/social-sprite.png&quot; alt=&quot;social icon sprites&quot; /&gt;</code></p>
    <img src="/assets/social-sprite.png" alt="social icon sprites" />
  </div>
);

DemoStaticAssets.displayName = 'DemoStaticAssets';

export default DemoStaticAssets;
