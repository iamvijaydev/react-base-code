const initialState = [{
  id: 'rendering',
  topic: 'Rendering with React (Lang: This should be translated from API)',
}, {
  id: 'components',
  topic: 'Understanding components (Lang: This should be translated from API)',
}, {
  id: 'props-v-state',
  topic: 'Props v. State (Lang: This should be translated from API)',
}];

export const topics = {
  state: initialState,
  reducers: {
    changeTopics(state, list) {
      return [...list];
    },
  },
};
