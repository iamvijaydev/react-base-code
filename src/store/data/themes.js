const data = [{
  id: 'white_theme',
  name: 'White',
}, {
  id: 'dark_theme',
  name: 'Dark',
}];
const selected = data[0];
export const initalState = {
  data,
  selected,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
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
