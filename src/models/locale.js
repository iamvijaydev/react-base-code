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

const initialState = {
  data,
  selected,
};

export const locale = {
  state: initialState,
  reducers: {
    changeLocale(state, payload) {
      return {
        ...state,
        selected: data.find(({ id }) => id === payload.id) || state.selected,
      };
    },
  },
};
