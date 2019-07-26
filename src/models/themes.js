const data = [{
  id: 'white_theme',
  name: 'White',
}, {
  id: 'dark_theme',
  name: 'Dark',
}];

const selected = data[0];

const initialState = {
  data,
  selected,
};

export const themes = {
  state: initialState,
  reducers: {
    changeTheme(state, payload) {
      return {
        data,
        selected: data.find(({ id }) => id === payload.id) || selected,
      };
    },
  },
};
