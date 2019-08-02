import { init } from "@rematch/core";
import { session } from '../session';

let store;
const initialState = {
  isLoggedIn: false,
  token: '',
  email: '',
  first_name: '',
  last_name: '',
  role: []
};

describe('locale model', () => {
  beforeEach(() => {
    store = init({
      models: { session }
    });
  });

  it('should return the initial state', () => {
    expect(store.getState().session).toStrictEqual(initialState);
  });

  it('should do async login effect', async () => {
    await store.dispatch.session.onLogin();
    
    expect(store.getState().session.isLoggedIn).toBe(true);
    expect(store.getState().session.token.length).toBeGreaterThan(0);
  });

  it('should do async login fail effect', async () => {
    await store.dispatch.session.onLogin();

    store.dispatch.session.loginFail();

    expect(store.getState().session.isLoggedIn).toBe(false);
    expect(store.getState().session.token).toBe('');
  });

  it('should do async logout effect', async () => {
    store.dispatch.session.loginSuccess({ token: '4sj5mdd2jj3smx' });
    expect(store.getState().session.isLoggedIn).toBe(true);
    expect(store.getState().session.token.length).toBeGreaterThan(0);

    await store.dispatch.session.onLogout();
    
    expect(store.getState().session.isLoggedIn).toBe(false);
    expect(store.getState().session.token).toBe('');
  });
});
