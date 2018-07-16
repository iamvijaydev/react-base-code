import React from 'react';
import Loadable from 'react-loadable';

import ComponentLoading from '../../components/ComponentLoading';

const LoadableComponent = Loadable({
  loader: () => import('./About.container'),
  loading: ComponentLoading,
  timeout: 5000,
});

const About = props => <LoadableComponent {...props} />;

About.displayName = About;

export { About as default };
