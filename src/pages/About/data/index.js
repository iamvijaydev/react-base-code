const msg = 'I\'m a react shell code. (Lang: This should be translated from API)';

export default (state = msg, action) => {
  switch (action.type) {
    case 'FILL':
      return msg;

    default:
      return state;
  }
};

/**
 * Keep actioncreators.js and contants.js within this folder.
 * I know that once we need to sharing these two files
 * with the other page folders, its gets too messy!
 *
 * Please use rematch (Redux framework) to avoid creating these files:
 * https://github.com/rematch/rematch
 */
