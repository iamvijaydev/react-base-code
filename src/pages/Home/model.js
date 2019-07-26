const initialState = 'Hello everyone!  (Lang: This should be translated from API)';

export const home = {
  state: initialState,
  reducers: {
    changeMsg(state, msg) {
      return msg;
    },
  },
};
