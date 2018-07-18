const data = [{
  id: 'en-US',
  value: 'en-US',
  name: 'English',
}, {
  id: 'fr-FR',
  value: 'fr-FR',
  name: 'French',
}, {
  id: 'ja-JP',
  value: 'ja-JP',
  name: 'Japanese',
}];
const selected = data[0];
export const initalState = {
  data,
  selected,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case 'CHANGE_LOCALE':
      return {
        data,
        selected: data.find(({ id }) => id === action.id) || selected,
      };

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
