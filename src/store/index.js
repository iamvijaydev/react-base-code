import { createStore } from 'redux';

import rootreducer from './rootreducer';

export default createStore(rootreducer);

/**
 * This is just the basic redux config to show the various parts
 * Add proper middlewares and initial states for production code.
 *
 * Please use rematch (Redux framework) to avoid creating these files:
 * https://github.com/rematch/rematch
 */
