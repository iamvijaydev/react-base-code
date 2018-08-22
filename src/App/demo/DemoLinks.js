import React from 'react';
import intl from 'react-intl-universal';
import { Link } from 'react-router-dom';

const DemoLinks = () => (
  <ul>
    <li>
      <Link to="/">{intl.get('menu/home').d('Home')}</Link>
    </li>
    <li>
      <Link to="/about">{intl.get('menu/about').d('About')}</Link>
    </li>
    <li>
      <Link to="/topics">{intl.get('menu/topics').d('Topics')}</Link>
    </li>
    <li>
      <Link to="/link-does-not-exist">404</Link>
    </li>
  </ul>
);

DemoLinks.displayName = 'DemoLinks';

export default DemoLinks;
