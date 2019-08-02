const initialState = 'I\'m a react shell code. (Lang: This should be translated from API)';

export const about = {
  state: initialState,
  reducers: {
    changeMsg(state, msg) {
      return msg;
    },
  },
};
