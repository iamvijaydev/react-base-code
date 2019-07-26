const initialState = {
  isLoggedIn: false,
  token: '',
  email: '',
  first_name: '',
  last_name: '',
  role: []
};

export const session = {
  state: initialState,
  reducers: {
    loginSuccess(state, payload) {
      return { ...state, isLoggedIn: true, payload };
    },
    loginFail() {
      return { ...initialState };
    },
    logoutSuccess() {
      return { ...initialState };
    }
  },
  effects: dispatch => ({
    async onLogin(payload, rootState) {
      try {
        const response = await new Promise(resolve => setTimeout(resolve, 1000));
  
        dispatch.session.loginSuccess(response.data);
      } catch(error) {
        dispatch.session.loginFail();
      }
    },
    async onLogout(payload, rootState) {
      // no need to await logout api to complete
      // lets clear the state
      dispatch.session.logoutSuccess();
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  })
};
