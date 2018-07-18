const topics = [{
  id: 'rendering',
  topic: 'Rendering with React (Lang: This should be translated from API)',
}, {
  id: 'components',
  topic: 'Understanding components (Lang: This should be translated from API)',
}, {
  id: 'props-v-state',
  topic: 'Props v. State (Lang: This should be translated from API)',
}];

export default (state = topics, action) => {
  switch (action.type) {
    case 'FILL':
      return [...topics];

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
