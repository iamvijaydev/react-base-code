import React from 'react';
import Loadable from 'react-loadable';

import ComponentLoading from '../../components/ComponentLoading';

const LoadableComponent = Loadable({
  loader: () => import('./Topics.container'),
  loading: ComponentLoading,
  timeout: 5000,
});

const Topics = props => <LoadableComponent {...props} />;

Topics.displayName = Topics;

export { Topics as default };
