import React from 'react';
import intl from 'react-intl-universal';
import { Link } from 'react-router-dom';

import { ListItem, ListSubItem } from '../../styled';

const DemoLinks = () => (
  <>
    <ListItem>{intl.get('app/routing').d('Routing')}</ListItem>
    <ListSubItem>
      <Link to="/">{intl.get('menu/home').d('Home')}</Link>
    </ListSubItem>
    <ListSubItem>
      <Link to="/about">{intl.get('menu/about').d('About')}</Link>
    </ListSubItem>
    <ListSubItem>
      <Link to="/topics">{intl.get('menu/topics').d('Topics')}</Link>
    </ListSubItem>
    <ListSubItem>
      <Link to="/link-does-not-exist">404</Link>
    </ListSubItem>
  </>
);

export default DemoLinks;
