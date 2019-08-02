import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading'

import * as models from './models';

const loading = createLoadingPlugin({});

const store = init({
  models,
  plugins: [loading]
});

export default store;
